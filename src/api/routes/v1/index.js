const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/users', userRoutes);

module.exports = router;
