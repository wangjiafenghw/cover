![logo](https://raw.githubusercontent.com/wangjiafenghw/cover/master/lib/logo.png)

[![license](https://img.shields.io/github/license/wangjiafenghw/cover.svg)](https://github.com/wangjiafenghw/cover/blob/master/LICENSE) ![npmV](https://img.shields.io/badge/npm-%3E%3Dv1.4.8-green.svg)

# cover
> efficient,silent,multiterminal conversion framework for front-end.
>
> 前端高效的、悄无声息的的多端输出框架。

建议使用vscode-Better Comments打开代码

### 使用体验[测试]

* npm i cover-generator  安装
* cover-generator init (project-name) 建立工程模板
* cover-generator build 编译

## 简介
该框架可以载入某种平台或环境的web程序（如：H5,微信小程序，react-native等）代码，就可以输出符合其他平台或环境运行的代码。

## 工作原理设想
随着前端技术的发展，前端技术所能涉及的平台越来越多功能也越来越强大，而问题也随之而来，即是对平台虽共用前端技术和理念但代码却并不统一，但也并非完全不同，所以可以制定一套标准，可以理解为介于机器码和前端代码之间的形态，可能无法直接运行也无法轻松直接阅读，但却是前端代码都具有的较为统一的形态，便于转化成适合各平台的代码。
举个例子：
机器码好比人类的DNA，各个平台的前端代码好比一个成年人，而cover框架好比人胚胎的胚胎的状态，每个人的胚胎状态不仅具有一直的形态,还可以根据基因成长为不同的形态。
>### cover工作流程图

[![cover工作流程图](http://on-img.com/chart_image/5bc86082e4b0bd4db96a728f.png)](https://www.processon.com/view/link/5bc86082e4b09b21f323bc8a)

>### cover输出端工作流程  

[![cover输出端工作流程](http://on-img.com/chart_image/5bc9225be4b0bd4db96af224.png)](https://www.processon.com/view/link/5bc92b87e4b0bd4db96af76d)

## cover内部逻辑
> 简介

cover既然作为能将多种终端的前端代码抽象出来，那么毕竟既有高度的概括性、明确性、简洁性和一致性。这里采用mvp设计模式，将dom树抽离存入View-html中，将计算后的样式View-style中。
```
<!-- html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```
经过cover入端处理模块=======>
```
[{
	"type": "element",
	"tagName": "!doctype",
	"attributes": [{
		"key": "html",
		"value": null
	}],
	"children": []
}, {
	"type": "element",
	"tagName": "html",
	"attributes": [{
		"key": "lang",
		"value": "en"
	}],
	"children": [{
		"type": "element",
		"tagName": "head",
		"attributes": [],
		"children": [{
			"type": "element",
			"tagName": "meta",
			"attributes": [{
				"key": "charset",
				"value": "UTF-8"
			}],
			"children": []
		}, {
			"type": "element",
			"tagName": "meta",
			"attributes": [{
				"key": "name",
				"value": "viewport"
			}, {
				"key": "content",
				"value": "width=device-width, initial-scale=1.0"
			}],
			"children": []
		}, {
			"type": "element",
			"tagName": "meta",
			"attributes": [{
				"key": "http-equiv",
				"value": "X-UA-Compatible"
			}, {
				"key": "content",
				"value": "ie=edge"
			}],
			"children": []
		}, {
			"type": "element",
			"tagName": "title",
			"attributes": [],
			"children": [{
				"type": "text",
				"content": "Document"
			}]
		}]
	}, {
		"type": "element",
		"tagName": "body",
		"attributes": [],
		"children": [{
			"type": "element",
			"tagName": "h1",
			"attributes": [],
			"children": [{
				"type": "text",
				"content": "Hello World"
			}]
		}]
	}]
}]
```

```
// 经过cover输出端处理模块输出wxml(wx-get-wxml)=======>
<!-- 输入样例 -->
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
<!-- 输出样例 -->
<view>
	<text>Hello</text>
	<text>cover.js</text>
	<view>
		<text>Hello</text>
		<text>cover.js</text>
	</view>
</view>
<view>
	<text>Hello</text>
	<text>cover.js</text>
</view>
```

