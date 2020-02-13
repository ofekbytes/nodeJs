//
// write text to a file.
//

// import files system ('fs' = file system) functionality
const fs = require('fs');

//file-name in local path, and, text to write to file. ('fileName' , "text inside file")
fs.writeFileSync('nodeJs.01.02.write2file.output.txt',"file-name: nodeJs.01.02.write2file.output.txt \nnodejs - hello world \nnew line.\n"); 
