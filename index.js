var request = require('request');
var fs = require('fs');

var picStream = fs.createWriteStream('whatever.jpg');

request.get('https://sytantris.github.io/http-examples/future.jpg')
      .on('error', function (err) {                                   // Note 2
         throw err;
       })
      .on('response', function (response) {                           // Note 3
         console.log
         (
          'Downloading image...', '\n',
          'Response Status Message: ', response.statusMessage, '\n',
          'Content Type: ', response.headers['content-type']
          );
       })
      .on('close', function () {
        console.log('download complete')
      })
      .pipe(picStream);

picStream.on('close', function() {
      console.log('rendered');
});