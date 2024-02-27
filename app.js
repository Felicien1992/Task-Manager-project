require('./db/connect')
const express = require('express');
const app = express()
const port = 9000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config() //npm install dotenv =>uko 

// app.use(express.json())
app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tasks', tasks);

//route

app.get('/', (req, res) => {
    res.send('Welcom to our Website');
})

app.get('/hello', (req, res) => {
    res.send('Task Manage App');
})
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is listeaning on port ${port}`)
        });

    } catch (error) {
        console.log(error)

    }
} 
start()