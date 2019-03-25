const router = require("express").Router();
// const shopping = require("../../controllers/shoppingController");
// const users = require("../../controllers/usersController");
// const populateStore = require("../../middleware/createDisplayList/logicDisplayList");
// const modifyShoppingCollection = require("../../middleware/updateShopping/modifyShopping")

const allData = require('../../middleware/loadAllData')
const strikeThru = require('../../middleware/strikeThru')
const remove = require("../../middleware/deleteItem")
const addItem = require("../../middleware/addItem")
const updateStore = require("../../middleware/updateStore")
const login = require("../../middleware/login");

// route  /api/system


router.route("/load/:id").get((req, res) => {
  // console.log('in systems router, this is id')
  // console.log(req.params.id)

  allData.pageLoad(req.params.id)
  .then(result => {
    // console.log(result)
    res.json(result)
  })
  .catch(err => res.status(422).json(err));
})

router.route("/strike/:id").put((req, res) => {
  // console.log(req.body)
  strikeThru.strike(req.params.id, req.body)
  .then(result => {
    res.json(result)
  })
  .catch(err => res.status(422).json(err));
})

router.route("/delete/:id").delete((req, res) => {
  // console.log("!!!!!")
  // console.log(req.params.id)
  remove.delete(req.params.id)
  .then(result => {
    res.json(result)
  })
  .catch(err => res.status(422).json(err));
})

router.route("/addItem/:id").post((req, res) => {
  // console.log("in system router&&&&&&&&&&7")
  // console.log(req.body)
  // console.log(req.params.id)
  addItem.newItem(req.params.id, req.body)
  .then(result => {
    res.json(result)
  })
  .catch(err => res.status(422).json(err));
})

router.route("/setstore/:id").put((req, res) => {
  // console.log(req.body)
  updateStore.setStore(req.params.id, req.body)
  .then(result => {
    res.json(result)
  })
  .catch(err => res.status(422).json(err));
})

router.route("/login").put((req, res) => {

  login.checkPassword(req.body)
    .then(dbresults => {
      // console.log(dbresults)
      res.json(dbresults);
    })
    .catch(err => res.status(422).json(err));
});





// router.route("/all").get((req, res) => {
//   // console.log("in the systems route")

//   // send user_id to middleware folder

//   populateStore.specificStoreList()
//   .then(dbresults => {
//     // console.log("&&&&&&&&&&")
//     // console.log(dbresults)
//     res.json(dbresults)
//   })
//   .catch(err => res.status(422).json(err));
// });

// router.route("/checkoff/:id").put((req, res) => {
//   // send id to middle ware folder
//   modifyShoppingCollection.checkOff(req.params.id, req.body)
//   .then(dbresults => {
//     res.json(dbresults)
//   })
//   .catch(err => res.status(422).json(err));
// });

// router.route("/all").get((req, res) => {
//   // console.log("in the systems route")
//   shopping
//     .findAll()
//     .then(dbresults => {
//       // console.log(dbresults)
     
//       users
//         .findById()
//         .then(userResult => {
//           // console.log("in the money")
//           // console.log(dbresults)
//           // console.log(userResult)
           
//            let returnData = {
//              storeData: dbresults,
//              userData: userResult
//            }
//            res.json(returnData);
//         })
//         .catch(err => res.status(422).json(err));
//     })
//     .catch(err => res.status(422).json(err));
// });


module.exports = router;
