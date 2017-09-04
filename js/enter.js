//  js/script/main.js

var pano;
require.config({
    paths: {
        'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        'embedpano': '/krpano/embedpano',
        'krpano': '/krpano/krpano',
        'pano': '/js/main'
    },
    shim: {
        'embedpano': {
            deps: ['krpano'],
            exports: 'embedpano'
        }
    }
})
require([
    'jquery',
    'embedpano',
    'pano'
], function($, embedpano, Pano) {

    pano = new Pano({
        xml: 'pano/1.xml'
    })

})