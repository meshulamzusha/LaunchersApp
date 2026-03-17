import {
  createUserService,
  deleteUserService,
  loginService,
} from "./auth.service.js";

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

export const loginHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const {token, user} = await loginService(username, password);

    return res.status(200).json({
      ok: true,
      message: "you successfully login",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      massage: error.massage,
    });
  }
};

export const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);

    return res.status(200).json({
      ok: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message,
    });
  }
};

export const getUserHandler = (req, res) => {
  return res.status(200).json({
    ok: true,
    user: req.user
  });
};
