'user strict';


class League{
    constructor(league){
      this.leagueId=league.idLeague,
      this.leagueNameDetails=league.strLeague,
      this.sport=league.strSport,
      this.leagueName=league.strLeagueAlternate,
      this.leagueImage=[league.strFanart1,league.strFanart2,league.strFanart3,league.strFanart4,league.strBanner,
        league.strBadge,league.strLogo,league.strPoster,league.strTrophy],
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