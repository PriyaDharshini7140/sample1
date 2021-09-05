let express=require("express")

let router = express.Router()

router.get("/",(req,res)=>{
    res.send("user page")
})

router.get("/reg",(req,res)=>{
    res.sendFile(__dirname+"/first.html")
})

router.post("/register",(req,res)=>{
    console.log(req.body.name);
    res.send(req.body.name)
})

module.exports=router;