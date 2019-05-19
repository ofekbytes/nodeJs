//
// write text to a file.
//

// import files system ('fs' = file system) functionality
const fs = require('fs');

//file-name in local path, and, text to write to file.
fs.writeFileSync('nodeJs.01.02.output.txt',"nodejs - hello world"); 