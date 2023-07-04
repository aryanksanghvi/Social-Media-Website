const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://gowthamkbaalaji4:myFE2XGslS3puTmf@authentication.7ldbgz6.mongodb.net/", {useNewUrlParser: true});

var db = mongoose.connection;

const authentication = new mongoose.Schema({
	username: String,
	password: String
})

const collection = new mongoose.model("Collection1",authentication);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/accounts.html'));
});

app.get('/chat',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/chat.html'));
});

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/home.html'));
});

app.get('/posts',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/posts.html'));
});

app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/login.html'));
});

// app.get('/signup',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/views/signup.html'));
// });

// app.get('/signin',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/views/signin.html'));
// });

app.post('/signin',(req,res)=> {
	const data = {
        names: req.body.names,
        age: req.body.age,
        phone: req.body.phone,
		username1: req.body.username1,
		password1: req.body.password1
	}
	collection.insertOne([data]);
	res.redirect('/signin');
})

app.post('/signin',(req,res)=>{
    collection.listen([data]);
    if (username1==req.body.username && password1==req.body.password) {
        res.redirect('/home');
    } else {
        res.send('Incorrect user details');
    }
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





