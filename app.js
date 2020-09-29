require('dotenv').config();
<<<<<<< HEAD
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');
(app = express()), (question = require('./models/question.js')), (category = require('./models/category.js'));
(session = require('express-session')),
	(passport = require('passport')),
	(passportLocalMongoose = require('passport-local-mongoose')),
	(User = require('./models/user.js'));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
=======
var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    app= express(),
    question = require("./models/question.js"),
    category = require("./models/category.js"),
    session = require('express-session'),
    passport = require('passport'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User = require("./models/user.js"),
    methodOverride=require("method-override");



app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
>>>>>>> 89a9b97f2ca870457234856d79b3d6ceb00405df

//////Session////
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());

////////////Config/////////
mongoose.connect('mongodb://localhost/mpl_demo', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
//mongoose.connect('mongodb+srv://siam:1234@cluster0.hn4wg.mongodb.net/test',{useNewUrlParser: true,useUnifiedTopology: true});

////////Passport confid///////
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/////////Routes//////////

app.get('/', function(req, res) {
	res.render('login');
});

app.post('/', (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password
	});
	req.login(user, (error, sol) => {
		if (error) console.log(error);
		else {
			passport.authenticate('local')(req, res, () => {
				res.redirect('/cat');
			});
		}
	});
});

app.get('/cat', function(req, res) {
	category.find({}, function(err, cat) {
		if (err) {
			console.log(err);
		} else {
			res.render('categories', { ct: cat });
		}
	});
});

<<<<<<< HEAD
app.get('/cat/:nm', function(req, res) {
	category.find({ name: req.params.nm }).populate('questions').exec(function(err, cat) {
		if (err) {
			console.log(err);
		} else {
			res.render('question.ejs', { c: cat });
		}
	});
=======
app.get("/logout",(req,res)=>{
  req.logout();
  res.redirect("/");
})

app.get("/cat",function(req,res){
    category.find({},function(err,cat){
        if (err){
            console.log(err);
        }else{
            res.render("categories",{ct:cat});
        }
    });
>>>>>>> 89a9b97f2ca870457234856d79b3d6ceb00405df
});

app.post('/cat/:nm', function(req, res) {
	category.findOne({ name: req.params.nm }, function(err, cat) {
		if (err) {
			console.log(err);
		} else {
			console.log(cat);
			cat.curr = cat.curr + 1;
			cat.save();
			res.redirect('/cat');
		}
	});
});

// app.post("/cat",function(req,res){
//     category.find({},function(err,cat){
//         if(err){
//             console.log(err);
//         }else{
//             cat.forEach(function(c){
//                 c.curr=0;
//                 c.save();
//                 res.redirect("/cat");
//             })
//         }
//     })
// })
// question.create({
// 	desc: 'what is you name',
// 	points: '10'
// });
// question.create({
<<<<<<< HEAD
// 	desc: 'what is your age',
// 	points: '20'
// });
// question.create({
// 	desc: 'what is your fav color',
// 	points: '10'
// });
// question.create({
// 	desc: 'what is your fav dog',
// 	points: '20'
// });
// question.create({
// 	desc: 'what is middle',
// 	points: '10'
// });
// question.create({
// 	desc: 'what is last name',
// 	points: '20'
// });
category.create({
	name: 'algebra'
});
category.create({
	name: 'calculus'
});
category.create({
	name: 'logical'
});
category.create({
	name: 'cryptic'
});
category.create({
	name: 'vedic'
});

app.listen('3000', () => {
	console.log('Started');
});
=======
//     desc:"new set1",
//     points:"20"
// })
// category.create({
//     name:"quick",
//     questions:[
//         Object("5f73162400585208905b0103"),
//         Object("5f73162400585208905b0104")
//     ]
// })
//////////////////////////////////////////////////////////////////////////////////

app.get("/questions/new",(req,res)=>{
  res.render("newques");
});


app.post("/questions/new",(req,res)=>{
  let questions=req.body.q;
  question.insertMany(questions,(err,qs)=>{
    if(err) console.log(err);
    else{
       category.create({
         name:req.body.category
       },(error,cat)=>{
         qs.forEach((q)=>{
          cat.questions.push(q._id);
         })
         cat.save((e,s)=>{
            if(e) console.log(e);
            else {
              console.log(cat);
            res.redirect("/questions/new");
            }
         })
       })
    }
  })
})


app.get("/questions/view",(req,res)=>{
  category.find({}).populate("questions").exec((err,cat)=>{
    if(err) console.log(err);
    else{
      res.render("viewques.ejs",{categories:cat});
    }
  })
})

app.get("/questions/:id/edit",(req,res)=>{
  question.findById(req.params.id,(err,q)=>{
    if(err) console.log(err);
    else{
      res.render("editques",{ques:q});
    }
  })
});


app.patch("/questions/:id/edit",(req,res)=>{
      question.findOneAndUpdate({_id:req.params.id},req.body.question,(err,sol)=>{
        if(err) console.log(err);
        else{
          res.redirect("/questions/view");
        }
      })
});





//////////////////////////////////////////////////////////////////////////////////
app.listen("3000",()=>{
    console.log("Started");
})
>>>>>>> 89a9b97f2ca870457234856d79b3d6ceb00405df

////MiddleWare///

function auth(req, res, next) {
	if (req.isAuthenticated()) {
		next();
		//console.log("auth successful:middleware");
	} else {
		//console.log("auth failure:middleware");
		res.redirect('/');
	}
}
