const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = require("../db-init/dbConn");


// api to get all the user entry 
router.get("/all-entry", async (req, res, next) => {
    console.log("all entry api")
   
    try {
      const result = await db.any(
        `select * from user_entry`
      );
      // console.log("result", result)
      if (result.length == 0) {
        res.status(400).json({
          status: 400,
          message: "No Entry found",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Fecthed all entry successfully",
          data: { result },
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Error",
      });
    }
  });


  // create a new entry
router.post("/create-entry", async (req, res, next) => {
    console.log("create entry api", req.body)

    try{
      var imageUri=req.body.imageUri
      var imageDescription=req.body.imageDescription
    }
    catch (error) {
      res.status(400).json({
        status: 400,
        message: "Data missing",
      });
    }
   
    try {
      const result = await db.none(
        `INSERT INTO user_entry(image_uri, image_description, entry_date, image_location, temperature) VALUES('${imageUri}', '${imageDescription}','${imageDescription}','${imageDescription}','${imageDescription}')`
      );
      
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: 400,
        message: "Error",
      });
    }
  });
  
  module.exports = router;
