webpackJsonp([7],{1:function(e,t){"use strict";var r=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},2:function(e,t){"use strict";var r=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!=typeof e[n]&&(r[n]=e[n]);return r},t.merge=function(e,n,o){if(!n)return e;if("object"!=typeof n){if(Array.isArray(e))e.push(n);else{if("object"!=typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!=typeof e)return[e].concat(n);var a=e;return Array.isArray(e)&&!Array.isArray(n)&&(a=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,a){r.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],n,o):e.push(n):e[a]=n}),e):Object.keys(n).reduce(function(e,a){var i=n[a];return r.call(e,a)?e[a]=t.merge(e[a],i,o):e[a]=i,e},a)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],o=n.indexOf(e);if(o!==-1)return n[o];if(n.push(e),Array.isArray(e)){for(var a=[],i=0;i<e.length;++i)e[i]&&"object"==typeof e[i]?a.push(t.compact(e[i],n)):"undefined"!=typeof e[i]&&a.push(e[i]);return a}var l=Object.keys(e);return l.forEach(function(r){e[r]=t.compact(e[r],n)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&"undefined"!=typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.get=t.post=void 0;var o=r(11),a=n(o),i=r(17),l=n(i),c=r(5),u=n(c),s=r(16),d=n(s),f=r(6),p=r(18),m=function(e){return 0==e.code?l.default.resolve(e.data):e.code!=-100?l.default.reject(e):void setTimeout(function(){(0,p.MessageBox)({title:"错误",type:"error",message:"您的登录已超时，请重新登录！",duration:0,callback:function(){d.default.replace("/login")}})},200)},g=function(e){return e&&e instanceof FormData?e:(0,f.stringify)(e)};t.post=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.default.http.post(e,g(t),r).then(m)},t.get=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.default.http.get(e,(0,a.default)({},{params:t},r)).then(m)}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.WEBMENU_LIST="/manage/webMenu/list",t.WEBMENU_EDIT="/manage/webMenu/edit",t.HOMEBANNER_LIST="/manage/homeBanner/list",t.HOMEBANNER_EDIT="/manage/homeBanner/edit",t.HOMEBANNER_DEL="/manage/homeBanner/del",t.PEOPLE_LIST="/manage/people/list",t.PEOPLE_EDIT="/manage/people/edit",t.PEOPLE_DEL="/manage/people/del",t.JOIN_LIST="/manage/join/list",t.JOIN_EDIT="/manage/join/edit",t.JOIN_DEL="/manage/join/del",t.WEB_SETTING_INFO="/manage/webSetting/getInfo",t.WEB_SETTING_EDIT="/manage/webSetting/edit",t.TEAMMINUS_INFO="/manage/teamminus/getInfo",t.TEAMMINUS_EDIT="/manage/teamminus/edit",t.ADMIN_LIST="/manage/admin/list",t.ADMIN_EDIT="/manage/admin/edit",t.ADMIN_RESETPWD="/manage/admin/resetPwd",t.ADMIN_DEL="/manage/admin/del",t.CHANGE_PWD="/manage/admin/changePwd",t.LOGIN="/manage/login",t.LOGOUT="/manage/admin/logout",t.MENU_TREE="/manage/menu/treeMenu",t.MENU_EDIT="/manage/menu/edit",t.VIDEO_LIST="/manage/video/list",t.VIDEO_EDIT="/manage/video/edit",t.VIDEO_DEL="/manage/video/del",t.PROJECT_LIST="/manage/project/list",t.PROJECT_EDIT="/manage/project/edit",t.PROJECT_DEL="/manage/project/del"},6:function(e,t,r){"use strict";var n=r(8),o=r(7),a=r(1);e.exports={formats:a,parse:o,stringify:n}},7:function(e,t,r){"use strict";var n=r(2),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,i),c=0;c<l.length;++c){var u,s,d=l[c],f=d.indexOf("]="),p=f===-1?d.indexOf("="):f+1;p===-1?(u=t.decoder(d,a.decoder),s=t.strictNullHandling?null:""):(u=t.decoder(d.slice(0,p),a.decoder),s=t.decoder(d.slice(p+1),a.decoder)),o.call(r,u)?r[u]=[].concat(r[u]).concat(s):r[u]=s}return r},l=function(e,t,r){if(!e.length)return t;var n,o=e.shift();if("[]"===o)n=[],n=n.concat(l(e,t,r));else{n=r.plainObjects?Object.create(null):{};var a="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,i=parseInt(a,10);!isNaN(i)&&o!==a&&String(i)===a&&i>=0&&r.parseArrays&&i<=r.arrayLimit?(n=[],n[i]=l(e,t,r)):n[a]=l(e,t,r)}return n},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=a.exec(n),u=c?n.slice(0,c.index):n,s=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;s.push(u)}for(var d=0;null!==(c=i.exec(n))&&d<r.depth;){if(d+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(c[1])}return c&&s.push("["+n.slice(c.index)+"]"),l(s,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=r.ignoreQueryPrefix===!0,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=r.parseArrays!==!1,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"==typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},u=Object.keys(o),s=0;s<u.length;++s){var d=u[s],f=c(d,o[d],r);l=n.merge(l,f,r)}return n.compact(l)}},8:function(e,t,r){"use strict";var n=r(2),o=r(1),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,o,a,i,c,u,s,d,f,p,m){var g=t;if("function"==typeof u)g=u(r,g);else if(g instanceof Date)g=f(g);else if(null===g){if(a)return c&&!m?c(r,l.encoder):r;g=""}if("string"==typeof g||"number"==typeof g||"boolean"==typeof g||n.isBuffer(g)){if(c){var y=m?r:c(r,l.encoder);return[p(y)+"="+p(c(g,l.encoder))]}return[p(r)+"="+p(String(g))]}var h=[];if("undefined"==typeof g)return h;var v;if(Array.isArray(u))v=u;else{var b=Object.keys(g);v=s?b.sort(s):b}for(var O=0;O<v.length;++O){var _=v[O];i&&null===g[_]||(h=Array.isArray(g)?h.concat(e(g[_],o(r,_),o,a,i,c,u,s,d,f,p,m)):h.concat(e(g[_],r+(d?"."+_:"["+_+"]"),o,a,i,c,u,s,d,f,p,m)))}return h};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var u="undefined"==typeof i.delimiter?l.delimiter:i.delimiter,s="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,f="boolean"==typeof i.encode?i.encode:l.encode,p="function"==typeof i.encoder?i.encoder:l.encoder,m="function"==typeof i.sort?i.sort:null,g="undefined"!=typeof i.allowDots&&i.allowDots,y="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,h="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if("undefined"==typeof i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var v,b,O=o.formatters[i.format];"function"==typeof i.filter?(b=i.filter,r=b("",r)):Array.isArray(i.filter)&&(b=i.filter,v=b);var _=[];if("object"!=typeof r||null===r)return"";var E;E=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var j=a[E];v||(v=Object.keys(r)),m&&v.sort(m);for(var w=0;w<v.length;++w){var D=v[w];d&&null===r[D]||(_=_.concat(c(r[D],D,j,s,d,f?p:null,b,m,g,y,O,h)))}var M=_.join(u),N=i.addQueryPrefix===!0?"?":"";return M.length>0?N+M:""}},41:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.changePwd=t.logout=t.login=void 0;var o=r(3),a=r(4),i=n(a);t.login=function(e){return(0,o.post)(i.LOGIN,e)},t.logout=function(e){return(0,o.post)(i.LOGOUT,e)},t.changePwd=function(e){return(0,o.post)(i.CHANGE_PWD,e)}},42:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.edit=t.treeMenu=void 0;var o=r(3),a=r(4),i=n(a);t.treeMenu=function(e){return(0,o.get)(i.MENU_TREE,e)},t.edit=function(e){return(0,o.post)(i.MENU_EDIT,e)}},162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(41),o=r(42);t.default={data:function(){return{user:{},activeMenu:"wecome",menuData:[],defaultProps:{children:"children",label:"label"},menus:[{code:"wecome",router:"/wecome",label:"欢迎"}]}},components:{},methods:{addMenu:function(e){return this.menus.some(function(t){return t.text==e.text})?(this.activeMenu=e.code,void this.$router.replace(e.code)):void(e.children&&e.children.length||(this.menus.push({code:e.code,router:e.code,label:e.text,closable:!0}),this.activeMenu=e.code,this.$router.replace(e.code)))},removeMenu:function(e){for(var t=this,r=0,n=0;n<this.menus.length;n++)if(this.menus[n].code==e){this.menus.splice(n,1),r=n-1;break}e==this.activeMenu&&this.menus[r]&&(this.$router.replace(this.menus[r].code),this.$nextTick(function(){t.activeMenu=t.menus[r].code}))},tabClick:function(e){this.activeMenu=e.name,this.$router.replace(e.$el.getAttribute("router"))},logout:function(){var e=this;this.$confirm("您确定退出登录吗？","提示").then(function(){(0,n.logout)().then(function(){window.localStorage.removeItem("user"),e.$router.replace("/login")})}).catch(function(){console.info("cancel logout")})},getMenu:function(){var e=this;(0,o.treeMenu)().then(function(t){e.menuData=t}).catch(function(e){})}},mounted:function(){var e=window.localStorage.getItem("user");return e?(this.user=JSON.parse(e),0==this.user.pwdStatus?this.$router.replace("/updatePwd?init=1"):void this.getMenu()):this.$router.replace("/login")},filters:{}}},244:function(e,t,r){t=e.exports=r(15)(),t.push([e.id,".jf-tabs[data-v-3e6f225e]{margin:0;padding:0}.jf-tabs-warp[data-v-3e6f225e]{height:calc(100% - 50px)}.jf-user-menu[data-v-3e6f225e]{cursor:pointer;float:right;margin-right:50px;color:#fff;font:16px bold;line-height:60px;background:transparent}.router[data-v-3e6f225e]{color:#333;display:block}",""])},272:function(e,t,r){var n=r(244);"string"==typeof n&&(n=[[e.id,n,""]]);r(19)(n,{});n.locals&&(e.exports=n.locals)},289:function(e,t,r){var n,o;r(272),n=r(162);var a=r(306);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-3e6f225e",e.exports=n},306:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"jf-header jf-header-block"},[e._v("Vue2.0 ElementUI 后台管理系统（Beta版）\n                "),r("el-dropdown",{staticClass:"jf-user-menu"},[r("span",[e._v("用户"+e._s(e.user.name)),r("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),r("el-dropdown-menu",{slot:"dropdown"},[r("el-dropdown-item",[r("router-link",{staticClass:"router",attrs:{to:"/updatePwd"}},[e._v("修改密码")])],1),e._v(" "),r("el-dropdown-item",[r("span",{on:{click:function(t){e.logout()}}},[e._v("退出登录")])])],1)],1)],1)])],1),e._v(" "),r("el-row",{staticClass:"jf-layout"},[r("el-col",{staticClass:"jf-layout",attrs:{span:3}},[r("el-menu",{staticClass:"el-menu-vertical-demo jf-layout",attrs:{theme:"dark","default-active":"2"}},[e._l(e.menuData,function(t,n){return[t.children&&t.children.length?r("el-submenu",{attrs:{index:n+""}},[r("template",{slot:"title"},[r("i",{class:t.icon}),e._v(e._s(t.text))]),e._v(" "),e._l(t.children,function(o,a){return t.children?r("el-menu-item",{attrs:{index:n+""+a}},[r("div",{on:{click:function(t){e.addMenu(o)}}},[e._v(e._s(o.text))])]):e._e()})],2):e._e(),e._v(" "),t.children&&t.children.length?e._e():r("el-menu-item",{attrs:{index:n+""+e.inx}},[r("div",{on:{click:function(r){e.addMenu(t)}}},[r("i",{class:t.icon}),e._v(e._s(t.text))])])]})],2)],1),e._v(" "),r("el-col",{staticClass:"jf-tabs-warp",attrs:{span:21}},[r("el-tabs",{staticClass:"jf-tabs",attrs:{"active-name":e.activeMenu},on:{"tab-click":e.tabClick,"tab-remove":e.removeMenu}},e._l(e.menus,function(e){return r("el-tab-pane",{key:e.code,staticClass:"12",attrs:{label:e.label,router:e.code,closable:e.closable,name:e.code}},[r("keep-alive",[r("router-view",{staticStyle:{"min-height":"100%",border:"0","background-color":"#f1f2f7"},attrs:{name:e.code}})],1)],1)}))],1)],1)],1)},staticRenderFns:[]}}});