const router=require('express').Router()
const userController=require('../Controller/userController')
const auth=(req,res,next)=>{

}
router.use(auth)
router.post('/register',userController.register)
router.post('/login',userController.login)
module.exports = router