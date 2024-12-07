const express=require('express')
const router=express.Router()
const userController=require('../controllers/userdetails')


router.get('/userdetails',userController.getUsers)
router.post('/userlogin',userController.loginUser)


module.exports=router