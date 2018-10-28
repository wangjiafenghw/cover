const cgdnbt = require("cover-get-dom-node-by-tagname")
const replaceMark = '@^cover^';
let wxHtml = replaceMark; //特殊字符串用于替换，并尽量避免与源内容冲突
const wx_tag = require("./wx_tag.config")

//test data
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
    <div>
        <p>Hello</p>
        <p>cover.js</p>
    </div>
</body>
</html>
`;

String.prototype.replaceAll = function(s1,s2){
　　return this.replace(new RegExp(s1,"gm"),s2);
}
/**
 * * 用递归深度优先遍历能不能行，试试再说，用replaceMrak占位替换的方式
 * TODO 获取wxml标准的字符串
 * @param {json} body标签内的dom树json 
 */
function _re_json_get_str(json) {
    json.forEach((item, index) => {
        if(item.type==="element"){
            let str = `<${wx_tag[item.tagName].tagName}>${replaceMark}</${wx_tag[item.tagName].tagName}>${replaceMark}`  //获取wxml相应标签，mark占位
            wxHtml = wxHtml.replace(replaceMark, str)
            _re_json_get_str(item.children)
            if(index===json.length-1){    //不再有兄弟节点，去除replaceMark
                wxHtml = wxHtml.replace(replaceMark, "")
            }
        }else if(item.type==="text"){
            wxHtml = wxHtml.replace(replaceMark, item.content)
        }
        
        
    });
}
async function _get_wxml(body_json){
    await _re_json_get_str(body_json)
    return;
}

function main(str) {
    cgdnbt(str, "body", (body_json)=>{
        _get_wxml(body_json.children)
        console.log(wxHtml)
    })
}
main(htmlStr)