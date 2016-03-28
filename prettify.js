const finder = require('findit')(process.argv[2] || './data');
const path = require('path');
const jsonfile = require('jsonfile');

finder.on('file', function (file, stat) {
  const obj = jsonfile.readFileSync(file)
  jsonfile.writeFile(file, obj, {spaces: 2}, function (err) {
    if (err) {
      console.error(err)
    }
  })
});
