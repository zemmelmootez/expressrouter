const admin=[
    {email:"aa@gmail.com",password:'123'},
    {email:"aaaa@gmail.com",password:'321'},
]

const register=async(req,res)=>{
    const i=admin.findIndex(e=>e.email==req.body.email&&e.password==req.body.password)

    if(i>=0)
    res.send("user exist")
   else  {const x={email:req.body.email,password:req.body.password}
    admin.push(x)
    res.send("user add !")}
}
const login=async(req,res)=>{
    const i=admin.findIndex(e=>e.email==req.body.email&&e.password==req.body.password)

    if(i>=0)
    res.send("welcome")
   else  {
    res.send("register first !")}
}

const getAdmin=async(req,res)=>{
    res.send(admin)
}
module.exports=({register,login,getAdmin})