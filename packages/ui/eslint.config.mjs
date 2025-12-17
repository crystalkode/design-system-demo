import storybook from "eslint-plugin-storybook";
import { config } from "@repo/eslint-config/react-internal";

export default [
  ...config,

  // Storybook rules
  ...storybook.configs["flat/recommended"],

  // Relax TS rules for Storybook config files
  {
    files: ["**/.storybook/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
