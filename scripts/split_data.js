const lextra = require('../server/lextra_min');
const path = require('path');
const fs = require('fs');

const TARGET_DIR = path.resolve(__dirname, '../client/data');
const PAGE_SIZE = 200;
const LOADER = 'window.loadEntries';
const HEADER = "(function() {\nvar DATA = [\n";
const FOOTER = function() {
  return `\n];\n${LOADER}(DATA, ${cursor});\n})();\n`;
};
const JOINER = ",\n";

var cursor = 0;

for (; cursor < lextra.length; cursor += PAGE_SIZE) {
  writeFile(lextra.slice(cursor, cursor + PAGE_SIZE).map(stringify));
}

function writeFile(entries) {
  var filePath = TARGET_DIR + '/' + cursor + '.js';
  var content = HEADER + entries.join(JOINER) + FOOTER();
  fs.writeFileSync(filePath, content);
}

function stringify(entry) {
  return '{ ' + (entry.a ? `a: "${entry.a}", ` : '') +
    `d: "${entry.d}", e: "${entry.e}", f: "${entry.f}" }`;
}
