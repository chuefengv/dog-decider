const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db.js')
const path = require('path')

app.use(cors()); 
app.use(express.json());

// if deployed in production mode, serve the front end
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

//api route to GET city query from states database
app.get('/api/data', async(req, res)=>{
    const small = req.query.small;
    const medium = req.query.medium;
    const large = req.query.large;
    try{
        const getDog = await pool.query("SELECT * FROM dogs WHERE size NOT IN (($1), ($2), ($3)) ORDER BY breed",[small, medium, large]);
        res.json(getDog.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Process is running on port ${process.env.PORT || 5000} LETS GO!`)
})