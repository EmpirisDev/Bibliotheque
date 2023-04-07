import React, { useEffect, useState } from "react";

type Livre = {
    _id: string;
    titre: string;
    description: string;
    genre: string;
    auteur: string;
    nombrePages: number;
    image: string;
    lu: boolean;
};
const updateLivre = async (id: string, lu: boolean) => {
    try {
        const response = await fetch(`http://localhost:80/api/bibliothequePrive/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lu: lu})
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


export const Bibliotheque = () => {
    const [records, setRecords] = useState<Livre[]>([]);

    useEffect(() => {
        fetch("http://localhost:80/api/bibliothequePrive")
            .then((response) => response.json())
            .then((data) => setRecords(data))
            .catch((error) => console.error(error));
    }, []);

    const handleLivreLu = (id: string) => {
        const livre = records.find((livre) => livre._id === id);
        const updatedLivre = {...livre, lu: !livre.lu};
        setRecords(records.map((livre) => livre._id === id ? updatedLivre : livre));
        updateLivre(id, updatedLivre.lu);
    };


    const listBiblio = records.map((livre: Livre) => {
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
                <div className={"bg-gray-300 p-2 mt-4 mb-0.5 text-center rounded"}>
                    <p className={"font-bold"}>Description </p>
                    <p className="text-gray-700">{livre.description}</p>
                </div>
                <div className={" p-2 mb-0.5 text-center rounded"}>
                    <button
                        className={`bg-${livre.lu ? "green" : "gray"}-500 text-white font-bold py-2 px-4 rounded`}
                        onClick={() => handleLivreLu(livre._id)}
                    >
                        {livre.lu ? "Lu" : "Non lu"}
                    </button>

                </div>
            </div>
        );
    });

    return (
        <div>
            <h1 className={"text-center text-4xl font-extralight mb-3"}>
                Bibliotheque personnel
            </h1>
            <div className="flex flex-wrap justify-center">{listBiblio}</div>
        </div>
    );
};
