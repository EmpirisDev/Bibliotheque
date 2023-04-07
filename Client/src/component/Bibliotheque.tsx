import axios from "axios";
import React, {useState} from "react";


export const Bibliotheque = () => {
    const [post, setPost] = useState({

        titre: ""
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }

    function handleSumbit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        axios.post("http://localhost:80/api/ajoutLivreBiblio", post, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                    console.log(response.data)
                }
            ).catch((error) => {
                console.log(error)
            }
        )
    }


    return (
        <div>
            <h1 className={"text-4xl text-center font-extralight"}>Votre Bibliothèque</h1>
            <form onSubmit={handleSumbit}>
                titre: <input type="text" onChange={handleInput} name="titre" id="titre"/>

                <button type="submit">Ajouter</button>
            </form>
        </div>
    )

}
