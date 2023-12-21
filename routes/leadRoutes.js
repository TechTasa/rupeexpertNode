const express = require('express');
const leadController = require('../controllers/leadContoller');

const router = express.Router();

// Apply for a loan
router.post('/apply/:type', leadController.applyLoan);

// Show the form
router.get('/apply/:type', (req, res) => {
    res.render('apply', { type: req.params.type });
});

module.exports = router;
