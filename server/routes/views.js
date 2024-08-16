const express = require('express');
const router = express.Router();
const View = require('../models/View');
const UserLogin = require('../models/UserLogin'); // Renamed to UserLogin to match the model name

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch the user by email
    const user = await UserLogin.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // For hashed passwords, compare using bcrypt (example shown below)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Successful login
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});

// GET all views
router.get('/', async (req, res) => {
  try {
    const views = await View.find();
    res.json(views);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new view
router.post('/view', async (req, res) => {
  const { topic, description, imageUrl } = req.body;
  const newView = new View({ topic, description, imageUrl });
  try {
    const savedView = await newView.save();
    res.status(201).json(savedView);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all views (duplicate route; you might want to remove one of them)
router.get('/fetch', async (req, res) => {
  try {
    const views = await View.find(); // Fetch all documents
    res.json(views);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve views', error: err.message });
  }
});

// POST login credentials
router.post('/create', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await UserLogin.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newLogin = new UserLogin({ username, email, password });
    const savedLogin = await newLogin.save();
    res.status(201).json(savedLogin);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
});


// SEARCH views by topic
router.get('/search', async (req, res) => {
  const { topic } = req.query; // Get topic from query parameters
  try {
    const views = await View.find({ topic: new RegExp(topic, 'i') }); // Case-insensitive search
    if (views.length === 0) {
      return res.status(404).json({ message: 'No views found' });
    }
    res.json(views);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve views', error: err.message });
  }
});



module.exports = router; // CommonJS export
