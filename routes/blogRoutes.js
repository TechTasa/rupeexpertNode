const express = require('express');
const router = express.Router();
const blog_controller = require('../controllers/blogController');

router.get('', blog_controller.blog_list);
router.get('/create', blog_controller.blog_create_get);
router.post('/create', blog_controller.blog_create_post);

module.exports = router;
