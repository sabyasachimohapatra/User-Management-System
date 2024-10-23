const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render("index",{title:"Home Page"});
})
router.get('/users',(req,res)=>{
    res.send("All Users");
})


module.exports=router;