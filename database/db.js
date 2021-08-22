const jwtVerify = require('../security/checkJwt.controller');

const UserModel = require('./Models/Users');

async function checkUserData(request, response) {
  let token = request.headers.authorization.split(' ')[1];
  jwtVerify(token, valid);
  async function valid(jwtUser) {
    const email = jwtUser.email;
    const uname = jwtUser.given_name + ' ' + jwtUser.family_name;
    await UserModel.find({ email }, (err, data) => {
      if (err) throw err
      if (!data.length > 0) {
        data[0] = { 
              email,
              uname,
              intrestedInPlayers: [1],
              intrestedInLeauges: [1],
              intrestedInTeams: [1],
              intrestedInPlayers: [1],
             }
        let thisUser = new UserModel(data[0]);
        thisUser.save();
      
      }
     
      response.send(data[0]); });
   
  }
}

const getUsers = (req, res) => {
  User.find()
    .then((all) => {
      if (all) {
        res.json(all);
      } else {
        res.status(404).json('no users');
      }
    })
    .catch((err) => res.json({ error: err }));
};


let showUser = (req, res) => {
  let id = req.params.id;
  console.log(id);
  User.findById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json('user with that id is not found');
      }
    })
    .catch((err) =>
      res.status(500).json({ message: 'user not found', error: err }),
    );
};

// when user update his details///////////////////////////

let updateUser = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  let newData = {};


  console.log(theUser);
  let arr = Object.keys(data);
  arr.map((key) => {
    newData[key] = data[key];
  });

  User.updateOne({ _id: id }, { $set: newData })
    .then((updated) => {
      console.log(newData);
      res.status(200).json({ message: 'updated sccussfully', upt: updated });
    })
    .catch((err) => {
      res.send(500).json({ error: err });
    });
};

//// remove user
let removeUser = async (req, res) => {
  let id = req.id;
  User.remove({ _id: id })
    .then((result) =>
      res
        .status(200)
        .json({ message: 'user deleted succesully', reslt: result }),
    )
    .catch((err) => res.status(500).json({ error: err }));
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  removeUser,
  showUser,
  checkUserData,
  
};
