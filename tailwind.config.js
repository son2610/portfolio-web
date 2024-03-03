/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{html,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['"Poppins"', "sans-serif"],
                Mulish: ['"Mulish"', "sans-serif"],
                // Add more custom font families as needed
            },
            colors: {
                main: {
                    header: "#2d2e32",
                    textHeader: "#555",
                    textMain: "#767676",
                    textBlue: "#147efb",
                },
            },
            borderRadius: {
                avatar: "60% 40% 30% 70% / 60% 30% 70% 40%",
            },
            keyframes: {
                morph: {
                    "0%": {
                        "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
                    },
                    "50%": {
                        "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
                    },
                    "100%": {
                        "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
                    },
                },
                wave: {
                    "0%": { transform: "rotate(0.0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10.0deg)" },
                    "60%": { transform: "rotate(0.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
                rotate: {
                    "100%": { transform: "rotate(360deg)" },
                },
                lefttoright: {
                    "0%": {
                        left: "-25%",
                    },
                    "100%": {
                        left: "100%",
                    },
                },
            },
            animation: {
                fancy: "morph 8s ease-in-out infinite",
                "waving-hand": "wave 2s linear infinite",
                "rotate-Text": "rotate 9s linear infinite",
                myfirst: "lefttoright 22s linear infinite",
                myfirst2: "lefttoright 30s linear infinite",
            },
        },
    },
    plugins: [],
};
