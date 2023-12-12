/*GET home page */
module.exports.about = function(req,res) {
    res.render('index',{title:'About'});
};

// GET 'Home' Page
module.exports.home = (req, res, next) => {
    // Fetch necessary data for the home page from the database
    // Render view with the data
};

// GET 'About' Page
module.exports.about = (req, res, next) => {
    // Fetch necessary data for the about page from the database
    // Render view with the data
};

// GET 'Contact' Page
module.exports.contact = (req, res, next) => {
    // Fetch necessary data for the contact page from the database
    // Render view with the data
};

// GET 'Terms and Conditions' Page
module.exports.termsAndConditions = (req, res, next) => {
    // Fetch necessary data for the terms and conditions page from the database
    // Render view with the data
};

// GET 'Privacy Policy' Page
module.exports.privacyPolicy = (req, res, next) => {
    // Fetch necessary data for the privacy policy page from the database
    // Render view with the data
};