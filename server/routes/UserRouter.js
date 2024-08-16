// routes/UserRouter.js
const express=require('express') 
const { create } =require('../Controller/UserController.js');
const { fetch } =require('../Controller/UserController.js');


const route = express.Router();

route.post('/create', create);
route.post('/fetch', fetch);

// // Endpoint to add a language
// route.post('/api/languages', async (req, res) => {
//   const { name, url } = req.body;
//   try {
//     const newLanguage = new Language({ name, url });
//     await newLanguage.save();
//     res.status(201).send('Language added successfully!');
//   } catch (error) {
//     res.status(500).send('Error adding language.');
//   }
// });

// // Endpoint to get languages
// route.get('/api/languages', async (req, res) => {
//   try {
//     const languages = await Language.find();
//     res.json(languages);
//   } catch (error) {
//     res.status(500).send('Error fetching languages.');
//   }
// });

// route.get('/api/')
module.exports=route;
