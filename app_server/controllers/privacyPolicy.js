// privacyPolicy.js
exports.privacyPolicy = (req, res) => {
    // Logic specific to the privacy policy page
    res.render('privacy-policy', { title: 'Privacy Policy' }); // Assumes there's a 'privacy-policy.jade' or 'privacy-policy.pug' view
  };
  