parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iMte":[function(require,module,exports) {

},{}],"g4tf":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,c)}u((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(c){i=[6,c],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),require("./style.css");var n=[72,96,120,128,144,152,180,192,384,512],r=document.forms["file-form"].elements["file-input"],a=function(n,r,a){return e(void 0,void 0,void 0,function(){var e,i,o,c,u;return t(this,function(t){switch(t.label){case 0:return e=new Image,(i=new FileReader).readAsDataURL(n),[4,new Promise(function(e){i.onload=function(t){e(t.target.result.toString())}})];case 1:return o=t.sent(),e.src=o,[4,new Promise(function(t){e.onload=function(){var n=document.createElement("canvas");n.setAttribute("width",r.toString()),n.setAttribute("height",a.toString());var i=n.getContext("2d");i.clearRect(0,0,r,a),i.drawImage(e,0,0,e.width,e.height,0,0,r,a),t(n)}})];case 2:return c=t.sent(),(u=document.createElement("button")).textContent="download icon-"+r+"x"+a+".png",u.addEventListener("click",function(){var e=document.createElement("a");e.href=c.toDataURL("image/png"),e.setAttribute("download","icon-"+r+"x"+a+".png"),e.dispatchEvent(new MouseEvent("click"))}),[2,{canvas:c,downloadButton:u}]}})})},i=function(r){return e(void 0,void 0,void 0,function(){var e,i,o,c,u,l,s,d,f,p;return t(this,function(t){switch(t.label){case 0:if(!["image/jpeg","image/jpg","image/png"].includes(r.type))return alert("cannot read file. jpeg or png is supported."),[2];(e=document.getElementById("image-area")).textContent="",i=0,o=n,t.label=1;case 1:return i<o.length?(c=o[i],[4,a(r,c,c)]):[3,4];case 2:u=t.sent(),l=u.canvas,s=u.downloadButton,d=document.createElement("div"),f=document.createElement("div"),p=document.createElement("div"),d.appendChild(l),f.appendChild(s),p.appendChild(d),p.appendChild(f),p.style.border="solid 1px blue",e.appendChild(p),t.label=3;case 3:return i++,[3,1];case 4:return[2]}})})};r.addEventListener("change",function(){return e(void 0,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=r.files[0],[4,i(e)];case 1:return t.sent(),[2]}})})});var o=document.getElementById("upload-area");o.addEventListener("dragover",function(e){e.preventDefault(),o.classList.add("drag")}),o.addEventListener("dragleave",function(){o.classList.remove("drag")}),o.addEventListener("drop",function(e){e.preventDefault(),o.classList.remove("drag");var t=e.dataTransfer.files;r.files=t,i(t[0])});
},{"./style.css":"iMte"}]},{},["g4tf"], null)
//# sourceMappingURL=/script.2f07699a.js.map