(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{GIHZ:function(t,e,r){"use strict";r.r(e);var n=r("ln6h"),o=r.n(n),s=r("O40h"),i=r("q1tI"),a=r.n(i),u=r("YFqc"),f=r.n(u),l=r("20a2"),h=(r("PgRs"),r("LpSC")),c=r.n(h),d=r("5Yp1"),p=r("Y0NT"),y=function(t){var e=t.blogs;return 0===e.length?a.a.createElement(p.default,{message:"No blogs found"}):a.a.createElement(d.a,{mainTitle:"Blogs"},a.a.createElement("div",null,a.a.createElement("h2",null,"List of Blogs"),a.a.createElement("hr",null),e.map(function(t,e){return a.a.createElement("div",{key:e},a.a.createElement(f.a,{href:"/blog?id=".concat(t.id)},a.a.createElement("h4",null,t.title)))})))};y.getInitialProps=Object(s.default)(o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c()("https://jsonplaceholder.typicode.com/posts");case 3:return r=t.sent,t.next=6,r.json();case 6:e=t.sent,console.log("try"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),e=[],console.log("catch");case 15:return t.abrupt("return",{blogs:e});case 16:case"end":return t.stop()}},t,null,[[0,10]])})),e.default=Object(l.withRouter)(y)},LLLT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){var t=r("GIHZ");return{page:t.default||t}}])},LpSC:function(t,e,r){r("bZMm"),t.exports=self.fetch.bind(self)},Y0NT:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),s=r("5Yp1");e.default=function(t){var e=t.message;return o.a.createElement(s.a,{mainTitle:"Error"},o.a.createElement("div",null,o.a.createElement("p",null,e)))}},bZMm:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",function(){return f}),r.d(e,"Request",function(){return b}),r.d(e,"Response",function(){return w}),r.d(e,"DOMException",function(){return g}),r.d(e,"fetch",function(){return E});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=i(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[i(t)]},f.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},f.prototype.set=function(t,e){this.map[i(t)]=a(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),u(t)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),u(t)},f.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),u(t)},n.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),y.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},p.call(b.prototype),p.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];w.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var g=self.DOMException;try{new g}catch(_){(g=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),g.prototype.constructor=g}function E(t,e){return new Promise(function(r,o){var s=new b(t,e);if(s.signal&&s.signal.aborted)return o(new g("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;r(new w(o,n))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.onabort=function(){o(new g("Aborted","AbortError"))},i.open(s.method,s.url,!0),"include"===s.credentials?i.withCredentials=!0:"omit"===s.credentials&&(i.withCredentials=!1),"responseType"in i&&n.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&s.signal.removeEventListener("abort",a)}),i.send(void 0===s._bodyInit?null:s._bodyInit)})}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=f,self.Request=b,self.Response=w)}},[["LLLT",1,0]]]);