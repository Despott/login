const express = require('express');
const router = express.Router();

// Home page
router.get('/', ensureAuth,  function(req, res) {
  res.render('index');
});

// Auth ensure
function ensureAuth(req, res, next){
  if (req.isAuthenticated()){
    return next();
  } else {
     req.flash('error_msg', 'Nisi ulogovan');
     res.redirect('/users/login')
  }
}

// Exports
module.exports = router;
