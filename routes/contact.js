const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContacts,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactRoutes");

/* GET contact list. */

// router.get("/", function (req, res, next) {
//   res.status(200).json({ message: "Data successfully loaded", data: contacts });
// });

router
  .get("/", getContacts)            //This is to get list of Contacts
  .post("/", createContacts)     //This is to post a Contact
  .put("/:id", updateContacts)      //This is to update a Contact
  // .put("/:name", updateContacts)      //dont add this see point in mobile Express noted
  .delete("/:id", deleteContacts); //This is to delete a of Contact

module.exports = router;
