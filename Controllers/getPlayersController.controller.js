const express = require("express");
const app = express();
const axios = require("axios");
const Player = require("../Module/football/Player");

 let getPlayersController=(req, res) => {
    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${req.params.playerId}`)
      .then((resp) => {
          let playersArr=[]
        let data = resp.data.players;
        data.map(item => {
          let player = new Player(item);
          if(item.strSport === 'Soccer' ) {   
              playersArr.push(player)}
        });
  
        res.send(playersArr);
      }
      );
}

module.exports=getPlayersController;