// app_server/controllers/middleware.js
function checkRole(role) {
    return function(req, res, next) {
      if (req.isAuthenticated() && req.user.role === role) {
        next();
      } else {
        res.status(403).json({ "message": "Access Denied" });
      }
    };
  }
  
  module.exports = {
    isAdmin: checkRole('Admin'),
    isDeveloper: checkRole('Developer'),
    isProjectUser: checkRole('ProjectUser')
  };
  