const router=require('express').Router()
const adminController=require('../Controller/adminController')


router.post('/register',adminController.register)
router.post('/login',adminController.login)
const filtre=()=>{

}
router.use
router.get('/admins',adminController.getAdmin)
module.exports=router
