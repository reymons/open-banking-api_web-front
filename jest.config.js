module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    moduleNameMapper: {
        "^@src/(.+)$": "<rootDir>/src/*",
        "\\.(css|less|scss|sass)$": "<rootDir>/src/testing/mocks/styles.ts"
    }
};
