const asyncHandler= require("express-async-handler");
const TermineSchema = require ("../models/termineModel");
const mongoose = require("mongoose"); 

// @description GET all Bewerbungen
// @route GET /api/bewerbungen
// @access Private
const getTermine =asyncHandler( async (req, res)=>{
    const termine = await TermineSchema.find()
    res.status(200).json( termine )
})

// @description Get one Bewerbung
// @route GET /api/bewerbungen/:id
// @access Private
const getOneTermin =asyncHandler( async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    const termin = await TermineSchema.findById(id)
  
    if (!termin) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    res.status(200).json(termin)

})

// @description Post Bewerbung
// @route POST /api/bewerbungen
// @access Private
const postTermin = asyncHandler( async (req, res)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error("Bitte ein Textfeld eingeben");
    }

    const termin = await TermineSchema.create({
        title : req.body.title,
        date: req.body.date,
        kategorie: req.body.kategorie,
        frequenz: req.body.frequenz
    })

    res.status(200).json( termin )
})

// @description PUT a Bewerbung
// @route PUT /api/bewerbungen/:id
// @access Private
const updateTermin = asyncHandler(async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Termin nicht gefunden'})
    }

    const updateTermin = await TermineSchema.findByIdAndUpdate({_id: id},req.body, {
        new: true
    })

    if (!updateTermin) {
        return res.status(400).json({error: 'Termin nicht gefunden'})
    }
    res.status(200).json(updateTermin)
})

// @description DELETE a Bewerbung
// @route DELETE /api/bewerbungen/:id
// @access Private
const deleteTermin =asyncHandler(async (req, res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    const termin = await TermineSchemaSchema.findOneAndDelete({ _id: id })
  
    if (!termin) {
      return res.status(404).json({error: 'Eintrag nicht gefunden'})
    }
  
    res.status(200).json(termin)
})

module.exports= {
    getTermine,
    getOneTermin,
    postTermin,
    updateTermin,
    deleteTermin
}