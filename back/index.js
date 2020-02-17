
// importing all libraries require to create server 
const express = require('express')
const app = express()
const cors = require('cors')
const BodyParser = require('body-parser')
// declaration of the port
const port = 5000
const scraper = express.Router();
const request = require('request')

app.use(express.json())
app.use(BodyParser.urlencoded({
    extended : true
}))

app.use(cors())
app.use("/", scraper)

// get the scrapping data
app.get("/scrape", (req, res) => {
    request('https://www.folhomee.fr/', (error,response, html) => {
    if (!error && response.statusCode == 200){
        res.send(html);
    }
});
});

app.listen(port, console.log(`Server is running on port ${port}`))