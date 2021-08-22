class Team {
  constructor(team) {
    this.strAllteamId = team.idTeam,
      this.teamNameDetails = team.strTeam,
      this.sport = team.strSport,
      this.formedYear = team.intFormedYear,
      this.teamName = team.strteamAlternate,
      this.teamImage = team.strTeamBadge,
      this.currentSeason = team.strCurrentSeason,
      this.formedYear = team.intFormedYear,
      this.firstEventDate = team.dateFirstEvent,
      this.country = team.strCountry,
      this.website = team.strWebsite,
      this.facebook = team.strFacebook,
      this.twitter = team.strTwitter,
      this.youtube = team.strYoutube,
      this.description = team.strDescriptionEN,
      this.stadiumImg = team.strStadiumThumb,
      this.stadiumDescription = team.strStadiumDescription,
      this.strStadiumLocation = team.strStadiumLocation,
      this.intStadiumCapacity = team.intStadiumCapacity,
      this.leauge = team.strLeague
  }
}
module.exports = Team