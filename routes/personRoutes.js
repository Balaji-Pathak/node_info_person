const express = require('express');
const router = express.Router();
const Person = require("./../models/person");
router.post('/',async(req, res) =>{
    try {
      const data  = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log("data saved", response);
      res.status(200).json(response);
      
    } catch (error) {
      console.log(error);
      res.status.json(500).json({error: 'internal error occured'});
    }
    
  })
  router.get('/', async(req, res)=>{
    try {
      const data = await Person.find();
      console.log("data saved", data);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status.json(500).json({error: 'internal error occured'});
    }
    
  })
  router.put('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,// return the updated document
            revalidators:true//run mongoose validations
        })
        if(!response){
            return res.status(404).json({error: 'person nor found'});
            
        }
        console.log("data updated");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status.json(500).json({error: 'internal error occured'});
    }
  })
  router.delete('/:id', async(req, res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findOneAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'person nor found'});
        }
        console.log("data deleted");
        res.status(200).json({message: 'person deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status.json(500).json({error: 'internal error occured'});
    }
  })
  module.exports = router;