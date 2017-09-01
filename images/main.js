// 背景全景地址：
// http://pano-sdk-js.cdn.jinglvtong.com/sdk/iframe/noskin.html?pano_id=7233
// 四个引导页的ID从7230-7233

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

$(function() {

    var id = getQueryString("id") ? getQueryString("id") : 0;
    var pageLen = $('.page li').length;
    var flag = true;

    function anima(id) {
        var curNode = $('.page li').eq(id);
        curNode.addClass('active');
        curNode.find('.a0').addClass('slideIn0');
        curNode.find('.a1').addClass('slideIn1');
        curNode.find('.a2').addClass('slideIn2');
        curNode.find('.a3').addClass('slideIn3');
        var target = curNode.find('.bg')[0];
        var dx, dy, winX;
        touch.on(target, 'touchstart', function(ev) {
            ev.preventDefault();
        });

        touch.on(target, 'dragend', function(ev) {
            dx = Math.abs(ev.x);
            dy = ev.y;
            winX = $(window).width() * .3;
            if (dx > winX) {
                var imgW = $(target).width();
                var winW = $(window).width();
                var d = winW - imgW;
                $(target).animate({ 'left': d }, 1000, function() {
                    curNode.removeClass('active');
                    id++;
                    if (id < pageLen) {
                        anima(id);
                    } else {
                        console.log(id);
                    }
                })
            } else {
                console.log(dx + '---' + winX);
            }
        });
    }

    anima(id);

    $(".help").click(function() {
        $(this).hide();
    });

});


var mypano;


embedpano({
    id: 'pano-1',
    wmode: "transparent",
    xml: "pano/1.xml",
    target: 'pano1',
    initvars: { mypath: "/krpano/" },
    onready: krpanoReady
});

function krpanoReady(krpano) {

    var s1 = krpano.get("events['skin_events']")
    var fov = krpano.get("view");
    mypano = krpano;
    krpano.call("loadscene('pano2',null,MERGE,BLEND(1));");
    console.log(fov);
    krpano.call("trace(krpano is ready...)");
}

embedpano({
    id: 'pano-2',
    wmode: "transparent",
    xml: "pano/2.xml",
    target: 'pano2'
});

embedpano({
    id: 'pano-3',
    wmode: "transparent",
    xml: "pano/3.xml",
    target: 'pano3'
});

embedpano({
    id: 'pano-4',
    wmode: "transparent",
    xml: "pano/4.xml",
    target: 'pano4'
});