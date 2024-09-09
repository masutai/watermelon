import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./src",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/styles",
    "src/types",
    "src/utils/apollo",
    "src/utils/constants",
    "src/utils/hooks",
    "src/utils/lib",
    "src/utils/types",
    ".cz-config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default createJestConfig(config);
