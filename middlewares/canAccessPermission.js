const canAccessPermission = (key) => {
  return (req, res, next) => {
    if (
      req.session.permission &&
      req.session.permission.some((item) => item.permissionname === key)
    ) {
      return next();
    } else {
      // return res
      //   .status(403)
      //   .json({ message: "Forbidden: You do not have permission." });
      res.redirect("/toi");
    }
  };
};

module.exports = { canAccessPermission };
