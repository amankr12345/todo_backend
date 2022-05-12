

const router=require('express').Router()
const CONTROLLER=require('../controller/user')


router.post('/add',CONTROLLER.addToDo)
router.get('/get',CONTROLLER.show)
router.put('/update/:id',CONTROLLER.update)
router.delete('/delete/:id',CONTROLLER.delete)

module.exports=router