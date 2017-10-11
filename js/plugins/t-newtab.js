/**
 * @author:sjl
 * @date:2017-08-17
 * @desc:在内页中打开新选项卡窗口
 * Demo:
 * 子页面html代码：<a class="btn btn-blue" id="addProduct" href="javascript:;" data-href="product/add.html" data-index="999">添加商品</a>
 * 其中data-href、data-id、内容为必填
 * 子页面js使用
 *     $('#addProduct').on('click', function() {
 *               $(this).tNewTab();
 *               })
 */

define(['jquery', 'contabs'], function($, contabs) {

    $.fn.tNewTab = function(options) {
        this.settings = $.extend({
            title: $.trim(this.text())
        }, options);

        if (this.length == 0) return this;
        var self = this;
        var o = self.data("href"),
            m = self.data("index"),
            l = self.settings.title,
            k = true;



        if (o == undefined || $.trim(o).length == 0) {
            return false
        }

        var pJ = window.parent,
            pJ_menuTab = pJ.$(".J_menuTab"),
            pJ_mainContent = pJ.$(".J_mainContent .J_iframe"),
            pJ_tabsCotent = pJ.$(".J_menuTabs .page-tabs-content"),
            pJ_contentTabs = pJ.$(".content-tabs");
        //获取选项卡前面的宽度
        function getPrevAllTabWidth(l) {
            var k = 0;
            $(l).each(function() {
                k += $(this).outerWidth(true)
            });
            return k
        }
        //根据选项卡的数量定位显示位置
        function setTabPlace(n) {
            var o = getPrevAllTabWidth($(n).prevAll()),
                q = getPrevAllTabWidth($(n).nextAll());
            var l = getPrevAllTabWidth(pJ_contentTabs.children().not(".J_menuTabs"));
            var k = pJ_contentTabs.outerWidth(true) - l;
            var p = 0;
            if (pJ_tabsCotent.outerWidth() < k) {
                p = 0
            } else {
                if (q <= (k - $(n).outerWidth(true) - $(n).next().outerWidth(true))) {
                    if ((k - $(n).next().outerWidth(true)) > q) {
                        p = o;
                        var m = n;
                        while ((p - $(m).outerWidth()) > (pJ_tabsCotent.outerWidth() - k)) {
                            p -= $(m).prev().outerWidth();
                            m = $(m).prev()
                        }
                    }
                } else {
                    if (o > (k - $(n).outerWidth(true) - $(n).prev().outerWidth(true))) {
                        p = o - $(n).prev().outerWidth(true)
                    }
                }
            }
            pJ_tabsCotent.animate({
                    marginLeft: 0 - p + "px"
                },
                "fast")
        }
        var init = function() {
            pJ_menuTab.each(function() {
                if ($(this).data("id") == o) {
                    if (!$(this).hasClass("active")) {
                        $(this).addClass("active").siblings(".J_menuTab").removeClass("active");
                        setTabPlace(this);
                        pJ_mainContent.each(function() {
                            if ($(this).data("id") == o) {
                                $(this).show().siblings(".J_iframe").hide();
                                return false
                            }
                        })
                    }
                    k = false;
                    return false
                }
            });
            if (k) {
                var p = '<a href="javascript:;" class="active J_menuTab" data-id="' + o + '">' + l + ' <i class="fa fa-times-circle"></i></a>';
                pJ_menuTab.removeClass("active");
                var n = '<iframe class="J_iframe" name="iframe' + m + '" width="100%" height="100%" src="' + o + '" frameborder="0" data-id="' + o + '" seamless></iframe>';
                pJ_mainContent.hide().parents(".J_mainContent").append(n);
                pJ_tabsCotent.append(p);
                setTabPlace(pJ.$(".J_menuTab.active"))
            }
            return false;
        }

        init();
        return this;
    }
});