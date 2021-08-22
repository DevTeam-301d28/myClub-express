const express = require("express");
const app = express();
const getallLeaguesController = require('./Controllers/getallLeagues.controller')
const getallTeamesController = require('./Controllers/getAllTeamsInLeague.controller')
const getallTeamData = require ('./Controllers/getallTeamData')
const getTeamEventsById=require('./Controllers/getEventsByTeamId.controller')
const getPlayersController=require('./Controllers/getPlayersController.controller')
const {createUser,updateUser,getUsers,removeUser,showUser}=require('./Controllers/dataBase')
const cors = require("cors");
app.use(cors());
app.use(express.json())
require("dotenv").config();
const PORT = process.env.PORT;


app.get("/leagues/:countryName", getallLeaguesController);
app.get("/teams/:leagueId", getallTeamesController);



//suzan
app.get("/lookup/:idTeam", getallTeamData);

app.get("/player/:playerId",getPlayersController);
app.get("/teamEvents/:teamId",getTeamEventsById);



/////////////////////////////////
app.get('/all',getUsers)
app.get('/user/:id',showUser)
app.post('/Createuser',createUser)
app.patch('/user/fav/:id',updateUser)
app.delete('/removeUser/:id',removeUser)

app.listen(PORT, () => {
  console.log("ALIVE");
});
