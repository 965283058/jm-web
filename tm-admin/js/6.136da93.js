webpackJsonp([6],{1:function(e,t){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},2:function(e,t){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)"undefined"!=typeof e[o]&&(n[o]=e[o]);return n},t.merge=function(e,o,a){if(!o)return e;if("object"!=typeof o){if(Array.isArray(e))e.push(o);else{if("object"!=typeof e)return[e,o];(a.plainObjects||a.allowPrototypes||!n.call(Object.prototype,o))&&(e[o]=!0)}return e}if("object"!=typeof e)return[e].concat(o);var r=e;return Array.isArray(e)&&!Array.isArray(o)&&(r=t.arrayToObject(e,a)),Array.isArray(e)&&Array.isArray(o)?(o.forEach(function(o,r){n.call(e,r)?e[r]&&"object"==typeof e[r]?e[r]=t.merge(e[r],o,a):e.push(o):e[r]=o}),e):Object.keys(o).reduce(function(e,r){var i=o[r];return n.call(e,r)?e[r]=t.merge(e[r],i,a):e[r]=i,e},r)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",a=0;a<t.length;++a){var r=t.charCodeAt(a);45===r||46===r||95===r||126===r||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122?n+=t.charAt(a):r<128?n+=o[r]:r<2048?n+=o[192|r>>6]+o[128|63&r]:r<55296||r>=57344?n+=o[224|r>>12]+o[128|r>>6&63]+o[128|63&r]:(a+=1,r=65536+((1023&r)<<10|1023&t.charCodeAt(a)),n+=o[240|r>>18]+o[128|r>>12&63]+o[128|r>>6&63]+o[128|63&r])}return n},t.compact=function(e,n){if("object"!=typeof e||null===e)return e;var o=n||[],a=o.indexOf(e);if(a!==-1)return o[a];if(o.push(e),Array.isArray(e)){for(var r=[],i=0;i<e.length;++i)e[i]&&"object"==typeof e[i]?r.push(t.compact(e[i],o)):"undefined"!=typeof e[i]&&r.push(e[i]);return r}var l=Object.keys(e);return l.forEach(function(n){e[n]=t.compact(e[n],o)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&"undefined"!=typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.get=t.post=void 0;var a=n(11),r=o(a),i=n(18),l=o(i),s=n(5),c=o(s),u=n(17),d=o(u),p=n(6),f=n(19),g=function(e){return 0==e.code?l.default.resolve(e.data):e.code!=-100?l.default.reject(e):void setTimeout(function(){(0,f.MessageBox)({title:"错误",type:"error",message:"您的登录已超时，请重新登录！",duration:0,callback:function(){d.default.replace("/login")}})},200)},m=function(e){return e&&e instanceof FormData?e:(0,p.stringify)(e)};t.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.default.http.post(e,m(t),n).then(g)},t.get=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.default.http.get(e,(0,r.default)({},{params:t},n)).then(g)}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WEBMENU_LIST="/manage/webMenu/list",t.WEBMENU_EDIT="/manage/webMenu/edit",t.HOMEBANNER_LIST="/manage/homeBanner/list",t.HOMEBANNER_EDIT="/manage/homeBanner/edit",t.HOMEBANNER_DEL="/manage/homeBanner/del",t.PEOPLE_LIST="/manage/people/list",t.PEOPLE_EDIT="/manage/people/edit",t.PEOPLE_DEL="/manage/people/del",t.JOIN_LIST="/manage/join/list",t.JOIN_EDIT="/manage/join/edit",t.JOIN_DEL="/manage/join/del",t.WEB_SETTING_INFO="/manage/webSetting/getInfo",t.WEB_SETTING_EDIT="/manage/webSetting/edit",t.TEAMMINUS_INFO="/manage/teamminus/getInfo",t.TEAMMINUS_EDIT="/manage/teamminus/edit",t.ADMIN_LIST="/manage/admin/list",t.ADMIN_EDIT="/manage/admin/edit",t.ADMIN_RESETPWD="/manage/admin/resetPwd",t.ADMIN_DEL="/manage/admin/del",t.CHANGE_PWD="/manage/admin/changePwd",t.LOGIN="/manage/login",t.LOGOUT="/manage/admin/logout",t.MENU_TREE="/manage/menu/treeMenu",t.MENU_EDIT="/manage/menu/edit",t.VIDEO_LIST="/manage/video/list",t.VIDEO_EDIT="/manage/video/edit",t.VIDEO_DEL="/manage/video/del",t.PROJECT_LIST="/manage/project/list",t.PROJECT_EDIT="/manage/project/edit",t.PROJECT_DEL="/manage/project/del"},6:function(e,t,n){"use strict";var o=n(8),a=n(7),r=n(1);e.exports={formats:r,parse:a,stringify:o}},7:function(e,t,n){"use strict";var o=n(2),a=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=o.split(t.delimiter,i),s=0;s<l.length;++s){var c,u,d=l[s],p=d.indexOf("]="),f=p===-1?d.indexOf("="):p+1;f===-1?(c=t.decoder(d,r.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,f),r.decoder),u=t.decoder(d.slice(f+1),r.decoder)),a.call(n,c)?n[c]=[].concat(n[c]).concat(u):n[c]=u}return n},l=function(e,t,n){if(!e.length)return t;var o,a=e.shift();if("[]"===a)o=[],o=o.concat(l(e,t,n));else{o=n.plainObjects?Object.create(null):{};var r="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,i=parseInt(r,10);!isNaN(i)&&a!==r&&String(i)===r&&i>=0&&n.parseArrays&&i<=n.arrayLimit?(o=[],o[i]=l(e,t,n)):o[r]=l(e,t,n)}return o},s=function(e,t,n){if(e){var o=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,r=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=r.exec(o),c=s?o.slice(0,s.index):o,u=[];if(c){if(!n.plainObjects&&a.call(Object.prototype,c)&&!n.allowPrototypes)return;u.push(c)}for(var d=0;null!==(s=i.exec(o))&&d<n.depth;){if(d+=1,!n.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),l(u,t,n)}};e.exports=function(e,t){var n=t?o.assign({},t):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=n.ignoreQueryPrefix===!0,n.delimiter="string"==typeof n.delimiter||o.isRegExp(n.delimiter)?n.delimiter:r.delimiter,n.depth="number"==typeof n.depth?n.depth:r.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:r.arrayLimit,n.parseArrays=n.parseArrays!==!1,n.decoder="function"==typeof n.decoder?n.decoder:r.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:r.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:r.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:r.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:r.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:r.strictNullHandling,""===e||null===e||"undefined"==typeof e)return n.plainObjects?Object.create(null):{};for(var a="string"==typeof e?i(e,n):e,l=n.plainObjects?Object.create(null):{},c=Object.keys(a),u=0;u<c.length;++u){var d=c[u],p=s(d,a[d],n);l=o.merge(l,p,n)}return o.compact(l)}},8:function(e,t,n){"use strict";var o=n(2),a=n(1),r={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,n,a,r,i,s,c,u,d,p,f,g){var m=t;if("function"==typeof c)m=c(n,m);else if(m instanceof Date)m=p(m);else if(null===m){if(r)return s&&!g?s(n,l.encoder):n;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||o.isBuffer(m)){if(s){var v=g?n:s(n,l.encoder);return[f(v)+"="+f(s(m,l.encoder))]}return[f(n)+"="+f(String(m))]}var b=[];if("undefined"==typeof m)return b;var y;if(Array.isArray(c))y=c;else{var h=Object.keys(m);y=u?h.sort(u):h}for(var _=0;_<y.length;++_){var O=y[_];i&&null===m[O]||(b=Array.isArray(m)?b.concat(e(m[O],a(n,O),a,r,i,s,c,u,d,p,f,g)):b.concat(e(m[O],n+(d?"."+O:"["+O+"]"),a,r,i,s,c,u,d,p,f,g)))}return b};e.exports=function(e,t){var n=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"==typeof i.delimiter?l.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,p="boolean"==typeof i.encode?i.encode:l.encode,f="function"==typeof i.encoder?i.encoder:l.encoder,g="function"==typeof i.sort?i.sort:null,m="undefined"!=typeof i.allowDots&&i.allowDots,v="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,b="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"==typeof i.format)i.format=a.default;else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var y,h,_=a.formatters[i.format];"function"==typeof i.filter?(h=i.filter,n=h("",n)):Array.isArray(i.filter)&&(h=i.filter,y=h);var O=[];if("object"!=typeof n||null===n)return"";var E;E=i.arrayFormat in r?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=r[E];y||(y=Object.keys(n)),g&&y.sort(g);for(var D=0;D<y.length;++D){var w=y[D];d&&null===n[w]||(O=O.concat(s(n[w],w,x,u,d,p?f:null,h,g,m,v,_,b)))}var I=O.join(c),j=i.addQueryPrefix===!0?"?":"";return I.length>0?j+I:""}},61:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.edit=t.getInfo=void 0;var a=n(3),r=n(4),i=o(r);t.getInfo=function(e){return(0,a.get)(i.WEB_SETTING_INFO,e)},t.edit=function(e){return(0,a.post)(i.WEB_SETTING_EDIT,e)}},168:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),i=a(r),l=n(175),s=n(61),c=o(s);t.default={data:function(){return{dialogVisible:!1,po:{banner:{id:"",img:"",index:"",status:1},setting:{key:"homeBanner",mode:"horizontal",speed:0,autoplay:0,autoplayDisableOnInteraction:!1,loop:!0,keyboardControl:!0}},vo:{labelWidth:"120px",dialog:{title:"",open:!1,mode:"",reloadFile:!0},otherDialogOpen:!1,data:[]},rules:{img:[{required:!0,message:"请选择图片",trigger:"change"}],index:[{type:"number",required:!0,message:"请选择日期",trigger:"change"}]}}},methods:{openDialog:function(e,t){this.clearFile(),"add"==e?(this.po.banner.id="",this.po.banner.img="",this.po.banner.index=this.vo.data.length+1,this.po.banner.status=1,this.vo.dialog.title="添加首页Banner图"):(this.po.banner.id=t._id,this.po.banner.img=t.img,this.po.banner.index=t.index,this.po.banner.status=t.status,this.vo.dialog.title="修改首页Banner图"),this.vo.dialog.mode=e,this.vo.dialog.open=!0},edit:function(){var e=this;this.$refs.homeBannerForm.validate(function(t){if(!t)return!1;var n=e.$refs.imgFile.files,o=new FormData;"edit"==e.vo.dialog.mode&&o.append("id",e.po.banner.id),o.append("index",e.po.banner.index),o.append("status",e.po.banner.status),n.length&&o.append("img",n[0]),(0,l.edit)(o).then(function(t){e.loadList(),e.vo.dialog.open=!1}).catch(function(t){e.$message({type:"error",message:t.message,duration:0,closed:!0})})})},loadList:function(){var e=this;(0,l.list)().then(function(t){e.vo.data=t})},selectImg:function(e){if(e.target.files&&e.target.files.length){var t=e.target.files[0],n=new FileReader,o=this;n.onload=function(e){o.po.banner.img=e.target.result},n.readAsDataURL(t)}},clearFile:function(){var e=this;this.vo.dialog.reloadFile=!1,this.$nextTick(function(){e.vo.dialog.reloadFile=!0})},delBanner:function(e){var t=this;(0,l.del)({id:e._id}).then(function(e){t.loadList()})},openSettingDialog:function(){var e=this;c.getInfo({key:"homeBanner"}).then(function(t){t.key&&(e.po.setting=t.value,e.po.setting.key=t.key,e.vo.otherDialogOpen=!0)})},saveSetting:function(){var e=this,t=JSON.parse((0,i.default)(this.po.setting));delete t.key,c.edit({key:this.po.setting.key,value:t}).then(function(t){e.vo.otherDialogOpen=!1,e.$message({type:"success",message:"保存成功",duration:1500})}).catch(function(t){e.$message({type:"error",message:t.message,duration:0,closed:!0})})}},mounted:function(){this.loadList()}}},175:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.del=t.edit=t.list=void 0;var a=n(3),r=n(4),i=o(r);t.list=function(e){return(0,a.get)(i.HOMEBANNER_LIST,e)},t.edit=function(e){return(0,a.post)(i.HOMEBANNER_EDIT,e)},t.del=function(e){return(0,a.post)(i.HOMEBANNER_DEL,e)}},241:function(e,t,n){t=e.exports=n(13)(),t.push([e.id,".imgWarp[data-v-021445fa]{padding:10px}input[type=file][data-v-021445fa]{line-height:28px;border:1px solid #c2c2c2;margin-bottom:5px}.propInfo[data-v-021445fa]{margin-left:20px}",""])},270:function(e,t,n){var o=n(241);"string"==typeof o&&(o=[[e.id,o,""]]);n(16)(o,{});o.locals&&(e.exports=o.locals)},298:function(e,t,n){var o,a;n(270),o=n(168);var r=n(305);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-021445fa",e.exports=o},305:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-dark"},[n("h1",{staticClass:"add"},[e._v("首页滚动轮播图\n                        "),n("el-button",{attrs:{icon:"plus",type:"success"},on:{click:function(t){e.openDialog("add")}}},[e._v("添加")]),e._v(" "),n("el-button",{attrs:{icon:"setting",type:"primary"},on:{click:function(t){e.openSettingDialog()}}},[e._v("其他设置")])],1)])])],1)],1),e._v(" "),n("el-table",{attrs:{data:e.vo.data,border:"","row-class-name":e.tableRowClassName}},[n("el-table-column",{attrs:{label:"图片",width:"350"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("div",{staticClass:"imgWarp"},[n("img",{staticClass:"imgPerview",attrs:{src:e.row.img}})])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"index",label:"排序",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{label:"状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(1==t.row.status?"启用":"禁用")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small",icon:"edit"},on:{click:function(n){e.openDialog("edit",t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",icon:"delete"},on:{click:function(n){e.delBanner(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.vo.dialog.title,visible:e.vo.dialog.open},on:{"update:visible":function(t){e.vo.dialog.open=t}}},[n("el-form",{ref:"homeBannerForm",attrs:{rules:e.rules,model:e.po.banner}},[n("el-form-item",{attrs:{label:"图片",prop:"img","label-width":e.vo.labelWidth}},[e.vo.dialog.reloadFile?n("input",{ref:"imgFile",attrs:{type:"file"},on:{change:function(t){e.selectImg(t)}}}):e._e()]),e._v(" "),e.po.banner.img?n("el-form-item",{attrs:{label:"图片预览","label-width":e.vo.labelWidth}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-dark"},[n("img",{staticClass:"imgPerview",attrs:{src:e.po.banner.img,alt:""}})])])],1)],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"排序",prop:"index","label-width":e.vo.labelWidth}},[n("el-input-number",{attrs:{min:1,max:100},model:{value:e.po.banner.index,callback:function(t){e.po.banner.index=t},expression:"po.banner.index"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否启用","label-width":e.vo.labelWidth}},[n("el-radio",{attrs:{label:1},model:{value:e.po.banner.status,callback:function(t){e.po.banner.status=t},expression:"po.banner.status"}},[e._v("启用")]),e._v(" "),n("el-radio",{attrs:{label:0},model:{value:e.po.banner.status,callback:function(t){e.po.banner.status=t},expression:"po.banner.status"}},[e._v("禁用")])],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.vo.dialog.open=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.edit()}}},[e._v("确 定")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.vo.dialog.title,visible:e.vo.otherDialogOpen},on:{"update:visible":function(t){e.vo.otherDialogOpen=t}}},[n("el-form",{ref:"homeBannerForm",attrs:{rules:e.rules,model:e.po.setting}},[n("el-form-item",{attrs:{label:"滚动方向","label-width":"350px"}},[n("el-radio",{attrs:{label:"horizontal"},model:{value:e.po.setting.mode,callback:function(t){e.po.setting.mode=t},expression:"po.setting.mode"}},[e._v("水平")]),e._v(" "),n("el-radio",{attrs:{label:"vertical"},model:{value:e.po.setting.mode,callback:function(t){e.po.setting.mode=t},expression:"po.setting.mode"}},[e._v("垂直")])],1),e._v(" "),n("el-form-item",{attrs:{label:"滑动开始到结束的时间(单位:毫秒)","label-width":"350px"}},[n("el-input-number",{attrs:{min:0,max:1e4},model:{value:e.po.setting.speed,callback:function(t){e.po.setting.speed=t},expression:"po.setting.speed"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"自动切换Banner图的时间(设置为0取消自动切换)","label-width":"350px"}},[n("el-input-number",{attrs:{min:0,max:1e5},model:{value:e.po.setting.autoplay,callback:function(t){e.po.setting.autoplay=t},expression:"po.setting.autoplay"}}),e._v(" "),n("span",{staticClass:"propInfo"})],1),e._v(" "),n("el-form-item",{attrs:{label:"用户进行滚动操作后是否停止自动滚动","label-width":"350px"}},[n("el-radio",{attrs:{label:"true"},model:{value:e.po.setting.autoplayDisableOnInteraction,callback:function(t){e.po.setting.autoplayDisableOnInteraction=t},expression:"po.setting.autoplayDisableOnInteraction"}},[e._v("停止")]),e._v(" "),n("el-radio",{attrs:{label:"false"},model:{value:e.po.setting.autoplayDisableOnInteraction,callback:function(t){e.po.setting.autoplayDisableOnInteraction=t},expression:"po.setting.autoplayDisableOnInteraction"}},[e._v("滚动")])],1),e._v(" "),n("el-form-item",{attrs:{label:"Banner图循环滚动","label-width":"350px"}},[n("el-radio",{attrs:{label:"true"},model:{value:e.po.setting.loop,callback:function(t){e.po.setting.loop=t},expression:"po.setting.loop"}},[e._v("循环滚动")]),e._v(" "),n("el-radio",{attrs:{label:"false"},model:{value:e.po.setting.loop,callback:function(t){e.po.setting.loop=t},expression:"po.setting.loop"}},[e._v("关闭循环")])],1),e._v(" "),n("el-form-item",{attrs:{label:"键盘方向键控制滚动","label-width":"350px"}},[n("el-radio",{attrs:{label:"true"},model:{value:e.po.setting.keyboardControl,callback:function(t){e.po.setting.keyboardControl=t},expression:"po.setting.keyboardControl"}},[e._v("启动")]),e._v(" "),n("el-radio",{attrs:{label:"false"},model:{value:e.po.setting.keyboardControl,callback:function(t){e.po.setting.keyboardControl=t},expression:"po.setting.keyboardControl"}},[e._v("关闭")])],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.vo.otherDialogOpen=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveSetting()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});