const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: ". /",
  metadata: {
    browser: {
      name: "chrome",
      version: "125",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Helix" },
      { label: "Release", value: "2.0" },
      { label: "Cycle", value: "Week 3" },
     // { label: "Execution Start Time", value: performance.now() },
     // { label: "Execution End Time", value: performance.now() },
    ],
  },
});