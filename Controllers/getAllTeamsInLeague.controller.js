const express = require("express");
const app = express();
const axios = require("axios");
const Team = require("../Module/football/Team");

 let getallTeamesController=(req, res) => {
    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${req.params.leagueName}`)
      .then((resp) => {
          let teamsArr=[]
        let data = resp.data.teams;
        data.map(item => {
          let team = new Team(item);
          if(item.strSport === 'Soccer' ) {   
              teamsArr.push(team)}
        });
  
        res.send(teamsArr);
      }
      );
}

module.exports=getallTeamesController;