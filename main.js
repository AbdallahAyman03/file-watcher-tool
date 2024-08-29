const watcher = require("./watcher");

let dir = process.argv[2] || ".";

const dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
watcher(dir, (filePath, change, stats) => {
  console.log(
    `at ${new Date().toLocaleTimeString(
      "en-US",
      dateOptions
    )} - ${filePath} - ${change} ${stats ? stats : ""}`
  );
});
