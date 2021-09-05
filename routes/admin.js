let express=require("express")

let router = express.Router()

router.get("/",(req,res)=>{
    res.send("admin page")
})

module.exports=router;