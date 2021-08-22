const mongoose = require("mongoose");
const express = require("express");
let app = express();

mongoose.connect("mongodb://localhost:27017/User", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) .then(() => 'You are now connected to Mongo!')
.catch(err => console.error('Something went wrong', err));

   
let UserSchema = new mongoose.Schema({
  email: String ,
  userName: String,
  intrestedInLeauges: [],
  favLeague: String,
  intrestedInTeams: [],
  favTeam: String,
  intrestedInPlayers: [],
  favPlayer: String,
});

const User = mongoose.model("User", UserSchema);

// get all users
let allUsers = [];
const getUsers = (req, res) => {
  User.find()
  .then(all=>{
        if (all) {
          res.json(all);
        } else {
       res.status(404).json('no users');
        }
  })
  .catch(err=>res.json({error:err}))
};
///// when you sign in

let createUser = (req, res) => {
  let data = req.body;
  newUser = new User(data);
  
  newUser.save().
  then(doc=>  res.json({ message: "user created succefully", user: newUser }))
  .catch(err=>console.log(err))
    // 
};

//// get user by id  
let showUser=(req,res)=>{
    let id=req.params.id;
    console.log(id);
    User.findById(id)
    .then(user=>{
        if(user){  res.status(200).json(user)}
         else{res.status(404).json('user with that id is not found')}
    })
    .catch(err=>res.status(500).json({message:'user not found',error:err}))
}


// when user update his details///////////////////////////

let updateUser=async(req, res) => {
    let id = req.params.id;
    let data=req.body 
       let newData={}
       //// locate the required user
       let theUser={}
       User.findById(id)
       .then(user=>{
           if(user){  theUser=user}
            else{res.status(404).json('user with that id is not found')}
       })
       .catch(err=>res.status(500).json({message:'user not found',error:err}))
       //////////////////////
       console.log(theUser);
      let arr=Object.keys(data)
          arr.map(key=>{
            newData[key]=data[key]  
          }) 
       
      User.updateOne({_id:id},
      {$set:newData})
      .then(updated=>{
          console.log(newData);
          res.status(200).json({message:'updated sccussfully',upt:updated})})
      .catch(err=>{res.send(500).json({error:err})})   
  };


//// remove user
let removeUser = async (req, res) => {
  let id = req.id;
  User.remove({ _id: id })
  .then(result=>res.status(200).json({message:'user deleted succesully',reslt:result}) )
  .catch(err=>res.status(500).json({error:err}))
};

module.exports = { createUser, updateUser, getUsers, removeUser,showUser };



