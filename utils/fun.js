module.exports = {
    /**
     * *判断数组中是否存在键名为key的对象
     * @param {Array} array 待测数组
     * @param {String} key 键名
     */
    hasKeyofArrayObj: (array, key, item_key="key")=>{
        let r = array.filter(item=>item[item_key]===key)
        if(!r.length){
            return false;
        }else{
            return true;
        }
    }
}