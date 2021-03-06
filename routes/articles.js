var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/app', function(req, res, next) {
    res.render('articles/app', { title: 'app' });
});

router.get('/', function(req, res, next) {
    Articles.find({}, function(err, articles){
        res.render('articles/index', { title: 'Articles',articles:articles });
    });
});

router.get('/:slug', function(req, res, next) {

    var slug = req.params.slug;

    Articles.find({'slug':slug},function(err, article){
       return res.render('articles/view', { title: article.title, article: article });
    });
});

module.exports = router; 