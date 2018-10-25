const gdj = require("cover-get-dom-json")

module.exports = main;


function _re_get_node(json, _tagName, callback) {
    for (i in json) {
        if (json[i].tagName === _tagName) {
            callback(json[i])
        }
        if (json[i].hasOwnProperty('children') && json[i].children.length > 0) {
            _re_get_node(json[i].children, _tagName, callback)
        }
    }
}


//主函数
function main(str, _tagName, callback){   
    let json = gdj(str)         //获取json
    return _re_get_node(json, _tagName, callback)
}