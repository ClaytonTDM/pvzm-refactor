import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
	// Apply recommended rules, Prettier plugin, and browser globals to all JS/MJS/CJS files
	{
		files: ["**/*.{js,mjs,cjs}"],
		ignores: ["**/node_modules/**", "**/html2canvas.js", "**/pako.js"],
		// Use the recommended configuration object which includes core rules
		...js.configs.recommended,
		// Add the Prettier plugin
		plugins: {
			prettier: prettierPlugin,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				// Add any other global variables if needed
			},
			// Set ecmaVersion if needed, recommended usually sets a reasonable default
			// ecmaVersion: 2022,
			// sourceType: "module", // Default for mjs, often desired for js too
		},
		rules: {
			// --- Your Original Rules ---
			"one-var": ["error", "never"],
			"prettier/prettier": "error", // Enable Prettier rule

			// --- High Impact Readability Rules ---
			curly: ["error", "all"],
			eqeqeq: ["error", "always", { null: "ignore" }], // allow == null
			// "no-var": "error", // Commented out as per your selection
			// "prefer-const": "error", // Commented out as per your selection
			"object-shorthand": "error",
			"prefer-template": "error",
			"prefer-destructuring": ["error", { object: true, array: true }],
			"prefer-spread": "error",
			"prefer-rest-params": "error",
			"no-sequences": "error",
			"no-nested-ternary": "error",
			"no-unneeded-ternary": "error",
			"no-else-return": "error",
			"dot-notation": "error",
			"operator-assignment": "error",
			// "no-multi-assign": "error", // Commented out as per your selection
			"no-useless-rename": "error",
			"no-useless-computed-key": "error",
			"no-useless-concat": "error",
			"no-useless-return": "error",

			// --- Potentially Useful Readability Rules ---
			complexity: ["warn", 10], // Warn if complexity > 10
			// "max-lines-per-function": ["warn", 75], // Commented out as per your selection
			// "max-depth": ["warn", 4], // Commented out as per your selection
			// "max-params": ["warn", 5], // Commented out as per your selection
			// "no-shadow": "warn", // Commented out as per your selection
			// "no-param-reassign": ["warn", { props: false }], // Commented out as per your selection
			"prefer-arrow-callback": "warn",
			"prefer-object-spread": "warn",
			"no-lonely-if": "warn",
			"no-extra-boolean-cast": "warn",

			// --- Note: Core recommended rules like no-unused-vars, no-undef ---
			// --- are included via ...js.configs.recommended above ---
		},
	},

	// Specific configuration for script-based JS files (if needed)
	// Adjust this if most/all your JS files are modules
	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "script", // Overrides the default 'module' if necessary
		},
	},

	// --- Prettier Compatibility Config (MUST BE LAST) ---
	// This turns off ESLint rules that conflict with Prettier.
	prettierConfig,
];
