import React from "react";

export function Footer() {
    return (
        <footer className="bg-gray-100 py-4 mt-8 text-center">
            <div className="flex justify-center items-center">
                <a className="text-gray-500">
                    Copyright © 2023
                </a>
                <span className="text-gray-500 mx-1">- by</span>
                <a href="https://github.com/EmpirisDev" className={"underline"}>
                     EmpirisDev
                </a>
                <img className="h-4 ml-1" src="/images/Footer/GitHub.png" alt="Logo GitHub"/>

            </div>
        </footer>
    );
}
