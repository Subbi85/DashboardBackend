const asyncHandler= require("express-async-handler");
const BewerbungSchema = require ("../models/bewerbungenModel");
const mongoose = require("mongoose"); 

// @description GET all Bewerbungen
// @route GET /api/bewerbungen
// @access Private
const getBewerbungen =asyncHandler( async (req, res)=>{
    const bewerbungen = await BewerbungSchema.find()
    res.status(200).json( bewerbungen )
})

// @description Get one Bewerbung
// @route GET /api/bewerbungen/:id
// @access Private
const getOneBewerbung =asyncHandler( async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    const bewerbung = await BewerbungSchema.findById(id)
  
    if (!bewerbung) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    res.status(200).json(bewerbung)

})

// @description Post Bewerbung
// @route POST /api/bewerbungen
// @access Private
const postBewerbungen = asyncHandler( async (req, res)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error("Bitte ein Textfeld eingeben");
    }

    const bewerbung = await BewerbungSchema.create({
        title : req.body.title
    })

    res.status(200).json( bewerbung )
    console.log(req.body.text);
})

// @description PUT a Bewerbung
// @route PUT /api/bewerbungen/:id
// @access Private
const updateBewerbung = asyncHandler(async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Bewerbung nicht gefunden'})
    }

    const updatedBewerbung = await BewerbungSchema.findByIdAndUpdate({_id: id},req.body, {
        new: true
    })

    if (!updatedBewerbung) {
        return res.status(400).json({error: 'Bewerbung nicht gefunden'})
    }
    res.status(200).json(updatedBewerbung)
})

// @description DELETE a Bewerbung
// @route DELETE /api/bewerbungen/:id
// @access Private
const deleteBewerbungen =asyncHandler(async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    const bewerbung = await BewerbungSchema.findOneAndDelete({ _id: id })
  
    if (!bewerbung) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    res.status(200).json(bewerbung)
})

module.exports= {
    getBewerbungen,
    getOneBewerbung,
    postBewerbungen,
    updateBewerbung,
    deleteBewerbungen
}