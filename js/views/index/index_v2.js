define([
    'jquery',
    'bootstrap',
    'layer',
    'iCheck',
    'tNewTab',
    'tSwitch'
],function ($) {

    var indexV2 = {
        init:function () {
            this.bindEvent();
        },
        bindEvent:function () {

            $('#btnAdd').on('click', function() {
                $(this).tNewTab();
            });
            // 切换选项
            $('.switch').tSwitch({
                // isChecked: ,
                // checkBack: function(dom) {
                //
                // }
            });

            // 多选框
            $(".i-checks").iCheck({
                checkboxClass: "icheckbox_square-blue",
                // radioClass: "iradio_square-blue",
            })
            $('#checkAll').on('ifChecked', function(event) {
                $('input.i-checks').iCheck('check');
            });
            $('#checkAll').on('ifUnchecked', function(event) {
                $('input.i-checks').iCheck('uncheck');
            });

            $('.btnEdit').on('click',function () {
                layer.open({
                    title: '编辑',
                    type:2,
                    shadeClose: true,
                    btn: ['确定', '取消'],
                    area: ['750px', '500px'],
                    content: 'index_v2_template.html',
                    success: function(layero, index) {

                    },
                    yes: function(index, layero) {
                        layer.closeAll();
                    },
                    cancel: function() { //取消
                        layer.closeAll();
                    }
                });
            })



        }

    }
    indexV2.init();
})