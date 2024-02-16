const About = ({ show }) => {
    return (
        <>
            <section className="w-full mt-24 overflow-hidden" id="about">
                <div className="max-w-[1096px] mx-auto mb-20">
                    <div className="flex w-full items-center justify-between gap-32 max-md:flex-col max-md:gap-8 max-md:px-4">
                        <div className="relative ">
                            <img
                                src="./computer.webp"
                                alt="computer"
                                // width={"500px"}
                                // height={"450px"}
                                className="rounded-lg "
                            />
                            <img
                                src="./person.png"
                                alt="person"
                                width={"70px"}
                                className="absolute bottom-6 right-3 z-10 "
                            />
                            <span className="w-44 h-44 absolute bg-white rounded-full -right-10 -bottom-10">
                                <img
                                    src="./web.svg"
                                    width={"200px"}
                                    height={"200px"}
                                    className="w-44 h-44 animate-rotate-Text "
                                />
                            </span>
                        </div>
                        <div
                            className={`move ${
                                show ? "show" : ""
                            } flex flex-col gap-4 `}
                            id="about"
                        >
                            <h3 className=" text-main-textBlue text-3xl font-bold max-md:text-2xl max-md:text-center">
                                ABOUT ME
                            </h3>
                            <h4 className=" font-bold text-2xl max-md:text-xl max-md:text-center">
                                Front-end Developer
                                <br />
                                based in Ho Chi Minh, Viet Nam
                            </h4>
                            <p className="flex text-xl font-Mulish text-main-textMain max-md:text-base max-md:text-center">
                                Hey, my name is Son, and I'm a Frontend
                                Developer. My passion is to create and develop a
                                clean UI/UX for my users.
                                <br />
                                <br />
                                My main stack currently is React/Next.js in
                                combination with Tailwind CSS and TypeScript.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src="./wavePage.svg"
                    alt="wavePage"
                    className="w-full overflow-hidden"
                    width={"2500px"}
                    height={"150px"}
                />
            </section>
        </>
    );
};

export default About;
