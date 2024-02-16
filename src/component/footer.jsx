import "../css/footer.css";
const Footer = () => {
    return (
        <div className="w-full relative h-[400px] overflow-hidden max-sm:h-[200px]">
            <div className="footer_bg">
                <div className="absolute left-1/3 top-10 w-full font-Poppins font-semibold text-lg  z-50 max-sm:text-sm max-sm:left-4">
                    Copyright © 2024. All rights are reserved
                </div>
                <div className="footer_bg_one"></div>
                <div className="footer_bg_two"></div>
            </div>
        </div>
    );
};

export default Footer;
