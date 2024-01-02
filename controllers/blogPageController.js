const Blog = require('../models/Blog');

exports.blog_index = async function(req, res) {
    let blogs = await Blog.find({}, 'title image');
    res.render('blogPageIndex', { blogs: blogs });
};

exports.blog_detail = async function(req, res) {
    let blog = await Blog.findById(req.params.id);
    res.render('blogPageDetail', { blog: blog });
};
