const formidable = require('formidable');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === "/fileupload") {
        var form = formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/Filsti/Til/Din/Filmappe/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err) {
                if(err) throw err;
                res.write('Filen er uploaded til serveren.');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<button>Send</button>');
        res.write('</form>');
        return res.end();
    }
}).listen(3000, '127.0.0.1');