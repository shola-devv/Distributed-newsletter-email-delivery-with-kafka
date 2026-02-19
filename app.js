require('dotenv').config
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{

      res.send('newsletter delivery')
})

const port = 4000;

const run = async ()=> {
    try{
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}`)
        })
    }
    
    catch(error){
        console.log(error)
    
    }

}
run();