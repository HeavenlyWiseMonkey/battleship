(()=>{"use strict";var t={523:(t,e,n)=>{n.d(e,{A:()=>i});var s=n(601),o=n.n(s),r=n(314),a=n.n(r)()(o());a.push([t.id,".main {\n    font-family: sans-serif;\n    gap: 75px;\n}\n\n.main, .start[open] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.start {\n    gap: 10px;\n}\n\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    width: 400px;\n    height: 400px;\n    border: 1px solid black;\n}\n\n.square {\n    border: 1px solid black;\n}\n\n.ship {\n    background-color: navy;\n}\n\n.game {\n    display: flex;\n    gap: 100px;\n}\n\n.center {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: grey;\n}\n\n.sunk {\n    background-color: purple;\n}\n\n.hover {\n    background-color: green;\n}",""]);const i=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);s&&a[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),e.push(h))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},a=[],i=0;i<t.length;i++){var c=t[i],l=s.base?c[0]+s.base:c[0],h=r[l]||0,d="".concat(l," ").concat(h);r[l]=h+1;var f=n(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var p=o(u,s);s.byIndex=i,e.splice(i,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=s(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var i=n(r[a]);e[i].references--}for(var c=s(t,o),l=0;l<r.length;l++){var h=n(r[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}r=c}}},659:t=>{var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,o&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={id:s,exports:{}};return t[s](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var s=n(72),o=n.n(s),r=n(825),a=n.n(r),i=n(659),c=n.n(i),l=n(56),h=n.n(l),d=n(540),f=n.n(d),u=n(113),p=n.n(u),m=n(523),v={};v.styleTagTransform=p(),v.setAttributes=h(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=f(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;const g=class{constructor(t){this.length=t,this.hits=[],this.vertical=!1}hit(t){this.hits.push(t)}isSunk(){return this.length===this.hits.length}},y=class{constructor(){this.ships=5,this.state=[],this.init()}init(){let t=[];for(let e=0;e<10;e++){for(let e=0;e<10;e++)t.push(null);this.state.push(t),t=[]}}place(t,e,n,s){if(s)for(let s=n;s<n+t.length;s++)this.state[s][e]=t,this.state[s][e].vertical=!0;else for(let s=e;s<e+t.length;s++)this.state[n][s]=t}receiveAttack(t,e){if("object"==typeof this.state[e][t]&&this.state[e][t]&&!0!==this.state[e][t]){let n=0;if(t>0&&this.state[e][t-1]===this.state[e][t]&&!n){let s=1;for(;t-s>=0&&this.state[e][t-s]===this.state[e][t];)n++,s++}else if(e>0&&this.state[e-1][t]===this.state[e][t]){let s=1;for(;e-s>=0&&this.state[e-s][t]===this.state[e][t];)n++,s++}return this.state[e][t].hit(n),!0}return this.state[e][t]=!0,!1}outcome(t,e){return!("object"!=typeof this.state[e][t]||!0===this.state[e][t]||!this.state[e][t].isSunk()||(this.ships--,0))}randomGeneration(){const t=[new g(5),new g(4),new g(3),new g(3),new g(2)];let e=0;for(let n=0;n<t.length;n++){const n=Math.floor(2*Math.random());if(n){let s=Math.floor(Math.random()*(100-10*(t[e].length-1))),o=!0;for(;o;){for(let n=0;n<t[e].length;n++)this.state[Math.floor(s/10)+n][s%10]&&(s=Math.floor(Math.random()*(100-10*(t[e].length-1))));o=!1}this.place(t[e],s%10,Math.floor(s/10),n)}else{let s=Math.floor(99*Math.random()),o=!0;t:for(;o;)if(Math.floor(s/10)===Math.floor((s+t[e].length-1)/10)){for(let n=0;n<t[e].length;n++)if(this.state[Math.floor(s/10)][s%10+n]){s=Math.floor(99*Math.random());continue t}o=!1}else s=Math.floor(99*Math.random());this.place(t[e],s%10,Math.floor(s/10),n)}e++}}},L=class{constructor(t){this.owner=t,this.gameboard=new y}};function b(t,e,n,s,o){const r=document.querySelectorAll(`.${e.owner}`);e.gameboard.place(t,n,s,o),r.forEach((e=>{const r=e.children;if(o)for(let e=s;e<s+t.length;e++)r[10*e+n].classList.add("ship");else for(let e=n;e<n+t.length;e++)r[e+10*s].classList.add("ship")}))}function M(t,e){const n=t.parentElement,s=Array.from(n.children).indexOf(t),o=s%10,r=Math.floor(s/10);if(console.log(n),e.gameboard.receiveAttack(o,r)){t.classList.add("hit");const a=e.gameboard.state[r][o];if(e.gameboard.outcome(o,r)){const t=n.children;if(a.vertical){const e=s-10*a.hits[a.hits.length-1],n=s+10*(a.hits.length-a.hits[a.hits.length-1]);for(let s=e;s<n;s+=10)t[s].classList.add("sunk")}else{const e=s-a.hits[a.hits.length-1],n=s+a.hits.length-a.hits[a.hits.length-1];for(let s=e;s<n;s++)t[s].classList.add("sunk")}}e.gameboard.ships||function(t){const e=document.querySelector(".winner");"computer"===t.owner?e.textContent="player wins":e.textContent="computer wins"}(e)}else t.classList.add("miss")}function x(t,e,n){M(t,n),function(t){const e=Array.from(document.querySelector(".player").children);let n;for(let t=0;t<e.length;t++)if(e[t].classList.contains("hit")&&!e[t].classList.contains("sunk")){n=e[t];break}if(n){const s=e.indexOf(n);let o=s-10>=0,r=s+10<100,a=s-1>=0&&Math.floor((s-1)/10)===Math.floor(s/10),i=s+1<100&&Math.floor((s+1)/10)===Math.floor(s/10),c=10;if(o&&e[s-10].classList.contains("hit")||r&&e[s+10].classList.contains("hit")){for(;o&&e[s-c].classList.contains("hit");)c+=10,o=s-10>=0;if(o&&!e[s-c].classList.contains("miss"))return void M(e[s-c],t);for(c=10;r&&e[s+c].classList.contains("hit");)c+=10,r=s+10<100;if(r&&!e[s+c].classList.contains("miss"))return void M(e[s+c],t)}else if(a&&e[s-1].classList.contains("hit")||i&&e[s+1].classList.contains("hit")){for(c=1;a&&e[s-c].classList.contains("hit");)c+=1,a=s-1>=0&&Math.floor((s-1)/10)===Math.floor(s/10);if(a&&!e[s-c].classList.contains("miss"))return void M(e[s-c],t);for(c=1;i&&e[s+c].classList.contains("hit");)c+=1,i=s+1<100&&Math.floor((s+1)/10)===Math.floor(s/10);if(i&&!e[s+c].classList.contains("miss"))return void M(e[s+c],t)}if(o&&!e[s-10].classList.contains("hit")&&!e[s-10].classList.contains("miss"))return void M(e[s-10],t);if(r&&!e[s+10].classList.contains("hit")&&!e[s+10].classList.contains("miss"))return void M(e[s+10],t);if(a&&!e[s-1].classList.contains("hit")&&!e[s-1].classList.contains("miss"))return void M(e[s-1],t);if(i&&!e[s+1].classList.contains("hit")&&!e[s+1].classList.contains("miss"))return void M(e[s+1],t)}let s=Math.floor(100*Math.random());for(;e[s].classList.contains("hit")||e[s].classList.contains("miss");)s=Math.floor(100*Math.random());M(e[s],t)}(e)}!function(){const t=new L("player"),e=new L("computer");!function(t,e){const n=document.querySelector(".player"),s=document.querySelector(".computer");for(let t=0;t<100;t++){let t=document.createElement("div");t.classList.add("square"),n.appendChild(t)}for(let n=0;n<100;n++){let n=document.createElement("div");n.classList.add("square"),n.addEventListener("click",(()=>{n.classList.contains("hit")||n.classList.contains("miss")||x(n,t,e)})),s.appendChild(n)}}(t,e),e.gameboard.randomGeneration();const n=document.querySelector(".computer").children;for(let t=0;t<e.gameboard.state.length;t++)for(let s=0;s<e.gameboard.state[t].length;s++)e.gameboard.state[t][s]&&n[10*t+s].classList.add("ship");!function(t){const e=document.querySelector(".player").cloneNode(!0),n=e.children,s=document.querySelector(".start"),o=document.createElement("h1"),r=document.createElement("button");o.textContent="Place your carrier",r.textContent="Rotate";let a=!1;r.addEventListener("click",(()=>{a=!a}));const i=[new g(5),new g(4),new g(3),new g(3),new g(2)];let c=0;for(let e=0;e<n.length;e++)n[e].addEventListener("mouseover",(()=>{if(a)for(let t=0;t<i[c].length;t++)e+10*t<100&&n[e+10*t].classList.add("hover");else for(let t=0;t<i[c].length;t++)e+t<100&&Math.floor((e+t)/10)===Math.floor(e/10)&&n[e+t].classList.add("hover")})),n[e].addEventListener("mouseout",(()=>{if(c<5)if(a)for(let t=0;t<i[c].length+1;t++)e+10*t<100&&n[e+10*t].classList.remove("hover");else for(let t=0;t<i[c].length+1;t++)e+t<100&&n[e+t].classList.remove("hover")})),n[e].addEventListener("click",(()=>{const r=Math.floor((e+i[c].length-1)/10)===Math.floor(e/10),l=e+10*(i[c].length-1)<100;if(r&&!a||l&&a&&!n[e].classList.contains("ship")){for(let t=0;t<i[c].length;t++)if(a){if(n[e+10*t].classList.contains("ship"))return}else if(n[e+t].classList.contains("ship"))return;switch(b(i[c],t,e%10,Math.floor(e/10),a),c++,c){case 1:o.textContent="Place your battleship";break;case 2:o.textContent="Place your cruiser";break;case 3:o.textContent="Place your submarine";break;case 4:o.textContent="Place your destroyer"}c===i.length&&s.close()}}));s.appendChild(o),s.appendChild(r),s.appendChild(e),s.showModal()}(t)}()})();