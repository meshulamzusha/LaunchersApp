import { User } from "./auth.model.js";
import jwt from "jsonwebtoken";

export const createUserService = async (userDetails) => {
  try {
    const user = await User.create({
      username: userDetails.username,
      password: userDetails.password,
      email: userDetails.email,
      userType: userDetails.userType,
    });

    return user;
  } catch (error) {
    console.log(error);
    throw (new Error("User creation failed").status = 500);
  }
};

export const loginService = async (username, password) => {
  try {
    const user = await User.findOneAndUpdate({ username: username });
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      throw err;
    }

    if (user.password != password) {
      const err = new Error("Unauthorized");
      err.status = 401;
      throw err;
    }

    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { lastLogin: new Date().toLocaleString() },
    );

    const token = jwt.sign(
      {
        username: updatedUser.username,
        userType: updatedUser.userType,
        id: updatedUser._id,
        lastLogin: updatedUser.lastLogin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    return {token, user};
  } catch (error) {
    console.log(error);
    const err = new Error("Internal server error");
    err.status = 500;
    throw err;
  }
};

export const deleteUserService = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      const error = new Error("User deleting failed");
      error.status = 500;
      throw error;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
