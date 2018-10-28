const gdj = require("cover-get-dom-json")

module.exports = main;

/**
 * ? 近期修改为async await写法避免回调
 * 
 * @param {*} json dom树json
 * @param {*} _tagName 要获取节点的tagName
 * @param {*} callback 回调函数
 */
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