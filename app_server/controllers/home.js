// home.js
exports.home = (req, res) => {
    // Logic specific to the home page
    res.render('index', { title: 'Home Page' }); // Assumes there's an 'index.jade' or 'index.pug' view
  };
  