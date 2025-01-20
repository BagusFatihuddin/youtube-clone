import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPropTypes from "eslint-plugin-react/prop-types";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            "react/prop-types": pluginPropTypes,
        },
        rules: {
            // Menambahkan aturan untuk memeriksa props validation
            "react/prop-types": "warn", // Memberikan peringatan jika prop-types tidak digunakan
            // Menambahkan aturan lainnya jika perlu
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.recommended,
    pluginReact.configs["jsx-runtime"].rules,
];
