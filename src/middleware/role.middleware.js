exports.allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRoleId = req.user.roleId;

    if (!allowedRoles.includes(userRoleId)) {
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }

    next();
  };
};
