const wgws = require('./index')
const fs = require('fs-extra')

let htmlStr = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
</head>
<body>
    <img src="./images/logo.png" alt="">
    <p>Welcome <span>Cover.js</span></p>
</body>
</html>
`;

wgws(htmlStr)
