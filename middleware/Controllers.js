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
        if (data) {
          data.map((item) => {
            if (item.strSport === 'Soccer') {
              leagueArr.push(new League(item));
            }
          });
          response.send(leagueArr);
        } else {
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
      // console.log(data)
      if (data) {
        // console.log(data)
        response.send(teamsdata);
      } else {
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

      if (data) {
        data.map((item) => {
          let team = new Team(item);
          if (item.strSport === 'Soccer') {
            teamsArr.push(team);
          }
        });
        response.send(teamsArr);
      } else {
        response.send('No Details');
      }
    })
    .catch((error) => {
      handleError(error);
    });
};

Controllers.getallTeamesController = async function (request, response) {
  let requestuestURL = `${configs.API_URL}/lookup_all_teams.php?id=${request.params.leagueId}`;

  console.log(request.params.leagueId);
  requestuestURL;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let teamsArr = [];
      let data = apiResponse.data.teams;
      if (data) {
        data.map((item) => {
          let team = new Team(item);
          if (item.strSport === 'Soccer') {
            teamsArr.push(team);
          }
        });
        response.send(teamsArr);
      } else {
        response.send(request.params.leagueId);
      }
    })
    .catch((error) => {
      handleError(error);
    });
};

Controllers.getTeamEventsById = async function (request, response) {
  let requestuestURL = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${request.params.teamId}`;
  axios
    .get(requestuestURL)
    .then((apiResponse) => {
      let eventsArr = [];
      // console.log(apiResponse)
      let data = apiResponse.data.results;
      data.map((item) => {
        eventsArr.push(new Event(item));
      });
      response.send(eventsArr);
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
  }).catch(error => console.log(error));
};

function handleError(error) {
  console.log(error);
}

Controllers.getPlayersController = async function (request, response) {
  let teamsId = [
    { team: 'sapin', id: 19 },
    { team: 'sweden', id: 17 },
    { team: 'england', id: 16 },
    { team: 'italy', id: 3 },
    { team: 'germany', id: 21 },
    { team: 'portagel', id: 23 },
    { team: 'real madrid', id: 76 },
    { team: 'barcelona', id: 97 },
    { team: 'juventus', id: 96 },
    { team: 'brossia dortmund', id: 92 },
    { team: 'psg', id: 100 },
    { team: 'munchester united', id: 102 },
    { team: 'ac milan', id: 159 },
  ];

  let index = teamsId.findIndex(
    (obj) => request.params.club === obj.team && obj,
  );

  let id = teamsId[index].id;

  let thePlayers = [];
  axios
    .get(
      `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${id}&APIkey=b813d8c5deef680f21c52cc494ffe787a9d6637b669a2c74e407709a42242a0f`,
    )
    .then((res) => {
      thePlayers = res.data.result;
      response.send(thePlayers);
     
    }).catch((err) => {console.log(err)})
};

module.exports = Controllers;
