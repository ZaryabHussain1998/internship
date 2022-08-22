const express = require('express');

const { protectRoute } = require("../auth/protect");

const { dashboardView } = require("../controllers/dashboard");

const {registerView, loginView, registerUser, loginUser } = require('../controllers/login');

const router = express.Router();

router.get('/register', registerView);

router.get('/login', loginView);

router.get('/dashboard', protectRoute, dashboardView);

router.post('/login', loginUser);

router.post('/register', registerUser);

module.exports = router;

