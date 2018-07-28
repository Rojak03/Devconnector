/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// @route   GEt api/user/test
// @des     Test user get route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'User works'
}));

module.exports = router;