//  js/script/main.js

var pano;
require.config({
    paths: {
        'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        'embedpano': '/krpano/embedpano',
        'krpano': '/krpano/krpano',
        'pano': '/js/main',
        'testa': '/plugin/testa'
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
    'testa'
]
require(mods, function($, embedpano, Pano) {
    const plugin = {};
    for (let i in arguments) {

    }
    console.log(plugin);

    pano = new Pano({
        xml: 'pano/1.xml'
    })

})