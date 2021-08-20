const express = require("express");
const app = express();
const getallLeaguesController=require('./Controllers/getallLeagues.controller')
const getallTeamesController=require('./Controllers/getAllTeamsInLeague.controller')
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;




app.get("/leagues/:countryName",getallLeaguesController);

app.get("/teams/:leagueId",getallTeamesController);

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

app.listen(PORT, () => {
  console.log("ALIVE");
});
