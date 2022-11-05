/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,}"],
    theme: {
        extend: {
            colors: {
                dark: "#333333",
                light: "#FFFFFF",
                primary: "#FFC139",
                secondary: "#F4F6F3",
                // Alert.
                success: "#36D399",
                "success-dark": "#003320",
                info: "#3ABFF8",
                "info-dark": "#002B3D",
                warn: "#FBBD23",
                "warn-dark": "#382800",
                danger: "#F87272",
                "danger-dark": "#470000",
            },
            fontFamily: {
                oswald: "'Oswald', sans-serif",
            },
        },
    },
    safelist: [
        "bg-danger-dark",
        "bg-danger",
        "bg-warn-dark",
        "bg-warn",
        "bg-info-dark",
        "bg-info",
        "bg-success-dark",
        "bg-success",
        "border-danger-dark",
        "border-danger",
        "border-warn-dark",
        "border-warn",
        "border-info-dark",
        "border-info",
        "border-success-dark",
        "border-success",
    ],
    plugins: [require("@tailwindcss/line-clamp")],
};
