//  js/script/main.js

var pano;
require.config({
    paths: {
        'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        'embedpano': '/krpano/embedpano',
        'krpano': '/krpano/krpano',
        'pano': '/js/main',
        'testa': '/plugin/testa',
        'testb': '/plugin/testb',
        'foo': '/plugin/foo',
        'bar': '/plugin/bar'
    },
    shim: {
        'embedpano': {
            deps: ['krpano'],
            exports: 'embedpano'
        }
    }
})

var mods = [
    'jquery',
    'embedpano',
    'pano',
    'testa',
    'testb'
]
require(mods, function($, embedpano, Pano, testa, testb) {
    const plugin = {};
    var abc;
    let a = new testa();
    abc = a.init();
    console.log(abc);
    $.ajax("http://lbsyun.baidu.com/data/poi/list?geotable_id=45970&page_size=10&page_index=0&sn=be2afa3d9384f8061a3b3ef348f5dad1&i=1504860672333&_=1504860669872", {
            dataType: 'jsonp'
        })
        .then(function(data) {
            console.log(data);
        });





    pano = new Pano({
        xml: 'pano/1.xml'
    })

})