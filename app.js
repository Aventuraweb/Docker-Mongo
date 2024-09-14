import express from "express";
import mongoose from "mongoose";

const app = express(); 

const Animales = mongoose.model("animales", new mongoose.Schema ({
    nombre: String, 
    especie: String, 
    status: String
})); 

mongoose.connect('mongodb://root:12345@mongo1:27017/miapp?authSource=admin')

app.get("/", async (req, res) => {
    res.json({massage: "Loading"});
    const animales = await Animales.find(); 

    return res.send(animales); 
}); 


app.get("/agregar", async (req, res) => {
    console.log("Creando");
    await Animales.create({ nombre: 'gato', especie: 'felino', status: 'Dead' });
    return res.send("create data Animals");
});

// app.get("/agregar", async (req, res) => {
//     try {
//         console.log("Creando");
//         const nuevoAnimal = await Animales.create({ nombre: 'gato', especie: 'felino', status: 'Dead' });
//         return res.send(`Animal creado: ${JSON.stringify(nuevoAnimal)}`);
//     } catch (error) {
//         console.error("Error al crear el animal:", error);
//         return res.status(500).send("Error al crear el animal");
//     }
// });




app.get("/destroy/:name", async (req, res) => {
    const elimimar = await Animales.deleteOne({nombre: `${req.params.name}`}); 
    return res.send("delete...")
}); 

const port = 3000;  

app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`); 
})