var express = require('express');
var router = express.Router();
var Hobbie = require('../models/hobbie')

/* GET home page. */
router.get('/', function(req, res, next) {
  Hobbie.find({},function(err,hobbies){
    res.render('index', {
      hobbies,
      title: "Hobbies"
    })
  })
});
router.get('/detail/:id',function(req,res){
  Hobbie.findById({_id: req.params.id},function(err,hobbie){
    res.render('show',{
      hobbie,
    })
  })
})
router.post('/',function(req,res){
  Hobbie.create(req.body);
  res.redirect('/');
})
router.delete('/:id',function(req,res){
  Hobbie.findByIdAndDelete({_id:req.params.id},function(err,hobbie){
    res.redirect('/');
  })
});
router.put('/:id',function(req,res){
  Hobbie.findById({_id:req.params.id},function(err,hobbie){
    hobbie.name = req.body.name
    hobbie.caption = req.body.caption
    hobbie.save(function(err){
      res.redirect(`/detail/${hobbie._id}`)
    })
  })
})

module.exports = router;
