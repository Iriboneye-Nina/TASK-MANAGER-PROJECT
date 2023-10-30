const express = require('express');
const router = express.Router();//aha nugutanga inzira cy ahobirac

const {getAllTask,createTask,getTask,updateTask,deleteTask} = require('../controller/task')

//const {getAllTask} = require('../controller/task')

router.route('/').get( getAllTask).post(createTask)

router.route('/:id').get( getTask).patch(updateTask).delete(deleteTask)

module.exports = router;