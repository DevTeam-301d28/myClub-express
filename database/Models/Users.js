const mongoose = require('mongoose');

const Searches = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
  searchText: String,
  SearchIndex: String,
});

const User = new mongoose.Schema({
  email: String,
  nickname: String,
  favouriteleague: String,
  favTeamName: String,
  favTeamId: String,
  selectedSport: String,
  favPlayer: String,
  intrestedInTeams: Array,
  intrestedInPlayers: Array,
  intrestedInLeauges: Array
});

const UserModel = mongoose.model('users', User);

module.exports = UserModel;