function LE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ME(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sg={exports:{}},yl={},Cg={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),FE=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),WE=Symbol.for("react.strict_mode"),jE=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),BE=Symbol.for("react.context"),VE=Symbol.for("react.forward_ref"),$E=Symbol.for("react.suspense"),HE=Symbol.for("react.memo"),GE=Symbol.for("react.lazy"),Bf=Symbol.iterator;function KE(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var Tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Pg={};function xi(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Tg}xi.prototype.isReactComponent={};xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rg(){}Rg.prototype=xi.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Tg}var Md=Ld.prototype=new Rg;Md.constructor=Ld;kg(Md,xi.prototype);Md.isPureReactComponent=!0;var Vf=Array.isArray,Ng=Object.prototype.hasOwnProperty,Fd={current:null},Ag={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ng.call(e,r)&&!Ag.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:go,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function qE(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function QE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $f=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QE(""+t.key):e.toString(36)}function la(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case FE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_u(o,0):r,Vf(i)?(n="",t!=null&&(n=t.replace($f,"$&/")+"/"),la(i,e,n,"",function(u){return u})):i!=null&&(Ud(i)&&(i=qE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($f,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_u(s,a);o+=la(s,e,n,l,i)}else if(l=KE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_u(s,a++),o+=la(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var r=[],i=0;return la(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},ua={transition:null},JE={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Fd};z.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=xi;z.Fragment=UE;z.Profiler=jE;z.PureComponent=Ld;z.StrictMode=WE;z.Suspense=$E;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ng.call(e,l)&&!Ag.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:go,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:BE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zE,_context:t},t.Consumer=t};z.createElement=Og;z.createFactory=function(t){var e=Og.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:VE,render:t}};z.isValidElement=Ud;z.lazy=function(t){return{$$typeof:GE,_payload:{_status:-1,_result:t},_init:YE}};z.memo=function(t,e){return{$$typeof:HE,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=ua.transition;ua.transition={};try{t()}finally{ua.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return ze.current.useCallback(t,e)};z.useContext=function(t){return ze.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};z.useEffect=function(t,e){return ze.current.useEffect(t,e)};z.useId=function(){return ze.current.useId()};z.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return ze.current.useMemo(t,e)};z.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};z.useRef=function(t){return ze.current.useRef(t)};z.useState=function(t){return ze.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return ze.current.useTransition()};z.version="18.2.0";Cg.exports=z;var k=Cg.exports;const xg=ME(k),XE=LE({__proto__:null,default:xg},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE=k,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)n0.call(e,r)&&!i0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:e0,type:t,key:s,ref:o,props:i,_owner:r0.current}}yl.Fragment=t0;yl.jsx=bg;yl.jsxs=bg;Sg.exports=yl;var T=Sg.exports,ac={},Dg={exports:{}},ut={},Lg={exports:{}},Mg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var U=R.length;R.push(L);e:for(;0<U;){var ce=U-1>>>1,ye=R[ce];if(0<i(ye,L))R[ce]=L,R[U]=ye,U=ce;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],U=R.pop();if(U!==L){R[0]=U;e:for(var ce=0,ye=R.length,jo=ye>>>1;ce<jo;){var or=2*(ce+1)-1,gu=R[or],ar=or+1,zo=R[ar];if(0>i(gu,U))ar<ye&&0>i(zo,gu)?(R[ce]=zo,R[ar]=U,ce=ar):(R[ce]=gu,R[or]=U,ce=or);else if(ar<ye&&0>i(zo,U))R[ce]=zo,R[ar]=U,ce=ar;else break e}}return L}function i(R,L){var U=R.sortIndex-L.sortIndex;return U!==0?U:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function y(R){if(v=!1,m(R),!_)if(n(l)!==null)_=!0,pu(C);else{var L=n(u);L!==null&&mu(y,L.startTime-R)}}function C(R,L){_=!1,v&&(v=!1,p(O),O=-1),g=!0;var U=h;try{for(m(L),c=n(l);c!==null&&(!(c.expirationTime>L)||R&&!St());){var ce=c.callback;if(typeof ce=="function"){c.callback=null,h=c.priorityLevel;var ye=ce(c.expirationTime<=L);L=t.unstable_now(),typeof ye=="function"?c.callback=ye:c===n(l)&&r(l),m(L)}else r(l);c=n(l)}if(c!==null)var jo=!0;else{var or=n(u);or!==null&&mu(y,or.startTime-L),jo=!1}return jo}finally{c=null,h=U,g=!1}}var N=!1,A=null,O=-1,J=5,j=-1;function St(){return!(t.unstable_now()-j<J)}function Hi(){if(A!==null){var R=t.unstable_now();j=R;var L=!0;try{L=A(!0,R)}finally{L?Gi():(N=!1,A=null)}}else N=!1}var Gi;if(typeof f=="function")Gi=function(){f(Hi)};else if(typeof MessageChannel<"u"){var zf=new MessageChannel,DE=zf.port2;zf.port1.onmessage=Hi,Gi=function(){DE.postMessage(null)}}else Gi=function(){S(Hi,0)};function pu(R){A=R,N||(N=!0,Gi())}function mu(R,L){O=S(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,pu(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var U=h;h=L;try{return R()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=h;h=R;try{return L()}finally{h=U}},t.unstable_scheduleCallback=function(R,L,U){var ce=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ce+U:ce):U=ce,R){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=U+ye,R={id:d++,callback:L,priorityLevel:R,startTime:U,expirationTime:ye,sortIndex:-1},U>ce?(R.sortIndex=U,e(u,R),n(l)===null&&R===n(u)&&(v?(p(O),O=-1):v=!0,mu(y,U-ce))):(R.sortIndex=ye,e(l,R),_||g||(_=!0,pu(C))),R},t.unstable_shouldYield=St,t.unstable_wrapCallback=function(R){var L=h;return function(){var U=h;h=L;try{return R.apply(this,arguments)}finally{h=U}}}})(Mg);Lg.exports=Mg;var s0=Lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=k,ot=s0;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ug=new Set,Os={};function Fr(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Os[t]=e,t=0;t<e.length;t++)Ug.add(e[t])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hf={},Gf={};function a0(t){return lc.call(Gf,t)?!0:lc.call(Hf,t)?!1:o0.test(t)?Gf[t]=!0:(Hf[t]=!0,!1)}function l0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u0(t,e,n,r){if(e===null||typeof e>"u"||l0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,jd);Oe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,jd);Oe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,jd);Oe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u0(e,n,i,r)&&(n=null),r||i===null?a0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function Ki(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,vu;function ls(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var yu=!1;function wu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ls(t):""}function c0(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case qr:return"Portal";case uc:return"Profiler";case Bd:return"StrictMode";case cc:return"Suspense";case dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Wg:return(t._context.displayName||"Context")+".Provider";case Vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:hc(t.type)||"Memo";case wn:e=t._payload,t=t._init;try{return hc(t(e))}catch{}}return null}function d0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h0(t){var e=Bg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=h0(t))}function Vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fc(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $g(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function pc(t,e){$g(t,e);var n=Bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&mc(t,e.type,Bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mc(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(us(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bn(n)}}function Hg(t,e){var n=Bn(e.value),r=Bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(t){f0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ms[e]=ms[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ms.hasOwnProperty(t)&&ms[t]?(""+e).trim():e+"px"}function Qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var p0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(p0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,li=null,ui=null;function Xf(t){if(t=yo(t)){if(typeof Ec!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Cl(e),Ec(t.stateNode,t.type,e))}}function Yg(t){li?ui?ui.push(t):ui=[t]:li=t}function Jg(){if(li){var t=li,e=ui;if(ui=li=null,Xf(t),e)for(t=0;t<e.length;t++)Xf(e[t])}}function Xg(t,e){return t(e)}function Zg(){}var Eu=!1;function e_(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return Xg(t,e,n)}finally{Eu=!1,(li!==null||ui!==null)&&(Zg(),Jg())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Ic=!1;if(un)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{Ic=!1}function m0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var gs=!1,Ta=null,ka=!1,Sc=null,g0={onError:function(t){gs=!0,Ta=t}};function _0(t,e,n,r,i,s,o,a,l){gs=!1,Ta=null,m0.apply(g0,arguments)}function v0(t,e,n,r,i,s,o,a,l){if(_0.apply(this,arguments),gs){if(gs){var u=Ta;gs=!1,Ta=null}else throw Error(w(198));ka||(ka=!0,Sc=u)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zf(t){if(Ur(t)!==t)throw Error(w(188))}function y0(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zf(i),t;if(s===r)return Zf(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function n_(t){return t=y0(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var i_=ot.unstable_scheduleCallback,ep=ot.unstable_cancelCallback,w0=ot.unstable_shouldYield,E0=ot.unstable_requestPaint,de=ot.unstable_now,I0=ot.unstable_getCurrentPriorityLevel,Gd=ot.unstable_ImmediatePriority,s_=ot.unstable_UserBlockingPriority,Pa=ot.unstable_NormalPriority,S0=ot.unstable_LowPriority,o_=ot.unstable_IdlePriority,wl=null,$t=null;function C0(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:P0,T0=Math.log,k0=Math.LN2;function P0(t){return t>>>=0,t===0?32:31-(T0(t)/k0|0)|0}var Go=64,Ko=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ra(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=cs(a):(s&=o,s!==0&&(r=cs(s)))}else o=n&~i,o!==0?r=cs(o):s!==0&&(r=cs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-At(e),i=1<<n,r|=t[n],e&=~i;return r}function R0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-At(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=R0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=Go;return Go<<=1,!(Go&4194240)&&(Go=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-At(e),t[e]=n}function A0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-At(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-At(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function l_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,qd,c_,d_,h_,Tc=!1,qo=[],An=null,On=null,xn=null,Ds=new Map,Ls=new Map,In=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yo(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x0(t,e,n,r,i){switch(e){case"focusin":return An=Qi(An,t,e,n,r,i),!0;case"dragenter":return On=Qi(On,t,e,n,r,i),!0;case"mouseover":return xn=Qi(xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ds.set(s,Qi(Ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Qi(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function f_(t){var e=hr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,h_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wc=r,n.target.dispatchEvent(r),wc=null}else return e=yo(n),e!==null&&qd(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){ca(t)&&n.delete(e)}function b0(){Tc=!1,An!==null&&ca(An)&&(An=null),On!==null&&ca(On)&&(On=null),xn!==null&&ca(xn)&&(xn=null),Ds.forEach(np),Ls.forEach(np)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,b0)))}function Ms(t){function e(i){return Yi(i,t)}if(0<qo.length){Yi(qo[0],t);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(An!==null&&Yi(An,t),On!==null&&Yi(On,t),xn!==null&&Yi(xn,t),Ds.forEach(e),Ls.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&In.shift()}var ci=mn.ReactCurrentBatchConfig,Na=!0;function D0(t,e,n,r){var i=G,s=ci.transition;ci.transition=null;try{G=1,Qd(t,e,n,r)}finally{G=i,ci.transition=s}}function L0(t,e,n,r){var i=G,s=ci.transition;ci.transition=null;try{G=4,Qd(t,e,n,r)}finally{G=i,ci.transition=s}}function Qd(t,e,n,r){if(Na){var i=kc(t,e,n,r);if(i===null)xu(t,e,r,Aa,n),tp(t,r);else if(x0(i,t,e,n,r))r.stopPropagation();else if(tp(t,r),e&4&&-1<O0.indexOf(t)){for(;i!==null;){var s=yo(i);if(s!==null&&u_(s),s=kc(t,e,n,r),s===null&&xu(t,e,r,Aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xu(t,e,r,null,n)}}var Aa=null;function kc(t,e,n,r){if(Aa=null,t=Hd(r),t=hr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Aa=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I0()){case Gd:return 1;case s_:return 4;case Pa:case S0:return 16;case o_:return 536870912;default:return 16}default:return 16}}var Cn=null,Yd=null,da=null;function m_(){if(da)return da;var t,e=Yd,n=e.length,r,i="value"in Cn?Cn.value:Cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return da=i.slice(t,1<r?1-r:void 0)}function ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function rp(){return!1}function ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:rp,this.isPropagationStopped=rp,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=ct(bi),vo=se({},bi,{view:0,detail:0}),M0=ct(vo),Su,Cu,Ji,El=se({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(Su=t.screenX-Ji.screenX,Cu=t.screenY-Ji.screenY):Cu=Su=0,Ji=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),ip=ct(El),F0=se({},El,{dataTransfer:0}),U0=ct(F0),W0=se({},vo,{relatedTarget:0}),Tu=ct(W0),j0=se({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=ct(j0),B0=se({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V0=ct(B0),$0=se({},bi,{data:0}),sp=ct($0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function Xd(){return q0}var Q0=se({},vo,{key:function(t){if(t.key){var e=H0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y0=ct(Q0),J0=se({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=ct(J0),X0=se({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),Z0=ct(X0),eI=se({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),tI=ct(eI),nI=se({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rI=ct(nI),iI=[9,13,27,32],Zd=un&&"CompositionEvent"in window,_s=null;un&&"documentMode"in document&&(_s=document.documentMode);var sI=un&&"TextEvent"in window&&!_s,g_=un&&(!Zd||_s&&8<_s&&11>=_s),ap=" ",lp=!1;function __(t,e){switch(t){case"keyup":return iI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function oI(t,e){switch(t){case"compositionend":return v_(e);case"keypress":return e.which!==32?null:(lp=!0,ap);case"textInput":return t=e.data,t===ap&&lp?null:t;default:return null}}function aI(t,e){if(Yr)return t==="compositionend"||!Zd&&__(t,e)?(t=m_(),da=Yd=Cn=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var lI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lI[t.type]:e==="textarea"}function y_(t,e,n,r){Yg(r),e=Oa(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vs=null,Fs=null;function uI(t){A_(t,0)}function Il(t){var e=Zr(t);if(Vg(e))return t}function cI(t,e){if(t==="change")return e}var w_=!1;if(un){var ku;if(un){var Pu="oninput"in document;if(!Pu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),Pu=typeof cp.oninput=="function"}ku=Pu}else ku=!1;w_=ku&&(!document.documentMode||9<document.documentMode)}function dp(){vs&&(vs.detachEvent("onpropertychange",E_),Fs=vs=null)}function E_(t){if(t.propertyName==="value"&&Il(Fs)){var e=[];y_(e,Fs,t,Hd(t)),e_(uI,e)}}function dI(t,e,n){t==="focusin"?(dp(),vs=e,Fs=n,vs.attachEvent("onpropertychange",E_)):t==="focusout"&&dp()}function hI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(Fs)}function fI(t,e){if(t==="click")return Il(e)}function pI(t,e){if(t==="input"||t==="change")return Il(e)}function mI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:mI;function Us(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lc.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,e){var n=hp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function I_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gI(t){var e=S_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I_(n.ownerDocument.documentElement,n)){if(r!==null&&eh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fp(n,s);var o=fp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _I=un&&"documentMode"in document&&11>=document.documentMode,Jr=null,Pc=null,ys=null,Rc=!1;function pp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rc||Jr==null||Jr!==Ca(r)||(r=Jr,"selectionStart"in r&&eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ys&&Us(ys,r)||(ys=r,r=Oa(Pc,"onSelect"),0<r.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jr)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Ru={},C_={};un&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Sl(t){if(Ru[t])return Ru[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return Ru[t]=e[n];return t}var T_=Sl("animationend"),k_=Sl("animationiteration"),P_=Sl("animationstart"),R_=Sl("transitionend"),N_=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){N_.set(t,e),Fr(e,[t])}for(var Nu=0;Nu<mp.length;Nu++){var Au=mp[Nu],vI=Au.toLowerCase(),yI=Au[0].toUpperCase()+Au.slice(1);Xn(vI,"on"+yI)}Xn(T_,"onAnimationEnd");Xn(k_,"onAnimationIteration");Xn(P_,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(R_,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function gp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,v0(r,e,void 0,t),t.currentTarget=null}function A_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;gp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;gp(i,a,u),s=l}}}if(ka)throw t=Sc,ka=!1,Sc=null,t}function X(t,e){var n=e[bc];n===void 0&&(n=e[bc]=new Set);var r=t+"__bubble";n.has(r)||(O_(e,t,2,!1),n.add(r))}function Ou(t,e,n){var r=0;e&&(r|=4),O_(n,t,r,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Jo]){t[Jo]=!0,Ug.forEach(function(n){n!=="selectionchange"&&(wI.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,Ou("selectionchange",!1,e))}}function O_(t,e,n,r){switch(p_(e)){case 1:var i=D0;break;case 4:i=L0;break;default:i=Qd}n=i.bind(null,e,n,t),i=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}e_(function(){var u=s,d=Hd(n),c=[];e:{var h=N_.get(t);if(h!==void 0){var g=Jd,_=t;switch(t){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":g=Y0;break;case"focusin":_="focus",g=Tu;break;case"focusout":_="blur",g=Tu;break;case"beforeblur":case"afterblur":g=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Z0;break;case T_:case k_:case P_:g=z0;break;case R_:g=tI;break;case"scroll":g=M0;break;case"wheel":g=rI;break;case"copy":case"cut":case"paste":g=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=op}var v=(e&4)!==0,S=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=bs(f,p),y!=null&&v.push(js(f,y,m)))),S)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==wc&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[cn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?hr(_):null,_!==null&&(S=Ur(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=ip,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=op,y="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?h:Zr(g),m=_==null?h:Zr(_),h=new v(y,f+"leave",g,n,d),h.target=S,h.relatedTarget=m,y=null,hr(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=S,y=v),S=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=Hr(m))f++;for(m=0,y=p;y;y=Hr(y))m++;for(;0<f-m;)v=Hr(v),f--;for(;0<m-f;)p=Hr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Hr(v),p=Hr(p)}v=null}else v=null;g!==null&&_p(c,h,g,v,!1),_!==null&&S!==null&&_p(c,S,_,v,!0)}}e:{if(h=u?Zr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=cI;else if(up(h))if(w_)C=pI;else{C=hI;var N=dI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=fI);if(C&&(C=C(t,u))){y_(c,C,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&mc(h,"number",h.value)}switch(N=u?Zr(u):window,t){case"focusin":(up(N)||N.contentEditable==="true")&&(Jr=N,Pc=u,ys=null);break;case"focusout":ys=Pc=Jr=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,pp(c,n,d);break;case"selectionchange":if(_I)break;case"keydown":case"keyup":pp(c,n,d)}var A;if(Zd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Yr?__(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(g_&&n.locale!=="ko"&&(Yr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Yr&&(A=m_()):(Cn=d,Yd="value"in Cn?Cn.value:Cn.textContent,Yr=!0)),N=Oa(u,O),0<N.length&&(O=new sp(O,t,null,n,d),c.push({event:O,listeners:N}),A?O.data=A:(A=v_(n),A!==null&&(O.data=A)))),(A=sI?oI(t,n):aI(t,n))&&(u=Oa(u,"onBeforeInput"),0<u.length&&(d=new sp("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=A))}A_(c,e)})}function js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(js(t,s,i)),s=bs(t,e),s!=null&&r.push(js(t,s,i))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bs(n,s),l!=null&&o.unshift(js(n,l,a))):i||(l=bs(n,s),l!=null&&o.push(js(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EI=/\r\n?/g,II=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(EI,`
`).replace(II,"")}function Xo(t,e,n){if(e=vp(e),vp(t)!==e&&n)throw Error(w(425))}function xa(){}var Nc=null,Ac=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,SI=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,CI=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(TI)}:xc;function TI(t){setTimeout(function(){throw t})}function bu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ms(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Di,zs="__reactProps$"+Di,cn="__reactContainer$"+Di,bc="__reactEvents$"+Di,kI="__reactListeners$"+Di,PI="__reactHandles$"+Di;function hr(t){var e=t[Ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cn]||n[Ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wp(t);t!==null;){if(n=t[Ut])return n;t=wp(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Ut]||t[cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Cl(t){return t[zs]||null}var Dc=[],ei=-1;function Zn(t){return{current:t}}function Z(t){0>ei||(t.current=Dc[ei],Dc[ei]=null,ei--)}function Q(t,e){ei++,Dc[ei]=t.current,t.current=e}var Vn={},Fe=Zn(Vn),qe=Zn(!1),Cr=Vn;function yi(t,e){var n=t.type.contextTypes;if(!n)return Vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function ba(){Z(qe),Z(Fe)}function Ep(t,e,n){if(Fe.current!==Vn)throw Error(w(168));Q(Fe,e),Q(qe,n)}function x_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,d0(t)||"Unknown",i));return se({},n,r)}function Da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,Cr=Fe.current,Q(Fe,t),Q(qe,qe.current),!0}function Ip(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=x_(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,Z(qe),Z(Fe),Q(Fe,t)):Z(qe),Q(qe,n)}var Xt=null,Tl=!1,Du=!1;function b_(t){Xt===null?Xt=[t]:Xt.push(t)}function RI(t){Tl=!0,b_(t)}function er(){if(!Du&&Xt!==null){Du=!0;var t=0,e=G;try{var n=Xt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,Tl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(t+1)),i_(Gd,er),i}finally{G=e,Du=!1}}return null}var ti=[],ni=0,La=null,Ma=0,dt=[],ht=0,Tr=null,Zt=1,en="";function lr(t,e){ti[ni++]=Ma,ti[ni++]=La,La=t,Ma=e}function D_(t,e,n){dt[ht++]=Zt,dt[ht++]=en,dt[ht++]=Tr,Tr=t;var r=Zt;t=en;var i=32-At(r)-1;r&=~(1<<i),n+=1;var s=32-At(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zt=1<<32-At(e)+i|n<<i|r,en=s+t}else Zt=1<<s|n<<i|r,en=t}function th(t){t.return!==null&&(lr(t,1),D_(t,1,0))}function nh(t){for(;t===La;)La=ti[--ni],ti[ni]=null,Ma=ti[--ni],ti[ni]=null;for(;t===Tr;)Tr=dt[--ht],dt[ht]=null,en=dt[--ht],dt[ht]=null,Zt=dt[--ht],dt[ht]=null}var st=null,rt=null,ee=!1,Rt=null;function L_(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,rt=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,rt=null,!0):!1;default:return!1}}function Lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(ee){var e=rt;if(e){var n=e;if(!Sp(t,e)){if(Lc(t))throw Error(w(418));e=bn(n.nextSibling);var r=st;e&&Sp(t,e)?L_(r,n):(t.flags=t.flags&-4097|2,ee=!1,st=t)}}else{if(Lc(t))throw Error(w(418));t.flags=t.flags&-4097|2,ee=!1,st=t}}}function Cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Zo(t){if(t!==st)return!1;if(!ee)return Cp(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=rt)){if(Lc(t))throw M_(),Error(w(418));for(;e;)L_(t,e),e=bn(e.nextSibling)}if(Cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rt=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rt=null}}else rt=st?bn(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=rt;t;)t=bn(t.nextSibling)}function wi(){rt=st=null,ee=!1}function rh(t){Rt===null?Rt=[t]:Rt.push(t)}var NI=mn.ReactCurrentBatchConfig;function kt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fa=Zn(null),Ua=null,ri=null,ih=null;function sh(){ih=ri=Ua=null}function oh(t){var e=Fa.current;Z(Fa),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function di(t,e){Ua=t,ih=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(ih!==t)if(t={context:t,memoizedValue:e,next:null},ri===null){if(Ua===null)throw Error(w(308));ri=t,Ua.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return e}var fr=null;function ah(t){fr===null?fr=[t]:fr.push(t)}function F_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ah(e)):(n.next=i.next,i.next=n),e.interleaved=n,dn(t,r)}function dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var En=!1;function lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dn(t,n)}return i=r.interleaved,i===null?(e.next=e,ah(r)):(e.next=i.next,i.next=e),r.interleaved=e,dn(t,n)}function fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kd(t,n)}}function Tp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wa(t,e,n,r){var i=t.updateQueue;En=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=se({},c,h);break e;case 2:En=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=c}}function kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var W_=new Fg.Component().refs;function Uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=Mn(t),s=sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Ot(e,t,i,r),fa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=Mn(t),s=sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Ot(e,t,i,r),fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=Mn(t),i=sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dn(t,i,r),e!==null&&(Ot(e,t,r,n),fa(e,t,r))}};function Pp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Us(n,r)||!Us(i,s):!0}function j_(t,e,n){var r=!1,i=Vn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=Qe(e)?Cr:Fe.current,r=e.contextTypes,s=(r=r!=null)?yi(t,i):Vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=W_,lh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=Qe(e)?Cr:Fe.current,i.context=yi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),Wa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===W_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function z_(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=zu(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var C=m.type;return C===Qr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&Np(C)===f.type)?(y=i(f,m.props),y.ref=Xi(p,f,m),y.return=p,y):(y=ya(m.type,m.key,m.props,null,p.mode,y),y.ref=Xi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Bu(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,C){return f===null||f.tag!==7?(f=vr(m,p.mode,y,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vo:return m=ya(f.type,f.key,f.props,null,p.mode,m),m.ref=Xi(p,null,f),m.return=p,m;case qr:return f=Bu(f,p.mode,m),f.return=p,f;case wn:var y=f._init;return c(p,y(f._payload),m)}if(us(f)||Ki(f))return f=vr(f,p.mode,m,null),f.return=p,f;ea(p,f)}return null}function h(p,f,m,y){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vo:return m.key===C?l(p,f,m,y):null;case qr:return m.key===C?u(p,f,m,y):null;case wn:return C=m._init,h(p,f,C(m._payload),y)}if(us(m)||Ki(m))return C!==null?null:d(p,f,m,y,null);ea(p,m)}return null}function g(p,f,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,C);case qr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,C);case wn:var N=y._init;return g(p,f,m,N(y._payload),C)}if(us(y)||Ki(y))return p=p.get(m)||null,d(f,p,y,C,null);ea(f,y)}return null}function _(p,f,m,y){for(var C=null,N=null,A=f,O=f=0,J=null;A!==null&&O<m.length;O++){A.index>O?(J=A,A=null):J=A.sibling;var j=h(p,A,m[O],y);if(j===null){A===null&&(A=J);break}t&&A&&j.alternate===null&&e(p,A),f=s(j,f,O),N===null?C=j:N.sibling=j,N=j,A=J}if(O===m.length)return n(p,A),ee&&lr(p,O),C;if(A===null){for(;O<m.length;O++)A=c(p,m[O],y),A!==null&&(f=s(A,f,O),N===null?C=A:N.sibling=A,N=A);return ee&&lr(p,O),C}for(A=r(p,A);O<m.length;O++)J=g(A,p,O,m[O],y),J!==null&&(t&&J.alternate!==null&&A.delete(J.key===null?O:J.key),f=s(J,f,O),N===null?C=J:N.sibling=J,N=J);return t&&A.forEach(function(St){return e(p,St)}),ee&&lr(p,O),C}function v(p,f,m,y){var C=Ki(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var N=C=null,A=f,O=f=0,J=null,j=m.next();A!==null&&!j.done;O++,j=m.next()){A.index>O?(J=A,A=null):J=A.sibling;var St=h(p,A,j.value,y);if(St===null){A===null&&(A=J);break}t&&A&&St.alternate===null&&e(p,A),f=s(St,f,O),N===null?C=St:N.sibling=St,N=St,A=J}if(j.done)return n(p,A),ee&&lr(p,O),C;if(A===null){for(;!j.done;O++,j=m.next())j=c(p,j.value,y),j!==null&&(f=s(j,f,O),N===null?C=j:N.sibling=j,N=j);return ee&&lr(p,O),C}for(A=r(p,A);!j.done;O++,j=m.next())j=g(A,p,O,j.value,y),j!==null&&(t&&j.alternate!==null&&A.delete(j.key===null?O:j.key),f=s(j,f,O),N===null?C=j:N.sibling=j,N=j);return t&&A.forEach(function(Hi){return e(p,Hi)}),ee&&lr(p,O),C}function S(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Qr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vo:e:{for(var C=m.key,N=f;N!==null;){if(N.key===C){if(C=m.type,C===Qr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&Np(C)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=Xi(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Qr?(f=vr(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=ya(m.type,m.key,m.props,null,p.mode,y),y.ref=Xi(p,f,m),y.return=p,p=y)}return o(p);case qr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Bu(m,p.mode,y),f.return=p,p=f}return o(p);case wn:return N=m._init,S(p,f,N(m._payload),y)}if(us(m))return _(p,f,m,y);if(Ki(m))return v(p,f,m,y);ea(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=zu(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return S}var Ei=z_(!0),B_=z_(!1),wo={},Ht=Zn(wo),Bs=Zn(wo),Vs=Zn(wo);function pr(t){if(t===wo)throw Error(w(174));return t}function uh(t,e){switch(Q(Vs,e),Q(Bs,t),Q(Ht,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_c(e,t)}Z(Ht),Q(Ht,e)}function Ii(){Z(Ht),Z(Bs),Z(Vs)}function V_(t){pr(Vs.current);var e=pr(Ht.current),n=_c(e,t.type);e!==n&&(Q(Bs,t),Q(Ht,n))}function ch(t){Bs.current===t&&(Z(Ht),Z(Bs))}var ne=Zn(0);function ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function dh(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var pa=mn.ReactCurrentDispatcher,Mu=mn.ReactCurrentBatchConfig,kr=0,ie=null,ge=null,Ee=null,za=!1,ws=!1,$s=0,AI=0;function be(){throw Error(w(321))}function hh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function fh(t,e,n,r,i,s){if(kr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?DI:LI,t=n(r,i),ws){s=0;do{if(ws=!1,$s=0,25<=s)throw Error(w(301));s+=1,Ee=ge=null,e.updateQueue=null,pa.current=MI,t=n(r,i)}while(ws)}if(pa.current=Ba,e=ge!==null&&ge.next!==null,kr=0,Ee=ge=ie=null,za=!1,e)throw Error(w(300));return t}function ph(){var t=$s!==0;return $s=0,t}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ie.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function yt(){if(ge===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Ee===null?ie.memoizedState:Ee.next;if(e!==null)Ee=e,ge=t;else{if(t===null)throw Error(w(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ee===null?ie.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Hs(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=yt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((kr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ie.lanes|=d,Pr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,bt(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,Pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=yt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bt(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $_(){}function H_(t,e){var n=ie,r=yt(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,mh(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Gs(9,K_.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(w(349));kr&30||G_(n,e,i)}return i}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K_(t,e,n,r){e.value=n,e.getSnapshot=r,Q_(e)&&Y_(t)}function q_(t,e,n){return n(function(){Q_(e)&&Y_(t)})}function Q_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function Y_(t){var e=dn(t,1);e!==null&&Ot(e,t,1,-1)}function Ap(t){var e=Ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=bI.bind(null,ie,t),[e.memoizedState,t]}function Gs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J_(){return yt().memoizedState}function ma(t,e,n,r){var i=Ft();ie.flags|=t,i.memoizedState=Gs(1|e,n,void 0,r===void 0?null:r)}function Pl(t,e,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&hh(r,o.deps)){i.memoizedState=Gs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Gs(1|e,n,s,r)}function Op(t,e){return ma(8390656,8,t,e)}function mh(t,e){return Pl(2048,8,t,e)}function X_(t,e){return Pl(4,2,t,e)}function Z_(t,e){return Pl(4,4,t,e)}function ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tv(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,ev.bind(null,e,t),n)}function gh(){}function nv(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iv(t,e,n){return kr&21?(bt(n,e)||(n=a_(),ie.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n)}function OI(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Mu.transition;Mu.transition={};try{t(!1),e()}finally{G=n,Mu.transition=r}}function sv(){return yt().memoizedState}function xI(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ov(t))av(e,n);else if(n=F_(t,e,n,r),n!==null){var i=je();Ot(n,t,r,i),lv(n,e,r)}}function bI(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ov(t))av(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,bt(a,o)){var l=e.interleaved;l===null?(i.next=i,ah(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=F_(t,e,i,r),n!==null&&(i=je(),Ot(n,t,r,i),lv(n,e,r))}}function ov(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function av(t,e){ws=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kd(t,n)}}var Ba={readContext:vt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},DI={readContext:vt,useCallback:function(t,e){return Ft().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ma(4194308,4,ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return ma(4,2,t,e)},useMemo:function(t,e){var n=Ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xI.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Ft();return t={current:t},e.memoizedState=t},useState:Ap,useDebugValue:gh,useDeferredValue:function(t){return Ft().memoizedState=t},useTransition:function(){var t=Ap(!1),e=t[0];return t=OI.bind(null,t[1]),Ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Ft();if(ee){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Te===null)throw Error(w(349));kr&30||G_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Op(q_.bind(null,r,s,t),[t]),r.flags|=2048,Gs(9,K_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ft(),e=Te.identifierPrefix;if(ee){var n=en,r=Zt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LI={readContext:vt,useCallback:nv,useContext:vt,useEffect:mh,useImperativeHandle:tv,useInsertionEffect:X_,useLayoutEffect:Z_,useMemo:rv,useReducer:Fu,useRef:J_,useState:function(){return Fu(Hs)},useDebugValue:gh,useDeferredValue:function(t){var e=yt();return iv(e,ge.memoizedState,t)},useTransition:function(){var t=Fu(Hs)[0],e=yt().memoizedState;return[t,e]},useMutableSource:$_,useSyncExternalStore:H_,useId:sv,unstable_isNewReconciler:!1},MI={readContext:vt,useCallback:nv,useContext:vt,useEffect:mh,useImperativeHandle:tv,useInsertionEffect:X_,useLayoutEffect:Z_,useMemo:rv,useReducer:Uu,useRef:J_,useState:function(){return Uu(Hs)},useDebugValue:gh,useDeferredValue:function(t){var e=yt();return ge===null?e.memoizedState=t:iv(e,ge.memoizedState,t)},useTransition:function(){var t=Uu(Hs)[0],e=yt().memoizedState;return[t,e]},useMutableSource:$_,useSyncExternalStore:H_,useId:sv,unstable_isNewReconciler:!1};function Si(t,e){try{var n="",r=e;do n+=c0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FI=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$a||($a=!0,Yc=r),jc(t,e)},n}function cv(t,e,n){n=sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(t,e),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JI.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,Dn(n,e,1))),n.lanes|=1),t)}var UI=mn.ReactCurrentOwner,Ge=!1;function Ue(t,e,n,r){e.child=t===null?B_(e,null,n,r):Ei(e,t.child,n,r)}function Lp(t,e,n,r,i){n=n.render;var s=e.ref;return di(e,i),r=fh(t,e,n,r,s,i),n=ph(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hn(t,e,i)):(ee&&n&&th(e),e.flags|=1,Ue(t,e,r,i),e.child)}function Mp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dv(t,e,s,r,i)):(t=ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Us,n(o,r)&&t.ref===e.ref)return hn(t,e,i)}return e.flags|=1,t=Fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function dv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Us(s,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,hn(t,e,i)}return zc(t,e,n,r,i)}function hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(si,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(si,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(si,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(si,et),et|=r;return Ue(t,e,i,n),e.child}function fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zc(t,e,n,r,i){var s=Qe(n)?Cr:Fe.current;return s=yi(e,s),di(e,i),n=fh(t,e,n,r,s,i),r=ph(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hn(t,e,i)):(ee&&r&&th(e),e.flags|=1,Ue(t,e,n,i),e.child)}function Fp(t,e,n,r,i){if(Qe(n)){var s=!0;Da(e)}else s=!1;if(di(e,i),e.stateNode===null)ga(t,e),j_(e,n,r),Wc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=Qe(n)?Cr:Fe.current,u=yi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rp(e,o,r,u),En=!1;var h=e.memoizedState;o.state=h,Wa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||qe.current||En?(typeof d=="function"&&(Uc(e,n,d,r),l=e.memoizedState),(a=En||Pp(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=Qe(n)?Cr:Fe.current,l=yi(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&Rp(e,o,r,l),En=!1,h=e.memoizedState,o.state=h,Wa(e,r,o,i);var _=e.memoizedState;a!==c||h!==_||qe.current||En?(typeof g=="function"&&(Uc(e,n,g,r),_=e.memoizedState),(u=En||Pp(e,n,u,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Bc(t,e,n,r,s,i)}function Bc(t,e,n,r,i,s){fv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ip(e,n,!1),hn(t,e,s);r=e.stateNode,UI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ei(e,t.child,null,s),e.child=Ei(e,null,a,s)):Ue(t,e,a,s),e.memoizedState=r.state,i&&Ip(e,n,!0),e.child}function pv(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),uh(t,e.containerInfo)}function Up(t,e,n,r,i){return wi(),rh(i),e.flags|=256,Ue(t,e,n,r),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function mv(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return Mc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Al(o,r,0,null),t=vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$c(n),e.memoizedState=Vc,t):_h(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return WI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fn(a,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$c(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vc,r}return s=t.child,t=s.sibling,r=Fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _h(t,e){return e=Al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,r){return r!==null&&rh(r),Ei(e,t.child,null,n),t=_h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wu(Error(w(422))),ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Al({mode:"visible",children:r.children},i,0,null),s=vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ei(e,t.child,null,o),e.child.memoizedState=$c(o),e.memoizedState=Vc,s);if(!(e.mode&1))return ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=Wu(s,r,void 0),ta(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ge||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(t,i),Ot(r,t,i,-1))}return Sh(),r=Wu(Error(w(421))),ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rt=bn(i.nextSibling),st=e,ee=!0,Rt=null,t!==null&&(dt[ht++]=Zt,dt[ht++]=en,dt[ht++]=Tr,Zt=t.id,en=t.overflow,Tr=e),e=_h(e,r.children),e.flags|=4096,e)}function Wp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fc(t.return,e,n)}function ju(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wp(t,n,e);else if(t.tag===19)Wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ja(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ju(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ja(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jI(t,e,n){switch(e.tag){case 3:pv(e),wi();break;case 5:V_(e);break;case 1:Qe(e.type)&&Da(e);break;case 4:uh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?mv(t,e,n):(Q(ne,ne.current&1),t=hn(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return hn(t,e,n)}var _v,Hc,vv,yv;_v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};vv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr(Ht.current);var s=null;switch(n){case"input":i=fc(t,i),r=fc(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=gc(t,i),r=gc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xa)}vc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Os.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Os.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function De(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zI(t,e,n){var r=e.pendingProps;switch(nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(e),null;case 1:return Qe(e.type)&&ba(),De(e),null;case 3:return r=e.stateNode,Ii(),Z(qe),Z(Fe),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(Zc(Rt),Rt=null))),Hc(t,e),De(e),null;case 5:ch(e);var i=pr(Vs.current);if(n=e.type,t!==null&&e.stateNode!=null)vv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return De(e),null}if(t=pr(Ht.current),Zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ut]=e,r[zs]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<ds.length;i++)X(ds[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":qf(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":Yf(r,s),X("invalid",r)}vc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,a,t),i=["children",""+a]):Os.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":$o(r),Qf(r,s,!0);break;case"textarea":$o(r),Jf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ut]=e,t[zs]=r,_v(t,e,!1,!1),e.stateNode=t;e:{switch(o=yc(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<ds.length;i++)X(ds[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":qf(t,r),i=fc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),X("invalid",t);break;case"textarea":Yf(t,r),i=gc(t,r),X("invalid",t);break;default:i=r}vc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xs(t,l):typeof l=="number"&&xs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Os.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&zd(t,s,l,o))}switch(n){case"input":$o(t),Qf(t,r,!1);break;case"textarea":$o(t),Jf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return De(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=pr(Vs.current),pr(Ht.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ut]=e,(s=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:Xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=e,e.stateNode=r}return De(e),null;case 13:if(Z(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&rt!==null&&e.mode&1&&!(e.flags&128))M_(),wi(),e.flags|=98560,s=!1;else if(s=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ut]=e}else wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),s=!1}else Rt!==null&&(Zc(Rt),Rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?ve===0&&(ve=3):Sh())),e.updateQueue!==null&&(e.flags|=4),De(e),null);case 4:return Ii(),Hc(t,e),t===null&&Ws(e.stateNode.containerInfo),De(e),null;case 10:return oh(e.type._context),De(e),null;case 17:return Qe(e.type)&&ba(),De(e),null;case 19:if(Z(ne),s=e.memoizedState,s===null)return De(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zi(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ja(t),o!==null){for(e.flags|=128,Zi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>Ci&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ja(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return De(e),null}else 2*de()-s.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(De(e),null);case 22:case 23:return Ih(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(De(e),e.subtreeFlags&6&&(e.flags|=8192)):De(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function BI(t,e){switch(nh(e),e.tag){case 1:return Qe(e.type)&&ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ii(),Z(qe),Z(Fe),dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ch(e),null;case 13:if(Z(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ne),null;case 4:return Ii(),null;case 10:return oh(e.type._context),null;case 22:case 23:return Ih(),null;case 24:return null;default:return null}}var na=!1,Le=!1,VI=typeof WeakSet=="function"?WeakSet:Set,P=null;function ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Gc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var jp=!1;function $I(t,e){if(Nc=Na,t=S_(),eh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:t,selectionRange:n},Na=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,S=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:kt(e.type,v),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){oe(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=jp,jp=!1,_}function Es(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gc(e,n,s)}i=i.next}while(i!==r)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wv(t){var e=t.alternate;e!==null&&(t.alternate=null,wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ut],delete e[zs],delete e[bc],delete e[kI],delete e[PI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xa));else if(r!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}function Qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}var Re=null,Pt=!1;function vn(t,e,n){for(n=n.child;n!==null;)Iv(t,e,n),n=n.sibling}function Iv(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Le||ii(n,e);case 6:var r=Re,i=Pt;Re=null,vn(t,e,n),Re=r,Pt=i,Re!==null&&(Pt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Pt?(t=Re,n=n.stateNode,t.nodeType===8?bu(t.parentNode,n):t.nodeType===1&&bu(t,n),Ms(t)):bu(Re,n.stateNode));break;case 4:r=Re,i=Pt,Re=n.stateNode.containerInfo,Pt=!0,vn(t,e,n),Re=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gc(n,e,o),i=i.next}while(i!==r)}vn(t,e,n);break;case 1:if(!Le&&(ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}vn(t,e,n);break;case 21:vn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,vn(t,e,n),Le=r):vn(t,e,n);break;default:vn(t,e,n)}}function Bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VI),e.forEach(function(r){var i=ZI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,Pt=!1;break e;case 3:Re=a.stateNode.containerInfo,Pt=!0;break e;case 4:Re=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(Re===null)throw Error(w(160));Iv(s,o,i),Re=null,Pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sv(e,t),e=e.sibling}function Sv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),Mt(t),r&4){try{Es(3,t,t.return),Rl(3,t)}catch(v){oe(t,t.return,v)}try{Es(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:Ct(e,t),Mt(t),r&512&&n!==null&&ii(n,n.return);break;case 5:if(Ct(e,t),Mt(t),r&512&&n!==null&&ii(n,n.return),t.flags&32){var i=t.stateNode;try{xs(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$g(i,s),yc(a,o);var u=yc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Qg(i,c):d==="dangerouslySetInnerHTML"?Kg(i,c):d==="children"?xs(i,c):zd(i,d,c,u)}switch(a){case"input":pc(i,s);break;case"textarea":Hg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ai(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ai(i,!!s.multiple,s.defaultValue,!0):ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[zs]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(Ct(e,t),Mt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(Ct(e,t),Mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:Ct(e,t),Mt(t);break;case 13:Ct(e,t),Mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wh=de())),r&4&&Bp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||d,Ct(e,t),Le=u):Ct(e,t),Mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(c=P=d;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:Es(4,h,h.return);break;case 1:ii(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:ii(h,h.return);break;case 22:if(h.memoizedState!==null){$p(c);continue}}g!==null?(g.return=h,P=g):$p(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qg("display",o))}catch(v){oe(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){oe(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(e,t),Mt(t),r&4&&Bp(t);break;case 21:break;default:Ct(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var s=zp(t);Qc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zp(t);qc(t,a,o);break;default:throw Error(w(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HI(t,e,n){P=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||na;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=na;var u=Le;if(na=o,(Le=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Hp(i):l!==null?(l.return=o,P=l):Hp(i);for(;s!==null;)P=s,Cv(s),s=s.sibling;P=i,na=a,Le=u}Vp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Vp(t)}}function Vp(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||Rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ms(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Le||e.flags&512&&Kc(e)}catch(h){oe(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function $p(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Hp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{Kc(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{Kc(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var GI=Math.ceil,Va=mn.ReactCurrentDispatcher,vh=mn.ReactCurrentOwner,_t=mn.ReactCurrentBatchConfig,B=0,Te=null,fe=null,Ne=0,et=0,si=Zn(0),ve=0,Ks=null,Pr=0,Nl=0,yh=0,Is=null,$e=null,wh=0,Ci=1/0,Jt=null,$a=!1,Yc=null,Ln=null,ra=!1,Tn=null,Ha=0,Ss=0,Jc=null,_a=-1,va=0;function je(){return B&6?de():_a!==-1?_a:_a=de()}function Mn(t){return t.mode&1?B&2&&Ne!==0?Ne&-Ne:NI.transition!==null?(va===0&&(va=a_()),va):(t=G,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t):1}function Ot(t,e,n,r){if(50<Ss)throw Ss=0,Jc=null,Error(w(185));_o(t,n,r),(!(B&2)||t!==Te)&&(t===Te&&(!(B&2)&&(Nl|=n),ve===4&&Sn(t,Ne)),Ye(t,r),n===1&&B===0&&!(e.mode&1)&&(Ci=de()+500,Tl&&er()))}function Ye(t,e){var n=t.callbackNode;N0(t,e);var r=Ra(t,t===Te?Ne:0);if(r===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?RI(Gp.bind(null,t)):b_(Gp.bind(null,t)),CI(function(){!(B&6)&&er()}),n=null;else{switch(l_(r)){case 1:n=Gd;break;case 4:n=s_;break;case 16:n=Pa;break;case 536870912:n=o_;break;default:n=Pa}n=xv(n,Tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tv(t,e){if(_a=-1,va=0,B&6)throw Error(w(327));var n=t.callbackNode;if(hi()&&t.callbackNode!==n)return null;var r=Ra(t,t===Te?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ga(t,r);else{e=r;var i=B;B|=2;var s=Pv();(Te!==t||Ne!==e)&&(Jt=null,Ci=de()+500,_r(t,e));do try{QI();break}catch(a){kv(t,a)}while(!0);sh(),Va.current=s,B=i,fe!==null?e=0:(Te=null,Ne=0,e=ve)}if(e!==0){if(e===2&&(i=Cc(t),i!==0&&(r=i,e=Xc(t,i))),e===1)throw n=Ks,_r(t,0),Sn(t,r),Ye(t,de()),n;if(e===6)Sn(t,r);else{if(i=t.current.alternate,!(r&30)&&!KI(i)&&(e=Ga(t,r),e===2&&(s=Cc(t),s!==0&&(r=s,e=Xc(t,s))),e===1))throw n=Ks,_r(t,0),Sn(t,r),Ye(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:ur(t,$e,Jt);break;case 3:if(Sn(t,r),(r&130023424)===r&&(e=wh+500-de(),10<e)){if(Ra(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xc(ur.bind(null,t,$e,Jt),e);break}ur(t,$e,Jt);break;case 4:if(Sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-At(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GI(r/1960))-r,10<r){t.timeoutHandle=xc(ur.bind(null,t,$e,Jt),r);break}ur(t,$e,Jt);break;case 5:ur(t,$e,Jt);break;default:throw Error(w(329))}}}return Ye(t,de()),t.callbackNode===n?Tv.bind(null,t):null}function Xc(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Ga(t,e),t!==2&&(e=$e,$e=n,e!==null&&Zc(e)),t}function Zc(t){$e===null?$e=t:$e.push.apply($e,t)}function KI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e){for(e&=~yh,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-At(e),r=1<<n;t[n]=-1,e&=~r}}function Gp(t){if(B&6)throw Error(w(327));hi();var e=Ra(t,0);if(!(e&1))return Ye(t,de()),null;var n=Ga(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=Xc(t,r))}if(n===1)throw n=Ks,_r(t,0),Sn(t,e),Ye(t,de()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,$e,Jt),Ye(t,de()),null}function Eh(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Ci=de()+500,Tl&&er())}}function Rr(t){Tn!==null&&Tn.tag===0&&!(B&6)&&hi();var e=B;B|=1;var n=_t.transition,r=G;try{if(_t.transition=null,G=1,t)return t()}finally{G=r,_t.transition=n,B=e,!(B&6)&&er()}}function Ih(){et=si.current,Z(si)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SI(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(nh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ba();break;case 3:Ii(),Z(qe),Z(Fe),dh();break;case 5:ch(r);break;case 4:Ii();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:oh(r.type._context);break;case 22:case 23:Ih()}n=n.return}if(Te=t,fe=t=Fn(t.current,null),Ne=et=e,ve=0,Ks=null,yh=Nl=Pr=0,$e=Is=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fr=null}return t}function kv(t,e){do{var n=fe;try{if(sh(),pa.current=Ba,za){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(kr=0,Ee=ge=ie=null,ws=!1,$s=0,vh.current=null,n===null||n.return===null){ve=1,Ks=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=bp(o);if(g!==null){g.flags&=-257,Dp(g,o,a,s,e),g.mode&1&&xp(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){xp(s,u,e),Sh();break e}l=Error(w(426))}}else if(ee&&a.mode&1){var S=bp(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Dp(S,o,a,s,e),rh(Si(l,a));break e}}s=l=Si(l,a),ve!==4&&(ve=2),Is===null?Is=[s]:Is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=uv(s,l,e);Tp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ln===null||!Ln.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=cv(s,a,e);Tp(s,y);break e}}s=s.return}while(s!==null)}Nv(n)}catch(C){e=C,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Pv(){var t=Va.current;return Va.current=Ba,t===null?Ba:t}function Sh(){(ve===0||ve===3||ve===2)&&(ve=4),Te===null||!(Pr&268435455)&&!(Nl&268435455)||Sn(Te,Ne)}function Ga(t,e){var n=B;B|=2;var r=Pv();(Te!==t||Ne!==e)&&(Jt=null,_r(t,e));do try{qI();break}catch(i){kv(t,i)}while(!0);if(sh(),B=n,Va.current=r,fe!==null)throw Error(w(261));return Te=null,Ne=0,ve}function qI(){for(;fe!==null;)Rv(fe)}function QI(){for(;fe!==null&&!w0();)Rv(fe)}function Rv(t){var e=Ov(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Nv(t):fe=e,vh.current=null}function Nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BI(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,fe=null;return}}else if(n=zI(n,e,et),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ve===0&&(ve=5)}function ur(t,e,n){var r=G,i=_t.transition;try{_t.transition=null,G=1,YI(t,e,n,r)}finally{_t.transition=i,G=r}return null}function YI(t,e,n,r){do hi();while(Tn!==null);if(B&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A0(t,s),t===Te&&(fe=Te=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,xv(Pa,function(){return hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_t.transition,_t.transition=null;var o=G;G=1;var a=B;B|=4,vh.current=null,$I(t,n),Sv(n,t),gI(Ac),Na=!!Nc,Ac=Nc=null,t.current=n,HI(n),E0(),B=a,G=o,_t.transition=s}else t.current=n;if(ra&&(ra=!1,Tn=t,Ha=i),s=t.pendingLanes,s===0&&(Ln=null),C0(n.stateNode),Ye(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($a)throw $a=!1,t=Yc,Yc=null,t;return Ha&1&&t.tag!==0&&hi(),s=t.pendingLanes,s&1?t===Jc?Ss++:(Ss=0,Jc=t):Ss=0,er(),null}function hi(){if(Tn!==null){var t=l_(Ha),e=_t.transition,n=G;try{if(_t.transition=null,G=16>t?16:t,Tn===null)var r=!1;else{if(t=Tn,Tn=null,Ha=0,B&6)throw Error(w(331));var i=B;for(B|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Es(8,d,s)}var c=d.child;if(c!==null)c.return=d,P=c;else for(;P!==null;){d=P;var h=d.sibling,g=d.return;if(wv(d),d===u){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Es(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(C){oe(a,a.return,C)}if(a===o){P=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P=y;break e}P=a.return}}if(B=i,er(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{G=n,_t.transition=e}}return!1}function Kp(t,e,n){e=Si(n,e),e=uv(t,e,1),t=Dn(t,e,1),e=je(),t!==null&&(_o(t,1,e),Ye(t,e))}function oe(t,e,n){if(t.tag===3)Kp(t,t,n);else for(;e!==null;){if(e.tag===3){Kp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){t=Si(n,t),t=cv(e,t,1),e=Dn(e,t,1),t=je(),e!==null&&(_o(e,1,t),Ye(e,t));break}}e=e.return}}function JI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Ne&n)===n&&(ve===4||ve===3&&(Ne&130023424)===Ne&&500>de()-wh?_r(t,0):yh|=n),Ye(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=je();t=dn(t,e),t!==null&&(_o(t,e,n),Ye(t,n))}function XI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function ZI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Av(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)Ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ge=!1,jI(t,e,n);Ge=!!(t.flags&131072)}else Ge=!1,ee&&e.flags&1048576&&D_(e,Ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ga(t,e),t=e.pendingProps;var i=yi(e,Fe.current);di(e,n),i=fh(null,e,r,t,i,n);var s=ph();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,Da(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lh(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,Wc(e,r,t,n),e=Bc(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&th(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tS(r),t=kt(r,t),i){case 0:e=zc(null,e,r,t,n);break e;case 1:e=Fp(null,e,r,t,n);break e;case 11:e=Lp(null,e,r,t,n);break e;case 14:e=Mp(null,e,r,kt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),zc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Fp(t,e,r,i,n);case 3:e:{if(pv(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U_(t,e),Wa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Si(Error(w(423)),e),e=Up(t,e,r,n,i);break e}else if(r!==i){i=Si(Error(w(424)),e),e=Up(t,e,r,n,i);break e}else for(rt=bn(e.stateNode.containerInfo.firstChild),st=e,ee=!0,Rt=null,n=B_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){e=hn(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return V_(e),t===null&&Mc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oc(r,i)?o=null:s!==null&&Oc(r,s)&&(e.flags|=32),fv(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Mc(e),null;case 13:return mv(t,e,n);case 4:return uh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ei(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Lp(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Fa,r._currentValue),r._currentValue=o,s!==null)if(bt(s.value,o)){if(s.children===i.children&&!qe.current){e=hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,di(e,n),i=vt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Mp(t,e,r,i,n);case 15:return dv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),ga(t,e),e.tag=1,Qe(r)?(t=!0,Da(e)):t=!1,di(e,n),j_(e,r,i),Wc(e,r,i,n),Bc(null,e,r,!0,t,n);case 19:return gv(t,e,n);case 22:return hv(t,e,n)}throw Error(w(156,e.tag))};function xv(t,e){return i_(t,e)}function eS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new eS(t,e,n,r)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tS(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vd)return 11;if(t===$d)return 14}return 2}function Fn(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qr:return vr(n.children,i,s,e);case Bd:o=8,i|=8;break;case uc:return t=pt(12,n,e,i|2),t.elementType=uc,t.lanes=s,t;case cc:return t=pt(13,n,e,i),t.elementType=cc,t.lanes=s,t;case dc:return t=pt(19,n,e,i),t.elementType=dc,t.lanes=s,t;case zg:return Al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wg:o=10;break e;case jg:o=9;break e;case Vd:o=11;break e;case $d:o=14;break e;case wn:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vr(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function Al(t,e,n,r){return t=pt(22,t,r,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function zu(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Th(t,e,n,r,i,s,o,a,l){return t=new nS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(s),t}function rS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bv(t){if(!t)return Vn;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Qe(n))return x_(t,n,e)}return e}function Dv(t,e,n,r,i,s,o,a,l){return t=Th(n,r,!0,t,i,s,o,a,l),t.context=bv(null),n=t.current,r=je(),i=Mn(n),s=sn(r,i),s.callback=e??null,Dn(n,s,i),t.current.lanes=i,_o(t,i,r),Ye(t,r),t}function Ol(t,e,n,r){var i=e.current,s=je(),o=Mn(i);return n=bv(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dn(i,e,o),t!==null&&(Ot(t,i,o,s),fa(t,i,o)),o}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kh(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function iS(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ph(t){this._internalRoot=t}xl.prototype.render=Ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Ol(t,e,null,null)};xl.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Ol(null,t,null,null)}),e[cn]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=d_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&f_(t)}};function Rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function sS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ka(o);s.call(u)}}var o=Dv(e,r,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=o,t[cn]=o.current,Ws(t.nodeType===8?t.parentNode:t),Rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ka(l);a.call(u)}}var l=Th(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=l,t[cn]=l.current,Ws(t.nodeType===8?t.parentNode:t),Rr(function(){Ol(e,l,n,r)}),l}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ka(o);a.call(l)}}Ol(e,o,t,i)}else o=sS(n,e,t,i,r);return Ka(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cs(e.pendingLanes);n!==0&&(Kd(e,n|1),Ye(e,de()),!(B&6)&&(Ci=de()+500,er()))}break;case 13:Rr(function(){var r=dn(t,1);if(r!==null){var i=je();Ot(r,t,1,i)}}),kh(t,1)}};qd=function(t){if(t.tag===13){var e=dn(t,134217728);if(e!==null){var n=je();Ot(e,t,134217728,n)}kh(t,134217728)}};c_=function(t){if(t.tag===13){var e=Mn(t),n=dn(t,e);if(n!==null){var r=je();Ot(n,t,e,r)}kh(t,e)}};d_=function(){return G};h_=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Ec=function(t,e,n){switch(e){case"input":if(pc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cl(r);if(!i)throw Error(w(90));Vg(r),pc(r,i)}}}break;case"textarea":Hg(t,n);break;case"select":e=n.value,e!=null&&ai(t,!!n.multiple,e,!1)}};Xg=Eh;Zg=Rr;var oS={usingClientEntryPoint:!1,Events:[yo,Zr,Cl,Yg,Jg,Eh]},es={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aS={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||iS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{wl=ia.inject(aS),$t=ia}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rh(e))throw Error(w(200));return rS(t,e,null,n)};ut.createRoot=function(t,e){if(!Rh(t))throw Error(w(299));var n=!1,r="",i=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Th(t,1,!1,null,null,n,!1,r,i),t[cn]=e.current,Ws(t.nodeType===8?t.parentNode:t),new Ph(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return Rr(t)};ut.hydrate=function(t,e,n){if(!bl(e))throw Error(w(200));return Dl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!Rh(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dv(e,null,t,1,n??null,i,!1,s,o),t[cn]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xl(e)};ut.render=function(t,e,n){if(!bl(e))throw Error(w(200));return Dl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!bl(t))throw Error(w(40));return t._reactRootContainer?(Rr(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[cn]=null})}),!0):!1};ut.unstable_batchedUpdates=Eh;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Dl(t,e,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(t){console.error(t)}}Mv(),Dg.exports=ut;var lS=Dg.exports,Yp=lS;ac.createRoot=Yp.createRoot,ac.hydrateRoot=Yp.hydrateRoot;var Jp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+Fv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new cS;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wv=function(t){const e=Uv(t);return Nh.encodeByteArray(e,!0)},qa=function(t){return Wv(t).replace(/\./g,"")},Qa=function(t){try{return Nh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t){return qs(void 0,t)}function qs(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hS(n)||(t[n]=qs(t[n],e[n]));return t}function hS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=()=>fS().__FIREBASE_DEFAULTS__,mS=()=>{if(typeof process>"u"||typeof Jp>"u")return;const t=Jp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qa(t[1]);return e&&JSON.parse(e)},Ah=()=>{try{return pS()||mS()||gS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jv=()=>{var t;return(t=Ah())===null||t===void 0?void 0:t.config},_S=t=>{var e;return(e=Ah())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qa(JSON.stringify(n)),qa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function zv(){var t;const e=(t=Ah())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yS(){return typeof self=="object"&&self.self===self}function Bv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ll(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vv(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $v(){return Fv.NODE_ADMIN===!0}function Ya(){try{return typeof indexedDB=="object"}catch{return!1}}function wS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="FirebaseError";class Je extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Je(i,a,r)}}function IS(t,e){return t.replace(SS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qs(Qa(s[0])||""),n=Qs(Qa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},CS=function(t){const e=Hv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},TS=function(t){const e=Hv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ja(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ed(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xp(s)&&Xp(o)){if(!ed(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Gv(t,e){const n=new PS(t,e);return n.subscribe.bind(n)}class PS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vu),i.error===void 0&&(i.error=Vu),i.complete===void 0&&(i.complete=Vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vu(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function Xe(t,e){return`${t} failed: ${e} argument `}function Ie(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Xe(t,e)+"must be a valid function.")}function Zp(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(Xe(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ml=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return t&&t._delegate?t._delegate:t}class wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new He;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OS(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AS(t){return t===cr?void 0:t}function OS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new td(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=[];var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const qv={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},xS=H.INFO,bS={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},DS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=xS,this._logHandler=DS,this._userLogHandler=null,xh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function LS(t){xh.forEach(e=>{e.setLogLevel(t)})}function MS(t,e){for(const n of xh){let r=null;e&&e.level&&(r=qv[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:H[s].toLowerCase(),message:a,args:o,type:i.name})}}}const FS=(t,e)=>e.some(n=>t instanceof n);let em,tm;function US(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WS(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qv=new WeakMap,nd=new WeakMap,Yv=new WeakMap,$u=new WeakMap,bh=new WeakMap;function jS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qv.set(n,t)}).catch(()=>{}),bh.set(e,t),e}function zS(t){if(nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nd.set(t,e)}let rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BS(t){rd=t(rd)}function VS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hu(this),e,...n);return Yv.set(r,e.sort?e.sort():[e]),Un(r)}:WS().includes(t)?function(...e){return t.apply(Hu(this),e),Un(Qv.get(this))}:function(...e){return Un(t.apply(Hu(this),e))}}function $S(t){return typeof t=="function"?VS(t):(t instanceof IDBTransaction&&zS(t),FS(t,US())?new Proxy(t,rd):t)}function Un(t){if(t instanceof IDBRequest)return jS(t);if($u.has(t))return $u.get(t);const e=$S(t);return e!==t&&($u.set(t,e),bh.set(e,t)),e}const Hu=t=>bh.get(t);function HS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GS=["get","getKey","getAll","getAllKeys","count"],KS=["put","add","delete","clear"],Gu=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gu.set(e,s),s}BS(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const id="@firebase/app",rm="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Eo("@firebase/app"),YS="@firebase/app-compat",JS="@firebase/analytics-compat",XS="@firebase/analytics",ZS="@firebase/app-check-compat",eC="@firebase/app-check",tC="@firebase/auth",nC="@firebase/auth-compat",rC="@firebase/database",iC="@firebase/database-compat",sC="@firebase/functions",oC="@firebase/functions-compat",aC="@firebase/installations",lC="@firebase/installations-compat",uC="@firebase/messaging",cC="@firebase/messaging-compat",dC="@firebase/performance",hC="@firebase/performance-compat",fC="@firebase/remote-config",pC="@firebase/remote-config-compat",mC="@firebase/storage",gC="@firebase/storage-compat",_C="@firebase/firestore",vC="@firebase/firestore-compat",yC="firebase",wC="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]",EC={[id]:"fire-core",[YS]:"fire-core-compat",[XS]:"fire-analytics",[JS]:"fire-analytics-compat",[eC]:"fire-app-check",[ZS]:"fire-app-check-compat",[tC]:"fire-auth",[nC]:"fire-auth-compat",[rC]:"fire-rtdb",[iC]:"fire-rtdb-compat",[sC]:"fire-fn",[oC]:"fire-fn-compat",[aC]:"fire-iid",[lC]:"fire-iid-compat",[uC]:"fire-fcm",[cC]:"fire-fcm-compat",[dC]:"fire-perf",[hC]:"fire-perf-compat",[fC]:"fire-rc",[pC]:"fire-rc-compat",[mC]:"fire-gcs",[gC]:"fire-gcs-compat",[_C]:"fire-fst",[vC]:"fire-fst-compat","fire-js":"fire-js",[yC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map,Ys=new Map;function Za(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jv(t,e){t.container.addOrOverwriteComponent(e)}function Gn(t){const e=t.name;if(Ys.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Ys.set(e,t);for(const n of Hn.values())Za(n,t);return!0}function Xv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function IC(t,e,n=$n){Xv(t,e).clearInstance(n)}function SC(){Ys.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Wr("app","Firebase",CC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TC=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=wC;function Dh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$n,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=jv()),!n)throw on.create("no-options");const s=Hn.get(i);if(s){if(ed(n,s.options)&&ed(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new Kv(i);for(const l of Ys.values())o.addComponent(l);const a=new TC(n,r,o);return Hn.set(i,a),a}function kC(t=$n){const e=Hn.get(t);if(!e&&t===$n&&jv())return Dh();if(!e)throw on.create("no-app",{appName:t});return e}function PC(){return Array.from(Hn.values())}async function Zv(t){const e=t.name;Hn.has(e)&&(Hn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Gt(t,e,n){var r;let i=(r=EC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}Gn(new wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ey(t,e){if(t!==null&&typeof t!="function")throw on.create("invalid-log-argument");MS(t,e)}function ty(t){LS(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="firebase-heartbeat-database",NC=1,Js="firebase-heartbeat-store";let Ku=null;function ny(){return Ku||(Ku=HS(RC,NC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Ku}async function AC(t){try{const n=(await ny()).transaction(Js),r=await n.objectStore(Js).get(ry(t));return await n.done,r}catch(e){if(e instanceof Je)Ar.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function im(t,e){try{const r=(await ny()).transaction(Js,"readwrite");await r.objectStore(Js).put(e,ry(t)),await r.done}catch(n){if(n instanceof Je)Ar.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function ry(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=1024,xC=30*24*60*60*1e3;class bC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sm(),{heartbeatsToSend:r,unsentEntries:i}=DC(this._heartbeatsCache.heartbeats),s=qa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sm(){return new Date().toISOString().substring(0,10)}function DC(t,e=OC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),om(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),om(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ya()?wS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function om(t){return qa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){Gn(new wt("platform-logger",e=>new qS(e),"PRIVATE")),Gn(new wt("heartbeat",e=>new bC(e),"PRIVATE")),Gt(id,rm,t),Gt(id,rm,"esm2017"),Gt("fire-js","")}MC("");const FC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Je,SDK_VERSION:tr,_DEFAULT_ENTRY_NAME:$n,_addComponent:Za,_addOrOverwriteComponent:Jv,_apps:Hn,_clearComponents:SC,_components:Ys,_getProvider:Xv,_registerComponent:Gn,_removeServiceInstance:IC,deleteApp:Zv,getApp:kC,getApps:PC,initializeApp:Dh,onLog:ey,registerVersion:Gt,setLogLevel:ty},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this._delegate=e,this.firebase=n,Za(e,new wt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Zv(this._delegate)))}_getService(e,n=$n){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=$n){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Za(this._delegate,e)}_addOrOverwriteComponent(e){Jv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},am=new Wr("app-compat","Firebase",WC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Gt,setLogLevel:ty,onLog:ey,apps:null,SDK_VERSION:tr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:FC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||$n,!at(e,u))throw am.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,d={}){const c=Dh(u,d);if(at(e,c.name))return e[c.name];const h=new t(c,n);return e[c.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,c=d.replace("-compat","");if(Gn(u)&&u.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[c]!="function")throw am.create("invalid-app-argument",{appName:d});return g[c]()};u.serviceProps!==void 0&&qs(h,u.serviceProps),n[c]=h,t.prototype[c]=function(...g){return this._getService.bind(this,d).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[c]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){const t=jC(UC);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:iy,extendNamespace:e,createSubscribe:Gv,ErrorFactory:Wr,deepExtend:qs});function e(n){qs(t,n)}return t}const zC=iy();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Eo("@firebase/app-compat"),BC="@firebase/app-compat",VC="0.2.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){Gt(BC,VC,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(yS()&&self.firebase!==void 0){lm.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&lm.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const nr=zC;$C();var HC="firebase",GC="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr.registerVersion(HC,GC,"app-compat");var um={};const cm="@firebase/database",dm="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy="";function oy(t){sy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KC(e)}}catch{}return new qC},mr=ay("localStorage"),sd=ay("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Eo("@firebase/database"),ly=function(){let t=1;return function(){return t++}}(),uy=function(t){const e=NS(t),n=new kS;n.update(e);const r=n.digest();return Nh.encodeByteArray(r)},Io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Io.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let yr=null,hm=!0;const cy=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fi.logLevel=H.VERBOSE,yr=fi.log.bind(fi),e&&sd.set("logging_enabled",!0)):typeof t=="function"?yr=t:(yr=null,sd.remove("logging_enabled"))},Ce=function(...t){if(hm===!0&&(hm=!1,yr===null&&sd.get("logging_enabled")===!0&&cy(!0)),yr){const e=Io.apply(null,t);yr(e)}},So=function(t){return function(...e){Ce(t,...e)}},od=function(...t){const e="FIREBASE INTERNAL ERROR: "+Io(...t);fi.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Io(...t)}`;throw fi.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Io(...t);fi.warn(e)},QC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kn="[MIN_NAME]",fn="[MAX_NAME]",zr=function(t,e){if(t===e)return 0;if(t===Kn||e===fn)return-1;if(e===Kn||t===fn)return 1;{const n=fm(t),r=fm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},JC=function(t,e){return t===e?0:t<e?-1:1},ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Lh=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=Lh(t[e[r]]);return n+="}",n},dy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hy=function(t){I(!Fl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},XC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const tT=new RegExp("^-?(0*)\\d{1,10}$"),nT=-2147483648,rT=2147483647,fm=function(t){if(tT.test(t)){const e=Number(t);if(e>=nT&&e<=rT)return e}return null},Mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},iT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class pi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="5",fy="v",py="s",my="r",gy="f",_y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vy="ls",yy="p",ad="ac",wy="websocket",Ey="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sy(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===wy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ey)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aT(t)&&(n.ns=t.namespace);const i=[];return ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.counters_={}}incrementCounter(e,n=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={},Qu={};function Fh(t){const e=t.toString();return qu[e]||(qu[e]=new lT),qu[e]}function uT(t,e){const n=t.toString();return Qu[n]||(Qu[n]=e()),Qu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Mi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="start",dT="close",hT="pLPCommand",fT="pRTLPCB",Cy="id",Ty="pw",ky="ser",pT="cb",mT="seg",gT="ts",_T="d",vT="dframe",Py=1870,Ry=30,yT=Py-Ry,wT=25e3,ET=3e4;class kn{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=So(e),this.stats_=Fh(n),this.urlFn=l=>(this.appCheckToken&&(l[ad]=this.appCheckToken),Sy(n,Ey,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ET)),YC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uh((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pm)this.id=a,this.password=l;else if(o===dT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[pm]="t",r[ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[fy]=Mh,this.transportSessionId&&(r[py]=this.transportSessionId),this.lastSessionId&&(r[vy]=this.lastSessionId),this.applicationId&&(r[yy]=this.applicationId),this.appCheckToken&&(r[ad]=this.appCheckToken),typeof location<"u"&&location.hostname&&_y.test(location.hostname)&&(r[my]=gy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kn.forceAllow_=!0}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){return kn.forceAllow_?!0:!kn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XC()&&!ZC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Wv(n),i=dy(r,yT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vT]="t",r[Cy]=e,r[Ty]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Uh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ly(),window[hT+this.uniqueCallbackIdentifier]=e,window[fT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Uh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cy]=this.myID,e[Ty]=this.myPW,e[ky]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ry+r.length<=Py;){const o=this.pendingSegs.shift();r=r+"&"+mT+i+"="+o.seg+"&"+gT+i+"="+o.ts+"&"+_T+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(wT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=16384,ST=45e3;let el=null;typeof MozWebSocket<"u"?el=MozWebSocket:typeof WebSocket<"u"&&(el=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=So(this.connId),this.stats_=Fh(n),this.connURL=ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[fy]=Mh,typeof location<"u"&&location.hostname&&_y.test(location.hostname)&&(o[my]=gy),n&&(o[py]=n),r&&(o[vy]=r),i&&(o[ad]=i),s&&(o[yy]=s),Sy(e,wy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mr.set("previous_websocket_failure",!0);try{let r;$v(),this.mySock=new el(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&el!==null&&!ft.forceDisallow_}static previouslyFailed(){return mr.isInMemoryStorage||mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dy(n,IT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ST))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kn,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of Ti.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ti.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ti.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=6e4,TT=5e3,kT=10*1024,PT=100*1024,Yu="t",mm="d",RT="s",gm="r",NT="e",_m="o",vm="a",ym="n",wm="p",AT="h";class OT{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=So("c:"+this.id+":"),this.transportManager_=new Ti(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yu in e){const n=e[Yu];n===vm?this.upgradeIfSecondaryHealthy_():n===gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_m&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),r=ts("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),r=ts("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(Yu,e);if(mm in e){const r=e[mm];if(n===AT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RT?this.onConnectionShutdown_(r):n===gm?this.onReset_(r):n===NT?od("Server Error: "+r):n===_m?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):od("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mh!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Ay{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new tl}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=32,Im=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new $("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Wh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Oy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return We(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bT(t,e){const n=Xs(t,0),r=Xs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=zr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function jh(t,e){if(qn(t)!==qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qn(t)>qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class DT{constructor(e,n){this.errorPrefix_=n,this.parts_=Xs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ml(this.parts_[r]);xy(this)}}function LT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ml(e),xy(t)}function MT(t){const e=t.parts_.pop();t.byteLength_-=Ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function xy(t){if(t.byteLength_>Im)throw new Error(t.errorPrefix_+"has a key path longer than "+Im+" bytes ("+t.byteLength_+").");if(t.parts_.length>Em)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Em+") or object contains a cycle "+dr(t))}function dr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends Ay{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new zh}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=1e3,FT=60*5*1e3,Sm=30*1e3,UT=1.3,WT=3e4,jT="server_kill",Cm=3;class an extends Ny{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=an.nextPersistentConnectionId_++,this.log_=So("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=FT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$v())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new He,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;an.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&at(e,"w")){const r=Nr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||TS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):od("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WT&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+an.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new OT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(jT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Me(c),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ja(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cm&&(this.reconnectDelay_=Sm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sy.replace(/\./g,"-")]=1,Oh()?e["framework.cordova"]=1:Ll()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tl.getInstance().currentlyOnline();return Ja(this.interruptReasons_)&&e}}an.nextPersistentConnectionId_=0;an.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Kn,e),i=new W(Kn,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;class by extends Ul{static get __EMPTY_NODE(){return sa}static set __EMPTY_NODE(e){sa=e}compare(e,n){return zr(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(fn,sa)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,sa)}toString(){return".key"}}const Kt=new by;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class zT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new oa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new oa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new oa(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new zT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e){return zr(t.name,e.name)}function Bh(t,e){return zr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;function VT(t){ld=t}const Dy=function(t){return typeof t=="number"?"number:"+hy(t):"string:"+t},Ly=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else I(t===ld||t.isEmpty(),"priority of unexpected type.");I(t===ld||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tm;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ly(this.priorityNode_)}static set __childrenNodeConstructor(e){Tm=e}static get __childrenNodeConstructor(){return Tm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hy(this.value_):e+=this.value_,this.lazyHash_=uy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let My,Fy;function $T(t){My=t}function HT(t){Fy=t}class GT extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(fn,new we("[PRIORITY-POST]",Fy))}makePost(e,n){const r=My(e);return new W(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const Y=new GT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=Math.log(2);class qT{constructor(e){const n=s=>parseInt(Math.log(s)/KT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nl=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new Se(h,c.node,Se.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new Se(h,c.node,Se.BLACK,_,v)}},s=function(l){let u=null,d=null,c=t.length;const h=function(_,v){const S=c-_,p=c;c-=_;const f=i(S+1,p),m=t[S],y=n?n(m):m;g(new Se(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));v?h(S,Se.BLACK):(h(S,Se.BLACK),h(S,Se.RED))}return d},o=new qT(t.length),a=s(o);return new Ke(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju;const Gr={};class tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Gr&&Y,"ChildrenNode.ts has not been loaded"),Ju=Ju||new tn({".priority":Gr},{".priority":Y}),Ju}get(e){const n=Nr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=nl(r,e.getCompare()):a=Gr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new tn(d,u)}addToIndexes(e,n){const r=Xa(this.indexes_,(i,s)=>{const o=Nr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Gr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),nl(a,o.getCompare())}else return Gr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Xa(this.indexes_,i=>{if(i===Gr)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ly(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rs||(rs=new x(new Ke(Bh),null,tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rs:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?rs:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{I(M(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Y,(o,a)=>{n[o]=a.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dy(this.getPriority().val())+":"),this.forEachChild(Y,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":uy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Co?-1:0}withIndex(e){if(e===Kt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Y),i=n.getIterator(Y);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kt?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QT extends x{constructor(){super(new Ke(Bh),x.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Co=new QT;Object.defineProperties(W,{MIN:{value:new W(Kn,x.EMPTY_NODE)},MAX:{value:new W(fn,Co)}});by.__EMPTY_NODE=x.EMPTY_NODE;we.__childrenNodeConstructor=x;VT(Co);HT(Co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=!0;function re(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,re(e))}if(!(t instanceof Array)&&YT){const n=[];let r=!1;if(ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=re(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return x.EMPTY_NODE;const s=nl(n,BT,o=>o.name,Bh);if(r){const o=nl(n,Y.getCompare());return new x(s,re(e),new tn({".priority":o},{".priority":Y}))}else return new x(s,re(e),tn.Default)}else{let n=x.EMPTY_NODE;return ke(t,(r,i)=>{if(at(t,r)&&r.substring(0,1)!=="."){const s=re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(re(e))}}$T(re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends Ul{constructor(e){super(),this.indexPath_=e,I(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zr(e.name,n.name):s}makePost(e,n){const r=re(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Co);return new W(fn,e)}toString(){return Xs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=re(e);return new W(n,r)}toString(){return".value"}}const $h=new JT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){return{type:"value",snapshotNode:t}}function ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function eo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function XT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zs(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ki(n,r)):o.trackChildChange(eo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zs(i,s))}),n.isLeafNode()||n.forEachChild(Y,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(eo(i,s,o))}else r.trackChildChange(ki(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.indexedFilter_=new Hh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=to.getStartPost_(e),this.endPost_=to.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(Y,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new to(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(eo(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zs(n,c));const v=a.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ki(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Zs(u.name,u.node)),s.trackChildChange(ki(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Wl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ek(t){return t.loadsAllData()?new Hh(t.getIndex()):t.hasLimit()?new ZT(t):new to(t)}function tk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function nk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function ud(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function rk(t,e,n){let r;return t.index_===Kt||n?r=ud(t,e,n):r=ud(t,e,fn),r.startAfterSet_=!0,r}function cd(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function ik(t,e,n){let r;return t.index_===Kt||n?r=cd(t,e,n):r=cd(t,e,Kn),r.endBeforeSet_=!0,r}function jl(t,e){const n=t.copy();return n.index_=e,n}function km(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Y?n="$priority":t.index_===$h?n="$value":t.index_===Kt?n="$key":(I(t.index_ instanceof Vh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Y&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends Ny{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=So("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=rl.getListenId_(e,r),a={};this.listens_[o]=a;const l=km(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Nr(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=rl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=km(e._queryParams),r=e._path.toString(),i=new He;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qs(a.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return{value:null,children:new Map}}function Fi(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,il());const i=t.children.get(r);e=K(e),Fi(i,e,n)}}function dd(t,e){if(F(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Y,(r,i)=>{Fi(t,new $(r),i)}),dd(t,e)}}else if(t.children.size>0){const n=M(e);return e=K(e),t.children.has(n)&&dd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function hd(t,e,n){t.value!==null?n(e,t.value):ok(t,(r,i)=>{const s=new $(e.toString()+"/"+r);hd(i,s,n)})}function ok(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*1e3,lk=30*1e3,uk=5*60*1e3;class ck{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ak(e);const r=Rm+(lk-Rm)*Math.random();Cs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ke(e,(i,s)=>{s>0&&at(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*uk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function Gh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=Gh()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new sl(V(),n,this.revert)}}else return I(M(this.path)===e,"operationForChild called for unrelated child."),new sl(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.source=e,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new no(this.source,V()):new no(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nt.OVERWRITE}operationForChild(e){return F(this.path)?new Or(this.source,V(),this.snap.getImmediateChild(e)):new Or(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Or(this.source,V(),n.value):new Pi(this.source,V(),n)}else return I(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pi(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(XT(o.childName,o.snapshotNode))}),is(t,i,"child_removed",e,r,n),is(t,i,"child_added",e,r,n),is(t,i,"child_moved",s,r,n),is(t,i,"child_changed",e,r,n),is(t,i,"value",e,r,n),i}function is(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>pk(t,a,l)),o.forEach(a=>{const l=fk(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function fk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pk(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e){return{eventCache:t,serverCache:e}}function Ts(t,e,n,r){return zl(new Qn(e,n,r),t.serverCache)}function Wy(t,e,n,r){return zl(t.eventCache,new Qn(e,n,r))}function ol(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;const mk=()=>(Xu||(Xu=new Ke(JC)),Xu);class q{constructor(e,n=mk()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return ke(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(F(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:te(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new q(null)}}set(e,n){if(F(e))return new q(n,this.children);{const r=M(e),s=(this.children.get(r)||new q(null)).set(K(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(F(e))return n;{const r=M(e),s=(this.children.get(r)||new q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(K(e),te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),te(n,i),r):new q(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new q(null))}}function ks(t,e,n){if(F(e))return new xt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=We(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function fd(t,e,n){let r=t;return ke(n,(i,s)=>{r=ks(r,te(e,i),s)}),r}function Nm(t,e){if(F(e))return xt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new xt(n)}}function pd(t,e){return Br(t,e)!=null}function Br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function Am(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Y,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function Wn(t,e){if(F(e))return t;{const n=Br(t,e);return n!=null?new xt(new q(n)):new xt(t.writeTree_.subtree(e))}}function md(t){return t.writeTree_.isEmpty()}function Ri(t,e){return jy(V(),t.writeTree_,e)}function jy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=jy(te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return $y(e,t)}function gk(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ks(t.visibleWrites,e,n)),t.lastWriteId=r}function _k(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=fd(t.visibleWrites,e,n),t.lastWriteId=r}function vk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function yk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wk(a,r.path)?i=!1:mt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Ek(t),!0;if(r.snap)t.visibleWrites=Nm(t.visibleWrites,r.path);else{const a=r.children;ke(a,l=>{t.visibleWrites=Nm(t.visibleWrites,te(r.path,l))})}return!0}else return!1}function wk(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(te(t.path,n),e))return!0;return!1}function Ek(t){t.visibleWrites=zy(t.allWrites,Ik,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ik(t){return t.visible}function zy(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)mt(n,o)?(a=We(n,o),r=ks(r,a,s.snap)):mt(o,n)&&(a=We(o,n),r=ks(r,V(),s.snap.getChild(a)));else if(s.children){if(mt(n,o))a=We(n,o),r=fd(r,a,s.children);else if(mt(o,n))if(a=We(o,n),F(a))r=fd(r,V(),s.children);else{const l=Nr(s.children,M(a));if(l){const u=l.getChild(K(a));r=ks(r,V(),u)}}}else throw Li("WriteRecord should have .snap or .children")}}return r}function By(t,e,n,r,i){if(!r&&!i){const s=Br(t.visibleWrites,e);if(s!=null)return s;{const o=Wn(t.visibleWrites,e);if(md(o))return n;if(n==null&&!pd(o,V()))return null;{const a=n||x.EMPTY_NODE;return Ri(o,a)}}}else{const s=Wn(t.visibleWrites,e);if(!i&&md(s))return n;if(!i&&n==null&&!pd(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(mt(u.path,e)||mt(e,u.path))},a=zy(t.allWrites,o,e),l=n||x.EMPTY_NODE;return Ri(a,l)}}}function Sk(t,e,n){let r=x.EMPTY_NODE;const i=Br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Wn(t.visibleWrites,e);return n.forEachChild(Y,(o,a)=>{const l=Ri(Wn(s,new $(o)),a);r=r.updateImmediateChild(o,l)}),Am(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Wn(t.visibleWrites,e);return Am(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ck(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,n);if(pd(t.visibleWrites,s))return null;{const o=Wn(t.visibleWrites,s);return md(o)?i.getChild(n):Ri(o,i.getChild(n))}}function Tk(t,e,n,r){const i=te(e,n),s=Br(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Wn(t.visibleWrites,i);return Ri(o,r.getNode().getImmediateChild(n))}else return null}function kk(t,e){return Br(t.visibleWrites,e)}function Pk(t,e,n,r,i,s,o){let a;const l=Wn(t.visibleWrites,e),u=Br(l,V());if(u!=null)a=u;else if(n!=null)a=Ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function Rk(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function al(t,e,n,r){return By(t.writeTree,t.treePath,e,n,r)}function Qh(t,e){return Sk(t.writeTree,t.treePath,e)}function Om(t,e,n,r){return Ck(t.writeTree,t.treePath,e,n,r)}function ll(t,e){return kk(t.writeTree,te(t.treePath,e))}function Nk(t,e,n,r,i,s){return Pk(t.writeTree,t.treePath,e,n,r,i,s)}function Yh(t,e,n){return Tk(t.writeTree,t.treePath,e,n)}function Vy(t,e){return $y(te(t.treePath,e),t.writeTree)}function $y(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,eo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ki(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,eo(r,e.snapshotNode,i.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Hy=new Ok;class Jh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),s=Nk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){return{filter:t}}function bk(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Dk(t,e,n,r,i){const s=new Ak;let o,a;if(n.type===Nt.OVERWRITE){const u=n;u.source.fromUser?o=gd(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=ul(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Nt.MERGE){const u=n;u.source.fromUser?o=Mk(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=_d(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Nt.ACK_USER_WRITE){const u=n;u.revert?o=Wk(t,e,u.path,r,i,s):o=Fk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Nt.LISTEN_COMPLETE)o=Uk(t,e,n.path,r,s);else throw Li("Unknown operation type: "+n.type);const l=s.getChanges();return Lk(e,o,l),{viewCache:o,changes:l}}function Lk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ol(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Uy(ol(e)))}}function Gy(t,e,n,r,i,s){const o=e.eventCache;if(ll(r,n)!=null)return e;{let a,l;if(F(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),d=u instanceof x?u:x.EMPTY_NODE,c=Qh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=al(r,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){I(qn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Om(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=K(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=Om(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Yh(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Ts(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function ul(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=M(n);if(!l.isCompleteForPath(n)&&qn(n)>1)return e;const _=K(n),S=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(l.getNode(),S):u=d.updateChild(l.getNode(),g,S,_,Hy,null)}const c=Wy(e,u,l.isFullyInitialized()||F(n),d.filtersNodes()),h=new Jh(i,c,s);return Gy(t,c,n,i,h,a)}function gd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Jh(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ts(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ts(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=K(n),g=a.getNode().getImmediateChild(c);let _;if(F(h))_=r;else{const v=d.getCompleteChild(c);v!=null?Wh(h)===".priority"&&v.getChild(Oy(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=x.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),c,_,h,d,o);l=Ts(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function xm(t,e){return t.eventCache.isCompleteForChild(e)}function Mk(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=te(n,l);xm(e,M(d))&&(a=gd(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=te(n,l);xm(e,M(d))||(a=gd(t,a,d,u,i,s,o))}),a}function bm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _d(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;F(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=bm(t,g,h);l=ul(t,l,new $(c),_,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=bm(t,_,h);l=ul(t,l,new $(c),v,i,s,o,a)}}),l}function Fk(t,e,n,r,i,s,o){if(ll(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ul(t,e,n,l.getNode().getChild(n),i,s,a,o);if(F(n)){let u=new q(null);return l.getNode().forEachChild(Kt,(d,c)=>{u=u.set(new $(d),c)}),_d(t,e,n,u,i,s,a,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=te(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),_d(t,e,n,u,i,s,a,o)}}function Uk(t,e,n,r,i){const s=e.serverCache,o=Wy(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return Gy(t,o,n,r,Hy,i)}function Wk(t,e,n,r,i,s){let o;if(ll(r,n)!=null)return e;{const a=new Jh(r,e,i),l=e.eventCache.getNode();let u;if(F(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=al(r,xr(e));else{const c=e.serverCache.getNode();I(c instanceof x,"serverChildren would be complete if leaf node"),d=Qh(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=M(n);let c=Yh(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,K(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,x.EMPTY_NODE,K(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=al(r,xr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ll(r,V())!=null,Ts(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Hh(r.getIndex()),s=ek(r);this.processor_=xk(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,a.getNode(),null),d=new Qn(l,o.isFullyInitialized(),i.filtersNodes()),c=new Qn(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zl(c,d),this.eventGenerator_=new dk(this.query_)}get query(){return this.query_}}function zk(t){return t.viewCache_.serverCache.getNode()}function Bk(t){return ol(t.viewCache_)}function Vk(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Dm(t){return t.eventRegistrations_.length===0}function $k(t,e){t.eventRegistrations_.push(e)}function Lm(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Mm(t,e,n,r){e.type===Nt.MERGE&&e.source.queryId!==null&&(I(xr(t.viewCache_),"We should always have a full cache before handling merges"),I(ol(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Dk(t.processor_,i,e,n,r);return bk(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ky(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Hk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Y,(s,o)=>{r.push(ki(s,o))}),n.isFullyInitialized()&&r.push(Uy(n.getNode())),Ky(t,r,n.getNode(),e)}function Ky(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return hk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class qy{constructor(){this.views=new Map}}function Gk(t){I(!cl,"__referenceConstructor has already been defined"),cl=t}function Kk(){return I(cl,"Reference.ts has not been loaded"),cl}function qk(t){return t.views.size===0}function Xh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Mm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Mm(o,e,n,r));return s}}function Qy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=al(n,i?r:null),l=!1;a?l=!0:r instanceof x?(a=Qh(n,r),l=!1):(a=x.EMPTY_NODE,l=!1);const u=zl(new Qn(a,l,!1),new Qn(r,i,!1));return new jk(e,u)}return o}function Qk(t,e,n,r,i,s){const o=Qy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$k(o,n),Hk(o,n)}function Yk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Yn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Lm(u,n,r)),Dm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Lm(l,n,r)),Dm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Yn(t)&&s.push(new(Kk())(e._repo,e._path)),{removed:s,events:o}}function Yy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jn(t,e){let n=null;for(const r of t.views.values())n=n||Vk(r,e);return n}function Jy(t,e){if(e._queryParams.loadsAllData())return Vl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xy(t,e){return Jy(t,e)!=null}function Yn(t){return Vl(t)!=null}function Vl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;function Jk(t){I(!dl,"__referenceConstructor has already been defined"),dl=t}function Xk(){return I(dl,"Reference.ts has not been loaded"),dl}let Zk=1;class Fm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=Rk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zh(t,e,n,r,i){return gk(t.pendingWriteTree_,e,n,r,i),i?Ui(t,new Or(Gh(),e,n)):[]}function eP(t,e,n,r){_k(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Ui(t,new Pi(Gh(),e,i))}function Pn(t,e,n=!1){const r=vk(t.pendingWriteTree_,e);if(yk(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(V(),!0):ke(r.children,o=>{s=s.set(new $(o),!0)}),Ui(t,new sl(r.path,s,n))}else return[]}function To(t,e,n){return Ui(t,new Or(Kh(),e,n))}function tP(t,e,n){const r=q.fromObject(n);return Ui(t,new Pi(Kh(),e,r))}function nP(t,e){return Ui(t,new no(Kh(),e))}function rP(t,e,n){const r=ef(t,n);if(r){const i=tf(r),s=i.path,o=i.queryId,a=We(s,e),l=new no(qh(o),a);return nf(t,s,l)}else return[]}function hl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Xy(o,e))){const l=Yk(o,e,n,r);qk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Yn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=oP(h);for(let _=0;_<g.length;++_){const v=g[_],S=v.query,p=nw(t,v);t.listenProvider_.startListening(Ps(S),ro(t,S),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ps(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Hl(h));t.listenProvider_.stopListening(Ps(h),g)}))}aP(t,u)}return a}function Zy(t,e,n,r){const i=ef(t,r);if(i!=null){const s=tf(i),o=s.path,a=s.queryId,l=We(o,e),u=new Or(qh(a),l,n);return nf(t,o,u)}else return[]}function iP(t,e,n,r){const i=ef(t,r);if(i){const s=tf(i),o=s.path,a=s.queryId,l=We(o,e),u=q.fromObject(n),d=new Pi(qh(a),l,u);return nf(t,o,d)}else return[]}function vd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=We(h,i);s=s||jn(g,_),o=o||Yn(g)});let a=t.syncPointTree_.get(i);a?(o=o||Yn(a),s=s||jn(a,V())):(a=new qy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=jn(_,V());v&&(s=s.updateImmediateChild(g,v))}));const u=Xy(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=Hl(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=lP();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Bl(t.pendingWriteTree_,i);let c=Qk(a,e,n,d,s,l);if(!u&&!o&&!r){const h=Jy(a,e);c=c.concat(uP(t,e,h))}return c}function $l(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),u=jn(a,l);if(u)return u});return By(i,e,s,n,!0)}function sP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=We(u,n);r=r||jn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||jn(i,V()):(i=new qy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qn(r,!0,!1):null,a=Bl(t.pendingWriteTree_,e._path),l=Qy(i,e,a,s?o.getNode():x.EMPTY_NODE,s);return Bk(l)}function Ui(t,e){return ew(e,t.syncPointTree_,null,Bl(t.pendingWriteTree_,V()))}function ew(t,e,n,r){if(F(t.path))return tw(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=jn(i,V()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=Vy(r,o);s=s.concat(ew(a,l,u,d))}return i&&(s=s.concat(Xh(i,t,r,n))),s}}function tw(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=jn(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Vy(r,o),d=t.operationForChild(o);d&&(s=s.concat(tw(d,a,l,u)))}),i&&(s=s.concat(Xh(i,t,r,n))),s}function nw(t,e){const n=e.query,r=ro(t,n);return{hashFn:()=>(zk(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?rP(t,n._path,r):nP(t,n._path);{const s=eT(i,n);return hl(t,n,null,s)}}}}function ro(t,e){const n=Hl(e);return t.queryToTagMap.get(n)}function Hl(t){return t._path.toString()+"$"+t._queryIdentifier}function ef(t,e){return t.tagToQueryMap.get(e)}function tf(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function nf(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Bl(t.pendingWriteTree_,e);return Xh(r,n,i,null)}function oP(t){return t.fold((e,n,r)=>{if(n&&Yn(n))return[Vl(n)];{let i=[];return n&&(i=Yy(n)),ke(r,(s,o)=>{i=i.concat(o)}),i}})}function Ps(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Xk())(t._repo,t._path):t}function aP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function lP(){return Zk++}function uP(t,e,n){const r=e._path,i=ro(t,e),s=nw(t,n),o=t.listenProvider_.startListening(Ps(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!Yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!F(u)&&d&&Yn(d))return[Vl(d).query];{let h=[];return d&&(h=h.concat(Yy(d).map(g=>g.query))),ke(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Ps(d),ro(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rf(n)}node(){return this.node_}}class sf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=te(this.path_,e);return new sf(this.syncTree_,n)}node(){return $l(this.syncTree_,this.path_)}}const cP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Um=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hP(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},hP=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},rw=function(t,e,n,r){return af(e,new sf(n,t),r)},of=function(t,e,n){return af(t,new rf(e),n)};function af(t,e,n){const r=t.getPriority().val(),i=Um(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Um(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(Y,(a,l)=>{const u=af(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Gl(t,e){let n=e instanceof $?e:new $(e),r=t,i=M(n);for(;i!==null;){const s=Nr(r.node.children,i)||{children:{},childCount:0};r=new lf(i,r,s),n=K(n),i=M(n)}return r}function Vr(t){return t.node.value}function uf(t,e){t.node.value=e,yd(t)}function iw(t){return t.node.childCount>0}function fP(t){return Vr(t)===void 0&&!iw(t)}function Kl(t,e){ke(t.node.children,(n,r)=>{e(new lf(n,t,r))})}function sw(t,e,n,r){n&&!r&&e(t),Kl(t,i=>{sw(i,e,!0,r)}),n&&r&&e(t)}function pP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ko(t){return new $(t.parent===null?t.name:ko(t.parent)+"/"+t.name)}function yd(t){t.parent!==null&&mP(t.parent,t.name,t)}function mP(t,e,n){const r=fP(n),i=at(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,yd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,yd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/[\[\].#$\/\u0000-\u001F\u007F]/,_P=/[\[\].#$\u0000-\u001F\u007F]/,Zu=10*1024*1024,ql=function(t){return typeof t=="string"&&t.length!==0&&!gP.test(t)},ow=function(t){return typeof t=="string"&&t.length!==0&&!_P.test(t)},vP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ow(t)},io=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Fl(t)||t&&typeof t=="object"&&at(t,".sv")},Qt=function(t,e,n,r){r&&e===void 0||Po(Xe(t,"value"),e,n)},Po=function(t,e,n){const r=n instanceof $?new DT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+dr(r));if(typeof e=="function")throw new Error(t+"contains a function "+dr(r)+" with contents = "+e.toString());if(Fl(e))throw new Error(t+"contains "+e.toString()+" "+dr(r));if(typeof e=="string"&&e.length>Zu/3&&Ml(e)>Zu)throw new Error(t+"contains a string greater than "+Zu+" utf8 bytes "+dr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ql(o)))throw new Error(t+" contains an invalid key ("+o+") "+dr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LT(r,o),Po(t,a,r),MT(r)}),i&&s)throw new Error(t+' contains ".value" child '+dr(r)+" in addition to actual children.")}},yP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Xs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ql(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&mt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},aw=function(t,e,n,r){if(r&&e===void 0)return;const i=Xe(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(o,a)=>{const l=new $(o);if(Po(i,a,te(n,l)),Wh(l)===".priority"&&!io(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),yP(i,s)},cf=function(t,e,n){if(!(n&&e===void 0)){if(Fl(e))throw new Error(Xe(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!io(e))throw new Error(Xe(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Ro=function(t,e,n,r){if(!(r&&n===void 0)&&!ql(n))throw new Error(Xe(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},so=function(t,e,n,r){if(!(r&&n===void 0)&&!ow(n))throw new Error(Xe(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),so(t,e,n,r)},gt=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ql(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vP(n))throw new Error(Xe(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ql(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!jh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function uw(t,e,n){Ql(t,n),cw(t,r=>jh(r,e))}function lt(t,e,n){Ql(t,n),cw(t,r=>mt(r,e)||mt(e,r))}function cw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(IP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function IP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yr&&Ce("event: "+n.toString()),Mi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="repo_interrupt",SP=25;class CP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=il(),this.transactionQueueTree_=new lf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TP(t,e,n){if(t.stats_=Fh(t.repoInfo_),t.forceRestClient_||iT())t.server_=new rl(t.repoInfo_,(r,i,s,o)=>{Wm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new an(t.repoInfo_,e,(r,i,s,o)=>{Wm(t,r,i,s,o)},r=>{jm(t,r)},r=>{kP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uT(t.repoInfo_,()=>new ck(t.stats_,t.server_)),t.infoData_=new sk,t.infoSyncTree_=new Fm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=To(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),df(t,"connected",!1),t.serverSyncTree_=new Fm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hw(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function No(t){return cP({timestamp:hw(t)})}function Wm(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Xa(n,u=>re(u));o=iP(t.serverSyncTree_,s,l,i)}else{const l=re(n);o=Zy(t.serverSyncTree_,s,l,i)}else if(r){const l=Xa(n,u=>re(u));o=tP(t.serverSyncTree_,s,l)}else{const l=re(n);o=To(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ni(t,s)),lt(t.eventQueue_,a,o)}function jm(t,e){df(t,"connected",e),e===!1&&NP(t)}function kP(t,e){ke(e,(n,r)=>{df(t,n,r)})}function df(t,e,n){const r=new $("/.info/"+e),i=re(n);t.infoData_.updateSnapshot(r,i);const s=To(t.infoSyncTree_,r,i);lt(t.eventQueue_,r,s)}function Yl(t){return t.nextWriteId_++}function PP(t,e,n){const r=sP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=re(i).withIndex(e._queryParams.getIndex());vd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=To(t.serverSyncTree_,e._path,s);else{const a=ro(t.serverSyncTree_,e);o=Zy(t.serverSyncTree_,e._path,s,a)}return lt(t.eventQueue_,e._path,o),hl(t.serverSyncTree_,e,n,null,!0),s},i=>(Wi(t,"get for query "+_e(e)+" failed: "+i),Promise.reject(new Error(i))))}function hf(t,e,n,r,i){Wi(t,"set",{path:e.toString(),value:n,priority:r});const s=No(t),o=re(n,r),a=$l(t.serverSyncTree_,e),l=of(o,a,s),u=Yl(t),d=Zh(t.serverSyncTree_,e,l,u,!0);Ql(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Me("set at "+e+" failed: "+h);const v=Pn(t.serverSyncTree_,u,!_);lt(t.eventQueue_,e,v),Jn(t,i,h,g)});const c=pf(t,e);Ni(t,c),lt(t.eventQueue_,c,[])}function RP(t,e,n,r){Wi(t,"update",{path:e.toString(),value:n});let i=!0;const s=No(t),o={};if(ke(n,(a,l)=>{i=!1,o[a]=rw(te(e,a),re(l),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),Jn(t,r,"ok",void 0);else{const a=Yl(t),l=eP(t.serverSyncTree_,e,o,a);Ql(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Me("update at "+e+" failed: "+u);const h=Pn(t.serverSyncTree_,a,!c),g=h.length>0?Ni(t,e):e;lt(t.eventQueue_,g,h),Jn(t,r,u,d)}),ke(n,u=>{const d=pf(t,te(e,u));Ni(t,d)}),lt(t.eventQueue_,e,[])}}function NP(t){Wi(t,"onDisconnectEvents");const e=No(t),n=il();hd(t.onDisconnect_,V(),(i,s)=>{const o=rw(i,s,t.serverSyncTree_,e);Fi(n,i,o)});let r=[];hd(n,V(),(i,s)=>{r=r.concat(To(t.serverSyncTree_,i,s));const o=pf(t,i);Ni(t,o)}),t.onDisconnect_=il(),lt(t.eventQueue_,V(),r)}function AP(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&dd(t.onDisconnect_,e),Jn(t,n,r,i)})}function zm(t,e,n,r){const i=re(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Fi(t.onDisconnect_,e,i),Jn(t,r,s,o)})}function OP(t,e,n,r,i){const s=re(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Fi(t.onDisconnect_,e,s),Jn(t,i,o,a)})}function xP(t,e,n,r){if(Ja(n)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),Jn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&ke(n,(o,a)=>{const l=re(a);Fi(t.onDisconnect_,te(e,o),l)}),Jn(t,r,i,s)})}function bP(t,e,n){let r;M(e._path)===".info"?r=vd(t.infoSyncTree_,e,n):r=vd(t.serverSyncTree_,e,n),uw(t.eventQueue_,e._path,r)}function wd(t,e,n){let r;M(e._path)===".info"?r=hl(t.infoSyncTree_,e,n):r=hl(t.serverSyncTree_,e,n),uw(t.eventQueue_,e._path,r)}function fw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dw)}function DP(t){t.persistentConnection_&&t.persistentConnection_.resume(dw)}function Wi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function Jn(t,e,n,r){e&&Mi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function LP(t,e,n,r,i,s){Wi(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:ly(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ff(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Po("transaction failed: Data returned ",l,o.path),o.status=0;const u=Gl(t.transactionQueueTree_,e),d=Vr(u)||[];d.push(o),uf(u,d);let c;typeof l=="object"&&l!==null&&at(l,".priority")?(c=Nr(l,".priority"),I(io(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=($l(t.serverSyncTree_,e)||x.EMPTY_NODE).getPriority().val();const h=No(t),g=re(l,c),_=of(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=_,o.currentWriteId=Yl(t);const v=Zh(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);lt(t.eventQueue_,e,v),Jl(t,t.transactionQueueTree_)}}function ff(t,e,n){return $l(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Jl(t,e=t.transactionQueueTree_){if(e||Xl(t,e),Vr(e)){const n=mw(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MP(t,ko(e),n)}else iw(e)&&Kl(e,n=>{Jl(t,n)})}function MP(t,e,n){const r=n.map(u=>u.currentWriteId),i=ff(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=We(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Wi(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Pn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Xl(t,Gl(t.transactionQueueTree_,e)),Jl(t,t.transactionQueueTree_),lt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Mi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Me("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ni(t,e)}},o)}function Ni(t,e){const n=pw(t,e),r=ko(n),i=mw(t,n);return FP(t,i,r),r}function FP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=We(n,l.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SP)d=!0,c="maxretry",i=i.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=ff(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Po("transaction failed: Data returned ",g,l.path);let _=re(g);typeof g=="object"&&g!=null&&at(g,".priority")||(_=_.updatePriority(h.getPriority()));const S=l.currentWriteId,p=No(t),f=of(_,h,p);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=f,l.currentWriteId=Yl(t),o.splice(o.indexOf(S),1),i=i.concat(Zh(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Pn(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0))}lt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Xl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Mi(r[a]);Jl(t,t.transactionQueueTree_)}function pw(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Vr(r)===void 0;)r=Gl(r,n),e=K(e),n=M(e);return r}function mw(t,e){const n=[];return gw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function gw(t,e,n){const r=Vr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kl(e,i=>{gw(t,i,n)})}function Xl(t,e){const n=Vr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,uf(e,n.length>0?n:void 0)}Kl(e,r=>{Xl(t,r)})}function pf(t,e){const n=ko(pw(t,e)),r=Gl(t.transactionQueueTree_,e);return pP(r,i=>{ec(t,i)}),ec(t,r),sw(r,i=>{ec(t,i)}),n}function ec(t,e){const n=Vr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Pn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?uf(e,void 0):n.length=s+1,lt(t.eventQueue_,ko(e),i);for(let o=0;o<r.length;o++)Mi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function WP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ed=function(t,e){const n=jP(t),r=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Iy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},jP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=UP(t.substring(d,c)));const h=WP(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Bm.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Bm.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class vw{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BP=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new He;return AP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){gt("OnDisconnect.remove",this._path);const e=new He;return zm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){gt("OnDisconnect.set",this._path),Qt("OnDisconnect.set",e,this._path,!1);const n=new He;return zm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){gt("OnDisconnect.setWithPriority",this._path),Qt("OnDisconnect.setWithPriority",e,this._path,!1),cf("OnDisconnect.setWithPriority",n,!1);const r=new He;return OP(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){gt("OnDisconnect.update",this._path),aw("OnDisconnect.update",e,this._path,!1);const n=new He;return xP(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:Wh(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Pm(this._queryParams),n=Lh(e);return n==="{}"?"default":n}get _queryObject(){return Pm(this._queryParams)}isEqual(e){if(e=D(e),!(e instanceof Ze))return!1;const n=this._repo===e._repo,r=jh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xT(this._path)}}function Zl(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function rr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Kt){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Kn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==fn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Y){if(e!=null&&!io(e)||n!=null&&!io(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Vh||t.getIndex()===$h,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function eu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class It extends Ze{constructor(e,n){super(e,n,new Wl,!1)}get parent(){const e=Oy(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let tu=class Id{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=br(this.ref,e);return new Id(this._node.getChild(n),r,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Id(i,br(this.ref,r),Y)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function yw(t,e){return t=D(t),t._checkNotDeleted("ref"),e!==void 0?br(t._root,e):t._root}function Vm(t,e){t=D(t),t._checkNotDeleted("refFromURL");const n=Ed(e,t._repo.repoInfo_.nodeAdmin);lw("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&qt("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),yw(t,n.path.toString())}function br(t,e){return t=D(t),M(t._path)===null?wP("child","path",e,!1):so("child","path",e,!1),new It(t._repo,te(t._path,e))}function VP(t,e){t=D(t),gt("push",t._path),Qt("push",e,t._path,!0);const n=hw(t._repo),r=zP(n),i=br(t,r),s=br(t,r);let o;return e!=null?o=gf(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function $P(t){return gt("remove",t._path),gf(t,null)}function gf(t,e){t=D(t),gt("set",t._path),Qt("set",e,t._path,!1);const n=new He;return hf(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function HP(t,e){t=D(t),gt("setPriority",t._path),cf("setPriority",e,!1);const n=new He;return hf(t._repo,te(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function GP(t,e,n){if(gt("setWithPriority",t._path),Qt("setWithPriority",e,t._path,!1),cf("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new He;return hf(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function KP(t,e){aw("update",e,t._path,!1);const n=new He;return RP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function qP(t){t=D(t);const e=new mf(()=>{}),n=new Ao(e);return PP(t._repo,t,n).then(r=>new tu(r,new It(t._repo,t._path),t._queryParams.getIndex()))}class Ao{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new _w("value",this,new tu(e.snapshotNode,new It(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vw(this,e,n):null}matches(e){return e instanceof Ao?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class nu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vw(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=br(new It(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new _w(e.type,this,new tu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof nu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Oo(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{wd(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new mf(n,s||void 0),a=e==="value"?new Ao(o):new nu(e,o);return bP(t._repo,t,a),()=>wd(t._repo,t,a)}function Sd(t,e,n,r){return Oo(t,"value",e,n,r)}function $m(t,e,n,r){return Oo(t,"child_added",e,n,r)}function Hm(t,e,n,r){return Oo(t,"child_changed",e,n,r)}function Gm(t,e,n,r){return Oo(t,"child_moved",e,n,r)}function Km(t,e,n,r){return Oo(t,"child_removed",e,n,r)}function qm(t,e,n){let r=null;const i=n?new mf(n):null;e==="value"?r=new Ao(i):e&&(r=new nu(e,i)),wd(t._repo,t,r)}class Lt{}class ww extends Lt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Qt("endAt",this._value,e._path,!0);const n=cd(e._queryParams,this._value,this._key);if(eu(n),rr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function QP(t,e){return Ro("endAt","key",e,!0),new ww(t,e)}class YP extends Lt{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Qt("endBefore",this._value,e._path,!1);const n=ik(e._queryParams,this._value,this._key);if(eu(n),rr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function JP(t,e){return Ro("endBefore","key",e,!0),new YP(t,e)}class Ew extends Lt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Qt("startAt",this._value,e._path,!0);const n=ud(e._queryParams,this._value,this._key);if(eu(n),rr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function XP(t=null,e){return Ro("startAt","key",e,!0),new Ew(t,e)}class ZP extends Lt{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Qt("startAfter",this._value,e._path,!1);const n=rk(e._queryParams,this._value,this._key);if(eu(n),rr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ze(e._repo,e._path,n,e._orderByCalled)}}function eR(t,e){return Ro("startAfter","key",e,!0),new ZP(t,e)}class tR extends Lt{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ze(e._repo,e._path,tk(e._queryParams,this._limit),e._orderByCalled)}}function nR(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new tR(t)}class rR extends Lt{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ze(e._repo,e._path,nk(e._queryParams,this._limit),e._orderByCalled)}}function iR(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new rR(t)}class sR extends Lt{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Zl(e,"orderByChild");const n=new $(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Vh(n),i=jl(e._queryParams,r);return rr(i),new Ze(e._repo,e._path,i,!0)}}function oR(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return so("orderByChild","path",t,!1),new sR(t)}class aR extends Lt{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Zl(e,"orderByKey");const n=jl(e._queryParams,Kt);return rr(n),new Ze(e._repo,e._path,n,!0)}}function lR(){return new aR}class uR extends Lt{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Zl(e,"orderByPriority");const n=jl(e._queryParams,Y);return rr(n),new Ze(e._repo,e._path,n,!0)}}function cR(){return new uR}class dR extends Lt{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Zl(e,"orderByValue");const n=jl(e._queryParams,$h);return rr(n),new Ze(e._repo,e._path,n,!0)}}function hR(){return new dR}class fR extends Lt{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Qt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new ww(this._value,this._key)._apply(new Ew(this._value,this._key)._apply(e))}}function pR(t,e){return Ro("equalTo","key",e,!0),new fR(t,e)}function Tt(t,...e){let n=D(t);for(const r of e)n=r._apply(n);return n}Gk(It);Jk(It);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="FIREBASE_DATABASE_EMULATOR_HOST",Cd={};let gR=!1;function _R(t,e,n,r){t.repoInfo_=new Iy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Iw(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ed(s,i),a=o.repoInfo,l,u;typeof process<"u"&&um&&(u=um[mR]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Ed(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new pi(pi.OWNER):new oT(t.name,t.options,e);lw("Invalid Firebase Database URL",o),F(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=yR(a,t,d,new sT(t.name,n));return new wR(c,t)}function vR(t,e){const n=Cd[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fw(t),delete n[t.key]}function yR(t,e,n,r){let i=Cd[e.name];i||(i={},Cd[e.name]=i);let s=i[t.toURLString()];return s&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new CP(t,gR,n,r),i[t.toURLString()]=s,s}let wR=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}};function Sw(){Ti.IS_TRANSPORT_INITIALIZED&&Me("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function ER(){Sw(),kn.forceDisallow()}function IR(){Sw(),ft.forceDisallow(),kn.forceAllow()}function SR(t,e,n,r={}){t=D(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new pi(pi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:vS(r.mockUserToken,t.app.options.projectId);s=new pi(o)}_R(i,e,n,s)}function CR(t){t=D(t),t._checkNotDeleted("goOffline"),fw(t._repo)}function TR(t){t=D(t),t._checkNotDeleted("goOnline"),DP(t._repo)}function kR(t,e){cy(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){oy(tr),Gn(new wt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Iw(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Gt(cm,dm,t),Gt(cm,dm,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR={".sv":"timestamp"};function NR(){return RR}function AR(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OR=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function xR(t,e,n){var r;if(t=D(t),gt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new He,o=(l,u,d)=>{let c=null;l?s.reject(l):(c=new tu(d,new It(t._repo,t._path),Y),s.resolve(new OR(u,c)))},a=Sd(t,()=>{});return LP(t._repo,t._path,e,o,a,i),s.promise}an.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};an.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};PR();const bR="@firebase/database-compat",DR="1.0.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new Eo("@firebase/database-compat"),Cw=function(t){const e="FIREBASE WARNING: "+t;LR.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(Xe(t,e)+"must be a boolean.")},FR=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Xe(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this._delegate=e}cancel(e){b("OnDisconnect.cancel",0,1,arguments.length),Ie("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){b("OnDisconnect.remove",0,1,arguments.length),Ie("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){b("OnDisconnect.set",1,2,arguments.length),Ie("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){b("OnDisconnect.setWithPriority",2,3,arguments.length),Ie("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(b("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,Cw("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ie("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return b("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this._database=e,this._delegate=n}val(){return b("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return b("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return b("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return b("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return b("DataSnapshot.child",0,1,arguments.length),e=String(e),so("DataSnapshot.child","path",e,!1),new zn(this._database,this._delegate.child(e))}hasChild(e){return b("DataSnapshot.hasChild",1,1,arguments.length),so("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return b("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return b("DataSnapshot.forEach",1,1,arguments.length),Ie("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new zn(this._database,n)))}hasChildren(){return b("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return b("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return b("DataSnapshot.ref",0,0,arguments.length),new nt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Pe{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;b("Query.on",2,4,arguments.length),Ie("Query.on","callback",n,!1);const o=Pe.getCancelAndContextArgs_("Query.on",r,i),a=(u,d)=>{n.call(o.context,new zn(this.database,u),d)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Sd(this._delegate,a,l),n;case"child_added":return $m(this._delegate,a,l),n;case"child_removed":return Km(this._delegate,a,l),n;case"child_changed":return Hm(this._delegate,a,l),n;case"child_moved":return Gm(this._delegate,a,l),n;default:throw new Error(Xe("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(b("Query.off",0,3,arguments.length),FR("Query.off",e,!0),Ie("Query.off","callback",n,!0),Zp("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,qm(this._delegate,e,i)}else qm(this._delegate,e)}get(){return qP(this._delegate).then(e=>new zn(this.database,e))}once(e,n,r,i){b("Query.once",1,4,arguments.length),Ie("Query.once","callback",n,!0);const s=Pe.getCancelAndContextArgs_("Query.once",r,i),o=new He,a=(u,d)=>{const c=new zn(this.database,u);n&&n.call(s.context,c,d),o.resolve(c)};a.userCallback=n,a.context=s.context;const l=u=>{s.cancel&&s.cancel.call(s.context,u),o.reject(u)};switch(e){case"value":Sd(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":$m(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":Km(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":Hm(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":Gm(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(Xe("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return b("Query.limitToFirst",1,1,arguments.length),new Pe(this.database,Tt(this._delegate,nR(e)))}limitToLast(e){return b("Query.limitToLast",1,1,arguments.length),new Pe(this.database,Tt(this._delegate,iR(e)))}orderByChild(e){return b("Query.orderByChild",1,1,arguments.length),new Pe(this.database,Tt(this._delegate,oR(e)))}orderByKey(){return b("Query.orderByKey",0,0,arguments.length),new Pe(this.database,Tt(this._delegate,lR()))}orderByPriority(){return b("Query.orderByPriority",0,0,arguments.length),new Pe(this.database,Tt(this._delegate,cR()))}orderByValue(){return b("Query.orderByValue",0,0,arguments.length),new Pe(this.database,Tt(this._delegate,hR()))}startAt(e=null,n){return b("Query.startAt",0,2,arguments.length),new Pe(this.database,Tt(this._delegate,XP(e,n)))}startAfter(e=null,n){return b("Query.startAfter",0,2,arguments.length),new Pe(this.database,Tt(this._delegate,eR(e,n)))}endAt(e=null,n){return b("Query.endAt",0,2,arguments.length),new Pe(this.database,Tt(this._delegate,QP(e,n)))}endBefore(e=null,n){return b("Query.endBefore",0,2,arguments.length),new Pe(this.database,Tt(this._delegate,JP(e,n)))}equalTo(e,n){return b("Query.equalTo",1,2,arguments.length),new Pe(this.database,Tt(this._delegate,pR(e,n)))}toString(){return b("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return b("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(b("Query.isEqual",1,1,arguments.length),!(e instanceof Pe)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ie(e,"cancel",i.cancel,!0),i.context=r,Zp(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(Xe(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new nt(this.database,new It(this._delegate._repo,this._delegate._path))}}class nt extends Pe{constructor(e,n){super(e,new Ze(n._repo,n._path,new Wl,!1)),this.database=e,this._delegate=n}getKey(){return b("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return b("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new nt(this.database,br(this._delegate,e))}getParent(){b("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new nt(this.database,e):null}getRoot(){return b("Reference.root",0,0,arguments.length),new nt(this.database,this._delegate.root)}set(e,n){b("Reference.set",1,2,arguments.length),Ie("Reference.set","onComplete",n,!0);const r=gf(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(b("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,Cw("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gt("Reference.update",this._delegate._path),Ie("Reference.update","onComplete",n,!0);const r=KP(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){b("Reference.setWithPriority",2,3,arguments.length),Ie("Reference.setWithPriority","onComplete",r,!0);const i=GP(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){b("Reference.remove",0,1,arguments.length),Ie("Reference.remove","onComplete",e,!0);const n=$P(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){b("Reference.transaction",1,3,arguments.length),Ie("Reference.transaction","transactionUpdate",e,!1),Ie("Reference.transaction","onComplete",n,!0),MR("Reference.transaction","applyLocally",r,!0);const i=xR(this._delegate,e,{applyLocally:r}).then(s=>new WR(s.committed,new zn(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){b("Reference.setPriority",1,2,arguments.length),Ie("Reference.setPriority","onComplete",n,!0);const r=HP(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){b("Reference.push",0,2,arguments.length),Ie("Reference.push","onComplete",n,!0);const r=VP(this._delegate,e),i=r.then(o=>new nt(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new nt(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return gt("Reference.onDisconnect",this._delegate._path),new UR(new BP(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:ER,forceLongPolling:IR}}useEmulator(e,n,r={}){SR(this._delegate,e,n,r)}ref(e){if(b("database.ref",0,1,arguments.length),e instanceof nt){const n=Vm(this._delegate,e.toString());return new nt(this,n)}else{const n=yw(this._delegate,e);return new nt(this,n)}}refFromURL(e){b("database.refFromURL",1,1,arguments.length);const r=Vm(this._delegate,e);return new nt(this,r)}goOffline(){return b("database.goOffline",0,0,arguments.length),CR(this._delegate)}goOnline(){return b("database.goOnline",0,0,arguments.length),TR(this._delegate)}}oo.ServerValue={TIMESTAMP:NR(),increment:t=>AR(t)};function jR({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){oy(n);const a=new Kv("database-standalone"),l=new td("auth-internal",a);l.setComponent(new wt("auth-internal",()=>r,"PRIVATE"));let u;return i&&(u=new td("app-check-internal",a),u.setComponent(new wt("app-check-internal",()=>i,"PRIVATE"))),{instance:new oo(Iw(t,l,u,e,o),t),namespace:s}}var zR=Object.freeze({__proto__:null,initStandalone:jR});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=oo.ServerValue;function VR(t){t.INTERNAL.registerComponent(new wt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new oo(i,r)},"PUBLIC").setServiceProps({Reference:nt,Query:Pe,Database:oo,DataSnapshot:zn,enableLogging:kR,INTERNAL:zR,ServerValue:BR}).setMultipleInstances(!0)),t.registerVersion(bR,DR)}VR(nr);function _f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ss={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Kr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HR=$R,GR=Tw,kw=new Wr("auth","Firebase",Tw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Eo("@firebase/auth");function KR(t,...e){fl.logLevel<=H.WARN&&fl.warn(`Auth (${tr}): ${t}`,...e)}function wa(t,...e){fl.logLevel<=H.ERROR&&fl.error(`Auth (${tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw vf(t,...e)}function Ae(t,...e){return vf(t,...e)}function Pw(t,e,n){const r=Object.assign(Object.assign({},GR()),{[e]:n});return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function ji(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xe(t,"argument-error"),Pw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kw.create(t,...e)}function E(t,e,...n){if(!t)throw vf(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function Dt(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yf(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yf()||Bv()||"connection"in navigator)?navigator.onLine:!0}function QR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Oh()||Ll()}get(){return qR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e){Dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new xo(3e4,6e4);function le(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ue(t,e,n,r,i={}){return Nw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rw.fetch()(Aw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Nw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YR),e);try{const i=new ZR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fs(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pw(t,d,u);xe(t,d)}}catch(i){if(i instanceof Je)throw i;xe(t,"network-request-failed",{message:String(i)})}}async function gn(t,e,n,r,i={}){const s=await ue(t,e,n,r,i);return"mfaPendingCredential"in s&&xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Aw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wf(t.config,i):`${t.config.apiScheme}://${i}`}function XR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),JR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ae(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){return t!==void 0&&t.getResponse!==void 0}function Jm(t){return t!==void 0&&t.enterprise!==void 0}class eN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t){return(await ue(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function nN(t,e){return ue(t,"GET","/v2/recaptchaConfig",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e){return ue(t,"POST","/v1/accounts:delete",e)}async function iN(t,e){return ue(t,"POST","/v1/accounts:update",e)}async function sN(t,e){return ue(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oN(t,e=!1){const n=D(t),r=await n.getIdToken(e),i=ru(r);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Rs(tc(i.auth_time)),issuedAtTime:Rs(tc(i.iat)),expirationTime:Rs(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qa(n);return i?JSON.parse(i):(wa("Failed to decode base64 JWT payload"),null)}catch(i){return wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aN(t){const e=ru(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Je&&lN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pn(t,sN(n,{idToken:r}));E(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hN(s.providerUserInfo):[],a=dN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ow(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function cN(t){const e=D(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hN(t){return t.map(e=>{var{providerId:n}=e,r=_f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t,e){const n=await Nw(t,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Aw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pN(t,e){return ue(t,"POST","/v2/accounts:revokeToken",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new uo;return r&&(E(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ow(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pn(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oN(this,e)}reload(){return cN(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pn(this,rN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:C,providerData:N,stsTokenManager:A}=n;E(m&&A,e,"internal-error");const O=uo.fromJSON(this.name,A);E(typeof m=="string",e,"internal-error"),yn(c,e.name),yn(h,e.name),E(typeof y=="boolean",e,"internal-error"),E(typeof C=="boolean",e,"internal-error"),yn(g,e.name),yn(_,e.name),yn(v,e.name),yn(S,e.name),yn(p,e.name),yn(f,e.name);const J=new wr({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(J.providerData=N.map(j=>Object.assign({},j))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new uo;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lo(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;function it(t){Dt(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(Dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xw.type="NONE";const Ai=xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Er(this.userKey,i.apiKey,s),this.fullPersistenceKey=Er("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mi(it(Ai),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||it(Ai);const o=Er(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=wr._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mw(e))return"Blackberry";if(Fw(e))return"Webos";if(Ef(e))return"Safari";if((e.includes("chrome/")||Dw(e))&&!e.includes("edge/"))return"Chrome";if(bo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bw(t=me()){return/firefox\//i.test(t)}function Ef(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dw(t=me()){return/crios\//i.test(t)}function Lw(t=me()){return/iemobile/i.test(t)}function bo(t=me()){return/android/i.test(t)}function Mw(t=me()){return/blackberry/i.test(t)}function Fw(t=me()){return/webos/i.test(t)}function zi(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mN(t=me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function gN(t=me()){var e;return zi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _N(){return Vv()&&document.documentMode===10}function Uw(t=me()){return zi(t)||bo(t)||Fw(t)||Mw(t)||/windows phone/i.test(t)||Lw(t)}function vN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=Zm(me());break;case"Worker":n=`${Zm(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e={}){return ue(t,"GET","/v2/passwordPolicy",le(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=6;class IN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new yN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?D(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wN(this),n=new IN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ae(t){return D(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gv(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CN(t){Do=t}function If(t){return Do.loadJS(t)}function TN(){return Do.recaptchaV2Script}function kN(){return Do.recaptchaEnterpriseScript}function PN(){return Do.gapiScript}function jw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RN="recaptcha-enterprise",NN="NO_RECAPTCHA";class AN{constructor(e){this.type=RN,this.auth=ae(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{nN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Jm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(NN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Jm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kN();l.length!==0&&(l+=a),If(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function tg(t,e,n,r=!1){const i=new AN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function co(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await tg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function ON(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xN(t,e,n){const r=ae(t);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zw(e),{host:o,port:a}=bN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DN()}function zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bN(t){const e=zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ng(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ng(o)}}}function ng(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e){return ue(t,"POST","/v1/accounts:resetPassword",le(t,e))}async function LN(t,e){return ue(t,"POST","/v1/accounts:update",e)}async function MN(t,e){return ue(t,"POST","/v1/accounts:signUp",e)}async function FN(t,e){return ue(t,"POST","/v1/accounts:update",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e){return gn(t,"POST","/v1/accounts:signInWithPassword",le(t,e))}async function iu(t,e){return ue(t,"POST","/v1/accounts:sendOobCode",le(t,e))}async function WN(t,e){return iu(t,e)}async function jN(t,e){return iu(t,e)}async function zN(t,e){return iu(t,e)}async function BN(t,e){return iu(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e){return gn(t,"POST","/v1/accounts:signInWithEmailLink",le(t,e))}async function $N(t,e){return gn(t,"POST","/v1/accounts:signInWithEmailLink",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Bi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,n,"signInWithPassword",UN);case"emailLink":return VN(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,r,"signUpPassword",MN);case"emailLink":return $N(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(t,e){return gn(t,"POST","/v1/accounts:signInWithIdp",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN="http://localhost";class Yt extends Bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:HN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e){return ue(t,"POST","/v1/accounts:sendVerificationCode",le(t,e))}async function KN(t,e){return gn(t,"POST","/v1/accounts:signInWithPhoneNumber",le(t,e))}async function qN(t,e){const n=await gn(t,"POST","/v1/accounts:signInWithPhoneNumber",le(t,e));if(n.temporaryProof)throw fs(t,"account-exists-with-different-credential",n);return n}const QN={USER_NOT_FOUND:"user-not-found"};async function YN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gn(t,"POST","/v1/accounts:signInWithPhoneNumber",le(t,n),QN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Bi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ir({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ir({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return KN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return qN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return YN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ir({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XN(t){const e=oi(hs(t)).link,n=e?oi(hs(e)).deep_link_id:null,r=oi(hs(t)).deep_link_id;return(r?oi(hs(r)).link:null)||r||n||e||t}class su{constructor(e){var n,r,i,s,o,a;const l=oi(hs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=JN((i=l.mode)!==null&&i!==void 0?i:null);E(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XN(e);try{return new su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=su.parseLink(n);return E(r,"argument-error"),ho._fromEmailAndCode(e,r.code,r.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends _n{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class gi extends Vi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return E("providerId"in n&&"signInMethod"in n,"argument-error"),Yt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),Yt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return gi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return gi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new gi(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Vi{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Vi{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="http://localhost";class Oi extends Bi{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Oi(r,s)}static _create(e,n){return new Oi(e,n)}buildRequest(){return{requestUri:ZN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="saml.";class pl extends _n{constructor(e){E(e.startsWith(e1),"argument-error"),super(e)}static credentialFromResult(e){return pl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return pl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Oi.fromJSON(e);return E(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Oi._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Vi{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(t,e){return gn(t,"POST","/v1/accounts:signUp",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=rg(r);return new Et({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rg(r);return new Et({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t){var e;const n=ae(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Vw(n,{returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Je{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ml(e,n,r,i)}}function $w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e){const n=D(t);await ou(!0,n,e);const{providerUserInfo:r}=await iN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Hw(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Sf(t,e,n=!1){const r=await pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Et._forOperation(t,"link",r)}async function ou(t,e,n){await lo(e);const r=Hw(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";E(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await pn(t,$w(r,i,e,t),n);E(s.idToken,r,"internal-error");const o=ru(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(t.uid===a,r,"user-mismatch"),Et._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t,e,n=!1){const r="signIn",i=await $w(t,r,e),s=await Et._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function au(t,e){return Kw(ae(t),e)}async function qw(t,e){const n=D(t);return await ou(!1,n,e.providerId),Sf(n,e)}async function Qw(t,e){return Gw(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e){return gn(t,"POST","/v1/accounts:signInWithCustomToken",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e){const n=ae(t),r=await r1(n,{token:e,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Cf._fromServerResponse(e,n):"totpInfo"in n?Tf._fromServerResponse(e,n):xe(e,"internal-error")}}class Cf extends Lo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Cf(n)}}class Tf extends Lo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Tf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e,n){var r;E(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),E(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(t){const e=ae(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function s1(t,e,n){const r=ae(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&lu(r,i,n),await co(r,i,"getOobCode",jN)}async function o1(t,e,n){await Bw(D(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kf(t),r})}async function a1(t,e){await FN(D(t),{oobCode:e})}async function Yw(t,e){const n=D(t),r=await Bw(n,{oobCode:e}),i=r.requestType;switch(E(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(r.mfaInfo,n,"internal-error");default:E(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Lo._fromServerResponse(ae(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function l1(t,e){const{data:n}=await Yw(D(t),e);return n.email}async function u1(t,e,n){const r=ae(t),o=await co(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&kf(t),l}),a=await Et._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function c1(t,e,n){return au(D(t),ir.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kf(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e,n){const r=ae(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){E(a.handleCodeInApp,r,"argument-error"),a&&lu(r,o,a)}s(i,n),await co(r,i,"getOobCode",zN)}function h1(t,e){const n=su.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function f1(t,e,n){const r=D(t),i=ir.credentialWithLink(e,n||ao());return E(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),au(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e){return ue(t,"POST","/v1/accounts:createAuthUri",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(t,e){const n=yf()?ao():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await p1(D(t),r);return i||[]}async function g1(t,e){const n=D(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&lu(n.auth,i,e);const{email:s}=await WN(n.auth,i);s!==t.email&&await t.reload()}async function _1(t,e,n){const r=D(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&lu(r.auth,s,n);const{email:o}=await BN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(t,e){return ue(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=D(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pn(r,v1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function w1(t,e){return Jw(D(t),e,null)}function E1(t,e){return Jw(D(t),null,e)}async function Jw(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pn(t,LN(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=ru(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new _i(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new S1(s,i);case"github.com":return new C1(s,i);case"google.com":return new T1(s,i);case"twitter.com":return new k1(s,i,t.screenName||null);case"custom":case"anonymous":return new _i(s,null);default:return new _i(s,r,i)}}class _i{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Xw extends _i{constructor(e,n,r,i){super(e,n,r),this.username=i}}class S1 extends _i{constructor(e,n){super(e,"facebook.com",n)}}class C1 extends Xw{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class T1 extends _i{constructor(e,n){super(e,"google.com",n)}}class k1 extends Xw{constructor(e,n,r){super(e,"twitter.com",n,r)}}function P1(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:I1(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new gr("enroll",e,n)}static _fromMfaPendingCredential(e){return new gr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return gr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return gr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ae(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Lo._fromServerResponse(r,a));E(i.mfaPendingCredential,r,"internal-error");const o=gr._fromMfaPendingCredential(i.mfaPendingCredential);return new Pf(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Et._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return E(n.user,r,"internal-error"),Et._forOperation(n.user,n.operationType,u);default:xe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function R1(t,e){var n;const r=D(t),i=e;return E(e.customData.operationType,r,"argument-error"),E((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Pf._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e){return ue(t,"POST","/v2/accounts/mfaEnrollment:start",le(t,e))}function A1(t,e){return ue(t,"POST","/v2/accounts/mfaEnrollment:finalize",le(t,e))}function O1(t,e){return ue(t,"POST","/v2/accounts/mfaEnrollment:withdraw",le(t,e))}class Rf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Lo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Rf(e)}async getSession(){return gr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pn(this.user,O1(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const nc=new WeakMap;function x1(t){const e=D(t);return nc.has(e)||nc.set(e,Rf._fromUser(e)),nc.get(e)}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){const t=me();return Ef(t)||zi(t)}const D1=1e3,L1=10;class eE extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=b1()&&vN(),this.fallbackToPolling=Uw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_N()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,L1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const Nf=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const Dr=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await M1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Mo("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function U1(t){he().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function W1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function z1(){return Af()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firebaseLocalStorageDb",B1=1,_l="firebaseLocalStorage",rE="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cu(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function V1(){const t=indexedDB.deleteDatabase(nE);return new Fo(t).toPromise()}function Td(){const t=indexedDB.open(nE,B1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_l,{keyPath:rE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await V1(),e(await Td()))})})}async function ig(t,e,n){const r=cu(t,!0).put({[rE]:e,value:n});return new Fo(r).toPromise()}async function $1(t,e){const n=cu(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function sg(t,e){const n=cu(t,!0).delete(e);return new Fo(n).toPromise()}const H1=800,G1=3;class iE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>G1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Af()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(z1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await W1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await ig(e,gl,"1"),await sg(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ig(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cu(i,!1).getAll();return new Fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iE.type="LOCAL";const fo=iE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t,e){return ue(t,"POST","/v2/accounts/mfaSignIn:start",le(t,e))}function q1(t,e){return ue(t,"POST","/v2/accounts/mfaSignIn:finalize",le(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=500,Y1=6e4,aa=1e12;class J1{constructor(e){this.auth=e,this.counter=aa,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new X1(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||aa;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||aa;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||aa;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class X1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;E(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Z1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Y1)},Q1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Z1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=jw("rcb"),eA=new xo(3e4,6e4);class tA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=he().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return E(nA(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ym(he().grecaptcha)?Promise.resolve(he().grecaptcha):new Promise((r,i)=>{const s=he().setTimeout(()=>{i(Ae(e,"network-request-failed"))},eA.get());he()[rc]=()=>{he().clearTimeout(s),delete he()[rc];const a=he().grecaptcha;if(!a||!Ym(a)){i(Ae(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const c=l(u,d);return this.counter++,c},this.hostLanguage=n,r(a)};const o=`${TN()}?${jr({onload:rc,render:"explicit",hl:n})}`;If(o).catch(()=>{clearTimeout(s),i(Ae(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=he().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function nA(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class rA{async load(e){return new J1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="recaptcha",iA={theme:"light",type:"image"};let sA=class{constructor(e,n,r=Object.assign({},iA)){this.parameters=r,this.type=sE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ae(e),this.isInvisible=this.parameters.size==="invisible",E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;E(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new rA:new tA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=he()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(yf()&&!Af(),this.auth,"internal-error"),await oA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await tN(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function oA(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ir._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function aA(t,e,n){const r=ae(t),i=await du(r,e,D(n));return new Of(i,s=>au(r,s))}async function lA(t,e,n){const r=D(t);await ou(!1,r,"phone");const i=await du(r.auth,e,D(n));return new Of(i,s=>qw(r,s))}async function uA(t,e,n){const r=D(t),i=await du(r.auth,e,D(n));return new Of(i,s=>Qw(r,s))}async function du(t,e,n){var r;const i=await n.verify();try{E(typeof i=="string",t,"argument-error"),E(n.type===sE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return E(o.type==="enroll",t,"internal-error"),(await N1(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{E(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return E(a,t,"missing-multi-factor-info"),(await K1(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await GN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function cA(t,e){await Sf(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr=class Ea{constructor(e){this.providerId=Ea.PROVIDER_ID,this.auth=ae(e)}verifyPhoneNumber(e,n){return du(this.auth,e,D(n))}static credential(e,n){return Ir._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Ea.credentialFromTaggedObject(n)}static credentialFromError(e){return Ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ir._fromTokenResponse(n,r):null}};Lr.PROVIDER_ID="phone";Lr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){return e?it(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dA(t){return Kw(t.auth,new xf(t),t.bypassAuthState)}function hA(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),Gw(n,new xf(t),t.bypassAuthState)}async function fA(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),Sf(n,new xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dA;case"linkViaPopup":case"linkViaRedirect":return fA;case"reauthViaPopup":case"reauthViaRedirect":return hA;default:xe(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new xo(2e3,1e4);async function mA(t,e,n){const r=ae(t);ji(t,e,_n);const i=$r(r,n);return new nn(r,"signInViaPopup",e,i).executeNotNull()}async function gA(t,e,n){const r=D(t);ji(r.auth,e,_n);const i=$r(r.auth,n);return new nn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function _A(t,e,n){const r=D(t);ji(r.auth,e,_n);const i=$r(r.auth,n);return new nn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nn extends oE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pA.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="pendingRedirect",Ns=new Map;class yA extends oE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ns.get(this.auth._key());if(!e){try{const r=await wA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ns.set(this.auth._key(),e)}return this.bypassAuthState||Ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wA(t,e){const n=lE(e),r=aE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function bf(t,e){return aE(t)._set(lE(e),"true")}function EA(){Ns.clear()}function Df(t,e){Ns.set(t._key(),e)}function aE(t){return it(t._redirectPersistence)}function lE(t){return Er(vA,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e,n){return SA(t,e,n)}async function SA(t,e,n){const r=ae(t);ji(t,e,_n),await r._initializationPromise;const i=$r(r,n);return await bf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function CA(t,e,n){return TA(t,e,n)}async function TA(t,e,n){const r=D(t);ji(r.auth,e,_n),await r.auth._initializationPromise;const i=$r(r.auth,n);await bf(i,r.auth);const s=await uE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function kA(t,e,n){return PA(t,e,n)}async function PA(t,e,n){const r=D(t);ji(r.auth,e,_n),await r.auth._initializationPromise;const i=$r(r.auth,n);await ou(!1,r,e.providerId),await bf(i,r.auth);const s=await uE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function RA(t,e){return await ae(t)._initializationPromise,hu(t,e,!1)}async function hu(t,e,n=!1){const r=ae(t),i=$r(r,e),o=await new yA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function uE(t){const e=Mo(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=10*60*1e3;class cE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ae(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NA&&this.cachedEventUids.clear(),this.cachedEventUids.has(og(e))}saveEventToCache(e){this.cachedEventUids.add(og(e)),this.lastProcessedEventTime=Date.now()}}function og(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e={}){return ue(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xA=/^https?/;async function bA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hE(t);for(const n of e)try{if(DA(n))return}catch{}xe(t,"unauthorized-domain")}function DA(t){const e=ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xA.test(n))return!1;if(OA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new xo(3e4,6e4);function ag(){const t=he().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MA(t){return new Promise((e,n)=>{var r,i,s;function o(){ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(Ae(t,"network-request-failed"))},timeout:LA.get()})}if(!((i=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=he().gapi)===null||s===void 0)&&s.load)o();else{const a=jw("iframefcb");return he()[a]=()=>{gapi.load?o():n(Ae(t,"network-request-failed"))},If(`${PN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function FA(t){return Ia=Ia||MA(t),Ia}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new xo(5e3,15e3),WA="__/auth/iframe",jA="emulator/auth/iframe",zA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VA(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wf(e,jA):`https://${t.config.authDomain}/${WA}`,r={apiKey:e.apiKey,appName:t.name,v:tr},i=BA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jr(r).slice(1)}`}async function $A(t){const e=await FA(t),n=he().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:VA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(t,"network-request-failed"),a=he().setTimeout(()=>{s(o)},UA.get());function l(){he().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GA=500,KA=600,qA="_blank",QA="http://localhost";class lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YA(t,e,n,r=GA,i=KA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=me().toLowerCase();n&&(a=Dw(u)?qA:n),bw(u)&&(e=e||QA,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(gN(u)&&a!=="_self")return JA(e||"",a),new lg(null);const c=window.open(e||"",a,d);E(c,t,"popup-blocked");try{c.focus()}catch{}return new lg(c)}function JA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="__/auth/handler",ZA="emulator/auth/handler",eO=encodeURIComponent("fac");async function kd(t,e,n,r,i,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:tr,eventId:i};if(e instanceof _n){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ja(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Vi){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${eO}=${encodeURIComponent(l)}`:"";return`${tO(t)}?${jr(a).slice(1)}${u}`}function tO({config:t}){return t.emulator?wf(t,ZA):`https://${t.authDomain}/${XA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class nO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dr,this._completeRedirectFn=hu,this._overrideRedirectResult=Df}async _openPopup(e,n,r,i){var s;Dt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await kd(e,n,r,ao(),i);return YA(e,o,Mo())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await kd(e,n,r,ao(),i);return U1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $A(e),r=new cE(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ic];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uw()||Ef()||zi()}}const rO=nO;class iO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Vt("unexpected MultiFactorSessionType")}}}class Lf extends iO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lf(e)}_finalizeEnroll(e,n,r){return A1(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return q1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fE{constructor(){}static assertion(e){return Lf._fromCredential(e)}}fE.FACTOR_ID="phone";var ug="@firebase/auth",cg="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aO(t){Gn(new wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},u=new SN(r,i,s,l);return ON(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gn(new wt("auth-internal",e=>{const n=ae(e.getProvider("auth").getImmediate());return(r=>new sO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(ug,cg,oO(t)),Gt(ug,cg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=5*60;_S("authIdTokenMaxAge");function uO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ae("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=2e3;async function dO(t,e,n){var r;const{BuildInfo:i}=Mr();Dt(e.sessionId,"AuthEvent did not contain a session ID");const s=await gO(e.sessionId),o={};return zi()?o.ibi=i.packageName:bo()?o.apn=i.packageName:xe(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,kd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function hO(t){const{BuildInfo:e}=Mr(),n={};zi()?n.iosBundleId=e.packageName:bo()?n.androidPackageName=e.packageName:xe(t,"operation-not-supported-in-this-environment"),await hE(t,n)}function fO(t){const{cordova:e}=Mr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,mN()?"_blank":"_system","location=yes"),n(i)})})}async function pO(t,e,n){const{cordova:r}=Mr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var c;s();const h=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ae(t,"redirect-cancelled-by-user"))},cO))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),bo()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function mO(t){var e,n,r,i,s,o,a,l,u,d;const c=Mr();E(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((l=(a=(o=c==null?void 0:c.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E(typeof((d=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function gO(t){const e=_O(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function _O(t){if(Dt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=20;class yO extends cE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function wO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:SO(),postBody:null,tenantId:t.tenantId,error:Ae(t,"no-auth-event")}}function EO(t,e){return Pd()._set(Rd(t),e)}async function dg(t){const e=await Pd()._get(Rd(t));return e&&await Pd()._remove(Rd(t)),e}function IO(t,e){var n,r;const i=TO(e);if(i.includes("/__/auth/callback")){const s=Sa(i),o=s.firebaseError?CO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ae(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function SO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<vO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Pd(){return it(Nf)}function Rd(t){return Er("authEvent",t.config.apiKey,t.name)}function CO(t){try{return JSON.parse(t)}catch{return null}}function TO(t){const e=Sa(t),n=e.link?decodeURIComponent(e.link):void 0,r=Sa(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Sa(i).link||i||r||n||t}function Sa(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return oi(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=500;class PO{constructor(){this._redirectPersistence=Dr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=hu,this._overrideRedirectResult=Df}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new yO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){xe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){mO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),EA(),await this._originValidation(e);const o=wO(e,r,i);await EO(e,o);const a=await dO(e,o,n),l=await fO(a);return pO(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Mr(),o=setTimeout(async()=>{await dg(e),n.onEvent(hg())},kO),a=async d=>{clearTimeout(o);const c=await dg(e);let h=null;c&&(d!=null&&d.url)&&(h=IO(c,d.url)),n.onEvent(h||hg())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Mr().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(c){console.error(c)}}}}const RO=PO;function hg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ae("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t,e){ae(t)._logFramework(e)}var AO="@firebase/auth-compat",OO="0.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=1e3;function As(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function bO(){return As()==="http:"||As()==="https:"}function pE(t=me()){return!!((As()==="file:"||As()==="ionic:"||As()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function DO(){return Ll()||zv()}function LO(){return Vv()&&(document==null?void 0:document.documentMode)===11}function MO(t=me()){return/Edge\/\d+/.test(t)}function FO(t=me()){return LO()||MO(t)}function mE(){try{const t=self.localStorage,e=Mo();if(t)return t.setItem(e,"1"),t.removeItem(e),FO()?Ya():!0}catch{return Mf()&&Ya()}return!1}function Mf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function sc(){return(bO()||Bv()||pE())&&!DO()&&mE()&&!Mf()}function gE(){return pE()&&typeof document<"u"}async function UO(){return gE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},xO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function WO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={LOCAL:"local",NONE:"none",SESSION:"session"},os=E,_E="persistence";function jO(t,e){if(os(Object.values(tt).includes(e),t,"invalid-persistence-type"),Ll()){os(e!==tt.SESSION,t,"unsupported-persistence-type");return}if(zv()){os(e===tt.NONE,t,"unsupported-persistence-type");return}if(Mf()){os(e===tt.NONE||e===tt.LOCAL&&Ya(),t,"unsupported-persistence-type");return}os(e===tt.NONE||mE(),t,"unsupported-persistence-type")}async function Nd(t){await t._initializationPromise;const e=vE(),n=Er(_E,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function zO(t,e){const n=vE();if(!n)return[];const r=Er(_E,t,e);switch(n.getItem(r)){case tt.NONE:return[Ai];case tt.LOCAL:return[fo,Dr];case tt.SESSION:return[Dr];default:return[]}}function vE(){var t;try{return((t=WO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=E;class Rn{constructor(){this.browserResolver=it(rO),this.cordovaResolver=it(RO),this.underlyingResolver=null,this._redirectPersistence=Dr,this._completeRedirectFn=hu,this._overrideRedirectResult=Df}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return gE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return BO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await UO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){return t.unwrap()}function VO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return wE(t)}function HO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new GO(t,R1(t,e))}else if(r){const i=wE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function wE(t){const{_tokenResponse:e}=t instanceof Je?t.customData:t;if(!e)return null;if(!(t instanceof Je)&&"temporaryProof"in e&&"phoneNumber"in e)return Lr.credentialFromResult(t);const n=e.providerId;if(!n||n===ss.PASSWORD)return null;let r;switch(n){case ss.GOOGLE:r=jt;break;case ss.FACEBOOK:r=Wt;break;case ss.GITHUB:r=zt;break;case ss.TWITTER:r=Bt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Oi._create(n,a):Yt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new gi(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Je?r.credentialFromError(t):r.credentialFromResult(t)}function Ve(t,e){return e.catch(n=>{throw n instanceof Je&&HO(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:$O(n),additionalUserInfo:P1(n),user:rn.getOrCreate(i)}})}async function Ad(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ve(t,n.confirm(r))}}class GO{constructor(e,n){this.resolver=n,this.auth=VO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ve(yE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._delegate=e,this.multiFactor=x1(e)}static getOrCreate(e){return rn.USER_MAP.has(e)||rn.USER_MAP.set(e,new rn(e)),rn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ve(this.auth,qw(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ad(this.auth,lA(this._delegate,e,n))}async linkWithPopup(e){return Ve(this.auth,_A(this._delegate,e,Rn))}async linkWithRedirect(e){return await Nd(ae(this.auth)),kA(this._delegate,e,Rn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ve(this.auth,Qw(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ad(this.auth,uA(this._delegate,e,n))}reauthenticateWithPopup(e){return Ve(this.auth,gA(this._delegate,e,Rn))}async reauthenticateWithRedirect(e){return await Nd(ae(this.auth)),CA(this._delegate,e,Rn)}sendEmailVerification(e){return g1(this._delegate,e)}async unlink(e){return await n1(this._delegate,e),this}updateEmail(e){return w1(this._delegate,e)}updatePassword(e){return E1(this._delegate,e)}updatePhoneNumber(e){return cA(this._delegate,e)}updateProfile(e){return y1(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return _1(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=E;class Od{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;as(r,"invalid-api-key",{appName:e.name}),as(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Rn:void 0;this._delegate=n.initialize({options:{persistence:KO(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(HR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){xN(this._delegate,e,n)}applyActionCode(e){return a1(this._delegate,e)}checkActionCode(e){return Yw(this._delegate,e)}confirmPasswordReset(e,n){return o1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ve(this._delegate,u1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return m1(this._delegate,e)}isSignInWithEmailLink(e){return h1(this._delegate,e)}async getRedirectResult(){as(sc(),this._delegate,"operation-not-supported-in-this-environment");const e=await RA(this._delegate,Rn);return e?Ve(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){NO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=fg(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=fg(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return d1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return s1(this._delegate,e,n||void 0)}async setPersistence(e){jO(this._delegate,e);let n;switch(e){case tt.SESSION:n=Dr;break;case tt.LOCAL:n=await it(fo)._isAvailable()?fo:Nf;break;case tt.NONE:n=Ai;break;default:return xe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ve(this._delegate,t1(this._delegate))}signInWithCredential(e){return Ve(this._delegate,au(this._delegate,e))}signInWithCustomToken(e){return Ve(this._delegate,i1(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ve(this._delegate,c1(this._delegate,e,n))}signInWithEmailLink(e,n){return Ve(this._delegate,f1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ad(this._delegate,aA(this._delegate,e,n))}async signInWithPopup(e){return as(sc(),this._delegate,"operation-not-supported-in-this-environment"),Ve(this._delegate,mA(this._delegate,e,Rn))}async signInWithRedirect(e){return as(sc(),this._delegate,"operation-not-supported-in-this-environment"),await Nd(this._delegate),IA(this._delegate,e,Rn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return l1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Od.Persistence=tt;function fg(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rn.getOrCreate(o)),error:e,complete:n}}function KO(t,e){const n=zO(t,e);if(typeof self<"u"&&!n.includes(fo)&&n.push(fo),typeof window<"u")for(const r of[Nf,Dr])n.includes(r)||n.push(r);return n.includes(Ai)||n.push(Ai),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.providerId="phone",this._delegate=new Lr(yE(nr.auth()))}static credential(e,n){return Lr.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ff.PHONE_SIGN_IN_METHOD=Lr.PHONE_SIGN_IN_METHOD;Ff.PROVIDER_ID=Lr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=E;class QO{constructor(e,n,r=nr.app()){var i;qO((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new sA(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="auth-compat";function JO(t){t.INTERNAL.registerComponent(new wt(YO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Od(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Kr.EMAIL_SIGNIN,PASSWORD_RESET:Kr.PASSWORD_RESET,RECOVER_EMAIL:Kr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Kr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Kr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Kr.VERIFY_EMAIL}},EmailAuthProvider:ir,FacebookAuthProvider:Wt,GithubAuthProvider:zt,GoogleAuthProvider:jt,OAuthProvider:gi,SAMLAuthProvider:pl,PhoneAuthProvider:Ff,PhoneMultiFactorGenerator:fE,RecaptchaVerifier:QO,TwitterAuthProvider:Bt,Auth:Od,AuthCredential:Bi,Error:Je}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(AO,OO)}JO(nr);/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},po.apply(this,arguments)}var Nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nn||(Nn={}));const pg="popstate";function XO(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return xd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:IE(i)}return ex(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function EE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZO(){return Math.random().toString(36).substr(2,8)}function mg(t,e){return{usr:t.state,key:t.key,idx:e}}function xd(t,e,n,r){return n===void 0&&(n=null),po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$i(e):e,{state:n,key:e&&e.key||r||ZO()})}function IE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $i(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ex(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Nn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(po({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=Nn.Pop;let S=d(),p=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:p})}function h(S,p){a=Nn.Push;let f=xd(v.location,S,p);n&&n(f,S),u=d()+1;let m=mg(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(y)}s&&l&&l({action:a,location:v.location,delta:1})}function g(S,p){a=Nn.Replace;let f=xd(v.location,S,p);n&&n(f,S),u=d();let m=mg(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&l&&l({action:a,location:v.location,delta:0})}function _(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:IE(S);return f=f.replace(/ $/,"%20"),pe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pg,c),l=S,()=>{i.removeEventListener(pg,c),l=null}},createHref(S){return e(i,S)},createURL:_,encodeLocation(S){let p=_(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(S){return o.go(S)}};return v}var gg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gg||(gg={}));function tx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?$i(e):e,i=TE(r.pathname||"/",n);if(i==null)return null;let s=SE(t);nx(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=px(i);o=dx(s[a],l)}return o}function SE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Sr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),SE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ux(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of CE(s.path))i(s,o,l)}),e}function CE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function nx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rx=/^:[\w-]+$/,ix=3,sx=2,ox=1,ax=10,lx=-2,_g=t=>t==="*";function ux(t,e){let n=t.split("/"),r=n.length;return n.some(_g)&&(r+=lx),e&&(r+=sx),n.filter(i=>!_g(i)).reduce((i,s)=>i+(rx.test(s)?ix:s===""?ox:ax),r)}function cx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=hx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Sr([i,d.pathname]),pathnameBase:vx(Sr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Sr([i,d.pathnameBase]))}return s}function hx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=a[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[c];return g&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function fx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),EE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function px(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return EE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function TE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?$i(t):t;return{pathname:n?n.startsWith("/")?n:gx(n,e):e,search:yx(r),hash:wx(i)}}function gx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _x(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kE(t,e){let n=_x(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function PE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=$i(t):(i=po({},t),pe(!i.pathname||!i.pathname.includes("?"),oc("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),oc("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),oc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=mx(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),vx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ex(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RE=["post","put","patch","delete"];new Set(RE);const Ix=["get",...RE];new Set(Ix);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}const Uf=k.createContext(null),Sx=k.createContext(null),Uo=k.createContext(null),fu=k.createContext(null),sr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),NE=k.createContext(null);function Wo(){return k.useContext(fu)!=null}function Wf(){return Wo()||pe(!1),k.useContext(fu).location}function AE(t){k.useContext(Uo).static||k.useLayoutEffect(t)}function OE(){let{isDataRoute:t}=k.useContext(sr);return t?Ux():Cx()}function Cx(){Wo()||pe(!1);let t=k.useContext(Uf),{basename:e,future:n,navigator:r}=k.useContext(Uo),{matches:i}=k.useContext(sr),{pathname:s}=Wf(),o=JSON.stringify(kE(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return AE(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=PE(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Sr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const Tx=k.createContext(null);function kx(t){let e=k.useContext(sr).outlet;return e&&k.createElement(Tx.Provider,{value:t},e)}function Px(t,e){return Rx(t,e)}function Rx(t,e,n,r){Wo()||pe(!1);let{navigator:i}=k.useContext(Uo),{matches:s}=k.useContext(sr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Wf(),d;if(e){var c;let S=typeof e=="string"?$i(e):e;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||pe(!1),d=S}else d=u;let h=d.pathname||"/",g=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let _=tx(t,{pathname:g}),v=bx(_&&_.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Sr([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Sr([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&v?k.createElement(fu.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Nn.Pop}},v):v}function Nx(){let t=Fx(),e=Ex(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const Ax=k.createElement(Nx,null);class Ox extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(sr.Provider,{value:this.props.routeContext},k.createElement(NE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xx(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Uf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(sr.Provider,{value:e},r)}function bx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,_=!1,v=null,S=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,v=c.route.errorElement||Ax,l&&(u<0&&h===0?(Wx("route-fallback",!1),_=!0,S=null):u===h&&(_=!0,S=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=v:_?m=S:c.route.Component?m=k.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,k.createElement(xx,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?k.createElement(Ox,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var xE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(xE||{}),vl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vl||{});function Dx(t){let e=k.useContext(Uf);return e||pe(!1),e}function Lx(t){let e=k.useContext(Sx);return e||pe(!1),e}function Mx(t){let e=k.useContext(sr);return e||pe(!1),e}function bE(t){let e=Mx(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function Fx(){var t;let e=k.useContext(NE),n=Lx(vl.UseRouteError),r=bE(vl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ux(){let{router:t}=Dx(xE.UseNavigateStable),e=bE(vl.UseNavigateStable),n=k.useRef(!1);return AE(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,mo({fromRouteId:e},s)))},[t,e])}const vg={};function Wx(t,e,n){!e&&!vg[t]&&(vg[t]=!0)}function jx(t){let{to:e,replace:n,state:r,relative:i}=t;Wo()||pe(!1);let{future:s,static:o}=k.useContext(Uo),{matches:a}=k.useContext(sr),{pathname:l}=Wf(),u=OE(),d=PE(e,kE(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function zx(t){return kx(t.context)}function ps(t){pe(!1)}function Bx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:s,static:o=!1,future:a}=t;Wo()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:mo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=$i(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:_="default"}=r,v=k.useMemo(()=>{let S=TE(d,l);return S==null?null:{location:{pathname:S,search:c,hash:h,state:g,key:_},navigationType:i}},[l,d,c,h,g,_,i]);return v==null?null:k.createElement(Uo.Provider,{value:u},k.createElement(fu.Provider,{children:n,value:v}))}function Vx(t){let{children:e,location:n}=t;return Px(bd(e),n)}new Promise(()=>{});function bd(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,bd(r.props.children,s));return}r.type!==ps&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $x="6";try{window.__reactRouterVersion=$x}catch{}const Hx="startTransition",yg=XE[Hx];function Gx(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=XO({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=k.useCallback(c=>{u&&yg?yg(()=>l(c)):l(c)},[l,u]);return k.useLayoutEffect(()=>o.listen(d),[o,d]),k.createElement(Bx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var wg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wg||(wg={}));var Eg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Eg||(Eg={}));const Kx={apiKey:"AIzaSyCkAntz8qJFmGrP4kekmzcwpgjnrxMDjyg",authDomain:"mudra-983f3.firebaseapp.com",databaseURL:"https://mudra-983f3-default-rtdb.firebaseio.com",projectId:"mudra-983f3",storageBucket:"mudra-983f3.appspot.com",messagingSenderId:"887834591716",appId:"1:887834591716:web:e7145eab3408532cd387f1"};nr.initializeApp(Kx);const jf=nr.auth(),Dd=nr.database(),qx="/mudra/assets/logo-mv3uqf97.png",Qx=()=>{const[t,e]=k.useState([]);return k.useEffect(()=>{(async()=>{try{var r=Dd.ref("score/");r.on("value",i=>{const s=i.val();console.log(Object.values(s));const o=Object.values(s);o.sort((a,l)=>l.score-a.score),e(Object.values(o))})}catch(i){console.error("Error fetching data from Firebase:",i)}})()},[]),T.jsxs("div",{className:"w-[90vw]   backgroundmain",children:[T.jsx("div",{className:"flex-grow justify-center items-center sm:pr-0 pr-6",children:T.jsx("div",{className:"flex justify-center",children:T.jsx("img",{className:"h-[6em]",src:qx,alt:"logo"})})}),T.jsxs("div",{className:"flex text-xs m-2 p-0 justify-between",style:{fontWeight:200,letterSpacing:"0.09em"},children:[T.jsx("div",{children:"DEPARTMENT"}),T.jsx("div",{className:"flex-grow"}),T.jsx("div",{className:"mr-14",children:"SCORE"}),T.jsx("div",{className:"mr-6",children:"POS"})]}),T.jsx("div",{className:"text-base w-[100%] flex-col justify-center items-center ",style:{letterSpacing:"0.2em",overflow:"scroll",overflow:"auto",fontWeight:400},children:t.map((n,r)=>T.jsxs("div",{className:"flex justify-between rounded-xl maincontainer border-2 m-2 mb-4 ",style:{borderColor:Ig(r),background:Yx(r)},children:[T.jsx("div",{className:"p-7",children:n.dept}),T.jsx("div",{className:"flex-grow"}),T.jsx("div",{className:"mr-4 p-7",children:n.score}),T.jsx("div",{className:"px-8  p-7 border-l-2",style:{borderColor:Ig(r)},children:r+1})]},n.dept))})]})};function Ig(t){switch(t){case 0:return"#ffd70095";case 1:return"#c0c0c0";case 2:return"#CD7F3295";default:return"#ffffff20"}}function Yx(t){switch(t){case 0:return"#ffd70030";case 1:return"#c0c0c030";case 2:return"#CD7F3220";default:return"#ffffff07"}}const Jx=()=>{const[t,e]=k.useState([]),n=()=>{jf.signOut().then(()=>{localStorage.removeItem("user"),window.location.reload()}).catch(o=>{console.error("Error signing out:",o)})};k.useEffect(()=>{(async()=>{try{var a=Dd.ref("score/");a.on("value",l=>{const u=l.val();console.log(Object.values(u));const d=Object.values(u);e(Object.values(d))})}catch(l){console.error("Error fetching data from Firebase:",l)}})()},[]);const r=(o,a)=>{const l=t.map(u=>u.dept===o?{...u,score:u.score+a}:u);e(l)},i=o=>{const a=t.map(l=>l.dept===o?{...l,score:l.score-1>=0?l.score-1:0}:l);e(a)},s=o=>{Dd.ref("score/").set(o.reduce((a,l)=>(a[l.dept]={dept:l.dept,score:l.score},a),{})).then(()=>{alert("Score saved successfully")}).catch(a=>{console.error("Error saving data to Firebase contact 9633766566")})};return T.jsxs("div",{className:"w-[90vw]   backgroundmain",children:[T.jsxs("div",{className:"flex text-xs  p-0 justify-between",style:{fontWeight:200,letterSpacing:"0.09em"},children:[T.jsx("div",{className:"ml-2 w-[15vw]",children:"DEPARTMENT"}),T.jsx("div",{className:"w-[20vw]",children:"SCORE"}),T.jsx("div",{className:"w-[20vw]",children:"INDIVIDUAL"}),T.jsx("div",{className:"w-[20vw] pl-32",children:"GROUP"}),T.jsx("div",{className:"w-[20vw]"})]}),T.jsx("div",{className:"text-base w-[100%] flex-col justify-center items-center ",style:{letterSpacing:"0.2em",overflow:"scroll",overflow:"auto",fontWeight:400},children:t.map((o,a)=>T.jsxs("div",{className:"flex justify-between border-t-2 border-b-2 m-2 maincontainer ",style:{},children:[T.jsx("div",{className:"mt-4",style:{minWidth:"130px"},children:o.dept}),T.jsx("div",{className:"mt-4",children:o.score}),T.jsx("div",{children:T.jsxs("div",{className:"flex",children:[T.jsx("div",{children:T.jsx("button",{className:"m-2",onClick:()=>r(o.dept,5),children:"I"})}),T.jsx("div",{children:T.jsx("button",{className:"m-2",onClick:()=>r(o.dept,3),children:"II"})}),T.jsx("div",{children:T.jsx("button",{className:"m-2",onClick:()=>r(o.dept,1),children:"III"})})]})}),T.jsx("div",{className:"flex h-[100%] items-center",children:T.jsxs("div",{className:"flex",children:[T.jsx("div",{children:T.jsx("button",{className:"m-2",onClick:()=>r(o.dept,10),children:"I"})}),T.jsx("div",{children:T.jsx("button",{className:"m-2",onClick:()=>r(o.dept,6),children:"II"})}),T.jsx("div",{children:T.jsx("button",{className:"m-2",onClick:()=>r(o.dept,2),children:"III"})})]})}),T.jsx("div",{className:"m-2",children:T.jsx("button",{onClick:()=>i(o.dept),children:"-"})})]},o.dept))}),T.jsxs("div",{className:"flex",children:[T.jsx("div",{className:"flex flex-grow",children:T.jsx("button",{className:"fixed bg-[#ff0000] m-2",onClick:()=>n(),children:"Log Out"})}),T.jsx("div",{className:"m-2",children:T.jsx("button",{onClick:()=>s(t),className:"bg-[#00ff00] text-black",children:"Save Changes"})})]})]})};function Xx(){return T.jsx(Jx,{})}const Zx=()=>(console.log("private routes ? "),console.log(),console.log(jf.currentUser),localStorage.getItem("198572fb-42ed-4c4c-a77e-a15f4c1064b0")!=null?T.jsx(zx,{}):T.jsx(jx,{to:"/login"}));function eb(){const[t,e]=k.useState(""),[n,r]=k.useState(""),[i,s]=k.useState(""),[o,a]=k.useState(!1),l=OE(),u=async d=>{d.preventDefault(),a(!0);try{await jf.signInWithEmailAndPassword(t,n).then(c=>{localStorage.setItem("198572fb-42ed-4c4c-a77e-a15f4c1064b0",JSON.stringify(c.user)),l("/admin")})}catch(c){s(c||"Signup failed"),console.log(c),alert(c)}finally{a(!1)}};return T.jsxs("form",{onSubmit:u,children:[i&&T.jsx("p",{className:"error",children:i}),T.jsx("input",{type:"username",name:"username",placeholder:name,value:t,onChange:d=>e(d.target.value)}),T.jsx("input",{type:"password",name:"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value)}),T.jsx("button",{type:"submit",disabled:o,children:"Login"})]})}function tb(){return T.jsx("div",{className:"App",children:T.jsx(Gx,{basename:"/mudra",children:T.jsxs(Vx,{children:[T.jsx(ps,{element:T.jsx(Zx,{}),children:T.jsx(ps,{path:"/admin",element:T.jsx(Xx,{})})}),T.jsx(ps,{path:"/",element:T.jsx(Qx,{})}),T.jsx(ps,{path:"/login",element:T.jsx(eb,{})})]})})})}ac.createRoot(document.getElementById("root")).render(T.jsx(xg.StrictMode,{children:T.jsx(tb,{})}));
