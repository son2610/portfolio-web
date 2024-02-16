import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/Home";
import About from "./component/about";
import Header from "./component/header";
import Projects from "./component/projects";
import Footer from "./component/footer";
import Contact from "./component/contact";

function App() {
    // const [showAbout, setShowAbout] = useState(false);

    // const handleScroll = () => {
    //     const scrollPosition = window.scrollY + window.innerHeight;
    //     const aboutPosition = document.getElementById("about").offsetTop;

    //     if (scrollPosition > aboutPosition && !showAbout) {
    //         setShowAbout(true);
    //     }
    // };
    // window.addEventListener("scroll", handleScroll);

    const [showAbout, setShowAbout] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const aboutPosition = document.getElementById("about").offsetTop;
        // const projectPosition = document.getElementById("project").offsetTop;
        // const contactPosition = document.getElementById("contact").offsetTop;

        if (scrollPosition > aboutPosition && !showAbout) {
            setShowAbout(true);
        }

        // if (scrollPosition > projectPosition && !showProject) {
        //     setShowProject(true);
        // }

        // if (scrollPosition > contactPosition && !showContact) {
        //     setShowContact(true);
        // }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <Home />
            <About show={showAbout} />
            <Projects show={showProject} />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
