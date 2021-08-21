const express = require("express");
const app = express();
const getallLeaguesController=require('./Controllers/getallLeagues.controller')
const getallTeamesController=require('./Controllers/getAllTeamsInLeague.controller');
const getTeamEventsById=require('./Controllers/getEventsByTeamId.controller')
const getPlayersController=require('./Controllers/getPlayersController.controller')
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;




app.get("/leagues/:countryName",getallLeaguesController);
app.get("/player/:playerId",getPlayersController);
app.get("/teams/:leagueId",getallTeamesController);
app.get("/teamEvents/:teamId",getTeamEventsById);

app.listen(PORT, () => {
  console.log("ALIVE");
});
