!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var l,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=l,c.render=function(e,t){return l.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:s,options:c}}},function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(10),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},p=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(f){var o=u++;r=s||(s=v()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);p.ssrId&&e.setAttribute(d,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){l=n,p=r||{};var a=o(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(u=i[s.id]).refs--,n.push(u)}t?h(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}};var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".input-decoration{border:1px solid #6d6b81;width:100%;height:100%;padding:10px;border-radius:10px;background-color:#fff}.input-decoration:focus{border:3px solid #3c3b47;border-radius:10px;outline:none}.input-error{border-color:red}",""])},function(e,t,n){n(5),e.exports=n(51)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=n.n(r),i=n(13),a=n.n(i),s=n(19),u=n.n(s),l=n(25),c=n.n(l),p=n(31),d=n.n(p),f=n(37),h=n.n(f),v=n(42),g=n.n(v);Nova.booting(function(e,t,r){e.component("cancel-button",o.a),e.component("submit-button",a.a),e.component("error-label",c.a),e.component("label-text",u.a),e.component("text-input",h.a),e.component("dropdown-input",d.a),e.component("grid",g.a),e.component("components-tool",n(48))})},function(e,t,n){var r=n(1)(n(11),n(12),!1,function(e){n(7)},null,null);e.exports=r.exports},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("6c543170",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(9),""),t.push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".cancel{text-decoration:none;color:gray;font-weight:700;margin-right:20px}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cancel-button"}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"cancel"},[this._v("Cancel")])},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(17),n(18),!1,function(e){n(14)},null,null);e.exports=r.exports},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("018c47b1",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(16),""),t.push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".submit-button{border:none;background-color:#3c7fd1;border-radius:10px;padding:10px;color:#dfdfdf;font-weight:700}.submit-button:hover{background-color:#5f9fff;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"submit-button"}},function(e,t){e.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"submit-button",attrs:{type:"button"}},[t("span",[this._v(" Create Favorite ")])])}]}},function(e,t,n){var r=n(1)(n(23),n(24),!1,function(e){n(20)},null,null);e.exports=r.exports},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f40057be",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(22),""),t.push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".required{color:red}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"label-text",props:{label:{default:"",type:String},isRequired:{default:!1,type:Boolean}}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:this.label}},[this._v("\n  "+this._s(this.label)+"\n  "),this.isRequired?t("span",{staticClass:"required"},[this._v("*")]):this._e()])},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(29),n(30),!1,function(e){n(26)},null,null);e.exports=r.exports},function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("24fae824",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(28),""),t.push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".error{padding:5px;color:red;font-style:italic;font-size:12px}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"error-label",props:{label:{default:"",type:String},errorType:{default:"",type:String},emptyError:{default:!1,type:Boolean},validationError:{default:!1,type:Boolean},sameError:{default:!1,type:Boolean}},computed:{errorText:function(){return this.sameError?"This "+this.label+" is already used.":this.emptyError&&this.validationError?"The "+this.label+" field is required and must be a Url.":this.emptyError?"The "+this.label+" field is required.":this.validationError?"The "+this.label+" field must be a Url.":void 0}}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("p",{staticClass:"error"},[this._v(this._s(this.errorText))])},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(35),n(36),!1,function(e){n(32)},null,null);e.exports=r.exports},function(e,t,n){var r=n(33);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("47b79e98",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(34),""),t.i(n(3),""),t.push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".arrow-decoration{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:linear-gradient(45deg,transparent 50%,gray 0),linear-gradient(135deg,gray 50%,transparent 0),radial-gradient(#ddd 70%,transparent 72%);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - .5em) .5em;background-size:5px 5px,5px 5px,1.5em 1.5em;background-repeat:no-repeat}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dropdown-input",created:function(){var e=this;this.getOptions().then(function(t){e.options=t})},data:function(){return{options:[]}},props:{label:{default:"",type:String},error:{default:!1,type:Boolean},changeInput:{default:function(){},type:Function},input:{default:"",type:String},getOptions:{default:function(){},type:Function}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:{"input-error":e.error,"input-decoration":!0,"arrow-decoration":!0},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.input=t.target.multiple?n:n[0]},function(t){return e.changeInput(e.input,e.label)}]}},[n("option",{attrs:{value:"",selected:"selected",disabled:"disabled"}},[e._v("—")]),e._v(" "),e._l(e.options,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n    "+e._s(t.name)+"\n  ")])})],2)},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(40),n(41),!1,function(e){n(38)},null,null);e.exports=r.exports},function(e,t,n){var r=n(39);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("f6169a08",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(3),""),t.push([e.i,"",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"text-input",props:{label:{default:"",type:String},placeholder:{default:"",type:String},type:{default:"",type:String},error:{default:!1,type:Boolean},validationError:{default:!1,type:Boolean},sameError:{default:!1,type:Boolean},changeInput:{default:function(){},type:Function},input:{default:"",type:String}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return"checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:{"input-error":e.error||e.validationError||e.sameError,"input-decoration":!0},attrs:{placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.input)?e._i(e.input,null)>-1:e.input},on:{input:function(t){return e.changeInput(e.input,e.placeholder)},change:function(t){var n=e.input,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=e._i(n,null);r.checked?i<0&&(e.input=n.concat([null])):i>-1&&(e.input=n.slice(0,i).concat(n.slice(i+1)))}else e.input=o}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:{"input-error":e.error||e.validationError||e.sameError,"input-decoration":!0},attrs:{placeholder:e.placeholder,type:"radio"},domProps:{checked:e._q(e.input,null)},on:{input:function(t){return e.changeInput(e.input,e.placeholder)},change:function(t){e.input=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:{"input-error":e.error||e.validationError||e.sameError,"input-decoration":!0},attrs:{placeholder:e.placeholder,type:e.type},domProps:{value:e.input},on:{input:[function(t){t.target.composing||(e.input=t.target.value)},function(t){return e.changeInput(e.input,e.placeholder)}]}})},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(46),n(47),!1,function(e){n(43)},null,null);e.exports=r.exports},function(e,t,n){var r=n(44);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("7e8ea385",r,!0,{})},function(e,t,n){(t=e.exports=n(0)(!1)).i(n(45),""),t.push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".grid{margin:10px auto;width:100%;height:auto;border-collapse:collapse;text-align:center;background-color:#fff;overflow-y:scroll;border-radius:10px}.grid-head{background-color:#eaeaff;font-weight:700}.grid-body,.grid-head{width:100%}.grid-body tr,.grid-head tr{border-bottom:1px solid #000}.grid-body tr:last-child,.grid-head tr:last-child{border-right:none}.grid-head tr{padding:30px 0;border-bottom:3px solid #000}.grid td{padding:8px}.grid-body tr:last-child,td:last-child{border-bottom:none}.grid tr{height:40px}.grid tr:nth-child(2n){background-color:#f7f7f7}.no-val-error{color:red}.soft-deleted{background-color:gray!important}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"grid",props:{columns:{default:{},type:Object},displayData:{default:[],type:Array}},data:function(){return{data:[],extraData:[]}},methods:{filterItem:function(e){var t=Object.assign({},e);return delete t.softDeleted,t}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"grid"},[n("thead",{staticClass:"grid-head"},[n("tr",e._l(e.columns,function(t){return n("td",{key:t},[e._v(e._s(t))])}),0)]),e._v(" "),n("tbody",{staticClass:"grid-body"},e._l(e.displayData,function(t){return n("tr",{key:t.id,class:{"soft-deleted":t.softDeleted}},e._l(e.filterItem(t),function(t){return n("td",{key:t,class:{"no-val-error":"string"==typeof t&&"is not found"===t.split(" ").splice(-3).join(" ")}},[e._v("\n        "+e._s(t)+"\n      ")])}),0)}),0)])},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(49),n(50),!1,null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resourceName","resourceId","panel"],mounted:function(){}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("Components Tool")])},staticRenderFns:[]}},function(e,t){}]);