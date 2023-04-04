//
// export async function getLivres(req, res) {
//     try {
//         const collection = client.db('bibliotheque').collection('livre'); // Récupération de la collection 'livre' dans la base de données
//         const data = await collection.findOne({}); // Récupération de tous les livres dans la collection et stockage dans un tableau
//         res.json(data.livre); // Renvoi des livres sous forme de JSON
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Erreur serveur');
//     }
// }