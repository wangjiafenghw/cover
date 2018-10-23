'use strict'
const himalaya = require("himalaya")


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
let json = himalaya.parse(htmlStr)
console.log(json[3].children[3])   //下一步去除无效对象属性





