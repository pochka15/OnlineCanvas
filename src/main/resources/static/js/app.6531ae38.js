(function(e){function t(t){for(var a,o,c=t[0],s=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{staticClass:"pt-4",attrs:{permanent:"","mini-variant":"",app:"",color:"grey lighten-3"}},[n("v-list",[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItemIndex,callback:function(t){e.selectedItemIndex=t},expression:"selectedItemIndex"}},e._l(e.items,(function(t,a){return n("v-list-item",{key:a},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content")],1)})),1)],1)],1),n("v-main",[n("Canvas",{ref:"canvas",staticStyle:{width:"100%",height:"100%"},attrs:{"dragged-item":e.selectedItem},on:{"canvas-action-made":e.passActionToClient}}),n("stompClient",{ref:"stompClient",on:{"received-action":e.passActionToCanvas},scopedSlots:e._u([{key:"default",fn:function(e){return n("div",{staticClass:"container"})}}])})],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],ref:"myCanvas"})},c=[],s=(n("7db0"),n("4160"),n("4ec9"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("7a94")),d=s["fabric"].util.createClass(s["fabric"].IText,{type:"customText",initialize:function(e){e||(e={}),this.callSuper("initialize","Empty",e),this.set("fontFamily","Helvetica")}});s["fabric"].CustomText=d,s["fabric"].CustomText.fromObject=function(e,t){return s["fabric"].Object._fromObject("CustomText",e,t)};var l=s["fabric"].util.createClass(s["fabric"].Rect,{type:"todo",initialize:function(e){e||(e={}),this.callSuper("initialize",e),this.set({fill:"aliceblue",width:300,height:300,rx:10,ry:10,label:e.label||"Test label"})},toObject:function(){return s["fabric"].util.object.extend(this.callSuper("toObject"),{label:this.get("label")})},_render:function(e){this.callSuper("_render",e),e.font="20px Helvetica",e.fillStyle="#333",e.fillText(this.label,-this.width/2,-this.height/2+20)}});s["fabric"].Todo=l,s["fabric"].Todo.fromObject=function(e,t){return s["fabric"].Object._fromObject("Todo",e,t)};n("25f0");function u(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function f(e){return e._id=u()+u()+u()+u()+u()+u(),e}n("b0c0");var p=n("d4ec"),m=n("ade3"),v=function e(t,n){Object(p["a"])(this,e),Object(m["a"])(this,"name",void 0),Object(m["a"])(this,"canvasObject",void 0),this.name=t,this.canvasObject=n};function h(e,t){s["fabric"].util.enlivenObjects([t],(function(t){var n=e.renderOnAddRemove;e.renderOnAddRemove=!1,t.forEach((function(t){return e.add(t)})),e.renderOnAddRemove=n,e.renderAll()}))}var b={name:"Canvas",data:function(){return{canvas:void 0,isEraseMode:!1,nameToItemClass:new Map([["Text",d],["Todo",l]])}},props:{draggedItem:String},watch:{draggedItem:function(e){this.canvas.isDrawingMode="Draw"===e,this.isEraseMode="Erase"===e}},methods:{onResize:function(){this.$refs.myCanvas.width=this.$refs.myCanvas.parentElement.clientWidth,this.$refs.myCanvas.height=this.$refs.myCanvas.parentElement.clientHeight},updateCanvas:function(e,t){var n=JSON.parse(t),a=this.canvas.getObjects().find((function(e){return e._id===n._id}));"add"!==e||a?"remove"===e&&a&&this.canvas.remove(a):(console.log("Doesn't exist"),h(this.canvas,n))}},mounted:function(){var e=this;this.canvas=new s["fabric"].Canvas(this.$refs.myCanvas).on("mouse:down",(function(t){var n=e.nameToItemClass.get(e.draggedItem);if(n){var a=new n({left:t.pointer.x,top:t.pointer.y});a._id||f(a),e.canvas.add(a),e.$emit("canvas-action-made",new v("add",a))}else e.isEraseMode&&t.target&&(e.canvas.remove(t.target),e.$emit("canvas-action-made",new v("remove",t.target)))})).on("object:added",(function(t){console.log(t.target),e.canvas.isDrawingMode&&t.target&&"path"===t.target.type&&e.$emit("canvas-action-made",new v("add",t.target._id?t.target:f(t.target)))}))}},g=b,y=n("2877"),C=n("269a"),O=n.n(C),x=n("dc22"),j=Object(y["a"])(g,o,c,!1,null,"bbdc39c2",null),w=j.exports;O()(j,{Resize:x["a"]});var I=n("8030"),_=n("cc7d"),T=n.n(_);function S(e){return I["a"].over((function(){return new T.a(e)}))}var $={props:{on:{type:Boolean,default:!1}},render:function(){return this.$scopedSlots.default({on:this.currentState})},data:function(){return{currentState:this.on,stompClient:S("http://tough-canvas-days.herokuapp.com/gs-guide-websocket")}},mounted:function(){var e=this;this.stompClient.connect({},(function(){e.stompClient.subscribe("/topic/add",(function(t){e.$emit("received-action","add",t.body)})),e.stompClient.subscribe("/topic/remove",(function(t){e.$emit("received-action","remove",t.body)}))}))},methods:{handleCanvasAction:function(e){var t=JSON.stringify(e.canvasObject);console.log("Sending "+e.name),this.stompClient.send("/app/"+e.name,{},t)}}},M={name:"App",components:{Canvas:w,stompClient:$},methods:{passActionToCanvas:function(e,t){this.$refs.canvas.updateCanvas(e,t)},passActionToClient:function(e){this.$refs.stompClient.handleCanvasAction(e)}},data:function(){return{selectedItemIndex:0,items:[{text:"Text",icon:"mdi-text"},{text:"Todo",icon:"mdi-check"},{text:"Draw",icon:"mdi-draw"},{text:"Erase",icon:"mdi-eraser"}]}},computed:{selectedItem:function(){return void 0!==this.selectedItemIndex?this.items[this.selectedItemIndex].text:void 0}}},A=M,E=n("6544"),z=n.n(E),k=n("7496"),V=n("132d"),P=n("8860"),R=n("da13"),D=n("5d23"),L=n("1baa"),J=n("34c3"),N=n("f6c4"),H=n("f774"),B=Object(y["a"])(A,i,r,!1,null,null,null),F=B.exports;z()(B,{VApp:k["a"],VIcon:V["a"],VList:P["a"],VListItem:R["a"],VListItemContent:D["a"],VListItemGroup:L["a"],VListItemIcon:J["a"],VMain:N["a"],VNavigationDrawer:H["a"]});var G=n("f309");a["a"].use(G["a"]);var W=new G["a"]({}),q=function(){s["fabric"].Object.prototype.toObject=function(e){return function(t){return s["fabric"].util.object.extend(e.call(this,t),{_id:this._id||null,remote:this.remote||!1})}}(s["fabric"].Object.prototype.toObject)};a["a"].config.productionTip=!1,new a["a"]({vuetify:W,render:function(e){return e(F)}}).$mount("#app"),q()}});
//# sourceMappingURL=app.6531ae38.js.map