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