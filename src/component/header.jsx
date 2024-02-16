import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Header = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        // <header className="font-Poppins font-semibold text-2xl flex justify-between items-center fixed left-0 top-0 px-12 py-6 w-full shadow-md h-20 bg-white z-50">
        //     <div className="">
        //         <h3 className="cursor-pointer">SonWeb.dev</h3>
        //     </div>
        //     <ul className=" flex gap-8 text-2xl no-underline max-md:hidden">
        //         <li>
        //             <a href="#">Home</a>
        //         </li>
        //         <li>
        //             <a href="#">About</a>
        //         </li>
        //         <li>
        //             <a href="#">Projects</a>
        //         </li>
        //         <li>
        //             <a href="#">Contact</a>
        //         </li>
        //     </ul>
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <button
        //             data-collapse-toggle="navbar-default"
        //             type="button"
        //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //             aria-controls="navbar-default"
        //             aria-expanded="false"
        //         >
        //             <span className="sr-only">Open main menu</span>
        //             <svg
        //                 className="w-5 h-5"
        //                 aria-hidden="true"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 17 14"
        //             >
        //                 <path
        //                     stroke="currentColor"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                     d="M1 1h15M1 7h15M1 13h15"
        //                 />
        //             </svg>
        //         </button>
        //     </div>
        // </header>

        <nav className="bg-white border-gray-200 dark:bg-gray-900 overflow-hidden fixed left-0 right-0 top-0 z-[500] shadow h-auto">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="./computer.svg" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        SonWeb.dev
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={() => setNavMobile(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#home"
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={twMerge(
                    "hidden",
                    clsx(
                        navMobile &&
                            "flex w-full h-dvh bg-white z-[200] items-center justify-center fixed top-0"
                    )
                )}
            >
                <span
                    className="cursor-pointer hover:text-main-textBlue absolute top-6 right-6"
                    onClick={() => setNavMobile(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </span>
                <ul className="flex items-center justify-center gap-6 flex-col font-semibold text-2xl">
                    <li className="hover:text-main-textBlue">
                        <a href="#home">Home</a>
                    </li>
                    <li className="hover:text-main-textBlue">
                        <a href="#about">About</a>
                    </li>
                    <li className="hover:text-main-textBlue">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="hover:text-main-textBlue">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
