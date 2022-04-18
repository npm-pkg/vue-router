/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var VueRouter=function(e,t){"use strict";const n="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,r=e=>n?Symbol(e):"_vr_"+e,o=r("rvlm"),a=r("rvd"),c=r("r"),s=r("rl"),i=r("rvl"),l="undefined"!=typeof window;const u=Object.assign;function f(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const p=()=>{},h=/\/$/;function d(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),i=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),c=t.slice(i,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function g(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!y(e[n],t[n]))return!1;return!0}function y(e,t){return Array.isArray(e)?b(e,t):Array.isArray(t)?b(t,e):e===t}function b(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var w,E;!function(e){e.pop="pop",e.push="push"}(w||(w={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(E||(E={}));function R(e){if(!e)if(l){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(h,"")}const k=/^[^#]+#/;function A(e,t){return e.replace(k,"#")+t}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function j(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function x(e,t){return(history.state?history.state.position-t:-1)+e}const C=new Map;let P=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}return m(n,e)+r+o}function L(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?O():null}}function S(e){const t=function(e){const{history:t,location:n}=window,r={value:$(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:P()+e+r;try{t[c?"replaceState":"pushState"](a,"",i),o.value=a}catch(e){console.error(e),n[c?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=u({},o.value,t.state,{forward:e,scroll:O()});a(c.current,c,!0),a(e,u({},L(r.value,e,null),{position:c.position+1},n),!1),r.value=e},replace:function(e,n){a(e,u({},t.state,L(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=R(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=$(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===i)return void(c=null);u=l?a.position-l.position:0}else r(s);o.forEach((e=>{e(n.value,i,{delta:u,type:w.pop,direction:u?u>0?E.forward:E.back:E.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(u({},e.state,{scroll:O()}),"")}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",i),{pauseListeners:function(){c=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=u({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:A.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function q(e){return"string"==typeof e||"symbol"==typeof e}const _={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},I=r("nf");var M;function U(e,t){return u(new Error,{type:e,[I]:!0},t)}function B(e,t){return e instanceof Error&&I in e&&(null==t||!!(e.type&t))}e.NavigationFailureType=void 0,(M=e.NavigationFailureType||(e.NavigationFailureType={}))[M.aborted=4]="aborted",M[M.cancelled=8]="cancelled",M[M.duplicated=16]="duplicated";const T="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},W=/[.+*?^${}()[\]/\\]/g;function F(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function K(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=F(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const V={type:0,value:""},H=/[a-zA-Z0-9_]/;function D(e,t,n){const r=function(e,t){const n=u({},G,t),r=[];let o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const c=t[r];let s=40+(n.sensitive?.25:0);if(0===c.type)r||(o+="/"),o+=c.value.replace(W,"\\$&"),s+=40;else if(1===c.type){const{value:e,repeatable:n,optional:i,regexp:l}=c;a.push({name:e,repeatable:n,optional:i});const u=l||T;if(u!==T){s+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=i&&t.length<2?`(?:/${f})`:"/"+f),i&&(f+="?"),o+=f,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,i=a in t?t[a]:"";if(Array.isArray(i)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[V]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:H.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}(e.path),n),o=u(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function N(e,t){const n=[],r=new Map;function o(e,n,r){const s=!r,i=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:J(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=X(t,e),f=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(u({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}))}let h,d;for(const t of f){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=D(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&e.name&&!z(h)&&a(e.name)),"children"in i){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{a(d)}:p}function a(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function c(e){let t=0;for(;t<n.length&&K(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Y(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!z(e)&&r.set(e.record.name,e)}return t=X({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw U(1,{location:e});c=o.record.name,s=u(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw U(1,{location:e,currentLocation:t});c=o.record.name,s=u({},t.params,e.params),a=o.stringify(s)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:c,path:a,params:s,matched:i,meta:Q(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function J(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function z(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Q(e){return e.reduce(((e,t)=>u(e,t.meta)),{})}function X(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Y(e,t){return t.children.some((t=>t===e||Y(e,t)))}const Z=/#/g,ee=/&/g,te=/\//g,ne=/=/g,re=/\?/g,oe=/\+/g,ae=/%5B/g,ce=/%5D/g,se=/%5E/g,ie=/%60/g,le=/%7B/g,ue=/%7C/g,fe=/%7D/g,pe=/%20/g;function he(e){return encodeURI(""+e).replace(ue,"|").replace(ae,"[").replace(ce,"]")}function de(e){return he(e).replace(oe,"%2B").replace(pe,"+").replace(Z,"%23").replace(ee,"%26").replace(ie,"`").replace(le,"{").replace(fe,"}").replace(se,"^")}function me(e){return null==e?"":function(e){return he(e).replace(Z,"%23").replace(re,"%3F")}(e).replace(te,"%2F")}function ve(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ge(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(oe," "),o=r.indexOf("="),a=ve(o<0?r:r.slice(0,o)),c=o<0?null:ve(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function ye(e){let t="";for(let n in e){const r=e[n];if(n=de(n).replace(ne,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&de(e))):[r&&de(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function be(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function we(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Ee(e,n,r){const o=()=>{e[n].delete(r)};t.onUnmounted(o),t.onDeactivated(o),t.onActivated((()=>{e[n].add(r)})),e[n].add(r)}function Re(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const i=e=>{var i;!1===e?s(U(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(U(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)))}))}function ke(e,t,r,o){const a=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=i)||"displayName"in c||"props"in c||"__vccOpts"in c){const n=(i.__vccOpts||i)[t];n&&a.push(Re(n,r,o,s,e))}else{let c=i();a.push((()=>c.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=(i=a).__esModule||n&&"Module"===i[Symbol.toStringTag]?a.default:a;var i;s.components[e]=c;const l=(c.__vccOpts||c)[t];return l&&Re(l,r,o,s,e)()}))))}}var c;return a}function Ae(e){const n=t.inject(c),r=t.inject(s),o=t.computed((()=>n.resolve(t.unref(e.to)))),a=t.computed((()=>{const{matched:e}=o.value,{length:t}=e,n=e[t-1],a=r.matched;if(!n||!a.length)return-1;const c=a.findIndex(v.bind(null,n));if(c>-1)return c;const s=xe(e[t-2]);return t>1&&xe(n)===s&&a[a.length-1].path!==s?a.findIndex(v.bind(null,e[t-2])):c})),i=t.computed((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(r.params,o.value.params))),l=t.computed((()=>a.value>-1&&a.value===r.matched.length-1&&g(r.params,o.value.params)));return{route:o,href:t.computed((()=>o.value.href)),isActive:i,isExactActive:l,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(r)?n[t.unref(e.replace)?"replace":"push"](t.unref(e.to)).catch(p):Promise.resolve()}}}function Oe(e){if("string"==typeof e&&e.startsWith("http"))return{isExternalLink:!0,href:e,isJavascript:!1};if("string"==typeof e&&e.startsWith("javascript:")||"string"==typeof e.path&&e.path.startsWith("javascript:"))return{isExternalLink:!1,href:e,isJavascript:!0};if("object"==typeof e&&"string"==typeof e.path&&e.path.startsWith("http")){return{isExternalLink:!0,href:("object"==typeof e.params?function(e){const{path:t,params:n}=e,r=Object.keys(n).reduce(((e,t)=>(e[t]=n[t],e)),{});return`${t.replace(/\:(\w+)/g,((e,t)=>{const n=r[t];return null==n?":"+t:Array.isArray(n)?n.map((e=>encodeURIComponent(e))).join("/"):encodeURIComponent(n)}))}`}(e):e.path)+("object"==typeof e.query?(t=e.query,"?"+Object.keys(t).map((e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.map((t=>`${encodeURIComponent(e)}=${encodeURIComponent(t)}`)).join("&"):`${encodeURIComponent(e)}=${encodeURIComponent(n)}`})).filter(Boolean).join("&")):"")+(e.hash?e.hash:""),isJavascript:!1}}var t;return{isExternalLink:!1,href:"",isJavascript:!1}}const je=t.defineComponent({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ae,setup(e,{slots:n}){const{options:r}=t.inject(c),{isExternalLink:o,href:a,isJavascript:s}=Oe(e.to),i=o||s?{href:a,isActive:!1,isExactActive:!1,route:"",navigate:()=>Promise.resolve()}:t.reactive(Ae(e)),l=t.computed((()=>({[Ce(e.activeClass,r.linkActiveClass,"router-link-active")]:i.isActive,[Ce(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive})));return()=>{const r=n.default&&n.default(i);return e.custom?r:t.h("a",o?{href:i.href,target:s?null:"_blank",class:l.value}:{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:l.value},r)}}});function xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ce=(e,t,n)=>null!=e?e:null!=t?t:n;function Pe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const $e=t.defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:n,slots:r}){const c=t.inject(i),s=t.computed((()=>e.route||c.value)),l=t.inject(a,0),f=t.computed((()=>s.value.matched[l]));t.provide(a,l+1),t.provide(o,f),t.provide(i,s);const p=t.ref();return t.watch((()=>[p.value,f.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&v(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=s.value,a=f.value,c=a&&a.components[e.name],i=e.name;if(!c)return Pe(r.default,{Component:c,route:o});const l=a.props[e.name],h=l?!0===l?o.params:"function"==typeof l?l(o):l:null,d=t.h(c,u({},h,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[i]=null)},ref:p}));return Pe(r.default,{Component:d,route:o})||d}}});function Le(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}return e.RouterLink=je,e.RouterView=$e,e.START_LOCATION=_,e.createMemoryHistory=function(e=""){let t=[],n=[""],r=0;function o(e){r++,r===n.length||n.splice(r),n.push(e)}const a={location:"",state:{},base:e=R(e),createHref:A.bind(null,e),replace(e){n.splice(r--,1),o(e)},push(e,t){o(e)},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}),destroy(){t=[],n=[""],r=0},go(e,o=!0){const a=this.location,c=e<0?E.back:E.forward;r=Math.max(0,Math.min(r+e,n.length-1)),o&&function(e,n,{direction:r,delta:o}){const a={direction:r,delta:o,type:w.pop};for(const r of t)r(e,n,a)}(this.location,a,{direction:c,delta:e})}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a},e.createRouter=function(e){const n=N(e.routes,e),r=e.parseQuery||ge,o=e.stringifyQuery||ye,a=e.history,h=we(),m=we(),y=we(),b=t.shallowRef(_);let E=_;l&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const R=f.bind(null,(e=>""+e)),k=f.bind(null,me),A=f.bind(null,ve);function P(e,t){if(t=u({},t||b.value),"string"==typeof e){const o=d(r,e,t.path),c=n.resolve({path:o.path},t),s=a.createHref(o.fullPath);return u(o,c,{params:A(c.params),hash:ve(o.hash),redirectedFrom:void 0,href:s})}let c;if("path"in e)c=u({},e,{path:d(r,e.path,t.path).path});else{const n=u({},e.params);for(const e in n)null==n[e]&&delete n[e];c=u({},e,{params:k(e.params)}),t.params=k(t.params)}const s=n.resolve(c,t),i=e.hash||"";s.params=R(A(s.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,u({},e,{hash:(f=i,he(f).replace(le,"{").replace(fe,"}").replace(se,"^")),path:s.path}));var f;const p=a.createHref(l);return u({fullPath:l,hash:i,query:o===ye?be(e.query):e.query||{}},s,{redirectedFrom:void 0,href:p})}function $(e){return"string"==typeof e?d(r,e,b.value.path):u({},e)}function L(e,t){if(E!==e)return U(8,{from:t,to:e})}function S(e){return M(e)}function I(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),u({query:e.query,hash:e.hash,params:e.params},r)}}function M(e,t){const n=E=P(e),r=b.value,a=e.state,c=e.force,s=!0===e.replace,i=I(n);if(i)return M(u($(i),{state:a,force:c,replace:s}),t||n);const l=n;let f;return l.redirectedFrom=t,!c&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&v(t.matched[r],n.matched[o])&&g(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(f=U(16,{to:l,from:r}),X(r,r,!0,!1)),(f?Promise.resolve(f):G(l,r)).catch((e=>B(e)?B(e,2)?e:Q(e):z(e,l,r))).then((e=>{if(e){if(B(e,2))return M(u($(e.to),{state:a,force:c,replace:s}),t||l)}else e=F(l,r,!0,s,a);return W(l,r,e),e}))}function T(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function G(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>v(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>v(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=ke(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Re(r,e,t))}));const c=T.bind(null,e,t);return n.push(c),Le(n).then((()=>{n=[];for(const r of h.list())n.push(Re(r,e,t));return n.push(c),Le(n)})).then((()=>{n=ke(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Re(r,e,t))}));return n.push(c),Le(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Re(o,e,t));else n.push(Re(r.beforeEnter,e,t));return n.push(c),Le(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ke(a,"beforeRouteEnter",e,t),n.push(c),Le(n)))).then((()=>{n=[];for(const r of m.list())n.push(Re(r,e,t));return n.push(c),Le(n)})).catch((e=>B(e,8)?e:Promise.reject(e)))}function W(e,t,n){for(const r of y.list())r(e,t,n)}function F(e,t,n,r,o){const c=L(e,t);if(c)return c;const s=t===_,i=l?history.state:{};n&&(r||s?a.replace(e.fullPath,u({scroll:s&&i&&i.scroll},o)):a.push(e.fullPath,o)),b.value=e,X(e,t,n,s),Q()}let K;function V(){K=a.listen(((e,t,n)=>{const r=P(e),o=I(r);if(o)return void M(u(o,{replace:!0}),r).catch(p);E=r;const c=b.value;var s,i;l&&(s=x(c.fullPath,n.delta),i=O(),C.set(s,i)),G(r,c).catch((e=>B(e,12)?e:B(e,2)?(M(e.to,r).then((e=>{B(e,20)&&!n.delta&&n.type===w.pop&&a.go(-1,!1)})).catch(p),Promise.reject()):(n.delta&&a.go(-n.delta,!1),z(e,r,c)))).then((e=>{(e=e||F(r,c,!1))&&(n.delta?a.go(-n.delta,!1):n.type===w.pop&&B(e,20)&&a.go(-1,!1)),W(r,c,e)})).catch(p)}))}let H,D=we(),J=we();function z(e,t,n){Q(e);const r=J.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Q(e){return H||(H=!e,V(),D.list().forEach((([t,n])=>e?n(e):t())),D.reset()),e}function X(n,r,o,a){const{scrollBehavior:c}=e;if(!l||!c)return Promise.resolve();const s=!o&&function(e){const t=C.get(e);return C.delete(e),t}(x(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return t.nextTick().then((()=>c(n,r,s))).then((e=>e&&j(e))).catch((e=>z(e,n,r)))}const Y=e=>a.go(e);let Z;const ee=new Set,te={currentRoute:b,addRoute:function(e,t){let r,o;return q(e)?(r=n.getRecordMatcher(e),o=t):o=e,n.addRoute(o,r)},removeRoute:function(e){const t=n.getRecordMatcher(e);t&&n.removeRoute(t)},hasRoute:function(e){return!!n.getRecordMatcher(e)},getRoutes:function(){return n.getRoutes().map((e=>e.record))},resolve:P,options:e,push:S,replace:function(e){return S(u($(e),{replace:!0}))},go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:h.add,beforeResolve:m.add,afterEach:y.add,onError:J.add,isReady:function(){return H&&b.value!==_?Promise.resolve():new Promise(((e,t)=>{D.add([e,t])}))},install(e){e.component("RouterLink",je),e.component("RouterView",$e),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t.unref(b)}),l&&!Z&&b.value===_&&(Z=!0,S(a.location).catch((e=>{})));const n={};for(const e in _)n[e]=t.computed((()=>b.value[e]));e.provide(c,this),e.provide(s,t.reactive(n)),e.provide(i,b);const r=e.unmount;ee.add(e),e.unmount=function(){ee.delete(e),ee.size<1&&(E=_,K&&K(),b.value=_,Z=!1,H=!1),r()}}};return te},e.createRouterMatcher=N,e.createWebHashHistory=function(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),S(e)},e.createWebHistory=S,e.isNavigationFailure=B,e.matchedRouteKey=o,e.onBeforeRouteLeave=function(e){const n=t.inject(o,{}).value;n&&Ee(n,"leaveGuards",e)},e.onBeforeRouteUpdate=function(e){const n=t.inject(o,{}).value;n&&Ee(n,"updateGuards",e)},e.parseQuery=ge,e.routeLocationKey=s,e.routerKey=c,e.routerViewLocationKey=i,e.stringifyQuery=ye,e.useLink=Ae,e.useRoute=function(){return t.inject(s)},e.useRouter=function(){return t.inject(c)},e.viewDepthKey=a,Object.defineProperty(e,"__esModule",{value:!0}),e}({},Vue);