const express = require("express");
const app = express();
const getallLeaguesController = require('./Controllers/getallLeagues.controller')
const getallTeamesController = require('./Controllers/getAllTeamsInLeague.controller')

const getallTeamData = require('./Controllers/getallTeamData.controller')


const cors = require("cors");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;


app.get("/leagues/:countryName", getallLeaguesController);
app.get("/teams/:leagueId", getallTeamesController);


//suzan
app.get("/lookup/:teamID", getallTeamsId);


app.listen(PORT, () => {
  console.log("ALIVE");
});
