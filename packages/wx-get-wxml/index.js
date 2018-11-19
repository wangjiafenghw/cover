const cgdnbt = require("cover-get-dom-node-by-tagname")
const replaceMark = '@^cover^';
let wxHtml = replaceMark; //*特殊字符串用于替换，并尽量避免与源内容冲突
const wx_tag = require("./wx_tag.config")

module.exports = main
/**
 * * 用递归深度优先遍历能不能行，试试再说，用replaceMrak占位替换的方式
 * TODO 获取wxml标准的字符串
 * @param {json} body标签内的dom树json 
 */
function _re_json_get_str(json) {
    json.forEach((item, index) => {
        if(item.type==="element"){  //*标签
            let tagName, str, attribute;
            // todo 生成属性字符串
            attribute = "";
            
            // todo 生成标签部分
            switch (wx_tag[item.tagName].type) {
                case 0:
                    str = "";
                    break;
                case 1:
                    tagName = wx_tag[item.tagName].tagName;
                    // {item.tageName}>"cv-"+标签名>//*与标签名关联的类名
                    // {attribute}>//*属性字符串
                    // {replaceMark}//*替换标识符
                    str = `<${tagName} class="cv-${item.tagName}" ${attribute} />${replaceMark}`;
                    break;
                case 2:
                    tagName = wx_tag[item.tagName].tagName;
                    str = `<${tagName} class="cv-${item.tagName}" ${attribute}>${replaceMark}</${tagName}>${replaceMark}`;  // ? 获取wxml相应标签，mark占位
                    break;
                default:
                    break;
            }

            // todo 替换操作填充到wxHtml
            wxHtml = wxHtml.replace(replaceMark, str)
            _re_json_get_str(item.children)
            if(index===json.length-1){    //不再有兄弟节点，去除replaceMark
                wxHtml = wxHtml.replace(replaceMark, "")
            }
        }else if(item.type==="text"){   //*文本
            wxHtml = wxHtml.replace(replaceMark, item.content+replaceMark)
        }
        
    });
}
async function _get_wxml(body_json){
    await _re_json_get_str(body_json)
    return;
}

function main(str, callback) {
    cgdnbt(str, "body", (body_json)=>{
        _get_wxml(body_json.children)
        //todo开发样例输出
        // let fs = require('fs-extra')
        // fs.outputFile(__dirname+"/cover_demo.js", JSON.stringify(body_json), err=>{
        //     if(err) throw err;
        // })
        //todoEND-------
        callback(wxHtml)
    })
}