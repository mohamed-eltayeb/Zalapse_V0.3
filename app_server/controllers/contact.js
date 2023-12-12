// contact.js
exports.contact = (req, res) => {
    // Logic specific to the contact page
    res.render('contact', { title: 'Contact Us' }); // Assumes there's a 'contact.jade' or 'contact.pug' view
  };
  