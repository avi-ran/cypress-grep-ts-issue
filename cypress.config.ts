import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  numTestsKeptInMemory: 5,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  video: true,
  e2e: {
    supportFile: "cypress/support/commands.ts",
    pageLoadTimeout: 180000,
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    watchForFileChanges: false,
    experimentalInteractiveRunEvents: true,
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    },
    setupNodeEvents: async (on, config) => {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});