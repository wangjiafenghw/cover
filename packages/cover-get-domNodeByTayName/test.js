const gdnbt = require("./index").cgdj
const gdnbtSync = require("./index").cgdjSync

let htmlStr = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
`;
gdnbt(htmlStr, "h1", (res)=>{
    console.log("Data======>\n", res)
})
let c = gdnbtSync(htmlStr, "body")
console.log("syncData===========>\n", c)

var fs = require('fs');

function readDirRecur(folder, callback) {
    fs.readdir(folder, function (err, files) {
        var count = 0
        var checkEnd = function () {
            ++count == files.length & ; & ;
            callback()
        }
        files.forEach(function (file) {
            var fullPath = folder + '/' + file;
            fs.stat(fullPath, function (err, stats) {
                if (stats.isDirectory()) {
                    return readDirRecur(fullPath, checkEnd);
                } else {
                    /*not use ignore files*/
                    if (file[0] == '.') {} else {
                        fileList.push(fullPath)
                    }
                    checkEnd()
                }
            })
        })
        //为空时直接回调 
        files.length === 0 & ; & ;
        callback()
    })
}
var fileList = []
var timeStart = new Date()
readDirRecur('D:/github/oncedoc', function (filePath) {
    console.log('done', new Date() - timeStart);
    console.log(fileList);
})

