const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to render the signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Route to handle user registration
router.post('/signup', authController.registerUser);

// Route to render the login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle user login
router.post('/login', authController.loginUser);

// Route to handle user logout
router.get('/logout', authController.logoutUser);

module.exports = router;
