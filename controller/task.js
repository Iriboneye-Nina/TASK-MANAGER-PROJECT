// res.send nikimwe na console.log ariko ibyo hereza muri browser
const getAllTask = (req,res) =>{ 
    res.send('all task')
    res.send(req.body)   
};

const createTask = (req,res) =>{ // aha iracreatinga task 
    // res.send('createTask')
    res.json(req.body)  
};

const getTask = (req,res) =>{ //  aha ira creatinga task imwe
    // res.send('Get Task')
    res.json({ id: req.params.id })   
}
 const updateTask = (req,res) =>{
    // res.send('update Task')
    res.json({ id: req.params.id })  
 } 
 const deleteTask = (req,res) =>{
    // res.send('deleteTask')
    res.json({ id: req.params.id })  
 }      


module.exports = {getAllTask,createTask,getTask,updateTask,deleteTask};