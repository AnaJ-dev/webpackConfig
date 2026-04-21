import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
];
