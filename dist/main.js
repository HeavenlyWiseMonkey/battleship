(()=>{"use strict";var t={523:(t,e,n)=>{n.d(e,{A:()=>i});var s=n(601),o=n.n(s),r=n(314),a=n.n(r)()(o());a.push([t.id,".main {\n    font-family: sans-serif;\n    gap: 75px;\n}\n\n.main, .start[open] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.start {\n    gap: 10px;\n}\n\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    width: 400px;\n    height: 400px;\n    border: 1px solid black;\n}\n\n.square {\n    border: 1px solid black;\n}\n\n.ship {\n    background-color: navy;\n}\n\n.game {\n    display: flex;\n    gap: 100px;\n}\n\n.center {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: grey;\n}\n\n.sunk {\n    background-color: purple;\n}\n\n.hover {\n    background-color: green;\n}",""]);const i=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);s&&a[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),e.push(h))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},a=[],i=0;i<t.length;i++){var l=t[i],c=s.base?l[0]+s.base:l[0],h=r[c]||0,f="".concat(c," ").concat(h);r[c]=h+1;var d=n(f),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var p=o(u,s);s.byIndex=i,e.splice(i,0,{identifier:f,updater:p,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=s(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var i=n(r[a]);e[i].references--}for(var l=s(t,o),c=0;c<r.length;c++){var h=n(r[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}r=l}}},659:t=>{var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,o&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={id:s,exports:{}};return t[s](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var s=n(72),o=n.n(s),r=n(825),a=n.n(r),i=n(659),l=n.n(i),c=n(56),h=n.n(c),f=n(540),d=n.n(f),u=n(113),p=n.n(u),m=n(523),g={};g.styleTagTransform=p(),g.setAttributes=h(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;const v=class{constructor(t){this.length=t,this.hits=[],this.vertical=!1}hit(t){this.hits.push(t)}isSunk(){return this.length===this.hits.length}},y=class{constructor(){this.ships=5,this.state=[],this.init()}init(){let t=[];for(let e=0;e<10;e++){for(let e=0;e<10;e++)t.push(null);this.state.push(t),t=[]}}place(t,e,n,s){if(s)for(let s=n;s<n+t.length;s++)this.state[s][e]=t,this.state[s][e].vertical=!0;else for(let s=e;s<e+t.length;s++)this.state[n][s]=t}receiveAttack(t,e){if("object"==typeof this.state[e][t]&&this.state[e][t]&&!0!==this.state[e][t]){let n=0;if(t>0&&this.state[e][t-1]===this.state[e][t]&&!n){let s=1;for(;t-s>=0&&this.state[e][t-s]===this.state[e][t];)n++,s++}else if(e>0&&this.state[e-1][t]===this.state[e][t]){let s=1;for(;e-s>=0&&this.state[e-s][t]===this.state[e][t];)n++,s++}return this.state[e][t].hit(n),!0}return this.state[e][t]=!0,!1}outcome(t,e){return!("object"!=typeof this.state[e][t]||!0===this.state[e][t]||!this.state[e][t].isSunk()||(this.ships--,0))}randomGeneration(){const t=[new v(5),new v(4),new v(3),new v(3),new v(2)];for(let e=0;e<t.length;e++)if(Math.floor(2*Math.random())){let e=Math.floor(Math.random()*(100-10*(t[0].length-1))),n=!0;for(;n;){for(let n=0;n<t[0].length;n++)"object"==typeof this.state[Math.floor(e/10)+n][e%10]&&(e=Math.floor(Math.random()*(100-10*(t[0].length-1))));n=!1}for(let n=0;n<t[0].length;n++)this.state[Math.floor(e/10)+n][e%10]=t[0]}else{let e=Math.floor(99*Math.random()),n=!0;for(;n;){Math.floor(e/10)!==Math.floor((e+t[0].length)/10)&&Math.floor(99*Math.random());for(let n=0;n<t[0].length;n++)"object"==typeof this.state[Math.floor(e/10)][e%10+n]&&(e=Math.floor(99*Math.random()));n=!1}for(let n=0;n<t[0].length;n++)this.state[Math.floor(e/10)][e%10+n]=t[0]}}},L=class{constructor(t){this.owner=t,this.gameboard=new y}};function M(t,e,n,s,o){const r=document.querySelectorAll(`.${e.owner}`);e.gameboard.place(t,n,s,o),r.forEach((e=>{const r=e.children;if(o)for(let e=s;e<s+t.length;e++)r[10*e+n].classList.add("ship");else for(let e=n;e<n+t.length;e++)r[e+10*s].classList.add("ship")}))}function b(t,e){const n=t.parentElement,s=Array.from(n.children).indexOf(t),o=s%10,r=Math.floor(s/10);if(e.gameboard.receiveAttack(o,r)){t.classList.add("hit");const a=e.gameboard.state[r][o];if(e.gameboard.outcome(o,r)){const t=n.children;if(a.vertical){const e=s-10*a.hits[a.hits.length-1],n=s+10*(a.hits.length-a.hits[a.hits.length-1]);for(let s=e;s<n;s+=10)t[s].classList.add("sunk")}else{const e=s-a.hits[a.hits.length-1],n=s+a.hits.length-a.hits[a.hits.length-1];for(let s=e;s<n;s++)t[s].classList.add("sunk")}}e.gameboard.ships||function(t){const e=document.querySelector(".winner");"computer"===t.owner?e.textContent="player wins":e.textContent="computer wins"}(e)}else t.classList.add("miss")}function x(t,e,n){b(t,n),function(t){const e=Array.from(document.querySelector(".player").children);let n;for(let t=0;t<e.length;t++)if(e[t].classList.contains("hit")&&!e[t].classList.contains("sunk")){n=e[t];break}if(n){const s=e.indexOf(n);let o=s-10>=0,r=s+10<100,a=s-1>=0&&Math.floor((s-1)/10)===Math.floor(s/10),i=s+1<100&&Math.floor((s+1)/10)===Math.floor(s/10),l=10;if(o&&e[s-10].classList.contains("hit")||r&&e[s+10].classList.contains("hit")){for(;o&&e[s-l].classList.contains("hit");)l+=10,o=s-10>=0;if(o&&!e[s-l].classList.contains("miss"))return console.log("up algorithm"),void b(e[s-l],t);for(l=10;r&&e[s+l].classList.contains("hit");)l+=10,r=s+10<100;if(r&&!e[s+l].classList.contains("miss"))return console.log("down algorithm"),void b(e[s+l],t)}else if(a&&e[s-1].classList.contains("hit")||i&&e[s+1].classList.contains("hit")){for(l=1;a&&e[s-l].classList.contains("hit");)l+=1,a=s-1>=0&&Math.floor((s-1)/10)===Math.floor(s/10);if(a&&!e[s-l].classList.contains("miss"))return console.log("left algorithm"),void b(e[s-l],t);for(l=1;i&&e[s+l].classList.contains("hit");)l+=1,i=s+1<100&&Math.floor((s+1)/10)===Math.floor(s/10);if(i&&!e[s+l].classList.contains("miss"))return console.log("right algorithm"),void b(e[s+l],t)}if(o&&!e[s-10].classList.contains("hit")&&!e[s-10].classList.contains("miss"))return console.log("up"),void b(e[s-10],t);if(r&&!e[s+10].classList.contains("hit")&&!e[s+10].classList.contains("miss"))return console.log("down"),void b(e[s+10],t);if(a&&!e[s-1].classList.contains("hit")&&!e[s-1].classList.contains("miss"))return console.log("left"),void b(e[s-1],t);if(i&&!e[s+1].classList.contains("hit")&&!e[s+1].classList.contains("miss"))return console.log("right"),void b(e[s+1],t)}let s=Math.floor(100*Math.random());for(;e[s].classList.contains("hit")||e[s].classList.contains("miss");)s=Math.floor(100*Math.random());b(e[s],t)}(e)}!function(){const t=new L("player");!function(t,e){const n=document.querySelector(".player"),s=document.querySelector(".computer");for(let t=0;t<100;t++){let t=document.createElement("div");t.classList.add("square"),n.appendChild(t)}for(let n=0;n<100;n++){let n=document.createElement("div");n.classList.add("square"),n.addEventListener("click",(()=>{n.classList.contains("hit")||n.classList.contains("miss")||x(n,t,e)})),s.appendChild(n)}}(t,new L("computer")),function(t){const e=document.querySelector(".player").cloneNode(!0),n=e.children,s=document.querySelector(".start"),o=document.createElement("h1"),r=document.createElement("button");o.textContent="Place your carrier",r.textContent="Rotate";let a=!1;r.addEventListener("click",(()=>{a=!a}));const i=[new v(5),new v(4),new v(3),new v(3),new v(2)];let l=0;for(let e=0;e<n.length;e++)n[e].addEventListener("mouseover",(()=>{if(a)for(let t=0;t<i[l].length;t++)e+10*t<100&&n[e+10*t].classList.add("hover");else for(let t=0;t<i[l].length;t++)e+t<100&&Math.floor((e+t)/10)===Math.floor(e/10)&&n[e+t].classList.add("hover")})),n[e].addEventListener("mouseout",(()=>{if(l<5)if(a)for(let t=0;t<i[l].length+1;t++)e+10*t<100&&n[e+10*t].classList.remove("hover");else for(let t=0;t<i[l].length+1;t++)e+t<100&&n[e+t].classList.remove("hover")})),n[e].addEventListener("click",(()=>{const r=Math.floor((e+i[l].length-1)/10)===Math.floor(e/10),c=e+10*(i[l].length-1)<100;if(r&&!a||c&&a&&!n[e].classList.contains("ship")){for(let t=0;t<i[l].length;t++)if(a){if(n[e+10*t].classList.contains("ship"))return}else if(n[e+t].classList.contains("ship"))return;switch(M(i[l],t,e%10,Math.floor(e/10),a),l++,l){case 1:o.textContent="Place your battleship";break;case 2:o.textContent="Place your cruiser";break;case 3:o.textContent="Place your submarine";break;case 4:o.textContent="Place your destroyer"}l===i.length&&s.close()}}));s.appendChild(o),s.appendChild(r),s.appendChild(e),s.showModal()}(t)}()})();