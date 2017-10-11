/**
 * @author:sjl
 * @date:2017-08-018
 * @desc：开关按钮插件
 */
define(['jquery'], function($) {
    $.fn.tSwitch = function(options) {
        this.settings = $.extend({
            target: $(this),
            isChecked: true,
            isDisabled: false,
            checkBack: null
        }, options);


        var self = this,
            target = self.settings.target,
            bgColor = self.settings.themeColor;


        var honeySwitch = {
            init: function() {
                // console.log('开始');
                var _this = this;
                _this.bindEvent();
                if (target.length > 1) {
                    $.map(target, function(item, index) {
                        var id = $(item).attr('id');
                        var check = $(item).data('check');
                        if (!id) {
                            id = "stwich_001_" + String(index);
                            $(item).attr('id', id);
                        }
                        if (check && parseInt(check) == 1) {
                            _this.on($('#' + id));
                        } else {
                            _this.off($('#' + id));
                        }
                    })
                } else {
                    if (self.settings.isDisabled) {
                        return;
                    }
                    if (parseInt(self.settings.isChecked)) {
                        _this.on(target);
                    } else {
                        _this.off(target);
                    }
                }
            },
            getRandom: function() {
                return (10 - Math.random());
            },
            bindEvent: function() {
                var _this = this;
                var target = self.settings.target;
                target.unbind();
                if (target.length > 1) {
                    $.map(target, function(item, index) {
                        var id = $(item).attr('id');
                        if (!id) {
                            id = "stwich_001_" + String(index);
                            $(item).attr('id', id);
                        }
                        $('#' + id).on('click', function() {
                            _this.clickEvent($('#' + id));
                        })
                    })
                } else {
                    target.on('click', function() {
                        _this.clickEvent($(this));
                    })
                }


            },
            clickEvent: function(_dom) {
                var _this = this;
                if (_dom.hasClass("switch-disabled")) {
                    return;
                }
                if (_dom.hasClass("switch-off")) {
                    // self.settings.isChecked = true;
                    _this.on(_dom);
                } else {
                    // self.settings.isChecked = false;
                    _this.off(_dom);
                }
                self.settings.checkBack && self.settings.checkBack(_dom);
            },
            on: function(_dom) {
                _dom.removeClass("switch-off").addClass("switch-on");
                _dom.data('check', 1);
                // target.css({
                //     'border-color': bgColor,
                //     'box-shadow': bgColor + ' 0px 0px 0px 16px inset',
                //     'background-color': bgColor
                // });
            },
            off: function(_dom) {
                _dom.removeClass("switch-on").addClass("switch-off");
                _dom.data('check', 0);
                // target.css({
                //     'border-color': '#dfdfdf',
                //     'box-shadow': 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
                //     'background-color': 'rgb(255, 255, 255)'
                // });
            }

        };
        honeySwitch.init();
    }
});