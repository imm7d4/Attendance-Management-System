const jwt = require('jsonwebtoken');

exports.authMiddleware = function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

exports.roleMiddleware = function (roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send('Access Forbidden');
    }
    next();
  };
};
