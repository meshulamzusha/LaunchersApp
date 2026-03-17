export const rbacGuard = (...userTypes) => {
  return (req, res, next) => {
    if (!userTypes.includes(req.user.userType)) {
      return res.status(403).json({ ok: false, message: "Forbidden" });
    }
    next();
  };
};
