const fs = require('fs');
const finder = require('findit')(process.argv[2] || './data');
const path = require('path');
const jsonfile = require('jsonfile');
const pretty = require('pretty');

finder.on('file', function (file, stat) {

  if (file.includes(".json")) {
    const obj = jsonfile.readFileSync(file)
    jsonfile.writeFile(file, obj, {spaces: 2}, function (err) {
      if (err) {
        console.error(err)
      }
    })
  }
  // else {
  //   const string = fs.readFileSync(file, "utf8")
  //   fs.writeFileSync(file, pretty(string));
  // }

});
