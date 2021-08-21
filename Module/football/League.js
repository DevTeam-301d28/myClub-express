'user strict';


class League{
    constructor(league){
      this.leagueId=league.idLeague,
      this.leagueNameDetails=league.strLeague,
      this.sport=league.strSport,
      this.leagueName=league.strLeagueAlternate,
      this.leagueImage=league.strBadge,
        this.currentSeason=league.strCurrentSeason,
        this.formedYear=league.intFormedYear,
        this.firstEventDate=league.dateFirstEvent,
        this.country=league.strCountry,
        this.website=league.strWebsite,
        this.facebook=league.strFacebook,
        this.twitter=league.strTwitter,
        this.youtube=league.strYoutube,
        this.description=league.strDescriptionEN
    }
  }
  module.exports=League