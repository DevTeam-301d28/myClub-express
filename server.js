const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config();
const port = process.env.PORT;

const axios = require("axios");

const League = require("./Module/football/League");
app.get("/league", (req, res) => {
  axios
    .get(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England
`)
    .then((resp) => {
        let leagueArr=[]
      let data = resp.data.countrys;
      data.map(item => {
        let league = new League(item);
        if(item.strSport === 'Soccer') {
            leagueArr.push(league)}
        ;
      });

      res.send(leagueArr);
    });
});

// app.get("/home/team", (req, res) => {
//   let name = req.query.name;
//   axios
//     .get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`)
//     .then((resp) => {
//       res.json(resp.data);
//     });
// });
// app.get("/home/player", (req, res) => {
//   let name = req.query.name;
//   axios
//     .get(
//       `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${name}`
//     )
//     .then((resp) => {
//       res.json(resp.data);
//     });
// });

app.listen(3000, () => {
  console.log("ALIVE");
});
