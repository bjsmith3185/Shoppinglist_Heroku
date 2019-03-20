const router = require("express").Router();
const shopping = require("../../controllers/shoppingController");
// const shoppingList = require('../../middleware/getItemCount/logicForCount')
// route  /api/shopping

router.route("/").get((req, res) => {
  shopping
    .findAll()

    // shoppingList.remainingItems()
    .then(dbresults => {
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/").post((req, res) => {
  // console.log("shopping-Router");
  // console.log(req.body);

  let data = {
    item: req.body.val.item,
    store: req.body.val.store,
    qty: req.body.val.qty,
  };

  shopping
    .create(data)
    .then(dbresults => {
      console.log("after adding to shopping collection");
      console.log(dbresults);
      shopping.findAll()
      .then(allItems => {
        console.log("all items to be returned")
        console.log(allItems)
        res.json(allItems)
      })
      .catch(err => res.status(422).json(err));
      // res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/:id").put((req, res) => {
  console.log(req.params.id);
  console.log(req.body)
  shopping
    .update(req.params.id, req.body)
    .then(dbresults => {
      console.log("response after updating item");

      // make a request for all list items to return
      shopping
        .findAll()
        .then(result => {
          console.log("all list items after removing one")
          console.log(result)
          res.json(result);
        })
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});



router.route("/:id").delete((req, res) => {
  console.log(req.params.id);
  shopping
    .remove(req.params.id)
    .then(dbresults => {
      console.log("response after removing item");

      // make a request for all list items to return
      shopping
        .findAll()
        .then(result => {
          console.log("all list items after removing one")
          console.log(result)
          res.json(result);
        })
        .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
