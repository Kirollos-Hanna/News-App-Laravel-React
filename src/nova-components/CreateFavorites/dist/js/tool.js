!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){r(2),t.exports=r(15)},function(t,e,r){Nova.booting(function(t,e,n){e.addRoutes([{name:"create-favorites",path:"/create-favorites",component:r(3)}])})},function(t,e,r){var n=r(9)(r(10),r(14),!1,function(t){r(4)},null,null);t.exports=n.exports},function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(7)("2d4eeaa1",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(6),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,"h1{font-weight:700;margin-bottom:7px;margin-left:5px}.input-container{margin:20px}.input-container-background{background-color:#fff;border-radius:10px}.btn-container{margin-right:22px;display:flex;align-items:center;justify-content:center}.field-container{display:flex;height:75px}.input-spacing{margin:5px;padding:10px;margin-right:20%;width:75%}.label-spacing{margin:5px;margin-left:25px;padding:10px;padding-top:20px;width:25%}",""])},function(t,e,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=r(8),o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},p=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(g(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(g(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,r,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(f){var i=u++;n=s||(s=v()),e=b.bind(null,n,i,!1),r=b.bind(null,n,i,!0)}else n=v(),e=function(t,e){var r=e.css,n=e.media,i=e.sourceMap;n&&t.setAttribute("media",n);p.ssrId&&t.setAttribute(h,e.id);i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}t.exports=function(t,e,r,n){c=r,p=n||{};var a=i(t,e);return d(a),function(e){for(var r=[],n=0;n<a.length;n++){var s=a[n];(u=o[s.id]).refs--,r.push(u)}e?d(a=i(t,e)):a=[];for(n=0;n<r.length;n++){var u;if(0===(u=r[n]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}};var y,m=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function b(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}},function(t,e){t.exports=function(t,e,r,n,i,o){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var p=l.functional,h=p?l.render:l.beforeCreate;p?(l._injectStyles=c,l.render=function(t,e){return c.call(e),h(t,e)}):l.beforeCreate=h?[].concat(h,c):[c]}return{esModule:a,exports:s,options:l}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),i=r.n(n);function o(t){if(t||t.data||t.data.resources){var e=[];return t.data.resources.forEach(function(t){var r={};t.fields.forEach(function(t){t.value&&(r[t.attribute]=t.value)}),e.push(r)}),e}}function a(t){return""===t}e.default={data:function(){return{textInput:"text",urlInput:"url",dateInput:"date",title:"Article Title",source:"Article Source",postDate:"Post Date",author:"Author",user:"User",createdAt:"Created At",users:[],inputTitle:"",inputSource:"",inputUser:"",inputPostDate:"",inputAuthor:"",errorTitle:!1,errorSource:!1,errorUser:!1,errorPostDate:!1,validationErrorSource:!1,errorSameTitle:!1,emptyError:"empty",sameError:"same",validationError:"invalid",emptyAndInvalidError:"emptyAndInvalid"}},methods:{submitForm:function(t){var e,r=this;if(this.errorTitle=a(this.inputTitle),this.errorSource=a(this.inputSource),this.errorUser=a(this.inputUser),this.errorPostDate=a(this.inputPostDate),e=this.inputSource,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)){if(!(this.errorTitle||this.errorSource||this.errorUser)){var n=new FormData;n.append("title",this.inputTitle),n.append("source",this.inputSource),n.append("posting_date",this.inputPostDate),n.append("author",this.inputAuthor),n.append("created_at",(new Date).toLocaleString()),n.append("user",this.inputUser),n.append("user_trashed",!1),n.append("viaResource",""),n.append("viaResourceId",""),n.append("viaRelationship",""),Nova.request().post("/nova-api/favorites?editing=true&editMode=create",n).then(function(t){r.clearInputs(),r.$toasted.show("Favorite created successfully!",{type:"success"})}).catch(function(t){"The Article Title has already been taken."===t.response.data.errors.title[0]&&(r.errorSameTitle=!0)})}}else this.validationErrorSource=!0},changeInput:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e[0],i=e[1];i===this.title?(this.inputTitle=n,this.errorTitle=!1,this.errorSameTitle=!1):i===this.source?(this.inputSource=n,this.errorSource=!1,this.validationErrorSource=!1):i===this.user?(this.inputUser=n,this.errorUser=!1):i===this.postDate?(this.inputPostDate=n,this.errorPostDate=!1):i===this.author&&(this.inputAuthor=n)},clearInputs:function(){this.inputTitle="",this.inputSource="",this.inputUser="",this.inputPostDate="",this.inputAuthor="",this.errorSameTitle=!1,this.validationErrorSource=!1,this.errorTitle=!1,this.errorSource=!1,this.errorUser=!1,this.errorPostDate=!1},getUsers:function(){var t,e=(t=i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Nova.request().get("/nova-api/users").then(function(t){var e=[];return o(t).forEach(function(t){e.push({name:t.name,id:t.id})}),e}));case 1:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(i,o){try{var a=e[i](o),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},function(t,e,r){t.exports=r(12)},function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(13),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=x;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==n&&i.call(m,a)&&(g=m);var b=S.prototype=w.prototype=Object.create(g);E.prototype=b.constructor=S,S.constructor=E,S[u]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},T(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,r,n){var i=new C(x(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},T(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function x(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new U(n||[]);return o._invoke=function(t,e,r){var n=p;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return O()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=_(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function w(){}function E(){}function S(){}function T(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,a){var s=_(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},a)}a(s.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-container"},[r("h1",[t._v("Create Favorite")]),t._v(" "),r("div",{staticClass:"input-container-background"},[r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.title,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.textInput,error:t.errorTitle,sameError:t.errorSameTitle,placeholder:t.title,changeInput:t.changeInput,input:t.inputTitle}}),t._v(" "),t.errorTitle?r("error-label",{attrs:{label:t.title,errorType:t.emptyError}}):t.errorSameTitle?r("error-label",{attrs:{label:t.title,errorType:t.sameError}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.author,isRequired:!1}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.textInput,placeholder:t.author,changeInput:t.changeInput,input:t.inputAuthor}})],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.source,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.urlInput,error:t.errorSource,validationError:t.validationErrorSource,placeholder:t.source,changeInput:t.changeInput,input:t.inputSource}}),t._v(" "),t.errorSource&&t.validationErrorSource?r("error-label",{attrs:{label:t.source,errorType:t.emptyAndInvalidError}}):t.errorSource?r("error-label",{attrs:{label:t.source,errorType:t.emptyError}}):t.validationErrorSource?r("error-label",{attrs:{label:t.source,errorType:t.validationError}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.source,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.dateInput,error:t.errorPostDate,placeholder:t.postDate,changeInput:t.changeInput,input:t.inputPostDate}}),t._v(" "),t.errorPostDate?r("error-label",{attrs:{label:t.postDate,errorType:t.emptyError}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.user,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("dropdown-input",{attrs:{label:t.user,input:t.inputUser,changeInput:t.changeInput,getOptions:t.getUsers,error:t.errorUser}}),t._v(" "),t.errorUser?r("error-label",{attrs:{label:t.user,errorType:t.emptyError}}):t._e()],1)])])]),t._v(" "),r("div",{staticClass:"btn-container"},[r("cancel-button",{nativeOn:{click:function(e){return t.clearInputs(e)}}}),t._v(" "),r("submit-button",{nativeOn:{click:function(e){return t.submitForm(e)}}})],1)])},staticRenderFns:[]}},function(t,e){}]);