// about.js
exports.about = (req, res) => {
    // Logic specific to the about page
    res.render('about', { title: 'About Us' }); // Assumes there's an 'about.jade' or 'about.pug' view
  };
  