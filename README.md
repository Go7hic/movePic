movePic
=======
一个鼠标移动到图片上显示放大效果的 jQuery 插件，很多电商网站都有这个效果。

### DEMO

http://yongyuan.us/demo/movePic

### 使用

1.引入 jQuery 文件

2.引入 jquery.movePic.js文件

3.具体示例


```html
<div class="movePic">
    <div id="demo" data-src="image.jpg" style="width: 200px"><img src="image.jpg" alt=""></div>
</div>
```
建议设置拥有 data-src 标签的宽度和里面 img 宽度一样 

使用插件默认的图片大小和颜色

```javascript
 $(function () {
        $("#demo").movePic()
    })
```
如果要改成自己喜欢的颜色可以这样设置，把里面对应的值改成你需要的值

```javascript
$("#demo").movePic({
      // 鼠标样式变量
        shadeColor: "#57ad68",
        shadeBorder: "#57ad68",
        shadeOpacity: 0.5,
        cursor: "move",
        // 大图的样式变量
        layerWidth: 400,
        layerHeight: 300,
        layerBorder: "#ddd",
        fade: true,

        largeWidth: 1280,
        largeHeight: 960
});
```
