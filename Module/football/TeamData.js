'user strict';

class TeamData {
    constructor(team) {
        this.teamId = team.idTeam,
            this.strTeam = team.strTeam,
            this.intFormedYear = team.intFormedYear,
            this.strLeague = team.strLeague,
            this.idLeague = team.idLeague,
            this.strStadium = team.strStadium,
            this.strStadiumThumb = team.strStadiumThumb,
            this.strStadiumDescription = team.strStadiumDescription,
            this.strStadiumLocation = team.strStadiumLocation,
            this.intStadiumCapacity = team.intStadiumCapacity,
            this.strWebsite = team.strWebsite,
            this.strFacebook = team.strFacebook,
            this.strTwitter = team.strTwitter,
            this.strYoutube = team.strYoutube,
            this.strInstagram = team.strInstagram,
            this.strCountry = team.strCountry,
            this.strDescriptionEN = team.strDescriptionEN,
            this.strTeamBadge = team.strTeamBadge,
            this.strTeamJersey = team.strTeamJersey,
            this.strTeamLogo = team.strTeamLogo,
            this.strTeamFanart1 = team.strTeamFanart1,
            this.strTeamFanart2 = team.strTeamFanart2,
            this.strTeamFanart3 = team.strTeamFanart3,
            this.strTeamFanart4 = team.strTeamFanart4,
            this.strTeamBanner = team.strTeamBanner
    }
}
module.exports = TeamData
