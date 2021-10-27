const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

//Configurations
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//forward slash being the root url aka localhost:4000
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying!')
})

app.get('/whatever', (req,res)=>
{res.send('HI')
})

//Takes in :name as a variable and prints it out to the website.
app.get('/hello/:name',(req,res) =>{
    res.send('Hello '+req.params.name)
})

//Replacement for JSON.blob,sending array of objects to localhost:4000/api/movies.
app.get('/api/movies', (req,res)=>{
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];
        res.status(200).json({//Can also inlcude messages in your responses.
            mymovies:movies,'Message':'Hello!'
        })
        
})

//__dirname gives path to current directory you're in.
//Able to send files such as index.html
app.get('/test', (req,res)=>{
res.sendFile(__dirname + '/index.html');
})

//Grabbing information from the URL - through query.
app.get('/name', (req,res)=>{
    res.send('Hello '+ req.query.firstname + ' ' + req.query.lastname);
})

//Parsing from the body
app.post('/name', (req,res)=>{
    res.send('Goodbye ' +req.body.firstname + ' ' +req.body.lastname)
})
//Listens at the port number 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})