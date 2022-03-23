const fs = require('fs');
const path = `./${process.argv[2]}`;

test();

function test() {


  let result = '';

  fs.readFile(path, 'utf8', async (err, data) => {
    if (err) console.error(err);
    if (data) {
      result = data;

      result = result.replace(/\d\r\n/, '')
      result = result.replace(/^\d+\r\n+/gm, '')
      console.log(result)

      fs.writeFile('./converted.txt', result, (err) => {
          if (err) console.error(err);
      });
    }
  });
}

