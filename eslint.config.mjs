import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
	{
		files: ["**/*.{js,mjs,cjs}"],
		...js.configs.recommended,
		plugins: {
			prettier: prettierPlugin,
		},
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
		rules: {
			"one-var": ["error", "never"],
			// "no-unused-vars": "warn",
			"prettier/prettier": "error",
		},
	},

	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "script",
		},
	},
	prettierConfig,
];
