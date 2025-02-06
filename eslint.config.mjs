import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// // Get the current file and directory name
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Set up compatibility with base directory for ESLint config
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// Define the ESLint configuration
// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     rules: {
//       // Disable unused-vars rule (this is causing the error for 'Link' defined but not used)
//       "@typescript-eslint/no-unused-vars": "off",

//       // Disable the rule that checks for 'img' tags in Next.js (optional, depends on your project)
//       "next/no-img-element": "off",

//       // Other custom rules (you can add more as needed)
//       "react/react-in-jsx-scope": "off", // If using React 17+, JSX doesn't require React to be in scope
//       "no-console": "warn", // Change console log rule to show warnings instead of errors

//       // You can add more custom rules below as per your project requirements
//     },
//   },
// ];

// export default eslintConfig;

