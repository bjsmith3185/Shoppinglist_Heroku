const router = require("express").Router();
const allData = require("../../middleware/loadAllData");
const strikeThru = require("../../middleware/strikeThru");
const remove = require("../../middleware/deleteItem");
const addItem = require("../../middleware/addItem");
const updateStore = require("../../middleware/updateStore");
const login = require("../../middleware/login");
const updateList = require("../../middleware/updateList");

// route  /api/system

router.route("/load/:id").get((req, res) => {
  allData
    .pageLoad(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/strike/:id").put((req, res) => {
  strikeThru
    .strike(req.params.id, req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/delete/:item/:user").delete((req, res) => {
  remove
    .delete(req.params.item, req.params.user)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/addItem/:id").post((req, res) => {
  addItem
    .newItem(req.params.id, req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/setstore/:id").put((req, res) => {
  updateStore
    .setStore(req.params.id, req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/login").put((req, res) => {
  login
    .checkPassword(req.body)
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/updatelist/:id").put((req, res) => {
  updateList.edit(req.params.id, req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
