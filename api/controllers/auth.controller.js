import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json("User created Successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
