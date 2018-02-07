const express = require('express')
const axios   = require('axios')
const cors    = require('cors');
const PORT    = process.env.PORT || 8080 

      app     = express()
      app.use(cors());
      app.use(express.json())
      app.use(express.urlencoded({ extended : true }))

let givenURL        = "http://gd2.mlb.com/components/game/mlb/year_";
let endURL          = "/master_scoreboard.json";
let boxScoreUrlEnd  = "/boxscore.json";
let boxScoreUrl     = "http://gd2.mlb.com";
let setURL          = "http://gd2.mlb.com/components/game/mlb/year_2017/month_09/day_29/master_scoreboard.json";

app.get("/", (req, res) => {
    return axios.get(setURL)

    .then(response => {
        result = response.data;
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })
})
 
app.post('/day', (req, res) => {
    let day     = req.body.day;
    let month   = req.body.month;
    let year    = req.body.year;
    
    let baseURL = givenURL + year + '/month_' + month + '/day_' + day + endURL
    return axios.get(baseURL)

    .then(response => {
        result = response.data;
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })
})

app.post("/game-details", (req, res) => {
    let game_data_directory = req.body.game_data_directory;

    return axios.get(boxScoreUrl + game_data_directory + boxScoreUrlEnd)

    .then(response => {
        result = response.data;
        res.send(result.data);
    })
    .catch(err => {
        console.log(err);
    })
})

app.listen(PORT, _ => {
    console.log(`Express is listening on ${PORT}, ctrl+c to kill`)
})

