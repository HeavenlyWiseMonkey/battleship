(()=>{"use strict";var e={523:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),s=n.n(o)()(a());s.push([e.id,".main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: sans-serif;\n    gap: 150px;\n}\n\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    width: 400px;\n    height: 400px;\n    border: 1px solid black;\n}\n\n.square {\n    border: 1px solid black;\n}\n\n.ship {\n    background-color: black;\n}\n\n.game {\n    display: flex;\n    gap: 100px;\n}\n\n.center {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}",""]);const i=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var c=r(e,a),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),s=n.n(o),i=n(659),c=n.n(i),l=n(56),u=n.n(l),p=n(540),d=n.n(p),f=n(113),h=n.n(f),m=n(523),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=d(),a()(m.A,v),m.A&&m.A.locals&&m.A.locals;const y=class{constructor(){this.ships=5,this.state=[],this.init()}init(){let e=[];for(let t=0;t<10;t++){for(let t=0;t<10;t++)e.push(null);this.state.push(e),e=[]}}place(e,t,n,r,a){for(let a=t;a<n;a++)this.state[r][a]=e;for(let n=r;n<a;n++)this.state[n][t]=e}receiveAttack(e,t){if(this.state[e][t]&&"object"==typeof this.state[e][t]){let n=0;if(e>0&&this.state[e-1][t]){let r=1;for(;e-r>=0&&this.state[e-r][t];)n++,r++}if(t>0&&this.state[e][t-1]){let r=1;for(;t-r>=0&&this.state[e][t-r];)n++,r++}return this.state[e][t].hit(n),!0}return this.state[e][t]=!0,!1}outcome(e,t){if("object"==typeof this.state[e][t]&&!0!==this.state[e][t]&&this.state[e][t].isSunk()&&this.ships--,0===this.ships)return!0}},g=class{constructor(){this.gameboard=new y}},b=class{constructor(e){this.length=e,this.hits=[]}hit(e){this.hits.push(e)}isSunk(){return this.length===this.hits.length}};function x(e,t,n,r,a){const o=document.querySelector(`.${a}`);console.log(o);const s=o.children;for(let n=e;n<t;n++)s[n].classList.add("ship");for(let t=n;t<r;t++)s[10*t+e].classList.add("ship")}const w=new b(2),A=new b(3),S=new b(3),C=new b(4),T=new b(5),k=new g,E=new g;document.querySelectorAll(".board").forEach((e=>{for(let t=0;t<100;t++){let t=document.createElement("div");t.classList.add("square"),e.appendChild(t)}})),k.gameboard.place(w,0,2,0,0),x(0,2,0,0,"player"),k.gameboard.place(A,3,3,3,6),x(3,3,3,6,"player"),k.gameboard.place(S,5,8,0,0),x(5,8,0,0,"player"),k.gameboard.place(C,2,2,0,4),x(2,2,0,4,"player"),k.gameboard.place(T,5,5,4,9),x(5,5,4,9,"player"),E.gameboard.place(w,5,7,0,0),x(5,7,0,0,"computer")})();