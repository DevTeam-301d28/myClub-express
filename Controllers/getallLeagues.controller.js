const express = require("express");
const app = express();
const axios = require("axios");
const League = require("../Module/football/League");

 let getallLeaguesController=(req, res) => {
    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${req.params.countryName}
  `)
      .then((resp) => {
          let leagueArr=[]
        let data = resp.data.countrys;
        data.map(item => {
          let league = new League(item);
          if(item.strSport === 'Soccer' ) {
              if (item.strFanart1){


              }else{
                  
              }
              leagueArr.push(league)}
          ;
        });
  
        res.send(leagueArr);
      }
      );
}

module.exports=getallLeaguesController;