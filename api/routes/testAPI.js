let express = require('express');
let router = express.Router();
let database = require('../database');
let ItemModel = require('../schema/items.js')
// const app = express()
// const port = 3000
//
// let bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// router.get('/', function(req, res, next) {
// 	// res.send('API is working properly');
// 	res.send(db)
// })

router.get('/', function(req, res, next) {
  console.log("doing a get")
  ItemModel
    .find({
      set: 1
    })
    .then(doc => {
      res.send(doc)
      console.log(doc);
    })
    .catch(err => {
      console.error(err)
    })
})


// router.post('/', function(req, res, next) {
//   console.log("doing a post")
//
// })


router.post('/', function(req, res, next) {
  console.log("doing a post")
  console.log(req.body.squares)


  ItemModel
    .findOneAndUpdate(
      {
        set: req.body.set  // search query
      },
      {
        dice: req.body.squares   // field:values to update
      })
    .then(doc => {
      // console.log(doc)
      console.log("saved and responding")
      res.send("updated")
    })
    .catch(err => {
      console.log("doing an err")
      console.error(err)
    })


  // let dbitem = new ItemModel({
  //   dice: [
  //     {type:'d4', value:'d4'},
  //     {type:'d6', value:'d6'},
  //     {type:'d8', value:'d8'},
  //     {type:'d10', value:'d10'},
  //     {type:'d12', value:'d12'},
  //     {type:'d20', value:'d20'}
  //   ],
  //   set: 1
  // })

  // dbitem.save()
  //    .then(doc => {
  //      console.log(doc)
  //      res.send("saved set")
  //    })
  //    .catch(err => {
  //      console.error(err)
  //    })
})


// router.post('/', function(req, res, next){
// 	db = req.body;
// 	res.send(db)
// })
//
module.exports = router;

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
