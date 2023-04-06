import {useState} from "react";
import {Link} from "react-router-dom";

export const Headers = () => {
    const [hoverIndex, setHoverIndex] = useState(-1);

    return (

        <header className="bg-gray-200 ">
            <nav>
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="hidden md:flex">
                            <div className="flex items-center">
                                <Link to="/livres" className="img">
                                    <div
                                        className="flex flex-col items-center"
                                        onMouseEnter={() => setHoverIndex(0)}
                                        onMouseLeave={() => setHoverIndex(-1)}
                                    >
                                        <img
                                            className={`h-10 w-10 ${hoverIndex === 0 ? "opacity-50" : ""}`}
                                            src="../../public/images/Headers/livre.svg"
                                            alt="Livre"
                                        />
                                        <p className={`font-black text-2xl font-extralight ${hoverIndex === 0 ? "text-gray-500" : "text-black"}`}>
                                            Livre
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/series" className="img">
                                    <div className="flex flex-col items-center"
                                         onMouseEnter={() => setHoverIndex(1)}
                                         onMouseLeave={() => setHoverIndex(-1)}
                                    >
                                        <img
                                            className={`h-10 w-10  ${hoverIndex === 1 ? "opacity-50" : ""}`}
                                            src="../../public/images/Headers/Collection.svg"
                                            alt="Série"
                                        />
                                        <p className={`font-black text-2xl font-extralight ${hoverIndex === 1 ? "text-gray-500" : "text-black"}`}>
                                            Série
                                        </p>
                                    </div>
                                </Link>

                                <Link to="/bibliotheque" className="img">
                                    <div
                                        className="flex flex-col items-center"
                                        onMouseEnter={() => setHoverIndex(2)}
                                        onMouseLeave={() => setHoverIndex(-1)}
                                    >
                                        <img
                                            className={`h-10 w-10  ${hoverIndex === 2 ? "opacity-50" : ""}`}
                                            src="../../public/images/Headers/bibliotheque.svg"
                                            alt="Bibliothèque"
                                        />
                                        <p className={`font-black text-2xl font-extralight ${hoverIndex === 2 ? "text-gray-500" : "text-black"}`}>
                                            Bibliothèque
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <Link to="/profil">
                                <div
                                    className="flex flex-col items-center"
                                    onMouseEnter={() => setHoverIndex(3)}
                                    onMouseLeave={() => setHoverIndex(-1)}
                                >
                                    <img
                                        className={`h-10 w-10 ${hoverIndex === 3 ? "opacity-50" : ""}`}
                                        src="../../public/images/Headers/profil.svg"
                                        alt="Profil"
                                    />
                                    <p className={`font-black text-2xl font-extralight ${hoverIndex === 3 ? "text-gray-500" : "text-black"}`}>
                                        Profil
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
