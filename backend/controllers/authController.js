const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  
  const user = new User({ username, password: password, role });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Username is wrong');

    const validPass = bcrypt.compareSync(req.body.password, user.password);
    console.log(user.password);
    console.log(validPass);
    if (!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.status(200).header('Authorization', token).send(token);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.updateProfile = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { profile: { name, email, phone } },
      { new: true }
    ).select('-password');
    res.send(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};