

class Event{
    constructor(event){
      this.eventId=event.idEvent,
      this.eventName=event.strEvent,
      this.eventDate=event.dateEvent,
      this.league=event.strLeague,
      this.leagueId=event.idLeague,
      this.season=event.strSeason,
      this.homeTeam=event.strHomeTeam,  
      this.homeTeamScore=event.intHomeScore,
      this.homeTeamId=event.idHomeTeam,  
      this.awayTeam=event.strAwayTeam,  
      this.awayTeamScore=event.intAwayScore,
      this.awayTeamId=event.idawayTeam, 
      this.eventStatus=event.strStatus  
    }
}
module.exports=Event