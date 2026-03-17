import { createUserService } from "./auth.service";

export const createUserHandler = async (req, res) => {
  try {
    const { username, password, email, userType } = req.body;

    const user = await createUserService({
      username,
      password,
      email,
      userType,
    });

    return res.status(201).json({
      ok: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      message: "Internal Server Error",
    });
  }
};
