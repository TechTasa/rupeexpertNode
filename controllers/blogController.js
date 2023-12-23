const Blog = require('../models/blog');

exports.blog_list = async function(req, res) {
    let blogs = await Blog.find({}, 'title author');
    res.render('blogList', { blogs: blogs });
};

// Add a new function to get a specific blog by id
exports.blog_detail = async function(req, res) {
    let blog = await Blog.findById(req.params.id);
    res.render('blogDetail', { blog: blog });
};

exports.blog_create_get = function(req, res) {
    const userType=req.session.user.userType
  const userName=req.session.user.username
    res.render('blogCreate',{ userType,userName });
};

exports.blog_create_post = async function(req, res) {
    const blog = new Blog(req.body);
    await blog.save()
    res.redirect('/dashboard/blog');
};
exports.blog_delete = async function(req, res) {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard/blog');
};