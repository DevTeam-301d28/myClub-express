class Event {
  constructor(event) {
    (this.eventId = event.idEvent),
      (this.eventName = event.strEvent),
      (this.eventDate = event.dateEvent),
      (this.league = event.strLeague),
      (this.leagueId = event.idLeague),
      (this.season = event.strSeason),
      (this.homeTeam = event.strHomeTeam),
      (this.homeTeamScore = event.intHomeScore),
      (this.homeTeamId = event.idHomeTeam),
      (this.awayTeam = event.strAwayTeam),
      (this.awayTeamScore = event.intAwayScore),
      (this.awayTeamId = event.idawayTeam),
      (this.eventStatus = event.strStatus);
  }
}
class League {
  constructor(league) {
    (this.leagueId = league.idLeague),
      (this.leagueNameDetails = league.strLeague),
      (this.sport = league.strSport),
      (this.leagueName = league.strLeagueAlternate),
      (this.leagueImage = league.strBadge),
      (this.currentSeason = league.strCurrentSeason),
      (this.formedYear = league.intFormedYear),
      (this.firstEventDate = league.dateFirstEvent),
      (this.country = league.strCountry),
      (this.website = league.strWebsite),
      (this.facebook = league.strFacebook),
      (this.twitter = league.strTwitter),
      (this.youtube = league.strYoutube),
      (this.description = league.strDescriptionEN);
  }
}

class Player {
  constructor(player) {
    (this.idPlayer = player.idPlayer),
      (this.idTeam = player.idTeam),
      (this.sport = player.strSport),
      (this.idTeam2 = player.idTeam2),
      (this.strNationality = player.strNationality),
      (this.idSoccerXML = player.idSoccerXML),
      (this.strPlayer = player.strPlayer),
      (this.strTeam = player.strTeam),
      (this.strTeam2 = player.strTeam2),
      (this.dateBorn = player.dateBorn),
      (this.strNumber = player.strNumber),
      (this.strDescriptionEN = player.strDescriptionEN),
      (this.strPosition = player.strPosition),
      (this.strFacebook = player.strFacebook),
      (this.strWebsite = player.strWebsite),
      (this.strYoutube = player.strYoutube),
      (this.playerImage = player.strThumb);
  }
}
class Team {
  constructor(team) {
    (this.strAllteamId = team.idTeam),
      (this.teamNameDetails = team.strTeam),
      (this.sport = team.strSport),
      (this.formedYear = team.intFormedYear),
      (this.teamName = team.strteamAlternate),
      (this.teamImage = team.strTeamBadge),
      (this.currentSeason = team.strCurrentSeason),
      (this.formedYear = team.intFormedYear),
      (this.firstEventDate = team.dateFirstEvent),
      (this.country = team.strCountry),
      (this.website = team.strWebsite),
      (this.facebook = team.strFacebook),
      (this.twitter = team.strTwitter),
      (this.youtube = team.strYoutube),
      (this.description = team.strDescriptionEN),
      (this.stadiumImg = team.strStadiumThumb),
      (this.stadiumDescription = team.strStadiumDescription),
      (this.strStadiumLocation = team.strStadiumLocation),
      (this.intStadiumCapacity = team.intStadiumCapacity),
      (this.leauge = team.strLeague);
  }
}

class TeamData {
  constructor(team) {
    (this.teamId = team.idTeam),
      (this.strTeamName = team.strTeam),
      (this.strFormedYear = team.intFormedYear),
      (this.strLeagueName = team.strLeague),
      (this.strleaguesIds = team.idLeague),
      (this.strStadiumInfo = [
        team.strStadium,
        team.strStadiumThumb,
        team.strStadiumDescription,
        team.strStadiumLocation,
        team.intStadiumCapacity,
      ]);
    this.strTeamLinks = [
      team.strWebsite,
      team.strFacebook,
      team.strTwitter,
      team.strYoutube,
      team.strInstagram,
    ];
    (this.strTeamCountry = team.strCountry),
      (this.strTeamDescriptionEN = team.strDescriptionEN),
      (this.strTeamLogo = team.strTeamLogo),
      (this.strLogosArray = [
        team.strTeamFanart1,
        team.strTeamFanart2,
        team.strTeamFanart3,
        team.strTeamFanart4,
      ]);
    (this.strTeamJersey = team.strTeamJersey),
      (this.strTeamBadge = team.strTeamBadge),
      (this.strTeamBanner = team.strTeamBanner),
      (this.currentSeason = team.strCurrentSeason);
  }
}

module.exports = { Event, League, Player, Team, TeamData };
