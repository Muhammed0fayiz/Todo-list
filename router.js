const express=require('express')
const router=express.Router()
const path=require('path')
const fs=require('fs')

const loginPage=path.join(__dirname,'pages','loginpage.ejs')
router.get('/',(req,res)=>{
res.render('loginpage')
})
router.post('/loginpost',(req,res)=>{
 

const {email,password}=req.body;

if(email=="fayiz@gmail.com"&&password=="123"){
    res.render('home')
}else{
    res.redirect('/')
}
})


module.exports=router