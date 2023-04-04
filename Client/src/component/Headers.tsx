export const Headers = () => {
    return (
        <header className="bg-gray-100 ">
            <div className="container mx-auto px-6 py-3">
                <div className="  flex items-center justify-between">
                    <div className="hidden md:flex">
                        <div className="flex items-center">
                            <a className="img" href="#">
                                <img className={"h-10 w-10 "} src="../../public/images/livre.svg" alt="Livre"/>
                            </a>
                            <a className="img" href="#">
                                <img className={"h-10 w-10 "} src="../../public/images/Collection.svg" alt="Série"/>
                            </a>
                            <a className="img" href="https://open.spotify.com/">
                                <img className={"h-10 w-10 "} src="../../public/images/bibliotheque.svg" alt="Bibliothèque"/>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <a className="text-gray-300 hover:text-white mr-4" href="#">
                            <img className={"h-10 w-10 "} src="../../public/images/profil.svg" alt="Profil"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
