const Register=require('../models/UserLogin.js');

const create = async (req, res) => {
  try {
    const userDetails = new Register(req.body);
    const { email } = userDetails;
    const isExist = await Register.findOne({ email });

    if (isExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await userDetails.save();
    res.status(201).json(newUser); // Use status(201) for successful creation
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const fetch = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Register.findOne({ email, password }) ;
  
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
module.exports={create,fetch};