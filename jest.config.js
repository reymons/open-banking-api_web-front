module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    moduleNameMapper: {
        "^@/(.+)$": "<rootDir>/src/$1",
        "\\.(css|less|scss|sass)$": "<rootDir>/src/testing/mocks/styles.ts"
    },
    testEnvironmentOptions: {
        globalsCleanup: "on",
    }
};
