//  js/script/main.js

var pano;
require.config({
    paths: {
        'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        // 'BMap': 'http://api.map.baidu.com/api?v=2.0&ak=cBv1W8kpZ2EG0GdoyLKDSGZB',
        'async': 'https://cdn.bootcss.com/async/2.4.1/async',
        'mymap': '/components/bmap',
        'data': '/js/data',
        'axios': 'https://cdn.bootcss.com/axios/0.16.2/axios.min',
        'vue': 'https://cdn.bootcss.com/vue/2.4.2/vue.min',
        'layer': 'js/layer/layer',
        'embedpano': '/krpano/embedpano',
        'krpano': '/krpano/krpano',
        'pano': '/js/main',
        'testa': '/plugin/testa',
        'testb': '/plugin/testb',
        'foo': '/plugin/foo',
        'bar': '/plugin/bar'
    },
    shim: {
        'layer': {
            deps: ['jquery'],
            exports: 'layer'
        }
    }
})

var mods = [
    'jquery',
    'vue',
    'mymap',
    'data'
]
require(mods, function($, Vue, mymap, Data) {
    const plugin = {};
    var abc;
    $(() => {
        let vm = new Vue({
            el: "#app",
            data: {
                mydata: Data.data[0].nodeList[0].vrList,
                mapinit: Data.data[0].map
            },
            components: {
                'my-map': mymap
            }
        })
    })

})