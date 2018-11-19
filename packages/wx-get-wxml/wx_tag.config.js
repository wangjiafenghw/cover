/**
 * * 微信小程序wxml标签和html5对照obj
 * @param {number} type 0>空标签 1>自闭合标签 2>普通标签
 */
module.exports = { 
    'div': {
        tagName: "view",
        type: 2,
        class: "class"
    },
    'h1': {
        tagName: "text",
        type: 2,
        class: "class"
    },
    'h2': {
        tagName: "text",
        type: 2,
        class: "class"
    },
    'p': {
        tagName: "text",
        type: 2,
        class: "class"
    },
    'span': {
        tagName: "text",
        type: 2,
        class: "class"
    },
    'script': {
        tagName: "view",
        type: 0
    },
    'a': {
        tagName: "navigator",
        type: 2
    },
    'img': {
        tagName: "image",
        src: "url",
        type: 1
    }

}