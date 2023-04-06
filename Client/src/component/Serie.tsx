import React, {useState, useEffect} from "react";

type Livre = {
    _id: string;
    titre: string;
    description: string;
    genre: string;
    auteur: string;
    nombrePages: number;
    image: string;
};

type Serie = {
    _id: string;
    nom: string;
    genre: string;
    editeur: string;
    image: string;
    listeDeLivres: Livre[];
};

export function ListeSeries() {
    const [series, setSeries] = useState<Serie[]>([]);
    const [selectedSerie, setSelectedSerie] = useState<Serie | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        fetch("http://localhost:80/api/series")
            .then((response) => response.json())
            .then((data) => setSeries(data))
            .catch((error) => console.error(error));
    }, []);


    const listSerie = series.map((serie: Serie) => {
        return (
            <div
                key={serie._id}
                className={
                    " m-2 section bg-gray-100 border border-gray-300 p-4 rounded-lg mb-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4"
                }
                onClick={() => {
                    setSelectedSerie(serie);
                    setShowPopup(true);
                }}
            >
                <img className="h-64  mb-3  mx-auto  object-contain" src={serie.image}/>
                <h2 className={"text-xl  font-bold mb-2"}>{serie.nom}</h2>
                <div className={"bg-gray-300 p-2 mb-0.5 rounded"}>
                    <h3>
                        Cette séries est compoése de <span
                        className={"font-bold"}>{serie.listeDeLivres.length} livres </span>
                        elle est de genre <span className={"font-bold"}>{serie.genre}</span> et est éditée par <span
                        className={"font-bold"}>{serie.editeur}</span>
                    </h3>

                </div>
                <button
                    className={
                        "mt-3 bg-gray-600 hover:bg-blue-700 text-white px-4 py-2 rounded mx-auto block"
                    }
                    onClick={() => setShowPopup(true)}
                >
                    Voir les détails
                </button>
            </div>
        );
    });

    return (
        <div className={""}>
            <h1 className={" font-extralight text-center mb-3 text-4xl "}>
                Liste des Séries
            </h1>
            <div
                className={
                    "flex items-center justify-center min-h-screen pt-4 px-4 pb-20  sm:block sm:p-0"
                }
            >
                <div className={"flex flex-auto justify-center"}>{listSerie}</div>

                {showPopup && (
                    <div
                        className={"fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"}>
                        <div className={"bg-white p-4 w-2/3 md:w-1/2 lg:w-1/3 rounded-lg"}>
                            <h2 className={"text-xl text-center font-bold mb-2"}>
                                {selectedSerie?.nom}
                            </h2>
                            <h1 className={"text-2xl"}>Titre qui compose la série</h1>
                            <div className={"flex flex-row mt-4"}>
                                <ul className={"basis-5/6"}>
                                    {selectedSerie?.listeDeLivres.map((livre: Livre) => (
                                        <li key={livre.titre} className={"mb-2"}>
                                            <span> - </span> {livre.titre}
                                        </li>
                                    ))}
                                </ul>
                                <img className="h-64 w-1/2  basis-1/6 mb-3  ml-3 object-contain"
                                     src={selectedSerie?.image}/>
                            </div>
                            <button
                                className={
                                    "bg-gray-900 text-white px-4 py-2 rounded justify-between float-right"
                                }
                                onClick={() => setShowPopup(false)}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
