const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = require("../db-init/dbConn");


// api to get all the user entry 
router.get("/all-entry", async (req, res, next) => {
    console.log("all entry api")
    // const userId = req.params.id;
    try {
      const result = await db.any(
        `select * from user_entry`
      );
      if (result.length == 0) {
        res.status(400).json({
          status: 400,
          message: "No MarinaX Card found",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "MarinaX card details fetched successfully",
          data: { result, user },
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Error",
      });
    }
  });
  
  module.exports = router;
