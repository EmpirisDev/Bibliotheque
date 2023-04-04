// Import des modules nécessaires
const express = require('express'); // Module pour créer une application Express
const cors = require('cors'); // Module pour gérer les requêtes CORS
const { MongoClient } = require('mongodb'); // Module pour communiquer avec MongoDB

// Création de l'application Express
const app = express();

// Configuration de l'application pour utiliser les requêtes CORS
app.use(cors());

// URI de connexion à la base de données MongoDB
const uri = 'mongodb+srv://admin:Antoine358@bibliotheque.cjuyuyw.mongodb.net/?retryWrites=true&w=majority';

// Configuration du client MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Fonction pour se connecter à la base de données MongoDB
async function connect() {
    try {
        await client.connect(); // Connexion au client MongoDB
        console.log('Connecté à la base de données');
    } catch (error) {
        console.log("tes pas co")
        console.error(error);
    }
}

// Appel de la fonction pour se connecter à la base de données MongoDB
connect();

// Définition de la route API pour renvoyer un message JSON
app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// Définition de la route API pour récupérer les livres dans la base de données MongoDB
app.get('/api/livres', async (req, res) => {
    try {
        const collection = client.db('bibliotheque').collection('livre'); // Récupération de la collection 'livre' dans la base de données
        const data = await collection.find({}).toArray(); // Récupération de tous les livres dans la collection et stockage dans un tableau
        res.json(data); // Renvoi des livres sous forme de JSON
    } catch (error) {
        console.error(error);
        res.status(500).send('Va check app.get API/livres');
    }
});

// Lancement du serveur sur le port 80
app.listen(80, () => {
    console.log('Serveur démarré sur le port 80');
});
