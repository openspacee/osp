(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d135de00"],{"05b5":function(t,e,n){"use strict";var a=n("62a3"),s=n.n(a);s.a},"0905":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));var a=n("b775");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return e&&(i["uid"]=e),n&&(i["kind"]=n),o&&(i["namespace"]=o),s&&(i["name"]=s),Object(a["a"])({url:"event/".concat(t),method:"get",params:i})}function o(t){if(t){var e=t.lastTimestamp;return e||(e=t.firstTimestamp),e||(e=t.metadata.creationTimestamp),{uid:t.metadata.uid,namespace:t.metadata.namespace,count:t.spec?t.spec.count:1,reason:t.reason,message:t.message,type:t.type,object:t.involvedObject,source:t.source,event_time:e,resource_version:t.metadata.resourceVersion}}}},1358:function(t,e,n){"use strict";var a=n("bc88"),s=n.n(a);s.a},3432:function(t,e,n){"use strict";var a=n("7888"),s=n.n(a);s.a},"43df":function(t,e,n){},"589b":function(t,e,n){"use strict";var a=n("714a"),s=n.n(a);s.a},"61b2":function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return w})),n.d(e,"b",(function(){return j})),n.d(e,"d",(function(){return V}));var a,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.titleName,(function(e){return n("el-breadcrumb-item",{key:e,staticClass:"no-redirect"},[t._v(" "+t._s(e)+" ")])})),1),"undefined"!==typeof t.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(e){return t.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):t._e(),"undefined"!==typeof t.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(e){return t.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):t._e(),n("div",{staticClass:"right"},["undefined"!==typeof t.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:t.nsChange},model:{value:t.nsInput,callback:function(e){t.nsInput=e},expression:"nsInput"}},t._l(t.namespaces,(function(t){return n("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1):t._e(),"undefined"!==typeof t.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:t.nameDebounce},model:{value:t.nameInput,callback:function(e){t.nameInput=e},expression:"nameInput"}}):t._e()],1)],1)},o=[],i=(n("b0c0"),n("aad4")),r=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(t){this.nsFunc&&this.nsFunc(t)},nameDebounce:function(){var t=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){t.nameFunc(t.nameInput),a=void 0}),500))},fetchNamespace:function(){var t=this;this.namespaces=[];var e=this.$store.state.cluster;e?Object(i["b"])(e).then((function(e){t.namespaces=e.data,t.namespaces.sort((function(t,e){return t.name>e.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(n("589b"),n("dda3"),n("2877")),d=Object(u["a"])(l,s,o,!1,null,"3d7b3a75",null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],f=(n("99af"),n("abb2"),n("fcf3")),g=n("47d0"),v=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var t=Math.floor((window.innerHeight-100)/20);console.log(t);var e=new f["Terminal"]({fontSize:14,cursorBlink:!0,rows:t}),n=new g["FitAddon"];e.loadAddon(n),e.open(document.getElementById("xterm")),n.fit(),e.focus(),this.term=e,this.initSocket()},initSocket:function(){var t=this.term.cols,e=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/api/v1/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(t,"&rows=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var t=this;this.socket.onopen=function(){var e=new v["AttachAddon"](t.socket);t.term.loadAddon(e)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,k=Object(u["a"])(y,p,h,!1,null,null,null),w=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"log-class",style:{height:t.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.logs))])])},O=[],x=n("5f87"),H={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var t=document.getElementById("logDiv"),e=this;t.addEventListener("scroll",(function(){e.scrollToBottom=!1,t.scrollTop+t.clientHeight===t.scrollHeight&&(e.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var t=Object(x["a"])();if(console.log(t),this.cluster)if(this.namespace)if(this.pod){var e="ws://".concat(window.location.host,"/api/v1/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(e+"?container=".concat(this.container,"&token=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var t=this;this.socket.onmessage=function(e){t.logs+=e.data;var n=t;t.$nextTick((function(){if(n.scrollToBottom){var t=document.getElementById("logDiv");t.scrollTop=t.scrollHeight}}))}}}},C=H,E=(n("3432"),Object(u["a"])(C,_,O,!1,null,"2a777280",null)),j=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+t.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},S=[],F=n("56b3"),N=n.n(F);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var D={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(t){var e=this.yamlEditor.getValue();t!==e&&this.yamlEditor.setValue(this.value)}},mounted:function(){var t=this;this.yamlEditor=N.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(e){t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},T=D,$=(n("db62"),Object(u["a"])(T,M,S,!1,null,"5bb854da",null)),V=$.exports},"62a3":function(t,e,n){},"714a":function(t,e,n){},7888:function(t,e,n){},aad4:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));n("99af");var a=n("b775");function s(t){return Object(a["a"])({url:"namespace/".concat(t),method:"get"})}function o(t,e,n){return Object(a["a"])({url:"namespace/".concat(t,"/").concat(e),method:"get",params:{output:n}})}},ac35:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r}));n("99af");var a=n("b775");function s(t){return Object(a["a"])({url:"hpa/".concat(t),method:"get"})}function o(t,e,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a["a"])({url:"hpa/".concat(t,"/").concat(e,"/").concat(n),method:"get",params:{output:s}})}function i(t,e,n,s){return Object(a["a"])({url:"hpa/".concat(t,"/").concat(e,"/").concat(n),method:"post",data:{yaml:s}})}function r(t,e){return Object(a["a"])({url:"hpa/".concat(t,"/delete"),method:"post",data:e})}},ac70:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("clusterbar",{attrs:{titleName:t.titleName,editFunc:t.getHpaYaml,delFunc:t.deleteHpa}}),n("div",{staticClass:"dashboard-container"},[t.hpa.metadata?n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"180px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[t._v(t._s(t.hpa.metadata.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[t._v(t._s(t.hpa.metadata.creationTimestamp))])]),n("el-form-item",{attrs:{label:"Namespace"}},[n("span",[t._v(t._s(t.hpa.metadata.namespace))])]),n("el-form-item",{attrs:{label:"Min Pods"}},[n("span",[t._v(t._s(t.hpa.spec.minReplicas))])]),n("el-form-item",{attrs:{label:"Max Pods"}},[n("span",[t._v(t._s(t.hpa.spec.maxReplicas))])]),n("el-form-item",{attrs:{label:"Replicas"}},[n("span",[t._v(t._s(t.hpa.status.currentReplicas))])]),n("el-form-item",{attrs:{label:"Reference"}},[n("span",[t._v(t._s(t.hpa.spec.scaleTargetRef.kind)+"/"+t._s(t.hpa.spec.scaleTargetRef.name))])])],1):t._e(),n("el-collapse",{staticClass:"podCollapse",attrs:{value:["events"]}},[n("el-collapse-item",{attrs:{title:"Events",name:"events"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[t._v("Events")])]),n("div",{staticClass:"msgClass"},[t.hpaEvents&&t.hpaEvents.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.hpaEvents,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(" "+t._s(e.row.object.kind)+"/"+t._s(e.row.object.name)+" ")])]}}],null,!1,1803908363)}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(" "+t._s(e.row.reason?e.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(" "+t._s(e.row.message?e.row.message:"——")+" ")])]}}],null,!1,2705410019)}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):n("div",{staticStyle:{color:"#909399","text-align":"center"}},[t._v("暂无数据")])],1)],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:t.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(e){t.yamlDialog=e}}},[t.yamlDialog?n("yaml",{attrs:{loading:t.yamlLoading},model:{value:t.yamlValue,callback:function(e){t.yamlValue=e},expression:"yamlValue"}}):t._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){t.yamlDialog=!1}}},[t._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){return t.updateHpa()}}},[t._v("确 定")])],1)],1)],1)],1)},s=[],o=n("61b2"),i=n("ac35"),r=n("0905"),c=n("5c96"),l={name:"HpaDetail",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originHpa:{},eventLoading:!0,activeNames:["1"],hpaEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["HpaDetail",this.hpaName]},hpaName:function(){return this.$route.params?this.$route.params.hpaName:""},cluster:function(){return this.$store.state.cluster},hpa:function(){return console.log(this.originHpa),this.originHpa},namespace:function(){return this.$route.params?this.$route.params.namespace:""}},methods:{handleChange:function(t){console.log(t)},fetchData:function(){var t=this;this.originHpa={},this.loading=!0;var e=this.$store.state.cluster;return e?this.hpaName?(this.namespace||c["Message"].error("获取获取Hpa命名空间参数异常，请刷新重试"),void Object(i["b"])(e,this.namespace,this.hpaName).then((function(n){t.loading=!1,t.originHpa=n.data,console.log("*******",t.originHpa),Object(r["b"])(e,t.originHpa.metadata.uid).then((function(e){t.eventLoading=!1,e.data&&(t.hpaEvents=e.data.length>0?e.data:[])})).catch((function(){t.eventLoading=!1}))})).catch((function(){t.loading=!1}))):(c["Message"].error("获取Hpa名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getHpaYaml:function(){var t=this;if(this.hpaName){var e=this.$store.state.cluster;e?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["b"])(e,this.namespace,this.hpaName,"yaml").then((function(e){t.yamlLoading=!1,t.yamlValue=e.data})).catch((function(){t.yamlLoading=!1}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Hpa参数异常，请刷新重试")},updateHpa:function(){if(this.hpa){var t=this.$store.state.cluster;t?(console.log(this.yamlValue),console.log(this.hpa),Object(i["d"])(t,this.namespace,this.hpaName,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Hpa参数异常，请刷新重试")},deleteHpa:function(){var t=this.$store.state.cluster;if(t){this.hpa||c["Message"].error("获取Hpa参数异常，请刷新重试");var e=[{namespace:this.namespace,name:this.hpaName}],n={resources:e};Object(i["a"])(t,n).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")}}},u=l,d=(n("05b5"),n("1358"),n("2877")),m=Object(d["a"])(u,a,s,!1,null,"01687420",null);e["default"]=m.exports},b92f:function(t,e,n){},bc88:function(t,e,n){},db62:function(t,e,n){"use strict";var a=n("43df"),s=n.n(a);s.a},dda3:function(t,e,n){"use strict";var a=n("b92f"),s=n.n(a);s.a}}]);