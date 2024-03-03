// import "../css/footer.css";
const Footer = () => {
    return (
        <div className="w-full relative h-[350px] overflow-hidden max-sm:h-[200px]">
            <div className="absolute bottom-8 w-full h-full bg-[url('./footer_bg.png')] bg-no-repeat bg-cover">
                <div className="absolute left-1/3 top-10 w-full font-Poppins font-semibold text-lg max-sm:text-sm max-sm:left-4">
                    Copyright © 2024. All rights are reserved
                </div>
                <div className="h-[155px] absolute -bottom-4 bg-[url('./volks.gif')] w-[330px] left-[30%] bg-cover animate-myfirst"></div>
                <div className="w-[88px] h-[100px] bottom-0 absolute bg-[url('./cyclist.gif')] bg-cover left-[38%] animate-myfirst2"></div>
            </div>
        </div>
    );
};

export default Footer;
