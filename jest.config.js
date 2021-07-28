"use strict";

const config = {
  collectCoverageFrom: ["src/index.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "@swc-node/jest",
  },
};

module.exports = config;
