/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// @route   GEt api/profile/test
// @des     Test profile route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'profile works'
}));

module.exports = router;