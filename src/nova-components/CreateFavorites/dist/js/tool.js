!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(10),i={},a=n&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,p=function(){},l=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(m(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(m(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(c)return p;n.parentNode.removeChild(n)}if(f){var o=s++;n=u||(u=v()),t=g.bind(null,n,o,!1),r=g.bind(null,n,o,!0)}else n=v(),t=function(e,t){var r=t.css,n=t.media,o=t.sourceMap;n&&e.setAttribute("media",n);l.ssrId&&e.setAttribute(d,t.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,t,r,n){c=r,l=n||{};var a=o(e,t);return h(a),function(t){for(var r=[],n=0;n<a.length;n++){var u=a[n];(s=i[u.id]).refs--,r.push(s)}t?h(a=o(e,t)):a=[];for(n=0;n<r.length;n++){var s;if(0===(s=r[n]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,b=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function g(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e,t,r,n,o,i){var a,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,u=e.default);var c,p="function"==typeof u?u.options:u;if(t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),r&&(p.functional=!0),o&&(p._scopeId=o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},p._ssrRegister=c):n&&(c=n),c){var l=p.functional,d=l?p.render:p.beforeCreate;l?(p._injectStyles=c,p.render=function(e,t){return c.call(t),d(e,t)}):p.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:u,options:p}}},function(e,t,r){"use strict";t.a=function(e){if(!(e||e.data||e.data.resources))return;var t=[];return e.data.resources.forEach(function(e){var r={};e.fields.forEach(function(e){e.value&&(r[e.attribute]=e.value)}),t.push(r)}),t},t.c=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},t.b=function(e){return""===e}},function(e,t,r){r(5),e.exports=r(49)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=r.n(n),i=r(13),a=r.n(i),u=r(19),s=r.n(u),c=r(25),p=r.n(c),l=r(31),d=r.n(l),f=r(37),h=r.n(f);Nova.booting(function(e,t,n){e.component("cancel-button",o.a),e.component("submit-button",a.a),e.component("dropdown-field",s.a),e.component("text-field",p.a),e.component("error-label",h.a),e.component("label-text",d.a),t.addRoutes([{name:"create-favorites",path:"/create-favorites",component:r(43)}])})},function(e,t,r){var n=r(2)(r(11),r(12),!1,function(e){r(7)},null,null);e.exports=n.exports},function(e,t,r){var n=r(8);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("6c543170",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(9),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".cancel{text-decoration:none;color:gray;font-weight:700;margin-right:20px}",""])},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],u={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(u):r.push(n[a]={id:a,parts:[u]})}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cancel-button"}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"cancel"},[this._v("Cancel")])},staticRenderFns:[]}},function(e,t,r){var n=r(2)(r(17),r(18),!1,function(e){r(14)},null,null);e.exports=n.exports},function(e,t,r){var n=r(15);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("018c47b1",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(16),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".submit-button{border:none;background-color:#3c7fd1;border-radius:10px;padding:10px;color:#dfdfdf;font-weight:700}",""])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"submit-button"}},function(e,t){e.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"submit-button",attrs:{type:"button"}},[t("span",[this._v(" Create Favorite ")])])}]}},function(e,t,r){var n=r(2)(r(23),r(24),!1,function(e){r(20)},null,null);e.exports=n.exports},function(e,t,r){var n=r(21);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("f54f4a6a",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(22),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".field-container{display:flex;height:75px}.input-spacing{margin:5px;padding:10px;margin-right:20%;width:75%}.label-spacing{margin:5px;margin-left:25px;padding:10px;padding-top:20px;width:25%}.error{padding:5px;color:red;font-style:italic;font-size:12px}.arrow-decoration{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-image:linear-gradient(45deg,transparent 50%,gray 0),linear-gradient(135deg,gray 50%,transparent 0),radial-gradient(#ddd 70%,transparent 72%);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - .5em) .5em;background-size:5px 5px,5px 5px,1.5em 1.5em;background-repeat:no-repeat}",""])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={name:"dropdown-field",beforeCreate:function(){var e=this;Nova.request().get("/nova-api/users").then(function(t){Object(n.a)(t).forEach(function(t){e.users.push({name:t.name,id:t.id})})})},data:function(){return{users:[]}},props:{label:{default:"",type:String},error:{default:!1,type:Boolean},changeInput:{default:function(){},type:Function},input:{default:"",type:String}},computed:{computedInput:{get:function(){return this.input},set:function(e){this.input=e}},errorText:function(){return"The "+this.label+" field is required."}},components:{LabelText:LabelText,ErrorLabel:ErrorLabel}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:e.label,isRequired:!0}})],1),e._v(" "),r("div",{staticClass:"input-spacing"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.computedInput,expression:"computedInput"}],class:{"input-error":e.error,"input-decoration":!0,"arrow-decoration":!0},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.computedInput=t.target.multiple?r:r[0]},function(t){return e.changeInput(e.input,e.label)}]}},[r("option",{attrs:{value:"",selected:"selected",disabled:"disabled"}},[e._v("—")]),e._v(" "),e._l(e.users,function(t){return r("option",{key:t.name,domProps:{value:t.id}},[e._v("\n        "+e._s(t.name)+"\n      ")])})],2),e._v(" "),e.error?r("error-label",{attrs:{text:e.errorText}}):e._e()],1)])},staticRenderFns:[]}},function(e,t,r){var n=r(2)(r(29),r(30),!1,function(e){r(26)},null,null);e.exports=n.exports},function(e,t,r){var n=r(27);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("0f361ad6",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(28),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".field-container{display:flex;height:75px}.input-spacing{margin:5px;padding:10px;margin-right:20%;width:75%}.label-spacing{margin:5px;margin-left:25px;padding:10px;padding-top:20px;width:25%}.error{padding:5px;color:red;font-style:italic;font-size:12px}.input-decoration{border:1px solid #6d6b81;width:100%;height:100%;padding:10px;border-radius:10px;background-color:#fff}.input-decoration:focus{border:3px solid #3c3b47;border-radius:10px;outline:none}.input-error{border-color:red}",""])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"text-field",props:{label:{default:"",type:String},placeholder:{default:"",type:String},type:{default:"",type:String},error:{default:!1,type:Boolean},validationError:{default:!1,type:Boolean},sameError:{default:!1,type:Boolean},isRequired:{default:!1,type:Boolean},changeInput:{default:function(){},type:Function},input:{default:"",type:String}},components:{LabelText:LabelText,ErrorLabel:ErrorLabel},data:function(){return{}},computed:{computedInput:{get:function(){return this.input},set:function(e){this.input=e}},validationText:function(){return"The "+this.label+" field must be a Url."},errorText:function(){return"The "+this.label+" field is required."},emptyAndValidationErrorText:function(){return"The "+this.label+" field is required and must be a Url."},sameErrorText:function(){return"This "+this.label+" is already used."}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:e.label,isRequired:e.isRequired}})],1),e._v(" "),r("div",{staticClass:"input-spacing"},["checkbox"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.computedInput,expression:"computedInput"}],class:{"input-error":e.error||e.validationError||e.sameError,"input-decoration":!0},attrs:{placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.computedInput)?e._i(e.computedInput,null)>-1:e.computedInput},on:{input:function(t){return e.changeInput(e.input,e.placeholder)},change:function(t){var r=e.computedInput,n=t.target,o=!!n.checked;if(Array.isArray(r)){var i=e._i(r,null);n.checked?i<0&&(e.computedInput=r.concat([null])):i>-1&&(e.computedInput=r.slice(0,i).concat(r.slice(i+1)))}else e.computedInput=o}}}):"radio"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.computedInput,expression:"computedInput"}],class:{"input-error":e.error||e.validationError||e.sameError,"input-decoration":!0},attrs:{placeholder:e.placeholder,type:"radio"},domProps:{checked:e._q(e.computedInput,null)},on:{input:function(t){return e.changeInput(e.input,e.placeholder)},change:function(t){e.computedInput=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.computedInput,expression:"computedInput"}],class:{"input-error":e.error||e.validationError||e.sameError,"input-decoration":!0},attrs:{placeholder:e.placeholder,type:e.type},domProps:{value:e.computedInput},on:{input:[function(t){t.target.composing||(e.computedInput=t.target.value)},function(t){return e.changeInput(e.input,e.placeholder)}]}}),e._v(" "),e.error&&e.validationError?r("error-label",{attrs:{text:e.emptyAndValidationErrorText}}):e.error?r("error-label",{attrs:{text:e.errorText}}):e.validationError?r("error-label",{attrs:{text:e.validationText}}):e.sameError?r("error-label",{attrs:{text:e.sameErrorText}}):e._e()],1)])},staticRenderFns:[]}},function(e,t,r){var n=r(2)(r(35),r(36),!1,function(e){r(32)},null,null);e.exports=n.exports},function(e,t,r){var n=r(33);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("f40057be",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(34),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,".required{color:red}",""])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"label-text",props:{label:{default:"",type:String},isRequired:{default:!1,type:Boolean}}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:this.label}},[this._v("\n  "+this._s(this.label)+"\n  "),this.isRequired?t("span",{staticClass:"required"},[this._v("*")]):this._e()])},staticRenderFns:[]}},function(e,t,r){var n=r(2)(r(41),r(42),!1,function(e){r(38)},null,null);e.exports=n.exports},function(e,t,r){var n=r(39);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("37abb13b",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(40),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"",""])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"error-label",props:{text:{default:"",type:String}}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("p",{staticClass:"error"},[this._v(this._s(this.text))])},staticRenderFns:[]}},function(e,t,r){var n=r(2)(r(47),r(48),!1,function(e){r(44)},null,null);e.exports=n.exports},function(e,t,r){var n=r(45);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("5391ecfa",n,!0,{})},function(e,t,r){(t=e.exports=r(0)(!1)).i(r(46),""),t.push([e.i,"",""])},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"h1{font-weight:700;margin-bottom:7px;margin-left:5px}.input-container{margin:20px}.input-container-background{background-color:#fff;border-radius:10px}.btn-container{margin-right:22px;display:flex;align-items:center;justify-content:center}",""])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={components:{TextField:TextField,DropdownField:DropdownField,SubmitButton:SubmitButton,CancelButton:CancelButton},data:function(){return{textInput:"text",urlInput:"url",dateInput:"date",title:"Article Title",source:"Article Source",postDate:"Post Date",author:"Author",user:"User",createdAt:"Created At",inputTitle:"",inputSource:"",inputUser:"",inputPostDate:"",inputAuthor:"",errorTitle:!1,errorSource:!1,errorUser:!1,errorPostDate:!1,validationErrorSource:!1,errorSameTitle:!1}},methods:{submitForm:function(e){var t=this;if(this.errorTitle=Object(n.b)(this.inputTitle),this.errorSource=Object(n.b)(this.inputSource),this.errorUser=Object(n.b)(this.inputUser),this.errorPostDate=Object(n.b)(this.inputPostDate),Object(n.c)(this.inputSource)){if(!(this.errorTitle||this.errorSource||this.errorUser)){var r=new FormData;r.append("title",this.inputTitle),r.append("source",this.inputSource),r.append("posting_date",this.inputPostDate),r.append("author",this.inputAuthor),r.append("created_at",(new Date).toLocaleString()),r.append("user",this.inputUser),r.append("user_trashed",!1),r.append("viaResource",""),r.append("viaResourceId",""),r.append("viaRelationship",""),Nova.request().post("/nova-api/favorites?editing=true&editMode=create",r).then(function(e){t.clearInputs(),t.$toasted.show("Favorite created successfully!",{type:"success"})}).catch(function(e){"The Article Title has already been taken."===e.response.data.errors.title[0]&&(t.errorSameTitle=!0)})}}else this.validationErrorSource=!0},changeInput:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0],o=t[1];o===this.title?(this.inputTitle=n,this.errorTitle=!1,this.errorSameTitle=!1):o===this.source?(this.inputSource=n,this.errorSource=!1,this.validationErrorSource=!1):o===this.user?(this.inputUser=n,this.errorUser=!1):o===this.postDate?(this.inputPostDate=n,this.errorPostDate=!1):o===this.author&&(this.inputAuthor=n)},clearInputs:function(){this.inputTitle="",this.inputSource="",this.inputUser="",this.inputPostDate="",this.inputAuthor=""}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"input-container"},[r("h1",[e._v("Create Favorite")]),e._v(" "),r("div",{staticClass:"input-container-background"},[r("text-field",{attrs:{isRequired:!0,type:e.textInput,label:e.title,placeholder:e.title,error:e.errorTitle,sameError:e.errorSameTitle,changeInput:e.changeInput,input:e.inputTitle}}),e._v(" "),r("text-field",{attrs:{isRequired:!1,type:e.textInput,label:e.author,placeholder:e.author,changeInput:e.changeInput,input:e.inputAuthor}}),e._v(" "),r("text-field",{attrs:{isRequired:!0,type:e.urlInput,label:e.source,placeholder:e.source,error:e.errorSource,validationError:e.validationErrorSource,changeInput:e.changeInput,input:e.inputSource}}),e._v(" "),r("text-field",{attrs:{isRequired:!0,type:e.dateInput,label:e.postDate,placeholder:e.postDate,error:e.errorPostDate,changeInput:e.changeInput,input:e.inputPostDate}}),e._v(" "),r("dropdown-field",{attrs:{label:e.user,error:e.errorUser,changeInput:e.changeInput,input:e.inputUser}})],1)]),e._v(" "),r("div",{staticClass:"btn-container"},[r("cancel-button",{nativeOn:{click:function(t){return e.clearInputs(t)}}}),e._v(" "),r("submit-button",{nativeOn:{click:function(t){return e.submitForm(t)}}})],1)])},staticRenderFns:[]}},function(e,t){}]);