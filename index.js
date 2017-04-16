/*

	Tip Calculator

 */

// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

//body parser -- for form processing
app.use(require('body-parser').urlencoded({extended:true}));

// --- ROUTES --- //

app.get('/',function(req,res){	
	res.render('items');
});

// handle the post to the form
// app.post('/add',function(req,res){
//
// 	//retrieve sent item
// 	//var item = req.body.item;
//
// 	//if we had a backend like redis or mongodb then we can retrieve and store items
// 	//var list = req.body.list;
//
//     //redirect to the home page to simulate saving
//     //items are saved in the main.handlebards file using local storage
// 	res.redirect("/");
// 	//res.render('items',list);
//
// });

// 404 Not found catch-all handler 
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler 
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// start server
app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});