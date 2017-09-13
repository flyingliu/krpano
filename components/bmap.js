define([
    'vue',
    'jquery',
    'layer'
], function(Vue, $) {
    'use strict';


    var map;
    var mymap = {
        template: `<div class="mymap">
            <div id="allmap"></div>
            <div class="mylayer hide">
                <h5>{{activePoint.vrName}}</h5>
                <div class="fimg"><img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bbxzdmkj30go0afdh4.jpg" /></div>
                <div class="ftxt">{{activePoint.vrContent}} >></div>
                <footer @click="notiveDown"><i class="icon-heart iconfont active"></i> 想去</footer>
            </div>
            <div class="mynav">
                <i class="iconfont icon-list list"></i>
                <nav>
                    <li class="active">全部</li>
                    <li>全部</li>
                    <li>全部</li>
                    <li>全部</li>
                <nav>
            </div>
            <transition name="fade">
                <div class="download" v-if="isShowDown">\
                    <i class="icon-aoliliya iconfont logo"></i>
                    <div class="tip">
                        <p>下载APP体验更多精彩内容</p>
                        <p>奥里里亚 | 20394人在玩</p>
                    </div>
                    <button class="btn-download">下载</button>
                </div>
            </transition>
        </div>`,
        props: ['mydata', 'mapinit'],
        data: () => {
            return {
                center: {},
                activePoint: {},
                isShowDown: false
            }
        },
        methods: {

            notiveDown() {
                console.log("down");
                this.isShowDown = 1;
            },
            openLayer(option) {
                layer.open({
                    type: 1,
                    area: ['210px', 'auto'],
                    shade: 0.01,
                    closeBtn: 0,
                    shadeClose: true,
                    title: false,
                    content: $(".mylayer")
                });
            },
            getCenter() {
                let w = $(window).width() / 2 | 0;
                let h = ($(window).height() - 300) / 2 | 0;
                this.center = { w, h };
            },
            pixel2Zuobiao(x, y) {
                var p = new BMap.Pixel(x, y);
                var point1 = map.pixelToPoint(p);
                var positionArray = new Array(point1.lng, point1.lat);
                return positionArray;
            },
            zuobiao2Pixel(lng, lat) {
                var point = new BMap.Point(lng, lat);
                var pixel = map.pointToPixel(point);
                var pixelArray = new Array(pixel.x, pixel.y);
                return pixelArray;
            },
            showPoint(p) {
                this.moveTo(p);
                this.activePoint = p;
                this.openLayer();
            },
            moveTo(point) {
                let pt = new BMap.Point(point.lng, point.lat);
                let getPixel = this.zuobiao2Pixel(point.lng, point.lat);
                let x = this.center.w - getPixel[0];
                let y = this.center.h - getPixel[1];
                map.panBy(x, y);
            },
            polyline(points) {
                let allPoint = [];
                for (let i = 0, len = points.length; i < len; i++) {
                    let pt = new BMap.Point(points[i].lng, points[i].lat);
                    allPoint.push(pt);
                }
                var polyline = new BMap.Polyline(allPoint, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
                map.addOverlay(polyline);
            },
            marker(points) {
                let allPoint = [];
                points.forEach(function(p) {
                    //创建小狐狸
                    let pt = new BMap.Point(p.lng, p.lat);
                    allPoint.push(pt);
                    // let myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300, 157));
                    // let marker = new BMap.Marker(pt, { icon: myIcon });
                    let marker = new BMap.Marker(pt);
                    marker.addEventListener("click", this.showPoint.bind(this, p));
                    map.addOverlay(marker);
                }, this);
            },
        },
        mounted() {
            this.$nextTick(() => {
                map = new BMap.Map("allmap");
                map.enableScrollWheelZoom(true);
                this.marker(this.mydata)
                this.polyline(this.mydata)
                this.getCenter();
                map.centerAndZoom(new BMap.Point(this.mapinit.lng, this.mapinit.lat), this.mapinit.zoom);
            });
        }
    }

    return mymap
});