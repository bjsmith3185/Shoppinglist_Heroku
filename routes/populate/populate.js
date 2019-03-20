const router = require("express").Router();
const users = require("../../controllers/usersController");
const shopping = require("../../controllers/shoppingController");

const shoppingData = {
    item: 'Milk',
    store: 'Walmart',
    note: 'Whole Milk',
    qty: 2,
}


const userData ={
    name: "Brian Smith"
}


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
