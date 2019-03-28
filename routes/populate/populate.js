const router = require("express").Router();
const users = require("../../controllers/usersController");
const shopping = require("../../controllers/shoppingController");

const shoppingData = {
  item: "Milk - smik",
  store: "Walmart",
  qty: 2
};

const userData = {
  name: "brian smith",
  password: "1234"
};

// route  /populate

router.route("/shopping").post((req, res) => {
  shopping
    .create(shoppingData)
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/users").post((req, res) => {
  users
    .create(userData)
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
