

const wgw = require("./index")
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
    <div>
        <p>Hello</p>
        <p>cover.js</p>
        <div>
            <p>Hello</p>
            <p>cover.js</p>
        </div>
    </div>
</body>
</html>
`;
wgw(htmlStr, (res)=>{
    console.log(res)
})