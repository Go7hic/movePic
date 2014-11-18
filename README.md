movePic
=======
一个鼠标移动到图片上显示放大效果的 jQuery 插件，很多电商网站都有这个效果。

### DEMO
http://blog.yongyuan.us/movePic/

###使用

1.引入 jQuery 文件
2.引入 movePic.jquery.js文件
3.具体示例

使用插件默认的图片大小和颜色
```html
<div class="movePic">
    <a id="demo" href="image.jpg"><img src="image.jpg" alt=""></a>
</div>
```
给 a 标签链接引入一张放大后的图片(因为后面放大显示的那张图片就是引用a标签href里的图片)，img标签里的图片可以找一张小一点的代替，这里为了方便选用同一张照片演示。

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
