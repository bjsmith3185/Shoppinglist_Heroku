const router = require("express").Router();
const shopping = require("../../controllers/shoppingController");
// const shoppingList = require('../../middleware/getItemCount/logicForCount')
// route  /api/shopping

router.route("/").get((req, res) => {
  shopping
    .findAll()
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/").post((req, res) => {
  let data = {
    item: req.body.val.item,
    store: req.body.val.store,
    qty: req.body.val.qty
  };

  shopping
    .create(data)
    .then(dbresults => {
      shopping
        .findAll()
        .then(allItems => {
          res.json(allItems);
        })
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

router.route("/:id").put((req, res) => {
  shopping
    .update(req.params.id, req.body)
    .then(dbresults => {
      // make a request for all list items to return
      shopping
        .findAll()
        .then(result => {
          res.json(result);
        })
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

router.route("/:id").delete((req, res) => {
  shopping
    .remove(req.params.id)
    .then(dbresults => {
      // make a request for all list items to return
      shopping
        .findAll()
        .then(result => {
          res.json(result);
        })
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
