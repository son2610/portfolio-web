import {
    FaFacebookSquare,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
    return (
        <section
            className="w-full pt-20 flex items-center justify-center h-full bg-[#f9f9f9] overflow-x-hidden px-4 max-md:pt-8"
            id="home"
        >
            <div className="max-w-[1396px] mx-auto ">
                <div className=" flex justify-between flex-row w-full gap-10 max-md:flex-col-reverse max-md:items-center max-md:gap-8 max-sm:gap-4">
                    <div className="relative max-w-[750px] flex flex-col gap-12 max-md:items-center max-md:justify-center">
                        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 max-lg:text-6xl max-sm:text-2xl max-sm:p-x-2 max-sm:flex max-sm:justify-center  max-sm:break-words">
                            Front-End React Developer
                        </h1>
                        <img
                            src="./waving.png"
                            alt="hello"
                            width={"80px"}
                            height={"80px"}
                            className="absolute transition-all animate-waving-hand top-[106px] left-[500px] max-lg:w-[50px] max-lg:h-[50px] max-lg:top-[70px] max-lg:left-[320px] max-sm:hidden"
                        />
                        <p className="text-main-textHeader text-2xl max-sm:w-dvw max-sm:px-3 font-Mulish max-lg:text-xl max-sm:text-sm max-sm:break-words px-2">
                            Hi, I'm Pham Hong Son 🤵. A passionate Front-end
                            React Developer 💻 based in Ho Chi Minh, Viet Nam.
                        </p>
                        <span className="flex flex-row gap-8 max-md:justify-center">
                            <FaFacebookSquare
                                size={50}
                                className="hover:text-blue-500 hover:cursor-pointer max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px]"
                            />
                            <FaGithub
                                size={50}
                                className="hover:text-blue-500 hover:cursor-pointer max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px]"
                            />
                            <FaSquareXTwitter
                                size={50}
                                className="hover:text-blue-500 hover:cursor-pointer max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px]"
                            />
                        </span>
                    </div>

                    <div className="bg-[url('/bg.jpg')] h-[500px] w-[500px] bg-no-repeat bg-center bg-cover rounded-avatar border-4 border-black transition-all animate-fancy max-lg:w-[250px] max-lg:h-[250px] max-md:mt-14"></div>
                </div>
                <div className="flex flex-row items-center mt-32 max-md:flex-col gap-6 max-sm:mt-12">
                    <p className="border-r-2 border-black pr-8 text-2xl font-semibold max-sm:border-none">
                        Tech Stack:
                    </p>
                    <span className="flex flex-row gap-6 pl-8 flex-wrap">
                        <FaHtml5
                            size={60}
                            className="text-[#E14E1D] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                        <FaCss3Alt
                            size={60}
                            className="text-[#0277BD] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                        <IoLogoJavascript
                            size={62}
                            className="text-[#F0DB4F] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                        <SiTypescript
                            size={60}
                            className="text-[#0277BD] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                        <FaReact
                            size={60}
                            className="text-[#00D8FF] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                        <SiNextdotjs
                            size={60}
                            className="text-[#242938] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                        <SiTailwindcss
                            size={60}
                            className="text-[#24BBBD] hover:-translate-y-4 hover:scale-125 cursor-pointer transition-all"
                        />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Home;
