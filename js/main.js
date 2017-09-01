define([
  'jquery',
  'embedpano'
], function ($, embedpano) {
  'use strict'
  var DEFAULT_OPTION = {
    passQueryParameters: false,
    target: 'pano',
    swf:'/krpano/krpano.swf',
    xml: undefined,
    wmode: 'transparent',
    mwheel: true,
    initvars: {
      mypath: '/krpano/' 
    }
  }

  function Pano (option) {
    this.createPano(option)
  }

  Pano.prototype = {
    createPano: function (option) {
        this.option = $.extend(true, {}, DEFAULT_OPTION, option)
        var kOption = {};
        var _this = this;
    
        kOption.passQueryParameters = this.option.passQueryParameters
        kOption.target = this.option.target
        kOption.vars = this.option.vars
        kOption.xml = this.option.xml
        kOption.initvars = this.option.initvars
        kOption.swf = this.option.swf
        kOption.html5 = 'only'
        kOption.mobilescale = 1
        kOption.mwheel = this.option.mwheel
        kOption.onready = function (krpano) {
            krpano.set('pano', _this);
            _this.krpano = krpano;
        }
        $(function () {
          _this.element = $('#' + kOption.target)
          embedpano(kOption)
        })
    },
    loadScene: function(name) {
        this.krpano.call("loadscene('" + name + " ',null,MERGE,BLEND(1));");
    }

  }

  return Pano
})

// ;(function (window, undefined) {
//   window.basePath = 'https://pano.yuntongvr.com'
//   window.codePath = 'https://code.yuntongvr.com/panocooker'
//   var yp = function (option) {
//     this.init()
//     this.createPano(option)
//   }

//   var skinConfig = {
//     store: {
//       // js: "./skin/store/store.all.js",
//       // css: "./skin/store/css/toolbar.css"
//     }
//   }

//   yp._methods = {}
//   yp._plugins = {}
//   yp._skins = {}
//   yp._loadXml = []

//   yp.extend = yp.prototype

//   function _initMethod (funs) {
//     if (typeof funs.xml === 'string') {
//       yp._loadXml.push(funs.xml)
//     } else if (typeof funs.xml === 'array') {
//       yp._loadXml.concat(funs.xml)
//     }
//   }

//   yp.addMethod = function (name, funs) {
//     _initMethod(funs)
//     yp._methods[name] = funs
//   }

//   yp.addPlugin = function (name, funs) {
//     // _initMethod(funs)
//     yp._plugins[name] = funs
//   }

//   yp.addSkin = function (name, obj, fn) {
//     yp._skins[name] = obj
//     fn && fn()
//   }

//   yp.callback = function (funs) {
//     if (typeof funs.xml === 'string') {
//       yp._loadXml.push(funs.xml)
//     } else if (typeof funs.xml === 'array') {
//       yp._loadXml.concat(funs.xml)
//     }

//     return function () {
//       var yp = this

//       Object.defineProperty(this[i], 'krpano', (function () {
//         return {
//           get: function () { return yp.krpano; },
//           enumerable: true
//         }
//       }()))

//       Object.defineProperty(this[i], 'yp', (function () {
//         return {
//           get: function () { return yp; },
//           enumerable: true
//         }
//       }()))

//       var name = arguments[0]
//       var slice = [].slice
//       var args = slice.call(arguments, 1)

//       if (name && funs[name]) {
//         return funs[name].apply(funs, args)
//       } else if (name) {
//         logger.error('未找到方法:' + name)
//       }

//       return funs
//     }
//   }

//   yp.extend.callback = function (name, data) {
//     typeof this.option.callback[name] === 'function' && this.option.callback[name].call(this, data)
//   }

//   // 创建全景
//   yp.extend.createPano = function (option) {
//     this.option = $.extend(true, {}, yp.DEFAULT_OPTION, option)
//     var kOption = {};
//     var _this = this;

//     kOption.passQueryParameters = this.option.passQueryParameters
//     kOption.target = this.option.target
//     kOption.vars = this.option.vars
//     kOption.starview = this.option.starview
//     kOption.swf = this.option.swf
//     kOption.xml = this.option.xml
//     kOption.initvars = this.option.initvars
//     kOption.onerror = this.option.callback.onError
//     kOption.html5 = 'only'
//     kOption.mobilescale = 1
//     kOption.mwheel = this.option.mwheel
//     kOption.onready = function (krpano) {
//         krpano.set('pano', _this);
//     }

//     $(function () {
//       _this.element = $('#' + kOption.target)
//       embedpano(kOption)
//     })
//   }

//   yp.extend.initEvent = function (name) {
//     var event = [
//       'onenterfullscreen',
//       'onexitfullscreen',
//       'onxmlcomplete',
//       'onpreviewcomplete',
//       'onloadcomplete',
//       'onnewpano',
//       'onremovepano',
//       'onnewscene',
//       'onloaderror',
//       'onkeydown',
//       'onkeyup',
//       'onclick',
//       'onmousedown',
//       'onmouseup',
//       'onmousewheel',
//       'onidle',
//       'onviewchange',
//       'onviewchanged',
//       'onresize',
//       'onautorotatestart',
//       'onautorotatestop',
//       'onautorotateoneround',
//       'onautorotatechange',
//       'onaddscene',
//       'onremovescene'
//     ]

//     this.events = this.method.util.createItem('events', 'skin_chuanti_events')

//     var callbackFn = function (eventName) {
//       var slice = [].slice
//       var args = slice.call(arguments, 1)

//       if (eventName == 'onautorotateoneround') {
//         console.log(eventName)
//       }

//       for (var j in this.plugin) {
//         var fn = this.plugin[j][eventName]

//         if (fn && typeof fn === 'function') {
//           fn.apply(this.plugin[j], args)
//         }
//       }

//       for (var j in this.method) {
//         var fn = this.method[j][eventName]

//         if (fn && typeof fn === 'function') {
//           fn.apply(this.method[j], args)
//         }
//       }

//       var fn = this.option.callback[eventName]

//       if (typeof fn === 'function') {
//         fn.apply(this, args)
//       }
//     }.bind(this)

//     if (name) {
//       callbackFn(name)
//     }

//     for (var i in event) {
//       this.events[event[i]] = callbackFn.bind(this, event[i])
//     }
//   }

//   yp.extend.callwith = function (type) {
//     var name = arguments[0]
//     var slice = [].slice
//     var args = slice.call(arguments, 1)
//     if (this.option.callback && typeof this.option.callback[type] === 'function') {
//       this.option.callback[type].apply(this, args)
//     }
//   }



//   window.YP = yp
// })(window)
