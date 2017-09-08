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
    pano = new Pano({
        xml: 'pano/1.xml'
    })

})