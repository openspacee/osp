(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2552cf"],{"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n("b775");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return t&&(r["uid"]=t),n&&(r["kind"]=n),i&&(r["namespace"]=i),s&&(r["name"]=s),Object(a["a"])({url:"event/".concat(e),method:"get",params:r})}function i(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"22ce":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o}));n("99af");var a=n("b775");function s(e){return Object(a["a"])({url:"service/".concat(e),method:"get"})}function i(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a["a"])({url:"service/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:s}})}function r(e,t){return Object(a["a"])({url:"service/".concat(e,"/delete"),method:"post",data:t})}function o(e,t,n,s){return Object(a["a"])({url:"service/".concat(e,"/").concat(t,"/").concat(n),method:"post",data:{yaml:s}})}},3432:function(e,t,n){"use strict";var a=n("7888"),s=n.n(a);s.a},"363e":function(e,t,n){},"43df":function(e,t,n){},"589b":function(e,t,n){"use strict";var a=n("714a"),s=n.n(a);s.a},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return I}));var a,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],r=(n("b0c0"),n("aad4")),o=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){e.nameFunc(e.nameInput),a=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(r["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):o["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(n("589b"),n("dda3"),n("2877")),d=Object(u["a"])(l,s,i,!1,null,"3d7b3a75",null),f=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},m=[],p=(n("99af"),n("abb2"),n("fcf3")),h=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new h["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/api/v1/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else o["Message"].error("获取POD参数异常，请刷新重试");else o["Message"].error("获取命名空间参数异常，请刷新重试");else o["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,_=Object(u["a"])(y,v,m,!1,null,null,null),k=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},O=[],S=n("5f87"),j={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(S["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="ws://".concat(window.location.host,"/api/v1/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(t+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else o["Message"].error("获取POD参数异常，请刷新重试");else o["Message"].error("获取命名空间参数异常，请刷新重试");else o["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},E=j,x=(n("3432"),Object(u["a"])(E,w,O,!1,null,"2a777280",null)),C=x.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},M=[],$=n("56b3"),D=n.n($);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var V={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=D.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},N=V,T=(n("db62"),Object(u["a"])(N,F,M,!1,null,"5bb854da",null)),I=T.exports},"714a":function(e,t,n){},7888:function(e,t,n){},"848c":function(e,t,n){},9191:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("99af");var a=n("b775");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={};return t&&(s["namespace"]=t),n&&(s["name"]=n),Object(a["a"])({url:"endpoints/".concat(e),method:"get",params:s})}},"97d5":function(e,t,n){"use strict";var a=n("363e"),s=n.n(a);s.a},a15b:function(e,t,n){"use strict";var a=n("23e7"),s=n("44ad"),i=n("fc6a"),r=n("a640"),o=[].join,c=s!=Object,l=r("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(e){return o.call(i(this),void 0===e?",":e)}})},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));n("99af");var a=n("b775");function s(e){return Object(a["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(a["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("06c5");function s(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,r=e},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}}}},b92f:function(e,t,n){},c1e9:function(e,t,n){"use strict";var a=n("848c"),s=n.n(a);s.a},d37e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteServices,editFunc:e.getServiceYaml}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.service.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(e.service.created))])]),n("el-form-item",{attrs:{label:"命名空间"}},[n("span",[e._v(e._s(e.service.namespace))])]),n("el-form-item",{attrs:{label:"类型"}},[n("span",[e._v(e._s(e.service.type))])]),n("el-form-item",{attrs:{label:"Cluster IP"}},[n("span",[e._v(e._s(e.service.cluster_ip))])]),n("el-form-item",{attrs:{label:"端口"}},[e.service.ports&&e.service.ports.length>0?[n("span",[e._v(e._s(e.getPortsDisplay(e.service.ports)))])]:e._e()],2),n("el-form-item",{attrs:{label:"Endpoints"}},[e._l(e.endpoints,(function(t){return[n("span",{key:t.name},[e._v(e._s(e.endpointsAddresses(t.subsets)))])]}))],2),n("el-form-item",{attrs:{label:"会话亲和"}},[n("span",[e._v(e._s(e.service.session_affinity))])]),n("el-form-item",{attrs:{label:"选择器"}},[e.service.selector?e._l(e.service.selector,(function(t,a){return n("span",{key:a,staticClass:"back-class"},[e._v(" "+e._s(a+": "+t)+" "),n("br")])})):e._e()],2),n("el-form-item",{attrs:{label:"标签"}},[e.service.labels?e._l(e.service.labels,(function(t,a){return[n("span",{key:a,staticClass:"back-class"},[e._v(e._s(a)+": "+e._s(t)+" "),n("br")])]})):n("span",[e._v("——")])],2)],1),n("el-collapse",{staticClass:"podCollapse",attrs:{value:["events"]}},[n("el-collapse-item",{attrs:{title:"Events",name:"events"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[e._v("Events")])]),n("div",{staticClass:"msgClass"},[e.serviceEvents&&e.serviceEvents.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.serviceEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):n("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateService()}}},[e._v("确 定")])],1)],1)],1)],1)},s=[],i=(n("4de4"),n("a15b"),n("b0c0"),n("b85c")),r=n("61b2"),o=n("22ce"),c=n("9191"),l=n("0905"),u=n("5c96"),d={name:"ServiceDetail",components:{Clusterbar:r["a"],Yaml:r["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originService:void 0,endpoints:[],selectContainer:"",selectPodName:"",serviceEvents:[],eventLoading:!0}},created:function(){this.fetchData()},watch:{serviceWatch:function(e){if(e&&this.originService){var t=e.resource.metadata.uid;if(t!==this.service.uid)return;var n=e.resource.metadata.resourceVersion;this.service.resource_version<n&&(this.originService=e.resource)}},eventWatch:function(e){if(e&&this.originService){var t=e.resource;if(t.involvedObject.namespace!==this.service.namespace)return;if(t.involvedObject.uid!==this.service.uid)return;var n=e.resource.metadata.uid;if("add"===e.event)this.serviceEvents.push(Object(l["a"])(t));else if("update"==e.event){var a=e.resource.metadata.resourceVersion;for(var s in this.serviceEvents){var i=this.serviceEvents[s];if(i.uid===n){if(i.resource_version<a){var r=Object(l["a"])(e.resource);this.$set(this.serviceEvents,s,r)}break}}}else"delete"===e.event&&(this.serviceEvents=this.serviceEvents.filter((function(e){var t=e.uid;return t!==n})))}}},computed:{titleName:function(){return["Services",this.serviceName]},serviceName:function(){return this.$route.params?this.$route.params.serviceName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},service:function(){var e=this.buildService(this.originService);return e},cluster:function(){return this.$store.state.cluster},serviceWatch:function(){return this.$store.getters["ws/servicesWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]}},methods:{fetchData:function(){var e=this;this.originService=null,this.serviceEvents=[],this.loading=!0,this.eventLoading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.serviceName?void Object(o["b"])(t,this.namespace,this.serviceName).then((function(n){e.originService=n.data,Object(c["a"])(t,e.namespace,e.serviceName).then((function(t){e.loading=!1,e.endpoints=t.data})).catch((function(){e.loading=!1})),Object(l["b"])(t,e.originService.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.serviceEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1,e.eventLoading=!1})):(u["Message"].error("获取Service名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(u["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(u["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},buildService:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,type:e.spec.type,cluster_ip:e.spec.clusterIP,ports:e.spec.ports,external_ip:e.spec.externalIPs,session_affinity:e.spec.sessionAffinity,resource_version:e.metadata.resourceVersion,selector:e.spec.selector,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteServices:function(){var e=this.$store.state.cluster;if(e){this.service||u["Message"].error("获取Service参数异常，请刷新重试");var t=[{namespace:this.service.namespace,name:this.service.name}],n={resources:t};Object(o["a"])(e,n).then((function(){u["Message"].success("删除成功")})).catch((function(){}))}else u["Message"].error("获取集群参数异常，请刷新重试")},getServiceYaml:function(){var e=this;if(this.service){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(o["b"])(t,this.service.namespace,this.service.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):u["Message"].error("获取集群参数异常，请刷新重试")}else u["Message"].error("获取Service参数异常，请刷新重试")},updateService:function(){if(this.service){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(o["d"])(e,this.service.namespace,this.service.name,this.yamlValue).then((function(){u["Message"].success("更新成功")})).catch((function(){}))):u["Message"].error("获取集群参数异常，请刷新重试")}else u["Message"].error("获取Service参数异常，请刷新重试")},getPortsDisplay:function(e){if(!e)return"";var t,n=[],a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value,r=s.port;s.nodePort&&(r+=":"+s.nodePort),r+="/"+s.protocol,n.push(r)}}catch(o){a.e(o)}finally{a.f()}return n.join(",")},endpointsAddresses:function(e){if(!e)return"";var t,n=[],a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var s,r=t.value,o=Object(i["a"])(r.addresses);try{for(o.s();!(s=o.n()).done;){var c=s.value;if(r.ports){var l,u=Object(i["a"])(r.ports);try{for(u.s();!(l=u.n()).done;){var d=l.value;n.push(c.ip+":"+d.port)}}catch(f){u.e(f)}finally{u.f()}}else n.push(c.ip)}}catch(f){o.e(f)}finally{o.f()}}}catch(f){a.e(f)}finally{a.f()}return n.join(",")}}},f=d,v=(n("97d5"),n("c1e9"),n("2877")),m=Object(v["a"])(f,a,s,!1,null,"42efee7a",null);t["default"]=m.exports},db62:function(e,t,n){"use strict";var a=n("43df"),s=n.n(a);s.a},dda3:function(e,t,n){"use strict";var a=n("b92f"),s=n.n(a);s.a}}]);