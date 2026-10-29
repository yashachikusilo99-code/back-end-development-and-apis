
const fs = require('fs');

fs.readFile('assets/poem.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});



