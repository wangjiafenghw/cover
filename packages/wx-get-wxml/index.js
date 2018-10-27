import { cgdnbt } from "cover-get-dom-node-by-tagname"
const replaceMark = '@^cover^';
let wxHtml = replaceMark;   //特殊字符串用于替换，并尽量避免与源内容冲突
const wx_tag = {   //微信小程序和html5标签对比obj
    'div':{
        tagname: "view"
    },
    'h1':{   
        tagname: "text",
        style: `display: block;
                font-size: 2em;
                margin-block-start: 0.67em;
                margin-block-end: 0.67em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;`
    },
    'h2':{
        tagname: "text",
        style: `display: block;
                font-size: 2em;
                margin-block-start: 0.67em;
                margin-block-end: 0.67em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;`
    },   //等等
    'p':{
        tagname: "text"
    }
    
}

/**
 * * 用递归深度优先遍历能不能行，试试再说，用replaceMrak占位替换的方式
 * TODO 获取wxml标准的字符串
 * @param {json} body标签内的dom树json 
 */
function _get_wxml(json){

}

function main(str){
    let body_json = cgdnbt(str);
    _get_wxml(body_json)

}