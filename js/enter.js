//  js/script/main.js

var pano;
require.config(
  {
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
  }
)
require([
  'jquery',
  'embedpano',
  'pano'
], function ($, embedpano,Pano) {

    pano = new Pano({
    xml: 'pano/1.xml'
  })



//   embedpano({
//     wmode: 'transparent',
//     xml: 'pano/1.xml',
//     target: 'pano',
//     initvars: { mypath: '/krpano/' },
//     onready: krpanoReady
//   })

//   function krpanoReady (krpano) {
//     var s1 = krpano.get("events['skin_events']")
//     var fov = krpano.get('view')
//     mypano = krpano
//     krpano.call("loadscene('pano2',null,MERGE,BLEND(1));")
//     console.log(fov)
//     krpano.call('trace(krpano is ready...)')
//   }
})
