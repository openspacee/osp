(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0211236a"],{"02df":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.events,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"event_time"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"20","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}])}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}])}),n("el-table-column",{attrs:{prop:"count",label:"次数","min-width":"20","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1)],1)],1)},a=[],i=(n("4de4"),n("caad"),n("c975"),n("b0c0"),n("2532"),n("b85c")),s=n("61b2"),r=n("0905"),c=n("5c96"),l={name:"Event",components:{Clusterbar:s["a"]},data:function(){return{cellStyle:{border:0},titleName:["Events"],maxHeight:window.innerHeight-150,loading:!0,originEvents:[],search_ns:[],search_name:"",delFunc:void 0,delEvents:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{eventsWatch:function(e){if(e){var t=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.originEvents.push(Object(r["a"])(e.resource));else if("update"===e.event)for(var o in this.originEvents){var a=this.originEvents[o];if(a.uid===t){if(a.resource_version<n){var i=Object(r["a"])(e.resource);this.$set(this.originEvents,o,i)}break}}else"delete"===e.event&&(this.originEvents=this.originEvents.filter((function(e){var n=e.uid;return n!==t})))}}},computed:{events:function(){var e,t=[],n=Object(i["a"])(this.originEvents);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.search_ns.length>0&&this.search_ns.indexOf(o.namespace)<0||(this.search_name&&!o.name.includes(this.search_name)||t.push(o))}}catch(a){n.e(a)}finally{n.f()}return t},eventsWatch:function(){return this.$store.getters["ws/eventsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originEvents=[];var t=this.$store.state.cluster;t?Object(r["b"])(t).then((function(t){e.loading=!1,e.originEvents=t.data?t.data:[]})).catch((function(){e.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,n=Object(i["a"])(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.search_ns.push(o)}}catch(a){n.e(a)}finally{n.f()}},nameSearch:function(e){this.search_name=e}}},u=l,d=(n("3bb4"),n("473c"),n("2877")),f=Object(d["a"])(u,o,a,!1,null,"3da393dc",null);t["default"]=f.exports},"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n("b775");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s={};return t&&(s["uid"]=t),n&&(s["kind"]=n),i&&(s["namespace"]=i),a&&(s["name"]=a),Object(o["a"])({url:"event/".concat(e),method:"get",params:s})}function i(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"3bb4":function(e,t,n){"use strict";var o=n("f5b3"),a=n.n(o);a.a},"43df":function(e,t,n){},"473c":function(e,t,n){"use strict";var o=n("6735"),a=n.n(o);a.a},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return $}));var o,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],s=(n("b0c0"),n("aad4")),r=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(o&&clearTimeout(o),o=setTimeout((function(){e.nameFunc(e.nameInput),o=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(s["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(n("a6e1"),n("dda3"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"3a53f646",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},m=[],p=(n("99af"),n("abb2"),n("fcf3")),v=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new v["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",o="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(o+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},w=b,y=Object(u["a"])(w,h,m,!1,null,null,null),k=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},O=[],E=n("5f87"),x={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(E["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},F=x,S=(n("ca6d"),Object(u["a"])(F,_,O,!1,null,"19556679",null)),j=S.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},H=[],T=n("56b3"),q=n.n(T);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var D={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=q.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},I=D,M=(n("db62"),Object(u["a"])(I,C,H,!1,null,"5bb854da",null)),$=M.exports},"64d3":function(e,t,n){},6735:function(e,t,n){},a6e1:function(e,t,n){"use strict";var o=n("ab7f"),a=n.n(o);a.a},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("99af");var o=n("b775");function a(e){return Object(o["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(o["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},ab7f:function(e,t,n){},b92f:function(e,t,n){},ca6d:function(e,t,n){"use strict";var o=n("64d3"),a=n.n(o);a.a},db62:function(e,t,n){"use strict";var o=n("43df"),a=n.n(o);a.a},dda3:function(e,t,n){"use strict";var o=n("b92f"),a=n.n(o);a.a},f5b3:function(e,t,n){}}]);