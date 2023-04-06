import React, {useEffect, useState} from "react";


type Livre = {
    _id: string;
    titre: string;
    description: string;
    genre: string;
    auteur: string;
    nombrePages: number;
    image: string;
};

export function ListeLivres() {
    const [records, setRecords] = useState<Livre[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLivre, setSelectedLivre] = useState<Livre | null>(null);

    useEffect(() => {
        fetch("http://localhost:80/api/livres")
            .then((response) => response.json())
            .then((data) => setRecords(data.livre))
            .catch((error) => console.error(error));
    }, []);
    const handleLivreClick = (livre: Livre) => {
        setSelectedLivre(livre);
    };

    const handleModalClose = () => {
        setSelectedLivre(null);
    };

    const listLivre = records.map((livre: Livre) => {
        return (
            <div
                key={livre._id}
                className="m-2 section bg-gray-100 border border-gray-300 p-4 rounded-lg mb-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
                <h2 className="text-xl text-center font-bold mb-2">{livre.titre}</h2>
                <div className="flex items-center justify-center">
                    <img
                        src={livre.image}

                        alt={`Couverture de ${livre.titre}`}
                        className="h-64 max-w-full max-h-full object-contain"
                    />
                </div>
                <div className="mt-2 ">
                    <div className={"bg-gray-300 p-2 mb-0.5 text-center rounded"}>
                        <p className={"font-bold"}>Description </p>
                        <p className="text-gray-700">{livre.description}</p>
                    </div>
                    <div className={"flex-auto flex justify-center"}>
                        <button
                            className="mt-3 bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleLivreClick(livre)}
                        >
                            Voir les détails
                        </button>
                    </div>
                </div>
            </div>
        );
    });
    return (

        <div className="container bg-gray-100 mx-auto">

            <h1 className="text-center text-4xl font-extralight mb-4">Liste des livres</h1>
            <div className="flex flex-wrap justify-center">
                {listLivre}
            </div>
            {selectedLivre && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div
                        className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div
                            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="sm:flex sm:items-start">
                                <div className="flex-shrink-0">
                                    <img className="h-64 max-w-full max-h-full object-contain" src={selectedLivre.image}
                                         alt={`Couverture de ${selectedLivre.titre}`}/>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedLivre.titre}</h3>
                                    <div className="mt-2">
                                        <div className="text-sm text-gray-600">
                                            <p className={"m-2"}>{selectedLivre.description}</p>
                                            <p className={"m-2"}>Genre : {selectedLivre.genre}</p>
                                            <p className={"m-2"}>Nombre de pages : {selectedLivre.nombrePages}</p>
                                            <p className={"m-2"}>Auteur : {selectedLivre.auteur}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button onClick={() => setSelectedLivre(null)} type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Fermer
                                </button>
                                <button onClick={() => setSelectedLivre(null)} type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Ajouter à la bibliothèque
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </div>

    );
}