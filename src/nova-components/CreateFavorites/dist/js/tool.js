!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(13),i={},a=n&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,p=function(){},l=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(m(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(m(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,r,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(c)return p;n.parentNode.removeChild(n)}if(f){var o=s++;n=u||(u=v()),e=x.bind(null,n,o,!1),r=x.bind(null,n,o,!0)}else n=v(),e=function(t,e){var r=e.css,n=e.media,o=e.sourceMap;n&&t.setAttribute("media",n);l.ssrId&&t.setAttribute(d,e.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}t.exports=function(t,e,r,n){c=r,l=n||{};var a=o(t,e);return h(a),function(e){for(var r=[],n=0;n<a.length;n++){var u=a[n];(s=i[u.id]).refs--,r.push(s)}e?h(a=o(t,e)):a=[];for(n=0;n<r.length;n++){var s;if(0===(s=r[n]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t,e,r,n,o,i){var a,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,u=t.default);var c,p="function"==typeof u?u.options:u;if(e&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0),r&&(p.functional=!0),o&&(p._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},p._ssrRegister=c):n&&(c=n),c){var l=p.functional,d=l?p.render:p.beforeCreate;l?(p._injectStyles=c,p.render=function(t,e){return c.call(e),d(t,e)}):p.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:u,options:p}}},function(t,e,r){"use strict";var n=r(27),o=r.n(n),i=r(33),a=r.n(i);r.d(e,"b",function(){return o.a}),r.d(e,"a",function(){return a.a})},function(t,e,r){"use strict";var n=r(9),o=r.n(n),i=r(16),a=r.n(i);r.d(e,"a",function(){return o.a}),r.d(e,"b",function(){return a.a})},function(t,e,r){"use strict";var n=r(22),o=r.n(n),i=r(40),a=r.n(i);r.d(e,"b",function(){return a.a}),r.d(e,"a",function(){return o.a})},function(t,e,r){"use strict";e.a=function(t){if(!(t||t.data||t.data.resources))return;var e=[];return t.data.resources.forEach(function(t){var r={};t.fields.forEach(function(t){t.value&&(r[t.attribute]=t.value)}),e.push(r)}),e},e.c=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)},e.b=function(t){return""===t}},function(t,e,r){r(8),t.exports=r(52)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),o=r(5),i=r(3);Nova.booting(function(t,e,a){t.component("cancel-button",n.a),t.component("submit-button",n.b),t.component("dropdown-field",o.a),t.component("text-field",o.b),t.component("error-label",i.a),t.component("label-text",i.b),e.addRoutes([{name:"create-favorites",path:"/create-favorites",component:r(46)}])})},function(t,e,r){var n=r(2)(r(14),r(15),!1,function(t){r(10)},null,null);t.exports=n.exports},function(t,e,r){var n=r(11);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("6c543170",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(12),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".cancel{text-decoration:none;color:gray;font-weight:700;margin-right:20px}",""])},function(t,e){t.exports=function(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=i[0],u={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(u):r.push(n[a]={id:a,parts:[u]})}return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"cancel-button"}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"cancel"},[this._v("Cancel")])},staticRenderFns:[]}},function(t,e,r){var n=r(2)(r(20),r(21),!1,function(t){r(17)},null,null);t.exports=n.exports},function(t,e,r){var n=r(18);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("018c47b1",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(19),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".submit-button{border:none;background-color:#3c7fd1;border-radius:10px;padding:10px;color:#dfdfdf;font-weight:700}",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"submit-button"}},function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"submit-button",attrs:{type:"button"}},[e("span",[this._v(" Create Favorite ")])])}]}},function(t,e,r){var n=r(2)(r(26),r(39),!1,function(t){r(23)},null,null);t.exports=n.exports},function(t,e,r){var n=r(24);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("3a01924e",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(25),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".field-container{display:flex;height:75px}.input-spacing{margin:5px;padding:10px;margin-right:20%;width:75%}.label-spacing{margin:5px;margin-left:25px;padding:10px;padding-top:20px;width:25%}.error{padding:5px;color:red;font-style:italic;font-size:12px}.arrow-decoration{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:linear-gradient(45deg,transparent 50%,gray 0),linear-gradient(135deg,gray 50%,transparent 0),radial-gradient(#ddd 70%,transparent 72%);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - .5em) .5em;background-size:5px 5px,5px 5px,1.5em 1.5em;background-repeat:no-repeat}",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=r(3);e.default={name:"dropdown-field",beforeCreate:function(){var t=this;Nova.request().get("/nova-api/users").then(function(e){Object(n.a)(e).forEach(function(e){t.users.push({name:e.name,id:e.id})})})},data:function(){return{users:[]}},props:{label:{default:"",type:String},error:{default:!1,type:Boolean},changeInput:{default:function(){},type:Function},input:{default:"",type:String}},computed:{computedInput:{get:function(){return this.input},set:function(t){this.input=t}},errorText:function(){return"The "+this.label+" field is required."}},components:{LabelText:o.b,ErrorLabel:o.a}}},function(t,e,r){var n=r(2)(r(31),r(32),!1,function(t){r(28)},null,null);t.exports=n.exports},function(t,e,r){var n=r(29);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("f40057be",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(30),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".required{color:red}",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"label-text",props:{label:{default:"",type:String},isRequired:{default:!1,type:Boolean}}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:this.label}},[this._v("\n  "+this._s(this.label)+"\n  "),this.isRequired?e("span",{staticClass:"required"},[this._v("*")]):this._e()])},staticRenderFns:[]}},function(t,e,r){var n=r(2)(r(37),r(38),!1,function(t){r(34)},null,null);t.exports=n.exports},function(t,e,r){var n=r(35);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("37abb13b",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(36),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,"",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error-label",props:{text:{default:"",type:String}}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"error"},[this._v(this._s(this.text))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.label,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.computedInput,expression:"computedInput"}],class:{"input-error":t.error,"input-decoration":!0,"arrow-decoration":!0},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.computedInput=e.target.multiple?r:r[0]},function(e){return t.changeInput(t.input,t.label)}]}},[r("option",{attrs:{value:"",selected:"selected",disabled:"disabled"}},[t._v("—")]),t._v(" "),t._l(t.users,function(e){return r("option",{key:e.name,domProps:{value:e.id}},[t._v("\n        "+t._s(e.name)+"\n      ")])})],2),t._v(" "),t.error?r("error-label",{attrs:{text:t.errorText}}):t._e()],1)])},staticRenderFns:[]}},function(t,e,r){var n=r(2)(r(44),r(45),!1,function(t){r(41)},null,null);t.exports=n.exports},function(t,e,r){var n=r(42);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("3f96289a",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(43),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".field-container{display:flex;height:75px}.input-spacing{margin:5px;padding:10px;margin-right:20%;width:75%}.label-spacing{margin:5px;margin-left:25px;padding:10px;padding-top:20px;width:25%}.error{padding:5px;color:red;font-style:italic;font-size:12px}.input-decoration{border:1px solid #6d6b81;width:100%;height:100%;padding:10px;border-radius:10px;background-color:#fff}.input-decoration:focus{border:3px solid #3c3b47;border-radius:10px;outline:none}.input-error{border-color:red}",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3);e.default={name:"text-field",props:{label:{default:"",type:String},placeholder:{default:"",type:String},type:{default:"",type:String},error:{default:!1,type:Boolean},validationError:{default:!1,type:Boolean},sameError:{default:!1,type:Boolean},isRequired:{default:!1,type:Boolean},changeInput:{default:function(){},type:Function},input:{default:"",type:String}},components:{LabelText:n.b,ErrorLabel:n.a},data:function(){return{}},computed:{computedInput:{get:function(){return this.input},set:function(t){this.input=t}},validationText:function(){return"The "+this.label+" field must be a Url."},errorText:function(){return"The "+this.label+" field is required."},emptyAndValidationErrorText:function(){return"The "+this.label+" field is required and must be a Url."},sameErrorText:function(){return"This "+this.label+" is already used."}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.label,isRequired:t.isRequired}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},["checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.computedInput,expression:"computedInput"}],class:{"input-error":t.error||t.validationError||t.sameError,"input-decoration":!0},attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.computedInput)?t._i(t.computedInput,null)>-1:t.computedInput},on:{input:function(e){return t.changeInput(t.input,t.placeholder)},change:function(e){var r=t.computedInput,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=t._i(r,null);n.checked?i<0&&(t.computedInput=r.concat([null])):i>-1&&(t.computedInput=r.slice(0,i).concat(r.slice(i+1)))}else t.computedInput=o}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.computedInput,expression:"computedInput"}],class:{"input-error":t.error||t.validationError||t.sameError,"input-decoration":!0},attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.computedInput,null)},on:{input:function(e){return t.changeInput(t.input,t.placeholder)},change:function(e){t.computedInput=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.computedInput,expression:"computedInput"}],class:{"input-error":t.error||t.validationError||t.sameError,"input-decoration":!0},attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.computedInput},on:{input:[function(e){e.target.composing||(t.computedInput=e.target.value)},function(e){return t.changeInput(t.input,t.placeholder)}]}}),t._v(" "),t.error&&t.validationError?r("error-label",{attrs:{text:t.emptyAndValidationErrorText}}):t.error?r("error-label",{attrs:{text:t.errorText}}):t.validationError?r("error-label",{attrs:{text:t.validationText}}):t.sameError?r("error-label",{attrs:{text:t.sameErrorText}}):t._e()],1)])},staticRenderFns:[]}},function(t,e,r){var n=r(2)(r(50),r(51),!1,function(t){r(47)},null,null);t.exports=n.exports},function(t,e,r){var n=r(48);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("168bdc8a",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(49),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,"h1{font-weight:700;margin-bottom:7px;margin-left:5px}.input-container{margin:20px}.input-container-background{background-color:#fff;border-radius:10px}.btn-container{margin-right:22px;display:flex;align-items:center;justify-content:center}",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),o=r(4),i=r(6);e.default={components:{TextField:n.b,DropdownField:n.a,SubmitButton:o.b,CancelButton:o.a},data:function(){return{textInput:"text",urlInput:"url",dateInput:"date",title:"Article Title",source:"Article Source",postDate:"Post Date",author:"Author",user:"User",createdAt:"Created At",inputTitle:"",inputSource:"",inputUser:"",inputPostDate:"",inputAuthor:"",errorTitle:!1,errorSource:!1,errorUser:!1,errorPostDate:!1,validationErrorSource:!1,errorSameTitle:!1}},methods:{submitForm:function(t){var e=this;if(this.errorTitle=Object(i.b)(this.inputTitle),this.errorSource=Object(i.b)(this.inputSource),this.errorUser=Object(i.b)(this.inputUser),this.errorPostDate=Object(i.b)(this.inputPostDate),Object(i.c)(this.inputSource)){if(!(this.errorTitle||this.errorSource||this.errorUser)){var r=new FormData;r.append("title",this.inputTitle),r.append("source",this.inputSource),r.append("posting_date",this.inputPostDate),r.append("author",this.inputAuthor),r.append("created_at",(new Date).toLocaleString()),r.append("user",this.inputUser),r.append("user_trashed",!1),r.append("viaResource",""),r.append("viaResourceId",""),r.append("viaRelationship",""),Nova.request().post("/nova-api/favorites?editing=true&editMode=create",r).then(function(t){e.clearInputs(),e.$toasted.show("Favorite created successfully!",{type:"success"})}).catch(function(t){"The Article Title has already been taken."===t.response.data.errors.title[0]&&(e.errorSameTitle=!0)})}}else this.validationErrorSource=!0},changeInput:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e[0],o=e[1];o===this.title?(this.inputTitle=n,this.errorTitle=!1,this.errorSameTitle=!1):o===this.source?(this.inputSource=n,this.errorSource=!1,this.validationErrorSource=!1):o===this.user?(this.inputUser=n,this.errorUser=!1):o===this.postDate?(this.inputPostDate=n,this.errorPostDate=!1):o===this.author&&(this.inputAuthor=n)},clearInputs:function(){this.inputTitle="",this.inputSource="",this.inputUser="",this.inputPostDate="",this.inputAuthor=""}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-container"},[r("h1",[t._v("Create Favorite")]),t._v(" "),r("div",{staticClass:"input-container-background"},[r("text-field",{attrs:{isRequired:!0,type:t.textInput,label:t.title,placeholder:t.title,error:t.errorTitle,sameError:t.errorSameTitle,changeInput:t.changeInput,input:t.inputTitle}}),t._v(" "),r("text-field",{attrs:{isRequired:!1,type:t.textInput,label:t.author,placeholder:t.author,changeInput:t.changeInput,input:t.inputAuthor}}),t._v(" "),r("text-field",{attrs:{isRequired:!0,type:t.urlInput,label:t.source,placeholder:t.source,error:t.errorSource,validationError:t.validationErrorSource,changeInput:t.changeInput,input:t.inputSource}}),t._v(" "),r("text-field",{attrs:{isRequired:!0,type:t.dateInput,label:t.postDate,placeholder:t.postDate,error:t.errorPostDate,changeInput:t.changeInput,input:t.inputPostDate}}),t._v(" "),r("dropdown-field",{attrs:{label:t.user,error:t.errorUser,changeInput:t.changeInput,input:t.inputUser}})],1)]),t._v(" "),r("div",{staticClass:"btn-container"},[r("cancel-button",{nativeOn:{click:function(e){return t.clearInputs(e)}}}),t._v(" "),r("submit-button",{nativeOn:{click:function(e){return t.submitForm(e)}}})],1)])},staticRenderFns:[]}},function(t,e){}]);