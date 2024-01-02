const transectionModel = require("../models/transectionModel");
const inexModel=require("../models/inexModel.js")
const moment = require("moment");
const getAllTransection = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;

    const transections = await transectionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });

    console.log(transections);

    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(erorr);
  }
};

const deleteTransection = async (req, res) => {
  try {
    await transectionModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const editTransection = async (req, res) => {
  try {
    await transectionModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit SUccessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransection = async (req, res) => {
  try {
    // const newTransection = new transectionModel(req.body);
    const newTransection = new transectionModel(req.body);
    console.log(req.body);
    console.log(newTransection);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


const addCategoryName=async(req,res)=>{
  
  try {

    const categoryName=new inexModel(req.body)
    await categoryName.save()

    console.log(categoryName)
    res.status(201).send("Add Category Created");


  } catch (error) {
    res.status(500).json(error)
    
  }
}




const getCategoryName=async(req,res)=>{
 const {category}=req.body

  try {

    const allCategoryNames=await inexModel.find()
    res.status(200).json(allCategoryNames)
    
  } catch (error) {
    res.status(500).json(error.message)
  }



}
module.exports = {
  getAllTransection,
  addTransection,
  editTransection,
  deleteTransection,
  addCategoryName,
  getCategoryName
};