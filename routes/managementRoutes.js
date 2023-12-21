const express = require('express');
const managementController = require('../controllers/managementController');

const router = express.Router();

router.post('/create', managementController.createUser);

router.get('/create', (req, res) => {
    res.render('createmanagement');
});

router.get('/', managementController.getUsers);
router.get('/edit/:userId', managementController.editUser);
router.post('/edit/:userId', managementController.updateUser);
router.get('/delete/:userId', managementController.deleteUser);

module.exports = router;
