const mongoose = require('mongoose');

const Searches = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 },
    searchText: String ,
    SearchIndex: String ,
});


const User = new mongoose.Schema({
    email: String ,
    userName: String,
    favLeague: String,
    favTeam: String,
    favPlayer: String,
    intrestedInPlayers: [],
    intrestedInLeauges: [],
    intrestedInTeams: [],
    intrestedInPlayers: [],
    searchHistory: [Searches]
});


const UserModel = mongoose.model('users', User);

module.exports = UserModel;
