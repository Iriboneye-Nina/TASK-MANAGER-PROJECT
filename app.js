const express = require('express'); // NIKIMWE NO KWI IMPORTINGA
const app = express();
const task = require('./routes/task')
const port = 7000;

//start controller => router => app.js => browser
app.use(express.json());
app.use("/api/v1/task", task);


app.listen(port, () =>{
     console.log("server is running on port")
});