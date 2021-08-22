'user strict';

class TeamData {
    constructor(team) {
        this.teamId = team.idTeam,
            this.strTeamName = team.strTeam,
            this.strFormedYear = team.intFormedYear,
            this.strLeagueName = team.strLeague,
            this.strleaguesIds = team.idLeague,
            this.strStadiumInfo = [team.strStadium,team.strStadiumThumb, team.strStadiumDescription,team.strStadiumLocation, team.intStadiumCapacity]
            this.strTeamLinks = [team.strWebsite,team.strFacebook,team.strTwitter,team.strYoutube,team.strInstagram]
            this.strTeamCountry = team.strCountry,
            this.strTeamDescriptionEN = team.strDescriptionEN,
            this.strLogosArray= [this.strTeamLogo = team.strTeamLogo,team.strTeamFanart1,team.strTeamFanart2,team.strTeamFanart3,team.strTeamFanart4]
            this.strTeamJersey = team.strTeamJersey,
            this.strTeamBadge = team.strTeamBadge,
            this.strTeamBanner = team.strTeamBanner
    }
}
module.exports = TeamData