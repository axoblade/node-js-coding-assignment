const express = require('express');

const { protect, authorize } = require('../middleware/auth');
//include the controller
const {
    createUser,
    loginUser,
    getMe,
    updateMe
} = require('../controllers/auth');
const users = require('../models/User');

const router = express.Router();

router.route('/')
    .post(protect,authorize('admin'),createUser);

router.route('/update')
    .put(protect, updateMe);

router.route('/login')
    .post(loginUser);

router.route('/me')
    .get(protect, getMe);

module.exports = router;