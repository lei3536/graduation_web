webpackJsonp([10],{680:function(e,t,n){function i(e){n(734)}var A=n(9)(n(707),n(753),i,"data-v-106fcaa0",null);e.exports=A.exports},697:function(e,t,n){"use strict";function i(){var e=o()({},s.b,{platform:"yqq",g_tk:5381,needNewCode:1});return n.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",e,s.c)}function A(e){var t=o()({},s.b,{topid:e,tpl:3,type:"top",page:"detail",platform:"yqq",g_tk:5381,needNewCode:0});return n.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",t,s.c)}t.b=i,t.a=A;var a=n(103),o=n.n(a),r=n(242),s=n(77)},707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),A=n.n(i),a=n(697),o=n(77),r=n(67),s=n.n(r),l=n(243),c=n.n(l),B=n(78),f=n(44);t.default={mixins:[B.c],data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:A()({handlePlayList:function(e){if(!(e.length?"60px":"")||this.tag){var t=document.getElementById("nodeT");return void this.$refs.rank.removeChild(t)}this.tag="1";var n=document.createElement("div");n.id="nodeT",n.style.cssText="height:50px;width:100%;flex:1 0 auto",this.$refs.rank.appendChild(n),this.$refs.scroll.refresh()},_getTopList:function(){var e=this;n.i(a.b)().then(function(t){t.code===o.a&&(e.topList=t.data.topList)})},selectItem:function(e){this.$router.push({path:"/rank/"+e.id}),this.setTopList(e)}},n.i(f.b)({setTopList:"SET_TOP_LIST"})),components:{Scroll:s.a,Loading:c.a}}},720:function(e,t,n){t=e.exports=n(673)(!0),t.push([e.i,".rank[data-v-106fcaa0]{width:100%;height:calc(100vh - .44rem);display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#fff}.rank .toplist[data-v-106fcaa0]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex:1 1 auto;height:100%;overflow:hidden}.rank .toplist .item[data-v-106fcaa0]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:.15rem;height:.5rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:.01rem solid #e0e0e0}.rank .toplist .item .icon[data-v-106fcaa0]{-webkit-box-flex:0;-ms-flex:0 0 0.55rem;flex:0 0 0.55rem;width:.55rem;height:.55rem}.rank .toplist .item .songlist[data-v-106fcaa0]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 .15rem;height:.5rem;overflow:hidden;background:#fff;color:rgba(0,0,0,.8);font-size:.12rem}.rank .toplist .item .songlist .song[data-v-106fcaa0]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:.16rem;line-height:.5rem}.rank .toplist .item .enter[data-v-106fcaa0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.rank .toplist .item .enter .icon-chevron-right[data-v-106fcaa0]{font-size:.28rem;color:gray;font-weight:100}.rank .toplist .loading-container[data-v-106fcaa0]{position:absolute;top:50%;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["G:/graduation_project/vue-music/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,WAAY,AACZ,4BAA8B,AAC9B,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,eAAiB,CAClB,AACD,gCACE,mBAAoB,AAChB,kBAAmB,AACf,cAAe,AACvB,sBAAuB,AACvB,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,eAAiB,AACjB,aAAe,AACf,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,kCAAqC,CACtC,AACD,4CACE,mBAAoB,AAChB,qBAAsB,AAClB,iBAAkB,AAC1B,aAAe,AACf,aAAgB,CACjB,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,iBAAmB,AACnB,aAAe,AACf,gBAAiB,AACjB,gBAAiB,AACjB,qBAAuB,AACvB,gBAAmB,CACpB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,iBAAmB,AACnB,iBAAoB,CACrB,AACD,6CACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC,AACD,iEACE,iBAAmB,AACnB,WAAe,AACf,eAAiB,CAClB,AACD,mDACE,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-106fcaa0] {\n  width: 100%;\n  height: calc(100vh - 0.44rem);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #fff;\n}\n.rank .toplist[data-v-106fcaa0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-flex: 1 1 auto;\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-106fcaa0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.15rem;\n  height: 0.5rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 0.01rem solid #e0e0e0;\n}\n.rank .toplist .item .icon[data-v-106fcaa0] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 0.55rem;\n          flex: 0 0 0.55rem;\n  width: 0.55rem;\n  height: 0.55rem;\n}\n.rank .toplist .item .songlist[data-v-106fcaa0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 0.15rem;\n  height: 0.5rem;\n  overflow: hidden;\n  background: #fff;\n  color: rgba(0,0,0,0.8);\n  font-size: 0.12rem;\n}\n.rank .toplist .item .songlist .song[data-v-106fcaa0] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 0.16rem;\n  line-height: 0.5rem;\n}\n.rank .toplist .item .enter[data-v-106fcaa0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.rank .toplist .item .enter .icon-chevron-right[data-v-106fcaa0] {\n  font-size: 0.28rem;\n  color: #808080;\n  font-weight: 100;\n}\n.rank .toplist .loading-container[data-v-106fcaa0] {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},734:function(e,t,n){var i=n(720);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(674)("a7908200",i,!0)},753:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"topList",staticClass:"toplist",attrs:{data:e.topList}},[n("ul",e._l(e.topList,function(t,i){return n("li",{key:i,staticClass:"item",on:{click:function(n){e.selectItem(t)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl,expression:"item.picUrl"}],attrs:{width:"55",height:"55"}}),e._v(" "),n("div",{staticClass:"songlist"},[n("h1",{staticClass:"song"},[e._v(e._s(t.topTitle))])]),e._v(" "),n("span",{staticClass:"enter"},[n("i",{staticClass:"icon-chevron-right"})])])})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.6f60da93d6e02fb6e569.js.map