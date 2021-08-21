
const express = require("express");
const app = express();
const axios = require("axios");
const Event = require("../Module/football/Event");



let getTeamEventsById=(req, res) => {
    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${req.params.teamId}`)
      .then((resp) => {
            
         let eventsArr=[]
             let data = resp.data.results;
             data.map(item => {
                let event = new Event(item);
                eventsArr.push(event)
              res.send(eventsArr);
            });
  
            res.send(teamsArr);
          }
          );
        }
module.exports=getTeamEventsById;

