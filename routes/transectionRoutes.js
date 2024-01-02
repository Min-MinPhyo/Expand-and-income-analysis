const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
  addCategoryName,
  getCategoryName,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);


//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);


//get transections
//get transections
router.post("/get-transection", getAllTransection);

//add category
router.post("/add-categoryName",addCategoryName)
router.get("/get-categoryName",getCategoryName)

module.exports = router;