const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.users;
const lib =data.libraries;
const fav =data.favorites;
const bcrypt = require("bcrypt-nodejs");
const passport = require('passport');
const strategy = require('passport-local').Strategy;

//
const libs= lib.getAllLib();
let lib1 = libs[0], lib2 = libs[1], lib3 = libs[2], lib4 = libs[3];

//
let favlibs = fav.getAllFavoriteLibs();


//classfication
let art = lib.getArt();
let lang = lib.getLanguages();
let lite = lib.getLiterature();
let other = lib.getOther();
let ss = lib.getSocialScience();
let tech =lib.getTechnology();


passport.use(new strategy(
  function(username, password, done) {
      user.findByUsername(username, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false,{ message: 'Incorrect username.' }); }
      let isMatch;
      bcrypt.compare(password,user.hashedPassword,(err,res)=>{
            if (res === true) {
                isMatch=true;
            }
            else isMatch=false;
            if (!isMatch) { return done(null, false,{ message: 'Incorrect password.' }); }
            return done(null, user);
      });
    });
  }));


passport.serializeUser(function(user, done) {
done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
    user.findById(_id, function (err, user) {
    if (err) { return done(err); }
    done(null, user);
  });
});



router.get('/',(req,res)=>{
    if(req.user) res.redirect('/private');
    else res.render('users/static',{message: req.flash('error')});  
});

router.post('/login', passport.authenticate('local',{ failureRedirect: '/' ,failureFlash: true}),(req,res)=>{
    res.redirect('/private');
});


//homepage
router.get('/private',(req,res)=>{
    res.render('users/private', { user: req.user, 
        favorite1:lib3,favorite2:lib4,
        nearby1:lib1,nearby2:lib2

 });
});

/*test
router.get('/private/libinfo',(req,res)=>{
    res.render('users/libinfo',{});
});

router.get('/private/libinfo/map',(req,res)=>{
    res.render('users/map',{});
});*/


/* favorites render
router.post('/private/favorites', function (req, res) {
  
  let newlib =req.lib;
  fav.addFavoriteLib(newlib);
  console.log(fav.getAllFavoriteLibs);
});

router.get('/private/favorites',(req,res)=>{
    res.render('users/favorites',{});
});*/



//library infomations render 
for(let i =1;i<= 10; i++){
    router.get('/private/info/'+i.toString(),(req,res)=>{
        res.render('users/libraries/info/'+i.toString(),{lib:libs[i-1]});
    });

};


//library maps render 
for(let i =1;i<= 10; i++){
    router.get('/private/map/'+i.toString(),(req,res)=>{
        res.render('users/libraries/maps/'+i.toString(),{lib:libs[i-1]});
    });

};



//classfication render
router.get('/private/art',(req,res)=>{
    res.render('users/classification/art',{user: req.user,art1:art[0], art2:art[1], art3:art[2], art4:art[3],
                                           art5:art[4], art6:art[5], art7:art[6], art8:art[7]                
    });
});

router.get('/private/languages',(req,res)=>{
    res.render('users/classification/languages',{user: req.user,lang1:lang[0], lang2:lang[1], lang3:lang[2]});
});

router.get('/private/literature',(req,res)=>{
    res.render('users/classification/literature',{user: req.user,lite1:lite[0], lite2:lite[1], lite3:lite[2], lite4:lite[3], lite5:lite[4]});
    
});

router.get('/private/other',(req,res)=>{
    res.render('users/classification/other',{user: req.user,other1:other[0], other2:other[1], other3:other[2]});
});

router.get('/private/socialscience',(req,res)=>{
    res.render('users/classification/socialscience',{user: req.user,ss1:ss[0], ss2:ss[1], ss3:ss[2], ss4:ss[3], ss5:ss[4]});
});

router.get('/private/technology',(req,res)=>{
    res.render('users/classification/technology',{user: req.user,tech1:tech[0], tech2:tech[1], tech3:tech[2]});
});


module.exports = router;