const express= require('express')
const router= express.Router()




const SignUp = require('../controller/SignUp')
const Login = require('../controller/Login')
const addData = require('../controller/AddFormData')
const getData= require('../controller/ShowData')
const updateData = require('../controller/UpdateData')
const deleteData = require('../controller/DeleteData')




router.post('/signup', SignUp)
router.post('/login', Login )
router.post('/add', addData)
router.get('/show', getData)
router.post('/update', updateData)
router.delete('/delete/:id', deleteData)






module.exports= router