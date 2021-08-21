const express = require("express");
const app = express();
const getallLeaguesController = require('./Controllers/getallLeagues.controller')
const getallTeamesController = require('./Controllers/getAllTeamsInLeague.controller')
const getallTeamData = require ('./Controllers/getallTeamData')
const getTeamEventsById=require('./Controllers/getEventsByTeamId.controller')
const getPlayersController=require('./Controllers/getPlayersController.controller')

const cors = require("cors");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;


app.get("/leagues/:countryName", getallLeaguesController);
app.get("/teams/:leagueId", getallTeamesController);



//suzan
app.get("/lookup/:teamID", getallTeamData);

app.get("/player/:playerId",getPlayersController);
app.get("/teamEvents/:teamId",getTeamEventsById);


app.listen(PORT, () => {
  console.log("ALIVE");
});
