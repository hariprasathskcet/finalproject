const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const viewRoutes = require('./routes/views');
const userRoutes = require('./routes/UserRouter');

const app = express();
// const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://727722euec055:hari17%4018@cluster0.i5x3j.mongodb.net/hosting', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// API Routes
app.use('/', viewRoutes);
// app.use('/route', userRoutes);

app.listen(3005, () => {
  console.log("server connected");
  // console.log("mongo connected");
});