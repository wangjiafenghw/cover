const cgdnbt = require("cover-get-dom-node-by-tagname")
const fs = require('fs-extra')
const def_wxss = require('./wx_def_ss.config')  //h5标签默认样式

module.exports = {main, def_wxss = def_wxss.main};
let style = {};



/**
 * 获取wxss主函数
 * @param {String} htmlStr 
 */
function main(htmlStr){
    new Promise((resolve, reject)=>{
        cgdnbt(htmlStr, 'link', (data)=>{
            var arr= data.attributes.filter(function(item){    
                return item.key == 'href'; 
            })
            resolve(arr)
        })
    }).then((arr)=>{
        for(let i=0;i<arr.length;i++){
            
        }
    })
    cgdnbt(htmlStr, 'body', (data)=>{
        console.log('bady=====>\n', data)

        fs.writeFile('./test.wxml', JSON.stringify(data))
    })
}
