const axios = require('axios');

const jwtVerify = require('../security/checkJwt.controller');
const Controllers = {};
const {
  Event,
  League,
  Player,
  Team,
  TeamData,
} = require('../Modules/football/Modules');

const getConfig = require('../configs/allConfigs');
const configs = getConfig();

Controllers.getallLeaguesController = async function (request, response) {
  let token = request.headers.authorization.split(' ')[1];
  jwtVerify(token, valid);
  async function valid() {
    let apiUrl = `${configs.API_URL}/search_all_leagues.php?c=${request.params.countryName}`;
    await axios
      .get(apiUrl)
      .then((apiResponse) => {
        let leagueArr = [];
        let data = apiResponse.data.countrys;
        if (data){  
          data.map((item) => {
            if (item.strSport === 'Soccer') {
              leagueArr.push( new League(item));
            }
          });
          response.send(leagueArr);
        }else{
          response.send(['No Leagues']);
        }
       
      })
      .catch((error) => {
        handleError(error);
      });
  }
};

Controllers.getallTeamData = async function (request, response) {
  let requestuestURL = `${configs.API_URL}/lookupteam.php?id=${request.params.idTeam}`;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let teamsdata = [];
      let data = apiResponse.data.teams;
      console.log(data)
      if (data){ 
        console.log(data)
        response.send(teamsdata);
       }else{
        response.send('No data Found');
       }
      
    })
    .catch((error) => {
      handleError(error);
    });
};
Controllers.teamDataByName = async function (request, response) {
  let requestuestURL = `${configs.API_URL}/searchteams.php?t=${request.params.name}`;
  axios
  .get(requestuestURL)
  .then((apiResponse) => {
    let teamsArr = [];
    let data = apiResponse.data.teams;
  
    if (data){  
      data.map((item) => {
        let team = new Team(item);
        if (item.strSport === 'Soccer') {
          teamsArr.push(team);
        }
      });
      response.send(teamsArr);
    }else{
      response.send('No Details')
    }
 
  })
  .catch((error) => {
    handleError(error);
  });
};

Controllers.getallTeamesController = async function (request, response) {
  let requestuestURL = `${configs.API_URL}/lookup_all_teams.php?id=${request.params.leagueId}`;
  requestuestURL;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let teamsArr = [];
      let data = apiResponse.data.teams;
    
      if (data){  
        data.map((item) => {
          let team = new Team(item);
          if (item.strSport === 'Soccer') {
            teamsArr.push(team);
          }
        });
        response.send(teamsArr);
      }else{
        response.send('No Details')
      }
   
    })
    .catch((error) => {
      handleError(error);
    });
};

Controllers.getTeamEventsById = async function (request, response) {
  let requestuestURL = `${configs.API_URL}/eventslast.php?id=${request.params.teamId}`;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let eventsArr = [];
      let data = apiResponse.data.responseults;
      data.map((item) => {
        let event = new Event(item);
        eventsArr.push(event);
        response.send(eventsArr);
      });
      response.send(teamsArr);
    })
    .catch((error) => {
      handleError(error);
    });
};

Controllers.getPlayersController = async function (request, response) {
  let requestuestURL = `${configs.API_URL}/lookupplayer.php?id=${request.params.playerId}`;
  axios.get(requestuestURL).then((apiResponse) => {
    let playersArr = [];
    let data = apiResponse.data.players;
    data
      .map((item) => {
        let player = new Player(item);
        if (item.strSport === 'Soccer') {
          playersArr.push(player);
        }
      })
      .catch((error) => {
        handleError(error);
      });
    response.send(playersArr);
  });
};

function handleError(error) {
  console.clear();
  console.log(error);
}
module.exports = Controllers;
