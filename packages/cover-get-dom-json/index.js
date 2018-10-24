'use strict'
const himalaya = require("himalaya")

module.exports = getDomJson


//*html(5)  ---->   jsonDomTree  ---X-->  cover-html*/
function getDomJson(htmlStr){
    let str = htmlStr.replace(/ *[\r|\n] */gm, '');   //去除es6模板字符串所存在的换行和空格
    let json = himalaya.parse(str)
    return json;
}

/*
//examples for test

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
*/





