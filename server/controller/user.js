import { User } from "../model/user.js";

export const create = async (req, res) => {
  try {
    const { name, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "This email has already been taken",
      });
    }

    const newUser = await User.create({ name, email });

    return res.json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};