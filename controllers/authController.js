const bcrypt = require('bcryptjs');
 const db = require('../config/db');
 //Signup
 exports.registerUser=async(req,res)=>{
 const{name,email,password}=req.body;
 const hashedPassword=await bcrypt.hash(password,10);
 try{
    await db.none('INSERT INTO users(name,email,password)VALUES($1,$2,$3)',
        [name,email,hashedPassword]);
        res.status(201).json({message:'Userregisteredsuccessfully'});
    }catch(err){
        res.status(500).json({error:'Errorregisteringuser'});
    }
 };
 //Login
 exports.loginUser = async(req,res)=>{
 const{email,password} = req.body;
 try{
    const user = awaitdb.oneOrNone('SELECT*FROMusersWHEREemail =$1',[email]);
    if(!user){
        return res.status(401).json({error:'Invalidemailorpassword'});
    }
    const isMatch = awaitbcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({error:'Invalidemailorpassword'});
    }
    req.session.user = {id:user.id,name:user.name,email:user.email};
    res.json({message:'Loginsuccessful',user:req.session.user});
    }catch(err){
        res.status(500).json({error:'Errorloggingin'});
    }
    };
     //Logout
 exports.logoutUser=(req,res)=>{
    req.session.destroy();
    res.json({message:'Loggedoutsuccessfully'});
};
