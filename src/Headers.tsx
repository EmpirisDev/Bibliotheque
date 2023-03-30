export const Headers = () => {
    return (
        <header className="bg-gray-100 ">
            <div className="container mx-auto px-6 py-3">
                <div className="  flex items-center justify-between">
                    <div className="hidden md:flex">
                        <div className="flex items-center">
                            <a className="img" href="#">
                                <img className={"h-10 w-10 "} src="public/images/livre.svg" alt="Livre"/>
                            </a>
                            <a className="img" href="#">
                                <img className={"h-10 w-10 "} src="public/images/Collection.svg" alt="Série"/>
                            </a>
                            <a className="img" href="https://open.spotify.com/">
                                <img className={"h-10 w-10 "} src="public/images/bibliotheque.svg" alt="Bibliothèque"/>
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center">
                        <a className="text-gray-300 hover:text-white mr-4" href="#">
                            <img className={"h-10 w-10 "} src="public/images/profil.svg" alt="Profil"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
