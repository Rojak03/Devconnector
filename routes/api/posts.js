/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// @route   GEt api/post/test
// @des     Test post route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: 'posts works'
}));

module.exports = router;