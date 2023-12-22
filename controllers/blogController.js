const Blog = require('../models/blog');

exports.blog_list =  async function(req, res) {
    const blogs= await Blog.find()
  
    res.render('blogList', { blogs: blogs });
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
