const router = require("express").Router();
const users = require("../../controllers/usersController");


// route  /api/users

// login request
// router.route("/login").put((req, res) => {

//   login.checkPassword(req.body)
//     .then(dbresults => {
//       console.log(dbresults)
//       res.json(dbresults);
//     })
//     .catch(err => res.status(422).json(err));
// });



router.route("/").get((req, res) => {
  users
    .findAll()
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route('/').put((req, res) => {

  // send to middleare folder
  makeList.updateUsersStore(req.body)
  .then(dbresults => {
    // console.log("data to send to reducer")
    // console.log(dbresults)
    res.json(dbresults)
  })
.catch(err => res.status(422).json(err));
})
module.exports = router;
