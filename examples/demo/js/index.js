
console.log('Welcome Cover.js!')
let r = 0, g = 0, b = 0;
setInterval(()=>{
    document.getElementsByTagName('span')[0].style.color = `rgb(${r},${g},${b})`
    r = r < 255 ? r + 1 : 0;
    g = g < 255 ? g + 3 : 0;
    b = b < 255 ? b + 5 : 0;
}, 100)
