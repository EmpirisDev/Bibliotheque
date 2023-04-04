import React, {useState, useEffect} from 'react';

interface Livre {
    _id: string;
    titre: string;
    description: string;
    numero: number;

}

export function ListeLivre() {
    const [records, setRecords] = useState<Livre[]>([]);

    useEffect(() => {
        fetch("http://localhost:80/api/livres")
            .then(response => response.json())
            .then(data => setRecords(data[0].livre))
            .catch(error => console.error(error));
    }, []);

    const listLivre = records.map((livre: Livre) => {
        return (

            <ul>
                <li className={"font-bold"}>Titre :</li>
                <li key={livre._id}>
                    {livre.titre}
                </li>
                <li className={"font-bold"}>
                    Description :
                </li>
                <li> {livre.description}
                </li>
            </ul>

        );
    });
    console.log(records);

    return (
        <div>

            <h1 className={"font-bold"}> Liste des livres </h1>
            {listLivre}


        </div>
    );
}
