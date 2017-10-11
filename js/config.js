require.config({
    baseUrl: '/js/',
    paths:{
        $: 'plugins/jquery.min',
        jquery: 'plugins/jquery.min',
        hplus:'hplus',//公共hplus方法
        bootstrap: 'plugins/bootstrap/bootstrap.min',
        metisMenu: 'plugins/metisMenu/jquery.metisMenu',//导航插件
        slimScroll: 'plugins/slimscroll/jquery.slimscroll.min',
        layer: 'plugins/layer/layer',
        iCheck: 'plugins/iCheck/icheck.min',
        ejs: 'plugins/ejs/ejs',
        text: 'plugins/text',
        rejs: 'plugins/rejs',
        webuploader: 'plugins/webuploader/webuploader.min', // 上传插件
        uploadImage: 'plugins/uploadImage', // 基于webuploader插件的封装，用于上传单个图片
        tNewTab: 'plugins/t-newtab',
        tSwitch: 'plugins/t-Switch/t-Switch',
        query: 'plugins/tpage/query',
        tPage: 'plugins/tpage/paging'

    },
    waitSeconds: 0,
    shim:{
        $: {
            exports: '$'
        },
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        },
        metisMenu: {
            deps: ['jquery']
        },
        slimScroll: {
            deps: ['jquery']
        },
        layer: {
            deps: ['jquery', 'css!plugins/layer/skin/default/layer']
        },
        iCheck: {
            deps: ['jquery', 'css!../css/plugins/iCheck/custom']
        },
        ejs: {
            exports: 'ejs'
        },
        webuploader: {
            deps: ['jquery', 'css!../css/plugins/webuploader/webuploader.css']
        },
        tSwitch: {
            deps: ['jquery', 'css!plugins/t-Switch/t-Switch']
        },
        tPage: {
            deps: ['jquery','css!../css/tpage']
        }
    },
    map: {
        '*': {
            'css': 'plugins/require-css/css'
        }

    }

});