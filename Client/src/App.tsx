import React from "react";
import {Headers} from "./component/Headers";
import {ListeLivres} from "./component/Livres";
import {Footer} from "./component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Serie} from "./component/Serie";
import {Bibliotheque} from "./component/Bibliotheque";
import {Profils} from "./component/Profils";
import {Layout} from "./component/Layout";


export default function App() {


    return (

        <div className={"bg-gray-100"}>


            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/livres" element={<ListeLivres/>}/>
                        <Route path={"/series"} element={<Serie/>}/>
                        <Route path={"/bibliotheque"} element={<Bibliotheque/>}/>
                        <Route path={"/Profil"} element={<Profils/>}/>


                        {/*Redirige tout les mauvais lien vers la page de la liste des livres*/}
                        <Route path={"*"} element={<ListeLivres/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>

    );
}
