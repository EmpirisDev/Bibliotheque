import axios from "axios";
import React from "react";
import {Headers}from "./component/Headers";
import {ListeLivre} from "./component/ListeLivre";


const baseURL = "http://localhost:80/api";



export default function App() {
    // const [livres, setLivres] = React.useState<Livre[]>([]);

    // React.useEffect(() => {
    //         axios
    //             .get<Livre[]>(`${baseURL}/livres`)
    //             .then((response) => {
    //                 console.log(response.data);
    //                 setLivres(response.data);
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }, []);


    return (
        <div className={""} >
            <Headers/>
            <ListeLivre/>

        </div>
    );
}
