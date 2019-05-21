
// Learn
// Test
// Deploy
// Delete

var html = '';

write('#### global ####\n');
write('globalVar: ' + globalVar); //undefined, but visible

try {
  write('globalLet: ' + globalLet); //undefined, *not* visible
} catch (exception) {
  write('globalLet: exception');
}

write('\nset variables');

var globalVar = 'globalVar';
let globalLet = 'globalLet';

write('\nglobalVar: ' + globalVar);
write('globalLet: ' + globalLet);

function functionScoped() {
  write('\n#### function ####');
  write('\nfunctionVar: ' + functionVar); //undefined, but visible

  try {
    write('functionLet: ' + functionLet); //undefined, *not* visible
  } catch (exception) {
    write('functionLet: exception');
  }

  write('\nset variables');

  var functionVar = 'functionVar';
  let functionLet = 'functionLet';

  write('\nfunctionVar: ' + functionVar);
  write('functionLet: ' + functionLet);
}

function blockScoped() {
  write('\n#### block ####');
  write('\nblockVar: ' + blockVar); //undefined, but visible

  try {
    write('blockLet: ' + blockLet); //undefined, *not* visible
  } catch (exception) {
    write('blockLet: exception');
  }

  for (var blockVar = 'blockVar', blockIndex = 0; blockIndex < 1; blockIndex++) {
    write('\nblockVar: ' + blockVar); // visible here and whole function
  };

  for (let blockLet = 'blockLet', letIndex = 0; letIndex < 1; letIndex++) {
    write('blockLet: ' + blockLet); // visible only here
  };

  write('\nblockVar: ' + blockVar);

  try {
    write('blockLet: ' + blockLet); //undefined, *not* visible
  } catch (exception) {
    write('blockLet: exception');
  }
}

function write(line) {
  html += (line ? line : '') + '<br />';
}

functionScoped();
blockScoped();

document.getElementById('results').innerHTML = html;
