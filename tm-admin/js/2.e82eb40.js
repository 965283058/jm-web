webpackJsonp([2],{1:function(e,t){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e){for(;e.length>1;){var t=e.pop(),o=t.obj[t.prop];if(n(o)){for(var r=[],i=0;i<o.length;++i)"undefined"!=typeof o[i]&&r.push(o[i]);t.obj[t.prop]=r}}},a=function(e,t){for(var o=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!=typeof e[n]&&(o[n]=e[n]);return o},l=function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(n(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var l=t;return n(t)&&!n(r)&&(l=a(t,i)),n(t)&&n(r)?(r.forEach(function(n,r){if(o.call(t,r)){var a=t[r];a&&"object"==typeof a&&n&&"object"==typeof n?t[r]=e(a,n,i):t.push(n)}else t[r]=n}),t):Object.keys(r).reduce(function(t,n){var a=r[n];return o.call(t,n)?t[n]=e(t[n],a,i):t[n]=a,t},l)},s=function(e,t){return Object.keys(t).reduce(function(e,o){return e[o]=t[o],e},e)},p=function(e,t,o){var n=e.replace(/\+/g," ");if("iso-8859-1"===o)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},c=function(e,t,o){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===o)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var i="",a=0;a<n.length;++a){var l=n.charCodeAt(a);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?i+=n.charAt(a):l<128?i+=r[l]:l<2048?i+=r[192|l>>6]+r[128|63&l]:l<55296||l>=57344?i+=r[224|l>>12]+r[128|l>>6&63]+r[128|63&l]:(a+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(a)),i+=r[240|l>>18]+r[128|l>>12&63]+r[128|l>>6&63]+r[128|63&l])}return i},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],o=[],n=0;n<t.length;++n)for(var r=t[n],a=r.obj[r.prop],l=Object.keys(a),s=0;s<l.length;++s){var p=l[s],c=a[p];"object"==typeof c&&null!==c&&o.indexOf(c)===-1&&(t.push({obj:a,prop:p}),o.push(c))}return i(t),e},u=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},f=function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},m=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:a,assign:s,combine:m,compact:d,decode:p,encode:c,isBuffer:f,isRegExp:u,merge:l}},2:function(e,t,o){"use strict";var n=String.prototype.replace,r=/%20/g,i=o(1),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,r,"+")},RFC3986:function(e){return String(e)}}},a)},3:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.get=t.post=void 0;var r=o(12),i=n(r),a=o(18),l=n(a),s=o(5),p=n(s),c=o(17),d=n(c),u=o(6),f=o(20),m=function(e){return 0==e.code?l.default.resolve(e.data):e.code!=-100?l.default.reject(e):void setTimeout(function(){(0,f.MessageBox)({title:"错误",type:"error",message:"您的登录已超时，请重新登录！",duration:0,callback:function(){d.default.replace("/login")}})},200)},g=function(e){return e&&e instanceof FormData?e:(0,u.stringify)(e)};t.post=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.default.http.post(e,g(t),o).then(m)},t.get=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.default.http.get(e,(0,i.default)({},{params:t},o)).then(m)}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WEBMENU_LIST="/manage/webMenu/list",t.WEBMENU_EDIT="/manage/webMenu/edit",t.HOMEBANNER_LIST="/manage/homeBanner/list",t.HOMEBANNER_EDIT="/manage/homeBanner/edit",t.HOMEBANNER_DEL="/manage/homeBanner/del",t.PEOPLE_LIST="/manage/people/list",t.PEOPLE_EDIT="/manage/people/edit",t.PEOPLE_DEL="/manage/people/del",t.JOIN_LIST="/manage/join/list",t.JOIN_EDIT="/manage/join/edit",t.JOIN_DEL="/manage/join/del",t.WEB_SETTING_INFO="/manage/webSetting/getInfo",t.WEB_SETTING_EDIT="/manage/webSetting/edit",t.TEAMMINUS_INFO="/manage/teamminus/getInfo",t.TEAMMINUS_EDIT="/manage/teamminus/edit",t.ADMIN_LIST="/manage/admin/list",t.ADMIN_EDIT="/manage/admin/edit",t.ADMIN_RESETPWD="/manage/admin/resetPwd",t.ADMIN_DEL="/manage/admin/del",t.CHANGE_PWD="/manage/admin/changePwd",t.LOGIN="/manage/login",t.LOGOUT="/manage/admin/logout",t.MENU_TREE="/manage/menu/treeMenu",t.MENU_EDIT="/manage/menu/edit",t.VIDEO_LIST="/manage/video/list",t.VIDEO_EDIT="/manage/video/edit",t.VIDEO_DEL="/manage/video/del",t.PROJECT_LIST="/manage/project/list",t.PROJECT_EDIT="/manage/project/edit",t.PROJECT_DEL="/manage/project/del"},6:function(e,t,o){"use strict";var n=o(8),r=o(7),i=o(2);e.exports={formats:i,parse:r,stringify:n}},7:function(e,t,o){"use strict";var n=o(1),r=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},l="utf8=%26%2310003%3B",s="utf8=%E2%9C%93",p=function(e,t){var o,p={},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,u=c.split(t.delimiter,d),f=-1,m=t.charset;if(t.charsetSentinel)for(o=0;o<u.length;++o)0===u[o].indexOf("utf8=")&&(u[o]===s?m="utf-8":u[o]===l&&(m="iso-8859-1"),f=o,o=u.length);for(o=0;o<u.length;++o)if(o!==f){var g,h,v=u[o],b=v.indexOf("]="),y=b===-1?v.indexOf("="):b+1;y===-1?(g=t.decoder(v,i.decoder,m),h=t.strictNullHandling?null:""):(g=t.decoder(v.slice(0,y),i.decoder,m),h=t.decoder(v.slice(y+1),i.decoder,m)),h&&t.interpretNumericEntities&&"iso-8859-1"===m&&(h=a(h)),h&&t.comma&&h.indexOf(",")>-1&&(h=h.split(",")),r.call(p,g)?p[g]=n.combine(p[g],h):p[g]=h}return p},c=function(e,t,o){for(var n=t,r=e.length-1;r>=0;--r){var i,a=e[r];if("[]"===a&&o.parseArrays)i=[].concat(n);else{i=o.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,s=parseInt(l,10);o.parseArrays||""!==l?!isNaN(s)&&a!==l&&String(s)===l&&s>=0&&o.parseArrays&&s<=o.arrayLimit?(i=[],i[s]=n):i[l]=n:i={0:n}}n=i}return n},d=function(e,t,o){if(e){var n=o.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.depth>0&&i.exec(n),s=l?n.slice(0,l.index):n,p=[];if(s){if(!o.plainObjects&&r.call(Object.prototype,s)&&!o.allowPrototypes)return;p.push(s)}for(var d=0;o.depth>0&&null!==(l=a.exec(n))&&d<o.depth;){if(d+=1,!o.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!o.allowPrototypes)return;p.push(l[1])}return l&&p.push("["+n.slice(l.index)+"]"),c(p,t,o)}},u=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!=typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"==typeof e.charset?i.charset:e.charset;return{allowDots:"undefined"==typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||e.depth===!1?+e.depth:i.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}};e.exports=function(e,t){var o=u(t);if(""===e||null===e||"undefined"==typeof e)return o.plainObjects?Object.create(null):{};for(var r="string"==typeof e?p(e,o):e,i=o.plainObjects?Object.create(null):{},a=Object.keys(r),l=0;l<a.length;++l){var s=a[l],c=d(s,r[s],o);i=n.merge(i,c,o)}return n.compact(i)}},8:function(e,t,o){"use strict";var n=o(1),r=o(2),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,s=Array.prototype.push,p=function(e,t){s.apply(e,l(t)?t:[t])},c=Date.prototype.toISOString,d=r.default,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:d,formatter:r.formatters[d],indices:!1,serializeDate:function(e){return c.call(e)},skipNulls:!1,strictNullHandling:!1},f=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"symbol"==typeof e||"bigint"==typeof e},m=function e(t,o,r,i,a,s,c,d,m,g,h,v,b){var y=t;if("function"==typeof c?y=c(o,y):y instanceof Date?y=g(y):"comma"===r&&l(y)&&(y=y.join(",")),null===y){if(i)return s&&!v?s(o,u.encoder,b):o;y=""}if(f(y)||n.isBuffer(y)){if(s){var _=v?o:s(o,u.encoder,b);return[h(_)+"="+h(s(y,u.encoder,b))]}return[h(o)+"="+h(String(y))]}var w=[];if("undefined"==typeof y)return w;var x;if(l(c))x=c;else{var E=Object.keys(y);x=d?E.sort(d):E}for(var O=0;O<x.length;++O){var N=x[O];a&&null===y[N]||(l(y)?p(w,e(y[N],"function"==typeof r?r(o,N):o,r,i,a,s,c,d,m,g,h,v,b)):p(w,e(y[N],o+(m?"."+N:"["+N+"]"),r,i,a,s,c,d,m,g,h,v,b)))}return w},g=function(e){if(!e)return u;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||u.charset;if("undefined"!=typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var o=r.default;if("undefined"!=typeof e.format){if(!i.call(r.formatters,e.format))throw new TypeError("Unknown format option provided.");o=e.format}var n=r.formatters[o],a=u.filter;return("function"==typeof e.filter||l(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:u.addQueryPrefix,allowDots:"undefined"==typeof e.allowDots?u.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:u.charsetSentinel,delimiter:"undefined"==typeof e.delimiter?u.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:u.encode,encoder:"function"==typeof e.encoder?e.encoder:u.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:u.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:u.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:u.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:u.strictNullHandling}};e.exports=function(e,t){var o,n,r=e,i=g(t);"function"==typeof i.filter?(n=i.filter,r=n("",r)):l(i.filter)&&(n=i.filter,o=n);var s=[];if("object"!=typeof r||null===r)return"";var c;c=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var d=a[c];o||(o=Object.keys(r)),i.sort&&o.sort(i.sort);for(var u=0;u<o.length;++u){var f=o[u];i.skipNulls&&null===r[f]||p(s,m(r[f],f,d,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var h=s.join(i.delimiter),v=i.addQueryPrefix===!0?"?":"";return i.charsetSentinel&&(v+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),h.length>0?v+h:""}},24:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},32:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(22),i=n(r),a=o(12),l=n(a),s=o(3),p=[];t.default={data:function(){return{vo:{loading:!1,currentPage:1,pageSize:20,total:0,data:[],timer:null}}},props:{params:{type:Object,default:function(){return{}}},url:String},computed:{},methods:{handleSizeChange:function(e){this.vo.pageSize=e,this.loadData()},handleCurrentChange:function(e){this.vo.currentPage=e,this.loadData()},loadData:function(){var e=this,t=(0,l.default)({},JSON.parse((0,i.default)(this.params)),{page:this.vo.currentPage,rows:this.vo.pageSize});this.vo.loading=!0,window.clearTimeout(this.vo.timer),this.vo.timer=setTimeout(function(){e.vo.loading&&(e.vo.loading=!1,e.$message({type:"error",message:"服务器响应超时",duration:2e3,showClose:!0}))},1e4),(0,s.get)(this.url,t).then(function(t){e.vo.loading=!1,e.vo.data=t.rows,e.vo.total=t.total}).catch(function(t){e.vo.loading=!1,e.$message({type:"error",message:t.message,duration:0,showClose:!0})})},reload:function(){this.loadData()},resize:function(){var e=(document.documentElement.scrollTop,this.$el.getBoundingClientRect().top);this.vo.height=window.document.documentElement.clientHeight-e-50}},mounted:function(){var e=this;p.push(this),this.$nextTick(function(){e.resize()}),this.loadData()},filters:{}}},35:function(e,t,o){var n=o(10),r=o(33),i=o(23),a=o(24),l="["+a+"]",s="​",p=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(e,t,o){var r={},l=i(function(){return!!a[e]()||s[e]()!=s}),p=r[e]=l?t(u):a[e];o&&(r[o]=p),n(n.P+n.F*l,"String",r)},u=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(p,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},36:function(e,t,o){t=e.exports=o(14)(),t.push([e.id,".dg__warp[data-v-32f0a36b]{background-color:#fff;padding-bottom:8px}.jf-pagintion[data-v-32f0a36b]{background:#fff;margin-top:3px}",""])},37:function(e,t,o){var n=o(36);"string"==typeof n&&(n=[[e.id,n,""]]);o(15)(n,{});n.locals&&(e.exports=n.locals)},38:function(e,t,o){var n,r;o(37),n=o(32);var i=o(39);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-32f0a36b",e.exports=n},39:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.vo.loading,expression:"vo.loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"dg__warp"},[o("el-table",{attrs:{data:e.vo.data,border:"",height:e.vo.height,"element-loading-text":"拼命加载中"}},[e._t("default")],2),e._v(" "),o("el-pagination",{staticClass:"jf-pagintion",attrs:{"current-page":e.vo.currentPage,"page-sizes":[5,10,20,30,50,100,200],"page-size":e.vo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.vo.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]}},170:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(198),i=n(r);t.default={props:{options:{type:Array,required:!1},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:200},uploadPath:{type:String,default:""},value:String,readonly:{type:Boolean,required:!1},tools:{type:Array,default:function(){return["source","|","undo","redo","|","preview","template","plainpaste","wordpaste","|","justifyleft","justifycenter","justifyright","justifyfull","insertorderedlist","insertunorderedlist","indent","outdent","subscript","superscript","clearhtml","quickformat","selectall","|","fullscreen","formatblock","fontname","fontsize","|","forecolor","hilitecolor","bold","italic","underline","strikethrough","lineheight","removeformat","|","table","hr","emoticons","pagebreak","anchor","link","unlink"]}}},data:function(){return{id:null,editor:null,elWidth:null,elHeight:null}},methods:{guid:function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},init:function(){this.id=this.guid(),this.$refs.editor.id=this.id;var e=this;this.$nextTick(function(){e.editor=KindEditor.create("#"+e.id,{width:e.getUnit(e.elWidth),height:e.getUnit(e.elHeight),minWidth:e.getUnit(e.elWidth),minHeight:e.getUnit(e.elHeight),allowFileManager:!1,filePostName:"file",uploadJson:e.uploadPath,allowImageUpload:Boolean(e.uploadPath),afterChange:function(){e.$emit("input",this.html())},items:e.tools}),e.readonly||e.editor.readonly(e.readonly),e.editor.html(e.value)})},remove:function(){this.elWidth=this.editor.width,this.elHeight=this.editor.height,KindEditor.remove("#"+this.id),this.editor.remove(),this.editor=null,this.id=null},getUnit:function(e){return"%"==String(e).split("").pop()?e:(0,i.default)(e)+"px"}},mounted:function(){this.elWidth=this.width,this.elHeight=this.height,this.init()},activated:function(){this.id||this.init()},deactivated:function(){this.remove()},destroyed:function(){this.remove()},watch:{value:function(e){this.editor&&this.editor.html()!=e&&this.editor.html(e)},readonly:function(e){this.editor.readonly(e)}}}},182:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(22),i=n(r),a=o(188),l=o(304),s=n(l),p=o(38),c=n(p);t.default={data:function(){return{po:{people:{id:"",img:"",index:"",status:1,cn:{name:"",longName:"",title:"",profile:""},en:{name:"",longName:"",title:"",profile:""}},people_add:null},vo:{labelWidth:"120px",dialog:{title:"",open:!1,mode:"",reloadFile:!0},data:[]},rules:{img:[{required:!0,message:"请选择图片",trigger:"change"}],index:[{type:"number",required:!0,message:"请输入排序号",trigger:"change"}],"cn.name":[{required:!0,message:"请输入姓名",trigger:"blur"}],"cn.longName":[{required:!0,message:"请输入完整姓名",trigger:"change"}],"cn.title":[{required:!0,message:"请输入职位",trigger:"change"}],"en.name":[{required:!0,message:"请输入姓名",trigger:"change"}],"en.longName":[{required:!0,message:"请输入完整姓名",trigger:"change"}],"en.title":[{required:!0,message:"请输入职位",trigger:"change"}]}}},methods:{openDialog:function(e,t){if(this.clearFile(),"add"==e)this.po.people=JSON.parse((0,i.default)(this.po.people_add)),this.po.people.index=this.vo.data.length+1,this.vo.dialog.title="添加人员介绍";else{var o=JSON.parse((0,i.default)(t));o.id=o._id,this.po.people=o,this.vo.dialog.title="修改人员介绍"}this.vo.dialog.mode=e,this.vo.dialog.open=!0},edit:function(){var e=this;this.$refs.peopleForm.validate(function(t){if(!t)return!1;var o=e.$refs.imgFile.files,n=new FormData;"edit"==e.vo.dialog.mode&&n.append("id",e.po.people.id),n.append("index",e.po.people.index),n.append("status",e.po.people.status),n.append("cn",(0,i.default)(e.po.people.cn)),n.append("en",(0,i.default)(e.po.people.en)),o.length&&n.append("img",o[0]),(0,a.edit)(n).then(function(t){e.loadList(),e.vo.dialog.open=!1}).catch(function(t){e.$message({type:"error",message:t.message,duration:0,showClose:!0})})})},loadList:function(){this.$refs.dg.reload()},selectImg:function(e){if(e.target.files&&e.target.files.length){var t=e.target.files[0],o=new FileReader,n=this;o.onload=function(e){n.po.people.img=e.target.result},o.readAsDataURL(t)}},clearFile:function(){var e=this;this.vo.dialog.reloadFile=!1,this.$nextTick(function(){e.vo.dialog.reloadFile=!0})},delBanner:function(e){var t=this;(0,a.del)({id:e._id}).then(function(e){t.loadList()})}},mounted:function(){this.po.people_add=JSON.parse((0,i.default)(this.po.people))},components:{editor:s.default,datagrid:c.default}}},188:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.del=t.edit=t.list=void 0;var r=o(3),i=o(4),a=n(i);t.list=function(e){return(0,r.get)(a.PEOPLE_LIST,e)},t.edit=function(e){return(0,r.post)(a.PEOPLE_EDIT,e)},t.del=function(e){return(0,r.post)(a.PEOPLE_DEL,e)}},198:function(e,t,o){e.exports={default:o(206),__esModule:!0}},206:function(e,t,o){o(242),e.exports=o(9).Number.parseFloat},233:function(e,t,o){var n=o(13).parseFloat,r=o(35).trim;e.exports=1/n(o(24)+"-0")!==-(1/0)?function(e){var t=r(String(e),3),o=n(t);return 0===o&&"-"==t.charAt(0)?-0:o}:n},242:function(e,t,o){var n=o(10),r=o(233);n(n.S+n.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},265:function(e,t,o){t=e.exports=o(14)(),t.push([e.id,".imgWarp[data-v-cddf4702]{padding:10px}.imgPerview[data-v-cddf4702]{max-height:100px;max-width:450px}",""])},295:function(e,t,o){var n=o(265);"string"==typeof n&&(n=[[e.id,n,""]]);o(15)(n,{});n.locals&&(e.exports=n.locals)},304:function(e,t,o){var n,r;n=o(170);var i=o(334);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=n},316:function(e,t,o){var n,r;o(295),n=o(182);var i=o(335);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-cddf4702",e.exports=n},334:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("textarea",{ref:"editor"})},staticRenderFns:[]}},335:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-dark"},[o("h1",{staticClass:"add"},[e._v("人物介绍\n                        "),o("el-button",{attrs:{icon:"plus",type:"success"},on:{click:function(t){e.openDialog("add")}}},[e._v("添加")])],1)])])],1)],1),e._v(" "),o("datagrid",{ref:"dg",attrs:{url:"/manage/people/list"}},[o("el-table-column",{attrs:{label:"图片",width:"350"},scopedSlots:e._u([{key:"default",fn:function(e){return[o("div",{staticClass:"imgWarp"},[o("img",{staticClass:"imgPerview",attrs:{src:e.row.img}})])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"index",label:"排序",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{label:"状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(1==t.row.status?"启用":"禁用")+"\n            ")]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",icon:"edit"},on:{click:function(o){e.openDialog("edit",t.row)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{size:"small",icon:"delete"},on:{click:function(o){e.delBanner(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),o("el-dialog",{attrs:{title:e.vo.dialog.title,"custom-class":"dialog--editor",visible:e.vo.dialog.open},on:{"update:visible":function(t){e.vo.dialog.open=t}}},[o("el-form",{ref:"peopleForm",attrs:{rules:e.rules,model:e.po.people}},[o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",{attrs:{label:"基本信息"}},[o("el-form-item",{attrs:{label:"图片",prop:"img","label-width":e.vo.labelWidth}},[e.vo.dialog.reloadFile?o("input",{ref:"imgFile",attrs:{type:"file"},on:{change:function(t){e.selectImg(t)}}}):e._e()]),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.po.people.img,expression:"po.people.img"}],attrs:{label:"图片预览","label-width":e.vo.labelWidth}},[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-dark"},[o("img",{staticClass:"imgPerview",attrs:{src:e.po.people.img,alt:""}})])])],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"排序",prop:"index","label-width":e.vo.labelWidth}},[o("el-input-number",{attrs:{min:1,max:100},model:{value:e.po.people.index,callback:function(t){e.po.people.index=t},expression:"po.people.index"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"是否启用","label-width":e.vo.labelWidth}},[o("el-radio",{attrs:{label:1},model:{value:e.po.people.status,callback:function(t){e.po.people.status=t},expression:"po.people.status"}},[e._v("启用")]),e._v(" "),o("el-radio",{attrs:{label:0},model:{value:e.po.people.status,callback:function(t){e.po.people.status=t},expression:"po.people.status"}},[e._v("禁用")])],1)],1),e._v(" "),o("el-tab-pane",{attrs:{label:"中文信息"}},[o("el-form-item",{attrs:{label:"姓名",prop:"cn.name","label-width":e.vo.labelWidth}},[o("el-input",{attrs:{maxlength:100,placeholder:"悬浮时显示姓名"},model:{value:e.po.people.cn.name,callback:function(t){e.po.people.cn.name=t},expression:"po.people.cn.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"完整姓名",prop:"cn.longName","label-width":e.vo.labelWidth}},[o("el-input",{attrs:{maxlength:100,placeholder:"详情显示姓名"},model:{value:e.po.people.cn.longName,callback:function(t){e.po.people.cn.longName=t},expression:"po.people.cn.longName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"职位",prop:"cn.title","label-width":e.vo.labelWidth}},[o("el-input",{attrs:{maxlength:100,placeholder:"请输入职位"},model:{value:e.po.people.cn.title,callback:function(t){e.po.people.cn.title=t},expression:"po.people.cn.title"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"人物介绍","label-width":e.vo.labelWidth}},[o("editor",{model:{value:e.po.people.cn.profile,callback:function(t){e.po.people.cn.profile=t},expression:"po.people.cn.profile"}})],1)],1),e._v(" "),o("el-tab-pane",{attrs:{label:"English Info"}},[o("el-form-item",{attrs:{label:"Name",prop:"en.name","label-width":e.vo.labelWidth}},[o("el-input",{attrs:{maxlength:100,placeholder:"Please enter your name"},model:{value:e.po.people.en.name,callback:function(t){e.po.people.en.name=t},expression:"po.people.en.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"FullName",prop:"en.longName","label-width":e.vo.labelWidth}},[o("el-input",{attrs:{maxlength:300,placeholder:"Please enter full name"},model:{value:e.po.people.en.longName,callback:function(t){e.po.people.en.longName=t},expression:"po.people.en.longName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"title",prop:"en.title","label-width":e.vo.labelWidth}},[o("el-input",{attrs:{maxlength:100,placeholder:"Please enter a position"},model:{value:e.po.people.en.title,callback:function(t){e.po.people.en.title=t},expression:"po.people.en.title"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Profile","label-width":e.vo.labelWidth}},[o("editor",{model:{value:e.po.people.en.profile,callback:function(t){e.po.people.en.profile=t},expression:"po.people.en.profile"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{on:{click:function(t){e.vo.dialog.open=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.edit()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});