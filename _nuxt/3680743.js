(window.webpackJsonp=window.webpackJsonp||[]).push([[70,71,72],{397:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return l}));e(277),e(96);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(n){return null==n?void 0:n.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){return Number(o(t)(n)).toLocaleString("en",{minimumFractionDigits:t})}}},430:function(t,n,e){"use strict";e(23),e(29),e(36),e(38);var o=e(6),r=(e(96),e(25),e(34),e(70),e(263),e(17),e(37),e(264),e(265),e(266),e(267),e(268),e(269),e(270),e(271),e(272),e(273),e(274),e(275),e(276),e(39),e(46),e(11),e(71),e(278),e(0)),l=e(176),c=e(19);function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,n){return t[n]={type:[Boolean,String,Number],default:!1},t}),{}),C=f.reduce((function(t,n){return t["offset"+Object(c.B)(n)]={type:[String,Number],default:null},t}),{}),h=f.reduce((function(t,n){return t["order"+Object(c.B)(n)]={type:[String,Number],default:null},t}),{}),M={col:Object.keys(v),offset:Object.keys(C),order:Object.keys(h)};function y(t,n,e){var o=t;if(null!=e&&!1!==e){if(n){var r=n.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==e&&!0!==e?(o+="-".concat(e)).toLowerCase():o.toLowerCase()}}var x=new Map;n.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},C),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,n){var e=n.props,data=n.data,r=n.children,c=(n.parent,"");for(var m in e)c+=String(e[m]);var d=x.get(c);return d||function(){var t,n;for(n in d=[],M)M[n].forEach((function(t){var o=e[t],r=y(n,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!e.cols},Object(o.a)(t,"col-".concat(e.cols),e.cols),Object(o.a)(t,"offset-".concat(e.offset),e.offset),Object(o.a)(t,"order-".concat(e.order),e.order),Object(o.a)(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),x.set(c,d)}(),t(e.tag,Object(l.a)(data,{class:d}),r)}})},480:function(t,n,e){var content=e(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("3a64b7ad",content,!0,{sourceMap:!1})},481:function(t){t.exports=JSON.parse('{"date":"2021/8/20 20:15","data":{"専門家3行コメント":[{"@ja":"災害レベルで感染が猛威を振るう非常事態が続いている。","@en":"災害レベルで感染が猛威を振るう非常事態が続いている。"},{"@ja":"重症患者が急激に増加しており、現状の新規陽性者数が継続するだけでも、救える命が救えない事態となる。この危機感を現実のものとして皆で共有する必要がある。  ","@en":"重症患者が急激に増加しており、現状の新規陽性者数が継続するだけでも、救える命が救えない事態となる。この危機感を現実のものとして皆で共有する必要がある。  "}],"(1)新規陽性者数":4721.9,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":187.6,"(3)新規陽性者における接触歴等不明者（人数）":2897,"(3)新規陽性者における接触歴等不明者（増加比）":111,"(4)PCR・抗原検査（陽性率）":22.8,"(4)PCR・抗原検査（検査人数）":14046.1,"(5)救急医療の東京ルールの適用件数":122,"(6)入院患者数":3845,"(6)入院患者確保病床数":5967,"(7)重症患者数":273,"(7)重症患者確保病床数":392,"総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染が拡大している","@en":"The infection is spreading."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"体制が逼迫している","@en":"The system is under strain."}}}}')},482:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return l}));var o=e(397),r=function(t){var n={text:"人",translatable:!0},e={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),m=Object(o.a)(1);return{"(1)新規陽性者数":{value:m(t["(1)新規陽性者数"]),unit:n,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:m(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:m(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:m(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:m(t["(4)PCR・抗原検査（検査人数）"]),unit:n,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:m(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:m(t["(5)救急医療の東京ルールの適用件数"]),unit:e,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:n,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:n,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},505:function(t,n,e){var content=e(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("4a26bf7f",content,!0,{sourceMap:!1})},520:function(t,n,e){"use strict";e(480)},521:function(t,n,e){var o=e(32)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-5d74f5a5]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-5d74f5a5]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-5d74f5a5]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},569:function(t,n,e){"use strict";e.r(n);e(96);var o=e(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(e(520),e(14)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[e("p",[t._v(t._s(t.comment))])]),t._v(" "),e("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"5d74f5a5",null);n.default=component.exports},570:function(t,n,e){"use strict";e.r(n);var o=e(0).default.extend({computed:{images:function(){return this.monitoringCommentImage.data.images},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=e(14),l=e(63),c=e.n(l),m=e(931),d=e(949),f=e(556),v=e(647),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-carousel",{attrs:{cycle:"",width:"240",height:"180","hide-delimiter-background":""}},t._l(t.images,(function(image,i){return e("v-carousel-item",{key:i},[e("v-sheet",{attrs:{height:"100%",color:"#fff"}},[e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"display-3"},[e("a",{attrs:{target:"_blank",href:image.href}},[e("img",{attrs:{width:"240",height:"180",src:image.src,alt:image.alt}})])])])],1)],1)})),1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VCarousel:m.a,VCarouselItem:d.a,VRow:f.a,VSheet:v.a})},600:function(t,n,e){"use strict";e(505)},601:function(t,n,e){var o=e(32)(!1);o.push([t.i,".MonitoringComment{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 12px 10px;margin:0 0 10px}.MonitoringComment .MonitoringComment-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.MonitoringComment .MonitoringComment-heading .MonitoringComment-title{display:flex;align-items:center;padding:8px 6px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.MonitoringComment .MonitoringComment-comments{margin:0 10px;padding:2px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col{float:left;clear:both;padding:3px;min-width:300px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringComment-summary{font-size:1.2rem}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringCommentFrame-title{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringComment .MonitoringComment-description{padding:6px;text-align:center;font-size:1.4rem}.MonitoringComment .MonitoringComment-description>a{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.MonitoringComment .MonitoringComment-description>a:hover{text-decoration:underline}",""]),t.exports=o},635:function(t,n,e){"use strict";e.r(n);e(46),e(22);var o=e(45),r=e(0),l=e(86),c=e(569),m=e(570),d=e(481),f=e(482),v=r.default.extend({components:{AppLink:l.default,Frame:c.default,ImageSwipe:m.default},data:function(){return{monitoringComment:Object(f.a)(d.data),mdiChevronRight:o.f}},computed:{translatedMonitoringSummarizedComments:function(){var t=d.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]}}}),C=(e(600),e(14)),h=e(63),M=e.n(h),y=e(430),x=e(380),j=e(556),component=Object(C.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"MonitoringComment"},[e("div",{staticClass:"MonitoringComment-heading"},[e("h3",{staticClass:"MonitoringComment-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制の分析"))+"\n    ")])]),t._v(" "),e("div",{staticClass:"MonitoringComment-comments"},[e("v-row",{staticClass:"MonitoringComment-row"},[e("v-col",{staticClass:"MonitoringComment-col"},[e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"MonitoringComment-summary"},t._l(t.translatedMonitoringSummarizedComments,(function(n,i){return e("span",{key:i},[t._v("\n              "+t._s(n)+"\n            ")])})),0),t._v(" "),e("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),e("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),e("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1)],1),t._v(" "),e("v-col",{staticClass:"MonitoringComment-col"},[e("div",{staticClass:"MonitoringComment-description"},[e("image-swipe"),t._v(" "),e("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),e("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n            "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n          ")])],1)])],1)],1)])}),[],!1,null,null,null);n.default=component.exports;M()(component,{VCol:y.a,VIcon:x.a,VRow:j.a})}}]);