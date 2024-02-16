import { FaPhone, FaTelegram, FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
    return (
        <div className="overflow-x-hidden" id="contact">
            <div className="container mb-24 mt-12 mx-auto md:px-6">
                <section className="mb-32">
                    <div className="block rounded-lg bg-white  dark:bg-neutral-700">
                        <div className="flex items-center justify-center flex-col gap-6">
                            <div className="text-main-textBlue text-3xl font-bold mb-4 font-Poppins flex justify-center items-center flex-col gap-4 max-md:text-2xl">
                                <h5>
                                    CONTACT{" "}
                                    <span className="animate-bounce">☎</span>
                                </h5>
                                <p className="text-black">
                                    Don't be shy! Hit me up! 👇
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center ">
                                <div className="flex w-full shrink-0 grow-0 basis-auto max-md:flex-col max-md:gap-8">
                                    <div className="h-[450px] max-md::flex max-md:mx-auto">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.454872784194!2d106.61723225959793!3d10.840844503833033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a2a407636c5%3A0x7dd9977dbf394ded!2zUGjGsOG7nW5nLCBUw6JuIEjGsG5nIFRodeG6rW4sIFF14bqtbiAxMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1707319472351!5m2!1svi!2s"
                                            width="450"
                                            height="450"
                                            style={{ border: 0 }}
                                            aria-hidden="false"
                                            tabIndex="0"
                                        />
                                    </div>
                                    <div className="flex justify-start items-center gap-4 flex-wrap w-full ml-24 flex-row max-md:justify-center max-md:text-lg max-sm:justify-start max-sm:text-base">
                                        <div className="flex flex-row items-center justify-start basis-1/2 gap-6 w-full">
                                            <FaPhone size={30} />
                                            <div>
                                                <h5 className="font-bold text-2xl max-md:text-xl">
                                                    Phone:{" "}
                                                </h5>
                                                <p className="text-xl w-full min-w-40 max-md:text-lg">
                                                    <a href="tel:0984508313">
                                                        +84 984 508 313
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start basis-1/2 gap-6">
                                            <IoIosMail size={30} />
                                            <div>
                                                <h5 className="font-bold text-2xl max-md:text-xl">
                                                    Mail:{" "}
                                                </h5>
                                                <p className="text-xl max-md:text-lg">
                                                    <a href="mailto:someone@example.com">
                                                        phamhongson5151@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start basis-1/2 gap-6">
                                            <FaTelegram size={30} />
                                            <div>
                                                <h5 className="font-bold text-2xl max-md:text-xl">
                                                    Telegram:{" "}
                                                </h5>
                                                <p className="text-xl max-md:text-lg">
                                                    <a href="https://t.me/SonBlue86">
                                                        @SonBlue86
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start basis-1/2 gap-6">
                                            <FaDiscord size={30} />
                                            <div>
                                                <h5 className="font-bold text-2xl max-md:text-xl">
                                                    Discord:{" "}
                                                </h5>
                                                <p className="text-xl max-md:text-lg">
                                                    @sonblue86
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
