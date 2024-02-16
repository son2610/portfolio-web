import { SiNextdotjs, SiMui, SiReact, SiTailwindcss } from "react-icons/si";

const Projects = () => {
    return (
        <>
            <section className="bg-[#f9f9f9] overflow-hidden" id="projects">
                <div className="max-w-[1096px] mx-auto flex gap-8 flex-col">
                    <h3 className="bg-[#f9f9f9] w-full mx-auto flex items-center justify-center text-3xl font-bold text-main-textBlue mb-8 max-md:text-2xl">
                        MY PROJECTS
                    </h3>
                    <div className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover object-top w-full h-24 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 max-sm:h-full"
                                    src="./soundcloud.jpg"
                                    alt="Project 1"
                                />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 md:max-w-lg max-md:px-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                SoundCloud Clone
                            </h5>
                            <div className="flex flex-col gap-4">
                                <ul className="flex flex-row mb-2 gap-x-2">
                                    <li>
                                        <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 ">
                                            <SiNextdotjs size={14} />
                                            NextJs
                                        </span>
                                    </li>
                                    <li>
                                        <span className="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2 ">
                                            <SiMui size={14} />
                                            MUI
                                        </span>
                                    </li>
                                </ul>

                                <div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        I developed a SoundCloud clone with
                                        Next.js and MUI. It replicates core
                                        SoundCloud functionalities with a modern
                                        user interface.
                                    </p>
                                    <h4 className="text-gray-900 text-lg font-bold">
                                        Technologies:
                                    </h4>
                                    <ol className="leading-8">
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                Next.js:
                                            </span>{" "}
                                            For server-side rendering and
                                            enhanced performance.
                                        </li>
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                MUI (Material-UI):
                                            </span>{" "}
                                            Provides pre-designed React
                                            components and Material Design
                                            aesthetics.
                                        </li>
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                React Hooks:
                                            </span>{" "}
                                            Used for state management and
                                            cleaner code.
                                        </li>
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                RESTful API:
                                            </span>{" "}
                                            Integrated SoundCloud API for
                                            fetching music tracks and user data.
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <svg
                                            className="w-4 h-4 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Code
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <svg
                                            className="w-4 h-4 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z" />
                                        </svg>
                                        Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover object-top w-full h-24 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 max-sm:h-full"
                                    src="./ecommerce.jpg"
                                    alt="Project 1"
                                />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 md:max-w-lg max-md:px-3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Ecommerce App
                            </h5>
                            <div className="flex flex-col gap-4">
                                <ul className="flex flex-row mb-2 gap-x-2">
                                    <li>
                                        <span className="flex gap-x-2 rounded-full text-xs bg-main-textBlue text-white py-1 px-2 ">
                                            <SiReact size={14} />
                                            ReactJs
                                        </span>
                                    </li>
                                    <li>
                                        <span className="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2 ">
                                            <SiTailwindcss size={14} />
                                            Tailwind CSS
                                        </span>
                                    </li>
                                </ul>

                                <div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        I developed an Ecommerce App using
                                        ReactJS and Tailwind CSS. The aim was to
                                        create a modern and responsive online
                                        shopping platform with a sleek user
                                        interface
                                    </p>
                                    <h4 className="text-gray-900 text-lg font-bold">
                                        Technologies:
                                    </h4>
                                    <ol className="leading-8">
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                ReactJS:
                                            </span>{" "}
                                            Chosen for its component-based
                                            architecture and virtual DOM,
                                            facilitating efficient development
                                            and smooth user interactions.
                                        </li>
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                Tailwind CSS:
                                            </span>{" "}
                                            Design UX/UI
                                        </li>
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                React Router:
                                            </span>{" "}
                                            Implemented to manage navigation and
                                            routing within the application
                                        </li>
                                        <li>
                                            <span className="text-gray-900 font-bold">
                                                Redux:
                                            </span>{" "}
                                            Integrated for state management,
                                            providing a centralized store for
                                            managing application data
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <svg
                                            className="w-4 h-4 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Code
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                                    >
                                        <svg
                                            className="w-4 h-4 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z" />
                                        </svg>
                                        Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="./wavePage2.svg"
                    alt="wavePage"
                    className="w-full overflow-hidden"
                    width={"2500px"}
                    height={"150px"}
                />
            </section>
        </>
    );
};

export default Projects;
