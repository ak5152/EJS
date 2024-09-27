const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"/public")));

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
     let data=instaData[username];
     console.log(data);
     if(data){
        res.render("instagram",{data});
     }
    else{
        res.render("error.ejs");
    }
    })
        
 app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`listening the ${port}`);
})