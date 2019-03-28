const router = require("express").Router();
const users = require("../../controllers/usersController");

// route  /api/users

router.route("/").get((req, res) => {
  users
    .findAll()
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/").put((req, res) => {
  makeList
    .updateUsersStore(req.body)
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});
module.exports = router;
