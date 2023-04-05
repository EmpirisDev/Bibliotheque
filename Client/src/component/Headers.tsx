import {useState} from "react";

export const Headers = () => {
    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <header className="bg-gray-100 ">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="hidden md:flex">
                        <div className="flex items-center">
                            <a
                                className="img"
                                href="#"
                                onMouseEnter={() => setHoverIndex(0)}
                                onMouseLeave={() => setHoverIndex(-1)}
                            >
                                <img
                                    className={`h-10 w-10 ${hoverIndex === 0 ? "opacity-50" : ""}`}
                                    src="../../public/images/Headers/livre.svg"
                                    alt="Livre"
                                />
                            </a>
                            <a
                                className="img"
                                href="#"
                                onMouseEnter={() => setHoverIndex(1)}
                                onMouseLeave={() => setHoverIndex(-1)}
                            >
                                <img
                                    className={`h-10 w-10 ${hoverIndex === 1 ? "opacity-50" : ""}`}
                                    src="../../public/images/Headers/Collection.svg"
                                    alt="Série"
                                />
                            </a>
                            <a
                                className="img"
                                href="https://open.spotify.com/"
                                onMouseEnter={() => setHoverIndex(2)}
                                onMouseLeave={() => setHoverIndex(-1)}
                            >
                                <img
                                    className={`h-10 w-10 ${hoverIndex === 2 ? "opacity-50" : ""}`}
                                    src="../../public/images/Headers/bibliotheque.svg"
                                    alt="Bibliothèque"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <a
                            className="text-gray-300 hover:text-white mr-4"
                            href="#"
                            onMouseEnter={() => setHoverIndex(3)}
                            onMouseLeave={() => setHoverIndex(-1)}
                        >
                            <img
                                className={`h-10 w-10 ${hoverIndex === 3 ? "opacity-50" : ""}`}
                                src="../../public/images/Headers/profil.svg"
                                alt="Profil"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
