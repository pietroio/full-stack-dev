//  Estritamente necessários
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//  Varia de acordo com o "objeto"
var Author = require('../models/author.js');

/////////////////////////////////////////////////
/*  GET LIST OF AUTHORS  */
router.get('/author', function(req, res, next)
{
  Author.find(function(err, products)
  {
    if(err) return next(err);
    res.json(products);
  });
});

/*  GET SINGLE AUTHOR  */
router.get('/author/:id', function(req, res, next)
{
  Author.findById(req.params.id, function(err, post)
  {
    if(err) return next(err);
    res.json(post);
  });
});

/*  CREATE AUTHOR  */
router.post('/author/new', function(req, res, next)
{
  Author.create(req.body, function(err, post)
  {
    if(err) return next(err);
    res.json(post);
  });
});

/*  UPDATE AUTHOR  */
router.put('/author/:id', function(req, res, next)
{
  Author.findByIdAndUpdate(req.params.id, req.body, function(err, post)
  {
    if(err) return next(err);
    res.json(post);
  });
});

/*  DELETE AUTHOR  */
router.delete('/author/:id', function(req, res, next)
{
  Author.findByIdAndRemove(req.params.id, req.body, function(err, post)
  {
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;
