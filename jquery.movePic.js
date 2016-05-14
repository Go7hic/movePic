(function ($) {
    var defaults = {
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
    }

    var movePic = function (option) {
        option = $.extend({}, defaults, option);

        $(this).each(function() {
            var self = $(this).css("position", "relative");
            var img = self.children().first();

            var ratio = {
                x: img.width() / option.largeWidth,
                y: img.height() / option.largeHeight
            }

            var size = {
                shade:
                {
                    width: option.layerWidth * ratio.x - 2,
                    height: option.layerHeight * ratio.y - 2
                }
            }

            // 鼠标遮罩内容样式
            var shade = $("<div>").css({
                "position": "absolute",
                "left": "0px",
                "top": "0px",
                "background-color": option.shadeColor,
                "border": "1px solid " + option.shadeBorder,
                "width": size.shade.width,
                "height": size.shade.height,
                "opacity": option.shadeOpacity,
                "cursor": option.cursor
            });
            shade.hide().appendTo(self);

            // 大图内容样式
            var large = $("<img>").css({
                "position": "absolute",
                "display": "block",
                "width": option.largeWidth,
                "height": option.largeHeight
            });
            var layer = $("<div>").css({
                "position": "absolute",
                "left": self.width() + 5,
                "top": 0,
                "background-color": "#111",
                "overflow": "hidden",
                "width": option.layerWidth,
                "height": option.layerHeight,
                "border": "1px solid " + option.layerBorder
            });
            large.attr("src", self.attr("data-src"));
            large.appendTo(layer);
            layer.hide().appendTo(self);

            var half = {
                x: size.shade.width / 2,
                y: size.shade.height / 2
            }

            var area = {
                width: self.innerWidth() - shade.outerWidth(),
                height: self.innerHeight() - shade.outerHeight()
            }

            var offset = self.offset();

            var show = function() {
                offset = self.offset();
                shade.show();
                if(option.fade) {
                    layer.stop().fadeIn(300);
                } else {
                    layer.show();
                }
            }

            var hide = function() {
                shade.hide();
                layer.hide();
            }

            self.mousemove(function(e) {
                var x = e.pageX - offset.left;
                var y = e.pageY - offset.top;

                if (x < 0 || x > self.innerWidth()) return hide();
                if (y < 0 || y > self.innerWidth()) return hide();

                x = x - half.x;
                y = y - half.y;

                if (x < 0) x=0;
                if (y < 0) y = 0;

                if (x > area.width) x = area.width;
                if (y > area.height) y = area.height;

                shade.css({
                    left: x,
                    top: y
                });

                large.css({
                    left: (0 - x / ratio.x),
                    top: (0 - y / ratio.y)
                });
            })
            .mouseenter(show)
            .mouseleave(hide);
        });
    }

    $.fn.extend({
        movePic: movePic
    });
})(jQuery)
