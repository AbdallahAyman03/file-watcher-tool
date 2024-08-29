// Description: Watcher for file changes

let fs = require("fs");
let path = require("path");
const options = {
  recursive: true,
};
let watcher = (dir, callback) => {
  fs.watch(dir, options, (eventType, filename) => {
    let filePath = path.join(dir, filename);
    let change = "";
    let stats = "";
    if (eventType === "rename") {
      change = "renamed";
      if (fs.existsSync(filePath)) {
        stats = "to be created";
      } else {
        stats = "to be deleted";
      }
    } else {
      change = "changed";
    }
    callback(filePath, change, stats);
  });
};

module.exports = watcher;
