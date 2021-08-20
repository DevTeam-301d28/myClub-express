
// app.get("/home/team", (req, res) => {
//   let name = req.query.name;
//   axios
//     .get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`)
//     .then((resp) => {
//       res.json(resp.data);
//     });
// });
// app.get("/home/player", (req, res) => {
//   let name = req.query.name;
//   axios
//     .get(
//       `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${name}`
//     )
//     .then((resp) => {
//       res.json(resp.data);
//     });
// });