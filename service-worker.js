"use strict";var precacheConfig=[["/reactfy/010c1aeee3c6d1cbb1d5761d80353823.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/reactfy/037d830416495def72b7881024c14b7b.woff2","037d830416495def72b7881024c14b7b"],["/reactfy/19b7a0adfdd4f808b53af7e2ce2ad4e5.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/reactfy/210a7c781f5a354a0e4985656ab456d9.woff","210a7c781f5a354a0e4985656ab456d9"],["/reactfy/285467176f7fe6bb6a9c6873b3dad2cc.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/reactfy/404.html","6aeccae75065725ac3b9439e1e1419fb"],["/reactfy/510dec37fa69fba39593e01a469ee018.woff2","510dec37fa69fba39593e01a469ee018"],["/reactfy/55536c8e9e9a532651e3cf374f290ea3.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/reactfy/5d4aeb4e5f5ef754e307d7ffaef688bd.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/reactfy/6232f43d15b0e7a0bf0fe82e295bdd06.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/reactfy/7b770d6c53423deb1a8e49d3c9175184.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/reactfy/846d1890aee87fde5d8ced8eba360c3a.woff","846d1890aee87fde5d8ced8eba360c3a"],["/reactfy/8c2ade503b34e31430d6c98aa29a52a3.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/reactfy/9680d5a0c32d2fd084e07bbc4c8b2923.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/reactfy/97fcb13ff5c23f089a1c87254935c86a.png","97fcb13ff5c23f089a1c87254935c86a"],["/reactfy/987b84570ea69ee660455b8d5e91f5f1.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/reactfy/a1471d1d6431c893582a5f6a250db3f9.woff","a1471d1d6431c893582a5f6a250db3f9"],["/reactfy/bafb105baeb22d965c70fe52ba6b49d9.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/reactfy/bc833e725c137257c2c42a789845d82f.woff","bc833e725c137257c2c42a789845d82f"],["/reactfy/bundle.js","37930727fe8538766931174815be445c"],["/reactfy/cf6613d1adf490972c557a8e318e0868.woff","cf6613d1adf490972c557a8e318e0868"],["/reactfy/css/style.css","a60551b30754187dfa06e90397ffdd21"],["/reactfy/d69924b98acd849cdeba9fbff3f88ea6.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/reactfy/d704bb3d579b7d5e40880c75705c8a71.woff","d704bb3d579b7d5e40880c75705c8a71"],["/reactfy/d8bcbe724fd6f4ba44d0ee6a2675890f.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/reactfy/de8b7431b74642e830af4d4f4b513ec9.woff","de8b7431b74642e830af4d4f4b513ec9"],["/reactfy/e9dbbe8a693dd275c16d32feb101f1c1.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/reactfy/favicon.png","97fcb13ff5c23f089a1c87254935c86a"],["/reactfy/ffcc050b2d92d4b14a4fcb527ee0bcc8.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/reactfy/index.html","6aeccae75065725ac3b9439e1e1419fb"],["/reactfy/manifest.json","caf08712d3cefe39baffb1f029fcda87"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var f=new URL(e);return"/"===f.pathname.slice(-1)&&(f.pathname+=a),f.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,f,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(f)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var f=new URL(a).pathname;return e.some(function(e){return f.match(e)})},stripIgnoredUrlParameters=function(e,a){var f=new URL(e);return f.hash="",f.search=f.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),f.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],f=e[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,f,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(f){if(!a.has(f)){var c=new Request(f,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+f+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(f,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(f){return Promise.all(f.map(function(f){if(!a.has(f.url))return e.delete(f)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,f=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(f))||(f=addDirectoryIndex(f,"index.html"),a=urlsToCacheKeys.has(f));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(f=new URL("undefined/index.html",self.location).toString(),a=urlsToCacheKeys.has(f)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(f)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});