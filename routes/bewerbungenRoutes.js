const express = require("express");
const router = express.Router();
const { getBewerbungen, getOneBewerbung, postBewerbungen, updateBewerbung, deleteBewerbungen } = require("../controllers/bewerbungenController");

//Routes:
/*
router.get("/:id", getOneBewerbung)
router.get("/", getBewerbungen )
router.post("/", postBewerbungen )
router.put("/:id", updateBewerbung )
router.delete("/:id", deleteBewerbungen)
*/

router.route("/").get(getBewerbungen).post(postBewerbungen);
router.route("/:id").get(getOneBewerbung).put(updateBewerbung).delete(deleteBewerbungen);

module.exports = router;