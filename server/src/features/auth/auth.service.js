import { User } from "./auth.model.js";

export const createUserService = async (userDetails) => {
  try {
    const user = await User.create({
      username: userDetails.username,
      password: userDetails.password,
      email: userDetails.email,
      userType: userDetails.userType,
    });

    return user
  } catch (error) {
    console.log(error);
    throw new Error("User creation failed").status = 500;
  }
};
