const axios = require('axios');
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
        data.map((item) => {
          let league = new League(item);
          if (item.strSport === 'Soccer') {
            leagueArr.push(league);
          }
        });
        response.send(leagueArr);
      })
      .catch((error) => {
        handleError(error);
      });
  }
};

Controllers.getallTeamData = async function (request, response) {
  let requestuestURL = `${API_URL}/lookupteam.php?id=${request.params.idTeam}`;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let teamsdata = [];
      let data = apiResponse.data.teams;
      data.map((item) => {
        let team = new TeamData(item);
        teamsdata.push(team);
      });
      response.send(teamsdata);
    })
    .catch((error) => {
      handleError(error);
    });
};

Controllers.getallTeamesController = async function (request, response) {
  let requestuestURL = `${API_URL}/lookup_all_teams.php?id=${request.params.leagueId}`;
  requestuestURL;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let teamsArr = [];
      let data = apiResponse.data.teams;
      data.map((item) => {
        let team = new Team(item);
        if (item.strSport === 'Soccer') {
          teamsArr.push(team);
        }
      });
      response.send(teamsArr);
    })
    .catch((error) => {
      handleError(error);
    });
};

Controllers.getTeamEventsById = async function (request, response) {
  let requestuestURL = `${API_URL}/eventslast.php?id=${request.params.teamId}`;
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
  let requestuestURL = `${API_URL}/lookupplayer.php?id=${request.params.playerId}`;
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
