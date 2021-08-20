'user strict';


class League{
    constructor(league){
      this.LeagueId=league.idLeague,
      this.LeagueNameDetails=league.strLeague,
      this.sport=league.strSport,
      this.LeagueName=league.strLeagueAlternate
      this.LeagueImage=league.strFanart1
  
    }
  }
  module.exports=League