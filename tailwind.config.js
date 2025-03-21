/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                shabnam: ["Shabnam", "sans-serif"], // اضافه کردن فونت شبنم
            },
        },
    },
    plugins: [],
};