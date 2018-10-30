/**
 * * 工程文件模板内容
 * 
 */


module.exports = {
    // ? h5
    'h5':{
        'html':`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
    <div class="wrap">
        <img src="./images/logo.png" alt="">
        <p>Welcome <span>Cover.js</span></p>
    </div>
    <script src="./js/index.js"></script>
</body>
</html>
`,
        'style': `
html, body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.wrap{
    width: 100%;
    height: 100%;
    text-align: center;
}
.wrap img{
    margin-top: 8rem;
    width: 16rem;
}
.wrap{
    font-size: 3rem;
}
.wrap p span{
    color: darkgoldenrod;
}
`,
        'script': `
console.log('Welcome Cover.js!')
let r = 0, g = 0, b = 0;
setInterval(()=>{
    document.getElementsByTagName('span')[0].style.color = \`rgb(\${r},\${g},\${b})\`
    r = r < 255 ? r + 1 : 0;
    g = g < 255 ? g + 3 : 0;
    b = b < 255 ? b + 5 : 0;
}, 100)
`
    }
}