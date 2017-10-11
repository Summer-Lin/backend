define([
    'jquery',
    'query',
    'tPage',

    'bootstrap',
    'layer'
],function ($,Paging) {
    console.log('ffffffdafa')
    $('#pageTool').Paging({
        pagesize: 10,
        count: 10,
        current: 1,
        toolbar: true,
        callback: function (page, size, count) { //点击页码回调
            // _this.initTemplatePage(page, size)
        },
        changeCallback: function (page, size) { //下拉框条数回调
            // _this.initTemplatePage(page, size)
        }
    });
})