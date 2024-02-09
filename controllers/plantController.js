//WE ONLY NEED THIS ONCE!
const Plant = require('../models/plant')

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        res.json(plants)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getPlantById = async (req, res) => {
    try {
        const { id } = req.params;
        const plant = await Plant.findById(id)
        if (plant) {
            //Itzel for the win!
            return res.json(plant);
        }
        return res.status(404).send('Plant with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant
        })
    }
    catch (e){
        return res.status(500).json({ error: error.message })
    }
}

const updatePlant = async(req, res) => {
    try {
        let { id } = req.params
        let plant = await Plant.findByIdAndUpdate(id, req.body, {new: true})
        if (plant) {
            return res.status(200).json(plant)
        }
        throw new Error("plant not found")
    }
    catch (e) {
        return res.status(500).send(error.message); 
    }
 }

const deletePlant = async (req, res) => {
     try{
        const { id } = req.params
        const deleted = await Plant.findByIdAndDelete(id)
        if(deleted)
        return res.status(200).send('plant deleted')
     }
     catch(e){
        return res.status(500).send(e.message);
     }



}

module.exports = {
    getAllPlants,
    getPlantById,
    createPlant,
    updatePlant,
    deletePlant
}