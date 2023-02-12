const users=[
    { email : "kais@gmail.com", pwd :"567"},
    { email : "halah@gmail.com", pwd :"4563"},
    { email : "souhail@gmail.com", pwd :"3201"},
    { email :  "houssem@gmail.com", pwd :"575467"},
    { email : "emna@gmail.com", pwd :"5759"}

]
const register = async(req,res)=> {
const lg={email:req.body.email,pwd:req.body.password}

const x = users.findIndex(e=>e.email==lg.email && e.pwd==lg.pwd)
if(x>=0)
{
    res.send("user exist")
}
else{
    users.push(lg)
    res.send("user added")
}


}
const login=async(req,res)=>{
    
    const x = users.findIndex(e=>e.email==req.body.email && e.pwd==req.body.password)
    if(x>=0)
    {
        res.send("welcome ")
        auth=true
    }
    else{
        
        res.send("register first")
    } 
}

module.exports = ({register,login})