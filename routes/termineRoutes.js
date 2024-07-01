const express = require("express");
const router = express.Router();
const {getTermine, getOneTermin, postTermin, updateTermin, deleteTermin } = require("../controllers/terminController");

//Routes:
/*
router.get("/:id", getOneBewerbung)
router.get("/", getBewerbungen )
router.post("/", postBewerbungen )
router.put("/:id", updateBewerbung )
router.delete("/:id", deleteBewerbungen)
*/

router.route("/").get(getTermine).post(postTermin);
router.route("/:id").get(getOneTermin).put(updateTermin).delete(deleteTermin);

module.exports = router;