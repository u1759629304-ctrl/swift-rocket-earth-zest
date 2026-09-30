var dQ=Object.create;var{getPrototypeOf:nQ,defineProperty:MZ,getOwnPropertyNames:cQ}=Object;var iQ=Object.prototype.hasOwnProperty;var DH=(A,J,H)=>{H=A!=null?dQ(nQ(A)):{};let E=J||!A||!A.__esModule?MZ(H,"default",{value:A,enumerable:!0}):H;for(let X of cQ(A))if(!iQ.call(E,X))MZ(E,X,{get:()=>A[X],enumerable:!0});return E};var x9=(A,J)=>()=>(J||A((J={exports:{}}).exports,J),J.exports);var sQ=(A,J)=>{for(var H in J)MZ(A,H,{get:J[H],enumerable:!0,configurable:!0,set:(E)=>J[H]=()=>E})};var oQ=(A,J)=>()=>(A&&(J=A(A=0)),J);var x1=x9((YF)=>{var sE=Symbol.for("react.element"),rQ=Symbol.for("react.portal"),tQ=Symbol.for("react.fragment"),aQ=Symbol.for("react.strict_mode"),eQ=Symbol.for("react.profiler"),$Q=Symbol.for("react.provider"),_Q=Symbol.for("react.context"),AF=Symbol.for("react.forward_ref"),JF=Symbol.for("react.suspense"),HF=Symbol.for("react.memo"),EF=Symbol.for("react.lazy"),sP=Symbol.iterator;function XF(A){if(A===null||typeof A!=="object")return null;return A=sP&&A[sP]||A["@@iterator"],typeof A==="function"?A:null}var tP={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aP=Object.assign,eP={};function K0(A,J,H){this.props=A,this.context=J,this.refs=eP,this.updater=H||tP}K0.prototype.isReactComponent={};K0.prototype.setState=function(A,J){if(typeof A!=="object"&&typeof A!=="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,J,"setState")};K0.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function $P(){}$P.prototype=K0.prototype;function DZ(A,J,H){this.props=A,this.context=J,this.refs=eP,this.updater=H||tP}var SZ=DZ.prototype=new $P;SZ.constructor=DZ;aP(SZ,K0.prototype);SZ.isPureReactComponent=!0;var oP=Array.isArray,_P=Object.prototype.hasOwnProperty,LZ={current:null},A5={key:!0,ref:!0,__self:!0,__source:!0};function J5(A,J,H){var E,X={},V=null,U=null;if(J!=null)for(E in J.ref!==void 0&&(U=J.ref),J.key!==void 0&&(V=""+J.key),J)_P.call(J,E)&&!A5.hasOwnProperty(E)&&(X[E]=J[E]);var Z=arguments.length-2;if(Z===1)X.children=H;else if(1<Z){for(var R=Array(Z),Y=0;Y<Z;Y++)R[Y]=arguments[Y+2];X.children=R}if(A&&A.defaultProps)for(E in Z=A.defaultProps,Z)X[E]===void 0&&(X[E]=Z[E]);return{$$typeof:sE,type:A,key:V,ref:U,props:X,_owner:LZ.current}}function VF(A,J){return{$$typeof:sE,type:A.type,key:J,ref:A.ref,props:A.props,_owner:A._owner}}function KZ(A){return typeof A==="object"&&A!==null&&A.$$typeof===sE}function UF(A){var J={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(H){return J[H]})}var rP=/\/+/g;function kZ(A,J){return typeof A==="object"&&A!==null&&A.key!=null?UF(""+A.key):J.toString(36)}function d9(A,J,H,E,X){var V=typeof A;if(V==="undefined"||V==="boolean")A=null;var U=!1;if(A===null)U=!0;else switch(V){case"string":case"number":U=!0;break;case"object":switch(A.$$typeof){case sE:case rQ:U=!0}}if(U)return U=A,X=X(U),A=E===""?"."+kZ(U,0):E,oP(X)?(H="",A!=null&&(H=A.replace(rP,"$&/")+"/"),d9(X,J,H,"",function(Y){return Y})):X!=null&&(KZ(X)&&(X=VF(X,H+(!X.key||U&&U.key===X.key?"":(""+X.key).replace(rP,"$&/")+"/")+A)),J.push(X)),1;if(U=0,E=E===""?".":E+":",oP(A))for(var Z=0;Z<A.length;Z++){V=A[Z];var R=E+kZ(V,Z);U+=d9(V,J,H,R,X)}else if(R=XF(A),typeof R==="function")for(A=R.call(A),Z=0;!(V=A.next()).done;)V=V.value,R=E+kZ(V,Z++),U+=d9(V,J,H,R,X);else if(V==="object")throw J=String(A),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return U}function m9(A,J,H){if(A==null)return A;var E=[],X=0;return d9(A,E,"","",function(V){return J.call(H,V,X++)}),E}function ZF(A){if(A._status===-1){var J=A._result;J=J(),J.then(function(H){if(A._status===0||A._status===-1)A._status=1,A._result=H},function(H){if(A._status===0||A._status===-1)A._status=2,A._result=H}),A._status===-1&&(A._status=0,A._result=J)}if(A._status===1)return A._result.default;throw A._result}var eJ={current:null},n9={transition:null},RF={ReactCurrentDispatcher:eJ,ReactCurrentBatchConfig:n9,ReactCurrentOwner:LZ};function H5(){throw Error("act(...) is not supported in production builds of React.")}YF.Children={map:m9,forEach:function(A,J,H){m9(A,function(){J.apply(this,arguments)},H)},count:function(A){var J=0;return m9(A,function(){J++}),J},toArray:function(A){return m9(A,function(J){return J})||[]},only:function(A){if(!KZ(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};YF.Component=K0;YF.Fragment=tQ;YF.Profiler=eQ;YF.PureComponent=DZ;YF.StrictMode=aQ;YF.Suspense=JF;YF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RF;YF.act=H5;YF.cloneElement=function(A,J,H){if(A===null||A===void 0)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var E=aP({},A.props),X=A.key,V=A.ref,U=A._owner;if(J!=null){if(J.ref!==void 0&&(V=J.ref,U=LZ.current),J.key!==void 0&&(X=""+J.key),A.type&&A.type.defaultProps)var Z=A.type.defaultProps;for(R in J)_P.call(J,R)&&!A5.hasOwnProperty(R)&&(E[R]=J[R]===void 0&&Z!==void 0?Z[R]:J[R])}var R=arguments.length-2;if(R===1)E.children=H;else if(1<R){Z=Array(R);for(var Y=0;Y<R;Y++)Z[Y]=arguments[Y+2];E.children=Z}return{$$typeof:sE,type:A.type,key:X,ref:V,props:E,_owner:U}};YF.createContext=function(A){return A={$$typeof:_Q,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:$Q,_context:A},A.Consumer=A};YF.createElement=J5;YF.createFactory=function(A){var J=J5.bind(null,A);return J.type=A,J};YF.createRef=function(){return{current:null}};YF.forwardRef=function(A){return{$$typeof:AF,render:A}};YF.isValidElement=KZ;YF.lazy=function(A){return{$$typeof:EF,_payload:{_status:-1,_result:A},_init:ZF}};YF.memo=function(A,J){return{$$typeof:HF,type:A,compare:J===void 0?null:J}};YF.startTransition=function(A){var J=n9.transition;n9.transition={};try{A()}finally{n9.transition=J}};YF.unstable_act=H5;YF.useCallback=function(A,J){return eJ.current.useCallback(A,J)};YF.useContext=function(A){return eJ.current.useContext(A)};YF.useDebugValue=function(){};YF.useDeferredValue=function(A){return eJ.current.useDeferredValue(A)};YF.useEffect=function(A,J){return eJ.current.useEffect(A,J)};YF.useId=function(){return eJ.current.useId()};YF.useImperativeHandle=function(A,J,H){return eJ.current.useImperativeHandle(A,J,H)};YF.useInsertionEffect=function(A,J){return eJ.current.useInsertionEffect(A,J)};YF.useLayoutEffect=function(A,J){return eJ.current.useLayoutEffect(A,J)};YF.useMemo=function(A,J){return eJ.current.useMemo(A,J)};YF.useReducer=function(A,J,H){return eJ.current.useReducer(A,J,H)};YF.useRef=function(A){return eJ.current.useRef(A)};YF.useState=function(A){return eJ.current.useState(A)};YF.useSyncExternalStore=function(A,J,H){return eJ.current.useSyncExternalStore(A,J,H)};YF.useTransition=function(){return eJ.current.useTransition()};YF.version="18.3.1"});var Y5=x9((oF)=>{function wZ(A,J){var H=A.length;A.push(J);A:for(;0<H;){var E=H-1>>>1,X=A[E];if(0<c9(X,J))A[E]=J,A[H]=X,H=E;else break A}}function s8(A){return A.length===0?null:A[0]}function r9(A){if(A.length===0)return null;var J=A[0],H=A.pop();if(H!==J){A[0]=H;A:for(var E=0,X=A.length,V=X>>>1;E<V;){var U=2*(E+1)-1,Z=A[U],R=U+1,Y=A[R];if(0>c9(Z,H))R<X&&0>c9(Y,Z)?(A[E]=Y,A[R]=H,E=R):(A[E]=Z,A[U]=H,E=U);else if(R<X&&0>c9(Y,H))A[E]=Y,A[R]=H,E=R;else break A}}return J}function c9(A,J){var H=A.sortIndex-J.sortIndex;return H!==0?H:A.id-J.id}if(typeof performance==="object"&&typeof performance.now==="function")fZ=performance,oF.unstable_now=function(){return fZ.now()};else i9=Date,jZ=i9.now(),oF.unstable_now=function(){return i9.now()-jZ};var fZ,i9,jZ,NH=[],aH=[],sF=1,w8=null,bJ=3,t9=!1,m1=!1,rE=!1,X5=typeof setTimeout==="function"?setTimeout:null,V5=typeof clearTimeout==="function"?clearTimeout:null,E5=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function yZ(A){for(var J=s8(aH);J!==null;){if(J.callback===null)r9(aH);else if(J.startTime<=A)r9(aH),J.sortIndex=J.expirationTime,wZ(NH,J);else break;J=s8(aH)}}function uZ(A){if(rE=!1,yZ(A),!m1)if(s8(NH)!==null)m1=!0,lZ(hZ);else{var J=s8(aH);J!==null&&pZ(uZ,J.startTime-A)}}function hZ(A,J){m1=!1,rE&&(rE=!1,V5(tE),tE=-1),t9=!0;var H=bJ;try{yZ(J);for(w8=s8(NH);w8!==null&&(!(w8.expirationTime>J)||A&&!R5());){var E=w8.callback;if(typeof E==="function"){w8.callback=null,bJ=w8.priorityLevel;var X=E(w8.expirationTime<=J);J=oF.unstable_now(),typeof X==="function"?w8.callback=X:w8===s8(NH)&&r9(NH),yZ(J)}else r9(NH);w8=s8(NH)}if(w8!==null)var V=!0;else{var U=s8(aH);U!==null&&pZ(uZ,U.startTime-J),V=!1}return V}finally{w8=null,bJ=H,t9=!1}}var a9=!1,s9=null,tE=-1,U5=5,Z5=-1;function R5(){return oF.unstable_now()-Z5<U5?!1:!0}function TZ(){if(s9!==null){var A=oF.unstable_now();Z5=A;var J=!0;try{J=s9(!0,A)}finally{J?oE():(a9=!1,s9=null)}}else a9=!1}var oE;if(typeof E5==="function")oE=function(){E5(TZ)};else if(typeof MessageChannel<"u")o9=new MessageChannel,vZ=o9.port2,o9.port1.onmessage=TZ,oE=function(){vZ.postMessage(null)};else oE=function(){X5(TZ,0)};var o9,vZ;function lZ(A){s9=A,a9||(a9=!0,oE())}function pZ(A,J){tE=X5(function(){A(oF.unstable_now())},J)}oF.unstable_IdlePriority=5;oF.unstable_ImmediatePriority=1;oF.unstable_LowPriority=4;oF.unstable_NormalPriority=3;oF.unstable_Profiling=null;oF.unstable_UserBlockingPriority=2;oF.unstable_cancelCallback=function(A){A.callback=null};oF.unstable_continueExecution=function(){m1||t9||(m1=!0,lZ(hZ))};oF.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U5=0<A?Math.floor(1000/A):5};oF.unstable_getCurrentPriorityLevel=function(){return bJ};oF.unstable_getFirstCallbackNode=function(){return s8(NH)};oF.unstable_next=function(A){switch(bJ){case 1:case 2:case 3:var J=3;break;default:J=bJ}var H=bJ;bJ=J;try{return A()}finally{bJ=H}};oF.unstable_pauseExecution=function(){};oF.unstable_requestPaint=function(){};oF.unstable_runWithPriority=function(A,J){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=bJ;bJ=A;try{return J()}finally{bJ=H}};oF.unstable_scheduleCallback=function(A,J,H){var E=oF.unstable_now();switch(typeof H==="object"&&H!==null?(H=H.delay,H=typeof H==="number"&&0<H?E+H:E):H=E,A){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5000}return X=H+X,A={id:sF++,callback:J,priorityLevel:A,startTime:H,expirationTime:X,sortIndex:-1},H>E?(A.sortIndex=H,wZ(aH,A),s8(NH)===null&&A===s8(aH)&&(rE?(V5(tE),tE=-1):rE=!0,pZ(uZ,H-E))):(A.sortIndex=X,wZ(NH,A),m1||t9||(m1=!0,lZ(hZ))),A};oF.unstable_shouldYield=R5;oF.unstable_wrapCallback=function(A){var J=bJ;return function(){var H=bJ;bJ=J;try{return A.apply(this,arguments)}finally{bJ=H}}}});var nY={};sQ(nY,{version:()=>kq,unstable_renderSubtreeIntoContainer:()=>Mq,unstable_batchedUpdates:()=>Oq,unmountComponentAtNode:()=>Wq,render:()=>Gq,hydrateRoot:()=>Bq,hydrate:()=>Cq,flushSync:()=>Fq,findDOMNode:()=>Qq,createRoot:()=>zq,createPortal:()=>Iq,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>qq});function qA(A){for(var J="https://reactjs.org/docs/error-decoder.html?invariant="+A,H=1;H<arguments.length;H++)J+="&args[]="+encodeURIComponent(arguments[H]);return"Minified React error #"+A+"; visit "+J+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function J0(A,J){t0(A,J),t0(A+"Capture",J)}function t0(A,J){WX[A]=J;for(A=0;A<J.length;A++)QN.add(J[A])}function IC(A){if(VR.call(N5,A))return!0;if(VR.call(P5,A))return!1;if(qC.test(A))return N5[A]=!0;return P5[A]=!0,!1}function zC(A,J,H,E){if(H!==null&&H.type===0)return!1;switch(typeof J){case"function":case"symbol":return!0;case"boolean":if(E)return!1;if(H!==null)return!H.acceptsBooleans;return A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-";default:return!1}}function QC(A,J,H,E){if(J===null||typeof J>"u"||zC(A,J,H,E))return!0;if(E)return!1;if(H!==null)switch(H.type){case 3:return!J;case 4:return J===!1;case 5:return isNaN(J);case 6:return isNaN(J)||1>J}return!1}function A8(A,J,H,E,X,V,U){this.acceptsBooleans=J===2||J===3||J===4,this.attributeName=E,this.attributeNamespace=X,this.mustUseProperty=H,this.propertyName=A,this.type=J,this.sanitizeURL=V,this.removeEmptyString=U}function AY(A){return A[1].toUpperCase()}function JY(A,J,H,E){var X=uJ.hasOwnProperty(J)?uJ[J]:null;if(X!==null?X.type!==0:E||!(2<J.length)||J[0]!=="o"&&J[0]!=="O"||J[1]!=="n"&&J[1]!=="N")QC(J,H,X,E)&&(H=null),E||X===null?IC(J)&&(H===null?A.removeAttribute(J):A.setAttribute(J,""+H)):X.mustUseProperty?A[X.propertyName]=H===null?X.type===3?!1:"":H:(J=X.attributeName,E=X.attributeNamespace,H===null?A.removeAttribute(J):(X=X.type,H=X===3||X===4&&H===!0?"":""+H,E?A.setAttributeNS(E,J,H):A.setAttribute(J,H)))}function aE(A){if(A===null||typeof A!=="object")return null;return A=q5&&A[q5]||A["@@iterator"],typeof A==="function"?A:null}function EX(A){if(gZ===void 0)try{throw Error()}catch(H){var J=H.stack.trim().match(/\n( *(at )?)/);gZ=J&&J[1]||""}return`
`+gZ+A}function xZ(A,J){if(!A||bZ)return"";bZ=!0;var H=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(J)if(J=function(){throw Error()},Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var E=Y}Reflect.construct(A,[],J)}else{try{J.call()}catch(Y){E=Y}A.call(J.prototype)}else{try{throw Error()}catch(Y){E=Y}A()}}catch(Y){if(Y&&E&&typeof Y.stack==="string"){for(var X=Y.stack.split(`
`),V=E.stack.split(`
`),U=X.length-1,Z=V.length-1;1<=U&&0<=Z&&X[U]!==V[Z];)Z--;for(;1<=U&&0<=Z;U--,Z--)if(X[U]!==V[Z]){if(U!==1||Z!==1)do if(U--,Z--,0>Z||X[U]!==V[Z]){var R=`
`+X[U].replace(" at new "," at ");return A.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",A.displayName)),R}while(1<=U&&0<=Z);break}}}finally{bZ=!1,Error.prepareStackTrace=H}return(A=A?A.displayName||A.name:"")?EX(A):""}function FC(A){switch(A.tag){case 5:return EX(A.type);case 16:return EX("Lazy");case 13:return EX("Suspense");case 19:return EX("SuspenseList");case 0:case 2:case 15:return A=xZ(A.type,!1),A;case 11:return A=xZ(A.type.render,!1),A;case 1:return A=xZ(A.type,!0),A;default:return""}}function YR(A){if(A==null)return null;if(typeof A==="function")return A.displayName||A.name||null;if(typeof A==="string")return A;switch(A){case y0:return"Fragment";case j0:return"Portal";case UR:return"Profiler";case HY:return"StrictMode";case ZR:return"Suspense";case RR:return"SuspenseList"}if(typeof A==="object")switch(A.$$typeof){case CN:return(A.displayName||"Context")+".Consumer";case FN:return(A._context.displayName||"Context")+".Provider";case EY:var J=A.render;return A=A.displayName,A||(A=J.displayName||J.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case XY:return J=A.displayName||null,J!==null?J:YR(A.type)||"Memo";case $H:J=A._payload,A=A._init;try{return YR(A(J))}catch(H){}}return null}function CC(A){var J=A.type;switch(A.tag){case 24:return"Cache";case 9:return(J.displayName||"Context")+".Consumer";case 10:return(J._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=J.render,A=A.displayName||A.name||"",J.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return J;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return YR(J);case 8:return J===HY?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof J==="function")return J.displayName||J.name||null;if(typeof J==="string")return J}return null}function q1(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function GN(A){var J=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(J==="checkbox"||J==="radio")}function BC(A){var J=GN(A)?"checked":"value",H=Object.getOwnPropertyDescriptor(A.constructor.prototype,J),E=""+A[J];if(!A.hasOwnProperty(J)&&typeof H<"u"&&typeof H.get==="function"&&typeof H.set==="function"){var{get:X,set:V}=H;return Object.defineProperty(A,J,{configurable:!0,get:function(){return X.call(this)},set:function(U){E=""+U,V.call(this,U)}}),Object.defineProperty(A,J,{enumerable:H.enumerable}),{getValue:function(){return E},setValue:function(U){E=""+U},stopTracking:function(){A._valueTracker=null,delete A[J]}}}}function $9(A){A._valueTracker||(A._valueTracker=BC(A))}function WN(A){if(!A)return!1;var J=A._valueTracker;if(!J)return!0;var H=J.getValue(),E="";return A&&(E=GN(A)?A.checked?"true":"false":A.value),A=E,A!==H?(J.setValue(A),!0):!1}function kV(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch(J){return A.body}}function PR(A,J){var H=J.checked;return VJ({},J,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:H!=null?H:A._wrapperState.initialChecked})}function I5(A,J){var H=J.defaultValue==null?"":J.defaultValue,E=J.checked!=null?J.checked:J.defaultChecked;H=q1(J.value!=null?J.value:H),A._wrapperState={initialChecked:E,initialValue:H,controlled:J.type==="checkbox"||J.type==="radio"?J.checked!=null:J.value!=null}}function ON(A,J){J=J.checked,J!=null&&JY(A,"checked",J,!1)}function NR(A,J){ON(A,J);var H=q1(J.value),E=J.type;if(H!=null)if(E==="number"){if(H===0&&A.value===""||A.value!=H)A.value=""+H}else A.value!==""+H&&(A.value=""+H);else if(E==="submit"||E==="reset"){A.removeAttribute("value");return}J.hasOwnProperty("value")?qR(A,J.type,H):J.hasOwnProperty("defaultValue")&&qR(A,J.type,q1(J.defaultValue)),J.checked==null&&J.defaultChecked!=null&&(A.defaultChecked=!!J.defaultChecked)}function z5(A,J,H){if(J.hasOwnProperty("value")||J.hasOwnProperty("defaultValue")){var E=J.type;if(!(E!=="submit"&&E!=="reset"||J.value!==void 0&&J.value!==null))return;J=""+A._wrapperState.initialValue,H||J===A.value||(A.value=J),A.defaultValue=J}H=A.name,H!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,H!==""&&(A.name=H)}function qR(A,J,H){if(J!=="number"||kV(A.ownerDocument)!==A)H==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+H&&(A.defaultValue=""+H)}function n0(A,J,H,E){if(A=A.options,J){J={};for(var X=0;X<H.length;X++)J["$"+H[X]]=!0;for(H=0;H<A.length;H++)X=J.hasOwnProperty("$"+A[H].value),A[H].selected!==X&&(A[H].selected=X),X&&E&&(A[H].defaultSelected=!0)}else{H=""+q1(H),J=null;for(X=0;X<A.length;X++){if(A[X].value===H){A[X].selected=!0,E&&(A[X].defaultSelected=!0);return}J!==null||A[X].disabled||(J=A[X])}J!==null&&(J.selected=!0)}}function IR(A,J){if(J.dangerouslySetInnerHTML!=null)throw Error(qA(91));return VJ({},J,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function Q5(A,J){var H=J.value;if(H==null){if(H=J.children,J=J.defaultValue,H!=null){if(J!=null)throw Error(qA(92));if(XX(H)){if(1<H.length)throw Error(qA(93));H=H[0]}J=H}J==null&&(J=""),H=J}A._wrapperState={initialValue:q1(H)}}function MN(A,J){var H=q1(J.value),E=q1(J.defaultValue);H!=null&&(H=""+H,H!==A.value&&(A.value=H),J.defaultValue==null&&A.defaultValue!==H&&(A.defaultValue=H)),E!=null&&(A.defaultValue=""+E)}function F5(A){var J=A.textContent;J===A._wrapperState.initialValue&&J!==""&&J!==null&&(A.value=J)}function kN(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zR(A,J){return A==null||A==="http://www.w3.org/1999/xhtml"?kN(J):A==="http://www.w3.org/2000/svg"&&J==="foreignObject"?"http://www.w3.org/1999/xhtml":A}function OX(A,J){if(J){var H=A.firstChild;if(H&&H===A.lastChild&&H.nodeType===3){H.nodeValue=J;return}}A.textContent=J}function SN(A,J,H){return J==null||typeof J==="boolean"||J===""?"":H||typeof J!=="number"||J===0||NX.hasOwnProperty(A)&&NX[A]?(""+J).trim():J+"px"}function LN(A,J){A=A.style;for(var H in J)if(J.hasOwnProperty(H)){var E=H.indexOf("--")===0,X=SN(H,J[H],E);H==="float"&&(H="cssFloat"),E?A.setProperty(H,X):A[H]=X}}function QR(A,J){if(J){if(WC[A]&&(J.children!=null||J.dangerouslySetInnerHTML!=null))throw Error(qA(137,A));if(J.dangerouslySetInnerHTML!=null){if(J.children!=null)throw Error(qA(60));if(typeof J.dangerouslySetInnerHTML!=="object"||!("__html"in J.dangerouslySetInnerHTML))throw Error(qA(61))}if(J.style!=null&&typeof J.style!=="object")throw Error(qA(62))}}function FR(A,J){if(A.indexOf("-")===-1)return typeof J.is==="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function VY(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}function C5(A){if(A=bX(A)){if(typeof BR!=="function")throw Error(qA(280));var J=A.stateNode;J&&(J=eV(J),BR(A.stateNode,A.type,J))}}function KN(A){c0?i0?i0.push(A):i0=[A]:c0=A}function TN(){if(c0){var A=c0,J=i0;if(i0=c0=null,C5(A),J)for(A=0;A<J.length;A++)C5(J[A])}}function wN(A,J){return A(J)}function fN(){}function jN(A,J,H){if(mZ)return A(J,H);mZ=!0;try{return wN(A,J,H)}finally{if(mZ=!1,c0!==null||i0!==null)fN(),TN()}}function MX(A,J){var H=A.stateNode;if(H===null)return null;var E=eV(H);if(E===null)return null;H=E[J];A:switch(J){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(E=!E.disabled)||(A=A.type,E=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!E;break A;default:A=!1}if(A)return null;if(H&&typeof H!=="function")throw Error(qA(231,J,typeof H));return H}function OC(A,J,H,E,X,V,U,Z,R){var Y=Array.prototype.slice.call(arguments,3);try{J.apply(H,Y)}catch(P){this.onError(P)}}function kC(A,J,H,E,X,V,U,Z,R){qX=!1,DV=null,OC.apply(MC,arguments)}function DC(A,J,H,E,X,V,U,Z,R){if(kC.apply(this,arguments),qX){if(qX){var Y=DV;qX=!1,DV=null}else throw Error(qA(198));SV||(SV=!0,WR=Y)}}function H0(A){var J=A,H=A;if(A.alternate)for(;J.return;)J=J.return;else{A=J;do J=A,(J.flags&4098)!==0&&(H=J.return),A=J.return;while(A)}return J.tag===3?H:null}function yN(A){if(A.tag===13){var J=A.memoizedState;if(J===null&&(A=A.alternate,A!==null&&(J=A.memoizedState)),J!==null)return J.dehydrated}return null}function B5(A){if(H0(A)!==A)throw Error(qA(188))}function SC(A){var J=A.alternate;if(!J){if(J=H0(A),J===null)throw Error(qA(188));return J!==A?null:A}for(var H=A,E=J;;){var X=H.return;if(X===null)break;var V=X.alternate;if(V===null){if(E=X.return,E!==null){H=E;continue}break}if(X.child===V.child){for(V=X.child;V;){if(V===H)return B5(X),A;if(V===E)return B5(X),J;V=V.sibling}throw Error(qA(188))}if(H.return!==E.return)H=X,E=V;else{for(var U=!1,Z=X.child;Z;){if(Z===H){U=!0,H=X,E=V;break}if(Z===E){U=!0,E=X,H=V;break}Z=Z.sibling}if(!U){for(Z=V.child;Z;){if(Z===H){U=!0,H=V,E=X;break}if(Z===E){U=!0,E=V,H=X;break}Z=Z.sibling}if(!U)throw Error(qA(189))}}if(H.alternate!==E)throw Error(qA(190))}if(H.tag!==3)throw Error(qA(188));return H.stateNode.current===H?A:J}function vN(A){return A=SC(A),A!==null?uN(A):null}function uN(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var J=uN(A);if(J!==null)return J;A=A.sibling}return null}function fC(A){if(QH&&typeof QH.onCommitFiberRoot==="function")try{QH.onCommitFiberRoot(oV,A,void 0,(A.current.flags&128)===128)}catch(J){}}function vC(A){return A>>>=0,A===0?32:31-(jC(A)/yC|0)|0}function VX(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function KV(A,J){var H=A.pendingLanes;if(H===0)return 0;var E=0,X=A.suspendedLanes,V=A.pingedLanes,U=H&268435455;if(U!==0){var Z=U&~X;Z!==0?E=VX(Z):(V&=U,V!==0&&(E=VX(V)))}else U=H&~X,U!==0?E=VX(U):V!==0&&(E=VX(V));if(E===0)return 0;if(J!==0&&J!==E&&(J&X)===0&&(X=E&-E,V=J&-J,X>=V||X===16&&(V&4194240)!==0))return J;if((E&4)!==0&&(E|=H&16),J=A.entangledLanes,J!==0)for(A=A.entanglements,J&=E;0<J;)H=31-e8(J),X=1<<H,E|=A[H],J&=~X;return E}function uC(A,J){switch(A){case 1:case 2:case 4:return J+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return J+5000;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hC(A,J){for(var{suspendedLanes:H,pingedLanes:E,expirationTimes:X,pendingLanes:V}=A;0<V;){var U=31-e8(V),Z=1<<U,R=X[U];if(R===-1){if((Z&H)===0||(Z&E)!==0)X[U]=uC(Z,J)}else R<=J&&(A.expiredLanes|=Z);V&=~Z}}function OR(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function gN(){var A=AV;return AV<<=1,(AV&4194240)===0&&(AV=64),A}function dZ(A){for(var J=[],H=0;31>H;H++)J.push(A);return J}function pX(A,J,H){A.pendingLanes|=J,J!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,J=31-e8(J),A[J]=H}function lC(A,J){var H=A.pendingLanes&~J;A.pendingLanes=J,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=J,A.mutableReadLanes&=J,A.entangledLanes&=J,J=A.entanglements;var E=A.eventTimes;for(A=A.expirationTimes;0<H;){var X=31-e8(H),V=1<<X;J[X]=0,E[X]=-1,A[X]=-1,H&=~V}}function ZY(A,J){var H=A.entangledLanes|=J;for(A=A.entanglements;H;){var E=31-e8(H),X=1<<E;X&J|A[E]&J&&(A[E]|=J),H&=~X}}function bN(A){return A&=-A,1<A?4<A?(A&268435455)!==0?16:536870912:4:1}function W5(A,J){switch(A){case"focusin":case"focusout":X1=null;break;case"dragenter":case"dragleave":V1=null;break;case"mouseover":case"mouseout":U1=null;break;case"pointerover":case"pointerout":kX.delete(J.pointerId);break;case"gotpointercapture":case"lostpointercapture":DX.delete(J.pointerId)}}function eE(A,J,H,E,X,V){if(A===null||A.nativeEvent!==V)return A={blockedOn:J,domEventName:H,eventSystemFlags:E,nativeEvent:V,targetContainers:[X]},J!==null&&(J=bX(J),J!==null&&RY(J)),A;return A.eventSystemFlags|=E,J=A.targetContainers,X!==null&&J.indexOf(X)===-1&&J.push(X),A}function gC(A,J,H,E,X){switch(J){case"focusin":return X1=eE(X1,A,J,H,E,X),!0;case"dragenter":return V1=eE(V1,A,J,H,E,X),!0;case"mouseover":return U1=eE(U1,A,J,H,E,X),!0;case"pointerover":var V=X.pointerId;return kX.set(V,eE(kX.get(V)||null,A,J,H,E,X)),!0;case"gotpointercapture":return V=X.pointerId,DX.set(V,eE(DX.get(V)||null,A,J,H,E,X)),!0}return!1}function cN(A){var J=i1(A.target);if(J!==null){var H=H0(J);if(H!==null){if(J=H.tag,J===13){if(J=yN(H),J!==null){A.blockedOn=J,nN(A.priority,function(){mN(H)});return}}else if(J===3&&H.stateNode.current.memoizedState.isDehydrated){A.blockedOn=H.tag===3?H.stateNode.containerInfo:null;return}}}A.blockedOn=null}function qV(A){if(A.blockedOn!==null)return!1;for(var J=A.targetContainers;0<J.length;){var H=kR(A.domEventName,A.eventSystemFlags,J[0],A.nativeEvent);if(H===null){H=A.nativeEvent;var E=new H.constructor(H.type,H);CR=E,H.target.dispatchEvent(E),CR=null}else return J=bX(H),J!==null&&RY(J),A.blockedOn=H,!1;J.shift()}return!0}function O5(A,J,H){qV(A)&&H.delete(J)}function bC(){MR=!1,X1!==null&&qV(X1)&&(X1=null),V1!==null&&qV(V1)&&(V1=null),U1!==null&&qV(U1)&&(U1=null),kX.forEach(O5),DX.forEach(O5)}function $E(A,J){A.blockedOn===J&&(A.blockedOn=null,MR||(MR=!0,$6.unstable_scheduleCallback($6.unstable_NormalPriority,bC)))}function SX(A){function J(X){return $E(X,A)}if(0<HV.length){$E(HV[0],A);for(var H=1;H<HV.length;H++){var E=HV[H];E.blockedOn===A&&(E.blockedOn=null)}}X1!==null&&$E(X1,A),V1!==null&&$E(V1,A),U1!==null&&$E(U1,A),kX.forEach(J),DX.forEach(J);for(H=0;H<A1.length;H++)E=A1[H],E.blockedOn===A&&(E.blockedOn=null);for(;0<A1.length&&(H=A1[0],H.blockedOn===null);)cN(H),H.blockedOn===null&&A1.shift()}function xC(A,J,H,E){var X=h6,V=s0.transition;s0.transition=null;try{h6=1,YY(A,J,H,E)}finally{h6=X,s0.transition=V}}function mC(A,J,H,E){var X=h6,V=s0.transition;s0.transition=null;try{h6=4,YY(A,J,H,E)}finally{h6=X,s0.transition=V}}function YY(A,J,H,E){if(TV){var X=kR(A,J,H,E);if(X===null)rZ(A,J,E,wV,H),W5(A,E);else if(gC(X,A,J,H,E))E.stopPropagation();else if(W5(A,E),J&4&&-1<pC.indexOf(A)){for(;X!==null;){var V=bX(X);if(V!==null&&xN(V),V=kR(A,J,H,E),V===null&&rZ(A,J,E,wV,H),V===X)break;X=V}X!==null&&E.stopPropagation()}else rZ(A,J,E,null,H)}}function kR(A,J,H,E){if(wV=null,A=VY(E),A=i1(A),A!==null)if(J=H0(A),J===null)A=null;else if(H=J.tag,H===13){if(A=yN(J),A!==null)return A;A=null}else if(H===3){if(J.stateNode.current.memoizedState.isDehydrated)return J.tag===3?J.stateNode.containerInfo:null;A=null}else J!==A&&(A=null);return wV=A,null}function iN(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TC()){case UY:return 1;case lN:return 4;case LV:case wC:return 16;case pN:return 536870912;default:return 16}default:return 16}}function sN(){if(IV)return IV;var A,J=PY,H=J.length,E,X="value"in H1?H1.value:H1.textContent,V=X.length;for(A=0;A<H&&J[A]===X[A];A++);var U=H-A;for(E=1;E<=U&&J[H-E]===X[V-E];E++);return IV=X.slice(A,1<E?1-E:void 0)}function zV(A){var J=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&J===13&&(A=13)):A=J,A===10&&(A=13),32<=A||A===13?A:0}function EV(){return!0}function M5(){return!1}function W8(A){function J(H,E,X,V,U){this._reactName=H,this._targetInst=X,this.type=E,this.nativeEvent=V,this.target=U,this.currentTarget=null;for(var Z in A)A.hasOwnProperty(Z)&&(H=A[Z],this[Z]=H?H(V):V[Z]);return this.isDefaultPrevented=(V.defaultPrevented!=null?V.defaultPrevented:V.returnValue===!1)?EV:M5,this.isPropagationStopped=M5,this}return VJ(J.prototype,{preventDefault:function(){this.defaultPrevented=!0;var H=this.nativeEvent;H&&(H.preventDefault?H.preventDefault():typeof H.returnValue!=="unknown"&&(H.returnValue=!1),this.isDefaultPrevented=EV)},stopPropagation:function(){var H=this.nativeEvent;H&&(H.stopPropagation?H.stopPropagation():typeof H.cancelBubble!=="unknown"&&(H.cancelBubble=!0),this.isPropagationStopped=EV)},persist:function(){},isPersistent:EV}),J}function AB(A){var J=this.nativeEvent;return J.getModifierState?J.getModifierState(A):(A=_C[A])?!!J[A]:!1}function qY(){return AB}function rN(A,J){switch(A){case"keyup":return PB.indexOf(J.keyCode)!==-1;case"keydown":return J.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tN(A){return A=A.detail,typeof A==="object"&&"data"in A?A.data:null}function qB(A,J){switch(A){case"compositionend":return tN(J);case"keypress":if(J.which!==32)return null;return K5=!0,L5;case"textInput":return A=J.data,A===L5&&K5?null:A;default:return null}}function IB(A,J){if(v0)return A==="compositionend"||!IY&&rN(A,J)?(A=sN(),IV=PY=H1=null,v0=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(J.ctrlKey||J.altKey||J.metaKey)||J.ctrlKey&&J.altKey){if(J.char&&1<J.char.length)return J.char;if(J.which)return String.fromCharCode(J.which)}return null;case"compositionend":return oN&&J.locale!=="ko"?null:J.data;default:return null}}function T5(A){var J=A&&A.nodeName&&A.nodeName.toLowerCase();return J==="input"?!!zB[A.type]:J==="textarea"?!0:!1}function aN(A,J,H,E){KN(E),J=fV(J,"onChange"),0<J.length&&(H=new NY("onChange","change",null,H,E),A.push({event:H,listeners:J}))}function QB(A){Z3(A,0)}function tV(A){var J=l0(A);if(WN(J))return A}function FB(A,J){if(A==="change")return J}function w5(){zX&&(zX.detachEvent("onpropertychange",$N),LX=zX=null)}function $N(A){if(A.propertyName==="value"&&tV(LX)){var J=[];aN(J,LX,A,VY(A)),jN(QB,J)}}function CB(A,J,H){A==="focusin"?(w5(),zX=J,LX=H,zX.attachEvent("onpropertychange",$N)):A==="focusout"&&w5()}function BB(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return tV(LX)}function GB(A,J){if(A==="click")return tV(J)}function WB(A,J){if(A==="input"||A==="change")return tV(J)}function OB(A,J){return A===J&&(A!==0||1/A===1/J)||A!==A&&J!==J}function KX(A,J){if(_8(A,J))return!0;if(typeof A!=="object"||A===null||typeof J!=="object"||J===null)return!1;var H=Object.keys(A),E=Object.keys(J);if(H.length!==E.length)return!1;for(E=0;E<H.length;E++){var X=H[E];if(!VR.call(J,X)||!_8(A[X],J[X]))return!1}return!0}function f5(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function j5(A,J){var H=f5(A);A=0;for(var E;H;){if(H.nodeType===3){if(E=A+H.textContent.length,A<=J&&E>=J)return{node:H,offset:J-A};A=E}A:{for(;H;){if(H.nextSibling){H=H.nextSibling;break A}H=H.parentNode}H=void 0}H=f5(H)}}function _N(A,J){return A&&J?A===J?!0:A&&A.nodeType===3?!1:J&&J.nodeType===3?_N(A,J.parentNode):("contains"in A)?A.contains(J):A.compareDocumentPosition?!!(A.compareDocumentPosition(J)&16):!1:!1}function A3(){for(var A=window,J=kV();J instanceof A.HTMLIFrameElement;){try{var H=typeof J.contentWindow.location.href==="string"}catch(E){H=!1}if(H)A=J.contentWindow;else break;J=kV(A.document)}return J}function zY(A){var J=A&&A.nodeName&&A.nodeName.toLowerCase();return J&&(J==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||J==="textarea"||A.contentEditable==="true")}function MB(A){var J=A3(),H=A.focusedElem,E=A.selectionRange;if(J!==H&&H&&H.ownerDocument&&_N(H.ownerDocument.documentElement,H)){if(E!==null&&zY(H)){if(J=E.start,A=E.end,A===void 0&&(A=J),"selectionStart"in H)H.selectionStart=J,H.selectionEnd=Math.min(A,H.value.length);else if(A=(J=H.ownerDocument||document)&&J.defaultView||window,A.getSelection){A=A.getSelection();var X=H.textContent.length,V=Math.min(E.start,X);E=E.end===void 0?V:Math.min(E.end,X),!A.extend&&V>E&&(X=E,E=V,V=X),X=j5(H,V);var U=j5(H,E);X&&U&&(A.rangeCount!==1||A.anchorNode!==X.node||A.anchorOffset!==X.offset||A.focusNode!==U.node||A.focusOffset!==U.offset)&&(J=J.createRange(),J.setStart(X.node,X.offset),A.removeAllRanges(),V>E?(A.addRange(J),A.extend(U.node,U.offset)):(J.setEnd(U.node,U.offset),A.addRange(J)))}}J=[];for(A=H;A=A.parentNode;)A.nodeType===1&&J.push({element:A,left:A.scrollLeft,top:A.scrollTop});typeof H.focus==="function"&&H.focus();for(H=0;H<J.length;H++)A=J[H],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}function y5(A,J,H){var E=H.window===H?H.document:H.nodeType===9?H:H.ownerDocument;SR||u0==null||u0!==kV(E)||(E=u0,("selectionStart"in E)&&zY(E)?E={start:E.selectionStart,end:E.selectionEnd}:(E=(E.ownerDocument&&E.ownerDocument.defaultView||window).getSelection(),E={anchorNode:E.anchorNode,anchorOffset:E.anchorOffset,focusNode:E.focusNode,focusOffset:E.focusOffset}),QX&&KX(QX,E)||(QX=E,E=fV(DR,"onSelect"),0<E.length&&(J=new NY("onSelect","select",null,J,H),A.push({event:J,listeners:E}),J.target=u0)))}function XV(A,J){var H={};return H[A.toLowerCase()]=J.toLowerCase(),H["Webkit"+A]="webkit"+J,H["Moz"+A]="moz"+J,H}function aV(A){if(sZ[A])return sZ[A];if(!h0[A])return A;var J=h0[A],H;for(H in J)if(J.hasOwnProperty(H)&&H in J3)return sZ[A]=J[H];return A}function z1(A,J){U3.set(A,J),J0(J,[A])}function u5(A,J,H){var E=A.type||"unknown-event";A.currentTarget=H,DC(E,J,void 0,A),A.currentTarget=null}function Z3(A,J){J=(J&4)!==0;for(var H=0;H<A.length;H++){var E=A[H],X=E.event;E=E.listeners;A:{var V=void 0;if(J)for(var U=E.length-1;0<=U;U--){var Z=E[U],R=Z.instance,Y=Z.currentTarget;if(Z=Z.listener,R!==V&&X.isPropagationStopped())break A;u5(X,Z,Y),V=R}else for(U=0;U<E.length;U++){if(Z=E[U],R=Z.instance,Y=Z.currentTarget,Z=Z.listener,R!==V&&X.isPropagationStopped())break A;u5(X,Z,Y),V=R}}}if(SV)throw A=WR,SV=!1,WR=null,A}function o6(A,J){var H=J[yR];H===void 0&&(H=J[yR]=new Set);var E=A+"__bubble";H.has(E)||(R3(J,A,2,!1),H.add(E))}function oZ(A,J,H){var E=0;J&&(E|=4),R3(H,A,E,J)}function TX(A){if(!A[VV]){A[VV]=!0,QN.forEach(function(H){H!=="selectionchange"&&(DB.has(H)||oZ(H,!1,A),oZ(H,!0,A))});var J=A.nodeType===9?A:A.ownerDocument;J===null||J[VV]||(J[VV]=!0,oZ("selectionchange",!1,J))}}function R3(A,J,H,E){switch(iN(J)){case 1:var X=xC;break;case 4:X=mC;break;default:X=YY}H=X.bind(null,J,H,A),X=void 0,!GR||J!=="touchstart"&&J!=="touchmove"&&J!=="wheel"||(X=!0),E?X!==void 0?A.addEventListener(J,H,{capture:!0,passive:X}):A.addEventListener(J,H,!0):X!==void 0?A.addEventListener(J,H,{passive:X}):A.addEventListener(J,H,!1)}function rZ(A,J,H,E,X){var V=E;if((J&1)===0&&(J&2)===0&&E!==null)A:for(;;){if(E===null)return;var U=E.tag;if(U===3||U===4){var Z=E.stateNode.containerInfo;if(Z===X||Z.nodeType===8&&Z.parentNode===X)break;if(U===4)for(U=E.return;U!==null;){var R=U.tag;if(R===3||R===4){if(R=U.stateNode.containerInfo,R===X||R.nodeType===8&&R.parentNode===X)return}U=U.return}for(;Z!==null;){if(U=i1(Z),U===null)return;if(R=U.tag,R===5||R===6){E=V=U;continue A}Z=Z.parentNode}}E=E.return}jN(function(){var Y=V,P=VY(H),N=[];A:{var I=U3.get(A);if(I!==void 0){var z=NY,B=A;switch(A){case"keypress":if(zV(H)===0)break A;case"keydown":case"keyup":z=HB;break;case"focusin":B="focus",z=iZ;break;case"focusout":B="blur",z=iZ;break;case"beforeblur":case"afterblur":z=iZ;break;case"click":if(H.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=k5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=cC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=VB;break;case H3:case E3:case X3:z=oC;break;case V3:z=ZB;break;case"scroll":z=dC;break;case"wheel":z=YB;break;case"copy":case"cut":case"paste":z=tC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=S5}var G=(J&4)!==0,F=!G&&A==="scroll",q=G?I!==null?I+"Capture":null:I;G=[];for(var C=Y,Q;C!==null;){Q=C;var D=Q.stateNode;if(Q.tag===5&&D!==null&&(Q=D,q!==null&&(D=MX(C,q),D!=null&&G.push(wX(C,D,Q)))),F)break;C=C.return}0<G.length&&(I=new z(I,B,null,H,P),N.push({event:I,listeners:G}))}}if((J&7)===0){A:{if(I=A==="mouseover"||A==="pointerover",z=A==="mouseout"||A==="pointerout",I&&H!==CR&&(B=H.relatedTarget||H.fromElement)&&(i1(B)||B[jH]))break A;if(z||I){if(I=P.window===P?P:(I=P.ownerDocument)?I.defaultView||I.parentWindow:window,z){if(B=H.relatedTarget||H.toElement,z=Y,B=B?i1(B):null,B!==null&&(F=H0(B),B!==F||B.tag!==5&&B.tag!==6))B=null}else z=null,B=Y;if(z!==B){if(G=k5,D="onMouseLeave",q="onMouseEnter",C="mouse",A==="pointerout"||A==="pointerover")G=S5,D="onPointerLeave",q="onPointerEnter",C="pointer";if(F=z==null?I:l0(z),Q=B==null?I:l0(B),I=new G(D,C+"leave",z,H,P),I.target=F,I.relatedTarget=Q,D=null,i1(P)===Y&&(G=new G(q,C+"enter",B,H,P),G.target=Q,G.relatedTarget=F,D=G),F=D,z&&B)J:{G=z,q=B,C=0;for(Q=G;Q;Q=w0(Q))C++;Q=0;for(D=q;D;D=w0(D))Q++;for(;0<C-Q;)G=w0(G),C--;for(;0<Q-C;)q=w0(q),Q--;for(;C--;){if(G===q||q!==null&&G===q.alternate)break J;G=w0(G),q=w0(q)}G=null}else G=null;z!==null&&h5(N,I,z,G,!1),B!==null&&F!==null&&h5(N,F,B,G,!0)}}}A:{if(I=Y?l0(Y):window,z=I.nodeName&&I.nodeName.toLowerCase(),z==="select"||z==="input"&&I.type==="file")var f=FB;else if(T5(I))if(eN)f=WB;else{f=BB;var S=CB}else(z=I.nodeName)&&z.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(f=GB);if(f&&(f=f(A,Y))){aN(N,f,H,P);break A}S&&S(A,I,Y),A==="focusout"&&(S=I._wrapperState)&&S.controlled&&I.type==="number"&&qR(I,"number",I.value)}switch(S=Y?l0(Y):window,A){case"focusin":if(T5(S)||S.contentEditable==="true")u0=S,DR=Y,QX=null;break;case"focusout":QX=DR=u0=null;break;case"mousedown":SR=!0;break;case"contextmenu":case"mouseup":case"dragend":SR=!1,y5(N,H,P);break;case"selectionchange":if(kB)break;case"keydown":case"keyup":y5(N,H,P)}var L;if(IY)A:{switch(A){case"compositionstart":var u="onCompositionStart";break A;case"compositionend":u="onCompositionEnd";break A;case"compositionupdate":u="onCompositionUpdate";break A}u=void 0}else v0?rN(A,H)&&(u="onCompositionEnd"):A==="keydown"&&H.keyCode===229&&(u="onCompositionStart");if(u&&(oN&&H.locale!=="ko"&&(v0||u!=="onCompositionStart"?u==="onCompositionEnd"&&v0&&(L=sN()):(H1=P,PY=("value"in H1)?H1.value:H1.textContent,v0=!0)),S=fV(Y,u),0<S.length&&(u=new D5(u,A,null,H,P),N.push({event:u,listeners:S}),L?u.data=L:(L=tN(H),L!==null&&(u.data=L)))),L=NB?qB(A,H):IB(A,H))Y=fV(Y,"onBeforeInput"),0<Y.length&&(P=new D5("onBeforeInput","beforeinput",null,H,P),N.push({event:P,listeners:Y}),P.data=L)}Z3(N,J)})}function wX(A,J,H){return{instance:A,listener:J,currentTarget:H}}function fV(A,J){for(var H=J+"Capture",E=[];A!==null;){var X=A,V=X.stateNode;X.tag===5&&V!==null&&(X=V,V=MX(A,H),V!=null&&E.unshift(wX(A,V,X)),V=MX(A,J),V!=null&&E.push(wX(A,V,X))),A=A.return}return E}function w0(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A?A:null}function h5(A,J,H,E,X){for(var V=J._reactName,U=[];H!==null&&H!==E;){var Z=H,R=Z.alternate,Y=Z.stateNode;if(R!==null&&R===E)break;Z.tag===5&&Y!==null&&(Z=Y,X?(R=MX(H,V),R!=null&&U.unshift(wX(H,R,Z))):X||(R=MX(H,V),R!=null&&U.push(wX(H,R,Z)))),H=H.return}U.length!==0&&A.push({event:J,listeners:U})}function l5(A){return(typeof A==="string"?A:""+A).replace(SB,`
`).replace(LB,"")}function UV(A,J,H){if(J=l5(J),l5(A)!==J&&H)throw Error(qA(425))}function jV(){}function fR(A,J){return A==="textarea"||A==="noscript"||typeof J.children==="string"||typeof J.children==="number"||typeof J.dangerouslySetInnerHTML==="object"&&J.dangerouslySetInnerHTML!==null&&J.dangerouslySetInnerHTML.__html!=null}function wB(A){setTimeout(function(){throw A})}function tZ(A,J){var H=J,E=0;do{var X=H.nextSibling;if(A.removeChild(H),X&&X.nodeType===8)if(H=X.data,H==="/$"){if(E===0){A.removeChild(X),SX(J);return}E--}else H!=="$"&&H!=="$?"&&H!=="$!"||E++;H=X}while(H);SX(J)}function Z1(A){for(;A!=null;A=A.nextSibling){var J=A.nodeType;if(J===1||J===3)break;if(J===8){if(J=A.data,J==="$"||J==="$!"||J==="$?")break;if(J==="/$")return null}}return A}function g5(A){A=A.previousSibling;for(var J=0;A;){if(A.nodeType===8){var H=A.data;if(H==="$"||H==="$!"||H==="$?"){if(J===0)return A;J--}else H==="/$"&&J++}A=A.previousSibling}return null}function i1(A){var J=A[zH];if(J)return J;for(var H=A.parentNode;H;){if(J=H[jH]||H[zH]){if(H=J.alternate,J.child!==null||H!==null&&H.child!==null)for(A=g5(A);A!==null;){if(H=A[zH])return H;A=g5(A)}return J}A=H,H=A.parentNode}return null}function bX(A){return A=A[zH]||A[jH],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function l0(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(qA(33))}function eV(A){return A[fX]||null}function Q1(A){return{current:A}}function r6(A){0>p0||(A.current=vR[p0],vR[p0]=null,p0--)}function c6(A,J){p0++,vR[p0]=A.current,A.current=J}function a0(A,J){var H=A.type.contextTypes;if(!H)return I1;var E=A.stateNode;if(E&&E.__reactInternalMemoizedUnmaskedChildContext===J)return E.__reactInternalMemoizedMaskedChildContext;var X={},V;for(V in H)X[V]=J[V];return E&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=J,A.__reactInternalMemoizedMaskedChildContext=X),X}function Y8(A){return A=A.childContextTypes,A!==null&&A!==void 0}function yV(){r6(R8),r6(nJ)}function b5(A,J,H){if(nJ.current!==I1)throw Error(qA(168));c6(nJ,J),c6(R8,H)}function Y3(A,J,H){var E=A.stateNode;if(J=J.childContextTypes,typeof E.getChildContext!=="function")return H;E=E.getChildContext();for(var X in E)if(!(X in J))throw Error(qA(108,CC(A)||"Unknown",X));return VJ({},H,E)}function vV(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||I1,a1=nJ.current,c6(nJ,A),c6(R8,R8.current),!0}function x5(A,J,H){var E=A.stateNode;if(!E)throw Error(qA(169));H?(A=Y3(A,J,a1),E.__reactInternalMemoizedMergedChildContext=A,r6(R8),r6(nJ),c6(nJ,A)):r6(R8),c6(R8,H)}function P3(A){LH===null?LH=[A]:LH.push(A)}function yB(A){$V=!0,P3(A)}function F1(){if(!aZ&&LH!==null){aZ=!0;var A=0,J=h6;try{var H=LH;for(h6=1;A<H.length;A++){var E=H[A];do E=E(!0);while(E!==null)}LH=null,$V=!1}catch(X){throw LH!==null&&(LH=LH.slice(A+1)),hN(UY,F1),X}finally{h6=J,aZ=!1}}return null}function n1(A,J){g0[b0++]=hV,g0[b0++]=uV,uV=A,hV=J}function N3(A,J,H){f8[j8++]=KH,f8[j8++]=TH,f8[j8++]=e1,e1=A;var E=KH;A=TH;var X=32-e8(E)-1;E&=~(1<<X),H+=1;var V=32-e8(J)+X;if(30<V){var U=X-X%5;V=(E&(1<<U)-1).toString(32),E>>=U,X-=U,KH=1<<32-e8(J)+X|H<<X|E,TH=V+A}else KH=1<<V|H<<X|E,TH=A}function QY(A){A.return!==null&&(n1(A,1),N3(A,1,0))}function FY(A){for(;A===uV;)uV=g0[--b0],g0[b0]=null,hV=g0[--b0],g0[b0]=null;for(;A===e1;)e1=f8[--j8],f8[j8]=null,TH=f8[--j8],f8[j8]=null,KH=f8[--j8],f8[j8]=null}function q3(A,J){var H=y8(5,null,null,0);H.elementType="DELETED",H.stateNode=J,H.return=A,J=A.deletions,J===null?(A.deletions=[H],A.flags|=16):J.push(H)}function m5(A,J){switch(A.tag){case 5:var H=A.type;return J=J.nodeType!==1||H.toLowerCase()!==J.nodeName.toLowerCase()?null:J,J!==null?(A.stateNode=J,G8=A,B8=Z1(J.firstChild),!0):!1;case 6:return J=A.pendingProps===""||J.nodeType!==3?null:J,J!==null?(A.stateNode=J,G8=A,B8=null,!0):!1;case 13:return J=J.nodeType!==8?null:J,J!==null?(H=e1!==null?{id:KH,overflow:TH}:null,A.memoizedState={dehydrated:J,treeContext:H,retryLane:1073741824},H=y8(18,null,null,0),H.stateNode=J,H.return=A,A.child=H,G8=A,B8=null,!0):!1;default:return!1}}function uR(A){return(A.mode&1)!==0&&(A.flags&128)===0}function hR(A){if(e6){var J=B8;if(J){var H=J;if(!m5(A,J)){if(uR(A))throw Error(qA(418));J=Z1(H.nextSibling);var E=G8;J&&m5(A,J)?q3(E,H):(A.flags=A.flags&-4097|2,e6=!1,G8=A)}}else{if(uR(A))throw Error(qA(418));A.flags=A.flags&-4097|2,e6=!1,G8=A}}}function d5(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;G8=A}function ZV(A){if(A!==G8)return!1;if(!e6)return d5(A),e6=!0,!1;var J;if((J=A.tag!==3)&&!(J=A.tag!==5)&&(J=A.type,J=J!=="head"&&J!=="body"&&!fR(A.type,A.memoizedProps)),J&&(J=B8)){if(uR(A))throw I3(),Error(qA(418));for(;J;)q3(A,J),J=Z1(J.nextSibling)}if(d5(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(qA(317));A:{A=A.nextSibling;for(J=0;A;){if(A.nodeType===8){var H=A.data;if(H==="/$"){if(J===0){B8=Z1(A.nextSibling);break A}J--}else H!=="$"&&H!=="$!"&&H!=="$?"||J++}A=A.nextSibling}B8=null}}else B8=G8?Z1(A.stateNode.nextSibling):null;return!0}function I3(){for(var A=B8;A;)A=Z1(A.nextSibling)}function e0(){B8=G8=null,e6=!1}function CY(A){a8===null?a8=[A]:a8.push(A)}function AX(A,J,H){if(A=H.ref,A!==null&&typeof A!=="function"&&typeof A!=="object"){if(H._owner){if(H=H._owner,H){if(H.tag!==1)throw Error(qA(309));var E=H.stateNode}if(!E)throw Error(qA(147,A));var X=E,V=""+A;if(J!==null&&J.ref!==null&&typeof J.ref==="function"&&J.ref._stringRef===V)return J.ref;return J=function(U){var Z=X.refs;U===null?delete Z[V]:Z[V]=U},J._stringRef=V,J}if(typeof A!=="string")throw Error(qA(284));if(!H._owner)throw Error(qA(290,A))}return A}function RV(A,J){throw A=Object.prototype.toString.call(J),Error(qA(31,A==="[object Object]"?"object with keys {"+Object.keys(J).join(", ")+"}":A))}function n5(A){var J=A._init;return J(A._payload)}function z3(A){function J(q,C){if(A){var Q=q.deletions;Q===null?(q.deletions=[C],q.flags|=16):Q.push(C)}}function H(q,C){if(!A)return null;for(;C!==null;)J(q,C),C=C.sibling;return null}function E(q,C){for(q=new Map;C!==null;)C.key!==null?q.set(C.key,C):q.set(C.index,C),C=C.sibling;return q}function X(q,C){return q=N1(q,C),q.index=0,q.sibling=null,q}function V(q,C,Q){if(q.index=Q,!A)return q.flags|=1048576,C;if(Q=q.alternate,Q!==null)return Q=Q.index,Q<C?(q.flags|=2,C):Q;return q.flags|=2,C}function U(q){return A&&q.alternate===null&&(q.flags|=2),q}function Z(q,C,Q,D){if(C===null||C.tag!==6)return C=ER(Q,q.mode,D),C.return=q,C;return C=X(C,Q),C.return=q,C}function R(q,C,Q,D){var f=Q.type;if(f===y0)return P(q,C,Q.props.children,D,Q.key);if(C!==null&&(C.elementType===f||typeof f==="object"&&f!==null&&f.$$typeof===$H&&n5(f)===C.type))return D=X(C,Q.props),D.ref=AX(q,C,Q),D.return=q,D;return D=MV(Q.type,Q.key,Q.props,null,q.mode,D),D.ref=AX(q,C,Q),D.return=q,D}function Y(q,C,Q,D){if(C===null||C.tag!==4||C.stateNode.containerInfo!==Q.containerInfo||C.stateNode.implementation!==Q.implementation)return C=XR(Q,q.mode,D),C.return=q,C;return C=X(C,Q.children||[]),C.return=q,C}function P(q,C,Q,D,f){if(C===null||C.tag!==7)return C=t1(Q,q.mode,D,f),C.return=q,C;return C=X(C,Q),C.return=q,C}function N(q,C,Q){if(typeof C==="string"&&C!==""||typeof C==="number")return C=ER(""+C,q.mode,Q),C.return=q,C;if(typeof C==="object"&&C!==null){switch(C.$$typeof){case e9:return Q=MV(C.type,C.key,C.props,null,q.mode,Q),Q.ref=AX(q,null,C),Q.return=q,Q;case j0:return C=XR(C,q.mode,Q),C.return=q,C;case $H:var D=C._init;return N(q,D(C._payload),Q)}if(XX(C)||aE(C))return C=t1(C,q.mode,Q,null),C.return=q,C;RV(q,C)}return null}function I(q,C,Q,D){var f=C!==null?C.key:null;if(typeof Q==="string"&&Q!==""||typeof Q==="number")return f!==null?null:Z(q,C,""+Q,D);if(typeof Q==="object"&&Q!==null){switch(Q.$$typeof){case e9:return Q.key===f?R(q,C,Q,D):null;case j0:return Q.key===f?Y(q,C,Q,D):null;case $H:return f=Q._init,I(q,C,f(Q._payload),D)}if(XX(Q)||aE(Q))return f!==null?null:P(q,C,Q,D,null);RV(q,Q)}return null}function z(q,C,Q,D,f){if(typeof D==="string"&&D!==""||typeof D==="number")return q=q.get(Q)||null,Z(C,q,""+D,f);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case e9:return q=q.get(D.key===null?Q:D.key)||null,R(C,q,D,f);case j0:return q=q.get(D.key===null?Q:D.key)||null,Y(C,q,D,f);case $H:var S=D._init;return z(q,C,Q,S(D._payload),f)}if(XX(D)||aE(D))return q=q.get(Q)||null,P(C,q,D,f,null);RV(C,D)}return null}function B(q,C,Q,D){for(var f=null,S=null,L=C,u=C=0,k=null;L!==null&&u<Q.length;u++){L.index>u?(k=L,L=null):k=L.sibling;var O=I(q,L,Q[u],D);if(O===null){L===null&&(L=k);break}A&&L&&O.alternate===null&&J(q,L),C=V(O,C,u),S===null?f=O:S.sibling=O,S=O,L=k}if(u===Q.length)return H(q,L),e6&&n1(q,u),f;if(L===null){for(;u<Q.length;u++)L=N(q,Q[u],D),L!==null&&(C=V(L,C,u),S===null?f=L:S.sibling=L,S=L);return e6&&n1(q,u),f}for(L=E(q,L);u<Q.length;u++)k=z(L,q,u,Q[u],D),k!==null&&(A&&k.alternate!==null&&L.delete(k.key===null?u:k.key),C=V(k,C,u),S===null?f=k:S.sibling=k,S=k);return A&&L.forEach(function(j){return J(q,j)}),e6&&n1(q,u),f}function G(q,C,Q,D){var f=aE(Q);if(typeof f!=="function")throw Error(qA(150));if(Q=f.call(Q),Q==null)throw Error(qA(151));for(var S=f=null,L=C,u=C=0,k=null,O=Q.next();L!==null&&!O.done;u++,O=Q.next()){L.index>u?(k=L,L=null):k=L.sibling;var j=I(q,L,O.value,D);if(j===null){L===null&&(L=k);break}A&&L&&j.alternate===null&&J(q,L),C=V(j,C,u),S===null?f=j:S.sibling=j,S=j,L=k}if(O.done)return H(q,L),e6&&n1(q,u),f;if(L===null){for(;!O.done;u++,O=Q.next())O=N(q,O.value,D),O!==null&&(C=V(O,C,u),S===null?f=O:S.sibling=O,S=O);return e6&&n1(q,u),f}for(L=E(q,L);!O.done;u++,O=Q.next())O=z(L,q,u,O.value,D),O!==null&&(A&&O.alternate!==null&&L.delete(O.key===null?u:O.key),C=V(O,C,u),S===null?f=O:S.sibling=O,S=O);return A&&L.forEach(function(x){return J(q,x)}),e6&&n1(q,u),f}function F(q,C,Q,D){if(typeof Q==="object"&&Q!==null&&Q.type===y0&&Q.key===null&&(Q=Q.props.children),typeof Q==="object"&&Q!==null){switch(Q.$$typeof){case e9:A:{for(var f=Q.key,S=C;S!==null;){if(S.key===f){if(f=Q.type,f===y0){if(S.tag===7){H(q,S.sibling),C=X(S,Q.props.children),C.return=q,q=C;break A}}else if(S.elementType===f||typeof f==="object"&&f!==null&&f.$$typeof===$H&&n5(f)===S.type){H(q,S.sibling),C=X(S,Q.props),C.ref=AX(q,S,Q),C.return=q,q=C;break A}H(q,S);break}else J(q,S);S=S.sibling}Q.type===y0?(C=t1(Q.props.children,q.mode,D,Q.key),C.return=q,q=C):(D=MV(Q.type,Q.key,Q.props,null,q.mode,D),D.ref=AX(q,C,Q),D.return=q,q=D)}return U(q);case j0:A:{for(S=Q.key;C!==null;){if(C.key===S)if(C.tag===4&&C.stateNode.containerInfo===Q.containerInfo&&C.stateNode.implementation===Q.implementation){H(q,C.sibling),C=X(C,Q.children||[]),C.return=q,q=C;break A}else{H(q,C);break}else J(q,C);C=C.sibling}C=XR(Q,q.mode,D),C.return=q,q=C}return U(q);case $H:return S=Q._init,F(q,C,S(Q._payload),D)}if(XX(Q))return B(q,C,Q,D);if(aE(Q))return G(q,C,Q,D);RV(q,Q)}return typeof Q==="string"&&Q!==""||typeof Q==="number"?(Q=""+Q,C!==null&&C.tag===6?(H(q,C.sibling),C=X(C,Q),C.return=q,q=C):(H(q,C),C=ER(Q,q.mode,D),C.return=q,q=C),U(q)):H(q,C)}return F}function GY(){BY=x0=pV=null}function WY(A){var J=lV.current;r6(lV),A._currentValue=J}function lR(A,J,H){for(;A!==null;){var E=A.alternate;if((A.childLanes&J)!==J?(A.childLanes|=J,E!==null&&(E.childLanes|=J)):E!==null&&(E.childLanes&J)!==J&&(E.childLanes|=J),A===H)break;A=A.return}}function o0(A,J){pV=A,BY=x0=null,A=A.dependencies,A!==null&&A.firstContext!==null&&((A.lanes&J)!==0&&(Z8=!0),A.firstContext=null)}function u8(A){var J=A._currentValue;if(BY!==A)if(A={context:A,memoizedValue:J,next:null},x0===null){if(pV===null)throw Error(qA(308));x0=A,pV.dependencies={lanes:0,firstContext:A}}else x0=x0.next=A;return J}function OY(A){s1===null?s1=[A]:s1.push(A)}function F3(A,J,H,E){var X=J.interleaved;return X===null?(H.next=H,OY(J)):(H.next=X.next,X.next=H),J.interleaved=H,yH(A,E)}function yH(A,J){A.lanes|=J;var H=A.alternate;H!==null&&(H.lanes|=J),H=A;for(A=A.return;A!==null;)A.childLanes|=J,H=A.alternate,H!==null&&(H.childLanes|=J),H=A,A=A.return;return H.tag===3?H.stateNode:null}function MY(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C3(A,J){A=A.updateQueue,J.updateQueue===A&&(J.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function wH(A,J){return{eventTime:A,lane:J,tag:0,payload:null,callback:null,next:null}}function R1(A,J,H){var E=A.updateQueue;if(E===null)return null;if(E=E.shared,(w6&2)!==0){var X=E.pending;return X===null?J.next=J:(J.next=X.next,X.next=J),E.pending=J,yH(A,H)}return X=E.interleaved,X===null?(J.next=J,OY(E)):(J.next=X.next,X.next=J),E.interleaved=J,yH(A,H)}function FV(A,J,H){if(J=J.updateQueue,J!==null&&(J=J.shared,(H&4194240)!==0)){var E=J.lanes;E&=A.pendingLanes,H|=E,J.lanes=H,ZY(A,H)}}function c5(A,J){var{updateQueue:H,alternate:E}=A;if(E!==null&&(E=E.updateQueue,H===E)){var X=null,V=null;if(H=H.firstBaseUpdate,H!==null){do{var U={eventTime:H.eventTime,lane:H.lane,tag:H.tag,payload:H.payload,callback:H.callback,next:null};V===null?X=V=U:V=V.next=U,H=H.next}while(H!==null);V===null?X=V=J:V=V.next=J}else X=V=J;H={baseState:E.baseState,firstBaseUpdate:X,lastBaseUpdate:V,shared:E.shared,effects:E.effects},A.updateQueue=H;return}A=H.lastBaseUpdate,A===null?H.firstBaseUpdate=J:A.next=J,H.lastBaseUpdate=J}function gV(A,J,H,E){var X=A.updateQueue;_H=!1;var{firstBaseUpdate:V,lastBaseUpdate:U}=X,Z=X.shared.pending;if(Z!==null){X.shared.pending=null;var R=Z,Y=R.next;R.next=null,U===null?V=Y:U.next=Y,U=R;var P=A.alternate;P!==null&&(P=P.updateQueue,Z=P.lastBaseUpdate,Z!==U&&(Z===null?P.firstBaseUpdate=Y:Z.next=Y,P.lastBaseUpdate=R))}if(V!==null){var N=X.baseState;U=0,P=Y=R=null,Z=V;do{var{lane:I,eventTime:z}=Z;if((E&I)===I){P!==null&&(P=P.next={eventTime:z,lane:0,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null});A:{var B=A,G=Z;switch(I=J,z=H,G.tag){case 1:if(B=G.payload,typeof B==="function"){N=B.call(z,N,I);break A}N=B;break A;case 3:B.flags=B.flags&-65537|128;case 0:if(B=G.payload,I=typeof B==="function"?B.call(z,N,I):B,I===null||I===void 0)break A;N=VJ({},N,I);break A;case 2:_H=!0}}Z.callback!==null&&Z.lane!==0&&(A.flags|=64,I=X.effects,I===null?X.effects=[Z]:I.push(Z))}else z={eventTime:z,lane:I,tag:Z.tag,payload:Z.payload,callback:Z.callback,next:null},P===null?(Y=P=z,R=N):P=P.next=z,U|=I;if(Z=Z.next,Z===null)if(Z=X.shared.pending,Z===null)break;else I=Z,Z=I.next,I.next=null,X.lastBaseUpdate=I,X.shared.pending=null}while(1);if(P===null&&(R=N),X.baseState=R,X.firstBaseUpdate=Y,X.lastBaseUpdate=P,J=X.shared.interleaved,J!==null){X=J;do U|=X.lane,X=X.next;while(X!==J)}else V===null&&(X.shared.lanes=0);_1|=U,A.lanes=U,A.memoizedState=N}}function i5(A,J,H){if(A=J.effects,J.effects=null,A!==null)for(J=0;J<A.length;J++){var E=A[J],X=E.callback;if(X!==null){if(E.callback=null,E=H,typeof X!=="function")throw Error(qA(191,X));X.call(E)}}}function o1(A){if(A===xX)throw Error(qA(174));return A}function kY(A,J){switch(c6(yX,J),c6(jX,A),c6(FH,xX),A=J.nodeType,A){case 9:case 11:J=(J=J.documentElement)?J.namespaceURI:zR(null,"");break;default:A=A===8?J.parentNode:J,J=A.namespaceURI||null,A=A.tagName,J=zR(J,A)}r6(FH),c6(FH,J)}function _0(){r6(FH),r6(jX),r6(yX)}function B3(A){o1(yX.current);var J=o1(FH.current),H=zR(J,A.type);J!==H&&(c6(jX,A),c6(FH,H))}function DY(A){jX.current===A&&(r6(FH),r6(jX))}function bV(A){for(var J=A;J!==null;){if(J.tag===13){var H=J.memoizedState;if(H!==null&&(H=H.dehydrated,H===null||H.data==="$?"||H.data==="$!"))return J}else if(J.tag===19&&J.memoizedProps.revealOrder!==void 0){if((J.flags&128)!==0)return J}else if(J.child!==null){J.child.return=J,J=J.child;continue}if(J===A)break;for(;J.sibling===null;){if(J.return===null||J.return===A)return null;J=J.return}J.sibling.return=J.return,J=J.sibling}return null}function SY(){for(var A=0;A<eZ.length;A++)eZ[A]._workInProgressVersionPrimary=null;eZ.length=0}function xJ(){throw Error(qA(321))}function LY(A,J){if(J===null)return!1;for(var H=0;H<J.length&&H<A.length;H++)if(!_8(A[H],J[H]))return!1;return!0}function KY(A,J,H,E,X,V){if($1=V,XJ=J,J.memoizedState=null,J.updateQueue=null,J.lanes=0,CV.current=A===null||A.memoizedState===null?gB:bB,A=H(E,X),FX){V=0;do{if(FX=!1,vX=0,25<=V)throw Error(qA(301));V+=1,LJ=WJ=null,J.updateQueue=null,CV.current=xB,A=H(E,X)}while(FX)}if(CV.current=mV,J=WJ!==null&&WJ.next!==null,$1=0,LJ=WJ=XJ=null,xV=!1,J)throw Error(qA(300));return A}function TY(){var A=vX!==0;return vX=0,A}function IH(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return LJ===null?XJ.memoizedState=LJ=A:LJ=LJ.next=A,LJ}function h8(){if(WJ===null){var A=XJ.alternate;A=A!==null?A.memoizedState:null}else A=WJ.next;var J=LJ===null?XJ.memoizedState:LJ.next;if(J!==null)LJ=J,WJ=A;else{if(A===null)throw Error(qA(310));WJ=A,A={memoizedState:WJ.memoizedState,baseState:WJ.baseState,baseQueue:WJ.baseQueue,queue:WJ.queue,next:null},LJ===null?XJ.memoizedState=LJ=A:LJ=LJ.next=A}return LJ}function uX(A,J){return typeof J==="function"?J(A):J}function _Z(A){var J=h8(),H=J.queue;if(H===null)throw Error(qA(311));H.lastRenderedReducer=A;var E=WJ,X=E.baseQueue,V=H.pending;if(V!==null){if(X!==null){var U=X.next;X.next=V.next,V.next=U}E.baseQueue=X=V,H.pending=null}if(X!==null){V=X.next,E=E.baseState;var Z=U=null,R=null,Y=V;do{var P=Y.lane;if(($1&P)===P)R!==null&&(R=R.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),E=Y.hasEagerState?Y.eagerState:A(E,Y.action);else{var N={lane:P,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};R===null?(Z=R=N,U=E):R=R.next=N,XJ.lanes|=P,_1|=P}Y=Y.next}while(Y!==null&&Y!==V);R===null?U=E:R.next=Z,_8(E,J.memoizedState)||(Z8=!0),J.memoizedState=E,J.baseState=U,J.baseQueue=R,H.lastRenderedState=E}if(A=H.interleaved,A!==null){X=A;do V=X.lane,XJ.lanes|=V,_1|=V,X=X.next;while(X!==A)}else X===null&&(H.lanes=0);return[J.memoizedState,H.dispatch]}function AR(A){var J=h8(),H=J.queue;if(H===null)throw Error(qA(311));H.lastRenderedReducer=A;var{dispatch:E,pending:X}=H,V=J.memoizedState;if(X!==null){H.pending=null;var U=X=X.next;do V=A(V,U.action),U=U.next;while(U!==X);_8(V,J.memoizedState)||(Z8=!0),J.memoizedState=V,J.baseQueue===null&&(J.baseState=V),H.lastRenderedState=V}return[V,E]}function G3(){}function W3(A,J){var H=XJ,E=h8(),X=J(),V=!_8(E.memoizedState,X);if(V&&(E.memoizedState=X,Z8=!0),E=E.queue,wY(k3.bind(null,H,E,A),[A]),E.getSnapshot!==J||V||LJ!==null&&LJ.memoizedState.tag&1){if(H.flags|=2048,hX(9,M3.bind(null,H,E,X,J),void 0,null),KJ===null)throw Error(qA(349));($1&30)!==0||O3(H,J,X)}return X}function O3(A,J,H){A.flags|=16384,A={getSnapshot:J,value:H},J=XJ.updateQueue,J===null?(J={lastEffect:null,stores:null},XJ.updateQueue=J,J.stores=[A]):(H=J.stores,H===null?J.stores=[A]:H.push(A))}function M3(A,J,H,E){J.value=H,J.getSnapshot=E,D3(J)&&S3(A)}function k3(A,J,H){return H(function(){D3(J)&&S3(A)})}function D3(A){var J=A.getSnapshot;A=A.value;try{var H=J();return!_8(A,H)}catch(E){return!0}}function S3(A){var J=yH(A,1);J!==null&&$8(J,A,1,-1)}function s5(A){var J=IH();return typeof A==="function"&&(A=A()),J.memoizedState=J.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uX,lastRenderedState:A},J.queue=A,A=A.dispatch=pB.bind(null,XJ,A),[J.memoizedState,A]}function hX(A,J,H,E){return A={tag:A,create:J,destroy:H,deps:E,next:null},J=XJ.updateQueue,J===null?(J={lastEffect:null,stores:null},XJ.updateQueue=J,J.lastEffect=A.next=A):(H=J.lastEffect,H===null?J.lastEffect=A.next=A:(E=H.next,H.next=A,A.next=E,J.lastEffect=A)),A}function L3(){return h8().memoizedState}function BV(A,J,H,E){var X=IH();XJ.flags|=A,X.memoizedState=hX(1|J,H,void 0,E===void 0?null:E)}function _V(A,J,H,E){var X=h8();E=E===void 0?null:E;var V=void 0;if(WJ!==null){var U=WJ.memoizedState;if(V=U.destroy,E!==null&&LY(E,U.deps)){X.memoizedState=hX(J,H,V,E);return}}XJ.flags|=A,X.memoizedState=hX(1|J,H,V,E)}function o5(A,J){return BV(8390656,8,A,J)}function wY(A,J){return _V(2048,8,A,J)}function K3(A,J){return _V(4,2,A,J)}function T3(A,J){return _V(4,4,A,J)}function w3(A,J){if(typeof J==="function")return A=A(),J(A),function(){J(null)};if(J!==null&&J!==void 0)return A=A(),J.current=A,function(){J.current=null}}function f3(A,J,H){return H=H!==null&&H!==void 0?H.concat([A]):null,_V(4,4,w3.bind(null,J,A),H)}function fY(){}function j3(A,J){var H=h8();J=J===void 0?null:J;var E=H.memoizedState;if(E!==null&&J!==null&&LY(J,E[1]))return E[0];return H.memoizedState=[A,J],A}function y3(A,J){var H=h8();J=J===void 0?null:J;var E=H.memoizedState;if(E!==null&&J!==null&&LY(J,E[1]))return E[0];return A=A(),H.memoizedState=[A,J],A}function v3(A,J,H){if(($1&21)===0)return A.baseState&&(A.baseState=!1,Z8=!0),A.memoizedState=H;return _8(H,J)||(H=gN(),XJ.lanes|=H,_1|=H,A.baseState=!0),J}function hB(A,J){var H=h6;h6=H!==0&&4>H?H:4,A(!0);var E=$Z.transition;$Z.transition={};try{A(!1),J()}finally{h6=H,$Z.transition=E}}function u3(){return h8().memoizedState}function lB(A,J,H){var E=P1(A);if(H={lane:E,action:H,hasEagerState:!1,eagerState:null,next:null},h3(A))l3(J,H);else if(H=F3(A,J,H,E),H!==null){var X=_J();$8(H,A,E,X),p3(H,J,E)}}function pB(A,J,H){var E=P1(A),X={lane:E,action:H,hasEagerState:!1,eagerState:null,next:null};if(h3(A))l3(J,X);else{var V=A.alternate;if(A.lanes===0&&(V===null||V.lanes===0)&&(V=J.lastRenderedReducer,V!==null))try{var U=J.lastRenderedState,Z=V(U,H);if(X.hasEagerState=!0,X.eagerState=Z,_8(Z,U)){var R=J.interleaved;R===null?(X.next=X,OY(J)):(X.next=R.next,R.next=X),J.interleaved=X;return}}catch(Y){}finally{}H=F3(A,J,X,E),H!==null&&(X=_J(),$8(H,A,E,X),p3(H,J,E))}}function h3(A){var J=A.alternate;return A===XJ||J!==null&&J===XJ}function l3(A,J){FX=xV=!0;var H=A.pending;H===null?J.next=J:(J.next=H.next,H.next=J),A.pending=J}function p3(A,J,H){if((H&4194240)!==0){var E=J.lanes;E&=A.pendingLanes,H|=E,J.lanes=H,ZY(A,H)}}function r8(A,J){if(A&&A.defaultProps){J=VJ({},J),A=A.defaultProps;for(var H in A)J[H]===void 0&&(J[H]=A[H]);return J}return J}function pR(A,J,H,E){J=A.memoizedState,H=H(E,J),H=H===null||H===void 0?J:VJ({},J,H),A.memoizedState=H,A.lanes===0&&(A.updateQueue.baseState=H)}function r5(A,J,H,E,X,V,U){return A=A.stateNode,typeof A.shouldComponentUpdate==="function"?A.shouldComponentUpdate(E,V,U):J.prototype&&J.prototype.isPureReactComponent?!KX(H,E)||!KX(X,V):!0}function g3(A,J,H){var E=!1,X=I1,V=J.contextType;return typeof V==="object"&&V!==null?V=u8(V):(X=Y8(J)?a1:nJ.current,E=J.contextTypes,V=(E=E!==null&&E!==void 0)?a0(A,X):I1),J=new J(H,V),A.memoizedState=J.state!==null&&J.state!==void 0?J.state:null,J.updater=AU,A.stateNode=J,J._reactInternals=A,E&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=X,A.__reactInternalMemoizedMaskedChildContext=V),J}function t5(A,J,H,E){A=J.state,typeof J.componentWillReceiveProps==="function"&&J.componentWillReceiveProps(H,E),typeof J.UNSAFE_componentWillReceiveProps==="function"&&J.UNSAFE_componentWillReceiveProps(H,E),J.state!==A&&AU.enqueueReplaceState(J,J.state,null)}function gR(A,J,H,E){var X=A.stateNode;X.props=H,X.state=A.memoizedState,X.refs={},MY(A);var V=J.contextType;typeof V==="object"&&V!==null?X.context=u8(V):(V=Y8(J)?a1:nJ.current,X.context=a0(A,V)),X.state=A.memoizedState,V=J.getDerivedStateFromProps,typeof V==="function"&&(pR(A,J,V,H),X.state=A.memoizedState),typeof J.getDerivedStateFromProps==="function"||typeof X.getSnapshotBeforeUpdate==="function"||typeof X.UNSAFE_componentWillMount!=="function"&&typeof X.componentWillMount!=="function"||(J=X.state,typeof X.componentWillMount==="function"&&X.componentWillMount(),typeof X.UNSAFE_componentWillMount==="function"&&X.UNSAFE_componentWillMount(),J!==X.state&&AU.enqueueReplaceState(X,X.state,null),gV(A,H,X,E),X.state=A.memoizedState),typeof X.componentDidMount==="function"&&(A.flags|=4194308)}function AE(A,J){try{var H="",E=J;do H+=FC(E),E=E.return;while(E);var X=H}catch(V){X=`
Error generating stack: `+V.message+`
`+V.stack}return{value:A,source:J,stack:X,digest:null}}function JR(A,J,H){return{value:A,source:null,stack:H!=null?H:null,digest:J!=null?J:null}}function bR(A,J){try{console.error(J.value)}catch(H){setTimeout(function(){throw H})}}function b3(A,J,H){H=wH(-1,H),H.tag=3,H.payload={element:null};var E=J.value;return H.callback=function(){nV||(nV=!0,tR=E),bR(A,J)},H}function x3(A,J,H){H=wH(-1,H),H.tag=3;var E=A.type.getDerivedStateFromError;if(typeof E==="function"){var X=J.value;H.payload=function(){return E(X)},H.callback=function(){bR(A,J)}}var V=A.stateNode;return V!==null&&typeof V.componentDidCatch==="function"&&(H.callback=function(){bR(A,J),typeof E!=="function"&&(Y1===null?Y1=new Set([this]):Y1.add(this));var U=J.stack;this.componentDidCatch(J.value,{componentStack:U!==null?U:""})}),H}function a5(A,J,H){var E=A.pingCache;if(E===null){E=A.pingCache=new mB;var X=new Set;E.set(J,X)}else X=E.get(J),X===void 0&&(X=new Set,E.set(J,X));X.has(H)||(X.add(H),A=JG.bind(null,A,J,H),J.then(A,A))}function e5(A){do{var J;if(J=A.tag===13)J=A.memoizedState,J=J!==null?J.dehydrated!==null?!0:!1:!0;if(J)return A;A=A.return}while(A!==null);return null}function $5(A,J,H,E,X){if((A.mode&1)===0)return A===J?A.flags|=65536:(A.flags|=128,H.flags|=131072,H.flags&=-52805,H.tag===1&&(H.alternate===null?H.tag=17:(J=wH(-1,1),J.tag=2,R1(H,J,1))),H.lanes|=1),A;return A.flags|=65536,A.lanes=X,A}function $J(A,J,H,E){J.child=A===null?Q3(J,null,H,E):$0(J,A.child,H,E)}function _5(A,J,H,E,X){H=H.render;var V=J.ref;if(o0(J,X),E=KY(A,J,H,E,V,X),H=TY(),A!==null&&!Z8)return J.updateQueue=A.updateQueue,J.flags&=-2053,A.lanes&=~X,vH(A,J,X);return e6&&H&&QY(J),J.flags|=1,$J(A,J,E,X),J.child}function AN(A,J,H,E,X){if(A===null){var V=H.type;if(typeof V==="function"&&!gY(V)&&V.defaultProps===void 0&&H.compare===null&&H.defaultProps===void 0)return J.tag=15,J.type=V,m3(A,J,V,E,X);return A=MV(H.type,null,E,J,J.mode,X),A.ref=J.ref,A.return=J,J.child=A}if(V=A.child,(A.lanes&X)===0){var U=V.memoizedProps;if(H=H.compare,H=H!==null?H:KX,H(U,E)&&A.ref===J.ref)return vH(A,J,X)}return J.flags|=1,A=N1(V,E),A.ref=J.ref,A.return=J,J.child=A}function m3(A,J,H,E,X){if(A!==null){var V=A.memoizedProps;if(KX(V,E)&&A.ref===J.ref)if(Z8=!1,J.pendingProps=E=V,(A.lanes&X)!==0)(A.flags&131072)!==0&&(Z8=!0);else return J.lanes=A.lanes,vH(A,J,X)}return xR(A,J,H,E,X)}function d3(A,J,H){var E=J.pendingProps,X=E.children,V=A!==null?A.memoizedState:null;if(E.mode==="hidden")if((J.mode&1)===0)J.memoizedState={baseLanes:0,cachePool:null,transitions:null},c6(d0,C8),C8|=H;else{if((H&1073741824)===0)return A=V!==null?V.baseLanes|H:H,J.lanes=J.childLanes=1073741824,J.memoizedState={baseLanes:A,cachePool:null,transitions:null},J.updateQueue=null,c6(d0,C8),C8|=A,null;J.memoizedState={baseLanes:0,cachePool:null,transitions:null},E=V!==null?V.baseLanes:H,c6(d0,C8),C8|=E}else V!==null?(E=V.baseLanes|H,J.memoizedState=null):E=H,c6(d0,C8),C8|=E;return $J(A,J,X,H),J.child}function n3(A,J){var H=J.ref;if(A===null&&H!==null||A!==null&&A.ref!==H)J.flags|=512,J.flags|=2097152}function xR(A,J,H,E,X){var V=Y8(H)?a1:nJ.current;if(V=a0(J,V),o0(J,X),H=KY(A,J,H,E,V,X),E=TY(),A!==null&&!Z8)return J.updateQueue=A.updateQueue,J.flags&=-2053,A.lanes&=~X,vH(A,J,X);return e6&&E&&QY(J),J.flags|=1,$J(A,J,H,X),J.child}function JN(A,J,H,E,X){if(Y8(H)){var V=!0;vV(J)}else V=!1;if(o0(J,X),J.stateNode===null)GV(A,J),g3(J,H,E),gR(J,H,E,X),E=!0;else if(A===null){var{stateNode:U,memoizedProps:Z}=J;U.props=Z;var R=U.context,Y=H.contextType;typeof Y==="object"&&Y!==null?Y=u8(Y):(Y=Y8(H)?a1:nJ.current,Y=a0(J,Y));var P=H.getDerivedStateFromProps,N=typeof P==="function"||typeof U.getSnapshotBeforeUpdate==="function";N||typeof U.UNSAFE_componentWillReceiveProps!=="function"&&typeof U.componentWillReceiveProps!=="function"||(Z!==E||R!==Y)&&t5(J,U,E,Y),_H=!1;var I=J.memoizedState;U.state=I,gV(J,E,U,X),R=J.memoizedState,Z!==E||I!==R||R8.current||_H?(typeof P==="function"&&(pR(J,H,P,E),R=J.memoizedState),(Z=_H||r5(J,H,Z,E,I,R,Y))?(N||typeof U.UNSAFE_componentWillMount!=="function"&&typeof U.componentWillMount!=="function"||(typeof U.componentWillMount==="function"&&U.componentWillMount(),typeof U.UNSAFE_componentWillMount==="function"&&U.UNSAFE_componentWillMount()),typeof U.componentDidMount==="function"&&(J.flags|=4194308)):(typeof U.componentDidMount==="function"&&(J.flags|=4194308),J.memoizedProps=E,J.memoizedState=R),U.props=E,U.state=R,U.context=Y,E=Z):(typeof U.componentDidMount==="function"&&(J.flags|=4194308),E=!1)}else{U=J.stateNode,C3(A,J),Z=J.memoizedProps,Y=J.type===J.elementType?Z:r8(J.type,Z),U.props=Y,N=J.pendingProps,I=U.context,R=H.contextType,typeof R==="object"&&R!==null?R=u8(R):(R=Y8(H)?a1:nJ.current,R=a0(J,R));var z=H.getDerivedStateFromProps;(P=typeof z==="function"||typeof U.getSnapshotBeforeUpdate==="function")||typeof U.UNSAFE_componentWillReceiveProps!=="function"&&typeof U.componentWillReceiveProps!=="function"||(Z!==N||I!==R)&&t5(J,U,E,R),_H=!1,I=J.memoizedState,U.state=I,gV(J,E,U,X);var B=J.memoizedState;Z!==N||I!==B||R8.current||_H?(typeof z==="function"&&(pR(J,H,z,E),B=J.memoizedState),(Y=_H||r5(J,H,Y,E,I,B,R)||!1)?(P||typeof U.UNSAFE_componentWillUpdate!=="function"&&typeof U.componentWillUpdate!=="function"||(typeof U.componentWillUpdate==="function"&&U.componentWillUpdate(E,B,R),typeof U.UNSAFE_componentWillUpdate==="function"&&U.UNSAFE_componentWillUpdate(E,B,R)),typeof U.componentDidUpdate==="function"&&(J.flags|=4),typeof U.getSnapshotBeforeUpdate==="function"&&(J.flags|=1024)):(typeof U.componentDidUpdate!=="function"||Z===A.memoizedProps&&I===A.memoizedState||(J.flags|=4),typeof U.getSnapshotBeforeUpdate!=="function"||Z===A.memoizedProps&&I===A.memoizedState||(J.flags|=1024),J.memoizedProps=E,J.memoizedState=B),U.props=E,U.state=B,U.context=R,E=Y):(typeof U.componentDidUpdate!=="function"||Z===A.memoizedProps&&I===A.memoizedState||(J.flags|=4),typeof U.getSnapshotBeforeUpdate!=="function"||Z===A.memoizedProps&&I===A.memoizedState||(J.flags|=1024),E=!1)}return mR(A,J,H,E,V,X)}function mR(A,J,H,E,X,V){n3(A,J);var U=(J.flags&128)!==0;if(!E&&!U)return X&&x5(J,H,!1),vH(A,J,V);E=J.stateNode,dB.current=J;var Z=U&&typeof H.getDerivedStateFromError!=="function"?null:E.render();return J.flags|=1,A!==null&&U?(J.child=$0(J,A.child,null,V),J.child=$0(J,null,Z,V)):$J(A,J,Z,V),J.memoizedState=E.state,X&&x5(J,H,!0),J.child}function c3(A){var J=A.stateNode;J.pendingContext?b5(A,J.pendingContext,J.pendingContext!==J.context):J.context&&b5(A,J.context,!1),kY(A,J.containerInfo)}function HN(A,J,H,E,X){return e0(),CY(X),J.flags|=256,$J(A,J,H,E),J.child}function nR(A){return{baseLanes:A,cachePool:null,transitions:null}}function i3(A,J,H){var E=J.pendingProps,X=EJ.current,V=!1,U=(J.flags&128)!==0,Z;if((Z=U)||(Z=A!==null&&A.memoizedState===null?!1:(X&2)!==0),Z)V=!0,J.flags&=-129;else if(A===null||A.memoizedState!==null)X|=1;if(c6(EJ,X&1),A===null){if(hR(J),A=J.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return(J.mode&1)===0?J.lanes=1:A.data==="$!"?J.lanes=8:J.lanes=1073741824,null;return U=E.children,A=E.fallback,V?(E=J.mode,V=J.child,U={mode:"hidden",children:U},(E&1)===0&&V!==null?(V.childLanes=0,V.pendingProps=U):V=EU(U,E,0,null),A=t1(A,E,H,null),V.return=J,A.return=J,V.sibling=A,J.child=V,J.child.memoizedState=nR(H),J.memoizedState=dR,A):jY(J,U)}if(X=A.memoizedState,X!==null&&(Z=X.dehydrated,Z!==null))return nB(A,J,U,E,Z,X,H);if(V){V=E.fallback,U=J.mode,X=A.child,Z=X.sibling;var R={mode:"hidden",children:E.children};return(U&1)===0&&J.child!==X?(E=J.child,E.childLanes=0,E.pendingProps=R,J.deletions=null):(E=N1(X,R),E.subtreeFlags=X.subtreeFlags&14680064),Z!==null?V=N1(Z,V):(V=t1(V,U,H,null),V.flags|=2),V.return=J,E.return=J,E.sibling=V,J.child=E,E=V,V=J.child,U=A.child.memoizedState,U=U===null?nR(H):{baseLanes:U.baseLanes|H,cachePool:null,transitions:U.transitions},V.memoizedState=U,V.childLanes=A.childLanes&~H,J.memoizedState=dR,E}return V=A.child,A=V.sibling,E=N1(V,{mode:"visible",children:E.children}),(J.mode&1)===0&&(E.lanes=H),E.return=J,E.sibling=null,A!==null&&(H=J.deletions,H===null?(J.deletions=[A],J.flags|=16):H.push(A)),J.child=E,J.memoizedState=null,E}function jY(A,J){return J=EU({mode:"visible",children:J},A.mode,0,null),J.return=A,A.child=J}function YV(A,J,H,E){return E!==null&&CY(E),$0(J,A.child,null,H),A=jY(J,J.pendingProps.children),A.flags|=2,J.memoizedState=null,A}function nB(A,J,H,E,X,V,U){if(H){if(J.flags&256)return J.flags&=-257,E=JR(Error(qA(422))),YV(A,J,U,E);if(J.memoizedState!==null)return J.child=A.child,J.flags|=128,null;return V=E.fallback,X=J.mode,E=EU({mode:"visible",children:E.children},X,0,null),V=t1(V,X,U,null),V.flags|=2,E.return=J,V.return=J,E.sibling=V,J.child=E,(J.mode&1)!==0&&$0(J,A.child,null,U),J.child.memoizedState=nR(U),J.memoizedState=dR,V}if((J.mode&1)===0)return YV(A,J,U,null);if(X.data==="$!"){if(E=X.nextSibling&&X.nextSibling.dataset,E)var Z=E.dgst;return E=Z,V=Error(qA(419)),E=JR(V,E,void 0),YV(A,J,U,E)}if(Z=(U&A.childLanes)!==0,Z8||Z){if(E=KJ,E!==null){switch(U&-U){case 4:X=2;break;case 16:X=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:X=32;break;case 536870912:X=268435456;break;default:X=0}X=(X&(E.suspendedLanes|U))!==0?0:X,X!==0&&X!==V.retryLane&&(V.retryLane=X,yH(A,X),$8(E,A,X,-1))}return pY(),E=JR(Error(qA(421))),YV(A,J,U,E)}if(X.data==="$?")return J.flags|=128,J.child=A.child,J=HG.bind(null,A),X._reactRetry=J,null;return A=V.treeContext,B8=Z1(X.nextSibling),G8=J,e6=!0,a8=null,A!==null&&(f8[j8++]=KH,f8[j8++]=TH,f8[j8++]=e1,KH=A.id,TH=A.overflow,e1=J),J=jY(J,E.children),J.flags|=4096,J}function EN(A,J,H){A.lanes|=J;var E=A.alternate;E!==null&&(E.lanes|=J),lR(A.return,J,H)}function HR(A,J,H,E,X){var V=A.memoizedState;V===null?A.memoizedState={isBackwards:J,rendering:null,renderingStartTime:0,last:E,tail:H,tailMode:X}:(V.isBackwards=J,V.rendering=null,V.renderingStartTime=0,V.last=E,V.tail=H,V.tailMode=X)}function s3(A,J,H){var E=J.pendingProps,X=E.revealOrder,V=E.tail;if($J(A,J,E.children,H),E=EJ.current,(E&2)!==0)E=E&1|2,J.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=J.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&EN(A,H,J);else if(A.tag===19)EN(A,H,J);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===J)break A;for(;A.sibling===null;){if(A.return===null||A.return===J)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}E&=1}if(c6(EJ,E),(J.mode&1)===0)J.memoizedState=null;else switch(X){case"forwards":H=J.child;for(X=null;H!==null;)A=H.alternate,A!==null&&bV(A)===null&&(X=H),H=H.sibling;H=X,H===null?(X=J.child,J.child=null):(X=H.sibling,H.sibling=null),HR(J,!1,X,H,V);break;case"backwards":H=null,X=J.child;for(J.child=null;X!==null;){if(A=X.alternate,A!==null&&bV(A)===null){J.child=X;break}A=X.sibling,X.sibling=H,H=X,X=A}HR(J,!0,H,null,V);break;case"together":HR(J,!1,null,null,void 0);break;default:J.memoizedState=null}return J.child}function GV(A,J){(J.mode&1)===0&&A!==null&&(A.alternate=null,J.alternate=null,J.flags|=2)}function vH(A,J,H){if(A!==null&&(J.dependencies=A.dependencies),_1|=J.lanes,(H&J.childLanes)===0)return null;if(A!==null&&J.child!==A.child)throw Error(qA(153));if(J.child!==null){A=J.child,H=N1(A,A.pendingProps),J.child=H;for(H.return=J;A.sibling!==null;)A=A.sibling,H=H.sibling=N1(A,A.pendingProps),H.return=J;H.sibling=null}return J.child}function cB(A,J,H){switch(J.tag){case 3:c3(J),e0();break;case 5:B3(J);break;case 1:Y8(J.type)&&vV(J);break;case 4:kY(J,J.stateNode.containerInfo);break;case 10:var E=J.type._context,X=J.memoizedProps.value;c6(lV,E._currentValue),E._currentValue=X;break;case 13:if(E=J.memoizedState,E!==null){if(E.dehydrated!==null)return c6(EJ,EJ.current&1),J.flags|=128,null;if((H&J.child.childLanes)!==0)return i3(A,J,H);return c6(EJ,EJ.current&1),A=vH(A,J,H),A!==null?A.sibling:null}c6(EJ,EJ.current&1);break;case 19:if(E=(H&J.childLanes)!==0,(A.flags&128)!==0){if(E)return s3(A,J,H);J.flags|=128}if(X=J.memoizedState,X!==null&&(X.rendering=null,X.tail=null,X.lastEffect=null),c6(EJ,EJ.current),E)break;else return null;case 22:case 23:return J.lanes=0,d3(A,J,H)}return vH(A,J,H)}function JX(A,J){if(!e6)switch(A.tailMode){case"hidden":J=A.tail;for(var H=null;J!==null;)J.alternate!==null&&(H=J),J=J.sibling;H===null?A.tail=null:H.sibling=null;break;case"collapsed":H=A.tail;for(var E=null;H!==null;)H.alternate!==null&&(E=H),H=H.sibling;E===null?J||A.tail===null?A.tail=null:A.tail.sibling=null:E.sibling=null}}function mJ(A){var J=A.alternate!==null&&A.alternate.child===A.child,H=0,E=0;if(J)for(var X=A.child;X!==null;)H|=X.lanes|X.childLanes,E|=X.subtreeFlags&14680064,E|=X.flags&14680064,X.return=A,X=X.sibling;else for(X=A.child;X!==null;)H|=X.lanes|X.childLanes,E|=X.subtreeFlags,E|=X.flags,X.return=A,X=X.sibling;return A.subtreeFlags|=E,A.childLanes=H,J}function iB(A,J,H){var E=J.pendingProps;switch(FY(J),J.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mJ(J),null;case 1:return Y8(J.type)&&yV(),mJ(J),null;case 3:if(E=J.stateNode,_0(),r6(R8),r6(nJ),SY(),E.pendingContext&&(E.context=E.pendingContext,E.pendingContext=null),A===null||A.child===null)ZV(J)?J.flags|=4:A===null||A.memoizedState.isDehydrated&&(J.flags&256)===0||(J.flags|=1024,a8!==null&&($R(a8),a8=null));return cR(A,J),mJ(J),null;case 5:DY(J);var X=o1(yX.current);if(H=J.type,A!==null&&J.stateNode!=null)r3(A,J,H,E,X),A.ref!==J.ref&&(J.flags|=512,J.flags|=2097152);else{if(!E){if(J.stateNode===null)throw Error(qA(166));return mJ(J),null}if(A=o1(FH.current),ZV(J)){E=J.stateNode,H=J.type;var V=J.memoizedProps;switch(E[zH]=J,E[fX]=V,A=(J.mode&1)!==0,H){case"dialog":o6("cancel",E),o6("close",E);break;case"iframe":case"object":case"embed":o6("load",E);break;case"video":case"audio":for(X=0;X<PX.length;X++)o6(PX[X],E);break;case"source":o6("error",E);break;case"img":case"image":case"link":o6("error",E),o6("load",E);break;case"details":o6("toggle",E);break;case"input":I5(E,V),o6("invalid",E);break;case"select":E._wrapperState={wasMultiple:!!V.multiple},o6("invalid",E);break;case"textarea":Q5(E,V),o6("invalid",E)}QR(H,V),X=null;for(var U in V)if(V.hasOwnProperty(U)){var Z=V[U];U==="children"?typeof Z==="string"?E.textContent!==Z&&(V.suppressHydrationWarning!==!0&&UV(E.textContent,Z,A),X=["children",Z]):typeof Z==="number"&&E.textContent!==""+Z&&(V.suppressHydrationWarning!==!0&&UV(E.textContent,Z,A),X=["children",""+Z]):WX.hasOwnProperty(U)&&Z!=null&&U==="onScroll"&&o6("scroll",E)}switch(H){case"input":$9(E),z5(E,V,!0);break;case"textarea":$9(E),F5(E);break;case"select":case"option":break;default:typeof V.onClick==="function"&&(E.onclick=jV)}E=X,J.updateQueue=E,E!==null&&(J.flags|=4)}else{U=X.nodeType===9?X:X.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=kN(H)),A==="http://www.w3.org/1999/xhtml"?H==="script"?(A=U.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof E.is==="string"?A=U.createElement(H,{is:E.is}):(A=U.createElement(H),H==="select"&&(U=A,E.multiple?U.multiple=!0:E.size&&(U.size=E.size))):A=U.createElementNS(A,H),A[zH]=J,A[fX]=E,o3(A,J,!1,!1),J.stateNode=A;A:{switch(U=FR(H,E),H){case"dialog":o6("cancel",A),o6("close",A),X=E;break;case"iframe":case"object":case"embed":o6("load",A),X=E;break;case"video":case"audio":for(X=0;X<PX.length;X++)o6(PX[X],A);X=E;break;case"source":o6("error",A),X=E;break;case"img":case"image":case"link":o6("error",A),o6("load",A),X=E;break;case"details":o6("toggle",A),X=E;break;case"input":I5(A,E),X=PR(A,E),o6("invalid",A);break;case"option":X=E;break;case"select":A._wrapperState={wasMultiple:!!E.multiple},X=VJ({},E,{value:void 0}),o6("invalid",A);break;case"textarea":Q5(A,E),X=IR(A,E),o6("invalid",A);break;default:X=E}QR(H,X),Z=X;for(V in Z)if(Z.hasOwnProperty(V)){var R=Z[V];V==="style"?LN(A,R):V==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&DN(A,R)):V==="children"?typeof R==="string"?(H!=="textarea"||R!=="")&&OX(A,R):typeof R==="number"&&OX(A,""+R):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(WX.hasOwnProperty(V)?R!=null&&V==="onScroll"&&o6("scroll",A):R!=null&&JY(A,V,R,U))}switch(H){case"input":$9(A),z5(A,E,!1);break;case"textarea":$9(A),F5(A);break;case"option":E.value!=null&&A.setAttribute("value",""+q1(E.value));break;case"select":A.multiple=!!E.multiple,V=E.value,V!=null?n0(A,!!E.multiple,V,!1):E.defaultValue!=null&&n0(A,!!E.multiple,E.defaultValue,!0);break;default:typeof X.onClick==="function"&&(A.onclick=jV)}switch(H){case"button":case"input":case"select":case"textarea":E=!!E.autoFocus;break A;case"img":E=!0;break A;default:E=!1}}E&&(J.flags|=4)}J.ref!==null&&(J.flags|=512,J.flags|=2097152)}return mJ(J),null;case 6:if(A&&J.stateNode!=null)t3(A,J,A.memoizedProps,E);else{if(typeof E!=="string"&&J.stateNode===null)throw Error(qA(166));if(H=o1(yX.current),o1(FH.current),ZV(J)){if(E=J.stateNode,H=J.memoizedProps,E[zH]=J,V=E.nodeValue!==H){if(A=G8,A!==null)switch(A.tag){case 3:UV(E.nodeValue,H,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&UV(E.nodeValue,H,(A.mode&1)!==0)}}V&&(J.flags|=4)}else E=(H.nodeType===9?H:H.ownerDocument).createTextNode(E),E[zH]=J,J.stateNode=E}return mJ(J),null;case 13:if(r6(EJ),E=J.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(e6&&B8!==null&&(J.mode&1)!==0&&(J.flags&128)===0)I3(),e0(),J.flags|=98560,V=!1;else if(V=ZV(J),E!==null&&E.dehydrated!==null){if(A===null){if(!V)throw Error(qA(318));if(V=J.memoizedState,V=V!==null?V.dehydrated:null,!V)throw Error(qA(317));V[zH]=J}else e0(),(J.flags&128)===0&&(J.memoizedState=null),J.flags|=4;mJ(J),V=!1}else a8!==null&&($R(a8),a8=null),V=!0;if(!V)return J.flags&65536?J:null}if((J.flags&128)!==0)return J.lanes=H,J;return E=E!==null,E!==(A!==null&&A.memoizedState!==null)&&E&&(J.child.flags|=8192,(J.mode&1)!==0&&(A===null||(EJ.current&1)!==0?OJ===0&&(OJ=3):pY())),J.updateQueue!==null&&(J.flags|=4),mJ(J),null;case 4:return _0(),cR(A,J),A===null&&TX(J.stateNode.containerInfo),mJ(J),null;case 10:return WY(J.type._context),mJ(J),null;case 17:return Y8(J.type)&&yV(),mJ(J),null;case 19:if(r6(EJ),V=J.memoizedState,V===null)return mJ(J),null;if(E=(J.flags&128)!==0,U=V.rendering,U===null)if(E)JX(V,!1);else{if(OJ!==0||A!==null&&(A.flags&128)!==0)for(A=J.child;A!==null;){if(U=bV(A),U!==null){J.flags|=128,JX(V,!1),E=U.updateQueue,E!==null&&(J.updateQueue=E,J.flags|=4),J.subtreeFlags=0,E=H;for(H=J.child;H!==null;)V=H,A=E,V.flags&=14680066,U=V.alternate,U===null?(V.childLanes=0,V.lanes=A,V.child=null,V.subtreeFlags=0,V.memoizedProps=null,V.memoizedState=null,V.updateQueue=null,V.dependencies=null,V.stateNode=null):(V.childLanes=U.childLanes,V.lanes=U.lanes,V.child=U.child,V.subtreeFlags=0,V.deletions=null,V.memoizedProps=U.memoizedProps,V.memoizedState=U.memoizedState,V.updateQueue=U.updateQueue,V.type=U.type,A=U.dependencies,V.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),H=H.sibling;return c6(EJ,EJ.current&1|2),J.child}A=A.sibling}V.tail!==null&&qJ()>JE&&(J.flags|=128,E=!0,JX(V,!1),J.lanes=4194304)}else{if(!E)if(A=bV(U),A!==null){if(J.flags|=128,E=!0,H=A.updateQueue,H!==null&&(J.updateQueue=H,J.flags|=4),JX(V,!0),V.tail===null&&V.tailMode==="hidden"&&!U.alternate&&!e6)return mJ(J),null}else 2*qJ()-V.renderingStartTime>JE&&H!==1073741824&&(J.flags|=128,E=!0,JX(V,!1),J.lanes=4194304);V.isBackwards?(U.sibling=J.child,J.child=U):(H=V.last,H!==null?H.sibling=U:J.child=U,V.last=U)}if(V.tail!==null)return J=V.tail,V.rendering=J,V.tail=J.sibling,V.renderingStartTime=qJ(),J.sibling=null,H=EJ.current,c6(EJ,E?H&1|2:H&1),J;return mJ(J),null;case 22:case 23:return lY(),E=J.memoizedState!==null,A!==null&&A.memoizedState!==null!==E&&(J.flags|=8192),E&&(J.mode&1)!==0?(C8&1073741824)!==0&&(mJ(J),J.subtreeFlags&6&&(J.flags|=8192)):mJ(J),null;case 24:return null;case 25:return null}throw Error(qA(156,J.tag))}function sB(A,J){switch(FY(J),J.tag){case 1:return Y8(J.type)&&yV(),A=J.flags,A&65536?(J.flags=A&-65537|128,J):null;case 3:return _0(),r6(R8),r6(nJ),SY(),A=J.flags,(A&65536)!==0&&(A&128)===0?(J.flags=A&-65537|128,J):null;case 5:return DY(J),null;case 13:if(r6(EJ),A=J.memoizedState,A!==null&&A.dehydrated!==null){if(J.alternate===null)throw Error(qA(340));e0()}return A=J.flags,A&65536?(J.flags=A&-65537|128,J):null;case 19:return r6(EJ),null;case 4:return _0(),null;case 10:return WY(J.type._context),null;case 22:case 23:return lY(),null;case 24:return null;default:return null}}function m0(A,J){var H=A.ref;if(H!==null)if(typeof H==="function")try{H(null)}catch(E){PJ(A,J,E)}else H.current=null}function iR(A,J,H){try{H()}catch(E){PJ(A,J,E)}}function rB(A,J){if(TR=TV,A=A3(),zY(A)){if("selectionStart"in A)var H={start:A.selectionStart,end:A.selectionEnd};else A:{H=(H=A.ownerDocument)&&H.defaultView||window;var E=H.getSelection&&H.getSelection();if(E&&E.rangeCount!==0){H=E.anchorNode;var{anchorOffset:X,focusNode:V}=E;E=E.focusOffset;try{H.nodeType,V.nodeType}catch(D){H=null;break A}var U=0,Z=-1,R=-1,Y=0,P=0,N=A,I=null;J:for(;;){for(var z;;){if(N!==H||X!==0&&N.nodeType!==3||(Z=U+X),N!==V||E!==0&&N.nodeType!==3||(R=U+E),N.nodeType===3&&(U+=N.nodeValue.length),(z=N.firstChild)===null)break;I=N,N=z}for(;;){if(N===A)break J;if(I===H&&++Y===X&&(Z=U),I===V&&++P===E&&(R=U),(z=N.nextSibling)!==null)break;N=I,I=N.parentNode}N=z}H=Z===-1||R===-1?null:{start:Z,end:R}}else H=null}H=H||{start:0,end:0}}else H=null;wR={focusedElem:A,selectionRange:H},TV=!1;for(gA=J;gA!==null;)if(J=gA,A=J.child,(J.subtreeFlags&1028)!==0&&A!==null)A.return=J,gA=A;else for(;gA!==null;){J=gA;try{var B=J.alternate;if((J.flags&1024)!==0)switch(J.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var{memoizedProps:G,memoizedState:F}=B,q=J.stateNode,C=q.getSnapshotBeforeUpdate(J.elementType===J.type?G:r8(J.type,G),F);q.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var Q=J.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(qA(163))}}catch(D){PJ(J,J.return,D)}if(A=J.sibling,A!==null){A.return=J.return,gA=A;break}gA=J.return}return B=XN,XN=!1,B}function CX(A,J,H){var E=J.updateQueue;if(E=E!==null?E.lastEffect:null,E!==null){var X=E=E.next;do{if((X.tag&A)===A){var V=X.destroy;X.destroy=void 0,V!==void 0&&iR(J,H,V)}X=X.next}while(X!==E)}}function JU(A,J){if(J=J.updateQueue,J=J!==null?J.lastEffect:null,J!==null){var H=J=J.next;do{if((H.tag&A)===A){var E=H.create;H.destroy=E()}H=H.next}while(H!==J)}}function sR(A){var J=A.ref;if(J!==null){var H=A.stateNode;switch(A.tag){case 5:A=H;break;default:A=H}typeof J==="function"?J(A):J.current=A}}function a3(A){var J=A.alternate;J!==null&&(A.alternate=null,a3(J)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(J=A.stateNode,J!==null&&(delete J[zH],delete J[fX],delete J[yR],delete J[fB],delete J[jB])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function e3(A){return A.tag===5||A.tag===3||A.tag===4}function VN(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||e3(A.return))return null;A=A.return}A.sibling.return=A.return;for(A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2)continue A;if(A.child===null||A.tag===4)continue A;else A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function oR(A,J,H){var E=A.tag;if(E===5||E===6)A=A.stateNode,J?H.nodeType===8?H.parentNode.insertBefore(A,J):H.insertBefore(A,J):(H.nodeType===8?(J=H.parentNode,J.insertBefore(A,H)):(J=H,J.appendChild(A)),H=H._reactRootContainer,H!==null&&H!==void 0||J.onclick!==null||(J.onclick=jV));else if(E!==4&&(A=A.child,A!==null))for(oR(A,J,H),A=A.sibling;A!==null;)oR(A,J,H),A=A.sibling}function rR(A,J,H){var E=A.tag;if(E===5||E===6)A=A.stateNode,J?H.insertBefore(A,J):H.appendChild(A);else if(E!==4&&(A=A.child,A!==null))for(rR(A,J,H),A=A.sibling;A!==null;)rR(A,J,H),A=A.sibling}function eH(A,J,H){for(H=H.child;H!==null;)$3(A,J,H),H=H.sibling}function $3(A,J,H){if(QH&&typeof QH.onCommitFiberUnmount==="function")try{QH.onCommitFiberUnmount(oV,H)}catch(Z){}switch(H.tag){case 5:dJ||m0(H,J);case 6:var E=yJ,X=t8;yJ=null,eH(A,J,H),yJ=E,t8=X,yJ!==null&&(t8?(A=yJ,H=H.stateNode,A.nodeType===8?A.parentNode.removeChild(H):A.removeChild(H)):yJ.removeChild(H.stateNode));break;case 18:yJ!==null&&(t8?(A=yJ,H=H.stateNode,A.nodeType===8?tZ(A.parentNode,H):A.nodeType===1&&tZ(A,H),SX(A)):tZ(yJ,H.stateNode));break;case 4:E=yJ,X=t8,yJ=H.stateNode.containerInfo,t8=!0,eH(A,J,H),yJ=E,t8=X;break;case 0:case 11:case 14:case 15:if(!dJ&&(E=H.updateQueue,E!==null&&(E=E.lastEffect,E!==null))){X=E=E.next;do{var V=X,U=V.destroy;V=V.tag,U!==void 0&&((V&2)!==0?iR(H,J,U):(V&4)!==0&&iR(H,J,U)),X=X.next}while(X!==E)}eH(A,J,H);break;case 1:if(!dJ&&(m0(H,J),E=H.stateNode,typeof E.componentWillUnmount==="function"))try{E.props=H.memoizedProps,E.state=H.memoizedState,E.componentWillUnmount()}catch(Z){PJ(H,J,Z)}eH(A,J,H);break;case 21:eH(A,J,H);break;case 22:H.mode&1?(dJ=(E=dJ)||H.memoizedState!==null,eH(A,J,H),dJ=E):eH(A,J,H);break;default:eH(A,J,H)}}function UN(A){var J=A.updateQueue;if(J!==null){A.updateQueue=null;var H=A.stateNode;H===null&&(H=A.stateNode=new oB),J.forEach(function(E){var X=EG.bind(null,A,E);H.has(E)||(H.add(E),E.then(X,X))})}}function o8(A,J){var H=J.deletions;if(H!==null)for(var E=0;E<H.length;E++){var X=H[E];try{var V=A,U=J,Z=U;A:for(;Z!==null;){switch(Z.tag){case 5:yJ=Z.stateNode,t8=!1;break A;case 3:yJ=Z.stateNode.containerInfo,t8=!0;break A;case 4:yJ=Z.stateNode.containerInfo,t8=!0;break A}Z=Z.return}if(yJ===null)throw Error(qA(160));$3(V,U,X),yJ=null,t8=!1;var R=X.alternate;R!==null&&(R.return=null),X.return=null}catch(Y){PJ(X,J,Y)}}if(J.subtreeFlags&12854)for(J=J.child;J!==null;)_3(J,A),J=J.sibling}function _3(A,J){var{alternate:H,flags:E}=A;switch(A.tag){case 0:case 11:case 14:case 15:if(o8(J,A),qH(A),E&4){try{CX(3,A,A.return),JU(3,A)}catch(G){PJ(A,A.return,G)}try{CX(5,A,A.return)}catch(G){PJ(A,A.return,G)}}break;case 1:o8(J,A),qH(A),E&512&&H!==null&&m0(H,H.return);break;case 5:if(o8(J,A),qH(A),E&512&&H!==null&&m0(H,H.return),A.flags&32){var X=A.stateNode;try{OX(X,"")}catch(G){PJ(A,A.return,G)}}if(E&4&&(X=A.stateNode,X!=null)){var V=A.memoizedProps,U=H!==null?H.memoizedProps:V,Z=A.type,R=A.updateQueue;if(A.updateQueue=null,R!==null)try{Z==="input"&&V.type==="radio"&&V.name!=null&&ON(X,V),FR(Z,U);var Y=FR(Z,V);for(U=0;U<R.length;U+=2){var P=R[U],N=R[U+1];P==="style"?LN(X,N):P==="dangerouslySetInnerHTML"?DN(X,N):P==="children"?OX(X,N):JY(X,P,N,Y)}switch(Z){case"input":NR(X,V);break;case"textarea":MN(X,V);break;case"select":var I=X._wrapperState.wasMultiple;X._wrapperState.wasMultiple=!!V.multiple;var z=V.value;z!=null?n0(X,!!V.multiple,z,!1):I!==!!V.multiple&&(V.defaultValue!=null?n0(X,!!V.multiple,V.defaultValue,!0):n0(X,!!V.multiple,V.multiple?[]:"",!1))}X[fX]=V}catch(G){PJ(A,A.return,G)}}break;case 6:if(o8(J,A),qH(A),E&4){if(A.stateNode===null)throw Error(qA(162));X=A.stateNode,V=A.memoizedProps;try{X.nodeValue=V}catch(G){PJ(A,A.return,G)}}break;case 3:if(o8(J,A),qH(A),E&4&&H!==null&&H.memoizedState.isDehydrated)try{SX(J.containerInfo)}catch(G){PJ(A,A.return,G)}break;case 4:o8(J,A),qH(A);break;case 13:o8(J,A),qH(A),X=A.child,X.flags&8192&&(V=X.memoizedState!==null,X.stateNode.isHidden=V,!V||X.alternate!==null&&X.alternate.memoizedState!==null||(uY=qJ())),E&4&&UN(A);break;case 22:if(P=H!==null&&H.memoizedState!==null,A.mode&1?(dJ=(Y=dJ)||P,o8(J,A),dJ=Y):o8(J,A),qH(A),E&8192){if(Y=A.memoizedState!==null,(A.stateNode.isHidden=Y)&&!P&&(A.mode&1)!==0)for(gA=A,P=A.child;P!==null;){for(N=gA=P;gA!==null;){switch(I=gA,z=I.child,I.tag){case 0:case 11:case 14:case 15:CX(4,I,I.return);break;case 1:m0(I,I.return);var B=I.stateNode;if(typeof B.componentWillUnmount==="function"){E=I,H=I.return;try{J=E,B.props=J.memoizedProps,B.state=J.memoizedState,B.componentWillUnmount()}catch(G){PJ(E,H,G)}}break;case 5:m0(I,I.return);break;case 22:if(I.memoizedState!==null){RN(N);continue}}z!==null?(z.return=I,gA=z):RN(N)}P=P.sibling}A:for(P=null,N=A;;){if(N.tag===5){if(P===null){P=N;try{X=N.stateNode,Y?(V=X.style,typeof V.setProperty==="function"?V.setProperty("display","none","important"):V.display="none"):(Z=N.stateNode,R=N.memoizedProps.style,U=R!==void 0&&R!==null&&R.hasOwnProperty("display")?R.display:null,Z.style.display=SN("display",U))}catch(G){PJ(A,A.return,G)}}}else if(N.tag===6){if(P===null)try{N.stateNode.nodeValue=Y?"":N.memoizedProps}catch(G){PJ(A,A.return,G)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===A)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===A)break A;for(;N.sibling===null;){if(N.return===null||N.return===A)break A;P===N&&(P=null),N=N.return}P===N&&(P=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:o8(J,A),qH(A),E&4&&UN(A);break;case 21:break;default:o8(J,A),qH(A)}}function qH(A){var J=A.flags;if(J&2){try{A:{for(var H=A.return;H!==null;){if(e3(H)){var E=H;break A}H=H.return}throw Error(qA(160))}switch(E.tag){case 5:var X=E.stateNode;E.flags&32&&(OX(X,""),E.flags&=-33);var V=VN(A);rR(A,V,X);break;case 3:case 4:var U=E.stateNode.containerInfo,Z=VN(A);oR(A,Z,U);break;default:throw Error(qA(161))}}catch(R){PJ(A,A.return,R)}A.flags&=-3}J&4096&&(A.flags&=-4097)}function tB(A,J,H){gA=A,Aq(A,J,H)}function Aq(A,J,H){for(var E=(A.mode&1)!==0;gA!==null;){var X=gA,V=X.child;if(X.tag===22&&E){var U=X.memoizedState!==null||PV;if(!U){var Z=X.alternate,R=Z!==null&&Z.memoizedState!==null||dJ;Z=PV;var Y=dJ;if(PV=U,(dJ=R)&&!Y)for(gA=X;gA!==null;)U=gA,R=U.child,U.tag===22&&U.memoizedState!==null?YN(X):R!==null?(R.return=U,gA=R):YN(X);for(;V!==null;)gA=V,Aq(V,J,H),V=V.sibling;gA=X,PV=Z,dJ=Y}ZN(A,J,H)}else(X.subtreeFlags&8772)!==0&&V!==null?(V.return=X,gA=V):ZN(A,J,H)}}function ZN(A){for(;gA!==null;){var J=gA;if((J.flags&8772)!==0){var H=J.alternate;try{if((J.flags&8772)!==0)switch(J.tag){case 0:case 11:case 15:dJ||JU(5,J);break;case 1:var E=J.stateNode;if(J.flags&4&&!dJ)if(H===null)E.componentDidMount();else{var X=J.elementType===J.type?H.memoizedProps:r8(J.type,H.memoizedProps);E.componentDidUpdate(X,H.memoizedState,E.__reactInternalSnapshotBeforeUpdate)}var V=J.updateQueue;V!==null&&i5(J,V,E);break;case 3:var U=J.updateQueue;if(U!==null){if(H=null,J.child!==null)switch(J.child.tag){case 5:H=J.child.stateNode;break;case 1:H=J.child.stateNode}i5(J,U,H)}break;case 5:var Z=J.stateNode;if(H===null&&J.flags&4){H=Z;var R=J.memoizedProps;switch(J.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&H.focus();break;case"img":R.src&&(H.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(J.memoizedState===null){var Y=J.alternate;if(Y!==null){var P=Y.memoizedState;if(P!==null){var N=P.dehydrated;N!==null&&SX(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(qA(163))}dJ||J.flags&512&&sR(J)}catch(I){PJ(J,J.return,I)}}if(J===A){gA=null;break}if(H=J.sibling,H!==null){H.return=J.return,gA=H;break}gA=J.return}}function RN(A){for(;gA!==null;){var J=gA;if(J===A){gA=null;break}var H=J.sibling;if(H!==null){H.return=J.return,gA=H;break}gA=J.return}}function YN(A){for(;gA!==null;){var J=gA;try{switch(J.tag){case 0:case 11:case 15:var H=J.return;try{JU(4,J)}catch(R){PJ(J,H,R)}break;case 1:var E=J.stateNode;if(typeof E.componentDidMount==="function"){var X=J.return;try{E.componentDidMount()}catch(R){PJ(J,X,R)}}var V=J.return;try{sR(J)}catch(R){PJ(J,V,R)}break;case 5:var U=J.return;try{sR(J)}catch(R){PJ(J,U,R)}}}catch(R){PJ(J,J.return,R)}if(J===A){gA=null;break}var Z=J.sibling;if(Z!==null){Z.return=J.return,gA=Z;break}gA=J.return}}function _J(){return(w6&6)!==0?qJ():WV!==-1?WV:WV=qJ()}function P1(A){if((A.mode&1)===0)return 1;if((w6&2)!==0&&vJ!==0)return vJ&-vJ;if(vB.transition!==null)return OV===0&&(OV=gN()),OV;if(A=h6,A!==0)return A;return A=window.event,A=A===void 0?16:iN(A.type),A}function $8(A,J,H,E){if(50<GX)throw GX=0,aR=null,Error(qA(185));if(pX(A,H,E),(w6&2)===0||A!==KJ)A===KJ&&((w6&2)===0&&(HU|=H),OJ===4&&J1(A,vJ)),P8(A,E),H===1&&w6===0&&(J.mode&1)===0&&(JE=qJ()+500,$V&&F1())}function P8(A,J){var H=A.callbackNode;hC(A,J);var E=KV(A,A===KJ?vJ:0);if(E===0)H!==null&&G5(H),A.callbackNode=null,A.callbackPriority=0;else if(J=E&-E,A.callbackPriority!==J){if(H!=null&&G5(H),J===1)A.tag===0?yB(PN.bind(null,A)):P3(PN.bind(null,A)),TB(function(){(w6&6)===0&&F1()}),H=null;else{switch(bN(E)){case 1:H=UY;break;case 4:H=lN;break;case 16:H=LV;break;case 536870912:H=pN;break;default:H=LV}H=Rq(H,Jq.bind(null,A))}A.callbackPriority=J,A.callbackNode=H}}function Jq(A,J){if(WV=-1,OV=0,(w6&6)!==0)throw Error(qA(327));var H=A.callbackNode;if(r0()&&A.callbackNode!==H)return null;var E=KV(A,A===KJ?vJ:0);if(E===0)return null;if((E&30)!==0||(E&A.expiredLanes)!==0||J)J=iV(A,E);else{J=E;var X=w6;w6|=2;var V=Eq();if(KJ!==A||vJ!==J)SH=null,JE=qJ()+500,r1(A,J);do try{_B();break}catch(Z){Hq(A,Z)}while(1);GY(),dV.current=V,w6=X,QJ!==null?J=0:(KJ=null,vJ=0,J=OJ)}if(J!==0){if(J===2&&(X=OR(A),X!==0&&(E=X,J=eR(A,X))),J===1)throw H=lX,r1(A,0),J1(A,E),P8(A,qJ()),H;if(J===6)J1(A,E);else{if(X=A.current.alternate,(E&30)===0&&!eB(X)&&(J=iV(A,E),J===2&&(V=OR(A),V!==0&&(E=V,J=eR(A,V))),J===1))throw H=lX,r1(A,0),J1(A,E),P8(A,qJ()),H;switch(A.finishedWork=X,A.finishedLanes=E,J){case 0:case 1:throw Error(qA(345));case 2:c1(A,U8,SH);break;case 3:if(J1(A,E),(E&130023424)===E&&(J=uY+500-qJ(),10<J)){if(KV(A,0)!==0)break;if(X=A.suspendedLanes,(X&E)!==E){_J(),A.pingedLanes|=A.suspendedLanes&X;break}A.timeoutHandle=jR(c1.bind(null,A,U8,SH),J);break}c1(A,U8,SH);break;case 4:if(J1(A,E),(E&4194240)===E)break;J=A.eventTimes;for(X=-1;0<E;){var U=31-e8(E);V=1<<U,U=J[U],U>X&&(X=U),E&=~V}if(E=X,E=qJ()-E,E=(120>E?120:480>E?480:1080>E?1080:1920>E?1920:3000>E?3000:4320>E?4320:1960*aB(E/1960))-E,10<E){A.timeoutHandle=jR(c1.bind(null,A,U8,SH),E);break}c1(A,U8,SH);break;case 5:c1(A,U8,SH);break;default:throw Error(qA(329))}}}return P8(A,qJ()),A.callbackNode===H?Jq.bind(null,A):null}function eR(A,J){var H=BX;return A.current.memoizedState.isDehydrated&&(r1(A,J).flags|=256),A=iV(A,J),A!==2&&(J=U8,U8=H,J!==null&&$R(J)),A}function $R(A){U8===null?U8=A:U8.push.apply(U8,A)}function eB(A){for(var J=A;;){if(J.flags&16384){var H=J.updateQueue;if(H!==null&&(H=H.stores,H!==null))for(var E=0;E<H.length;E++){var X=H[E],V=X.getSnapshot;X=X.value;try{if(!_8(V(),X))return!1}catch(U){return!1}}}if(H=J.child,J.subtreeFlags&16384&&H!==null)H.return=J,J=H;else{if(J===A)break;for(;J.sibling===null;){if(J.return===null||J.return===A)return!0;J=J.return}J.sibling.return=J.return,J=J.sibling}}return!0}function J1(A,J){J&=~vY,J&=~HU,A.suspendedLanes|=J,A.pingedLanes&=~J;for(A=A.expirationTimes;0<J;){var H=31-e8(J),E=1<<H;A[H]=-1,J&=~E}}function PN(A){if((w6&6)!==0)throw Error(qA(327));r0();var J=KV(A,0);if((J&1)===0)return P8(A,qJ()),null;var H=iV(A,J);if(A.tag!==0&&H===2){var E=OR(A);E!==0&&(J=E,H=eR(A,E))}if(H===1)throw H=lX,r1(A,0),J1(A,J),P8(A,qJ()),H;if(H===6)throw Error(qA(345));return A.finishedWork=A.current.alternate,A.finishedLanes=J,c1(A,U8,SH),P8(A,qJ()),null}function hY(A,J){var H=w6;w6|=1;try{return A(J)}finally{w6=H,w6===0&&(JE=qJ()+500,$V&&F1())}}function A0(A){E1!==null&&E1.tag===0&&(w6&6)===0&&r0();var J=w6;w6|=1;var H=v8.transition,E=h6;try{if(v8.transition=null,h6=1,A)return A()}finally{h6=E,v8.transition=H,w6=J,(w6&6)===0&&F1()}}function lY(){C8=d0.current,r6(d0)}function r1(A,J){A.finishedWork=null,A.finishedLanes=0;var H=A.timeoutHandle;if(H!==-1&&(A.timeoutHandle=-1,KB(H)),QJ!==null)for(H=QJ.return;H!==null;){var E=H;switch(FY(E),E.tag){case 1:E=E.type.childContextTypes,E!==null&&E!==void 0&&yV();break;case 3:_0(),r6(R8),r6(nJ),SY();break;case 5:DY(E);break;case 4:_0();break;case 13:r6(EJ);break;case 19:r6(EJ);break;case 10:WY(E.type._context);break;case 22:case 23:lY()}H=H.return}if(KJ=A,QJ=A=N1(A.current,null),vJ=C8=J,OJ=0,lX=null,vY=HU=_1=0,U8=BX=null,s1!==null){for(J=0;J<s1.length;J++)if(H=s1[J],E=H.interleaved,E!==null){H.interleaved=null;var X=E.next,V=H.pending;if(V!==null){var U=V.next;V.next=X,E.next=U}H.pending=E}s1=null}return A}function Hq(A,J){do{var H=QJ;try{if(GY(),CV.current=mV,xV){for(var E=XJ.memoizedState;E!==null;){var X=E.queue;X!==null&&(X.pending=null),E=E.next}xV=!1}if($1=0,LJ=WJ=XJ=null,FX=!1,vX=0,yY.current=null,H===null||H.return===null){OJ=1,lX=J,QJ=null;break}A:{var V=A,U=H.return,Z=H,R=J;if(J=vJ,Z.flags|=32768,R!==null&&typeof R==="object"&&typeof R.then==="function"){var Y=R,P=Z,N=P.tag;if((P.mode&1)===0&&(N===0||N===11||N===15)){var I=P.alternate;I?(P.updateQueue=I.updateQueue,P.memoizedState=I.memoizedState,P.lanes=I.lanes):(P.updateQueue=null,P.memoizedState=null)}var z=e5(U);if(z!==null){z.flags&=-257,$5(z,U,Z,V,J),z.mode&1&&a5(V,Y,J),J=z,R=Y;var B=J.updateQueue;if(B===null){var G=new Set;G.add(R),J.updateQueue=G}else B.add(R);break A}else{if((J&1)===0){a5(V,Y,J),pY();break A}R=Error(qA(426))}}else if(e6&&Z.mode&1){var F=e5(U);if(F!==null){(F.flags&65536)===0&&(F.flags|=256),$5(F,U,Z,V,J),CY(AE(R,Z));break A}}V=R=AE(R,Z),OJ!==4&&(OJ=2),BX===null?BX=[V]:BX.push(V),V=U;do{switch(V.tag){case 3:V.flags|=65536,J&=-J,V.lanes|=J;var q=b3(V,R,J);c5(V,q);break A;case 1:Z=R;var{type:C,stateNode:Q}=V;if((V.flags&128)===0&&(typeof C.getDerivedStateFromError==="function"||Q!==null&&typeof Q.componentDidCatch==="function"&&(Y1===null||!Y1.has(Q)))){V.flags|=65536,J&=-J,V.lanes|=J;var D=x3(V,Z,J);c5(V,D);break A}}V=V.return}while(V!==null)}Vq(H)}catch(f){J=f,QJ===H&&H!==null&&(QJ=H=H.return);continue}break}while(1)}function Eq(){var A=dV.current;return dV.current=mV,A===null?mV:A}function pY(){if(OJ===0||OJ===3||OJ===2)OJ=4;KJ===null||(_1&268435455)===0&&(HU&268435455)===0||J1(KJ,vJ)}function iV(A,J){var H=w6;w6|=2;var E=Eq();if(KJ!==A||vJ!==J)SH=null,r1(A,J);do try{$B();break}catch(X){Hq(A,X)}while(1);if(GY(),w6=H,dV.current=E,QJ!==null)throw Error(qA(261));return KJ=null,vJ=0,OJ}function $B(){for(;QJ!==null;)Xq(QJ)}function _B(){for(;QJ!==null&&!LC();)Xq(QJ)}function Xq(A){var J=Zq(A.alternate,A,C8);A.memoizedProps=A.pendingProps,J===null?Vq(A):QJ=J,yY.current=null}function Vq(A){var J=A;do{var H=J.alternate;if(A=J.return,(J.flags&32768)===0){if(H=iB(H,J,C8),H!==null){QJ=H;return}}else{if(H=sB(H,J),H!==null){H.flags&=32767,QJ=H;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{OJ=6,QJ=null;return}}if(J=J.sibling,J!==null){QJ=J;return}QJ=J=A}while(J!==null);OJ===0&&(OJ=5)}function c1(A,J,H){var E=h6,X=v8.transition;try{v8.transition=null,h6=1,AG(A,J,H,E)}finally{v8.transition=X,h6=E}return null}function AG(A,J,H,E){do r0();while(E1!==null);if((w6&6)!==0)throw Error(qA(327));H=A.finishedWork;var X=A.finishedLanes;if(H===null)return null;if(A.finishedWork=null,A.finishedLanes=0,H===A.current)throw Error(qA(177));A.callbackNode=null,A.callbackPriority=0;var V=H.lanes|H.childLanes;if(lC(A,V),A===KJ&&(QJ=KJ=null,vJ=0),(H.subtreeFlags&2064)===0&&(H.flags&2064)===0||NV||(NV=!0,Rq(LV,function(){return r0(),null})),V=(H.flags&15990)!==0,(H.subtreeFlags&15990)!==0||V){V=v8.transition,v8.transition=null;var U=h6;h6=1;var Z=w6;w6|=4,yY.current=null,rB(A,H),_3(H,A),MB(wR),TV=!!TR,wR=TR=null,A.current=H,tB(H,A,X),KC(),w6=Z,h6=U,v8.transition=V}else A.current=H;if(NV&&(NV=!1,E1=A,cV=X),V=A.pendingLanes,V===0&&(Y1=null),fC(H.stateNode,E),P8(A,qJ()),J!==null)for(E=A.onRecoverableError,H=0;H<J.length;H++)X=J[H],E(X.value,{componentStack:X.stack,digest:X.digest});if(nV)throw nV=!1,A=tR,tR=null,A;return(cV&1)!==0&&A.tag!==0&&r0(),V=A.pendingLanes,(V&1)!==0?A===aR?GX++:(GX=0,aR=A):GX=0,F1(),null}function r0(){if(E1!==null){var A=bN(cV),J=v8.transition,H=h6;try{if(v8.transition=null,h6=16>A?16:A,E1===null)var E=!1;else{if(A=E1,E1=null,cV=0,(w6&6)!==0)throw Error(qA(331));var X=w6;w6|=4;for(gA=A.current;gA!==null;){var V=gA,U=V.child;if((gA.flags&16)!==0){var Z=V.deletions;if(Z!==null){for(var R=0;R<Z.length;R++){var Y=Z[R];for(gA=Y;gA!==null;){var P=gA;switch(P.tag){case 0:case 11:case 15:CX(8,P,V)}var N=P.child;if(N!==null)N.return=P,gA=N;else for(;gA!==null;){P=gA;var{sibling:I,return:z}=P;if(a3(P),P===Y){gA=null;break}if(I!==null){I.return=z,gA=I;break}gA=z}}}var B=V.alternate;if(B!==null){var G=B.child;if(G!==null){B.child=null;do{var F=G.sibling;G.sibling=null,G=F}while(G!==null)}}gA=V}}if((V.subtreeFlags&2064)!==0&&U!==null)U.return=V,gA=U;else A:for(;gA!==null;){if(V=gA,(V.flags&2048)!==0)switch(V.tag){case 0:case 11:case 15:CX(9,V,V.return)}var q=V.sibling;if(q!==null){q.return=V.return,gA=q;break A}gA=V.return}}var C=A.current;for(gA=C;gA!==null;){U=gA;var Q=U.child;if((U.subtreeFlags&2064)!==0&&Q!==null)Q.return=U,gA=Q;else A:for(U=C;gA!==null;){if(Z=gA,(Z.flags&2048)!==0)try{switch(Z.tag){case 0:case 11:case 15:JU(9,Z)}}catch(f){PJ(Z,Z.return,f)}if(Z===U){gA=null;break A}var D=Z.sibling;if(D!==null){D.return=Z.return,gA=D;break A}gA=Z.return}}if(w6=X,F1(),QH&&typeof QH.onPostCommitFiberRoot==="function")try{QH.onPostCommitFiberRoot(oV,A)}catch(f){}E=!0}return E}finally{h6=H,v8.transition=J}}return!1}function NN(A,J,H){J=AE(H,J),J=b3(A,J,1),A=R1(A,J,1),J=_J(),A!==null&&(pX(A,1,J),P8(A,J))}function PJ(A,J,H){if(A.tag===3)NN(A,A,H);else for(;J!==null;){if(J.tag===3){NN(J,A,H);break}else if(J.tag===1){var E=J.stateNode;if(typeof J.type.getDerivedStateFromError==="function"||typeof E.componentDidCatch==="function"&&(Y1===null||!Y1.has(E))){A=AE(H,A),A=x3(J,A,1),J=R1(J,A,1),A=_J(),J!==null&&(pX(J,1,A),P8(J,A));break}}J=J.return}}function JG(A,J,H){var E=A.pingCache;E!==null&&E.delete(J),J=_J(),A.pingedLanes|=A.suspendedLanes&H,KJ===A&&(vJ&H)===H&&(OJ===4||OJ===3&&(vJ&130023424)===vJ&&500>qJ()-uY?r1(A,0):vY|=H),P8(A,J)}function Uq(A,J){J===0&&((A.mode&1)===0?J=1:(J=JV,JV<<=1,(JV&130023424)===0&&(JV=4194304)));var H=_J();A=yH(A,J),A!==null&&(pX(A,J,H),P8(A,H))}function HG(A){var J=A.memoizedState,H=0;J!==null&&(H=J.retryLane),Uq(A,H)}function EG(A,J){var H=0;switch(A.tag){case 13:var{stateNode:E,memoizedState:X}=A;X!==null&&(H=X.retryLane);break;case 19:E=A.stateNode;break;default:throw Error(qA(314))}E!==null&&E.delete(J),Uq(A,H)}function Rq(A,J){return hN(A,J)}function XG(A,J,H,E){this.tag=A,this.key=H,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=J,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=E,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function y8(A,J,H,E){return new XG(A,J,H,E)}function gY(A){return A=A.prototype,!(!A||!A.isReactComponent)}function VG(A){if(typeof A==="function")return gY(A)?1:0;if(A!==void 0&&A!==null){if(A=A.$$typeof,A===EY)return 11;if(A===XY)return 14}return 2}function N1(A,J){var H=A.alternate;return H===null?(H=y8(A.tag,J,A.key,A.mode),H.elementType=A.elementType,H.type=A.type,H.stateNode=A.stateNode,H.alternate=A,A.alternate=H):(H.pendingProps=J,H.type=A.type,H.flags=0,H.subtreeFlags=0,H.deletions=null),H.flags=A.flags&14680064,H.childLanes=A.childLanes,H.lanes=A.lanes,H.child=A.child,H.memoizedProps=A.memoizedProps,H.memoizedState=A.memoizedState,H.updateQueue=A.updateQueue,J=A.dependencies,H.dependencies=J===null?null:{lanes:J.lanes,firstContext:J.firstContext},H.sibling=A.sibling,H.index=A.index,H.ref=A.ref,H}function MV(A,J,H,E,X,V){var U=2;if(E=A,typeof A==="function")gY(A)&&(U=1);else if(typeof A==="string")U=5;else A:switch(A){case y0:return t1(H.children,X,V,J);case HY:U=8,X|=8;break;case UR:return A=y8(12,H,J,X|2),A.elementType=UR,A.lanes=V,A;case ZR:return A=y8(13,H,J,X),A.elementType=ZR,A.lanes=V,A;case RR:return A=y8(19,H,J,X),A.elementType=RR,A.lanes=V,A;case BN:return EU(H,X,V,J);default:if(typeof A==="object"&&A!==null)switch(A.$$typeof){case FN:U=10;break A;case CN:U=9;break A;case EY:U=11;break A;case XY:U=14;break A;case $H:U=16,E=null;break A}throw Error(qA(130,A==null?A:typeof A,""))}return J=y8(U,H,J,X),J.elementType=A,J.type=E,J.lanes=V,J}function t1(A,J,H,E){return A=y8(7,A,E,J),A.lanes=H,A}function EU(A,J,H,E){return A=y8(22,A,E,J),A.elementType=BN,A.lanes=H,A.stateNode={isHidden:!1},A}function ER(A,J,H){return A=y8(6,A,null,J),A.lanes=H,A}function XR(A,J,H){return J=y8(4,A.children!==null?A.children:[],A.key,J),J.lanes=H,J.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},J}function UG(A,J,H,E,X){this.tag=J,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dZ(0),this.expirationTimes=dZ(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dZ(0),this.identifierPrefix=E,this.onRecoverableError=X,this.mutableSourceEagerHydrationData=null}function bY(A,J,H,E,X,V,U,Z,R){return A=new UG(A,J,H,Z,R),J===1?(J=1,V===!0&&(J|=8)):J=0,V=y8(3,null,null,J),A.current=V,V.stateNode=A,V.memoizedState={element:E,isDehydrated:H,cache:null,transitions:null,pendingSuspenseBoundaries:null},MY(V),A}function ZG(A,J,H){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j0,key:E==null?null:""+E,children:A,containerInfo:J,implementation:H}}function Yq(A){if(!A)return I1;A=A._reactInternals;A:{if(H0(A)!==A||A.tag!==1)throw Error(qA(170));var J=A;do{switch(J.tag){case 3:J=J.stateNode.context;break A;case 1:if(Y8(J.type)){J=J.stateNode.__reactInternalMemoizedMergedChildContext;break A}}J=J.return}while(J!==null);throw Error(qA(171))}if(A.tag===1){var H=A.type;if(Y8(H))return Y3(A,H,J)}return J}function Pq(A,J,H,E,X,V,U,Z,R){return A=bY(H,E,!0,A,X,V,U,Z,R),A.context=Yq(null),H=A.current,E=_J(),X=P1(H),V=wH(E,X),V.callback=J!==void 0&&J!==null?J:null,R1(H,V,X),A.current.lanes=X,pX(A,X,E),P8(A,E),A}function XU(A,J,H,E){var X=J.current,V=_J(),U=P1(X);return H=Yq(H),J.context===null?J.context=H:J.pendingContext=H,J=wH(V,U),J.payload={element:A},E=E===void 0?null:E,E!==null&&(J.callback=E),A=R1(X,J,U),A!==null&&($8(A,X,U,V),FV(A,X,U)),U}function sV(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function qN(A,J){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var H=A.retryLane;A.retryLane=H!==0&&H<J?H:J}}function xY(A,J){qN(A,J),(A=A.alternate)&&qN(A,J)}function RG(){return null}function mY(A){this._internalRoot=A}function VU(A){this._internalRoot=A}function dY(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function UU(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function IN(){}function YG(A,J,H,E,X){if(X){if(typeof E==="function"){var V=E;E=function(){var Y=sV(U);V.call(Y)}}var U=Pq(J,E,A,0,null,!1,!1,"",IN);return A._reactRootContainer=U,A[jH]=U.current,TX(A.nodeType===8?A.parentNode:A),A0(),U}for(;X=A.lastChild;)A.removeChild(X);if(typeof E==="function"){var Z=E;E=function(){var Y=sV(R);Z.call(Y)}}var R=bY(A,0,!1,null,null,!1,!1,"",IN);return A._reactRootContainer=R,A[jH]=R.current,TX(A.nodeType===8?A.parentNode:A),A0(function(){XU(J,R,H,E)}),R}function ZU(A,J,H,E,X){var V=H._reactRootContainer;if(V){var U=V;if(typeof X==="function"){var Z=X;X=function(){var R=sV(U);Z.call(R)}}XU(J,U,A,X)}else U=YG(H,J,A,X,E);return sV(U)}var zN,$6,QN,WX,fH,VR,qC,P5,N5,uJ,_R,uH,e9,j0,y0,HY,UR,FN,CN,EY,ZR,RR,XY,$H,BN,q5,VJ,gZ,bZ=!1,XX,_9,DN,NX,GC,WC,CR=null,BR=null,c0=null,i0=null,mZ=!1,GR=!1,d1,qX=!1,DV=null,SV=!1,WR=null,MC,hN,G5,LC,KC,qJ,TC,UY,lN,LV,wC,pN,oV=null,QH=null,e8,jC,yC,AV=64,JV=4194304,h6=0,xN,RY,mN,dN,nN,MR=!1,HV,X1=null,V1=null,U1=null,kX,DX,A1,pC,s0,TV=!0,wV=null,H1=null,PY=null,IV=null,HE,NY,gX,dC,nZ,cZ,_E,rV,k5,nC,cC,iC,iZ,sC,oC,rC,tC,aC,D5,eC,$C,_C,JB,HB,EB,S5,XB,VB,UB,ZB,RB,YB,PB,IY,IX=null,NB,oN,L5,K5=!1,v0=!1,zB,zX=null,LX=null,eN=!1,UX,ZX,QV,_8,kB,u0=null,DR=null,QX=null,SR=!1,h0,sZ,J3,H3,E3,X3,V3,U3,v5,YX,LR,KR,RX,PX,DB,VV,SB,LB,TR=null,wR=null,jR,KB,p5,TB,EE,zH,fX,jH,yR,fB,jB,vR,p0=-1,I1,nJ,R8,a1,LH=null,$V=!1,aZ=!1,g0,b0=0,uV=null,hV=0,f8,j8=0,e1=null,KH=1,TH="",G8=null,B8=null,e6=!1,a8=null,vB,$0,Q3,lV,pV=null,x0=null,BY=null,s1=null,_H=!1,xX,FH,jX,yX,EJ,eZ,CV,$Z,$1=0,XJ=null,WJ=null,LJ=null,xV=!1,FX=!1,vX=0,uB=0,mV,gB,bB,xB,AU,mB,dB,Z8=!1,dR,o3,cR,r3,t3,PV=!1,dJ=!1,oB,gA=null,XN=!1,yJ=null,t8=!1,aB,dV,yY,v8,w6=0,KJ=null,QJ=null,vJ=0,C8=0,d0,OJ=0,lX=null,_1=0,HU=0,vY=0,BX=null,U8=null,uY=0,JE=1/0,SH=null,nV=!1,tR=null,Y1=null,NV=!1,E1=null,cV=0,GX=0,aR=null,WV=-1,OV=0,Zq,Nq,PG,HX,NG,f0,qq,Iq=function(A,J){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dY(J))throw Error(qA(200));return ZG(A,J,null,H)},zq=function(A,J){if(!dY(A))throw Error(qA(299));var H=!1,E="",X=Nq;return J!==null&&J!==void 0&&(J.unstable_strictMode===!0&&(H=!0),J.identifierPrefix!==void 0&&(E=J.identifierPrefix),J.onRecoverableError!==void 0&&(X=J.onRecoverableError)),J=bY(A,1,!1,null,null,H,!1,E,X),A[jH]=J.current,TX(A.nodeType===8?A.parentNode:A),new mY(J)},Qq=function(A){if(A==null)return null;if(A.nodeType===1)return A;var J=A._reactInternals;if(J===void 0){if(typeof A.render==="function")throw Error(qA(188));throw A=Object.keys(A).join(","),Error(qA(268,A))}return A=vN(J),A=A===null?null:A.stateNode,A},Fq=function(A){return A0(A)},Cq=function(A,J,H){if(!UU(J))throw Error(qA(200));return ZU(null,A,J,!0,H)},Bq=function(A,J,H){if(!dY(A))throw Error(qA(405));var E=H!=null&&H.hydratedSources||null,X=!1,V="",U=Nq;if(H!==null&&H!==void 0&&(H.unstable_strictMode===!0&&(X=!0),H.identifierPrefix!==void 0&&(V=H.identifierPrefix),H.onRecoverableError!==void 0&&(U=H.onRecoverableError)),J=Pq(J,null,A,1,H!=null?H:null,X,!1,V,U),A[jH]=J.current,TX(A),E)for(A=0;A<E.length;A++)H=E[A],X=H._getVersion,X=X(H._source),J.mutableSourceEagerHydrationData==null?J.mutableSourceEagerHydrationData=[H,X]:J.mutableSourceEagerHydrationData.push(H,X);return new VU(J)},Gq=function(A,J,H){if(!UU(J))throw Error(qA(200));return ZU(null,A,J,!1,H)},Wq=function(A){if(!UU(A))throw Error(qA(40));return A._reactRootContainer?(A0(function(){ZU(null,null,A,!1,function(){A._reactRootContainer=null,A[jH]=null})}),!0):!1},Oq,Mq=function(A,J,H,E){if(!UU(H))throw Error(qA(200));if(A==null||A._reactInternals===void 0)throw Error(qA(38));return ZU(A,J,H,!1,E)},kq="18.3.1-next-f1338f8080-20240426";var Dq=oQ(()=>{zN=DH(x1(),1),$6=DH(Y5(),1);QN=new Set,WX={};fH=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),VR=Object.prototype.hasOwnProperty,qC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P5={},N5={};uJ={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){uJ[A]=new A8(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var J=A[0];uJ[J]=new A8(J,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){uJ[A]=new A8(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){uJ[A]=new A8(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){uJ[A]=new A8(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){uJ[A]=new A8(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){uJ[A]=new A8(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){uJ[A]=new A8(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){uJ[A]=new A8(A,5,!1,A.toLowerCase(),null,!1,!1)});_R=/[\-:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var J=A.replace(_R,AY);uJ[J]=new A8(J,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var J=A.replace(_R,AY);uJ[J]=new A8(J,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var J=A.replace(_R,AY);uJ[J]=new A8(J,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){uJ[A]=new A8(A,1,!1,A.toLowerCase(),null,!1,!1)});uJ.xlinkHref=new A8("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){uJ[A]=new A8(A,1,!1,A.toLowerCase(),null,!0,!0)});uH=zN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,e9=Symbol.for("react.element"),j0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),HY=Symbol.for("react.strict_mode"),UR=Symbol.for("react.profiler"),FN=Symbol.for("react.provider"),CN=Symbol.for("react.context"),EY=Symbol.for("react.forward_ref"),ZR=Symbol.for("react.suspense"),RR=Symbol.for("react.suspense_list"),XY=Symbol.for("react.memo"),$H=Symbol.for("react.lazy"),BN=Symbol.for("react.offscreen"),q5=Symbol.iterator;VJ=Object.assign;XX=Array.isArray;DN=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(J,H,E,X){MSApp.execUnsafeLocalFunction(function(){return A(J,H,E,X)})}:A}(function(A,J){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=J;else{_9=_9||document.createElement("div"),_9.innerHTML="<svg>"+J.valueOf().toString()+"</svg>";for(J=_9.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;J.firstChild;)A.appendChild(J.firstChild)}});NX={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GC=["Webkit","ms","Moz","O"];Object.keys(NX).forEach(function(A){GC.forEach(function(J){J=J+A.charAt(0).toUpperCase()+A.substring(1),NX[J]=NX[A]})});WC=VJ({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});if(fH)try{d1={},Object.defineProperty(d1,"passive",{get:function(){GR=!0}}),window.addEventListener("test",d1,d1),window.removeEventListener("test",d1,d1)}catch(A){GR=!1}MC={onError:function(A){qX=!0,DV=A}};hN=$6.unstable_scheduleCallback,G5=$6.unstable_cancelCallback,LC=$6.unstable_shouldYield,KC=$6.unstable_requestPaint,qJ=$6.unstable_now,TC=$6.unstable_getCurrentPriorityLevel,UY=$6.unstable_ImmediatePriority,lN=$6.unstable_UserBlockingPriority,LV=$6.unstable_NormalPriority,wC=$6.unstable_LowPriority,pN=$6.unstable_IdlePriority;e8=Math.clz32?Math.clz32:vC,jC=Math.log,yC=Math.LN2;HV=[],kX=new Map,DX=new Map,A1=[],pC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");s0=uH.ReactCurrentBatchConfig;HE={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},NY=W8(HE),gX=VJ({},HE,{view:0,detail:0}),dC=W8(gX),rV=VJ({},gX,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qY,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){if("movementX"in A)return A.movementX;return A!==_E&&(_E&&A.type==="mousemove"?(nZ=A.screenX-_E.screenX,cZ=A.screenY-_E.screenY):cZ=nZ=0,_E=A),nZ},movementY:function(A){return"movementY"in A?A.movementY:cZ}}),k5=W8(rV),nC=VJ({},rV,{dataTransfer:0}),cC=W8(nC),iC=VJ({},gX,{relatedTarget:0}),iZ=W8(iC),sC=VJ({},HE,{animationName:0,elapsedTime:0,pseudoElement:0}),oC=W8(sC),rC=VJ({},HE,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),tC=W8(rC),aC=VJ({},HE,{data:0}),D5=W8(aC),eC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_C={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};JB=VJ({},gX,{key:function(A){if(A.key){var J=eC[A.key]||A.key;if(J!=="Unidentified")return J}return A.type==="keypress"?(A=zV(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?$C[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qY,charCode:function(A){return A.type==="keypress"?zV(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?zV(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),HB=W8(JB),EB=VJ({},rV,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S5=W8(EB),XB=VJ({},gX,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qY}),VB=W8(XB),UB=VJ({},HE,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZB=W8(UB),RB=VJ({},rV,{deltaX:function(A){return"deltaX"in A?A.deltaX:("wheelDeltaX"in A)?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:("wheelDeltaY"in A)?-A.wheelDeltaY:("wheelDelta"in A)?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),YB=W8(RB),PB=[9,13,27,32],IY=fH&&"CompositionEvent"in window;fH&&"documentMode"in document&&(IX=document.documentMode);NB=fH&&"TextEvent"in window&&!IX,oN=fH&&(!IY||IX&&8<IX&&11>=IX),L5=String.fromCharCode(32);zB={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(fH){if(fH){if(ZX="oninput"in document,!ZX)QV=document.createElement("div"),QV.setAttribute("oninput","return;"),ZX=typeof QV.oninput==="function";UX=ZX}else UX=!1;eN=UX&&(!document.documentMode||9<document.documentMode)}_8=typeof Object.is==="function"?Object.is:OB;kB=fH&&"documentMode"in document&&11>=document.documentMode;h0={animationend:XV("Animation","AnimationEnd"),animationiteration:XV("Animation","AnimationIteration"),animationstart:XV("Animation","AnimationStart"),transitionend:XV("Transition","TransitionEnd")},sZ={},J3={};fH&&(J3=document.createElement("div").style,("AnimationEvent"in window)||(delete h0.animationend.animation,delete h0.animationiteration.animation,delete h0.animationstart.animation),("TransitionEvent"in window)||delete h0.transitionend.transition);H3=aV("animationend"),E3=aV("animationiteration"),X3=aV("animationstart"),V3=aV("transitionend"),U3=new Map,v5="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");for(RX=0;RX<v5.length;RX++)YX=v5[RX],LR=YX.toLowerCase(),KR=YX[0].toUpperCase()+YX.slice(1),z1(LR,"on"+KR);z1(H3,"onAnimationEnd");z1(E3,"onAnimationIteration");z1(X3,"onAnimationStart");z1("dblclick","onDoubleClick");z1("focusin","onFocus");z1("focusout","onBlur");z1(V3,"onTransitionEnd");t0("onMouseEnter",["mouseout","mouseover"]);t0("onMouseLeave",["mouseout","mouseover"]);t0("onPointerEnter",["pointerout","pointerover"]);t0("onPointerLeave",["pointerout","pointerover"]);J0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));J0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));J0("onBeforeInput",["compositionend","keypress","textInput","paste"]);J0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));J0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));J0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));PX="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DB=new Set("cancel close invalid load scroll toggle".split(" ").concat(PX));VV="_reactListening"+Math.random().toString(36).slice(2);SB=/\r\n?/g,LB=/\u0000|\uFFFD/g;jR=typeof setTimeout==="function"?setTimeout:void 0,KB=typeof clearTimeout==="function"?clearTimeout:void 0,p5=typeof Promise==="function"?Promise:void 0,TB=typeof queueMicrotask==="function"?queueMicrotask:typeof p5<"u"?function(A){return p5.resolve(null).then(A).catch(wB)}:jR;EE=Math.random().toString(36).slice(2),zH="__reactFiber$"+EE,fX="__reactProps$"+EE,jH="__reactContainer$"+EE,yR="__reactEvents$"+EE,fB="__reactListeners$"+EE,jB="__reactHandles$"+EE;vR=[];I1={},nJ=Q1(I1),R8=Q1(!1),a1=I1;g0=[],f8=[];vB=uH.ReactCurrentBatchConfig;$0=z3(!0),Q3=z3(!1),lV=Q1(null);xX={},FH=Q1(xX),jX=Q1(xX),yX=Q1(xX);EJ=Q1(0);eZ=[];CV=uH.ReactCurrentDispatcher,$Z=uH.ReactCurrentBatchConfig;mV={readContext:u8,useCallback:xJ,useContext:xJ,useEffect:xJ,useImperativeHandle:xJ,useInsertionEffect:xJ,useLayoutEffect:xJ,useMemo:xJ,useReducer:xJ,useRef:xJ,useState:xJ,useDebugValue:xJ,useDeferredValue:xJ,useTransition:xJ,useMutableSource:xJ,useSyncExternalStore:xJ,useId:xJ,unstable_isNewReconciler:!1},gB={readContext:u8,useCallback:function(A,J){return IH().memoizedState=[A,J===void 0?null:J],A},useContext:u8,useEffect:o5,useImperativeHandle:function(A,J,H){return H=H!==null&&H!==void 0?H.concat([A]):null,BV(4194308,4,w3.bind(null,J,A),H)},useLayoutEffect:function(A,J){return BV(4194308,4,A,J)},useInsertionEffect:function(A,J){return BV(4,2,A,J)},useMemo:function(A,J){var H=IH();return J=J===void 0?null:J,A=A(),H.memoizedState=[A,J],A},useReducer:function(A,J,H){var E=IH();return J=H!==void 0?H(J):J,E.memoizedState=E.baseState=J,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:J},E.queue=A,A=A.dispatch=lB.bind(null,XJ,A),[E.memoizedState,A]},useRef:function(A){var J=IH();return A={current:A},J.memoizedState=A},useState:s5,useDebugValue:fY,useDeferredValue:function(A){return IH().memoizedState=A},useTransition:function(){var A=s5(!1),J=A[0];return A=hB.bind(null,A[1]),IH().memoizedState=A,[J,A]},useMutableSource:function(){},useSyncExternalStore:function(A,J,H){var E=XJ,X=IH();if(e6){if(H===void 0)throw Error(qA(407));H=H()}else{if(H=J(),KJ===null)throw Error(qA(349));($1&30)!==0||O3(E,J,H)}X.memoizedState=H;var V={value:H,getSnapshot:J};return X.queue=V,o5(k3.bind(null,E,V,A),[A]),E.flags|=2048,hX(9,M3.bind(null,E,V,H,J),void 0,null),H},useId:function(){var A=IH(),J=KJ.identifierPrefix;if(e6){var H=TH,E=KH;H=(E&~(1<<32-e8(E)-1)).toString(32)+H,J=":"+J+"R"+H,H=vX++,0<H&&(J+="H"+H.toString(32)),J+=":"}else H=uB++,J=":"+J+"r"+H.toString(32)+":";return A.memoizedState=J},unstable_isNewReconciler:!1},bB={readContext:u8,useCallback:j3,useContext:u8,useEffect:wY,useImperativeHandle:f3,useInsertionEffect:K3,useLayoutEffect:T3,useMemo:y3,useReducer:_Z,useRef:L3,useState:function(){return _Z(uX)},useDebugValue:fY,useDeferredValue:function(A){var J=h8();return v3(J,WJ.memoizedState,A)},useTransition:function(){var A=_Z(uX)[0],J=h8().memoizedState;return[A,J]},useMutableSource:G3,useSyncExternalStore:W3,useId:u3,unstable_isNewReconciler:!1},xB={readContext:u8,useCallback:j3,useContext:u8,useEffect:wY,useImperativeHandle:f3,useInsertionEffect:K3,useLayoutEffect:T3,useMemo:y3,useReducer:AR,useRef:L3,useState:function(){return AR(uX)},useDebugValue:fY,useDeferredValue:function(A){var J=h8();return WJ===null?J.memoizedState=A:v3(J,WJ.memoizedState,A)},useTransition:function(){var A=AR(uX)[0],J=h8().memoizedState;return[A,J]},useMutableSource:G3,useSyncExternalStore:W3,useId:u3,unstable_isNewReconciler:!1};AU={isMounted:function(A){return(A=A._reactInternals)?H0(A)===A:!1},enqueueSetState:function(A,J,H){A=A._reactInternals;var E=_J(),X=P1(A),V=wH(E,X);V.payload=J,H!==void 0&&H!==null&&(V.callback=H),J=R1(A,V,X),J!==null&&($8(J,A,X,E),FV(J,A,X))},enqueueReplaceState:function(A,J,H){A=A._reactInternals;var E=_J(),X=P1(A),V=wH(E,X);V.tag=1,V.payload=J,H!==void 0&&H!==null&&(V.callback=H),J=R1(A,V,X),J!==null&&($8(J,A,X,E),FV(J,A,X))},enqueueForceUpdate:function(A,J){A=A._reactInternals;var H=_J(),E=P1(A),X=wH(H,E);X.tag=2,J!==void 0&&J!==null&&(X.callback=J),J=R1(A,X,E),J!==null&&($8(J,A,E,H),FV(J,A,E))}};mB=typeof WeakMap==="function"?WeakMap:Map;dB=uH.ReactCurrentOwner;dR={dehydrated:null,treeContext:null,retryLane:0};o3=function(A,J){for(var H=J.child;H!==null;){if(H.tag===5||H.tag===6)A.appendChild(H.stateNode);else if(H.tag!==4&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===J)break;for(;H.sibling===null;){if(H.return===null||H.return===J)return;H=H.return}H.sibling.return=H.return,H=H.sibling}};cR=function(){};r3=function(A,J,H,E){var X=A.memoizedProps;if(X!==E){A=J.stateNode,o1(FH.current);var V=null;switch(H){case"input":X=PR(A,X),E=PR(A,E),V=[];break;case"select":X=VJ({},X,{value:void 0}),E=VJ({},E,{value:void 0}),V=[];break;case"textarea":X=IR(A,X),E=IR(A,E),V=[];break;default:typeof X.onClick!=="function"&&typeof E.onClick==="function"&&(A.onclick=jV)}QR(H,E);var U;H=null;for(Y in X)if(!E.hasOwnProperty(Y)&&X.hasOwnProperty(Y)&&X[Y]!=null)if(Y==="style"){var Z=X[Y];for(U in Z)Z.hasOwnProperty(U)&&(H||(H={}),H[U]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(WX.hasOwnProperty(Y)?V||(V=[]):(V=V||[]).push(Y,null));for(Y in E){var R=E[Y];if(Z=X!=null?X[Y]:void 0,E.hasOwnProperty(Y)&&R!==Z&&(R!=null||Z!=null))if(Y==="style")if(Z){for(U in Z)!Z.hasOwnProperty(U)||R&&R.hasOwnProperty(U)||(H||(H={}),H[U]="");for(U in R)R.hasOwnProperty(U)&&Z[U]!==R[U]&&(H||(H={}),H[U]=R[U])}else H||(V||(V=[]),V.push(Y,H)),H=R;else Y==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,Z=Z?Z.__html:void 0,R!=null&&Z!==R&&(V=V||[]).push(Y,R)):Y==="children"?typeof R!=="string"&&typeof R!=="number"||(V=V||[]).push(Y,""+R):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(WX.hasOwnProperty(Y)?(R!=null&&Y==="onScroll"&&o6("scroll",A),V||Z===R||(V=[])):(V=V||[]).push(Y,R))}H&&(V=V||[]).push("style",H);var Y=V;if(J.updateQueue=Y)J.flags|=4}};t3=function(A,J,H,E){H!==E&&(J.flags|=4)};oB=typeof WeakSet==="function"?WeakSet:Set;aB=Math.ceil,dV=uH.ReactCurrentDispatcher,yY=uH.ReactCurrentOwner,v8=uH.ReactCurrentBatchConfig,d0=Q1(0);Zq=function(A,J,H){if(A!==null)if(A.memoizedProps!==J.pendingProps||R8.current)Z8=!0;else{if((A.lanes&H)===0&&(J.flags&128)===0)return Z8=!1,cB(A,J,H);Z8=(A.flags&131072)!==0?!0:!1}else Z8=!1,e6&&(J.flags&1048576)!==0&&N3(J,hV,J.index);switch(J.lanes=0,J.tag){case 2:var E=J.type;GV(A,J),A=J.pendingProps;var X=a0(J,nJ.current);o0(J,H),X=KY(null,J,E,A,X,H);var V=TY();return J.flags|=1,typeof X==="object"&&X!==null&&typeof X.render==="function"&&X.$$typeof===void 0?(J.tag=1,J.memoizedState=null,J.updateQueue=null,Y8(E)?(V=!0,vV(J)):V=!1,J.memoizedState=X.state!==null&&X.state!==void 0?X.state:null,MY(J),X.updater=AU,J.stateNode=X,X._reactInternals=J,gR(J,E,A,H),J=mR(null,J,E,!0,V,H)):(J.tag=0,e6&&V&&QY(J),$J(null,J,X,H),J=J.child),J;case 16:E=J.elementType;A:{switch(GV(A,J),A=J.pendingProps,X=E._init,E=X(E._payload),J.type=E,X=J.tag=VG(E),A=r8(E,A),X){case 0:J=xR(null,J,E,A,H);break A;case 1:J=JN(null,J,E,A,H);break A;case 11:J=_5(null,J,E,A,H);break A;case 14:J=AN(null,J,E,r8(E.type,A),H);break A}throw Error(qA(306,E,""))}return J;case 0:return E=J.type,X=J.pendingProps,X=J.elementType===E?X:r8(E,X),xR(A,J,E,X,H);case 1:return E=J.type,X=J.pendingProps,X=J.elementType===E?X:r8(E,X),JN(A,J,E,X,H);case 3:A:{if(c3(J),A===null)throw Error(qA(387));E=J.pendingProps,V=J.memoizedState,X=V.element,C3(A,J),gV(J,E,null,H);var U=J.memoizedState;if(E=U.element,V.isDehydrated)if(V={element:E,isDehydrated:!1,cache:U.cache,pendingSuspenseBoundaries:U.pendingSuspenseBoundaries,transitions:U.transitions},J.updateQueue.baseState=V,J.memoizedState=V,J.flags&256){X=AE(Error(qA(423)),J),J=HN(A,J,E,H,X);break A}else if(E!==X){X=AE(Error(qA(424)),J),J=HN(A,J,E,H,X);break A}else for(B8=Z1(J.stateNode.containerInfo.firstChild),G8=J,e6=!0,a8=null,H=Q3(J,null,E,H),J.child=H;H;)H.flags=H.flags&-3|4096,H=H.sibling;else{if(e0(),E===X){J=vH(A,J,H);break A}$J(A,J,E,H)}J=J.child}return J;case 5:return B3(J),A===null&&hR(J),E=J.type,X=J.pendingProps,V=A!==null?A.memoizedProps:null,U=X.children,fR(E,X)?U=null:V!==null&&fR(E,V)&&(J.flags|=32),n3(A,J),$J(A,J,U,H),J.child;case 6:return A===null&&hR(J),null;case 13:return i3(A,J,H);case 4:return kY(J,J.stateNode.containerInfo),E=J.pendingProps,A===null?J.child=$0(J,null,E,H):$J(A,J,E,H),J.child;case 11:return E=J.type,X=J.pendingProps,X=J.elementType===E?X:r8(E,X),_5(A,J,E,X,H);case 7:return $J(A,J,J.pendingProps,H),J.child;case 8:return $J(A,J,J.pendingProps.children,H),J.child;case 12:return $J(A,J,J.pendingProps.children,H),J.child;case 10:A:{if(E=J.type._context,X=J.pendingProps,V=J.memoizedProps,U=X.value,c6(lV,E._currentValue),E._currentValue=U,V!==null)if(_8(V.value,U)){if(V.children===X.children&&!R8.current){J=vH(A,J,H);break A}}else for(V=J.child,V!==null&&(V.return=J);V!==null;){var Z=V.dependencies;if(Z!==null){U=V.child;for(var R=Z.firstContext;R!==null;){if(R.context===E){if(V.tag===1){R=wH(-1,H&-H),R.tag=2;var Y=V.updateQueue;if(Y!==null){Y=Y.shared;var P=Y.pending;P===null?R.next=R:(R.next=P.next,P.next=R),Y.pending=R}}V.lanes|=H,R=V.alternate,R!==null&&(R.lanes|=H),lR(V.return,H,J),Z.lanes|=H;break}R=R.next}}else if(V.tag===10)U=V.type===J.type?null:V.child;else if(V.tag===18){if(U=V.return,U===null)throw Error(qA(341));U.lanes|=H,Z=U.alternate,Z!==null&&(Z.lanes|=H),lR(U,H,J),U=V.sibling}else U=V.child;if(U!==null)U.return=V;else for(U=V;U!==null;){if(U===J){U=null;break}if(V=U.sibling,V!==null){V.return=U.return,U=V;break}U=U.return}V=U}$J(A,J,X.children,H),J=J.child}return J;case 9:return X=J.type,E=J.pendingProps.children,o0(J,H),X=u8(X),E=E(X),J.flags|=1,$J(A,J,E,H),J.child;case 14:return E=J.type,X=r8(E,J.pendingProps),X=r8(E.type,X),AN(A,J,E,X,H);case 15:return m3(A,J,J.type,J.pendingProps,H);case 17:return E=J.type,X=J.pendingProps,X=J.elementType===E?X:r8(E,X),GV(A,J),J.tag=1,Y8(E)?(A=!0,vV(J)):A=!1,o0(J,H),g3(J,E,X),gR(J,E,X,H),mR(null,J,E,!0,A,H);case 19:return s3(A,J,H);case 22:return d3(A,J,H)}throw Error(qA(156,J.tag))};Nq=typeof reportError==="function"?reportError:function(A){console.error(A)};VU.prototype.render=mY.prototype.render=function(A){var J=this._internalRoot;if(J===null)throw Error(qA(409));XU(A,J,null,null)};VU.prototype.unmount=mY.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var J=A.containerInfo;A0(function(){XU(null,A,null,null)}),J[jH]=null}};VU.prototype.unstable_scheduleHydration=function(A){if(A){var J=dN();A={blockedOn:null,target:A,priority:J};for(var H=0;H<A1.length&&J!==0&&J<A1[H].priority;H++);A1.splice(H,0,A),H===0&&cN(A)}};xN=function(A){switch(A.tag){case 3:var J=A.stateNode;if(J.current.memoizedState.isDehydrated){var H=VX(J.pendingLanes);H!==0&&(ZY(J,H|1),P8(J,qJ()),(w6&6)===0&&(JE=qJ()+500,F1()))}break;case 13:A0(function(){var E=yH(A,1);if(E!==null){var X=_J();$8(E,A,1,X)}}),xY(A,1)}};RY=function(A){if(A.tag===13){var J=yH(A,134217728);if(J!==null){var H=_J();$8(J,A,134217728,H)}xY(A,134217728)}};mN=function(A){if(A.tag===13){var J=P1(A),H=yH(A,J);if(H!==null){var E=_J();$8(H,A,J,E)}xY(A,J)}};dN=function(){return h6};nN=function(A,J){var H=h6;try{return h6=A,J()}finally{h6=H}};BR=function(A,J,H){switch(J){case"input":if(NR(A,H),J=H.name,H.type==="radio"&&J!=null){for(H=A;H.parentNode;)H=H.parentNode;H=H.querySelectorAll("input[name="+JSON.stringify(""+J)+'][type="radio"]');for(J=0;J<H.length;J++){var E=H[J];if(E!==A&&E.form===A.form){var X=eV(E);if(!X)throw Error(qA(90));WN(E),NR(E,X)}}}break;case"textarea":MN(A,H);break;case"select":J=H.value,J!=null&&n0(A,!!H.multiple,J,!1)}};wN=hY;fN=A0;PG={usingClientEntryPoint:!1,Events:[bX,l0,eV,KN,TN,hY]},HX={findFiberByHostInstance:i1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NG={bundleType:HX.bundleType,version:HX.version,rendererPackageName:HX.rendererPackageName,rendererConfig:HX.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:uH.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=vN(A),A===null?null:A.stateNode},findFiberByHostInstance:HX.findFiberByHostInstance||RG,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(f0=__REACT_DEVTOOLS_GLOBAL_HOOK__,!f0.isDisabled&&f0.supportsFiber)try{oV=f0.inject(NG),QH=f0}catch(A){}}qq=PG,Oq=hY});var Kq=x9((ND,Lq)=>{Dq();function Sq(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sq)}catch(A){console.error(A)}}Sq(),Lq.exports=nY});var Tq=x9((IG)=>{var mX=DH(Kq(),1);IG.createRoot=mX.createRoot,IG.hydrateRoot=mX.hydrateRoot;var qG});var jQ=DH(x1(),1),yQ=DH(Tq(),1);var mA=DH(x1(),1);var LU="171",k1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},D1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eq=0,I7=1,$q=2;var z7=1,KU=2,CH=3,mH=0,k8=1,_6=2,S1=0,rX=1,Q7=2,F7=3,C7=4,_q=5,WE=100,AI=101,JI=102,HI=103,EI=104,XI=200,VI=201,UI=202,ZI=203,RI=204,YI=205,PI=206,NI=207,qI=208,II=209,zI=210,QI=211,FI=212,CI=213,BI=214,TU=0,wU=1,fU=2,tX=3,jU=4,yU=5,vU=6,uU=7,GI=0,WI=1,OI=2,dH=0,MI=1,kI=2,DI=3,hU=4,SI=5,LI=6,KI=7;var OE=301,Z0=302,lU=303,pU=304,aX=306,q8=1000,gU=1001,bU=1002,L1=1003,xU=1004;var R0=1005;var XH=1006,ME=1007;var BH=1008;var K1=1009,TI=1010,wI=1011,eX=1012,B7=1013,kE=1014,T1=1015,$X=1016,G7=1017,W7=1018,DE=1020,fI=35902,jI=1021,yI=1022,b8=1023,vI=1024,uI=1025,mU=1026,_X=1027,hI=1028,O7=1029,lI=1030,M7=1031;var k7=1033,dU=33776,nU=33777,cU=33778,iU=33779,D7=35840,S7=35841,L7=35842,K7=35843,T7=36196,w7=37492,f7=37496,j7=37808,y7=37809,v7=37810,u7=37811,h7=37812,l7=37813,p7=37814,g7=37815,b7=37816,x7=37817,m7=37818,d7=37819,n7=37820,c7=37821,sU=36492,i7=36494,s7=36495,pI=36283,o7=36284,r7=36285,t7=36286;var a7=2300,e7=2301;var gI=3201;var bI=0,xI=1,nH="",w1="srgb",A9="srgb-linear",$7="linear",i6="srgb";var mI=512,dI=513,nI=514,_7=515,cI=516,iI=517,sI=518,oI=519;var AP="300 es",rI=2000;class cH{addEventListener(A,J){if(this._listeners===void 0)this._listeners={};let H=this._listeners;if(H[A]===void 0)H[A]=[];if(H[A].indexOf(J)===-1)H[A].push(J)}hasEventListener(A,J){if(this._listeners===void 0)return!1;let H=this._listeners;return H[A]!==void 0&&H[A].indexOf(J)!==-1}removeEventListener(A,J){if(this._listeners===void 0)return;let E=this._listeners[A];if(E!==void 0){let X=E.indexOf(J);if(X!==-1)E.splice(X,1)}}dispatchEvent(A){if(this._listeners===void 0)return;let H=this._listeners[A.type];if(H!==void 0){A.target=this;let E=H.slice(0);for(let X=0,V=E.length;X<V;X++)E[X].call(this,A);A.target=null}}}var cJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wq=1234567,sX=Math.PI/180,BE=180/Math.PI;function SE(){let A=Math.random()*4294967295|0,J=Math.random()*4294967295|0,H=Math.random()*4294967295|0,E=Math.random()*4294967295|0;return(cJ[A&255]+cJ[A>>8&255]+cJ[A>>16&255]+cJ[A>>24&255]+"-"+cJ[J&255]+cJ[J>>8&255]+"-"+cJ[J>>16&15|64]+cJ[J>>24&255]+"-"+cJ[H&63|128]+cJ[H>>8&255]+"-"+cJ[H>>16&255]+cJ[H>>24&255]+cJ[E&255]+cJ[E>>8&255]+cJ[E>>16&255]+cJ[E>>24&255]).toLowerCase()}function G6(A,J,H){return Math.max(J,Math.min(H,A))}function JP(A,J){return(A%J+J)%J}function zG(A,J,H,E,X){return E+(A-J)*(X-E)/(H-J)}function QG(A,J,H){if(A!==J)return(H-A)/(J-A);else return 0}function oX(A,J,H){return(1-H)*A+H*J}function FG(A,J,H,E){return oX(A,J,1-Math.exp(-H*E))}function CG(A,J=1){return J-Math.abs(JP(A,J*2)-J)}function BG(A,J,H){if(A<=J)return 0;if(A>=H)return 1;return A=(A-J)/(H-J),A*A*(3-2*A)}function GG(A,J,H){if(A<=J)return 0;if(A>=H)return 1;return A=(A-J)/(H-J),A*A*A*(A*(A*6-15)+10)}function WG(A,J){return A+Math.floor(Math.random()*(J-A+1))}function OG(A,J){return A+Math.random()*(J-A)}function MG(A){return A*(0.5-Math.random())}function kG(A){if(A!==void 0)wq=A;let J=wq+=1831565813;return J=Math.imul(J^J>>>15,J|1),J^=J+Math.imul(J^J>>>7,J|61),((J^J>>>14)>>>0)/4294967296}function DG(A){return A*sX}function SG(A){return A*BE}function LG(A){return(A&A-1)===0&&A!==0}function KG(A){return Math.pow(2,Math.ceil(Math.log(A)/Math.LN2))}function TG(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}function wG(A,J,H,E,X){let{cos:V,sin:U}=Math,Z=V(H/2),R=U(H/2),Y=V((J+E)/2),P=U((J+E)/2),N=V((J-E)/2),I=U((J-E)/2),z=V((E-J)/2),B=U((E-J)/2);switch(X){case"XYX":A.set(Z*P,R*N,R*I,Z*Y);break;case"YZY":A.set(R*I,Z*P,R*N,Z*Y);break;case"ZXZ":A.set(R*N,R*I,Z*P,Z*Y);break;case"XZX":A.set(Z*P,R*B,R*z,Z*Y);break;case"YXY":A.set(R*z,Z*P,R*B,Z*Y);break;case"ZYZ":A.set(R*B,R*z,Z*P,Z*Y);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+X)}}function FE(A,J){switch(J.constructor){case Float32Array:return A;case Uint32Array:return A/4294967295;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int32Array:return Math.max(A/2147483647,-1);case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw Error("Invalid component type.")}}function J8(A,J){switch(J.constructor){case Float32Array:return A;case Uint32Array:return Math.round(A*4294967295);case Uint16Array:return Math.round(A*65535);case Uint8Array:return Math.round(A*255);case Int32Array:return Math.round(A*2147483647);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw Error("Invalid component type.")}}var Y0={DEG2RAD:sX,RAD2DEG:BE,generateUUID:SE,clamp:G6,euclideanModulo:JP,mapLinear:zG,inverseLerp:QG,lerp:oX,damp:FG,pingpong:CG,smoothstep:BG,smootherstep:GG,randInt:WG,randFloat:OG,randFloatSpread:MG,seededRandom:kG,degToRad:DG,radToDeg:SG,isPowerOfTwo:LG,ceilPowerOfTwo:KG,floorPowerOfTwo:TG,setQuaternionFromProperEuler:wG,normalize:J8,denormalize:FE};class X6{constructor(A=0,J=0){X6.prototype.isVector2=!0,this.x=A,this.y=J}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,J){return this.x=A,this.y=J,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,J){switch(A){case 0:this.x=J;break;case 1:this.y=J;break;default:throw Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,J){return this.x=A.x+J.x,this.y=A.y+J.y,this}addScaledVector(A,J){return this.x+=A.x*J,this.y+=A.y*J,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,J){return this.x=A.x-J.x,this.y=A.y-J.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){let J=this.x,H=this.y,E=A.elements;return this.x=E[0]*J+E[3]*H+E[6],this.y=E[1]*J+E[4]*H+E[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,J){return this.x=G6(this.x,A.x,J.x),this.y=G6(this.y,A.y,J.y),this}clampScalar(A,J){return this.x=G6(this.x,A,J),this.y=G6(this.y,A,J),this}clampLength(A,J){let H=this.length();return this.divideScalar(H||1).multiplyScalar(G6(H,A,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){let J=Math.sqrt(this.lengthSq()*A.lengthSq());if(J===0)return Math.PI/2;let H=this.dot(A)/J;return Math.acos(G6(H,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let J=this.x-A.x,H=this.y-A.y;return J*J+H*H}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,J){return this.x+=(A.x-this.x)*J,this.y+=(A.y-this.y)*J,this}lerpVectors(A,J,H){return this.x=A.x+(J.x-A.x)*H,this.y=A.y+(J.y-A.y)*H,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,J=0){return this.x=A[J],this.y=A[J+1],this}toArray(A=[],J=0){return A[J]=this.x,A[J+1]=this.y,A}fromBufferAttribute(A,J){return this.x=A.getX(J),this.y=A.getY(J),this}rotateAround(A,J){let H=Math.cos(J),E=Math.sin(J),X=this.x-A.x,V=this.y-A.y;return this.x=X*H-V*E+A.x,this.y=X*E+V*H+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class C6{constructor(A,J,H,E,X,V,U,Z,R){if(C6.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0)this.set(A,J,H,E,X,V,U,Z,R)}set(A,J,H,E,X,V,U,Z,R){let Y=this.elements;return Y[0]=A,Y[1]=E,Y[2]=U,Y[3]=J,Y[4]=X,Y[5]=Z,Y[6]=H,Y[7]=V,Y[8]=R,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){let J=this.elements,H=A.elements;return J[0]=H[0],J[1]=H[1],J[2]=H[2],J[3]=H[3],J[4]=H[4],J[5]=H[5],J[6]=H[6],J[7]=H[7],J[8]=H[8],this}extractBasis(A,J,H){return A.setFromMatrix3Column(this,0),J.setFromMatrix3Column(this,1),H.setFromMatrix3Column(this,2),this}setFromMatrix4(A){let J=A.elements;return this.set(J[0],J[4],J[8],J[1],J[5],J[9],J[2],J[6],J[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,J){let H=A.elements,E=J.elements,X=this.elements,V=H[0],U=H[3],Z=H[6],R=H[1],Y=H[4],P=H[7],N=H[2],I=H[5],z=H[8],B=E[0],G=E[3],F=E[6],q=E[1],C=E[4],Q=E[7],D=E[2],f=E[5],S=E[8];return X[0]=V*B+U*q+Z*D,X[3]=V*G+U*C+Z*f,X[6]=V*F+U*Q+Z*S,X[1]=R*B+Y*q+P*D,X[4]=R*G+Y*C+P*f,X[7]=R*F+Y*Q+P*S,X[2]=N*B+I*q+z*D,X[5]=N*G+I*C+z*f,X[8]=N*F+I*Q+z*S,this}multiplyScalar(A){let J=this.elements;return J[0]*=A,J[3]*=A,J[6]*=A,J[1]*=A,J[4]*=A,J[7]*=A,J[2]*=A,J[5]*=A,J[8]*=A,this}determinant(){let A=this.elements,J=A[0],H=A[1],E=A[2],X=A[3],V=A[4],U=A[5],Z=A[6],R=A[7],Y=A[8];return J*V*Y-J*U*R-H*X*Y+H*U*Z+E*X*R-E*V*Z}invert(){let A=this.elements,J=A[0],H=A[1],E=A[2],X=A[3],V=A[4],U=A[5],Z=A[6],R=A[7],Y=A[8],P=Y*V-U*R,N=U*Z-Y*X,I=R*X-V*Z,z=J*P+H*N+E*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0);let B=1/z;return A[0]=P*B,A[1]=(E*R-Y*H)*B,A[2]=(U*H-E*V)*B,A[3]=N*B,A[4]=(Y*J-E*Z)*B,A[5]=(E*X-U*J)*B,A[6]=I*B,A[7]=(H*Z-R*J)*B,A[8]=(V*J-H*X)*B,this}transpose(){let A,J=this.elements;return A=J[1],J[1]=J[3],J[3]=A,A=J[2],J[2]=J[6],J[6]=A,A=J[5],J[5]=J[7],J[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){let J=this.elements;return A[0]=J[0],A[1]=J[3],A[2]=J[6],A[3]=J[1],A[4]=J[4],A[5]=J[7],A[6]=J[2],A[7]=J[5],A[8]=J[8],this}setUvTransform(A,J,H,E,X,V,U){let Z=Math.cos(X),R=Math.sin(X);return this.set(H*Z,H*R,-H*(Z*V+R*U)+V+A,-E*R,E*Z,-E*(-R*V+Z*U)+U+J,0,0,1),this}scale(A,J){return this.premultiply(cY.makeScale(A,J)),this}rotate(A){return this.premultiply(cY.makeRotation(-A)),this}translate(A,J){return this.premultiply(cY.makeTranslation(A,J)),this}makeTranslation(A,J){if(A.isVector2)this.set(1,0,A.x,0,1,A.y,0,0,1);else this.set(1,0,A,0,1,J,0,0,1);return this}makeRotation(A){let J=Math.cos(A),H=Math.sin(A);return this.set(J,-H,0,H,J,0,0,0,1),this}makeScale(A,J){return this.set(A,0,0,0,J,0,0,0,1),this}equals(A){let J=this.elements,H=A.elements;for(let E=0;E<9;E++)if(J[E]!==H[E])return!1;return!0}fromArray(A,J=0){for(let H=0;H<9;H++)this.elements[H]=A[H+J];return this}toArray(A=[],J=0){let H=this.elements;return A[J]=H[0],A[J+1]=H[1],A[J+2]=H[2],A[J+3]=H[3],A[J+4]=H[4],A[J+5]=H[5],A[J+6]=H[6],A[J+7]=H[7],A[J+8]=H[8],A}clone(){return new this.constructor().fromArray(this.elements)}}var cY=new C6;function HP(A){for(let J=A.length-1;J>=0;--J)if(A[J]>=65535)return!0;return!1}function GE(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}function tI(){let A=GE("canvas");return A.style.display="block",A}var fq={};function P0(A){if(A in fq)return;fq[A]=!0,console.warn(A)}function aI(A,J,H){return new Promise(function(E,X){function V(){switch(A.clientWaitSync(J,A.SYNC_FLUSH_COMMANDS_BIT,0)){case A.WAIT_FAILED:X();break;case A.TIMEOUT_EXPIRED:setTimeout(V,H);break;default:E()}}setTimeout(V,H)})}function eI(A){let J=A.elements;J[2]=0.5*J[2]+0.5*J[3],J[6]=0.5*J[6]+0.5*J[7],J[10]=0.5*J[10]+0.5*J[11],J[14]=0.5*J[14]+0.5*J[15]}function $I(A){let J=A.elements;if(J[11]===-1)J[10]=-J[10]-1,J[14]=-J[14];else J[10]=-J[10],J[14]=-J[14]+1}var jq=new C6().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),yq=new C6().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function fG(){let A={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(X,V,U){if(this.enabled===!1||V===U||!V||!U)return X;if(this.spaces[V].transfer==="srgb")X.r=xH(X.r),X.g=xH(X.g),X.b=xH(X.b);if(this.spaces[V].primaries!==this.spaces[U].primaries)X.applyMatrix3(this.spaces[V].toXYZ),X.applyMatrix3(this.spaces[U].fromXYZ);if(this.spaces[U].transfer==="srgb")X.r=CE(X.r),X.g=CE(X.g),X.b=CE(X.b);return X},fromWorkingColorSpace:function(X,V){return this.convert(X,this.workingColorSpace,V)},toWorkingColorSpace:function(X,V){return this.convert(X,V,this.workingColorSpace)},getPrimaries:function(X){return this.spaces[X].primaries},getTransfer:function(X){if(X==="")return"linear";return this.spaces[X].transfer},getLuminanceCoefficients:function(X,V=this.workingColorSpace){return X.fromArray(this.spaces[V].luminanceCoefficients)},define:function(X){Object.assign(this.spaces,X)},_getMatrix:function(X,V,U){return X.copy(this.spaces[V].toXYZ).multiply(this.spaces[U].fromXYZ)},_getDrawingBufferColorSpace:function(X){return this.spaces[X].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(X=this.workingColorSpace){return this.spaces[X].workingColorSpaceConfig.unpackColorSpace}},J=[0.64,0.33,0.3,0.6,0.15,0.06],H=[0.2126,0.7152,0.0722],E=[0.3127,0.329];return A.define({["srgb-linear"]:{primaries:J,whitePoint:E,transfer:"linear",toXYZ:jq,fromXYZ:yq,luminanceCoefficients:H,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:J,whitePoint:E,transfer:"srgb",toXYZ:jq,fromXYZ:yq,luminanceCoefficients:H,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),A}var f6=fG();function xH(A){return A<0.04045?A*0.0773993808:Math.pow(A*0.9478672986+0.0521327014,2.4)}function CE(A){return A<0.0031308?A*12.92:1.055*Math.pow(A,0.41666)-0.055}var XE;class EP{static getDataURL(A){if(/^data:/i.test(A.src))return A.src;if(typeof HTMLCanvasElement>"u")return A.src;let J;if(A instanceof HTMLCanvasElement)J=A;else{if(XE===void 0)XE=GE("canvas");XE.width=A.width,XE.height=A.height;let H=XE.getContext("2d");if(A instanceof ImageData)H.putImageData(A,0,0);else H.drawImage(A,0,0,A.width,A.height);J=XE}if(J.width>2048||J.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),J.toDataURL("image/jpeg",0.6);else return J.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let J=GE("canvas");J.width=A.width,J.height=A.height;let H=J.getContext("2d");H.drawImage(A,0,0,A.width,A.height);let E=H.getImageData(0,0,A.width,A.height),X=E.data;for(let V=0;V<X.length;V++)X[V]=xH(X[V]/255)*255;return H.putImageData(E,0,0),J}else if(A.data){let J=A.data.slice(0);for(let H=0;H<J.length;H++)if(J instanceof Uint8Array||J instanceof Uint8ClampedArray)J[H]=Math.floor(xH(J[H]/255)*255);else J[H]=xH(J[H]);return{data:J,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}var jG=0;class LE{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jG++}),this.uuid=SE(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){if(A===!0)this.version++}toJSON(A){let J=A===void 0||typeof A==="string";if(!J&&A.images[this.uuid]!==void 0)return A.images[this.uuid];let H={uuid:this.uuid,url:""},E=this.data;if(E!==null){let X;if(Array.isArray(E)){X=[];for(let V=0,U=E.length;V<U;V++)if(E[V].isDataTexture)X.push(iY(E[V].image));else X.push(iY(E[V]))}else X=iY(E);H.url=X}if(!J)A.images[this.uuid]=H;return H}}function iY(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap)return EP.getDataURL(A);else if(A.data)return{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var yG=0;class hJ extends cH{constructor(A=hJ.DEFAULT_IMAGE,J=hJ.DEFAULT_MAPPING,H=1001,E=1001,X=1006,V=1008,U=1023,Z=1009,R=hJ.DEFAULT_ANISOTROPY,Y=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:yG++}),this.uuid=SE(),this.name="",this.source=new LE(A),this.mipmaps=[],this.mapping=J,this.channel=0,this.wrapS=H,this.wrapT=E,this.magFilter=X,this.minFilter=V,this.anisotropy=R,this.format=U,this.internalFormat=null,this.type=Z,this.offset=new X6(0,0),this.repeat=new X6(1,1),this.center=new X6(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new C6,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=Y,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){let J=A===void 0||typeof A==="string";if(!J&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];let H={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)H.userData=this.userData;if(!J)A.textures[this.uuid]=H;return H}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==300)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case 1000:A.x=A.x-Math.floor(A.x);break;case 1001:A.x=A.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(A.x)%2)===1)A.x=Math.ceil(A.x)-A.x;else A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case 1000:A.y=A.y-Math.floor(A.y);break;case 1001:A.y=A.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(A.y)%2)===1)A.y=Math.ceil(A.y)-A.y;else A.y=A.y-Math.floor(A.y);break}if(this.flipY)A.y=1-A.y;return A}set needsUpdate(A){if(A===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(A){if(A===!0)this.pmremVersion++}}hJ.DEFAULT_IMAGE=null;hJ.DEFAULT_MAPPING=300;hJ.DEFAULT_ANISOTROPY=1;class UJ{constructor(A=0,J=0,H=0,E=1){UJ.prototype.isVector4=!0,this.x=A,this.y=J,this.z=H,this.w=E}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,J,H,E){return this.x=A,this.y=J,this.z=H,this.w=E,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,J){switch(A){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;case 3:this.w=J;break;default:throw Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,J){return this.x=A.x+J.x,this.y=A.y+J.y,this.z=A.z+J.z,this.w=A.w+J.w,this}addScaledVector(A,J){return this.x+=A.x*J,this.y+=A.y*J,this.z+=A.z*J,this.w+=A.w*J,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,J){return this.x=A.x-J.x,this.y=A.y-J.y,this.z=A.z-J.z,this.w=A.w-J.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){let J=this.x,H=this.y,E=this.z,X=this.w,V=A.elements;return this.x=V[0]*J+V[4]*H+V[8]*E+V[12]*X,this.y=V[1]*J+V[5]*H+V[9]*E+V[13]*X,this.z=V[2]*J+V[6]*H+V[10]*E+V[14]*X,this.w=V[3]*J+V[7]*H+V[11]*E+V[15]*X,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);let J=Math.sqrt(1-A.w*A.w);if(J<0.0001)this.x=1,this.y=0,this.z=0;else this.x=A.x/J,this.y=A.y/J,this.z=A.z/J;return this}setAxisAngleFromRotationMatrix(A){let J,H,E,X,V=0.01,U=0.1,Z=A.elements,R=Z[0],Y=Z[4],P=Z[8],N=Z[1],I=Z[5],z=Z[9],B=Z[2],G=Z[6],F=Z[10];if(Math.abs(Y-N)<0.01&&Math.abs(P-B)<0.01&&Math.abs(z-G)<0.01){if(Math.abs(Y+N)<0.1&&Math.abs(P+B)<0.1&&Math.abs(z+G)<0.1&&Math.abs(R+I+F-3)<0.1)return this.set(1,0,0,0),this;J=Math.PI;let C=(R+1)/2,Q=(I+1)/2,D=(F+1)/2,f=(Y+N)/4,S=(P+B)/4,L=(z+G)/4;if(C>Q&&C>D)if(C<0.01)H=0,E=0.707106781,X=0.707106781;else H=Math.sqrt(C),E=f/H,X=S/H;else if(Q>D)if(Q<0.01)H=0.707106781,E=0,X=0.707106781;else E=Math.sqrt(Q),H=f/E,X=L/E;else if(D<0.01)H=0.707106781,E=0.707106781,X=0;else X=Math.sqrt(D),H=S/X,E=L/X;return this.set(H,E,X,J),this}let q=Math.sqrt((G-z)*(G-z)+(P-B)*(P-B)+(N-Y)*(N-Y));if(Math.abs(q)<0.001)q=1;return this.x=(G-z)/q,this.y=(P-B)/q,this.z=(N-Y)/q,this.w=Math.acos((R+I+F-1)/2),this}setFromMatrixPosition(A){let J=A.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this.w=J[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,J){return this.x=G6(this.x,A.x,J.x),this.y=G6(this.y,A.y,J.y),this.z=G6(this.z,A.z,J.z),this.w=G6(this.w,A.w,J.w),this}clampScalar(A,J){return this.x=G6(this.x,A,J),this.y=G6(this.y,A,J),this.z=G6(this.z,A,J),this.w=G6(this.w,A,J),this}clampLength(A,J){let H=this.length();return this.divideScalar(H||1).multiplyScalar(G6(H,A,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,J){return this.x+=(A.x-this.x)*J,this.y+=(A.y-this.y)*J,this.z+=(A.z-this.z)*J,this.w+=(A.w-this.w)*J,this}lerpVectors(A,J,H){return this.x=A.x+(J.x-A.x)*H,this.y=A.y+(J.y-A.y)*H,this.z=A.z+(J.z-A.z)*H,this.w=A.w+(J.w-A.w)*H,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,J=0){return this.x=A[J],this.y=A[J+1],this.z=A[J+2],this.w=A[J+3],this}toArray(A=[],J=0){return A[J]=this.x,A[J+1]=this.y,A[J+2]=this.z,A[J+3]=this.w,A}fromBufferAttribute(A,J){return this.x=A.getX(J),this.y=A.getY(J),this.z=A.getZ(J),this.w=A.getW(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XP extends cH{constructor(A=1,J=1,H={}){super();this.isRenderTarget=!0,this.width=A,this.height=J,this.depth=1,this.scissor=new UJ(0,0,A,J),this.scissorTest=!1,this.viewport=new UJ(0,0,A,J);let E={width:A,height:J,depth:1};H=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},H);let X=new hJ(E,H.mapping,H.wrapS,H.wrapT,H.magFilter,H.minFilter,H.format,H.type,H.anisotropy,H.colorSpace);X.flipY=!1,X.generateMipmaps=H.generateMipmaps,X.internalFormat=H.internalFormat,this.textures=[];let V=H.count;for(let U=0;U<V;U++)this.textures[U]=X.clone(),this.textures[U].isRenderTargetTexture=!0;this.depthBuffer=H.depthBuffer,this.stencilBuffer=H.stencilBuffer,this.resolveDepthBuffer=H.resolveDepthBuffer,this.resolveStencilBuffer=H.resolveStencilBuffer,this.depthTexture=H.depthTexture,this.samples=H.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,J,H=1){if(this.width!==A||this.height!==J||this.depth!==H){this.width=A,this.height=J,this.depth=H;for(let E=0,X=this.textures.length;E<X;E++)this.textures[E].image.width=A,this.textures[E].image.height=J,this.textures[E].image.depth=H;this.dispose()}this.viewport.set(0,0,A,J),this.scissor.set(0,0,A,J)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let H=0,E=A.textures.length;H<E;H++)this.textures[H]=A.textures[H].clone(),this.textures[H].isRenderTargetTexture=!0;let J=Object.assign({},A.texture.image);if(this.texture.source=new LE(J),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null)this.depthTexture=A.depthTexture.clone();return this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iH extends XP{constructor(A=1,J=1,H={}){super(A,J,H);this.isWebGLRenderTarget=!0}}class oU extends hJ{constructor(A=null,J=1,H=1,E=1){super(null);this.isDataArrayTexture=!0,this.image={data:A,width:J,height:H,depth:E},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class VP extends hJ{constructor(A=null,J=1,H=1,E=1){super(null);this.isData3DTexture=!0,this.image={data:A,width:J,height:H,depth:E},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class D8{constructor(A=0,J=0,H=0,E=1){this.isQuaternion=!0,this._x=A,this._y=J,this._z=H,this._w=E}static slerpFlat(A,J,H,E,X,V,U){let Z=H[E+0],R=H[E+1],Y=H[E+2],P=H[E+3],N=X[V+0],I=X[V+1],z=X[V+2],B=X[V+3];if(U===0){A[J+0]=Z,A[J+1]=R,A[J+2]=Y,A[J+3]=P;return}if(U===1){A[J+0]=N,A[J+1]=I,A[J+2]=z,A[J+3]=B;return}if(P!==B||Z!==N||R!==I||Y!==z){let G=1-U,F=Z*N+R*I+Y*z+P*B,q=F>=0?1:-1,C=1-F*F;if(C>Number.EPSILON){let D=Math.sqrt(C),f=Math.atan2(D,F*q);G=Math.sin(G*f)/D,U=Math.sin(U*f)/D}let Q=U*q;if(Z=Z*G+N*Q,R=R*G+I*Q,Y=Y*G+z*Q,P=P*G+B*Q,G===1-U){let D=1/Math.sqrt(Z*Z+R*R+Y*Y+P*P);Z*=D,R*=D,Y*=D,P*=D}}A[J]=Z,A[J+1]=R,A[J+2]=Y,A[J+3]=P}static multiplyQuaternionsFlat(A,J,H,E,X,V){let U=H[E],Z=H[E+1],R=H[E+2],Y=H[E+3],P=X[V],N=X[V+1],I=X[V+2],z=X[V+3];return A[J]=U*z+Y*P+Z*I-R*N,A[J+1]=Z*z+Y*N+R*P-U*I,A[J+2]=R*z+Y*I+U*N-Z*P,A[J+3]=Y*z-U*P-Z*N-R*I,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,J,H,E){return this._x=A,this._y=J,this._z=H,this._w=E,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,J=!0){let{_x:H,_y:E,_z:X,_order:V}=A,U=Math.cos,Z=Math.sin,R=U(H/2),Y=U(E/2),P=U(X/2),N=Z(H/2),I=Z(E/2),z=Z(X/2);switch(V){case"XYZ":this._x=N*Y*P+R*I*z,this._y=R*I*P-N*Y*z,this._z=R*Y*z+N*I*P,this._w=R*Y*P-N*I*z;break;case"YXZ":this._x=N*Y*P+R*I*z,this._y=R*I*P-N*Y*z,this._z=R*Y*z-N*I*P,this._w=R*Y*P+N*I*z;break;case"ZXY":this._x=N*Y*P-R*I*z,this._y=R*I*P+N*Y*z,this._z=R*Y*z+N*I*P,this._w=R*Y*P-N*I*z;break;case"ZYX":this._x=N*Y*P-R*I*z,this._y=R*I*P+N*Y*z,this._z=R*Y*z-N*I*P,this._w=R*Y*P+N*I*z;break;case"YZX":this._x=N*Y*P+R*I*z,this._y=R*I*P+N*Y*z,this._z=R*Y*z-N*I*P,this._w=R*Y*P-N*I*z;break;case"XZY":this._x=N*Y*P-R*I*z,this._y=R*I*P-N*Y*z,this._z=R*Y*z+N*I*P,this._w=R*Y*P+N*I*z;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+V)}if(J===!0)this._onChangeCallback();return this}setFromAxisAngle(A,J){let H=J/2,E=Math.sin(H);return this._x=A.x*E,this._y=A.y*E,this._z=A.z*E,this._w=Math.cos(H),this._onChangeCallback(),this}setFromRotationMatrix(A){let J=A.elements,H=J[0],E=J[4],X=J[8],V=J[1],U=J[5],Z=J[9],R=J[2],Y=J[6],P=J[10],N=H+U+P;if(N>0){let I=0.5/Math.sqrt(N+1);this._w=0.25/I,this._x=(Y-Z)*I,this._y=(X-R)*I,this._z=(V-E)*I}else if(H>U&&H>P){let I=2*Math.sqrt(1+H-U-P);this._w=(Y-Z)/I,this._x=0.25*I,this._y=(E+V)/I,this._z=(X+R)/I}else if(U>P){let I=2*Math.sqrt(1+U-H-P);this._w=(X-R)/I,this._x=(E+V)/I,this._y=0.25*I,this._z=(Z+Y)/I}else{let I=2*Math.sqrt(1+P-H-U);this._w=(V-E)/I,this._x=(X+R)/I,this._y=(Z+Y)/I,this._z=0.25*I}return this._onChangeCallback(),this}setFromUnitVectors(A,J){let H=A.dot(J)+1;if(H<Number.EPSILON)if(H=0,Math.abs(A.x)>Math.abs(A.z))this._x=-A.y,this._y=A.x,this._z=0,this._w=H;else this._x=0,this._y=-A.z,this._z=A.y,this._w=H;else this._x=A.y*J.z-A.z*J.y,this._y=A.z*J.x-A.x*J.z,this._z=A.x*J.y-A.y*J.x,this._w=H;return this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(G6(this.dot(A),-1,1)))}rotateTowards(A,J){let H=this.angleTo(A);if(H===0)return this;let E=Math.min(1,J/H);return this.slerp(A,E),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();if(A===0)this._x=0,this._y=0,this._z=0,this._w=1;else A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A;return this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,J){let{_x:H,_y:E,_z:X,_w:V}=A,U=J._x,Z=J._y,R=J._z,Y=J._w;return this._x=H*Y+V*U+E*R-X*Z,this._y=E*Y+V*Z+X*U-H*R,this._z=X*Y+V*R+H*Z-E*U,this._w=V*Y-H*U-E*Z-X*R,this._onChangeCallback(),this}slerp(A,J){if(J===0)return this;if(J===1)return this.copy(A);let H=this._x,E=this._y,X=this._z,V=this._w,U=V*A._w+H*A._x+E*A._y+X*A._z;if(U<0)this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,U=-U;else this.copy(A);if(U>=1)return this._w=V,this._x=H,this._y=E,this._z=X,this;let Z=1-U*U;if(Z<=Number.EPSILON){let I=1-J;return this._w=I*V+J*this._w,this._x=I*H+J*this._x,this._y=I*E+J*this._y,this._z=I*X+J*this._z,this.normalize(),this}let R=Math.sqrt(Z),Y=Math.atan2(R,U),P=Math.sin((1-J)*Y)/R,N=Math.sin(J*Y)/R;return this._w=V*P+this._w*N,this._x=H*P+this._x*N,this._y=E*P+this._y*N,this._z=X*P+this._z*N,this._onChangeCallback(),this}slerpQuaternions(A,J,H){return this.copy(A).slerp(J,H)}random(){let A=2*Math.PI*Math.random(),J=2*Math.PI*Math.random(),H=Math.random(),E=Math.sqrt(1-H),X=Math.sqrt(H);return this.set(E*Math.sin(A),E*Math.cos(A),X*Math.sin(J),X*Math.cos(J))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,J=0){return this._x=A[J],this._y=A[J+1],this._z=A[J+2],this._w=A[J+3],this._onChangeCallback(),this}toArray(A=[],J=0){return A[J]=this._x,A[J+1]=this._y,A[J+2]=this._z,A[J+3]=this._w,A}fromBufferAttribute(A,J){return this._x=A.getX(J),this._y=A.getY(J),this._z=A.getZ(J),this._w=A.getW(J),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class g{constructor(A=0,J=0,H=0){g.prototype.isVector3=!0,this.x=A,this.y=J,this.z=H}set(A,J,H){if(H===void 0)H=this.z;return this.x=A,this.y=J,this.z=H,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,J){switch(A){case 0:this.x=J;break;case 1:this.y=J;break;case 2:this.z=J;break;default:throw Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,J){return this.x=A.x+J.x,this.y=A.y+J.y,this.z=A.z+J.z,this}addScaledVector(A,J){return this.x+=A.x*J,this.y+=A.y*J,this.z+=A.z*J,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,J){return this.x=A.x-J.x,this.y=A.y-J.y,this.z=A.z-J.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,J){return this.x=A.x*J.x,this.y=A.y*J.y,this.z=A.z*J.z,this}applyEuler(A){return this.applyQuaternion(vq.setFromEuler(A))}applyAxisAngle(A,J){return this.applyQuaternion(vq.setFromAxisAngle(A,J))}applyMatrix3(A){let J=this.x,H=this.y,E=this.z,X=A.elements;return this.x=X[0]*J+X[3]*H+X[6]*E,this.y=X[1]*J+X[4]*H+X[7]*E,this.z=X[2]*J+X[5]*H+X[8]*E,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){let J=this.x,H=this.y,E=this.z,X=A.elements,V=1/(X[3]*J+X[7]*H+X[11]*E+X[15]);return this.x=(X[0]*J+X[4]*H+X[8]*E+X[12])*V,this.y=(X[1]*J+X[5]*H+X[9]*E+X[13])*V,this.z=(X[2]*J+X[6]*H+X[10]*E+X[14])*V,this}applyQuaternion(A){let J=this.x,H=this.y,E=this.z,X=A.x,V=A.y,U=A.z,Z=A.w,R=2*(V*E-U*H),Y=2*(U*J-X*E),P=2*(X*H-V*J);return this.x=J+Z*R+V*P-U*Y,this.y=H+Z*Y+U*R-X*P,this.z=E+Z*P+X*Y-V*R,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){let J=this.x,H=this.y,E=this.z,X=A.elements;return this.x=X[0]*J+X[4]*H+X[8]*E,this.y=X[1]*J+X[5]*H+X[9]*E,this.z=X[2]*J+X[6]*H+X[10]*E,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,J){return this.x=G6(this.x,A.x,J.x),this.y=G6(this.y,A.y,J.y),this.z=G6(this.z,A.z,J.z),this}clampScalar(A,J){return this.x=G6(this.x,A,J),this.y=G6(this.y,A,J),this.z=G6(this.z,A,J),this}clampLength(A,J){let H=this.length();return this.divideScalar(H||1).multiplyScalar(G6(H,A,J))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,J){return this.x+=(A.x-this.x)*J,this.y+=(A.y-this.y)*J,this.z+=(A.z-this.z)*J,this}lerpVectors(A,J,H){return this.x=A.x+(J.x-A.x)*H,this.y=A.y+(J.y-A.y)*H,this.z=A.z+(J.z-A.z)*H,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,J){let{x:H,y:E,z:X}=A,V=J.x,U=J.y,Z=J.z;return this.x=E*Z-X*U,this.y=X*V-H*Z,this.z=H*U-E*V,this}projectOnVector(A){let J=A.lengthSq();if(J===0)return this.set(0,0,0);let H=A.dot(this)/J;return this.copy(A).multiplyScalar(H)}projectOnPlane(A){return sY.copy(this).projectOnVector(A),this.sub(sY)}reflect(A){return this.sub(sY.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){let J=Math.sqrt(this.lengthSq()*A.lengthSq());if(J===0)return Math.PI/2;let H=this.dot(A)/J;return Math.acos(G6(H,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let J=this.x-A.x,H=this.y-A.y,E=this.z-A.z;return J*J+H*H+E*E}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,J,H){let E=Math.sin(J)*A;return this.x=E*Math.sin(H),this.y=Math.cos(J)*A,this.z=E*Math.cos(H),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,J,H){return this.x=A*Math.sin(J),this.y=H,this.z=A*Math.cos(J),this}setFromMatrixPosition(A){let J=A.elements;return this.x=J[12],this.y=J[13],this.z=J[14],this}setFromMatrixScale(A){let J=this.setFromMatrixColumn(A,0).length(),H=this.setFromMatrixColumn(A,1).length(),E=this.setFromMatrixColumn(A,2).length();return this.x=J,this.y=H,this.z=E,this}setFromMatrixColumn(A,J){return this.fromArray(A.elements,J*4)}setFromMatrix3Column(A,J){return this.fromArray(A.elements,J*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,J=0){return this.x=A[J],this.y=A[J+1],this.z=A[J+2],this}toArray(A=[],J=0){return A[J]=this.x,A[J+1]=this.y,A[J+2]=this.z,A}fromBufferAttribute(A,J){return this.x=A.getX(J),this.y=A.getY(J),this.z=A.getZ(J),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let A=Math.random()*Math.PI*2,J=Math.random()*2-1,H=Math.sqrt(1-J*J);return this.x=H*Math.cos(A),this.y=J,this.z=H*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var sY=new g,vq=new D8;class N0{constructor(A=new g(1/0,1/0,1/0),J=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=J}set(A,J){return this.min.copy(A),this.max.copy(J),this}setFromArray(A){this.makeEmpty();for(let J=0,H=A.length;J<H;J+=3)this.expandByPoint(AH.fromArray(A,J));return this}setFromBufferAttribute(A){this.makeEmpty();for(let J=0,H=A.count;J<H;J++)this.expandByPoint(AH.fromBufferAttribute(A,J));return this}setFromPoints(A){this.makeEmpty();for(let J=0,H=A.length;J<H;J++)this.expandByPoint(A[J]);return this}setFromCenterAndSize(A,J){let H=AH.copy(J).multiplyScalar(0.5);return this.min.copy(A).sub(H),this.max.copy(A).add(H),this}setFromObject(A,J=!1){return this.makeEmpty(),this.expandByObject(A,J)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,J=!1){A.updateWorldMatrix(!1,!1);let H=A.geometry;if(H!==void 0){let X=H.getAttribute("position");if(J===!0&&X!==void 0&&A.isInstancedMesh!==!0)for(let V=0,U=X.count;V<U;V++){if(A.isMesh===!0)A.getVertexPosition(V,AH);else AH.fromBufferAttribute(X,V);AH.applyMatrix4(A.matrixWorld),this.expandByPoint(AH)}else{if(A.boundingBox!==void 0){if(A.boundingBox===null)A.computeBoundingBox();RU.copy(A.boundingBox)}else{if(H.boundingBox===null)H.computeBoundingBox();RU.copy(H.boundingBox)}RU.applyMatrix4(A.matrixWorld),this.union(RU)}}let E=A.children;for(let X=0,V=E.length;X<V;X++)this.expandByObject(E[X],J);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,J){return J.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,AH),AH.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let J,H;if(A.normal.x>0)J=A.normal.x*this.min.x,H=A.normal.x*this.max.x;else J=A.normal.x*this.max.x,H=A.normal.x*this.min.x;if(A.normal.y>0)J+=A.normal.y*this.min.y,H+=A.normal.y*this.max.y;else J+=A.normal.y*this.max.y,H+=A.normal.y*this.min.y;if(A.normal.z>0)J+=A.normal.z*this.min.z,H+=A.normal.z*this.max.z;else J+=A.normal.z*this.max.z,H+=A.normal.z*this.min.z;return J<=-A.constant&&H>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(dX),YU.subVectors(this.max,dX),VE.subVectors(A.a,dX),UE.subVectors(A.b,dX),ZE.subVectors(A.c,dX),C1.subVectors(UE,VE),B1.subVectors(ZE,UE),E0.subVectors(VE,ZE);let J=[0,-C1.z,C1.y,0,-B1.z,B1.y,0,-E0.z,E0.y,C1.z,0,-C1.x,B1.z,0,-B1.x,E0.z,0,-E0.x,-C1.y,C1.x,0,-B1.y,B1.x,0,-E0.y,E0.x,0];if(!oY(J,VE,UE,ZE,YU))return!1;if(J=[1,0,0,0,1,0,0,0,1],!oY(J,VE,UE,ZE,YU))return!1;return PU.crossVectors(C1,B1),J=[PU.x,PU.y,PU.z],oY(J,VE,UE,ZE,YU)}clampPoint(A,J){return J.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,AH).distanceTo(A)}getBoundingSphere(A){if(this.isEmpty())A.makeEmpty();else this.getCenter(A.center),A.radius=this.getSize(AH).length()*0.5;return A}intersect(A){if(this.min.max(A.min),this.max.min(A.max),this.isEmpty())this.makeEmpty();return this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){if(this.isEmpty())return this;return hH[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),hH[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),hH[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),hH[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),hH[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),hH[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),hH[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),hH[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(hH),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}var hH=[new g,new g,new g,new g,new g,new g,new g,new g],AH=new g,RU=new N0,VE=new g,UE=new g,ZE=new g,C1=new g,B1=new g,E0=new g,dX=new g,YU=new g,PU=new g,X0=new g;function oY(A,J,H,E,X){for(let V=0,U=A.length-3;V<=U;V+=3){X0.fromArray(A,V);let Z=X.x*Math.abs(X0.x)+X.y*Math.abs(X0.y)+X.z*Math.abs(X0.z),R=J.dot(X0),Y=H.dot(X0),P=E.dot(X0);if(Math.max(-Math.max(R,Y,P),Math.min(R,Y,P))>Z)return!1}return!0}var vG=new N0,nX=new g,rY=new g;class J9{constructor(A=new g,J=-1){this.isSphere=!0,this.center=A,this.radius=J}set(A,J){return this.center.copy(A),this.radius=J,this}setFromPoints(A,J){let H=this.center;if(J!==void 0)H.copy(J);else vG.setFromPoints(A).getCenter(H);let E=0;for(let X=0,V=A.length;X<V;X++)E=Math.max(E,H.distanceToSquared(A[X]));return this.radius=Math.sqrt(E),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){let J=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=J*J}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,J){let H=this.center.distanceToSquared(A);if(J.copy(A),H>this.radius*this.radius)J.sub(this.center).normalize(),J.multiplyScalar(this.radius).add(this.center);return J}getBoundingBox(A){if(this.isEmpty())return A.makeEmpty(),A;return A.set(this.center,this.center),A.expandByScalar(this.radius),A}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;nX.subVectors(A,this.center);let J=nX.lengthSq();if(J>this.radius*this.radius){let H=Math.sqrt(J),E=(H-this.radius)*0.5;this.center.addScaledVector(nX,E/H),this.radius+=E}return this}union(A){if(A.isEmpty())return this;if(this.isEmpty())return this.copy(A),this;if(this.center.equals(A.center)===!0)this.radius=Math.max(this.radius,A.radius);else rY.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(nX.copy(A.center).add(rY)),this.expandByPoint(nX.copy(A.center).sub(rY));return this}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}var lH=new g,tY=new g,NU=new g,G1=new g,aY=new g,qU=new g,eY=new g;class KE{constructor(A=new g,J=new g(0,0,-1)){this.origin=A,this.direction=J}set(A,J){return this.origin.copy(A),this.direction.copy(J),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,J){return J.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,lH)),this}closestPointToPoint(A,J){J.subVectors(A,this.origin);let H=J.dot(this.direction);if(H<0)return J.copy(this.origin);return J.copy(this.origin).addScaledVector(this.direction,H)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){let J=lH.subVectors(A,this.origin).dot(this.direction);if(J<0)return this.origin.distanceToSquared(A);return lH.copy(this.origin).addScaledVector(this.direction,J),lH.distanceToSquared(A)}distanceSqToSegment(A,J,H,E){tY.copy(A).add(J).multiplyScalar(0.5),NU.copy(J).sub(A).normalize(),G1.copy(this.origin).sub(tY);let X=A.distanceTo(J)*0.5,V=-this.direction.dot(NU),U=G1.dot(this.direction),Z=-G1.dot(NU),R=G1.lengthSq(),Y=Math.abs(1-V*V),P,N,I,z;if(Y>0)if(P=V*Z-U,N=V*U-Z,z=X*Y,P>=0)if(N>=-z)if(N<=z){let B=1/Y;P*=B,N*=B,I=P*(P+V*N+2*U)+N*(V*P+N+2*Z)+R}else N=X,P=Math.max(0,-(V*N+U)),I=-P*P+N*(N+2*Z)+R;else N=-X,P=Math.max(0,-(V*N+U)),I=-P*P+N*(N+2*Z)+R;else if(N<=-z)P=Math.max(0,-(-V*X+U)),N=P>0?-X:Math.min(Math.max(-X,-Z),X),I=-P*P+N*(N+2*Z)+R;else if(N<=z)P=0,N=Math.min(Math.max(-X,-Z),X),I=N*(N+2*Z)+R;else P=Math.max(0,-(V*X+U)),N=P>0?X:Math.min(Math.max(-X,-Z),X),I=-P*P+N*(N+2*Z)+R;else N=V>0?-X:X,P=Math.max(0,-(V*N+U)),I=-P*P+N*(N+2*Z)+R;if(H)H.copy(this.origin).addScaledVector(this.direction,P);if(E)E.copy(tY).addScaledVector(NU,N);return I}intersectSphere(A,J){lH.subVectors(A.center,this.origin);let H=lH.dot(this.direction),E=lH.dot(lH)-H*H,X=A.radius*A.radius;if(E>X)return null;let V=Math.sqrt(X-E),U=H-V,Z=H+V;if(Z<0)return null;if(U<0)return this.at(Z,J);return this.at(U,J)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){let J=A.normal.dot(this.direction);if(J===0){if(A.distanceToPoint(this.origin)===0)return 0;return null}let H=-(this.origin.dot(A.normal)+A.constant)/J;return H>=0?H:null}intersectPlane(A,J){let H=this.distanceToPlane(A);if(H===null)return null;return this.at(H,J)}intersectsPlane(A){let J=A.distanceToPoint(this.origin);if(J===0)return!0;if(A.normal.dot(this.direction)*J<0)return!0;return!1}intersectBox(A,J){let H,E,X,V,U,Z,R=1/this.direction.x,Y=1/this.direction.y,P=1/this.direction.z,N=this.origin;if(R>=0)H=(A.min.x-N.x)*R,E=(A.max.x-N.x)*R;else H=(A.max.x-N.x)*R,E=(A.min.x-N.x)*R;if(Y>=0)X=(A.min.y-N.y)*Y,V=(A.max.y-N.y)*Y;else X=(A.max.y-N.y)*Y,V=(A.min.y-N.y)*Y;if(H>V||X>E)return null;if(X>H||isNaN(H))H=X;if(V<E||isNaN(E))E=V;if(P>=0)U=(A.min.z-N.z)*P,Z=(A.max.z-N.z)*P;else U=(A.max.z-N.z)*P,Z=(A.min.z-N.z)*P;if(H>Z||U>E)return null;if(U>H||H!==H)H=U;if(Z<E||E!==E)E=Z;if(E<0)return null;return this.at(H>=0?H:E,J)}intersectsBox(A){return this.intersectBox(A,lH)!==null}intersectTriangle(A,J,H,E,X){aY.subVectors(J,A),qU.subVectors(H,A),eY.crossVectors(aY,qU);let V=this.direction.dot(eY),U;if(V>0){if(E)return null;U=1}else if(V<0)U=-1,V=-V;else return null;G1.subVectors(this.origin,A);let Z=U*this.direction.dot(qU.crossVectors(G1,qU));if(Z<0)return null;let R=U*this.direction.dot(aY.cross(G1));if(R<0)return null;if(Z+R>V)return null;let Y=-U*G1.dot(eY);if(Y<0)return null;return this.at(Y/V,X)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x6{constructor(A,J,H,E,X,V,U,Z,R,Y,P,N,I,z,B,G){if(x6.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0)this.set(A,J,H,E,X,V,U,Z,R,Y,P,N,I,z,B,G)}set(A,J,H,E,X,V,U,Z,R,Y,P,N,I,z,B,G){let F=this.elements;return F[0]=A,F[4]=J,F[8]=H,F[12]=E,F[1]=X,F[5]=V,F[9]=U,F[13]=Z,F[2]=R,F[6]=Y,F[10]=P,F[14]=N,F[3]=I,F[7]=z,F[11]=B,F[15]=G,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new x6().fromArray(this.elements)}copy(A){let J=this.elements,H=A.elements;return J[0]=H[0],J[1]=H[1],J[2]=H[2],J[3]=H[3],J[4]=H[4],J[5]=H[5],J[6]=H[6],J[7]=H[7],J[8]=H[8],J[9]=H[9],J[10]=H[10],J[11]=H[11],J[12]=H[12],J[13]=H[13],J[14]=H[14],J[15]=H[15],this}copyPosition(A){let J=this.elements,H=A.elements;return J[12]=H[12],J[13]=H[13],J[14]=H[14],this}setFromMatrix3(A){let J=A.elements;return this.set(J[0],J[3],J[6],0,J[1],J[4],J[7],0,J[2],J[5],J[8],0,0,0,0,1),this}extractBasis(A,J,H){return A.setFromMatrixColumn(this,0),J.setFromMatrixColumn(this,1),H.setFromMatrixColumn(this,2),this}makeBasis(A,J,H){return this.set(A.x,J.x,H.x,0,A.y,J.y,H.y,0,A.z,J.z,H.z,0,0,0,0,1),this}extractRotation(A){let J=this.elements,H=A.elements,E=1/RE.setFromMatrixColumn(A,0).length(),X=1/RE.setFromMatrixColumn(A,1).length(),V=1/RE.setFromMatrixColumn(A,2).length();return J[0]=H[0]*E,J[1]=H[1]*E,J[2]=H[2]*E,J[3]=0,J[4]=H[4]*X,J[5]=H[5]*X,J[6]=H[6]*X,J[7]=0,J[8]=H[8]*V,J[9]=H[9]*V,J[10]=H[10]*V,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromEuler(A){let J=this.elements,H=A.x,E=A.y,X=A.z,V=Math.cos(H),U=Math.sin(H),Z=Math.cos(E),R=Math.sin(E),Y=Math.cos(X),P=Math.sin(X);if(A.order==="XYZ"){let N=V*Y,I=V*P,z=U*Y,B=U*P;J[0]=Z*Y,J[4]=-Z*P,J[8]=R,J[1]=I+z*R,J[5]=N-B*R,J[9]=-U*Z,J[2]=B-N*R,J[6]=z+I*R,J[10]=V*Z}else if(A.order==="YXZ"){let N=Z*Y,I=Z*P,z=R*Y,B=R*P;J[0]=N+B*U,J[4]=z*U-I,J[8]=V*R,J[1]=V*P,J[5]=V*Y,J[9]=-U,J[2]=I*U-z,J[6]=B+N*U,J[10]=V*Z}else if(A.order==="ZXY"){let N=Z*Y,I=Z*P,z=R*Y,B=R*P;J[0]=N-B*U,J[4]=-V*P,J[8]=z+I*U,J[1]=I+z*U,J[5]=V*Y,J[9]=B-N*U,J[2]=-V*R,J[6]=U,J[10]=V*Z}else if(A.order==="ZYX"){let N=V*Y,I=V*P,z=U*Y,B=U*P;J[0]=Z*Y,J[4]=z*R-I,J[8]=N*R+B,J[1]=Z*P,J[5]=B*R+N,J[9]=I*R-z,J[2]=-R,J[6]=U*Z,J[10]=V*Z}else if(A.order==="YZX"){let N=V*Z,I=V*R,z=U*Z,B=U*R;J[0]=Z*Y,J[4]=B-N*P,J[8]=z*P+I,J[1]=P,J[5]=V*Y,J[9]=-U*Y,J[2]=-R*Y,J[6]=I*P+z,J[10]=N-B*P}else if(A.order==="XZY"){let N=V*Z,I=V*R,z=U*Z,B=U*R;J[0]=Z*Y,J[4]=-P,J[8]=R*Y,J[1]=N*P+B,J[5]=V*Y,J[9]=I*P-z,J[2]=z*P-I,J[6]=U*Y,J[10]=B*P+N}return J[3]=0,J[7]=0,J[11]=0,J[12]=0,J[13]=0,J[14]=0,J[15]=1,this}makeRotationFromQuaternion(A){return this.compose(uG,A,hG)}lookAt(A,J,H){let E=this.elements;if(O8.subVectors(A,J),O8.lengthSq()===0)O8.z=1;if(O8.normalize(),W1.crossVectors(H,O8),W1.lengthSq()===0){if(Math.abs(H.z)===1)O8.x+=0.0001;else O8.z+=0.0001;O8.normalize(),W1.crossVectors(H,O8)}return W1.normalize(),IU.crossVectors(O8,W1),E[0]=W1.x,E[4]=IU.x,E[8]=O8.x,E[1]=W1.y,E[5]=IU.y,E[9]=O8.y,E[2]=W1.z,E[6]=IU.z,E[10]=O8.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,J){let H=A.elements,E=J.elements,X=this.elements,V=H[0],U=H[4],Z=H[8],R=H[12],Y=H[1],P=H[5],N=H[9],I=H[13],z=H[2],B=H[6],G=H[10],F=H[14],q=H[3],C=H[7],Q=H[11],D=H[15],f=E[0],S=E[4],L=E[8],u=E[12],k=E[1],O=E[5],j=E[9],x=E[13],c=E[2],i=E[6],AA=E[10],t=E[14],XA=E[3],s=E[7],jA=E[11],hA=E[15];return X[0]=V*f+U*k+Z*c+R*XA,X[4]=V*S+U*O+Z*i+R*s,X[8]=V*L+U*j+Z*AA+R*jA,X[12]=V*u+U*x+Z*t+R*hA,X[1]=Y*f+P*k+N*c+I*XA,X[5]=Y*S+P*O+N*i+I*s,X[9]=Y*L+P*j+N*AA+I*jA,X[13]=Y*u+P*x+N*t+I*hA,X[2]=z*f+B*k+G*c+F*XA,X[6]=z*S+B*O+G*i+F*s,X[10]=z*L+B*j+G*AA+F*jA,X[14]=z*u+B*x+G*t+F*hA,X[3]=q*f+C*k+Q*c+D*XA,X[7]=q*S+C*O+Q*i+D*s,X[11]=q*L+C*j+Q*AA+D*jA,X[15]=q*u+C*x+Q*t+D*hA,this}multiplyScalar(A){let J=this.elements;return J[0]*=A,J[4]*=A,J[8]*=A,J[12]*=A,J[1]*=A,J[5]*=A,J[9]*=A,J[13]*=A,J[2]*=A,J[6]*=A,J[10]*=A,J[14]*=A,J[3]*=A,J[7]*=A,J[11]*=A,J[15]*=A,this}determinant(){let A=this.elements,J=A[0],H=A[4],E=A[8],X=A[12],V=A[1],U=A[5],Z=A[9],R=A[13],Y=A[2],P=A[6],N=A[10],I=A[14],z=A[3],B=A[7],G=A[11],F=A[15];return z*(+X*Z*P-E*R*P-X*U*N+H*R*N+E*U*I-H*Z*I)+B*(+J*Z*I-J*R*N+X*V*N-E*V*I+E*R*Y-X*Z*Y)+G*(+J*R*P-J*U*I-X*V*P+H*V*I+X*U*Y-H*R*Y)+F*(-E*U*Y-J*Z*P+J*U*N+E*V*P-H*V*N+H*Z*Y)}transpose(){let A=this.elements,J;return J=A[1],A[1]=A[4],A[4]=J,J=A[2],A[2]=A[8],A[8]=J,J=A[6],A[6]=A[9],A[9]=J,J=A[3],A[3]=A[12],A[12]=J,J=A[7],A[7]=A[13],A[13]=J,J=A[11],A[11]=A[14],A[14]=J,this}setPosition(A,J,H){let E=this.elements;if(A.isVector3)E[12]=A.x,E[13]=A.y,E[14]=A.z;else E[12]=A,E[13]=J,E[14]=H;return this}invert(){let A=this.elements,J=A[0],H=A[1],E=A[2],X=A[3],V=A[4],U=A[5],Z=A[6],R=A[7],Y=A[8],P=A[9],N=A[10],I=A[11],z=A[12],B=A[13],G=A[14],F=A[15],q=P*G*R-B*N*R+B*Z*I-U*G*I-P*Z*F+U*N*F,C=z*N*R-Y*G*R-z*Z*I+V*G*I+Y*Z*F-V*N*F,Q=Y*B*R-z*P*R+z*U*I-V*B*I-Y*U*F+V*P*F,D=z*P*Z-Y*B*Z-z*U*N+V*B*N+Y*U*G-V*P*G,f=J*q+H*C+E*Q+X*D;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/f;return A[0]=q*S,A[1]=(B*N*X-P*G*X-B*E*I+H*G*I+P*E*F-H*N*F)*S,A[2]=(U*G*X-B*Z*X+B*E*R-H*G*R-U*E*F+H*Z*F)*S,A[3]=(P*Z*X-U*N*X-P*E*R+H*N*R+U*E*I-H*Z*I)*S,A[4]=C*S,A[5]=(Y*G*X-z*N*X+z*E*I-J*G*I-Y*E*F+J*N*F)*S,A[6]=(z*Z*X-V*G*X-z*E*R+J*G*R+V*E*F-J*Z*F)*S,A[7]=(V*N*X-Y*Z*X+Y*E*R-J*N*R-V*E*I+J*Z*I)*S,A[8]=Q*S,A[9]=(z*P*X-Y*B*X-z*H*I+J*B*I+Y*H*F-J*P*F)*S,A[10]=(V*B*X-z*U*X+z*H*R-J*B*R-V*H*F+J*U*F)*S,A[11]=(Y*U*X-V*P*X-Y*H*R+J*P*R+V*H*I-J*U*I)*S,A[12]=D*S,A[13]=(Y*B*E-z*P*E+z*H*N-J*B*N-Y*H*G+J*P*G)*S,A[14]=(z*U*E-V*B*E-z*H*Z+J*B*Z+V*H*G-J*U*G)*S,A[15]=(V*P*E-Y*U*E+Y*H*Z-J*P*Z-V*H*N+J*U*N)*S,this}scale(A){let J=this.elements,H=A.x,E=A.y,X=A.z;return J[0]*=H,J[4]*=E,J[8]*=X,J[1]*=H,J[5]*=E,J[9]*=X,J[2]*=H,J[6]*=E,J[10]*=X,J[3]*=H,J[7]*=E,J[11]*=X,this}getMaxScaleOnAxis(){let A=this.elements,J=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],H=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],E=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(J,H,E))}makeTranslation(A,J,H){if(A.isVector3)this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1);else this.set(1,0,0,A,0,1,0,J,0,0,1,H,0,0,0,1);return this}makeRotationX(A){let J=Math.cos(A),H=Math.sin(A);return this.set(1,0,0,0,0,J,-H,0,0,H,J,0,0,0,0,1),this}makeRotationY(A){let J=Math.cos(A),H=Math.sin(A);return this.set(J,0,H,0,0,1,0,0,-H,0,J,0,0,0,0,1),this}makeRotationZ(A){let J=Math.cos(A),H=Math.sin(A);return this.set(J,-H,0,0,H,J,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,J){let H=Math.cos(J),E=Math.sin(J),X=1-H,V=A.x,U=A.y,Z=A.z,R=X*V,Y=X*U;return this.set(R*V+H,R*U-E*Z,R*Z+E*U,0,R*U+E*Z,Y*U+H,Y*Z-E*V,0,R*Z-E*U,Y*Z+E*V,X*Z*Z+H,0,0,0,0,1),this}makeScale(A,J,H){return this.set(A,0,0,0,0,J,0,0,0,0,H,0,0,0,0,1),this}makeShear(A,J,H,E,X,V){return this.set(1,H,X,0,A,1,V,0,J,E,1,0,0,0,0,1),this}compose(A,J,H){let E=this.elements,X=J._x,V=J._y,U=J._z,Z=J._w,R=X+X,Y=V+V,P=U+U,N=X*R,I=X*Y,z=X*P,B=V*Y,G=V*P,F=U*P,q=Z*R,C=Z*Y,Q=Z*P,D=H.x,f=H.y,S=H.z;return E[0]=(1-(B+F))*D,E[1]=(I+Q)*D,E[2]=(z-C)*D,E[3]=0,E[4]=(I-Q)*f,E[5]=(1-(N+F))*f,E[6]=(G+q)*f,E[7]=0,E[8]=(z+C)*S,E[9]=(G-q)*S,E[10]=(1-(N+B))*S,E[11]=0,E[12]=A.x,E[13]=A.y,E[14]=A.z,E[15]=1,this}decompose(A,J,H){let E=this.elements,X=RE.set(E[0],E[1],E[2]).length(),V=RE.set(E[4],E[5],E[6]).length(),U=RE.set(E[8],E[9],E[10]).length();if(this.determinant()<0)X=-X;A.x=E[12],A.y=E[13],A.z=E[14],JH.copy(this);let R=1/X,Y=1/V,P=1/U;return JH.elements[0]*=R,JH.elements[1]*=R,JH.elements[2]*=R,JH.elements[4]*=Y,JH.elements[5]*=Y,JH.elements[6]*=Y,JH.elements[8]*=P,JH.elements[9]*=P,JH.elements[10]*=P,J.setFromRotationMatrix(JH),H.x=X,H.y=V,H.z=U,this}makePerspective(A,J,H,E,X,V,U=2000){let Z=this.elements,R=2*X/(J-A),Y=2*X/(H-E),P=(J+A)/(J-A),N=(H+E)/(H-E),I,z;if(U===2000)I=-(V+X)/(V-X),z=-2*V*X/(V-X);else if(U===2001)I=-V/(V-X),z=-V*X/(V-X);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+U);return Z[0]=R,Z[4]=0,Z[8]=P,Z[12]=0,Z[1]=0,Z[5]=Y,Z[9]=N,Z[13]=0,Z[2]=0,Z[6]=0,Z[10]=I,Z[14]=z,Z[3]=0,Z[7]=0,Z[11]=-1,Z[15]=0,this}makeOrthographic(A,J,H,E,X,V,U=2000){let Z=this.elements,R=1/(J-A),Y=1/(H-E),P=1/(V-X),N=(J+A)*R,I=(H+E)*Y,z,B;if(U===2000)z=(V+X)*P,B=-2*P;else if(U===2001)z=X*P,B=-1*P;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+U);return Z[0]=2*R,Z[4]=0,Z[8]=0,Z[12]=-N,Z[1]=0,Z[5]=2*Y,Z[9]=0,Z[13]=-I,Z[2]=0,Z[6]=0,Z[10]=B,Z[14]=-z,Z[3]=0,Z[7]=0,Z[11]=0,Z[15]=1,this}equals(A){let J=this.elements,H=A.elements;for(let E=0;E<16;E++)if(J[E]!==H[E])return!1;return!0}fromArray(A,J=0){for(let H=0;H<16;H++)this.elements[H]=A[H+J];return this}toArray(A=[],J=0){let H=this.elements;return A[J]=H[0],A[J+1]=H[1],A[J+2]=H[2],A[J+3]=H[3],A[J+4]=H[4],A[J+5]=H[5],A[J+6]=H[6],A[J+7]=H[7],A[J+8]=H[8],A[J+9]=H[9],A[J+10]=H[10],A[J+11]=H[11],A[J+12]=H[12],A[J+13]=H[13],A[J+14]=H[14],A[J+15]=H[15],A}}var RE=new g,JH=new x6,uG=new g(0,0,0),hG=new g(1,1,1),W1=new g,IU=new g,O8=new g,uq=new x6,hq=new D8;class EH{constructor(A=0,J=0,H=0,E=EH.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=J,this._z=H,this._order=E}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,J,H,E=this._order){return this._x=A,this._y=J,this._z=H,this._order=E,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,J=this._order,H=!0){let E=A.elements,X=E[0],V=E[4],U=E[8],Z=E[1],R=E[5],Y=E[9],P=E[2],N=E[6],I=E[10];switch(J){case"XYZ":if(this._y=Math.asin(G6(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(-Y,I),this._z=Math.atan2(-V,X);else this._x=Math.atan2(N,R),this._z=0;break;case"YXZ":if(this._x=Math.asin(-G6(Y,-1,1)),Math.abs(Y)<0.9999999)this._y=Math.atan2(U,I),this._z=Math.atan2(Z,R);else this._y=Math.atan2(-P,X),this._z=0;break;case"ZXY":if(this._x=Math.asin(G6(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-P,I),this._z=Math.atan2(-V,R);else this._y=0,this._z=Math.atan2(Z,X);break;case"ZYX":if(this._y=Math.asin(-G6(P,-1,1)),Math.abs(P)<0.9999999)this._x=Math.atan2(N,I),this._z=Math.atan2(Z,X);else this._x=0,this._z=Math.atan2(-V,R);break;case"YZX":if(this._z=Math.asin(G6(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(-Y,R),this._y=Math.atan2(-P,X);else this._x=0,this._y=Math.atan2(U,I);break;case"XZY":if(this._z=Math.asin(-G6(V,-1,1)),Math.abs(V)<0.9999999)this._x=Math.atan2(N,R),this._y=Math.atan2(U,X);else this._x=Math.atan2(-Y,I),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+J)}if(this._order=J,H===!0)this._onChangeCallback();return this}setFromQuaternion(A,J,H){return uq.makeRotationFromQuaternion(A),this.setFromRotationMatrix(uq,J,H)}setFromVector3(A,J=this._order){return this.set(A.x,A.y,A.z,J)}reorder(A){return hq.setFromEuler(this),this.setFromQuaternion(hq,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){if(this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0)this._order=A[3];return this._onChangeCallback(),this}toArray(A=[],J=0){return A[J]=this._x,A[J+1]=this._y,A[J+2]=this._z,A[J+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}EH.DEFAULT_ORDER="XYZ";class H9{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}var lG=0,lq=new g,YE=new D8,pH=new x6,zU=new g,cX=new g,pG=new g,gG=new D8,pq=new g(1,0,0),gq=new g(0,1,0),bq=new g(0,0,1),xq={type:"added"},bG={type:"removed"},PE={type:"childadded",child:null},$Y={type:"childremoved",child:null};class wJ extends cH{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:lG++}),this.uuid=SE(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wJ.DEFAULT_UP.clone();let A=new g,J=new EH,H=new D8,E=new g(1,1,1);function X(){H.setFromEuler(J,!1)}function V(){J.setFromQuaternion(H,void 0,!1)}J._onChange(X),H._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:J},quaternion:{configurable:!0,enumerable:!0,value:H},scale:{configurable:!0,enumerable:!0,value:E},modelViewMatrix:{value:new x6},normalMatrix:{value:new C6}}),this.matrix=new x6,this.matrixWorld=new x6,this.matrixAutoUpdate=wJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,J){this.quaternion.setFromAxisAngle(A,J)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,J){return YE.setFromAxisAngle(A,J),this.quaternion.multiply(YE),this}rotateOnWorldAxis(A,J){return YE.setFromAxisAngle(A,J),this.quaternion.premultiply(YE),this}rotateX(A){return this.rotateOnAxis(pq,A)}rotateY(A){return this.rotateOnAxis(gq,A)}rotateZ(A){return this.rotateOnAxis(bq,A)}translateOnAxis(A,J){return lq.copy(A).applyQuaternion(this.quaternion),this.position.add(lq.multiplyScalar(J)),this}translateX(A){return this.translateOnAxis(pq,A)}translateY(A){return this.translateOnAxis(gq,A)}translateZ(A){return this.translateOnAxis(bq,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(pH.copy(this.matrixWorld).invert())}lookAt(A,J,H){if(A.isVector3)zU.copy(A);else zU.set(A,J,H);let E=this.parent;if(this.updateWorldMatrix(!0,!1),cX.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)pH.lookAt(cX,zU,this.up);else pH.lookAt(zU,cX,this.up);if(this.quaternion.setFromRotationMatrix(pH),E)pH.extractRotation(E.matrixWorld),YE.setFromRotationMatrix(pH),this.quaternion.premultiply(YE.invert())}add(A){if(arguments.length>1){for(let J=0;J<arguments.length;J++)this.add(arguments[J]);return this}if(A===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this;if(A&&A.isObject3D)A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(xq),PE.child=A,this.dispatchEvent(PE),PE.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A);return this}remove(A){if(arguments.length>1){for(let H=0;H<arguments.length;H++)this.remove(arguments[H]);return this}let J=this.children.indexOf(A);if(J!==-1)A.parent=null,this.children.splice(J,1),A.dispatchEvent(bG),$Y.child=A,this.dispatchEvent($Y),$Y.child=null;return this}removeFromParent(){let A=this.parent;if(A!==null)A.remove(this);return this}clear(){return this.remove(...this.children)}attach(A){if(this.updateWorldMatrix(!0,!1),pH.copy(this.matrixWorld).invert(),A.parent!==null)A.parent.updateWorldMatrix(!0,!1),pH.multiply(A.parent.matrixWorld);return A.applyMatrix4(pH),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(xq),PE.child=A,this.dispatchEvent(PE),PE.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,J){if(this[A]===J)return this;for(let H=0,E=this.children.length;H<E;H++){let V=this.children[H].getObjectByProperty(A,J);if(V!==void 0)return V}return}getObjectsByProperty(A,J,H=[]){if(this[A]===J)H.push(this);let E=this.children;for(let X=0,V=E.length;X<V;X++)E[X].getObjectsByProperty(A,J,H);return H}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cX,A,pG),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cX,gG,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let J=this.matrixWorld.elements;return A.set(J[8],J[9],J[10]).normalize()}raycast(){}traverse(A){A(this);let J=this.children;for(let H=0,E=J.length;H<E;H++)J[H].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);let J=this.children;for(let H=0,E=J.length;H<E;H++)J[H].traverseVisible(A)}traverseAncestors(A){let J=this.parent;if(J!==null)A(J),J.traverseAncestors(A)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||A){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,A=!0}let J=this.children;for(let H=0,E=J.length;H<E;H++)J[H].updateMatrixWorld(A)}updateWorldMatrix(A,J){let H=this.parent;if(A===!0&&H!==null)H.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(J===!0){let E=this.children;for(let X=0,V=E.length;X<V;X++)E[X].updateWorldMatrix(!1,!0)}}toJSON(A){let J=A===void 0||typeof A==="string",H={};if(J)A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},H.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let E={};if(E.uuid=this.uuid,E.type=this.type,this.name!=="")E.name=this.name;if(this.castShadow===!0)E.castShadow=!0;if(this.receiveShadow===!0)E.receiveShadow=!0;if(this.visible===!1)E.visible=!1;if(this.frustumCulled===!1)E.frustumCulled=!1;if(this.renderOrder!==0)E.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)E.userData=this.userData;if(E.layers=this.layers.mask,E.matrix=this.matrix.toArray(),E.up=this.up.toArray(),this.matrixAutoUpdate===!1)E.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(E.type="InstancedMesh",E.count=this.count,E.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)E.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(E.type="BatchedMesh",E.perObjectFrustumCulled=this.perObjectFrustumCulled,E.sortObjects=this.sortObjects,E.drawRanges=this._drawRanges,E.reservedRanges=this._reservedRanges,E.visibility=this._visibility,E.active=this._active,E.bounds=this._bounds.map((U)=>({boxInitialized:U.boxInitialized,boxMin:U.box.min.toArray(),boxMax:U.box.max.toArray(),sphereInitialized:U.sphereInitialized,sphereRadius:U.sphere.radius,sphereCenter:U.sphere.center.toArray()})),E.maxInstanceCount=this._maxInstanceCount,E.maxVertexCount=this._maxVertexCount,E.maxIndexCount=this._maxIndexCount,E.geometryInitialized=this._geometryInitialized,E.geometryCount=this._geometryCount,E.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null)E.colorsTexture=this._colorsTexture.toJSON(A);if(this.boundingSphere!==null)E.boundingSphere={center:E.boundingSphere.center.toArray(),radius:E.boundingSphere.radius};if(this.boundingBox!==null)E.boundingBox={min:E.boundingBox.min.toArray(),max:E.boundingBox.max.toArray()}}function X(U,Z){if(U[Z.uuid]===void 0)U[Z.uuid]=Z.toJSON(A);return Z.uuid}if(this.isScene){if(this.background){if(this.background.isColor)E.background=this.background.toJSON();else if(this.background.isTexture)E.background=this.background.toJSON(A).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)E.environment=this.environment.toJSON(A).uuid}else if(this.isMesh||this.isLine||this.isPoints){E.geometry=X(A.geometries,this.geometry);let U=this.geometry.parameters;if(U!==void 0&&U.shapes!==void 0){let Z=U.shapes;if(Array.isArray(Z))for(let R=0,Y=Z.length;R<Y;R++){let P=Z[R];X(A.shapes,P)}else X(A.shapes,Z)}}if(this.isSkinnedMesh){if(E.bindMode=this.bindMode,E.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)X(A.skeletons,this.skeleton),E.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let U=[];for(let Z=0,R=this.material.length;Z<R;Z++)U.push(X(A.materials,this.material[Z]));E.material=U}else E.material=X(A.materials,this.material);if(this.children.length>0){E.children=[];for(let U=0;U<this.children.length;U++)E.children.push(this.children[U].toJSON(A).object)}if(this.animations.length>0){E.animations=[];for(let U=0;U<this.animations.length;U++){let Z=this.animations[U];E.animations.push(X(A.animations,Z))}}if(J){let U=V(A.geometries),Z=V(A.materials),R=V(A.textures),Y=V(A.images),P=V(A.shapes),N=V(A.skeletons),I=V(A.animations),z=V(A.nodes);if(U.length>0)H.geometries=U;if(Z.length>0)H.materials=Z;if(R.length>0)H.textures=R;if(Y.length>0)H.images=Y;if(P.length>0)H.shapes=P;if(N.length>0)H.skeletons=N;if(I.length>0)H.animations=I;if(z.length>0)H.nodes=z}return H.object=E,H;function V(U){let Z=[];for(let R in U){let Y=U[R];delete Y.metadata,Z.push(Y)}return Z}}clone(A){return new this.constructor().copy(this,A)}copy(A,J=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),J===!0)for(let H=0;H<A.children.length;H++){let E=A.children[H];this.add(E.clone())}return this}}wJ.DEFAULT_UP=new g(0,1,0);wJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var HH=new g,gH=new g,_Y=new g,bH=new g,NE=new g,qE=new g,mq=new g,A7=new g,J7=new g,H7=new g,E7=new UJ,X7=new UJ,V7=new UJ;class p8{constructor(A=new g,J=new g,H=new g){this.a=A,this.b=J,this.c=H}static getNormal(A,J,H,E){E.subVectors(H,J),HH.subVectors(A,J),E.cross(HH);let X=E.lengthSq();if(X>0)return E.multiplyScalar(1/Math.sqrt(X));return E.set(0,0,0)}static getBarycoord(A,J,H,E,X){HH.subVectors(E,J),gH.subVectors(H,J),_Y.subVectors(A,J);let V=HH.dot(HH),U=HH.dot(gH),Z=HH.dot(_Y),R=gH.dot(gH),Y=gH.dot(_Y),P=V*R-U*U;if(P===0)return X.set(0,0,0),null;let N=1/P,I=(R*Z-U*Y)*N,z=(V*Y-U*Z)*N;return X.set(1-I-z,z,I)}static containsPoint(A,J,H,E){if(this.getBarycoord(A,J,H,E,bH)===null)return!1;return bH.x>=0&&bH.y>=0&&bH.x+bH.y<=1}static getInterpolation(A,J,H,E,X,V,U,Z){if(this.getBarycoord(A,J,H,E,bH)===null){if(Z.x=0,Z.y=0,"z"in Z)Z.z=0;if("w"in Z)Z.w=0;return null}return Z.setScalar(0),Z.addScaledVector(X,bH.x),Z.addScaledVector(V,bH.y),Z.addScaledVector(U,bH.z),Z}static getInterpolatedAttribute(A,J,H,E,X,V){return E7.setScalar(0),X7.setScalar(0),V7.setScalar(0),E7.fromBufferAttribute(A,J),X7.fromBufferAttribute(A,H),V7.fromBufferAttribute(A,E),V.setScalar(0),V.addScaledVector(E7,X.x),V.addScaledVector(X7,X.y),V.addScaledVector(V7,X.z),V}static isFrontFacing(A,J,H,E){return HH.subVectors(H,J),gH.subVectors(A,J),HH.cross(gH).dot(E)<0?!0:!1}set(A,J,H){return this.a.copy(A),this.b.copy(J),this.c.copy(H),this}setFromPointsAndIndices(A,J,H,E){return this.a.copy(A[J]),this.b.copy(A[H]),this.c.copy(A[E]),this}setFromAttributeAndIndices(A,J,H,E){return this.a.fromBufferAttribute(A,J),this.b.fromBufferAttribute(A,H),this.c.fromBufferAttribute(A,E),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return HH.subVectors(this.c,this.b),gH.subVectors(this.a,this.b),HH.cross(gH).length()*0.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(A){return p8.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,J){return p8.getBarycoord(A,this.a,this.b,this.c,J)}getInterpolation(A,J,H,E,X){return p8.getInterpolation(A,this.a,this.b,this.c,J,H,E,X)}containsPoint(A){return p8.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return p8.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,J){let H=this.a,E=this.b,X=this.c,V,U;NE.subVectors(E,H),qE.subVectors(X,H),A7.subVectors(A,H);let Z=NE.dot(A7),R=qE.dot(A7);if(Z<=0&&R<=0)return J.copy(H);J7.subVectors(A,E);let Y=NE.dot(J7),P=qE.dot(J7);if(Y>=0&&P<=Y)return J.copy(E);let N=Z*P-Y*R;if(N<=0&&Z>=0&&Y<=0)return V=Z/(Z-Y),J.copy(H).addScaledVector(NE,V);H7.subVectors(A,X);let I=NE.dot(H7),z=qE.dot(H7);if(z>=0&&I<=z)return J.copy(X);let B=I*R-Z*z;if(B<=0&&R>=0&&z<=0)return U=R/(R-z),J.copy(H).addScaledVector(qE,U);let G=Y*z-I*P;if(G<=0&&P-Y>=0&&I-z>=0)return mq.subVectors(X,E),U=(P-Y)/(P-Y+(I-z)),J.copy(E).addScaledVector(mq,U);let F=1/(G+B+N);return V=B*F,U=N*F,J.copy(H).addScaledVector(NE,V).addScaledVector(qE,U)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}var _I={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},O1={h:0,s:0,l:0},QU={h:0,s:0,l:0};function U7(A,J,H){if(H<0)H+=1;if(H>1)H-=1;if(H<0.16666666666666666)return A+(J-A)*6*H;if(H<0.5)return J;if(H<0.6666666666666666)return A+(J-A)*6*(0.6666666666666666-H);return A}class F6{constructor(A,J,H){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,J,H)}set(A,J,H){if(J===void 0&&H===void 0){let E=A;if(E&&E.isColor)this.copy(E);else if(typeof E==="number")this.setHex(E);else if(typeof E==="string")this.setStyle(E)}else this.setRGB(A,J,H);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,J="srgb"){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,f6.toWorkingColorSpace(this,J),this}setRGB(A,J,H,E=f6.workingColorSpace){return this.r=A,this.g=J,this.b=H,f6.toWorkingColorSpace(this,E),this}setHSL(A,J,H,E=f6.workingColorSpace){if(A=JP(A,1),J=G6(J,0,1),H=G6(H,0,1),J===0)this.r=this.g=this.b=H;else{let X=H<=0.5?H*(1+J):H+J-H*J,V=2*H-X;this.r=U7(V,X,A+0.3333333333333333),this.g=U7(V,X,A),this.b=U7(V,X,A-0.3333333333333333)}return f6.toWorkingColorSpace(this,E),this}setStyle(A,J="srgb"){function H(X){if(X===void 0)return;if(parseFloat(X)<1)console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let E;if(E=/^(\w+)\(([^\)]*)\)/.exec(A)){let X,V=E[1],U=E[2];switch(V){case"rgb":case"rgba":if(X=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return H(X[4]),this.setRGB(Math.min(255,parseInt(X[1],10))/255,Math.min(255,parseInt(X[2],10))/255,Math.min(255,parseInt(X[3],10))/255,J);if(X=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return H(X[4]),this.setRGB(Math.min(100,parseInt(X[1],10))/100,Math.min(100,parseInt(X[2],10))/100,Math.min(100,parseInt(X[3],10))/100,J);break;case"hsl":case"hsla":if(X=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(U))return H(X[4]),this.setHSL(parseFloat(X[1])/360,parseFloat(X[2])/100,parseFloat(X[3])/100,J);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(E=/^\#([A-Fa-f\d]+)$/.exec(A)){let X=E[1],V=X.length;if(V===3)return this.setRGB(parseInt(X.charAt(0),16)/15,parseInt(X.charAt(1),16)/15,parseInt(X.charAt(2),16)/15,J);else if(V===6)return this.setHex(parseInt(X,16),J);else console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,J);return this}setColorName(A,J="srgb"){let H=_I[A.toLowerCase()];if(H!==void 0)this.setHex(H,J);else console.warn("THREE.Color: Unknown color "+A);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=xH(A.r),this.g=xH(A.g),this.b=xH(A.b),this}copyLinearToSRGB(A){return this.r=CE(A.r),this.g=CE(A.g),this.b=CE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A="srgb"){return f6.fromWorkingColorSpace(iJ.copy(this),A),Math.round(G6(iJ.r*255,0,255))*65536+Math.round(G6(iJ.g*255,0,255))*256+Math.round(G6(iJ.b*255,0,255))}getHexString(A="srgb"){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,J=f6.workingColorSpace){f6.fromWorkingColorSpace(iJ.copy(this),J);let{r:H,g:E,b:X}=iJ,V=Math.max(H,E,X),U=Math.min(H,E,X),Z,R,Y=(U+V)/2;if(U===V)Z=0,R=0;else{let P=V-U;switch(R=Y<=0.5?P/(V+U):P/(2-V-U),V){case H:Z=(E-X)/P+(E<X?6:0);break;case E:Z=(X-H)/P+2;break;case X:Z=(H-E)/P+4;break}Z/=6}return A.h=Z,A.s=R,A.l=Y,A}getRGB(A,J=f6.workingColorSpace){return f6.fromWorkingColorSpace(iJ.copy(this),J),A.r=iJ.r,A.g=iJ.g,A.b=iJ.b,A}getStyle(A="srgb"){f6.fromWorkingColorSpace(iJ.copy(this),A);let{r:J,g:H,b:E}=iJ;if(A!=="srgb")return`color(${A} ${J.toFixed(3)} ${H.toFixed(3)} ${E.toFixed(3)})`;return`rgb(${Math.round(J*255)},${Math.round(H*255)},${Math.round(E*255)})`}offsetHSL(A,J,H){return this.getHSL(O1),this.setHSL(O1.h+A,O1.s+J,O1.l+H)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,J){return this.r=A.r+J.r,this.g=A.g+J.g,this.b=A.b+J.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,J){return this.r+=(A.r-this.r)*J,this.g+=(A.g-this.g)*J,this.b+=(A.b-this.b)*J,this}lerpColors(A,J,H){return this.r=A.r+(J.r-A.r)*H,this.g=A.g+(J.g-A.g)*H,this.b=A.b+(J.b-A.b)*H,this}lerpHSL(A,J){this.getHSL(O1),A.getHSL(QU);let H=oX(O1.h,QU.h,J),E=oX(O1.s,QU.s,J),X=oX(O1.l,QU.l,J);return this.setHSL(H,E,X),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){let J=this.r,H=this.g,E=this.b,X=A.elements;return this.r=X[0]*J+X[3]*H+X[6]*E,this.g=X[1]*J+X[4]*H+X[7]*E,this.b=X[2]*J+X[5]*H+X[8]*E,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,J=0){return this.r=A[J],this.g=A[J+1],this.b=A[J+2],this}toArray(A=[],J=0){return A[J]=this.r,A[J+1]=this.g,A[J+2]=this.b,A}fromBufferAttribute(A,J){return this.r=A.getX(J),this.g=A.getY(J),this.b=A.getZ(J),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var iJ=new F6;F6.NAMES=_I;var xG=0;class q0 extends cH{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:xG++}),this.uuid=SE(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new F6(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){if(this._alphaTest>0!==A>0)this.version++;this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A===void 0)return;for(let J in A){let H=A[J];if(H===void 0){console.warn(`THREE.Material: parameter '${J}' has value of undefined.`);continue}let E=this[J];if(E===void 0){console.warn(`THREE.Material: '${J}' is not a property of THREE.${this.type}.`);continue}if(E&&E.isColor)E.set(H);else if(E&&E.isVector3&&(H&&H.isVector3))E.copy(H);else this[J]=H}}toJSON(A){let J=A===void 0||typeof A==="string";if(J)A={textures:{},images:{}};let H={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(H.uuid=this.uuid,H.type=this.type,this.name!=="")H.name=this.name;if(this.color&&this.color.isColor)H.color=this.color.getHex();if(this.roughness!==void 0)H.roughness=this.roughness;if(this.metalness!==void 0)H.metalness=this.metalness;if(this.sheen!==void 0)H.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)H.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)H.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)H.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)H.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)H.specular=this.specular.getHex();if(this.specularIntensity!==void 0)H.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)H.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)H.shininess=this.shininess;if(this.clearcoat!==void 0)H.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)H.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)H.clearcoatMap=this.clearcoatMap.toJSON(A).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)H.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)H.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,H.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)H.dispersion=this.dispersion;if(this.iridescence!==void 0)H.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)H.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)H.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)H.iridescenceMap=this.iridescenceMap.toJSON(A).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)H.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid;if(this.anisotropy!==void 0)H.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)H.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)H.anisotropyMap=this.anisotropyMap.toJSON(A).uuid;if(this.map&&this.map.isTexture)H.map=this.map.toJSON(A).uuid;if(this.matcap&&this.matcap.isTexture)H.matcap=this.matcap.toJSON(A).uuid;if(this.alphaMap&&this.alphaMap.isTexture)H.alphaMap=this.alphaMap.toJSON(A).uuid;if(this.lightMap&&this.lightMap.isTexture)H.lightMap=this.lightMap.toJSON(A).uuid,H.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)H.aoMap=this.aoMap.toJSON(A).uuid,H.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)H.bumpMap=this.bumpMap.toJSON(A).uuid,H.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)H.normalMap=this.normalMap.toJSON(A).uuid,H.normalMapType=this.normalMapType,H.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)H.displacementMap=this.displacementMap.toJSON(A).uuid,H.displacementScale=this.displacementScale,H.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)H.roughnessMap=this.roughnessMap.toJSON(A).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)H.metalnessMap=this.metalnessMap.toJSON(A).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)H.emissiveMap=this.emissiveMap.toJSON(A).uuid;if(this.specularMap&&this.specularMap.isTexture)H.specularMap=this.specularMap.toJSON(A).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)H.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)H.specularColorMap=this.specularColorMap.toJSON(A).uuid;if(this.envMap&&this.envMap.isTexture){if(H.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0)H.combine=this.combine}if(this.envMapRotation!==void 0)H.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)H.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)H.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)H.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)H.gradientMap=this.gradientMap.toJSON(A).uuid;if(this.transmission!==void 0)H.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)H.transmissionMap=this.transmissionMap.toJSON(A).uuid;if(this.thickness!==void 0)H.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)H.thicknessMap=this.thicknessMap.toJSON(A).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)H.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)H.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)H.size=this.size;if(this.shadowSide!==null)H.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)H.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)H.blending=this.blending;if(this.side!==0)H.side=this.side;if(this.vertexColors===!0)H.vertexColors=!0;if(this.opacity<1)H.opacity=this.opacity;if(this.transparent===!0)H.transparent=!0;if(this.blendSrc!==204)H.blendSrc=this.blendSrc;if(this.blendDst!==205)H.blendDst=this.blendDst;if(this.blendEquation!==100)H.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)H.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)H.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)H.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)H.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)H.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)H.depthFunc=this.depthFunc;if(this.depthTest===!1)H.depthTest=this.depthTest;if(this.depthWrite===!1)H.depthWrite=this.depthWrite;if(this.colorWrite===!1)H.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)H.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)H.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)H.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)H.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)H.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)H.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)H.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)H.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)H.rotation=this.rotation;if(this.polygonOffset===!0)H.polygonOffset=!0;if(this.polygonOffsetFactor!==0)H.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)H.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)H.linewidth=this.linewidth;if(this.dashSize!==void 0)H.dashSize=this.dashSize;if(this.gapSize!==void 0)H.gapSize=this.gapSize;if(this.scale!==void 0)H.scale=this.scale;if(this.dithering===!0)H.dithering=!0;if(this.alphaTest>0)H.alphaTest=this.alphaTest;if(this.alphaHash===!0)H.alphaHash=!0;if(this.alphaToCoverage===!0)H.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)H.premultipliedAlpha=!0;if(this.forceSinglePass===!0)H.forceSinglePass=!0;if(this.wireframe===!0)H.wireframe=!0;if(this.wireframeLinewidth>1)H.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")H.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")H.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)H.flatShading=!0;if(this.visible===!1)H.visible=!1;if(this.toneMapped===!1)H.toneMapped=!1;if(this.fog===!1)H.fog=!1;if(Object.keys(this.userData).length>0)H.userData=this.userData;function E(X){let V=[];for(let U in X){let Z=X[U];delete Z.metadata,V.push(Z)}return V}if(J){let X=E(A.textures),V=E(A.images);if(X.length>0)H.textures=X;if(V.length>0)H.images=V}return H}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;let J=A.clippingPlanes,H=null;if(J!==null){let E=J.length;H=Array(E);for(let X=0;X!==E;++X)H[X]=J[X].clone()}return this.clippingPlanes=H,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){if(A===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rU extends q0{constructor(A){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new F6(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new EH,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}var FJ=new g,FU=new X6;class IJ{constructor(A,J,H=!1){if(Array.isArray(A))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=J,this.count=A!==void 0?A.length/J:0,this.normalized=H,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(A){if(A===!0)this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,J){this.updateRanges.push({start:A,count:J})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,J,H){A*=this.itemSize,H*=J.itemSize;for(let E=0,X=this.itemSize;E<X;E++)this.array[A+E]=J.array[H+E];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let J=0,H=this.count;J<H;J++)FU.fromBufferAttribute(this,J),FU.applyMatrix3(A),this.setXY(J,FU.x,FU.y);else if(this.itemSize===3)for(let J=0,H=this.count;J<H;J++)FJ.fromBufferAttribute(this,J),FJ.applyMatrix3(A),this.setXYZ(J,FJ.x,FJ.y,FJ.z);return this}applyMatrix4(A){for(let J=0,H=this.count;J<H;J++)FJ.fromBufferAttribute(this,J),FJ.applyMatrix4(A),this.setXYZ(J,FJ.x,FJ.y,FJ.z);return this}applyNormalMatrix(A){for(let J=0,H=this.count;J<H;J++)FJ.fromBufferAttribute(this,J),FJ.applyNormalMatrix(A),this.setXYZ(J,FJ.x,FJ.y,FJ.z);return this}transformDirection(A){for(let J=0,H=this.count;J<H;J++)FJ.fromBufferAttribute(this,J),FJ.transformDirection(A),this.setXYZ(J,FJ.x,FJ.y,FJ.z);return this}set(A,J=0){return this.array.set(A,J),this}getComponent(A,J){let H=this.array[A*this.itemSize+J];if(this.normalized)H=FE(H,this.array);return H}setComponent(A,J,H){if(this.normalized)H=J8(H,this.array);return this.array[A*this.itemSize+J]=H,this}getX(A){let J=this.array[A*this.itemSize];if(this.normalized)J=FE(J,this.array);return J}setX(A,J){if(this.normalized)J=J8(J,this.array);return this.array[A*this.itemSize]=J,this}getY(A){let J=this.array[A*this.itemSize+1];if(this.normalized)J=FE(J,this.array);return J}setY(A,J){if(this.normalized)J=J8(J,this.array);return this.array[A*this.itemSize+1]=J,this}getZ(A){let J=this.array[A*this.itemSize+2];if(this.normalized)J=FE(J,this.array);return J}setZ(A,J){if(this.normalized)J=J8(J,this.array);return this.array[A*this.itemSize+2]=J,this}getW(A){let J=this.array[A*this.itemSize+3];if(this.normalized)J=FE(J,this.array);return J}setW(A,J){if(this.normalized)J=J8(J,this.array);return this.array[A*this.itemSize+3]=J,this}setXY(A,J,H){if(A*=this.itemSize,this.normalized)J=J8(J,this.array),H=J8(H,this.array);return this.array[A+0]=J,this.array[A+1]=H,this}setXYZ(A,J,H,E){if(A*=this.itemSize,this.normalized)J=J8(J,this.array),H=J8(H,this.array),E=J8(E,this.array);return this.array[A+0]=J,this.array[A+1]=H,this.array[A+2]=E,this}setXYZW(A,J,H,E,X){if(A*=this.itemSize,this.normalized)J=J8(J,this.array),H=J8(H,this.array),E=J8(E,this.array),X=J8(X,this.array);return this.array[A+0]=J,this.array[A+1]=H,this.array[A+2]=E,this.array[A+3]=X,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")A.name=this.name;if(this.usage!==35044)A.usage=this.usage;return A}}class tU extends IJ{constructor(A,J,H){super(new Uint16Array(A),J,H)}}class aU extends IJ{constructor(A,J,H){super(new Uint32Array(A),J,H)}}class g8 extends IJ{constructor(A,J,H){super(new Float32Array(A),J,H)}}var mG=0,l8=new x6,Z7=new wJ,IE=new g,M8=new N0,iX=new N0,TJ=new g;class sH extends cH{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mG++}),this.uuid=SE(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){if(Array.isArray(A))this.index=new((HP(A))?aU:tU)(A,1);else this.index=A;return this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,J){return this.attributes[A]=J,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,J,H=0){this.groups.push({start:A,count:J,materialIndex:H})}clearGroups(){this.groups=[]}setDrawRange(A,J){this.drawRange.start=A,this.drawRange.count=J}applyMatrix4(A){let J=this.attributes.position;if(J!==void 0)J.applyMatrix4(A),J.needsUpdate=!0;let H=this.attributes.normal;if(H!==void 0){let X=new C6().getNormalMatrix(A);H.applyNormalMatrix(X),H.needsUpdate=!0}let E=this.attributes.tangent;if(E!==void 0)E.transformDirection(A),E.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(A){return l8.makeRotationFromQuaternion(A),this.applyMatrix4(l8),this}rotateX(A){return l8.makeRotationX(A),this.applyMatrix4(l8),this}rotateY(A){return l8.makeRotationY(A),this.applyMatrix4(l8),this}rotateZ(A){return l8.makeRotationZ(A),this.applyMatrix4(l8),this}translate(A,J,H){return l8.makeTranslation(A,J,H),this.applyMatrix4(l8),this}scale(A,J,H){return l8.makeScale(A,J,H),this.applyMatrix4(l8),this}lookAt(A){return Z7.lookAt(A),Z7.updateMatrix(),this.applyMatrix4(Z7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(IE).negate(),this.translate(IE.x,IE.y,IE.z),this}setFromPoints(A){let J=this.getAttribute("position");if(J===void 0){let H=[];for(let E=0,X=A.length;E<X;E++){let V=A[E];H.push(V.x,V.y,V.z||0)}this.setAttribute("position",new g8(H,3))}else{let H=Math.min(A.length,J.count);for(let E=0;E<H;E++){let X=A[E];J.setXYZ(E,X.x,X.y,X.z||0)}if(A.length>J.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");J.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new N0;let A=this.attributes.position,J=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),J)for(let H=0,E=J.length;H<E;H++){let X=J[H];if(M8.setFromBufferAttribute(X),this.morphTargetsRelative)TJ.addVectors(this.boundingBox.min,M8.min),this.boundingBox.expandByPoint(TJ),TJ.addVectors(this.boundingBox.max,M8.max),this.boundingBox.expandByPoint(TJ);else this.boundingBox.expandByPoint(M8.min),this.boundingBox.expandByPoint(M8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new J9;let A=this.attributes.position,J=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if(A){let H=this.boundingSphere.center;if(M8.setFromBufferAttribute(A),J)for(let X=0,V=J.length;X<V;X++){let U=J[X];if(iX.setFromBufferAttribute(U),this.morphTargetsRelative)TJ.addVectors(M8.min,iX.min),M8.expandByPoint(TJ),TJ.addVectors(M8.max,iX.max),M8.expandByPoint(TJ);else M8.expandByPoint(iX.min),M8.expandByPoint(iX.max)}M8.getCenter(H);let E=0;for(let X=0,V=A.count;X<V;X++)TJ.fromBufferAttribute(A,X),E=Math.max(E,H.distanceToSquared(TJ));if(J)for(let X=0,V=J.length;X<V;X++){let U=J[X],Z=this.morphTargetsRelative;for(let R=0,Y=U.count;R<Y;R++){if(TJ.fromBufferAttribute(U,R),Z)IE.fromBufferAttribute(A,R),TJ.add(IE);E=Math.max(E,H.distanceToSquared(TJ))}}if(this.boundingSphere.radius=Math.sqrt(E),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let A=this.index,J=this.attributes;if(A===null||J.position===void 0||J.normal===void 0||J.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:H,normal:E,uv:X}=J;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new IJ(new Float32Array(4*H.count),4));let V=this.getAttribute("tangent"),U=[],Z=[];for(let L=0;L<H.count;L++)U[L]=new g,Z[L]=new g;let R=new g,Y=new g,P=new g,N=new X6,I=new X6,z=new X6,B=new g,G=new g;function F(L,u,k){R.fromBufferAttribute(H,L),Y.fromBufferAttribute(H,u),P.fromBufferAttribute(H,k),N.fromBufferAttribute(X,L),I.fromBufferAttribute(X,u),z.fromBufferAttribute(X,k),Y.sub(R),P.sub(R),I.sub(N),z.sub(N);let O=1/(I.x*z.y-z.x*I.y);if(!isFinite(O))return;B.copy(Y).multiplyScalar(z.y).addScaledVector(P,-I.y).multiplyScalar(O),G.copy(P).multiplyScalar(I.x).addScaledVector(Y,-z.x).multiplyScalar(O),U[L].add(B),U[u].add(B),U[k].add(B),Z[L].add(G),Z[u].add(G),Z[k].add(G)}let q=this.groups;if(q.length===0)q=[{start:0,count:A.count}];for(let L=0,u=q.length;L<u;++L){let k=q[L],O=k.start,j=k.count;for(let x=O,c=O+j;x<c;x+=3)F(A.getX(x+0),A.getX(x+1),A.getX(x+2))}let C=new g,Q=new g,D=new g,f=new g;function S(L){D.fromBufferAttribute(E,L),f.copy(D);let u=U[L];C.copy(u),C.sub(D.multiplyScalar(D.dot(u))).normalize(),Q.crossVectors(f,u);let O=Q.dot(Z[L])<0?-1:1;V.setXYZW(L,C.x,C.y,C.z,O)}for(let L=0,u=q.length;L<u;++L){let k=q[L],O=k.start,j=k.count;for(let x=O,c=O+j;x<c;x+=3)S(A.getX(x+0)),S(A.getX(x+1)),S(A.getX(x+2))}}computeVertexNormals(){let A=this.index,J=this.getAttribute("position");if(J!==void 0){let H=this.getAttribute("normal");if(H===void 0)H=new IJ(new Float32Array(J.count*3),3),this.setAttribute("normal",H);else for(let N=0,I=H.count;N<I;N++)H.setXYZ(N,0,0,0);let E=new g,X=new g,V=new g,U=new g,Z=new g,R=new g,Y=new g,P=new g;if(A)for(let N=0,I=A.count;N<I;N+=3){let z=A.getX(N+0),B=A.getX(N+1),G=A.getX(N+2);E.fromBufferAttribute(J,z),X.fromBufferAttribute(J,B),V.fromBufferAttribute(J,G),Y.subVectors(V,X),P.subVectors(E,X),Y.cross(P),U.fromBufferAttribute(H,z),Z.fromBufferAttribute(H,B),R.fromBufferAttribute(H,G),U.add(Y),Z.add(Y),R.add(Y),H.setXYZ(z,U.x,U.y,U.z),H.setXYZ(B,Z.x,Z.y,Z.z),H.setXYZ(G,R.x,R.y,R.z)}else for(let N=0,I=J.count;N<I;N+=3)E.fromBufferAttribute(J,N+0),X.fromBufferAttribute(J,N+1),V.fromBufferAttribute(J,N+2),Y.subVectors(V,X),P.subVectors(E,X),Y.cross(P),H.setXYZ(N+0,Y.x,Y.y,Y.z),H.setXYZ(N+1,Y.x,Y.y,Y.z),H.setXYZ(N+2,Y.x,Y.y,Y.z);this.normalizeNormals(),H.needsUpdate=!0}}normalizeNormals(){let A=this.attributes.normal;for(let J=0,H=A.count;J<H;J++)TJ.fromBufferAttribute(A,J),TJ.normalize(),A.setXYZ(J,TJ.x,TJ.y,TJ.z)}toNonIndexed(){function A(U,Z){let{array:R,itemSize:Y,normalized:P}=U,N=new R.constructor(Z.length*Y),I=0,z=0;for(let B=0,G=Z.length;B<G;B++){if(U.isInterleavedBufferAttribute)I=Z[B]*U.data.stride+U.offset;else I=Z[B]*Y;for(let F=0;F<Y;F++)N[z++]=R[I++]}return new IJ(N,Y,P)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let J=new sH,H=this.index.array,E=this.attributes;for(let U in E){let Z=E[U],R=A(Z,H);J.setAttribute(U,R)}let X=this.morphAttributes;for(let U in X){let Z=[],R=X[U];for(let Y=0,P=R.length;Y<P;Y++){let N=R[Y],I=A(N,H);Z.push(I)}J.morphAttributes[U]=Z}J.morphTargetsRelative=this.morphTargetsRelative;let V=this.groups;for(let U=0,Z=V.length;U<Z;U++){let R=V[U];J.addGroup(R.start,R.count,R.materialIndex)}return J}toJSON(){let A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!=="")A.name=this.name;if(Object.keys(this.userData).length>0)A.userData=this.userData;if(this.parameters!==void 0){let Z=this.parameters;for(let R in Z)if(Z[R]!==void 0)A[R]=Z[R];return A}A.data={attributes:{}};let J=this.index;if(J!==null)A.data.index={type:J.array.constructor.name,array:Array.prototype.slice.call(J.array)};let H=this.attributes;for(let Z in H){let R=H[Z];A.data.attributes[Z]=R.toJSON(A.data)}let E={},X=!1;for(let Z in this.morphAttributes){let R=this.morphAttributes[Z],Y=[];for(let P=0,N=R.length;P<N;P++){let I=R[P];Y.push(I.toJSON(A.data))}if(Y.length>0)E[Z]=Y,X=!0}if(X)A.data.morphAttributes=E,A.data.morphTargetsRelative=this.morphTargetsRelative;let V=this.groups;if(V.length>0)A.data.groups=JSON.parse(JSON.stringify(V));let U=this.boundingSphere;if(U!==null)A.data.boundingSphere={center:U.center.toArray(),radius:U.radius};return A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let J={};this.name=A.name;let H=A.index;if(H!==null)this.setIndex(H.clone(J));let E=A.attributes;for(let R in E){let Y=E[R];this.setAttribute(R,Y.clone(J))}let X=A.morphAttributes;for(let R in X){let Y=[],P=X[R];for(let N=0,I=P.length;N<I;N++)Y.push(P[N].clone(J));this.morphAttributes[R]=Y}this.morphTargetsRelative=A.morphTargetsRelative;let V=A.groups;for(let R=0,Y=V.length;R<Y;R++){let P=V[R];this.addGroup(P.start,P.count,P.materialIndex)}let U=A.boundingBox;if(U!==null)this.boundingBox=U.clone();let Z=A.boundingSphere;if(Z!==null)this.boundingSphere=Z.clone();return this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var dq=new x6,V0=new KE,CU=new J9,nq=new g,BU=new g,GU=new g,WU=new g,R7=new g,OU=new g,cq=new g,MU=new g;class aA extends wJ{constructor(A=new sH,J=new rU){super();this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=J,this.updateMorphTargets()}copy(A,J){if(super.copy(A,J),A.morphTargetInfluences!==void 0)this.morphTargetInfluences=A.morphTargetInfluences.slice();if(A.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary);return this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){let J=this.geometry.morphAttributes,H=Object.keys(J);if(H.length>0){let E=J[H[0]];if(E!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let X=0,V=E.length;X<V;X++){let U=E[X].name||String(X);this.morphTargetInfluences.push(0),this.morphTargetDictionary[U]=X}}}}getVertexPosition(A,J){let H=this.geometry,E=H.attributes.position,X=H.morphAttributes.position,V=H.morphTargetsRelative;J.fromBufferAttribute(E,A);let U=this.morphTargetInfluences;if(X&&U){OU.set(0,0,0);for(let Z=0,R=X.length;Z<R;Z++){let Y=U[Z],P=X[Z];if(Y===0)continue;if(R7.fromBufferAttribute(P,A),V)OU.addScaledVector(R7,Y);else OU.addScaledVector(R7.sub(J),Y)}J.add(OU)}return J}raycast(A,J){let H=this.geometry,E=this.material,X=this.matrixWorld;if(E===void 0)return;if(H.boundingSphere===null)H.computeBoundingSphere();if(CU.copy(H.boundingSphere),CU.applyMatrix4(X),V0.copy(A.ray).recast(A.near),CU.containsPoint(V0.origin)===!1){if(V0.intersectSphere(CU,nq)===null)return;if(V0.origin.distanceToSquared(nq)>(A.far-A.near)**2)return}if(dq.copy(X).invert(),V0.copy(A.ray).applyMatrix4(dq),H.boundingBox!==null){if(V0.intersectsBox(H.boundingBox)===!1)return}this._computeIntersections(A,J,V0)}_computeIntersections(A,J,H){let E,X=this.geometry,V=this.material,U=X.index,Z=X.attributes.position,R=X.attributes.uv,Y=X.attributes.uv1,P=X.attributes.normal,N=X.groups,I=X.drawRange;if(U!==null)if(Array.isArray(V))for(let z=0,B=N.length;z<B;z++){let G=N[z],F=V[G.materialIndex],q=Math.max(G.start,I.start),C=Math.min(U.count,Math.min(G.start+G.count,I.start+I.count));for(let Q=q,D=C;Q<D;Q+=3){let f=U.getX(Q),S=U.getX(Q+1),L=U.getX(Q+2);if(E=kU(this,F,A,H,R,Y,P,f,S,L),E)E.faceIndex=Math.floor(Q/3),E.face.materialIndex=G.materialIndex,J.push(E)}}else{let z=Math.max(0,I.start),B=Math.min(U.count,I.start+I.count);for(let G=z,F=B;G<F;G+=3){let q=U.getX(G),C=U.getX(G+1),Q=U.getX(G+2);if(E=kU(this,V,A,H,R,Y,P,q,C,Q),E)E.faceIndex=Math.floor(G/3),J.push(E)}}else if(Z!==void 0)if(Array.isArray(V))for(let z=0,B=N.length;z<B;z++){let G=N[z],F=V[G.materialIndex],q=Math.max(G.start,I.start),C=Math.min(Z.count,Math.min(G.start+G.count,I.start+I.count));for(let Q=q,D=C;Q<D;Q+=3){let f=Q,S=Q+1,L=Q+2;if(E=kU(this,F,A,H,R,Y,P,f,S,L),E)E.faceIndex=Math.floor(Q/3),E.face.materialIndex=G.materialIndex,J.push(E)}}else{let z=Math.max(0,I.start),B=Math.min(Z.count,I.start+I.count);for(let G=z,F=B;G<F;G+=3){let q=G,C=G+1,Q=G+2;if(E=kU(this,V,A,H,R,Y,P,q,C,Q),E)E.faceIndex=Math.floor(G/3),J.push(E)}}}}function dG(A,J,H,E,X,V,U,Z){let R;if(J.side===1)R=E.intersectTriangle(U,V,X,!0,Z);else R=E.intersectTriangle(X,V,U,J.side===0,Z);if(R===null)return null;MU.copy(Z),MU.applyMatrix4(A.matrixWorld);let Y=H.ray.origin.distanceTo(MU);if(Y<H.near||Y>H.far)return null;return{distance:Y,point:MU.clone(),object:A}}function kU(A,J,H,E,X,V,U,Z,R,Y){A.getVertexPosition(Z,BU),A.getVertexPosition(R,GU),A.getVertexPosition(Y,WU);let P=dG(A,J,H,E,BU,GU,WU,cq);if(P){let N=new g;if(p8.getBarycoord(cq,BU,GU,WU,N),X)P.uv=p8.getInterpolatedAttribute(X,Z,R,Y,N,new X6);if(V)P.uv1=p8.getInterpolatedAttribute(V,Z,R,Y,N,new X6);if(U){if(P.normal=p8.getInterpolatedAttribute(U,Z,R,Y,N,new g),P.normal.dot(E.direction)>0)P.normal.multiplyScalar(-1)}let I={a:Z,b:R,c:Y,normal:new g,materialIndex:0};p8.getNormal(BU,GU,WU,I.normal),P.face=I,P.barycoord=N}return P}class m6 extends sH{constructor(A=1,J=1,H=1,E=1,X=1,V=1){super();this.type="BoxGeometry",this.parameters={width:A,height:J,depth:H,widthSegments:E,heightSegments:X,depthSegments:V};let U=this;E=Math.floor(E),X=Math.floor(X),V=Math.floor(V);let Z=[],R=[],Y=[],P=[],N=0,I=0;z("z","y","x",-1,-1,H,J,A,V,X,0),z("z","y","x",1,-1,H,J,-A,V,X,1),z("x","z","y",1,1,A,H,J,E,V,2),z("x","z","y",1,-1,A,H,-J,E,V,3),z("x","y","z",1,-1,A,J,H,E,X,4),z("x","y","z",-1,-1,A,J,-H,E,X,5),this.setIndex(Z),this.setAttribute("position",new g8(R,3)),this.setAttribute("normal",new g8(Y,3)),this.setAttribute("uv",new g8(P,2));function z(B,G,F,q,C,Q,D,f,S,L,u){let k=Q/S,O=D/L,j=Q/2,x=D/2,c=f/2,i=S+1,AA=L+1,t=0,XA=0,s=new g;for(let jA=0;jA<AA;jA++){let hA=jA*O-x;for(let $A=0;$A<i;$A++){let W6=$A*k-j;s[B]=W6*q,s[G]=hA*C,s[F]=c,R.push(s.x,s.y,s.z),s[B]=0,s[G]=0,s[F]=f>0?1:-1,Y.push(s.x,s.y,s.z),P.push($A/S),P.push(1-jA/L),t+=1}}for(let jA=0;jA<L;jA++)for(let hA=0;hA<S;hA++){let $A=N+hA+i*jA,W6=N+hA+i*(jA+1),$=N+(hA+1)+i*(jA+1),QA=N+(hA+1)+i*jA;Z.push($A,W6,QA),Z.push(W6,$,QA),XA+=6}U.addGroup(I,XA,u),I+=XA,N+=t}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new m6(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function I0(A){let J={};for(let H in A){J[H]={};for(let E in A[H]){let X=A[H][E];if(X&&(X.isColor||X.isMatrix3||X.isMatrix4||X.isVector2||X.isVector3||X.isVector4||X.isTexture||X.isQuaternion))if(X.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),J[H][E]=null;else J[H][E]=X.clone();else if(Array.isArray(X))J[H][E]=X.slice();else J[H][E]=X}}return J}function sJ(A){let J={};for(let H=0;H<A.length;H++){let E=I0(A[H]);for(let X in E)J[X]=E[X]}return J}function nG(A){let J=[];for(let H=0;H<A.length;H++)J.push(A[H].clone());return J}function UP(A){let J=A.getRenderTarget();if(J===null)return A.outputColorSpace;if(J.isXRRenderTarget===!0)return J.texture.colorSpace;return f6.workingColorSpace}var Az={clone:I0,merge:sJ},cG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class GH extends q0{constructor(A){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cG,this.fragmentShader=iG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0)this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=I0(A.uniforms),this.uniformsGroups=nG(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){let J=super.toJSON(A);J.glslVersion=this.glslVersion,J.uniforms={};for(let E in this.uniforms){let V=this.uniforms[E].value;if(V&&V.isTexture)J.uniforms[E]={type:"t",value:V.toJSON(A).uuid};else if(V&&V.isColor)J.uniforms[E]={type:"c",value:V.getHex()};else if(V&&V.isVector2)J.uniforms[E]={type:"v2",value:V.toArray()};else if(V&&V.isVector3)J.uniforms[E]={type:"v3",value:V.toArray()};else if(V&&V.isVector4)J.uniforms[E]={type:"v4",value:V.toArray()};else if(V&&V.isMatrix3)J.uniforms[E]={type:"m3",value:V.toArray()};else if(V&&V.isMatrix4)J.uniforms[E]={type:"m4",value:V.toArray()};else J.uniforms[E]={value:V}}if(Object.keys(this.defines).length>0)J.defines=this.defines;J.vertexShader=this.vertexShader,J.fragmentShader=this.fragmentShader,J.lights=this.lights,J.clipping=this.clipping;let H={};for(let E in this.extensions)if(this.extensions[E]===!0)H[E]=!0;if(Object.keys(H).length>0)J.extensions=H;return J}}class eU extends wJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new x6,this.projectionMatrix=new x6,this.projectionMatrixInverse=new x6,this.coordinateSystem=2000}copy(A,J){return super.copy(A,J),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,J){super.updateWorldMatrix(A,J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var M1=new g,iq=new X6,sq=new X6;class H8 extends eU{constructor(A=50,J=1,H=0.1,E=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=H,this.far=E,this.focus=10,this.aspect=J,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,J){return super.copy(A,J),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){let J=0.5*this.getFilmHeight()/A;this.fov=BE*2*Math.atan(J),this.updateProjectionMatrix()}getFocalLength(){let A=Math.tan(sX*0.5*this.fov);return 0.5*this.getFilmHeight()/A}getEffectiveFOV(){return BE*2*Math.atan(Math.tan(sX*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,J,H){M1.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),J.set(M1.x,M1.y).multiplyScalar(-A/M1.z),M1.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),H.set(M1.x,M1.y).multiplyScalar(-A/M1.z)}getViewSize(A,J){return this.getViewBounds(A,iq,sq),J.subVectors(sq,iq)}setViewOffset(A,J,H,E,X,V){if(this.aspect=A/J,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=J,this.view.offsetX=H,this.view.offsetY=E,this.view.width=X,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let A=this.near,J=A*Math.tan(sX*0.5*this.fov)/this.zoom,H=2*J,E=this.aspect*H,X=-0.5*E,V=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Z,fullHeight:R}=V;X+=V.offsetX*E/Z,J-=V.offsetY*H/R,E*=V.width/Z,H*=V.height/R}let U=this.filmOffset;if(U!==0)X+=A*U/this.getFilmWidth();this.projectionMatrix.makePerspective(X,X+E,J,J-H,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let J=super.toJSON(A);if(J.object.fov=this.fov,J.object.zoom=this.zoom,J.object.near=this.near,J.object.far=this.far,J.object.focus=this.focus,J.object.aspect=this.aspect,this.view!==null)J.object.view=Object.assign({},this.view);return J.object.filmGauge=this.filmGauge,J.object.filmOffset=this.filmOffset,J}}var zE=-90,QE=1;class ZP extends wJ{constructor(A,J,H){super();this.type="CubeCamera",this.renderTarget=H,this.coordinateSystem=null,this.activeMipmapLevel=0;let E=new H8(zE,QE,A,J);E.layers=this.layers,this.add(E);let X=new H8(zE,QE,A,J);X.layers=this.layers,this.add(X);let V=new H8(zE,QE,A,J);V.layers=this.layers,this.add(V);let U=new H8(zE,QE,A,J);U.layers=this.layers,this.add(U);let Z=new H8(zE,QE,A,J);Z.layers=this.layers,this.add(Z);let R=new H8(zE,QE,A,J);R.layers=this.layers,this.add(R)}updateCoordinateSystem(){let A=this.coordinateSystem,J=this.children.concat(),[H,E,X,V,U,Z]=J;for(let R of J)this.remove(R);if(A===2000)H.up.set(0,1,0),H.lookAt(1,0,0),E.up.set(0,1,0),E.lookAt(-1,0,0),X.up.set(0,0,-1),X.lookAt(0,1,0),V.up.set(0,0,1),V.lookAt(0,-1,0),U.up.set(0,1,0),U.lookAt(0,0,1),Z.up.set(0,1,0),Z.lookAt(0,0,-1);else if(A===2001)H.up.set(0,-1,0),H.lookAt(-1,0,0),E.up.set(0,-1,0),E.lookAt(1,0,0),X.up.set(0,0,1),X.lookAt(0,1,0),V.up.set(0,0,-1),V.lookAt(0,-1,0),U.up.set(0,-1,0),U.lookAt(0,0,1),Z.up.set(0,-1,0),Z.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(let R of J)this.add(R),R.updateMatrixWorld()}update(A,J){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:H,activeMipmapLevel:E}=this;if(this.coordinateSystem!==A.coordinateSystem)this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem();let[X,V,U,Z,R,Y]=this.children,P=A.getRenderTarget(),N=A.getActiveCubeFace(),I=A.getActiveMipmapLevel(),z=A.xr.enabled;A.xr.enabled=!1;let B=H.texture.generateMipmaps;H.texture.generateMipmaps=!1,A.setRenderTarget(H,0,E),A.render(J,X),A.setRenderTarget(H,1,E),A.render(J,V),A.setRenderTarget(H,2,E),A.render(J,U),A.setRenderTarget(H,3,E),A.render(J,Z),A.setRenderTarget(H,4,E),A.render(J,R),H.texture.generateMipmaps=B,A.setRenderTarget(H,5,E),A.render(J,Y),A.setRenderTarget(P,N,I),A.xr.enabled=z,H.texture.needsPMREMUpdate=!0}}class $U extends hJ{constructor(A,J,H,E,X,V,U,Z,R,Y){A=A!==void 0?A:[],J=J!==void 0?J:301;super(A,J,H,E,X,V,U,Z,R,Y);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class RP extends iH{constructor(A=1,J={}){super(A,A,J);this.isWebGLCubeRenderTarget=!0;let H={width:A,height:A,depth:1},E=[H,H,H,H,H,H];this.texture=new $U(E,J.mapping,J.wrapS,J.wrapT,J.magFilter,J.minFilter,J.format,J.type,J.anisotropy,J.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=J.generateMipmaps!==void 0?J.generateMipmaps:!1,this.texture.minFilter=J.minFilter!==void 0?J.minFilter:1006}fromEquirectangularTexture(A,J){this.texture.type=J.type,this.texture.colorSpace=J.colorSpace,this.texture.generateMipmaps=J.generateMipmaps,this.texture.minFilter=J.minFilter,this.texture.magFilter=J.magFilter;let H={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},E=new m6(5,5,5),X=new GH({name:"CubemapFromEquirect",uniforms:I0(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,side:1,blending:0});X.uniforms.tEquirect.value=J;let V=new aA(E,X),U=J.minFilter;if(J.minFilter===1008)J.minFilter=1006;return new ZP(1,10,this).update(A,V),J.minFilter=U,V.geometry.dispose(),V.material.dispose(),this}clear(A,J,H,E){let X=A.getRenderTarget();for(let V=0;V<6;V++)A.setRenderTarget(this,V),A.clear(J,H,E);A.setRenderTarget(X)}}class E9{constructor(A,J=1,H=1000){this.isFog=!0,this.name="",this.color=new F6(A),this.near=J,this.far=H}clone(){return new E9(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class z0 extends wJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new EH,this.environmentIntensity=1,this.environmentRotation=new EH,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,J){if(super.copy(A,J),A.background!==null)this.background=A.background.clone();if(A.environment!==null)this.environment=A.environment.clone();if(A.fog!==null)this.fog=A.fog.clone();if(this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null)this.overrideMaterial=A.overrideMaterial.clone();return this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){let J=super.toJSON(A);if(this.fog!==null)J.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)J.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)J.object.backgroundIntensity=this.backgroundIntensity;if(J.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)J.object.environmentIntensity=this.environmentIntensity;return J.object.environmentRotation=this.environmentRotation.toArray(),J}}var Y7=new g,sG=new g,oG=new C6;class N8{constructor(A=new g(1,0,0),J=0){this.isPlane=!0,this.normal=A,this.constant=J}set(A,J){return this.normal.copy(A),this.constant=J,this}setComponents(A,J,H,E){return this.normal.set(A,J,H),this.constant=E,this}setFromNormalAndCoplanarPoint(A,J){return this.normal.copy(A),this.constant=-J.dot(this.normal),this}setFromCoplanarPoints(A,J,H){let E=Y7.subVectors(H,J).cross(sG.subVectors(A,J)).normalize();return this.setFromNormalAndCoplanarPoint(E,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){let A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,J){return J.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,J){let H=A.delta(Y7),E=this.normal.dot(H);if(E===0){if(this.distanceToPoint(A.start)===0)return J.copy(A.start);return null}let X=-(A.start.dot(this.normal)+this.constant)/E;if(X<0||X>1)return null;return J.copy(A.start).addScaledVector(H,X)}intersectsLine(A){let J=this.distanceToPoint(A.start),H=this.distanceToPoint(A.end);return J<0&&H>0||H<0&&J>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,J){let H=J||oG.getNormalMatrix(A),E=this.coplanarPoint(Y7).applyMatrix4(A),X=this.normal.applyMatrix3(H).normalize();return this.constant=-E.dot(X),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}var U0=new J9,DU=new g;class X9{constructor(A=new N8,J=new N8,H=new N8,E=new N8,X=new N8,V=new N8){this.planes=[A,J,H,E,X,V]}set(A,J,H,E,X,V){let U=this.planes;return U[0].copy(A),U[1].copy(J),U[2].copy(H),U[3].copy(E),U[4].copy(X),U[5].copy(V),this}copy(A){let J=this.planes;for(let H=0;H<6;H++)J[H].copy(A.planes[H]);return this}setFromProjectionMatrix(A,J=2000){let H=this.planes,E=A.elements,X=E[0],V=E[1],U=E[2],Z=E[3],R=E[4],Y=E[5],P=E[6],N=E[7],I=E[8],z=E[9],B=E[10],G=E[11],F=E[12],q=E[13],C=E[14],Q=E[15];if(H[0].setComponents(Z-X,N-R,G-I,Q-F).normalize(),H[1].setComponents(Z+X,N+R,G+I,Q+F).normalize(),H[2].setComponents(Z+V,N+Y,G+z,Q+q).normalize(),H[3].setComponents(Z-V,N-Y,G-z,Q-q).normalize(),H[4].setComponents(Z-U,N-P,G-B,Q-C).normalize(),J===2000)H[5].setComponents(Z+U,N+P,G+B,Q+C).normalize();else if(J===2001)H[5].setComponents(U,P,B,C).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+J);return this}intersectsObject(A){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();U0.copy(A.boundingSphere).applyMatrix4(A.matrixWorld)}else{let J=A.geometry;if(J.boundingSphere===null)J.computeBoundingSphere();U0.copy(J.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(U0)}intersectsSprite(A){return U0.center.set(0,0,0),U0.radius=0.7071067811865476,U0.applyMatrix4(A.matrixWorld),this.intersectsSphere(U0)}intersectsSphere(A){let J=this.planes,H=A.center,E=-A.radius;for(let X=0;X<6;X++)if(J[X].distanceToPoint(H)<E)return!1;return!0}intersectsBox(A){let J=this.planes;for(let H=0;H<6;H++){let E=J[H];if(DU.x=E.normal.x>0?A.max.x:A.min.x,DU.y=E.normal.y>0?A.max.y:A.min.y,DU.z=E.normal.z>0?A.max.z:A.min.z,E.distanceToPoint(DU)<0)return!1}return!0}containsPoint(A){let J=this.planes;for(let H=0;H<6;H++)if(J[H].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class E8 extends wJ{constructor(){super();this.isGroup=!0,this.type="Group"}}class TE extends hJ{constructor(A,J,H,E,X,V,U,Z,R,Y,P,N){super(null,V,U,Z,R,Y,E,X,P,N);this.isCompressedTexture=!0,this.image={width:J,height:H},this.mipmaps=A,this.flipY=!1,this.generateMipmaps=!1}}class _U extends hJ{constructor(A,J,H,E,X,V,U,Z,R,Y=1026){if(Y!==1026&&Y!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(H===void 0&&Y===1026)H=1014;if(H===void 0&&Y===1027)H=1020;super(null,E,X,V,U,Z,Y,H,R);this.isDepthTexture=!0,this.image={width:A,height:J},this.magFilter=U!==void 0?U:1003,this.minFilter=Z!==void 0?Z:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){let J=super.toJSON(A);if(this.compareFunction!==null)J.compareFunction=this.compareFunction;return J}}class wE extends sH{constructor(A=1,J=1,H=1,E=32,X=1,V=!1,U=0,Z=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:A,radiusBottom:J,height:H,radialSegments:E,heightSegments:X,openEnded:V,thetaStart:U,thetaLength:Z};let R=this;E=Math.floor(E),X=Math.floor(X);let Y=[],P=[],N=[],I=[],z=0,B=[],G=H/2,F=0;if(q(),V===!1){if(A>0)C(!0);if(J>0)C(!1)}this.setIndex(Y),this.setAttribute("position",new g8(P,3)),this.setAttribute("normal",new g8(N,3)),this.setAttribute("uv",new g8(I,2));function q(){let Q=new g,D=new g,f=0,S=(J-A)/H;for(let L=0;L<=X;L++){let u=[],k=L/X,O=k*(J-A)+A;for(let j=0;j<=E;j++){let x=j/E,c=x*Z+U,i=Math.sin(c),AA=Math.cos(c);D.x=O*i,D.y=-k*H+G,D.z=O*AA,P.push(D.x,D.y,D.z),Q.set(i,S,AA).normalize(),N.push(Q.x,Q.y,Q.z),I.push(x,1-k),u.push(z++)}B.push(u)}for(let L=0;L<E;L++)for(let u=0;u<X;u++){let k=B[u][L],O=B[u+1][L],j=B[u+1][L+1],x=B[u][L+1];if(A>0||u!==0)Y.push(k,O,x),f+=3;if(J>0||u!==X-1)Y.push(O,j,x),f+=3}R.addGroup(F,f,0),F+=f}function C(Q){let D=z,f=new X6,S=new g,L=0,u=Q===!0?A:J,k=Q===!0?1:-1;for(let j=1;j<=E;j++)P.push(0,G*k,0),N.push(0,k,0),I.push(0.5,0.5),z++;let O=z;for(let j=0;j<=E;j++){let c=j/E*Z+U,i=Math.cos(c),AA=Math.sin(c);S.x=u*AA,S.y=G*k,S.z=u*i,P.push(S.x,S.y,S.z),N.push(0,k,0),f.x=i*0.5+0.5,f.y=AA*0.5*k+0.5,I.push(f.x,f.y),z++}for(let j=0;j<E;j++){let x=D+j,c=O+j;if(Q===!0)Y.push(c,c+1,x);else Y.push(c+1,c,x);L+=3}R.addGroup(F,L,Q===!0?1:2),F+=L}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new wE(A.radiusTop,A.radiusBottom,A.height,A.radialSegments,A.heightSegments,A.openEnded,A.thetaStart,A.thetaLength)}}class ZJ extends sH{constructor(A=1,J=1,H=1,E=1){super();this.type="PlaneGeometry",this.parameters={width:A,height:J,widthSegments:H,heightSegments:E};let X=A/2,V=J/2,U=Math.floor(H),Z=Math.floor(E),R=U+1,Y=Z+1,P=A/U,N=J/Z,I=[],z=[],B=[],G=[];for(let F=0;F<Y;F++){let q=F*N-V;for(let C=0;C<R;C++){let Q=C*P-X;z.push(Q,-q,0),B.push(0,0,1),G.push(C/U),G.push(1-F/Z)}}for(let F=0;F<Z;F++)for(let q=0;q<U;q++){let C=q+R*F,Q=q+R*(F+1),D=q+1+R*(F+1),f=q+1+R*F;I.push(C,Q,f),I.push(Q,D,f)}this.setIndex(I),this.setAttribute("position",new g8(z,3)),this.setAttribute("normal",new g8(B,3)),this.setAttribute("uv",new g8(G,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ZJ(A.width,A.height,A.widthSegments,A.heightSegments)}}class CJ extends q0{constructor(A){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new F6(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F6(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X6(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new EH,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class fE extends CJ{constructor(A){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X6(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return G6(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(J){this.ior=(1+0.4*J)/(1-0.4*J)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new F6(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new F6(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new F6(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){if(this._anisotropy>0!==A>0)this.version++;this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){if(this._clearcoat>0!==A>0)this.version++;this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){if(this._iridescence>0!==A>0)this.version++;this._iridescence=A}get dispersion(){return this._dispersion}set dispersion(A){if(this._dispersion>0!==A>0)this.version++;this._dispersion=A}get sheen(){return this._sheen}set sheen(A){if(this._sheen>0!==A>0)this.version++;this._sheen=A}get transmission(){return this._transmission}set transmission(A){if(this._transmission>0!==A>0)this.version++;this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.dispersion=A.dispersion,this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}class YP extends q0{constructor(A){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class PP extends q0{constructor(A){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}function SU(A,J,H){if(!A||!H&&A.constructor===J)return A;if(typeof J.BYTES_PER_ELEMENT==="number")return new J(A);return Array.prototype.slice.call(A)}function rG(A){return ArrayBuffer.isView(A)&&!(A instanceof DataView)}class jE{constructor(A,J,H,E){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=E!==void 0?E:new J.constructor(H),this.sampleValues=J,this.valueSize=H,this.settings=null,this.DefaultSettings_={}}evaluate(A){let J=this.parameterPositions,H=this._cachedIndex,E=J[H],X=J[H-1];A:{J:{let V;H:{E:if(!(A<E)){for(let U=H+2;;){if(E===void 0){if(A<X)break E;return H=J.length,this._cachedIndex=H,this.copySampleValue_(H-1)}if(H===U)break;if(X=E,E=J[++H],A<E)break J}V=J.length;break H}if(!(A>=X)){let U=J[1];if(A<U)H=2,X=U;for(let Z=H-2;;){if(X===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(H===Z)break;if(E=X,X=J[--H-1],A>=X)break J}V=H,H=0;break H}break A}while(H<V){let U=H+V>>>1;if(A<J[U])V=U;else H=U+1}if(E=J[H],X=J[H-1],X===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(E===void 0)return H=J.length,this._cachedIndex=H,this.copySampleValue_(H-1)}this._cachedIndex=H,this.intervalChanged_(H,X,E)}return this.interpolate_(H,X,A,E)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){let J=this.resultBuffer,H=this.sampleValues,E=this.valueSize,X=A*E;for(let V=0;V!==E;++V)J[V]=H[X+V];return J}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class NP extends jE{constructor(A,J,H,E){super(A,J,H,E);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(A,J,H){let E=this.parameterPositions,X=A-2,V=A+1,U=E[X],Z=E[V];if(U===void 0)switch(this.getSettings_().endingStart){case 2401:X=A,U=2*J-H;break;case 2402:X=E.length-2,U=J+E[X]-E[X+1];break;default:X=A,U=H}if(Z===void 0)switch(this.getSettings_().endingEnd){case 2401:V=A,Z=2*H-J;break;case 2402:V=1,Z=H+E[1]-E[0];break;default:V=A-1,Z=J}let R=(H-J)*0.5,Y=this.valueSize;this._weightPrev=R/(J-U),this._weightNext=R/(Z-H),this._offsetPrev=X*Y,this._offsetNext=V*Y}interpolate_(A,J,H,E){let X=this.resultBuffer,V=this.sampleValues,U=this.valueSize,Z=A*U,R=Z-U,Y=this._offsetPrev,P=this._offsetNext,N=this._weightPrev,I=this._weightNext,z=(H-J)/(E-J),B=z*z,G=B*z,F=-N*G+2*N*B-N*z,q=(1+N)*G+(-1.5-2*N)*B+(-0.5+N)*z+1,C=(-1-I)*G+(1.5+I)*B+0.5*z,Q=I*G-I*B;for(let D=0;D!==U;++D)X[D]=F*V[Y+D]+q*V[R+D]+C*V[Z+D]+Q*V[P+D];return X}}class qP extends jE{constructor(A,J,H,E){super(A,J,H,E)}interpolate_(A,J,H,E){let X=this.resultBuffer,V=this.sampleValues,U=this.valueSize,Z=A*U,R=Z-U,Y=(H-J)/(E-J),P=1-Y;for(let N=0;N!==U;++N)X[N]=V[R+N]*P+V[Z+N]*Y;return X}}class IP extends jE{constructor(A,J,H,E){super(A,J,H,E)}interpolate_(A){return this.copySampleValue_(A-1)}}class VH{constructor(A,J,H,E){if(A===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(J===void 0||J.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=SU(J,this.TimeBufferType),this.values=SU(H,this.ValueBufferType),this.setInterpolation(E||this.DefaultInterpolation)}static toJSON(A){let J=A.constructor,H;if(J.toJSON!==this.toJSON)H=J.toJSON(A);else{H={name:A.name,times:SU(A.times,Array),values:SU(A.values,Array)};let E=A.getInterpolation();if(E!==A.DefaultInterpolation)H.interpolation=E}return H.type=A.ValueTypeName,H}InterpolantFactoryMethodDiscrete(A){return new IP(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new qP(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new NP(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let J;switch(A){case 2300:J=this.InterpolantFactoryMethodDiscrete;break;case 2301:J=this.InterpolantFactoryMethodLinear;break;case 2302:J=this.InterpolantFactoryMethodSmooth;break}if(J===void 0){let H="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(H);return console.warn("THREE.KeyframeTrack:",H),this}return this.createInterpolant=J,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){let J=this.times;for(let H=0,E=J.length;H!==E;++H)J[H]+=A}return this}scale(A){if(A!==1){let J=this.times;for(let H=0,E=J.length;H!==E;++H)J[H]*=A}return this}trim(A,J){let H=this.times,E=H.length,X=0,V=E-1;while(X!==E&&H[X]<A)++X;while(V!==-1&&H[V]>J)--V;if(++V,X!==0||V!==E){if(X>=V)V=Math.max(V,1),X=V-1;let U=this.getValueSize();this.times=H.slice(X,V),this.values=this.values.slice(X*U,V*U)}return this}validate(){let A=!0,J=this.getValueSize();if(J-Math.floor(J)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1;let H=this.times,E=this.values,X=H.length;if(X===0)console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1;let V=null;for(let U=0;U!==X;U++){let Z=H[U];if(typeof Z==="number"&&isNaN(Z)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,U,Z),A=!1;break}if(V!==null&&V>Z){console.error("THREE.KeyframeTrack: Out of order keys.",this,U,Z,V),A=!1;break}V=Z}if(E!==void 0){if(rG(E))for(let U=0,Z=E.length;U!==Z;++U){let R=E[U];if(isNaN(R)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,U,R),A=!1;break}}}return A}optimize(){let A=this.times.slice(),J=this.values.slice(),H=this.getValueSize(),E=this.getInterpolation()===2302,X=A.length-1,V=1;for(let U=1;U<X;++U){let Z=!1,R=A[U],Y=A[U+1];if(R!==Y&&(U!==1||R!==A[0]))if(!E){let P=U*H,N=P-H,I=P+H;for(let z=0;z!==H;++z){let B=J[P+z];if(B!==J[N+z]||B!==J[I+z]){Z=!0;break}}}else Z=!0;if(Z){if(U!==V){A[V]=A[U];let P=U*H,N=V*H;for(let I=0;I!==H;++I)J[N+I]=J[P+I]}++V}}if(X>0){A[V]=A[X];for(let U=X*H,Z=V*H,R=0;R!==H;++R)J[Z+R]=J[U+R];++V}if(V!==A.length)this.times=A.slice(0,V),this.values=J.slice(0,V*H);else this.times=A,this.values=J;return this}clone(){let A=this.times.slice(),J=this.values.slice(),E=new this.constructor(this.name,A,J);return E.createInterpolant=this.createInterpolant,E}}VH.prototype.TimeBufferType=Float32Array;VH.prototype.ValueBufferType=Float32Array;VH.prototype.DefaultInterpolation=2301;class Q0 extends VH{constructor(A,J,H){super(A,J,H)}}Q0.prototype.ValueTypeName="bool";Q0.prototype.ValueBufferType=Array;Q0.prototype.DefaultInterpolation=2300;Q0.prototype.InterpolantFactoryMethodLinear=void 0;Q0.prototype.InterpolantFactoryMethodSmooth=void 0;class zP extends VH{}zP.prototype.ValueTypeName="color";class QP extends VH{}QP.prototype.ValueTypeName="number";class FP extends jE{constructor(A,J,H,E){super(A,J,H,E)}interpolate_(A,J,H,E){let X=this.resultBuffer,V=this.sampleValues,U=this.valueSize,Z=(H-J)/(E-J),R=A*U;for(let Y=R+U;R!==Y;R+=4)D8.slerpFlat(X,0,V,R-U,V,R,Z);return X}}class AZ extends VH{InterpolantFactoryMethodLinear(A){return new FP(this.times,this.values,this.getValueSize(),A)}}AZ.prototype.ValueTypeName="quaternion";AZ.prototype.InterpolantFactoryMethodSmooth=void 0;class F0 extends VH{constructor(A,J,H){super(A,J,H)}}F0.prototype.ValueTypeName="string";F0.prototype.ValueBufferType=Array;F0.prototype.DefaultInterpolation=2300;F0.prototype.InterpolantFactoryMethodLinear=void 0;F0.prototype.InterpolantFactoryMethodSmooth=void 0;class CP extends VH{}CP.prototype.ValueTypeName="vector";var N7={enabled:!1,files:{},add:function(A,J){if(this.enabled===!1)return;this.files[A]=J},get:function(A){if(this.enabled===!1)return;return this.files[A]},remove:function(A){delete this.files[A]},clear:function(){this.files={}}};class BP{constructor(A,J,H){let E=this,X=!1,V=0,U=0,Z=void 0,R=[];this.onStart=void 0,this.onLoad=A,this.onProgress=J,this.onError=H,this.itemStart=function(Y){if(U++,X===!1){if(E.onStart!==void 0)E.onStart(Y,V,U)}X=!0},this.itemEnd=function(Y){if(V++,E.onProgress!==void 0)E.onProgress(Y,V,U);if(V===U){if(X=!1,E.onLoad!==void 0)E.onLoad()}},this.itemError=function(Y){if(E.onError!==void 0)E.onError(Y)},this.resolveURL=function(Y){if(Z)return Z(Y);return Y},this.setURLModifier=function(Y){return Z=Y,this},this.addHandler=function(Y,P){return R.push(Y,P),this},this.removeHandler=function(Y){let P=R.indexOf(Y);if(P!==-1)R.splice(P,2);return this},this.getHandler=function(Y){for(let P=0,N=R.length;P<N;P+=2){let I=R[P],z=R[P+1];if(I.global)I.lastIndex=0;if(I.test(Y))return z}return null}}}var Jz=new BP;class V9{constructor(A){this.manager=A!==void 0?A:Jz,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,J){let H=this;return new Promise(function(E,X){H.load(A,E,J,X)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}V9.DEFAULT_MATERIAL_NAME="__DEFAULT";class GP extends V9{constructor(A){super(A)}load(A,J,H,E){if(this.path!==void 0)A=this.path+A;A=this.manager.resolveURL(A);let X=this,V=N7.get(A);if(V!==void 0)return X.manager.itemStart(A),setTimeout(function(){if(J)J(V);X.manager.itemEnd(A)},0),V;let U=GE("img");function Z(){if(Y(),N7.add(A,this),J)J(this);X.manager.itemEnd(A)}function R(P){if(Y(),E)E(P);X.manager.itemError(A),X.manager.itemEnd(A)}function Y(){U.removeEventListener("load",Z,!1),U.removeEventListener("error",R,!1)}if(U.addEventListener("load",Z,!1),U.addEventListener("error",R,!1),A.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)U.crossOrigin=this.crossOrigin}return X.manager.itemStart(A),U.src=A,U}}class JZ extends V9{constructor(A){super(A)}load(A,J,H,E){let X=new hJ,V=new GP(this.manager);return V.setCrossOrigin(this.crossOrigin),V.setPath(this.path),V.load(A,function(U){if(X.image=U,X.needsUpdate=!0,J!==void 0)J(X)},H,E),X}}class U9 extends wJ{constructor(A,J=1){super();this.isLight=!0,this.type="Light",this.color=new F6(A),this.intensity=J}dispose(){}copy(A,J){return super.copy(A,J),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){let J=super.toJSON(A);if(J.object.color=this.color.getHex(),J.object.intensity=this.intensity,this.groundColor!==void 0)J.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)J.object.distance=this.distance;if(this.angle!==void 0)J.object.angle=this.angle;if(this.decay!==void 0)J.object.decay=this.decay;if(this.penumbra!==void 0)J.object.penumbra=this.penumbra;if(this.shadow!==void 0)J.object.shadow=this.shadow.toJSON();if(this.target!==void 0)J.object.target=this.target.uuid;return J}}class HZ extends U9{constructor(A,J,H){super(A,H);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new F6(J)}copy(A,J){return super.copy(A,J),this.groundColor.copy(A.groundColor),this}}var P7=new x6,oq=new g,rq=new g;class Hz{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X6(512,512),this.map=null,this.mapPass=null,this.matrix=new x6,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new X9,this._frameExtents=new X6(1,1),this._viewportCount=1,this._viewports=[new UJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){let J=this.camera,H=this.matrix;oq.setFromMatrixPosition(A.matrixWorld),J.position.copy(oq),rq.setFromMatrixPosition(A.target.matrixWorld),J.lookAt(rq),J.updateMatrixWorld(),P7.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P7),H.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),H.multiply(P7)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let A={};if(this.intensity!==1)A.intensity=this.intensity;if(this.bias!==0)A.bias=this.bias;if(this.normalBias!==0)A.normalBias=this.normalBias;if(this.radius!==1)A.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)A.mapSize=this.mapSize.toArray();return A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class EZ extends eU{constructor(A=-1,J=1,H=1,E=-1,X=0.1,V=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=J,this.top=H,this.bottom=E,this.near=X,this.far=V,this.updateProjectionMatrix()}copy(A,J){return super.copy(A,J),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,J,H,E,X,V){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=J,this.view.offsetX=H,this.view.offsetY=E,this.view.width=X,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let A=(this.right-this.left)/(2*this.zoom),J=(this.top-this.bottom)/(2*this.zoom),H=(this.right+this.left)/2,E=(this.top+this.bottom)/2,X=H-A,V=H+A,U=E+J,Z=E-J;if(this.view!==null&&this.view.enabled){let R=(this.right-this.left)/this.view.fullWidth/this.zoom,Y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;X+=R*this.view.offsetX,V=X+R*this.view.width,U-=Y*this.view.offsetY,Z=U-Y*this.view.height}this.projectionMatrix.makeOrthographic(X,V,U,Z,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let J=super.toJSON(A);if(J.object.zoom=this.zoom,J.object.left=this.left,J.object.right=this.right,J.object.top=this.top,J.object.bottom=this.bottom,J.object.near=this.near,J.object.far=this.far,this.view!==null)J.object.view=Object.assign({},this.view);return J}}class Ez extends Hz{constructor(){super(new EZ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Z9 extends U9{constructor(A,J){super(A,J);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.target=new wJ,this.shadow=new Ez}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class XZ extends U9{constructor(A,J){super(A,J);this.isAmbientLight=!0,this.type="AmbientLight"}}class WP extends H8{constructor(A=[]){super();this.isArrayCamera=!0,this.cameras=A}}var OP="\\[\\]\\.:\\/",tG=new RegExp("["+OP+"]","g"),MP="[^"+OP+"]",aG="[^"+OP.replace("\\.","")+"]",eG=/((?:WC+[\/:])*)/.source.replace("WC",MP),$G=/(WCOD+)?/.source.replace("WCOD",aG),_G=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",MP),AW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",MP),JW=new RegExp("^"+eG+$G+_G+AW+"$"),HW=["material","materials","bones","map"];class Xz{constructor(A,J,H){let E=H||T6.parseTrackName(J);this._targetGroup=A,this._bindings=A.subscribe_(J,E)}getValue(A,J){this.bind();let H=this._targetGroup.nCachedObjects_,E=this._bindings[H];if(E!==void 0)E.getValue(A,J)}setValue(A,J){let H=this._bindings;for(let E=this._targetGroup.nCachedObjects_,X=H.length;E!==X;++E)H[E].setValue(A,J)}bind(){let A=this._bindings;for(let J=this._targetGroup.nCachedObjects_,H=A.length;J!==H;++J)A[J].bind()}unbind(){let A=this._bindings;for(let J=this._targetGroup.nCachedObjects_,H=A.length;J!==H;++J)A[J].unbind()}}class T6{constructor(A,J,H){this.path=J,this.parsedPath=H||T6.parseTrackName(J),this.node=T6.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,J,H){if(!(A&&A.isAnimationObjectGroup))return new T6(A,J,H);else return new T6.Composite(A,J,H)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(tG,"")}static parseTrackName(A){let J=JW.exec(A);if(J===null)throw Error("PropertyBinding: Cannot parse trackName: "+A);let H={nodeName:J[2],objectName:J[3],objectIndex:J[4],propertyName:J[5],propertyIndex:J[6]},E=H.nodeName&&H.nodeName.lastIndexOf(".");if(E!==void 0&&E!==-1){let X=H.nodeName.substring(E+1);if(HW.indexOf(X)!==-1)H.nodeName=H.nodeName.substring(0,E),H.objectName=X}if(H.propertyName===null||H.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+A);return H}static findNode(A,J){if(J===void 0||J===""||J==="."||J===-1||J===A.name||J===A.uuid)return A;if(A.skeleton){let H=A.skeleton.getBoneByName(J);if(H!==void 0)return H}if(A.children){let H=function(X){for(let V=0;V<X.length;V++){let U=X[V];if(U.name===J||U.uuid===J)return U;let Z=H(U.children);if(Z)return Z}return null},E=H(A.children);if(E)return E}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,J){A[J]=this.targetObject[this.propertyName]}_getValue_array(A,J){let H=this.resolvedProperty;for(let E=0,X=H.length;E!==X;++E)A[J++]=H[E]}_getValue_arrayElement(A,J){A[J]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,J){this.resolvedProperty.toArray(A,J)}_setValue_direct(A,J){this.targetObject[this.propertyName]=A[J]}_setValue_direct_setNeedsUpdate(A,J){this.targetObject[this.propertyName]=A[J],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,J){this.targetObject[this.propertyName]=A[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,J){let H=this.resolvedProperty;for(let E=0,X=H.length;E!==X;++E)H[E]=A[J++]}_setValue_array_setNeedsUpdate(A,J){let H=this.resolvedProperty;for(let E=0,X=H.length;E!==X;++E)H[E]=A[J++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,J){let H=this.resolvedProperty;for(let E=0,X=H.length;E!==X;++E)H[E]=A[J++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,J){this.resolvedProperty[this.propertyIndex]=A[J]}_setValue_arrayElement_setNeedsUpdate(A,J){this.resolvedProperty[this.propertyIndex]=A[J],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,J){this.resolvedProperty[this.propertyIndex]=A[J],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,J){this.resolvedProperty.fromArray(A,J)}_setValue_fromArray_setNeedsUpdate(A,J){this.resolvedProperty.fromArray(A,J),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,J){this.resolvedProperty.fromArray(A,J),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,J){this.bind(),this.getValue(A,J)}_setValue_unbound(A,J){this.bind(),this.setValue(A,J)}bind(){let A=this.node,J=this.parsedPath,H=J.objectName,E=J.propertyName,X=J.propertyIndex;if(!A)A=T6.findNode(this.rootNode,J.nodeName),this.node=A;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(H){let R=J.objectIndex;switch(H){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let Y=0;Y<A.length;Y++)if(A[Y].name===R){R=Y;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[H]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[H]}if(R!==void 0){if(A[R]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[R]}}let V=A[E];if(V===void 0){let R=J.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+R+"."+E+" but it wasn't found.",A);return}let U=this.Versioning.None;if(this.targetObject=A,A.needsUpdate!==void 0)U=this.Versioning.NeedsUpdate;else if(A.matrixWorldNeedsUpdate!==void 0)U=this.Versioning.MatrixWorldNeedsUpdate;let Z=this.BindingType.Direct;if(X!==void 0){if(E==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(A.morphTargetDictionary[X]!==void 0)X=A.morphTargetDictionary[X]}Z=this.BindingType.ArrayElement,this.resolvedProperty=V,this.propertyIndex=X}else if(V.fromArray!==void 0&&V.toArray!==void 0)Z=this.BindingType.HasFromToArray,this.resolvedProperty=V;else if(Array.isArray(V))Z=this.BindingType.EntireArray,this.resolvedProperty=V;else this.propertyName=E;this.getValue=this.GetterByBindingType[Z],this.setValue=this.SetterByBindingTypeAndVersioning[Z][U]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}T6.Composite=Xz;T6.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};T6.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};T6.prototype.GetterByBindingType=[T6.prototype._getValue_direct,T6.prototype._getValue_array,T6.prototype._getValue_arrayElement,T6.prototype._getValue_toArray];T6.prototype.SetterByBindingTypeAndVersioning=[[T6.prototype._setValue_direct,T6.prototype._setValue_direct_setNeedsUpdate,T6.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[T6.prototype._setValue_array,T6.prototype._setValue_array_setNeedsUpdate,T6.prototype._setValue_array_setMatrixWorldNeedsUpdate],[T6.prototype._setValue_arrayElement,T6.prototype._setValue_arrayElement_setNeedsUpdate,T6.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[T6.prototype._setValue_fromArray,T6.prototype._setValue_fromArray_setNeedsUpdate,T6.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QD=new Float32Array(1);var tq=new x6;class VZ{constructor(A,J,H=0,E=1/0){this.ray=new KE(A,J),this.near=H,this.far=E,this.camera=null,this.layers=new H9,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,J){this.ray.set(A,J)}setFromCamera(A,J){if(J.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(A.x,A.y,0.5).unproject(J).sub(this.ray.origin).normalize(),this.camera=J;else if(J.isOrthographicCamera)this.ray.origin.set(A.x,A.y,(J.near+J.far)/(J.near-J.far)).unproject(J),this.ray.direction.set(0,0,-1).transformDirection(J.matrixWorld),this.camera=J;else console.error("THREE.Raycaster: Unsupported camera type: "+J.type)}setFromXRController(A){return tq.identity().extractRotation(A.matrixWorld),this.ray.origin.setFromMatrixPosition(A.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tq),this}intersectObject(A,J=!0,H=[]){return q7(A,this,H,J),H.sort(aq),H}intersectObjects(A,J=!0,H=[]){for(let E=0,X=A.length;E<X;E++)q7(A[E],this,H,J);return H.sort(aq),H}}function aq(A,J){return A.distance-J.distance}function q7(A,J,H,E){let X=!0;if(A.layers.test(J.layers)){if(A.raycast(J,H)===!1)X=!1}if(X===!0&&E===!0){let V=A.children;for(let U=0,Z=V.length;U<Z;U++)q7(V[U],J,H,!0)}}class R9{constructor(A=1,J=0,H=0){return this.radius=A,this.phi=J,this.theta=H,this}set(A,J,H){return this.radius=A,this.phi=J,this.theta=H,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=G6(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,J,H){if(this.radius=Math.sqrt(A*A+J*J+H*H),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(A,H),this.phi=Math.acos(G6(J/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class UZ extends cH{constructor(A,J=null){super();this.object=A,this.domElement=J,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function kP(A,J,H,E){let X=EW(E);switch(H){case 1021:return A*J;case 1024:return A*J;case 1025:return A*J*2;case 1028:return A*J/X.components*X.byteLength;case 1029:return A*J/X.components*X.byteLength;case 1030:return A*J*2/X.components*X.byteLength;case 1031:return A*J*2/X.components*X.byteLength;case 1022:return A*J*3/X.components*X.byteLength;case 1023:return A*J*4/X.components*X.byteLength;case 1033:return A*J*4/X.components*X.byteLength;case 33776:case 33777:return Math.floor((A+3)/4)*Math.floor((J+3)/4)*8;case 33778:case 33779:return Math.floor((A+3)/4)*Math.floor((J+3)/4)*16;case 35841:case 35843:return Math.max(A,16)*Math.max(J,8)/4;case 35840:case 35842:return Math.max(A,8)*Math.max(J,8)/2;case 36196:case 37492:return Math.floor((A+3)/4)*Math.floor((J+3)/4)*8;case 37496:return Math.floor((A+3)/4)*Math.floor((J+3)/4)*16;case 37808:return Math.floor((A+3)/4)*Math.floor((J+3)/4)*16;case 37809:return Math.floor((A+4)/5)*Math.floor((J+3)/4)*16;case 37810:return Math.floor((A+4)/5)*Math.floor((J+4)/5)*16;case 37811:return Math.floor((A+5)/6)*Math.floor((J+4)/5)*16;case 37812:return Math.floor((A+5)/6)*Math.floor((J+5)/6)*16;case 37813:return Math.floor((A+7)/8)*Math.floor((J+4)/5)*16;case 37814:return Math.floor((A+7)/8)*Math.floor((J+5)/6)*16;case 37815:return Math.floor((A+7)/8)*Math.floor((J+7)/8)*16;case 37816:return Math.floor((A+9)/10)*Math.floor((J+4)/5)*16;case 37817:return Math.floor((A+9)/10)*Math.floor((J+5)/6)*16;case 37818:return Math.floor((A+9)/10)*Math.floor((J+7)/8)*16;case 37819:return Math.floor((A+9)/10)*Math.floor((J+9)/10)*16;case 37820:return Math.floor((A+11)/12)*Math.floor((J+9)/10)*16;case 37821:return Math.floor((A+11)/12)*Math.floor((J+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(A/4)*Math.ceil(J/4)*16;case 36283:case 36284:return Math.ceil(A/4)*Math.ceil(J/4)*8;case 36285:case 36286:return Math.ceil(A/4)*Math.ceil(J/4)*16}throw Error(`Unable to determine texture byte length for ${H} format.`)}function EW(A){switch(A){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${A}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="171";function Tz(){let A=null,J=!1,H=null,E=null;function X(V,U){H(V,U),E=A.requestAnimationFrame(X)}return{start:function(){if(J===!0)return;if(H===null)return;E=A.requestAnimationFrame(X),J=!0},stop:function(){A.cancelAnimationFrame(E),J=!1},setAnimationLoop:function(V){H=V},setContext:function(V){A=V}}}function XW(A){let J=new WeakMap;function H(Z,R){let{array:Y,usage:P}=Z,N=Y.byteLength,I=A.createBuffer();A.bindBuffer(R,I),A.bufferData(R,Y,P),Z.onUploadCallback();let z;if(Y instanceof Float32Array)z=A.FLOAT;else if(Y instanceof Uint16Array)if(Z.isFloat16BufferAttribute)z=A.HALF_FLOAT;else z=A.UNSIGNED_SHORT;else if(Y instanceof Int16Array)z=A.SHORT;else if(Y instanceof Uint32Array)z=A.UNSIGNED_INT;else if(Y instanceof Int32Array)z=A.INT;else if(Y instanceof Int8Array)z=A.BYTE;else if(Y instanceof Uint8Array)z=A.UNSIGNED_BYTE;else if(Y instanceof Uint8ClampedArray)z=A.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Y);return{buffer:I,type:z,bytesPerElement:Y.BYTES_PER_ELEMENT,version:Z.version,size:N}}function E(Z,R,Y){let{array:P,updateRanges:N}=R;if(A.bindBuffer(Y,Z),N.length===0)A.bufferSubData(Y,0,P);else{N.sort((z,B)=>z.start-B.start);let I=0;for(let z=1;z<N.length;z++){let B=N[I],G=N[z];if(G.start<=B.start+B.count+1)B.count=Math.max(B.count,G.start+G.count-B.start);else++I,N[I]=G}N.length=I+1;for(let z=0,B=N.length;z<B;z++){let G=N[z];A.bufferSubData(Y,G.start*P.BYTES_PER_ELEMENT,P,G.start,G.count)}R.clearUpdateRanges()}R.onUploadCallback()}function X(Z){if(Z.isInterleavedBufferAttribute)Z=Z.data;return J.get(Z)}function V(Z){if(Z.isInterleavedBufferAttribute)Z=Z.data;let R=J.get(Z);if(R)A.deleteBuffer(R.buffer),J.delete(Z)}function U(Z,R){if(Z.isInterleavedBufferAttribute)Z=Z.data;if(Z.isGLBufferAttribute){let P=J.get(Z);if(!P||P.version<Z.version)J.set(Z,{buffer:Z.buffer,type:Z.type,bytesPerElement:Z.elementSize,version:Z.version});return}let Y=J.get(Z);if(Y===void 0)J.set(Z,H(Z,R));else if(Y.version<Z.version){if(Y.size!==Z.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");E(Y.buffer,Z,R),Y.version=Z.version}}return{get:X,remove:V,update:U}}var VW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UW=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YW=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NW=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qW=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IW=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zW=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QW=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FW=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CW=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BW=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GW=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WW=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kW=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DW=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SW=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LW=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KW=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TW=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wW=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fW=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jW=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yW=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vW=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uW=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hW="gl_FragColor = linearToOutputTexel( gl_FragColor );",lW=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pW=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gW=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bW=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xW=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mW=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dW=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nW=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cW=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iW=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sW=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oW=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rW=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tW=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aW=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eW=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$W=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_W=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JO=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EO=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XO=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UO=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZO=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RO=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YO=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PO=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zO=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CO=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BO=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GO=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WO=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kO=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KO=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fO=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jO=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vO=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uO=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xO=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mO=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dO=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nO=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iO=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sO=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oO=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eO=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$O=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_O=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B6={alphahash_fragment:VW,alphahash_pars_fragment:UW,alphamap_fragment:ZW,alphamap_pars_fragment:RW,alphatest_fragment:YW,alphatest_pars_fragment:PW,aomap_fragment:NW,aomap_pars_fragment:qW,batching_pars_vertex:IW,batching_vertex:zW,begin_vertex:QW,beginnormal_vertex:FW,bsdfs:CW,iridescence_fragment:BW,bumpmap_pars_fragment:GW,clipping_planes_fragment:WW,clipping_planes_pars_fragment:OW,clipping_planes_pars_vertex:MW,clipping_planes_vertex:kW,color_fragment:DW,color_pars_fragment:SW,color_pars_vertex:LW,color_vertex:KW,common:TW,cube_uv_reflection_fragment:wW,defaultnormal_vertex:fW,displacementmap_pars_vertex:jW,displacementmap_vertex:yW,emissivemap_fragment:vW,emissivemap_pars_fragment:uW,colorspace_fragment:hW,colorspace_pars_fragment:lW,envmap_fragment:pW,envmap_common_pars_fragment:gW,envmap_pars_fragment:bW,envmap_pars_vertex:xW,envmap_physical_pars_fragment:eW,envmap_vertex:mW,fog_vertex:dW,fog_pars_vertex:nW,fog_fragment:cW,fog_pars_fragment:iW,gradientmap_pars_fragment:sW,lightmap_pars_fragment:oW,lights_lambert_fragment:rW,lights_lambert_pars_fragment:tW,lights_pars_begin:aW,lights_toon_fragment:$W,lights_toon_pars_fragment:_W,lights_phong_fragment:AO,lights_phong_pars_fragment:JO,lights_physical_fragment:HO,lights_physical_pars_fragment:EO,lights_fragment_begin:XO,lights_fragment_maps:VO,lights_fragment_end:UO,logdepthbuf_fragment:ZO,logdepthbuf_pars_fragment:RO,logdepthbuf_pars_vertex:YO,logdepthbuf_vertex:PO,map_fragment:NO,map_pars_fragment:qO,map_particle_fragment:IO,map_particle_pars_fragment:zO,metalnessmap_fragment:QO,metalnessmap_pars_fragment:FO,morphinstance_vertex:CO,morphcolor_vertex:BO,morphnormal_vertex:GO,morphtarget_pars_vertex:WO,morphtarget_vertex:OO,normal_fragment_begin:MO,normal_fragment_maps:kO,normal_pars_fragment:DO,normal_pars_vertex:SO,normal_vertex:LO,normalmap_pars_fragment:KO,clearcoat_normal_fragment_begin:TO,clearcoat_normal_fragment_maps:wO,clearcoat_pars_fragment:fO,iridescence_pars_fragment:jO,opaque_fragment:yO,packing:vO,premultiplied_alpha_fragment:uO,project_vertex:hO,dithering_fragment:lO,dithering_pars_fragment:pO,roughnessmap_fragment:gO,roughnessmap_pars_fragment:bO,shadowmap_pars_fragment:xO,shadowmap_pars_vertex:mO,shadowmap_vertex:dO,shadowmask_pars_fragment:nO,skinbase_vertex:cO,skinning_pars_vertex:iO,skinning_vertex:sO,skinnormal_vertex:oO,specularmap_fragment:rO,specularmap_pars_fragment:tO,tonemapping_fragment:aO,tonemapping_pars_fragment:eO,transmission_fragment:$O,transmission_pars_fragment:_O,uv_pars_fragment:A4,uv_pars_vertex:J4,uv_vertex:H4,worldpos_vertex:E4,background_vert:X4,background_frag:V4,backgroundCube_vert:U4,backgroundCube_frag:Z4,cube_vert:R4,cube_frag:Y4,depth_vert:P4,depth_frag:N4,distanceRGBA_vert:q4,distanceRGBA_frag:I4,equirect_vert:z4,equirect_frag:Q4,linedashed_vert:F4,linedashed_frag:C4,meshbasic_vert:B4,meshbasic_frag:G4,meshlambert_vert:W4,meshlambert_frag:O4,meshmatcap_vert:M4,meshmatcap_frag:k4,meshnormal_vert:D4,meshnormal_frag:S4,meshphong_vert:L4,meshphong_frag:K4,meshphysical_vert:T4,meshphysical_frag:w4,meshtoon_vert:f4,meshtoon_frag:j4,points_vert:y4,points_frag:v4,shadow_vert:u4,shadow_frag:h4,sprite_vert:l4,sprite_frag:p4},LA={common:{diffuse:{value:new F6(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new C6},alphaMap:{value:null},alphaMapTransform:{value:new C6},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new C6}},envmap:{envMap:{value:null},envMapRotation:{value:new C6},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new C6}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new C6}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new C6},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new C6},normalScale:{value:new X6(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new C6},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new C6}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new C6}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new C6}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new F6(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new F6(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new C6},alphaTest:{value:0},uvTransform:{value:new C6}},sprite:{diffuse:{value:new F6(16777215)},opacity:{value:1},center:{value:new X6(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new C6},alphaMap:{value:null},alphaMapTransform:{value:new C6},alphaTest:{value:0}}},WH={basic:{uniforms:sJ([LA.common,LA.specularmap,LA.envmap,LA.aomap,LA.lightmap,LA.fog]),vertexShader:B6.meshbasic_vert,fragmentShader:B6.meshbasic_frag},lambert:{uniforms:sJ([LA.common,LA.specularmap,LA.envmap,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.fog,LA.lights,{emissive:{value:new F6(0)}}]),vertexShader:B6.meshlambert_vert,fragmentShader:B6.meshlambert_frag},phong:{uniforms:sJ([LA.common,LA.specularmap,LA.envmap,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.fog,LA.lights,{emissive:{value:new F6(0)},specular:{value:new F6(1118481)},shininess:{value:30}}]),vertexShader:B6.meshphong_vert,fragmentShader:B6.meshphong_frag},standard:{uniforms:sJ([LA.common,LA.envmap,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.roughnessmap,LA.metalnessmap,LA.fog,LA.lights,{emissive:{value:new F6(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:B6.meshphysical_vert,fragmentShader:B6.meshphysical_frag},toon:{uniforms:sJ([LA.common,LA.aomap,LA.lightmap,LA.emissivemap,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.gradientmap,LA.fog,LA.lights,{emissive:{value:new F6(0)}}]),vertexShader:B6.meshtoon_vert,fragmentShader:B6.meshtoon_frag},matcap:{uniforms:sJ([LA.common,LA.bumpmap,LA.normalmap,LA.displacementmap,LA.fog,{matcap:{value:null}}]),vertexShader:B6.meshmatcap_vert,fragmentShader:B6.meshmatcap_frag},points:{uniforms:sJ([LA.points,LA.fog]),vertexShader:B6.points_vert,fragmentShader:B6.points_frag},dashed:{uniforms:sJ([LA.common,LA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:B6.linedashed_vert,fragmentShader:B6.linedashed_frag},depth:{uniforms:sJ([LA.common,LA.displacementmap]),vertexShader:B6.depth_vert,fragmentShader:B6.depth_frag},normal:{uniforms:sJ([LA.common,LA.bumpmap,LA.normalmap,LA.displacementmap,{opacity:{value:1}}]),vertexShader:B6.meshnormal_vert,fragmentShader:B6.meshnormal_frag},sprite:{uniforms:sJ([LA.sprite,LA.fog]),vertexShader:B6.sprite_vert,fragmentShader:B6.sprite_frag},background:{uniforms:{uvTransform:{value:new C6},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:B6.background_vert,fragmentShader:B6.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new C6}},vertexShader:B6.backgroundCube_vert,fragmentShader:B6.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:B6.cube_vert,fragmentShader:B6.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:B6.equirect_vert,fragmentShader:B6.equirect_frag},distanceRGBA:{uniforms:sJ([LA.common,LA.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:B6.distanceRGBA_vert,fragmentShader:B6.distanceRGBA_frag},shadow:{uniforms:sJ([LA.lights,LA.fog,{color:{value:new F6(0)},opacity:{value:1}}]),vertexShader:B6.shadow_vert,fragmentShader:B6.shadow_frag}};WH.physical={uniforms:sJ([WH.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new C6},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new C6},clearcoatNormalScale:{value:new X6(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new C6},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new C6},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new C6},sheen:{value:0},sheenColor:{value:new F6(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new C6},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new C6},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new C6},transmissionSamplerSize:{value:new X6},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new C6},attenuationDistance:{value:0},attenuationColor:{value:new F6(0)},specularColor:{value:new F6(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new C6},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new C6},anisotropyVector:{value:new X6},anisotropyMap:{value:null},anisotropyMapTransform:{value:new C6}}]),vertexShader:B6.meshphysical_vert,fragmentShader:B6.meshphysical_frag};var ZZ={r:0,b:0,g:0},C0=new EH,g4=new x6;function b4(A,J,H,E,X,V,U){let Z=new F6(0),R=V===!0?0:1,Y,P,N=null,I=0,z=null;function B(Q){let D=Q.isScene===!0?Q.background:null;if(D&&D.isTexture)D=(Q.backgroundBlurriness>0?H:J).get(D);return D}function G(Q){let D=!1,f=B(Q);if(f===null)q(Z,R);else if(f&&f.isColor)q(f,1),D=!0;let S=A.xr.getEnvironmentBlendMode();if(S==="additive")E.buffers.color.setClear(0,0,0,1,U);else if(S==="alpha-blend")E.buffers.color.setClear(0,0,0,0,U);if(A.autoClear||D)E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil)}function F(Q,D){let f=B(D);if(f&&(f.isCubeTexture||f.mapping===aX)){if(P===void 0)P=new aA(new m6(1,1,1),new GH({name:"BackgroundCubeMaterial",uniforms:I0(WH.backgroundCube.uniforms),vertexShader:WH.backgroundCube.vertexShader,fragmentShader:WH.backgroundCube.fragmentShader,side:k8,depthTest:!1,depthWrite:!1,fog:!1})),P.geometry.deleteAttribute("normal"),P.geometry.deleteAttribute("uv"),P.onBeforeRender=function(S,L,u){this.matrixWorld.copyPosition(u.matrixWorld)},Object.defineProperty(P.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),X.update(P);if(C0.copy(D.backgroundRotation),C0.x*=-1,C0.y*=-1,C0.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1)C0.y*=-1,C0.z*=-1;if(P.material.uniforms.envMap.value=f,P.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,P.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,P.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,P.material.uniforms.backgroundRotation.value.setFromMatrix4(g4.makeRotationFromEuler(C0)),P.material.toneMapped=f6.getTransfer(f.colorSpace)!==i6,N!==f||I!==f.version||z!==A.toneMapping)P.material.needsUpdate=!0,N=f,I=f.version,z=A.toneMapping;P.layers.enableAll(),Q.unshift(P,P.geometry,P.material,0,0,null)}else if(f&&f.isTexture){if(Y===void 0)Y=new aA(new ZJ(2,2),new GH({name:"BackgroundMaterial",uniforms:I0(WH.background.uniforms),vertexShader:WH.background.vertexShader,fragmentShader:WH.background.fragmentShader,side:mH,depthTest:!1,depthWrite:!1,fog:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),X.update(Y);if(Y.material.uniforms.t2D.value=f,Y.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,Y.material.toneMapped=f6.getTransfer(f.colorSpace)!==i6,f.matrixAutoUpdate===!0)f.updateMatrix();if(Y.material.uniforms.uvTransform.value.copy(f.matrix),N!==f||I!==f.version||z!==A.toneMapping)Y.material.needsUpdate=!0,N=f,I=f.version,z=A.toneMapping;Y.layers.enableAll(),Q.unshift(Y,Y.geometry,Y.material,0,0,null)}}function q(Q,D){Q.getRGB(ZZ,UP(A)),E.buffers.color.setClear(ZZ.r,ZZ.g,ZZ.b,D,U)}function C(){if(P!==void 0)P.geometry.dispose(),P.material.dispose();if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose()}return{getClearColor:function(){return Z},setClearColor:function(Q,D=1){Z.set(Q),R=D,q(Z,R)},getClearAlpha:function(){return R},setClearAlpha:function(Q){R=Q,q(Z,R)},render:G,addToRenderList:F,dispose:C}}function x4(A,J){let H=A.getParameter(A.MAX_VERTEX_ATTRIBS),E={},X=I(null),V=X,U=!1;function Z(O,j,x,c,i){let AA=!1,t=N(c,x,j);if(V!==t)V=t,Y(V.object);if(AA=z(O,c,x,i),AA)B(O,c,x,i);if(i!==null)J.update(i,A.ELEMENT_ARRAY_BUFFER);if(AA||U){if(U=!1,D(O,j,x,c),i!==null)A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,J.get(i).buffer)}}function R(){return A.createVertexArray()}function Y(O){return A.bindVertexArray(O)}function P(O){return A.deleteVertexArray(O)}function N(O,j,x){let c=x.wireframe===!0,i=E[O.id];if(i===void 0)i={},E[O.id]=i;let AA=i[j.id];if(AA===void 0)AA={},i[j.id]=AA;let t=AA[c];if(t===void 0)t=I(R()),AA[c]=t;return t}function I(O){let j=[],x=[],c=[];for(let i=0;i<H;i++)j[i]=0,x[i]=0,c[i]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:x,attributeDivisors:c,object:O,attributes:{},index:null}}function z(O,j,x,c){let i=V.attributes,AA=j.attributes,t=0,XA=x.getAttributes();for(let s in XA)if(XA[s].location>=0){let hA=i[s],$A=AA[s];if($A===void 0){if(s==="instanceMatrix"&&O.instanceMatrix)$A=O.instanceMatrix;if(s==="instanceColor"&&O.instanceColor)$A=O.instanceColor}if(hA===void 0)return!0;if(hA.attribute!==$A)return!0;if($A&&hA.data!==$A.data)return!0;t++}if(V.attributesNum!==t)return!0;if(V.index!==c)return!0;return!1}function B(O,j,x,c){let i={},AA=j.attributes,t=0,XA=x.getAttributes();for(let s in XA)if(XA[s].location>=0){let hA=AA[s];if(hA===void 0){if(s==="instanceMatrix"&&O.instanceMatrix)hA=O.instanceMatrix;if(s==="instanceColor"&&O.instanceColor)hA=O.instanceColor}let $A={};if($A.attribute=hA,hA&&hA.data)$A.data=hA.data;i[s]=$A,t++}V.attributes=i,V.attributesNum=t,V.index=c}function G(){let O=V.newAttributes;for(let j=0,x=O.length;j<x;j++)O[j]=0}function F(O){q(O,0)}function q(O,j){let{newAttributes:x,enabledAttributes:c,attributeDivisors:i}=V;if(x[O]=1,c[O]===0)A.enableVertexAttribArray(O),c[O]=1;if(i[O]!==j)A.vertexAttribDivisor(O,j),i[O]=j}function C(){let{newAttributes:O,enabledAttributes:j}=V;for(let x=0,c=j.length;x<c;x++)if(j[x]!==O[x])A.disableVertexAttribArray(x),j[x]=0}function Q(O,j,x,c,i,AA,t){if(t===!0)A.vertexAttribIPointer(O,j,x,i,AA);else A.vertexAttribPointer(O,j,x,c,i,AA)}function D(O,j,x,c){G();let i=c.attributes,AA=x.getAttributes(),t=j.defaultAttributeValues;for(let XA in AA){let s=AA[XA];if(s.location>=0){let jA=i[XA];if(jA===void 0){if(XA==="instanceMatrix"&&O.instanceMatrix)jA=O.instanceMatrix;if(XA==="instanceColor"&&O.instanceColor)jA=O.instanceColor}if(jA!==void 0){let{normalized:hA,itemSize:$A}=jA,W6=J.get(jA);if(W6===void 0)continue;let{buffer:$,type:QA,bytesPerElement:rA}=W6,eA=QA===A.INT||QA===A.UNSIGNED_INT||jA.gpuType===B7;if(jA.isInterleavedBufferAttribute){let kA=jA.data,A6=kA.stride,j6=jA.offset;if(kA.isInstancedInterleavedBuffer){for(let k6=0;k6<s.locationSize;k6++)q(s.location+k6,kA.meshPerAttribute);if(O.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=kA.meshPerAttribute*kA.count}else for(let k6=0;k6<s.locationSize;k6++)F(s.location+k6);A.bindBuffer(A.ARRAY_BUFFER,$);for(let k6=0;k6<s.locationSize;k6++)Q(s.location+k6,$A/s.locationSize,QA,hA,A6*rA,(j6+$A/s.locationSize*k6)*rA,eA)}else{if(jA.isInstancedBufferAttribute){for(let kA=0;kA<s.locationSize;kA++)q(s.location+kA,jA.meshPerAttribute);if(O.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=jA.meshPerAttribute*jA.count}else for(let kA=0;kA<s.locationSize;kA++)F(s.location+kA);A.bindBuffer(A.ARRAY_BUFFER,$);for(let kA=0;kA<s.locationSize;kA++)Q(s.location+kA,$A/s.locationSize,QA,hA,$A*rA,$A/s.locationSize*kA*rA,eA)}}else if(t!==void 0){let hA=t[XA];if(hA!==void 0)switch(hA.length){case 2:A.vertexAttrib2fv(s.location,hA);break;case 3:A.vertexAttrib3fv(s.location,hA);break;case 4:A.vertexAttrib4fv(s.location,hA);break;default:A.vertexAttrib1fv(s.location,hA)}}}}C()}function f(){u();for(let O in E){let j=E[O];for(let x in j){let c=j[x];for(let i in c)P(c[i].object),delete c[i];delete j[x]}delete E[O]}}function S(O){if(E[O.id]===void 0)return;let j=E[O.id];for(let x in j){let c=j[x];for(let i in c)P(c[i].object),delete c[i];delete j[x]}delete E[O.id]}function L(O){for(let j in E){let x=E[j];if(x[O.id]===void 0)continue;let c=x[O.id];for(let i in c)P(c[i].object),delete c[i];delete x[O.id]}}function u(){if(k(),U=!0,V===X)return;V=X,Y(V.object)}function k(){X.geometry=null,X.program=null,X.wireframe=!1}return{setup:Z,reset:u,resetDefaultState:k,dispose:f,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:G,enableAttribute:F,disableUnusedAttributes:C}}function m4(A,J,H){let E;function X(Y){E=Y}function V(Y,P){A.drawArrays(E,Y,P),H.update(P,E,1)}function U(Y,P,N){if(N===0)return;A.drawArraysInstanced(E,Y,P,N),H.update(P,E,N)}function Z(Y,P,N){if(N===0)return;J.get("WEBGL_multi_draw").multiDrawArraysWEBGL(E,Y,0,P,0,N);let z=0;for(let B=0;B<N;B++)z+=P[B];H.update(z,E,1)}function R(Y,P,N,I){if(N===0)return;let z=J.get("WEBGL_multi_draw");if(z===null)for(let B=0;B<Y.length;B++)U(Y[B],P[B],I[B]);else{z.multiDrawArraysInstancedWEBGL(E,Y,0,P,0,I,0,N);let B=0;for(let G=0;G<N;G++)B+=P[G]*I[G];H.update(B,E,1)}}this.setMode=X,this.render=V,this.renderInstances=U,this.renderMultiDraw=Z,this.renderMultiDrawInstances=R}function d4(A,J,H,E){let X;function V(){if(X!==void 0)return X;if(J.has("EXT_texture_filter_anisotropic")===!0){let L=J.get("EXT_texture_filter_anisotropic");X=A.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else X=0;return X}function U(L){if(L!==b8&&E.convert(L)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Z(L){let u=L===$X&&(J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float"));if(L!==K1&&E.convert(L)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==T1&&!u)return!1;return!0}function R(L){if(L==="highp"){if(A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.HIGH_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.MEDIUM_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let Y=H.precision!==void 0?H.precision:"highp",P=R(Y);if(P!==Y)console.warn("THREE.WebGLRenderer:",Y,"not supported, using",P,"instead."),Y=P;let N=H.logarithmicDepthBuffer===!0,I=H.reverseDepthBuffer===!0&&J.has("EXT_clip_control"),z=A.getParameter(A.MAX_TEXTURE_IMAGE_UNITS),B=A.getParameter(A.MAX_VERTEX_TEXTURE_IMAGE_UNITS),G=A.getParameter(A.MAX_TEXTURE_SIZE),F=A.getParameter(A.MAX_CUBE_MAP_TEXTURE_SIZE),q=A.getParameter(A.MAX_VERTEX_ATTRIBS),C=A.getParameter(A.MAX_VERTEX_UNIFORM_VECTORS),Q=A.getParameter(A.MAX_VARYING_VECTORS),D=A.getParameter(A.MAX_FRAGMENT_UNIFORM_VECTORS),f=B>0,S=A.getParameter(A.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:V,getMaxPrecision:R,textureFormatReadable:U,textureTypeReadable:Z,precision:Y,logarithmicDepthBuffer:N,reverseDepthBuffer:I,maxTextures:z,maxVertexTextures:B,maxTextureSize:G,maxCubemapSize:F,maxAttributes:q,maxVertexUniforms:C,maxVaryings:Q,maxFragmentUniforms:D,vertexTextures:f,maxSamples:S}}function n4(A){let J=this,H=null,E=0,X=!1,V=!1,U=new N8,Z=new C6,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(N,I){let z=N.length!==0||I||E!==0||X;return X=I,E=N.length,z},this.beginShadows=function(){V=!0,P(null)},this.endShadows=function(){V=!1},this.setGlobalState=function(N,I){H=P(N,I,0)},this.setState=function(N,I,z){let{clippingPlanes:B,clipIntersection:G,clipShadows:F}=N,q=A.get(N);if(!X||B===null||B.length===0||V&&!F)if(V)P(null);else Y();else{let C=V?0:E,Q=C*4,D=q.clippingState||null;R.value=D,D=P(B,I,Q,z);for(let f=0;f!==Q;++f)D[f]=H[f];q.clippingState=D,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=C}};function Y(){if(R.value!==H)R.value=H,R.needsUpdate=E>0;J.numPlanes=E,J.numIntersection=0}function P(N,I,z,B){let G=N!==null?N.length:0,F=null;if(G!==0){if(F=R.value,B!==!0||F===null){let q=z+G*4,C=I.matrixWorldInverse;if(Z.getNormalMatrix(C),F===null||F.length<q)F=new Float32Array(q);for(let Q=0,D=z;Q!==G;++Q,D+=4)U.copy(N[Q]).applyMatrix4(C,Z),U.normal.toArray(F,D),F[D+3]=U.constant}R.value=F,R.needsUpdate=!0}return J.numPlanes=G,J.numIntersection=0,F}}function c4(A){let J=new WeakMap;function H(U,Z){if(Z===lU)U.mapping=OE;else if(Z===pU)U.mapping=Z0;return U}function E(U){if(U&&U.isTexture){let Z=U.mapping;if(Z===lU||Z===pU)if(J.has(U)){let R=J.get(U).texture;return H(R,U.mapping)}else{let R=U.image;if(R&&R.height>0){let Y=new RP(R.height);return Y.fromEquirectangularTexture(A,U),J.set(U,Y),U.addEventListener("dispose",X),H(Y.texture,U.mapping)}else return null}}return U}function X(U){let Z=U.target;Z.removeEventListener("dispose",X);let R=J.get(Z);if(R!==void 0)J.delete(Z),R.dispose()}function V(){J=new WeakMap}return{get:E,dispose:V}}var vE=4,Vz=[0.125,0.215,0.35,0.446,0.526,0.582],W0=20,DP=new EZ,Uz=new F6,SP=null,LP=0,KP=0,TP=!1,G0=(1+Math.sqrt(5))/2,yE=1/G0,Zz=[new g(-G0,yE,0),new g(G0,yE,0),new g(-yE,0,G0),new g(yE,0,G0),new g(0,G0,-yE),new g(0,G0,yE),new g(-1,1,-1),new g(1,1,-1),new g(-1,1,1),new g(1,1,1)];class fP{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,J=0,H=0.1,E=100){SP=this._renderer.getRenderTarget(),LP=this._renderer.getActiveCubeFace(),KP=this._renderer.getActiveMipmapLevel(),TP=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(A,H,E,X),J>0)this._blur(X,0,0,J);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(A,J=null){return this._fromTexture(A,J)}fromCubemap(A,J=null){return this._fromTexture(A,J)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Pz(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Yz(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(SP,LP,KP),this._renderer.xr.enabled=TP,A.scissorTest=!1,RZ(A,0,0,A.width,A.height)}_fromTexture(A,J){if(A.mapping===OE||A.mapping===Z0)this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width);else this._setSize(A.image.width/4);SP=this._renderer.getRenderTarget(),LP=this._renderer.getActiveCubeFace(),KP=this._renderer.getActiveMipmapLevel(),TP=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let H=J||this._allocateTargets();return this._textureToCubeUV(A,H),this._applyPMREM(H),this._cleanup(H),H}_allocateTargets(){let A=3*Math.max(this._cubeSize,112),J=4*this._cubeSize,H={magFilter:XH,minFilter:XH,generateMipmaps:!1,type:$X,format:b8,colorSpace:A9,depthBuffer:!1},E=Rz(A,J,H);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==J){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Rz(A,J,H);let{_lodMax:X}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i4(X)),this._blurMaterial=s4(X,A,J)}return E}_compileMaterial(A){let J=new aA(this._lodPlanes[0],A);this._renderer.compile(J,DP)}_sceneToCubeUV(A,J,H,E){let U=new H8(90,1,J,H),Z=[1,-1,1,1,1,1],R=[1,1,1,-1,-1,-1],Y=this._renderer,P=Y.autoClear,N=Y.toneMapping;Y.getClearColor(Uz),Y.toneMapping=dH,Y.autoClear=!1;let I=new rU({name:"PMREM.Background",side:k8,depthWrite:!1,depthTest:!1}),z=new aA(new m6,I),B=!1,G=A.background;if(G){if(G.isColor)I.color.copy(G),A.background=null,B=!0}else I.color.copy(Uz),B=!0;for(let F=0;F<6;F++){let q=F%3;if(q===0)U.up.set(0,Z[F],0),U.lookAt(R[F],0,0);else if(q===1)U.up.set(0,0,Z[F]),U.lookAt(0,R[F],0);else U.up.set(0,Z[F],0),U.lookAt(0,0,R[F]);let C=this._cubeSize;if(RZ(E,q*C,F>2?C:0,C,C),Y.setRenderTarget(E),B)Y.render(z,U);Y.render(A,U)}z.geometry.dispose(),z.material.dispose(),Y.toneMapping=N,Y.autoClear=P,A.background=G}_textureToCubeUV(A,J){let H=this._renderer,E=A.mapping===OE||A.mapping===Z0;if(E){if(this._cubemapMaterial===null)this._cubemapMaterial=Pz();this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Yz();let X=E?this._cubemapMaterial:this._equirectMaterial,V=new aA(this._lodPlanes[0],X),U=X.uniforms;U.envMap.value=A;let Z=this._cubeSize;RZ(J,0,0,3*Z,2*Z),H.setRenderTarget(J),H.render(V,DP)}_applyPMREM(A){let J=this._renderer,H=J.autoClear;J.autoClear=!1;let E=this._lodPlanes.length;for(let X=1;X<E;X++){let V=Math.sqrt(this._sigmas[X]*this._sigmas[X]-this._sigmas[X-1]*this._sigmas[X-1]),U=Zz[(E-X-1)%Zz.length];this._blur(A,X-1,X,V,U)}J.autoClear=H}_blur(A,J,H,E,X){let V=this._pingPongRenderTarget;this._halfBlur(A,V,J,H,E,"latitudinal",X),this._halfBlur(V,A,H,H,E,"longitudinal",X)}_halfBlur(A,J,H,E,X,V,U){let Z=this._renderer,R=this._blurMaterial;if(V!=="latitudinal"&&V!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let Y=3,P=new aA(this._lodPlanes[E],R),N=R.uniforms,I=this._sizeLods[H]-1,z=isFinite(X)?Math.PI/(2*I):2*Math.PI/(2*W0-1),B=X/z,G=isFinite(X)?1+Math.floor(Y*B):W0;if(G>W0)console.warn(`sigmaRadians, ${X}, is too large and will clip, as it requested ${G} samples when the maximum is set to ${W0}`);let F=[],q=0;for(let S=0;S<W0;++S){let L=S/B,u=Math.exp(-L*L/2);if(F.push(u),S===0)q+=u;else if(S<G)q+=2*u}for(let S=0;S<F.length;S++)F[S]=F[S]/q;if(N.envMap.value=A.texture,N.samples.value=G,N.weights.value=F,N.latitudinal.value=V==="latitudinal",U)N.poleAxis.value=U;let{_lodMax:C}=this;N.dTheta.value=z,N.mipInt.value=C-H;let Q=this._sizeLods[E],D=3*Q*(E>C-vE?E-C+vE:0),f=4*(this._cubeSize-Q);RZ(J,D,f,3*Q,2*Q),Z.setRenderTarget(J),Z.render(P,DP)}}function i4(A){let J=[],H=[],E=[],X=A,V=A-vE+1+Vz.length;for(let U=0;U<V;U++){let Z=Math.pow(2,X);H.push(Z);let R=1/Z;if(U>A-vE)R=Vz[U-A+vE-1];else if(U===0)R=0;E.push(R);let Y=1/(Z-2),P=-Y,N=1+Y,I=[P,P,N,P,N,N,P,P,N,N,P,N],z=6,B=6,G=3,F=2,q=1,C=new Float32Array(G*B*z),Q=new Float32Array(F*B*z),D=new Float32Array(q*B*z);for(let S=0;S<z;S++){let L=S%3*2/3-1,u=S>2?0:-1,k=[L,u,0,L+0.6666666666666666,u,0,L+0.6666666666666666,u+1,0,L,u,0,L+0.6666666666666666,u+1,0,L,u+1,0];C.set(k,G*B*S),Q.set(I,F*B*S);let O=[S,S,S,S,S,S];D.set(O,q*B*S)}let f=new sH;if(f.setAttribute("position",new IJ(C,G)),f.setAttribute("uv",new IJ(Q,F)),f.setAttribute("faceIndex",new IJ(D,q)),J.push(f),X>vE)X--}return{lodPlanes:J,sizeLods:H,sigmas:E}}function Rz(A,J,H){let E=new iH(A,J,H);return E.texture.mapping=aX,E.texture.name="PMREM.cubeUv",E.scissorTest=!0,E}function RZ(A,J,H,E,X){A.viewport.set(J,H,E,X),A.scissor.set(J,H,E,X)}function s4(A,J,H){let E=new Float32Array(W0),X=new g(0,1,0);return new GH({name:"SphericalGaussianBlur",defines:{n:W0,CUBEUV_TEXEL_WIDTH:1/J,CUBEUV_TEXEL_HEIGHT:1/H,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:E},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:X}},vertexShader:yP(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:S1,depthTest:!1,depthWrite:!1})}function Yz(){return new GH({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yP(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:S1,depthTest:!1,depthWrite:!1})}function Pz(){return new GH({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yP(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:S1,depthTest:!1,depthWrite:!1})}function yP(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o4(A){let J=new WeakMap,H=null;function E(Z){if(Z&&Z.isTexture){let R=Z.mapping,Y=R===lU||R===pU,P=R===OE||R===Z0;if(Y||P){let N=J.get(Z),I=N!==void 0?N.texture.pmremVersion:0;if(Z.isRenderTargetTexture&&Z.pmremVersion!==I){if(H===null)H=new fP(A);return N=Y?H.fromEquirectangular(Z,N):H.fromCubemap(Z,N),N.texture.pmremVersion=Z.pmremVersion,J.set(Z,N),N.texture}else if(N!==void 0)return N.texture;else{let z=Z.image;if(Y&&z&&z.height>0||P&&z&&X(z)){if(H===null)H=new fP(A);return N=Y?H.fromEquirectangular(Z):H.fromCubemap(Z),N.texture.pmremVersion=Z.pmremVersion,J.set(Z,N),Z.addEventListener("dispose",V),N.texture}else return null}}}return Z}function X(Z){let R=0,Y=6;for(let P=0;P<Y;P++)if(Z[P]!==void 0)R++;return R===Y}function V(Z){let R=Z.target;R.removeEventListener("dispose",V);let Y=J.get(R);if(Y!==void 0)J.delete(R),Y.dispose()}function U(){if(J=new WeakMap,H!==null)H.dispose(),H=null}return{get:E,dispose:U}}function r4(A){let J={};function H(E){if(J[E]!==void 0)return J[E];let X;switch(E){case"WEBGL_depth_texture":X=A.getExtension("WEBGL_depth_texture")||A.getExtension("MOZ_WEBGL_depth_texture")||A.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":X=A.getExtension("EXT_texture_filter_anisotropic")||A.getExtension("MOZ_EXT_texture_filter_anisotropic")||A.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":X=A.getExtension("WEBGL_compressed_texture_s3tc")||A.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":X=A.getExtension("WEBGL_compressed_texture_pvrtc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:X=A.getExtension(E)}return J[E]=X,X}return{has:function(E){return H(E)!==null},init:function(){H("EXT_color_buffer_float"),H("WEBGL_clip_cull_distance"),H("OES_texture_float_linear"),H("EXT_color_buffer_half_float"),H("WEBGL_multisampled_render_to_texture"),H("WEBGL_render_shared_exponent")},get:function(E){let X=H(E);if(X===null)P0("THREE.WebGLRenderer: "+E+" extension not supported.");return X}}}function t4(A,J,H,E){let X={},V=new WeakMap;function U(N){let I=N.target;if(I.index!==null)J.remove(I.index);for(let B in I.attributes)J.remove(I.attributes[B]);I.removeEventListener("dispose",U),delete X[I.id];let z=V.get(I);if(z)J.remove(z),V.delete(I);if(E.releaseStatesOfGeometry(I),I.isInstancedBufferGeometry===!0)delete I._maxInstanceCount;H.memory.geometries--}function Z(N,I){if(X[I.id]===!0)return I;return I.addEventListener("dispose",U),X[I.id]=!0,H.memory.geometries++,I}function R(N){let I=N.attributes;for(let z in I)J.update(I[z],A.ARRAY_BUFFER)}function Y(N){let I=[],z=N.index,B=N.attributes.position,G=0;if(z!==null){let C=z.array;G=z.version;for(let Q=0,D=C.length;Q<D;Q+=3){let f=C[Q+0],S=C[Q+1],L=C[Q+2];I.push(f,S,S,L,L,f)}}else if(B!==void 0){let C=B.array;G=B.version;for(let Q=0,D=C.length/3-1;Q<D;Q+=3){let f=Q+0,S=Q+1,L=Q+2;I.push(f,S,S,L,L,f)}}else return;let F=new((HP(I))?aU:tU)(I,1);F.version=G;let q=V.get(N);if(q)J.remove(q);V.set(N,F)}function P(N){let I=V.get(N);if(I){let z=N.index;if(z!==null){if(I.version<z.version)Y(N)}}else Y(N);return V.get(N)}return{get:Z,update:R,getWireframeAttribute:P}}function a4(A,J,H){let E;function X(I){E=I}let V,U;function Z(I){V=I.type,U=I.bytesPerElement}function R(I,z){A.drawElements(E,z,V,I*U),H.update(z,E,1)}function Y(I,z,B){if(B===0)return;A.drawElementsInstanced(E,z,V,I*U,B),H.update(z,E,B)}function P(I,z,B){if(B===0)return;J.get("WEBGL_multi_draw").multiDrawElementsWEBGL(E,z,0,V,I,0,B);let F=0;for(let q=0;q<B;q++)F+=z[q];H.update(F,E,1)}function N(I,z,B,G){if(B===0)return;let F=J.get("WEBGL_multi_draw");if(F===null)for(let q=0;q<I.length;q++)Y(I[q]/U,z[q],G[q]);else{F.multiDrawElementsInstancedWEBGL(E,z,0,V,I,0,G,0,B);let q=0;for(let C=0;C<B;C++)q+=z[C]*G[C];H.update(q,E,1)}}this.setMode=X,this.setIndex=Z,this.render=R,this.renderInstances=Y,this.renderMultiDraw=P,this.renderMultiDrawInstances=N}function e4(A){let J={geometries:0,textures:0},H={frame:0,calls:0,triangles:0,points:0,lines:0};function E(V,U,Z){switch(H.calls++,U){case A.TRIANGLES:H.triangles+=Z*(V/3);break;case A.LINES:H.lines+=Z*(V/2);break;case A.LINE_STRIP:H.lines+=Z*(V-1);break;case A.LINE_LOOP:H.lines+=Z*V;break;case A.POINTS:H.points+=Z*V;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",U);break}}function X(){H.calls=0,H.triangles=0,H.points=0,H.lines=0}return{memory:J,render:H,programs:null,autoReset:!0,reset:X,update:E}}function $4(A,J,H){let E=new WeakMap,X=new UJ;function V(U,Z,R){let Y=U.morphTargetInfluences,P=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,N=P!==void 0?P.length:0,I=E.get(Z);if(I===void 0||I.count!==N){let k=function(){L.dispose(),E.delete(Z),Z.removeEventListener("dispose",k)};if(I!==void 0)I.texture.dispose();let z=Z.morphAttributes.position!==void 0,B=Z.morphAttributes.normal!==void 0,G=Z.morphAttributes.color!==void 0,F=Z.morphAttributes.position||[],q=Z.morphAttributes.normal||[],C=Z.morphAttributes.color||[],Q=0;if(z===!0)Q=1;if(B===!0)Q=2;if(G===!0)Q=3;let D=Z.attributes.position.count*Q,f=1;if(D>J.maxTextureSize)f=Math.ceil(D/J.maxTextureSize),D=J.maxTextureSize;let S=new Float32Array(D*f*4*N),L=new oU(S,D,f,N);L.type=T1,L.needsUpdate=!0;let u=Q*4;for(let O=0;O<N;O++){let j=F[O],x=q[O],c=C[O],i=D*f*4*O;for(let AA=0;AA<j.count;AA++){let t=AA*u;if(z===!0)X.fromBufferAttribute(j,AA),S[i+t+0]=X.x,S[i+t+1]=X.y,S[i+t+2]=X.z,S[i+t+3]=0;if(B===!0)X.fromBufferAttribute(x,AA),S[i+t+4]=X.x,S[i+t+5]=X.y,S[i+t+6]=X.z,S[i+t+7]=0;if(G===!0)X.fromBufferAttribute(c,AA),S[i+t+8]=X.x,S[i+t+9]=X.y,S[i+t+10]=X.z,S[i+t+11]=c.itemSize===4?X.w:1}}I={count:N,texture:L,size:new X6(D,f)},E.set(Z,I),Z.addEventListener("dispose",k)}if(U.isInstancedMesh===!0&&U.morphTexture!==null)R.getUniforms().setValue(A,"morphTexture",U.morphTexture,H);else{let z=0;for(let G=0;G<Y.length;G++)z+=Y[G];let B=Z.morphTargetsRelative?1:1-z;R.getUniforms().setValue(A,"morphTargetBaseInfluence",B),R.getUniforms().setValue(A,"morphTargetInfluences",Y)}R.getUniforms().setValue(A,"morphTargetsTexture",I.texture,H),R.getUniforms().setValue(A,"morphTargetsTextureSize",I.size)}return{update:V}}function _4(A,J,H,E){let X=new WeakMap;function V(R){let Y=E.render.frame,P=R.geometry,N=J.get(R,P);if(X.get(N)!==Y)J.update(N),X.set(N,Y);if(R.isInstancedMesh){if(R.hasEventListener("dispose",Z)===!1)R.addEventListener("dispose",Z);if(X.get(R)!==Y){if(H.update(R.instanceMatrix,A.ARRAY_BUFFER),R.instanceColor!==null)H.update(R.instanceColor,A.ARRAY_BUFFER);X.set(R,Y)}}if(R.isSkinnedMesh){let I=R.skeleton;if(X.get(I)!==Y)I.update(),X.set(I,Y)}return N}function U(){X=new WeakMap}function Z(R){let Y=R.target;if(Y.removeEventListener("dispose",Z),H.remove(Y.instanceMatrix),Y.instanceColor!==null)H.remove(Y.instanceColor)}return{update:V,dispose:U}}var wz=new hJ,Nz=new _U(1,1),fz=new oU,jz=new VP,yz=new $U,qz=[],Iz=[],zz=new Float32Array(16),Qz=new Float32Array(9),Fz=new Float32Array(4);function uE(A,J,H){let E=A[0];if(E<=0||E>0)return A;let X=J*H,V=qz[X];if(V===void 0)V=new Float32Array(X),qz[X]=V;if(J!==0){E.toArray(V,0);for(let U=1,Z=0;U!==J;++U)Z+=H,A[U].toArray(V,Z)}return V}function MJ(A,J){if(A.length!==J.length)return!1;for(let H=0,E=A.length;H<E;H++)if(A[H]!==J[H])return!1;return!0}function kJ(A,J){for(let H=0,E=J.length;H<E;H++)A[H]=J[H]}function NZ(A,J){let H=Iz[J];if(H===void 0)H=new Int32Array(J),Iz[J]=H;for(let E=0;E!==J;++E)H[E]=A.allocateTextureUnit();return H}function AM(A,J){let H=this.cache;if(H[0]===J)return;A.uniform1f(this.addr,J),H[0]=J}function JM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y)A.uniform2f(this.addr,J.x,J.y),H[0]=J.x,H[1]=J.y}else{if(MJ(H,J))return;A.uniform2fv(this.addr,J),kJ(H,J)}}function HM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y||H[2]!==J.z)A.uniform3f(this.addr,J.x,J.y,J.z),H[0]=J.x,H[1]=J.y,H[2]=J.z}else if(J.r!==void 0){if(H[0]!==J.r||H[1]!==J.g||H[2]!==J.b)A.uniform3f(this.addr,J.r,J.g,J.b),H[0]=J.r,H[1]=J.g,H[2]=J.b}else{if(MJ(H,J))return;A.uniform3fv(this.addr,J),kJ(H,J)}}function EM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y||H[2]!==J.z||H[3]!==J.w)A.uniform4f(this.addr,J.x,J.y,J.z,J.w),H[0]=J.x,H[1]=J.y,H[2]=J.z,H[3]=J.w}else{if(MJ(H,J))return;A.uniform4fv(this.addr,J),kJ(H,J)}}function XM(A,J){let H=this.cache,E=J.elements;if(E===void 0){if(MJ(H,J))return;A.uniformMatrix2fv(this.addr,!1,J),kJ(H,J)}else{if(MJ(H,E))return;Fz.set(E),A.uniformMatrix2fv(this.addr,!1,Fz),kJ(H,E)}}function VM(A,J){let H=this.cache,E=J.elements;if(E===void 0){if(MJ(H,J))return;A.uniformMatrix3fv(this.addr,!1,J),kJ(H,J)}else{if(MJ(H,E))return;Qz.set(E),A.uniformMatrix3fv(this.addr,!1,Qz),kJ(H,E)}}function UM(A,J){let H=this.cache,E=J.elements;if(E===void 0){if(MJ(H,J))return;A.uniformMatrix4fv(this.addr,!1,J),kJ(H,J)}else{if(MJ(H,E))return;zz.set(E),A.uniformMatrix4fv(this.addr,!1,zz),kJ(H,E)}}function ZM(A,J){let H=this.cache;if(H[0]===J)return;A.uniform1i(this.addr,J),H[0]=J}function RM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y)A.uniform2i(this.addr,J.x,J.y),H[0]=J.x,H[1]=J.y}else{if(MJ(H,J))return;A.uniform2iv(this.addr,J),kJ(H,J)}}function YM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y||H[2]!==J.z)A.uniform3i(this.addr,J.x,J.y,J.z),H[0]=J.x,H[1]=J.y,H[2]=J.z}else{if(MJ(H,J))return;A.uniform3iv(this.addr,J),kJ(H,J)}}function PM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y||H[2]!==J.z||H[3]!==J.w)A.uniform4i(this.addr,J.x,J.y,J.z,J.w),H[0]=J.x,H[1]=J.y,H[2]=J.z,H[3]=J.w}else{if(MJ(H,J))return;A.uniform4iv(this.addr,J),kJ(H,J)}}function NM(A,J){let H=this.cache;if(H[0]===J)return;A.uniform1ui(this.addr,J),H[0]=J}function qM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y)A.uniform2ui(this.addr,J.x,J.y),H[0]=J.x,H[1]=J.y}else{if(MJ(H,J))return;A.uniform2uiv(this.addr,J),kJ(H,J)}}function IM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y||H[2]!==J.z)A.uniform3ui(this.addr,J.x,J.y,J.z),H[0]=J.x,H[1]=J.y,H[2]=J.z}else{if(MJ(H,J))return;A.uniform3uiv(this.addr,J),kJ(H,J)}}function zM(A,J){let H=this.cache;if(J.x!==void 0){if(H[0]!==J.x||H[1]!==J.y||H[2]!==J.z||H[3]!==J.w)A.uniform4ui(this.addr,J.x,J.y,J.z,J.w),H[0]=J.x,H[1]=J.y,H[2]=J.z,H[3]=J.w}else{if(MJ(H,J))return;A.uniform4uiv(this.addr,J),kJ(H,J)}}function QM(A,J,H){let E=this.cache,X=H.allocateTextureUnit();if(E[0]!==X)A.uniform1i(this.addr,X),E[0]=X;let V;if(this.type===A.SAMPLER_2D_SHADOW)Nz.compareFunction=_7,V=Nz;else V=wz;H.setTexture2D(J||V,X)}function FM(A,J,H){let E=this.cache,X=H.allocateTextureUnit();if(E[0]!==X)A.uniform1i(this.addr,X),E[0]=X;H.setTexture3D(J||jz,X)}function CM(A,J,H){let E=this.cache,X=H.allocateTextureUnit();if(E[0]!==X)A.uniform1i(this.addr,X),E[0]=X;H.setTextureCube(J||yz,X)}function BM(A,J,H){let E=this.cache,X=H.allocateTextureUnit();if(E[0]!==X)A.uniform1i(this.addr,X),E[0]=X;H.setTexture2DArray(J||fz,X)}function GM(A){switch(A){case 5126:return AM;case 35664:return JM;case 35665:return HM;case 35666:return EM;case 35674:return XM;case 35675:return VM;case 35676:return UM;case 5124:case 35670:return ZM;case 35667:case 35671:return RM;case 35668:case 35672:return YM;case 35669:case 35673:return PM;case 5125:return NM;case 36294:return qM;case 36295:return IM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return BM}}function WM(A,J){A.uniform1fv(this.addr,J)}function OM(A,J){let H=uE(J,this.size,2);A.uniform2fv(this.addr,H)}function MM(A,J){let H=uE(J,this.size,3);A.uniform3fv(this.addr,H)}function kM(A,J){let H=uE(J,this.size,4);A.uniform4fv(this.addr,H)}function DM(A,J){let H=uE(J,this.size,4);A.uniformMatrix2fv(this.addr,!1,H)}function SM(A,J){let H=uE(J,this.size,9);A.uniformMatrix3fv(this.addr,!1,H)}function LM(A,J){let H=uE(J,this.size,16);A.uniformMatrix4fv(this.addr,!1,H)}function KM(A,J){A.uniform1iv(this.addr,J)}function TM(A,J){A.uniform2iv(this.addr,J)}function wM(A,J){A.uniform3iv(this.addr,J)}function fM(A,J){A.uniform4iv(this.addr,J)}function jM(A,J){A.uniform1uiv(this.addr,J)}function yM(A,J){A.uniform2uiv(this.addr,J)}function vM(A,J){A.uniform3uiv(this.addr,J)}function uM(A,J){A.uniform4uiv(this.addr,J)}function hM(A,J,H){let E=this.cache,X=J.length,V=NZ(H,X);if(!MJ(E,V))A.uniform1iv(this.addr,V),kJ(E,V);for(let U=0;U!==X;++U)H.setTexture2D(J[U]||wz,V[U])}function lM(A,J,H){let E=this.cache,X=J.length,V=NZ(H,X);if(!MJ(E,V))A.uniform1iv(this.addr,V),kJ(E,V);for(let U=0;U!==X;++U)H.setTexture3D(J[U]||jz,V[U])}function pM(A,J,H){let E=this.cache,X=J.length,V=NZ(H,X);if(!MJ(E,V))A.uniform1iv(this.addr,V),kJ(E,V);for(let U=0;U!==X;++U)H.setTextureCube(J[U]||yz,V[U])}function gM(A,J,H){let E=this.cache,X=J.length,V=NZ(H,X);if(!MJ(E,V))A.uniform1iv(this.addr,V),kJ(E,V);for(let U=0;U!==X;++U)H.setTexture2DArray(J[U]||fz,V[U])}function bM(A){switch(A){case 5126:return WM;case 35664:return OM;case 35665:return MM;case 35666:return kM;case 35674:return DM;case 35675:return SM;case 35676:return LM;case 5124:case 35670:return KM;case 35667:case 35671:return TM;case 35668:case 35672:return wM;case 35669:case 35673:return fM;case 5125:return jM;case 36294:return yM;case 36295:return vM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return gM}}class vz{constructor(A,J,H){this.id=A,this.addr=H,this.cache=[],this.type=J.type,this.setValue=GM(J.type)}}class uz{constructor(A,J,H){this.id=A,this.addr=H,this.cache=[],this.type=J.type,this.size=J.size,this.setValue=bM(J.type)}}class hz{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,J,H){let E=this.seq;for(let X=0,V=E.length;X!==V;++X){let U=E[X];U.setValue(A,J[U.id],H)}}}var wP=/(\w+)(\])?(\[|\.)?/g;function Cz(A,J){A.seq.push(J),A.map[J.id]=J}function xM(A,J,H){let E=A.name,X=E.length;wP.lastIndex=0;while(!0){let V=wP.exec(E),U=wP.lastIndex,Z=V[1],R=V[2]==="]",Y=V[3];if(R)Z=Z|0;if(Y===void 0||Y==="["&&U+2===X){Cz(H,Y===void 0?new vz(Z,A,J):new uz(Z,A,J));break}else{let N=H.map[Z];if(N===void 0)N=new hz(Z),Cz(H,N);H=N}}}class P9{constructor(A,J){this.seq=[],this.map={};let H=A.getProgramParameter(J,A.ACTIVE_UNIFORMS);for(let E=0;E<H;++E){let X=A.getActiveUniform(J,E),V=A.getUniformLocation(J,X.name);xM(X,V,this)}}setValue(A,J,H,E){let X=this.map[J];if(X!==void 0)X.setValue(A,H,E)}setOptional(A,J,H){let E=J[H];if(E!==void 0)this.setValue(A,H,E)}static upload(A,J,H,E){for(let X=0,V=J.length;X!==V;++X){let U=J[X],Z=H[U.id];if(Z.needsUpdate!==!1)U.setValue(A,Z.value,E)}}static seqWithValue(A,J){let H=[];for(let E=0,X=A.length;E!==X;++E){let V=A[E];if(V.id in J)H.push(V)}return H}}function Bz(A,J,H){let E=A.createShader(J);return A.shaderSource(E,H),A.compileShader(E),E}var mM=37297,dM=0;function nM(A,J){let H=A.split(`
`),E=[],X=Math.max(J-6,0),V=Math.min(J+6,H.length);for(let U=X;U<V;U++){let Z=U+1;E.push(`${Z===J?">":" "} ${Z}: ${H[U]}`)}return E.join(`
`)}var Gz=new C6;function cM(A){f6._getMatrix(Gz,f6.workingColorSpace,A);let J=`mat3( ${Gz.elements.map((H)=>H.toFixed(4))} )`;switch(f6.getTransfer(A)){case $7:return[J,"LinearTransferOETF"];case i6:return[J,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",A),[J,"LinearTransferOETF"]}}function Wz(A,J,H){let E=A.getShaderParameter(J,A.COMPILE_STATUS),X=A.getShaderInfoLog(J).trim();if(E&&X==="")return"";let V=/ERROR: 0:(\d+)/.exec(X);if(V){let U=parseInt(V[1]);return H.toUpperCase()+`

`+X+`

`+nM(A.getShaderSource(J),U)}else return X}function iM(A,J){let H=cM(J);return[`vec4 ${A}( vec4 value ) {`,`	return ${H[1]}( vec4( value.rgb * ${H[0]}, value.a ) );`,"}"].join(`
`)}function sM(A,J){let H;switch(J){case MI:H="Linear";break;case kI:H="Reinhard";break;case DI:H="Cineon";break;case hU:H="ACESFilmic";break;case LI:H="AgX";break;case KI:H="Neutral";break;case SI:H="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",J),H="Linear"}return"vec3 "+A+"( vec3 color ) { return "+H+"ToneMapping( color ); }"}var YZ=new g;function oM(){f6.getLuminanceCoefficients(YZ);let A=YZ.x.toFixed(4),J=YZ.y.toFixed(4),H=YZ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${A}, ${J}, ${H} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function rM(A){return[A.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",A.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Y9).join(`
`)}function tM(A){let J=[];for(let H in A){let E=A[H];if(E===!1)continue;J.push("#define "+H+" "+E)}return J.join(`
`)}function aM(A,J){let H={},E=A.getProgramParameter(J,A.ACTIVE_ATTRIBUTES);for(let X=0;X<E;X++){let V=A.getActiveAttrib(J,X),U=V.name,Z=1;if(V.type===A.FLOAT_MAT2)Z=2;if(V.type===A.FLOAT_MAT3)Z=3;if(V.type===A.FLOAT_MAT4)Z=4;H[U]={type:V.type,location:A.getAttribLocation(J,U),locationSize:Z}}return H}function Y9(A){return A!==""}function Oz(A,J){let H=J.numSpotLightShadows+J.numSpotLightMaps-J.numSpotLightShadowsWithMaps;return A.replace(/NUM_DIR_LIGHTS/g,J.numDirLights).replace(/NUM_SPOT_LIGHTS/g,J.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,J.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,H).replace(/NUM_RECT_AREA_LIGHTS/g,J.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,J.numPointLights).replace(/NUM_HEMI_LIGHTS/g,J.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,J.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,J.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,J.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,J.numPointLightShadows)}function Mz(A,J){return A.replace(/NUM_CLIPPING_PLANES/g,J.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,J.numClippingPlanes-J.numClipIntersection)}var eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jP(A){return A.replace(eM,_M)}var $M=new Map;function _M(A,J){let H=B6[J];if(H===void 0){let E=$M.get(J);if(E!==void 0)H=B6[E],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',J,E);else throw Error("Can not resolve #include <"+J+">")}return jP(H)}var Ak=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kz(A){return A.replace(Ak,Jk)}function Jk(A,J,H,E){let X="";for(let V=parseInt(J);V<parseInt(H);V++)X+=E.replace(/\[\s*i\s*\]/g,"[ "+V+" ]").replace(/UNROLLED_LOOP_INDEX/g,V);return X}function Dz(A){let J=`precision ${A.precision} float;
	precision ${A.precision} int;
	precision ${A.precision} sampler2D;
	precision ${A.precision} samplerCube;
	precision ${A.precision} sampler3D;
	precision ${A.precision} sampler2DArray;
	precision ${A.precision} sampler2DShadow;
	precision ${A.precision} samplerCubeShadow;
	precision ${A.precision} sampler2DArrayShadow;
	precision ${A.precision} isampler2D;
	precision ${A.precision} isampler3D;
	precision ${A.precision} isamplerCube;
	precision ${A.precision} isampler2DArray;
	precision ${A.precision} usampler2D;
	precision ${A.precision} usampler3D;
	precision ${A.precision} usamplerCube;
	precision ${A.precision} usampler2DArray;
	`;if(A.precision==="highp")J+=`
#define HIGH_PRECISION`;else if(A.precision==="mediump")J+=`
#define MEDIUM_PRECISION`;else if(A.precision==="lowp")J+=`
#define LOW_PRECISION`;return J}function Hk(A){let J="SHADOWMAP_TYPE_BASIC";if(A.shadowMapType===z7)J="SHADOWMAP_TYPE_PCF";else if(A.shadowMapType===KU)J="SHADOWMAP_TYPE_PCF_SOFT";else if(A.shadowMapType===CH)J="SHADOWMAP_TYPE_VSM";return J}function Ek(A){let J="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case OE:case Z0:J="ENVMAP_TYPE_CUBE";break;case aX:J="ENVMAP_TYPE_CUBE_UV";break}return J}function Xk(A){let J="ENVMAP_MODE_REFLECTION";if(A.envMap)switch(A.envMapMode){case Z0:J="ENVMAP_MODE_REFRACTION";break}return J}function Vk(A){let J="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case GI:J="ENVMAP_BLENDING_MULTIPLY";break;case WI:J="ENVMAP_BLENDING_MIX";break;case OI:J="ENVMAP_BLENDING_ADD";break}return J}function Uk(A){let J=A.envMapCubeUVHeight;if(J===null)return null;let H=Math.log2(J)-2,E=1/J;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:E,maxMip:H}}function Zk(A,J,H,E){let X=A.getContext(),V=H.defines,U=H.vertexShader,Z=H.fragmentShader,R=Hk(H),Y=Ek(H),P=Xk(H),N=Vk(H),I=Uk(H),z=rM(H),B=tM(V),G=X.createProgram(),F,q,C=H.glslVersion?"#version "+H.glslVersion+`
`:"";if(H.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,B].filter(Y9).join(`
`),F.length>0)F+=`
`;if(q=["#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,B].filter(Y9).join(`
`),q.length>0)q+=`
`}else F=[Dz(H),"#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,B,H.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",H.batching?"#define USE_BATCHING":"",H.batchingColor?"#define USE_BATCHING_COLOR":"",H.instancing?"#define USE_INSTANCING":"",H.instancingColor?"#define USE_INSTANCING_COLOR":"",H.instancingMorph?"#define USE_INSTANCING_MORPH":"",H.useFog&&H.fog?"#define USE_FOG":"",H.useFog&&H.fogExp2?"#define FOG_EXP2":"",H.map?"#define USE_MAP":"",H.envMap?"#define USE_ENVMAP":"",H.envMap?"#define "+P:"",H.lightMap?"#define USE_LIGHTMAP":"",H.aoMap?"#define USE_AOMAP":"",H.bumpMap?"#define USE_BUMPMAP":"",H.normalMap?"#define USE_NORMALMAP":"",H.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",H.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",H.displacementMap?"#define USE_DISPLACEMENTMAP":"",H.emissiveMap?"#define USE_EMISSIVEMAP":"",H.anisotropy?"#define USE_ANISOTROPY":"",H.anisotropyMap?"#define USE_ANISOTROPYMAP":"",H.clearcoatMap?"#define USE_CLEARCOATMAP":"",H.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",H.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",H.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",H.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",H.specularMap?"#define USE_SPECULARMAP":"",H.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",H.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",H.roughnessMap?"#define USE_ROUGHNESSMAP":"",H.metalnessMap?"#define USE_METALNESSMAP":"",H.alphaMap?"#define USE_ALPHAMAP":"",H.alphaHash?"#define USE_ALPHAHASH":"",H.transmission?"#define USE_TRANSMISSION":"",H.transmissionMap?"#define USE_TRANSMISSIONMAP":"",H.thicknessMap?"#define USE_THICKNESSMAP":"",H.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",H.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",H.mapUv?"#define MAP_UV "+H.mapUv:"",H.alphaMapUv?"#define ALPHAMAP_UV "+H.alphaMapUv:"",H.lightMapUv?"#define LIGHTMAP_UV "+H.lightMapUv:"",H.aoMapUv?"#define AOMAP_UV "+H.aoMapUv:"",H.emissiveMapUv?"#define EMISSIVEMAP_UV "+H.emissiveMapUv:"",H.bumpMapUv?"#define BUMPMAP_UV "+H.bumpMapUv:"",H.normalMapUv?"#define NORMALMAP_UV "+H.normalMapUv:"",H.displacementMapUv?"#define DISPLACEMENTMAP_UV "+H.displacementMapUv:"",H.metalnessMapUv?"#define METALNESSMAP_UV "+H.metalnessMapUv:"",H.roughnessMapUv?"#define ROUGHNESSMAP_UV "+H.roughnessMapUv:"",H.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+H.anisotropyMapUv:"",H.clearcoatMapUv?"#define CLEARCOATMAP_UV "+H.clearcoatMapUv:"",H.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+H.clearcoatNormalMapUv:"",H.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+H.clearcoatRoughnessMapUv:"",H.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+H.iridescenceMapUv:"",H.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+H.iridescenceThicknessMapUv:"",H.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+H.sheenColorMapUv:"",H.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+H.sheenRoughnessMapUv:"",H.specularMapUv?"#define SPECULARMAP_UV "+H.specularMapUv:"",H.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+H.specularColorMapUv:"",H.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+H.specularIntensityMapUv:"",H.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+H.transmissionMapUv:"",H.thicknessMapUv?"#define THICKNESSMAP_UV "+H.thicknessMapUv:"",H.vertexTangents&&H.flatShading===!1?"#define USE_TANGENT":"",H.vertexColors?"#define USE_COLOR":"",H.vertexAlphas?"#define USE_COLOR_ALPHA":"",H.vertexUv1s?"#define USE_UV1":"",H.vertexUv2s?"#define USE_UV2":"",H.vertexUv3s?"#define USE_UV3":"",H.pointsUvs?"#define USE_POINTS_UV":"",H.flatShading?"#define FLAT_SHADED":"",H.skinning?"#define USE_SKINNING":"",H.morphTargets?"#define USE_MORPHTARGETS":"",H.morphNormals&&H.flatShading===!1?"#define USE_MORPHNORMALS":"",H.morphColors?"#define USE_MORPHCOLORS":"",H.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+H.morphTextureStride:"",H.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+H.morphTargetsCount:"",H.doubleSided?"#define DOUBLE_SIDED":"",H.flipSided?"#define FLIP_SIDED":"",H.shadowMapEnabled?"#define USE_SHADOWMAP":"",H.shadowMapEnabled?"#define "+R:"",H.sizeAttenuation?"#define USE_SIZEATTENUATION":"",H.numLightProbes>0?"#define USE_LIGHT_PROBES":"",H.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",H.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Y9).join(`
`),q=[Dz(H),"#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,B,H.useFog&&H.fog?"#define USE_FOG":"",H.useFog&&H.fogExp2?"#define FOG_EXP2":"",H.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",H.map?"#define USE_MAP":"",H.matcap?"#define USE_MATCAP":"",H.envMap?"#define USE_ENVMAP":"",H.envMap?"#define "+Y:"",H.envMap?"#define "+P:"",H.envMap?"#define "+N:"",I?"#define CUBEUV_TEXEL_WIDTH "+I.texelWidth:"",I?"#define CUBEUV_TEXEL_HEIGHT "+I.texelHeight:"",I?"#define CUBEUV_MAX_MIP "+I.maxMip+".0":"",H.lightMap?"#define USE_LIGHTMAP":"",H.aoMap?"#define USE_AOMAP":"",H.bumpMap?"#define USE_BUMPMAP":"",H.normalMap?"#define USE_NORMALMAP":"",H.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",H.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",H.emissiveMap?"#define USE_EMISSIVEMAP":"",H.anisotropy?"#define USE_ANISOTROPY":"",H.anisotropyMap?"#define USE_ANISOTROPYMAP":"",H.clearcoat?"#define USE_CLEARCOAT":"",H.clearcoatMap?"#define USE_CLEARCOATMAP":"",H.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",H.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",H.dispersion?"#define USE_DISPERSION":"",H.iridescence?"#define USE_IRIDESCENCE":"",H.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",H.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",H.specularMap?"#define USE_SPECULARMAP":"",H.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",H.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",H.roughnessMap?"#define USE_ROUGHNESSMAP":"",H.metalnessMap?"#define USE_METALNESSMAP":"",H.alphaMap?"#define USE_ALPHAMAP":"",H.alphaTest?"#define USE_ALPHATEST":"",H.alphaHash?"#define USE_ALPHAHASH":"",H.sheen?"#define USE_SHEEN":"",H.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",H.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",H.transmission?"#define USE_TRANSMISSION":"",H.transmissionMap?"#define USE_TRANSMISSIONMAP":"",H.thicknessMap?"#define USE_THICKNESSMAP":"",H.vertexTangents&&H.flatShading===!1?"#define USE_TANGENT":"",H.vertexColors||H.instancingColor||H.batchingColor?"#define USE_COLOR":"",H.vertexAlphas?"#define USE_COLOR_ALPHA":"",H.vertexUv1s?"#define USE_UV1":"",H.vertexUv2s?"#define USE_UV2":"",H.vertexUv3s?"#define USE_UV3":"",H.pointsUvs?"#define USE_POINTS_UV":"",H.gradientMap?"#define USE_GRADIENTMAP":"",H.flatShading?"#define FLAT_SHADED":"",H.doubleSided?"#define DOUBLE_SIDED":"",H.flipSided?"#define FLIP_SIDED":"",H.shadowMapEnabled?"#define USE_SHADOWMAP":"",H.shadowMapEnabled?"#define "+R:"",H.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",H.numLightProbes>0?"#define USE_LIGHT_PROBES":"",H.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",H.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",H.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",H.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",H.toneMapping!==dH?"#define TONE_MAPPING":"",H.toneMapping!==dH?B6.tonemapping_pars_fragment:"",H.toneMapping!==dH?sM("toneMapping",H.toneMapping):"",H.dithering?"#define DITHERING":"",H.opaque?"#define OPAQUE":"",B6.colorspace_pars_fragment,iM("linearToOutputTexel",H.outputColorSpace),oM(),H.useDepthPacking?"#define DEPTH_PACKING "+H.depthPacking:"",`
`].filter(Y9).join(`
`);if(U=jP(U),U=Oz(U,H),U=Mz(U,H),Z=jP(Z),Z=Oz(Z,H),Z=Mz(Z,H),U=kz(U),Z=kz(Z),H.isRawShaderMaterial!==!0)C=`#version 300 es
`,F=[z,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,q=["#define varying in",H.glslVersion===AP?"":"layout(location = 0) out highp vec4 pc_fragColor;",H.glslVersion===AP?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let Q=C+F+U,D=C+q+Z,f=Bz(X,X.VERTEX_SHADER,Q),S=Bz(X,X.FRAGMENT_SHADER,D);if(X.attachShader(G,f),X.attachShader(G,S),H.index0AttributeName!==void 0)X.bindAttribLocation(G,0,H.index0AttributeName);else if(H.morphTargets===!0)X.bindAttribLocation(G,0,"position");X.linkProgram(G);function L(j){if(A.debug.checkShaderErrors){let x=X.getProgramInfoLog(G).trim(),c=X.getShaderInfoLog(f).trim(),i=X.getShaderInfoLog(S).trim(),AA=!0,t=!0;if(X.getProgramParameter(G,X.LINK_STATUS)===!1)if(AA=!1,typeof A.debug.onShaderError==="function")A.debug.onShaderError(X,G,f,S);else{let XA=Wz(X,f,"vertex"),s=Wz(X,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+X.getError()+" - VALIDATE_STATUS "+X.getProgramParameter(G,X.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+x+`
`+XA+`
`+s)}else if(x!=="")console.warn("THREE.WebGLProgram: Program Info Log:",x);else if(c===""||i==="")t=!1;if(t)j.diagnostics={runnable:AA,programLog:x,vertexShader:{log:c,prefix:F},fragmentShader:{log:i,prefix:q}}}X.deleteShader(f),X.deleteShader(S),u=new P9(X,G),k=aM(X,G)}let u;this.getUniforms=function(){if(u===void 0)L(this);return u};let k;this.getAttributes=function(){if(k===void 0)L(this);return k};let O=H.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(O===!1)O=X.getProgramParameter(G,mM);return O},this.destroy=function(){E.releaseStatesOfProgram(this),X.deleteProgram(G),this.program=void 0},this.type=H.shaderType,this.name=H.shaderName,this.id=dM++,this.cacheKey=J,this.usedTimes=1,this.program=G,this.vertexShader=f,this.fragmentShader=S,this}var Rk=0;class lz{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){let{vertexShader:J,fragmentShader:H}=A,E=this._getShaderStage(J),X=this._getShaderStage(H),V=this._getShaderCacheForMaterial(A);if(V.has(E)===!1)V.add(E),E.usedTimes++;if(V.has(X)===!1)V.add(X),X.usedTimes++;return this}remove(A){let J=this.materialCache.get(A);for(let H of J)if(H.usedTimes--,H.usedTimes===0)this.shaderCache.delete(H.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){let J=this.materialCache,H=J.get(A);if(H===void 0)H=new Set,J.set(A,H);return H}_getShaderStage(A){let J=this.shaderCache,H=J.get(A);if(H===void 0)H=new pz(A),J.set(A,H);return H}}class pz{constructor(A){this.id=Rk++,this.code=A,this.usedTimes=0}}function Yk(A,J,H,E,X,V,U){let Z=new H9,R=new lz,Y=new Set,P=[],N=X.logarithmicDepthBuffer,I=X.vertexTextures,z=X.precision,B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(k){if(Y.add(k),k===0)return"uv";return`uv${k}`}function F(k,O,j,x,c){let i=x.fog,AA=c.geometry,t=k.isMeshStandardMaterial?x.environment:null,XA=(k.isMeshStandardMaterial?H:J).get(k.envMap||t),s=!!XA&&XA.mapping===aX?XA.image.height:null,jA=B[k.type];if(k.precision!==null){if(z=X.getMaxPrecision(k.precision),z!==k.precision)console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",z,"instead.")}let hA=AA.morphAttributes.position||AA.morphAttributes.normal||AA.morphAttributes.color,$A=hA!==void 0?hA.length:0,W6=0;if(AA.morphAttributes.position!==void 0)W6=1;if(AA.morphAttributes.normal!==void 0)W6=2;if(AA.morphAttributes.color!==void 0)W6=3;let $,QA,rA,eA;if(jA){let z6=WH[jA];$=z6.vertexShader,QA=z6.fragmentShader}else $=k.vertexShader,QA=k.fragmentShader,R.update(k),rA=R.getVertexShaderID(k),eA=R.getFragmentShaderID(k);let kA=A.getRenderTarget(),A6=A.state.buffers.depth.getReversed(),j6=c.isInstancedMesh===!0,k6=c.isBatchedMesh===!0,O6=!!k.map,SJ=!!k.matcap,y=!!XA,NJ=!!k.aoMap,S6=!!k.lightMap,K6=!!k.bumpMap,lA=!!k.normalMap,AJ=!!k.displacementMap,nA=!!k.emissiveMap,iA=!!k.metalnessMap,w=!!k.roughnessMap,W=k.anisotropy>0,b=k.clearcoat>0,JA=k.dispersion>0,HA=k.iridescence>0,e=k.sheen>0,oA=k.transmission>0,OA=W&&!!k.anisotropyMap,FA=b&&!!k.clearcoatMap,R6=b&&!!k.clearcoatNormalMap,UA=b&&!!k.clearcoatRoughnessMap,vA=HA&&!!k.iridescenceMap,_A=HA&&!!k.iridescenceThicknessMap,J6=e&&!!k.sheenColorMap,bA=e&&!!k.sheenRoughnessMap,q6=!!k.specularMap,Q6=!!k.specularColorMap,b6=!!k.specularIntensityMap,v=oA&&!!k.transmissionMap,IA=oA&&!!k.thicknessMap,a=!!k.gradientMap,_=!!k.alphaMap,SA=k.alphaTest>0,yA=!!k.alphaHash,I6=!!k.extensions,t6=dH;if(k.toneMapped){if(kA===null||kA.isXRRenderTarget===!0)t6=A.toneMapping}let RJ={shaderID:jA,shaderType:k.type,shaderName:k.name,vertexShader:$,fragmentShader:QA,defines:k.defines,customVertexShaderID:rA,customFragmentShaderID:eA,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:z,batching:k6,batchingColor:k6&&c._colorsTexture!==null,instancing:j6,instancingColor:j6&&c.instanceColor!==null,instancingMorph:j6&&c.morphTexture!==null,supportsVertexTextures:I,outputColorSpace:kA===null?A.outputColorSpace:kA.isXRRenderTarget===!0?kA.texture.colorSpace:A9,alphaToCoverage:!!k.alphaToCoverage,map:O6,matcap:SJ,envMap:y,envMapMode:y&&XA.mapping,envMapCubeUVHeight:s,aoMap:NJ,lightMap:S6,bumpMap:K6,normalMap:lA,displacementMap:I&&AJ,emissiveMap:nA,normalMapObjectSpace:lA&&k.normalMapType===xI,normalMapTangentSpace:lA&&k.normalMapType===bI,metalnessMap:iA,roughnessMap:w,anisotropy:W,anisotropyMap:OA,clearcoat:b,clearcoatMap:FA,clearcoatNormalMap:R6,clearcoatRoughnessMap:UA,dispersion:JA,iridescence:HA,iridescenceMap:vA,iridescenceThicknessMap:_A,sheen:e,sheenColorMap:J6,sheenRoughnessMap:bA,specularMap:q6,specularColorMap:Q6,specularIntensityMap:b6,transmission:oA,transmissionMap:v,thicknessMap:IA,gradientMap:a,opaque:k.transparent===!1&&k.blending===rX&&k.alphaToCoverage===!1,alphaMap:_,alphaTest:SA,alphaHash:yA,combine:k.combine,mapUv:O6&&G(k.map.channel),aoMapUv:NJ&&G(k.aoMap.channel),lightMapUv:S6&&G(k.lightMap.channel),bumpMapUv:K6&&G(k.bumpMap.channel),normalMapUv:lA&&G(k.normalMap.channel),displacementMapUv:AJ&&G(k.displacementMap.channel),emissiveMapUv:nA&&G(k.emissiveMap.channel),metalnessMapUv:iA&&G(k.metalnessMap.channel),roughnessMapUv:w&&G(k.roughnessMap.channel),anisotropyMapUv:OA&&G(k.anisotropyMap.channel),clearcoatMapUv:FA&&G(k.clearcoatMap.channel),clearcoatNormalMapUv:R6&&G(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:UA&&G(k.clearcoatRoughnessMap.channel),iridescenceMapUv:vA&&G(k.iridescenceMap.channel),iridescenceThicknessMapUv:_A&&G(k.iridescenceThicknessMap.channel),sheenColorMapUv:J6&&G(k.sheenColorMap.channel),sheenRoughnessMapUv:bA&&G(k.sheenRoughnessMap.channel),specularMapUv:q6&&G(k.specularMap.channel),specularColorMapUv:Q6&&G(k.specularColorMap.channel),specularIntensityMapUv:b6&&G(k.specularIntensityMap.channel),transmissionMapUv:v&&G(k.transmissionMap.channel),thicknessMapUv:IA&&G(k.thicknessMap.channel),alphaMapUv:_&&G(k.alphaMap.channel),vertexTangents:!!AA.attributes.tangent&&(lA||W),vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!AA.attributes.color&&AA.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!AA.attributes.uv&&(O6||_),fog:!!i,useFog:k.fog===!0,fogExp2:!!i&&i.isFogExp2,flatShading:k.flatShading===!0,sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:N,reverseDepthBuffer:A6,skinning:c.isSkinnedMesh===!0,morphTargets:AA.morphAttributes.position!==void 0,morphNormals:AA.morphAttributes.normal!==void 0,morphColors:AA.morphAttributes.color!==void 0,morphTargetsCount:$A,morphTextureStride:W6,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:U.numPlanes,numClipIntersection:U.numIntersection,dithering:k.dithering,shadowMapEnabled:A.shadowMap.enabled&&j.length>0,shadowMapType:A.shadowMap.type,toneMapping:t6,decodeVideoTexture:O6&&k.map.isVideoTexture===!0&&f6.getTransfer(k.map.colorSpace)===i6,decodeVideoTextureEmissive:nA&&k.emissiveMap.isVideoTexture===!0&&f6.getTransfer(k.emissiveMap.colorSpace)===i6,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===_6,flipSided:k.side===k8,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:I6&&k.extensions.clipCullDistance===!0&&E.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I6&&k.extensions.multiDraw===!0||k6)&&E.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:E.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return RJ.vertexUv1s=Y.has(1),RJ.vertexUv2s=Y.has(2),RJ.vertexUv3s=Y.has(3),Y.clear(),RJ}function q(k){let O=[];if(k.shaderID)O.push(k.shaderID);else O.push(k.customVertexShaderID),O.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let j in k.defines)O.push(j),O.push(k.defines[j]);if(k.isRawShaderMaterial===!1)C(O,k),Q(O,k),O.push(A.outputColorSpace);return O.push(k.customProgramCacheKey),O.join()}function C(k,O){k.push(O.precision),k.push(O.outputColorSpace),k.push(O.envMapMode),k.push(O.envMapCubeUVHeight),k.push(O.mapUv),k.push(O.alphaMapUv),k.push(O.lightMapUv),k.push(O.aoMapUv),k.push(O.bumpMapUv),k.push(O.normalMapUv),k.push(O.displacementMapUv),k.push(O.emissiveMapUv),k.push(O.metalnessMapUv),k.push(O.roughnessMapUv),k.push(O.anisotropyMapUv),k.push(O.clearcoatMapUv),k.push(O.clearcoatNormalMapUv),k.push(O.clearcoatRoughnessMapUv),k.push(O.iridescenceMapUv),k.push(O.iridescenceThicknessMapUv),k.push(O.sheenColorMapUv),k.push(O.sheenRoughnessMapUv),k.push(O.specularMapUv),k.push(O.specularColorMapUv),k.push(O.specularIntensityMapUv),k.push(O.transmissionMapUv),k.push(O.thicknessMapUv),k.push(O.combine),k.push(O.fogExp2),k.push(O.sizeAttenuation),k.push(O.morphTargetsCount),k.push(O.morphAttributeCount),k.push(O.numDirLights),k.push(O.numPointLights),k.push(O.numSpotLights),k.push(O.numSpotLightMaps),k.push(O.numHemiLights),k.push(O.numRectAreaLights),k.push(O.numDirLightShadows),k.push(O.numPointLightShadows),k.push(O.numSpotLightShadows),k.push(O.numSpotLightShadowsWithMaps),k.push(O.numLightProbes),k.push(O.shadowMapType),k.push(O.toneMapping),k.push(O.numClippingPlanes),k.push(O.numClipIntersection),k.push(O.depthPacking)}function Q(k,O){if(Z.disableAll(),O.supportsVertexTextures)Z.enable(0);if(O.instancing)Z.enable(1);if(O.instancingColor)Z.enable(2);if(O.instancingMorph)Z.enable(3);if(O.matcap)Z.enable(4);if(O.envMap)Z.enable(5);if(O.normalMapObjectSpace)Z.enable(6);if(O.normalMapTangentSpace)Z.enable(7);if(O.clearcoat)Z.enable(8);if(O.iridescence)Z.enable(9);if(O.alphaTest)Z.enable(10);if(O.vertexColors)Z.enable(11);if(O.vertexAlphas)Z.enable(12);if(O.vertexUv1s)Z.enable(13);if(O.vertexUv2s)Z.enable(14);if(O.vertexUv3s)Z.enable(15);if(O.vertexTangents)Z.enable(16);if(O.anisotropy)Z.enable(17);if(O.alphaHash)Z.enable(18);if(O.batching)Z.enable(19);if(O.dispersion)Z.enable(20);if(O.batchingColor)Z.enable(21);if(k.push(Z.mask),Z.disableAll(),O.fog)Z.enable(0);if(O.useFog)Z.enable(1);if(O.flatShading)Z.enable(2);if(O.logarithmicDepthBuffer)Z.enable(3);if(O.reverseDepthBuffer)Z.enable(4);if(O.skinning)Z.enable(5);if(O.morphTargets)Z.enable(6);if(O.morphNormals)Z.enable(7);if(O.morphColors)Z.enable(8);if(O.premultipliedAlpha)Z.enable(9);if(O.shadowMapEnabled)Z.enable(10);if(O.doubleSided)Z.enable(11);if(O.flipSided)Z.enable(12);if(O.useDepthPacking)Z.enable(13);if(O.dithering)Z.enable(14);if(O.transmission)Z.enable(15);if(O.sheen)Z.enable(16);if(O.opaque)Z.enable(17);if(O.pointsUvs)Z.enable(18);if(O.decodeVideoTexture)Z.enable(19);if(O.decodeVideoTextureEmissive)Z.enable(20);if(O.alphaToCoverage)Z.enable(21);k.push(Z.mask)}function D(k){let O=B[k.type],j;if(O){let x=WH[O];j=Az.clone(x.uniforms)}else j=k.uniforms;return j}function f(k,O){let j;for(let x=0,c=P.length;x<c;x++){let i=P[x];if(i.cacheKey===O){j=i,++j.usedTimes;break}}if(j===void 0)j=new Zk(A,O,k,V),P.push(j);return j}function S(k){if(--k.usedTimes===0){let O=P.indexOf(k);P[O]=P[P.length-1],P.pop(),k.destroy()}}function L(k){R.remove(k)}function u(){R.dispose()}return{getParameters:F,getProgramCacheKey:q,getUniforms:D,acquireProgram:f,releaseProgram:S,releaseShaderCache:L,programs:P,dispose:u}}function Pk(){let A=new WeakMap;function J(U){return A.has(U)}function H(U){let Z=A.get(U);if(Z===void 0)Z={},A.set(U,Z);return Z}function E(U){A.delete(U)}function X(U,Z,R){A.get(U)[Z]=R}function V(){A=new WeakMap}return{has:J,get:H,remove:E,update:X,dispose:V}}function Nk(A,J){if(A.groupOrder!==J.groupOrder)return A.groupOrder-J.groupOrder;else if(A.renderOrder!==J.renderOrder)return A.renderOrder-J.renderOrder;else if(A.material.id!==J.material.id)return A.material.id-J.material.id;else if(A.z!==J.z)return A.z-J.z;else return A.id-J.id}function Sz(A,J){if(A.groupOrder!==J.groupOrder)return A.groupOrder-J.groupOrder;else if(A.renderOrder!==J.renderOrder)return A.renderOrder-J.renderOrder;else if(A.z!==J.z)return J.z-A.z;else return A.id-J.id}function Lz(){let A=[],J=0,H=[],E=[],X=[];function V(){J=0,H.length=0,E.length=0,X.length=0}function U(N,I,z,B,G,F){let q=A[J];if(q===void 0)q={id:N.id,object:N,geometry:I,material:z,groupOrder:B,renderOrder:N.renderOrder,z:G,group:F},A[J]=q;else q.id=N.id,q.object=N,q.geometry=I,q.material=z,q.groupOrder=B,q.renderOrder=N.renderOrder,q.z=G,q.group=F;return J++,q}function Z(N,I,z,B,G,F){let q=U(N,I,z,B,G,F);if(z.transmission>0)E.push(q);else if(z.transparent===!0)X.push(q);else H.push(q)}function R(N,I,z,B,G,F){let q=U(N,I,z,B,G,F);if(z.transmission>0)E.unshift(q);else if(z.transparent===!0)X.unshift(q);else H.unshift(q)}function Y(N,I){if(H.length>1)H.sort(N||Nk);if(E.length>1)E.sort(I||Sz);if(X.length>1)X.sort(I||Sz)}function P(){for(let N=J,I=A.length;N<I;N++){let z=A[N];if(z.id===null)break;z.id=null,z.object=null,z.geometry=null,z.material=null,z.group=null}}return{opaque:H,transmissive:E,transparent:X,init:V,push:Z,unshift:R,finish:P,sort:Y}}function qk(){let A=new WeakMap;function J(E,X){let V=A.get(E),U;if(V===void 0)U=new Lz,A.set(E,[U]);else if(X>=V.length)U=new Lz,V.push(U);else U=V[X];return U}function H(){A=new WeakMap}return{get:J,dispose:H}}function Ik(){let A={};return{get:function(J){if(A[J.id]!==void 0)return A[J.id];let H;switch(J.type){case"DirectionalLight":H={direction:new g,color:new F6};break;case"SpotLight":H={position:new g,direction:new g,color:new F6,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":H={position:new g,color:new F6,distance:0,decay:0};break;case"HemisphereLight":H={direction:new g,skyColor:new F6,groundColor:new F6};break;case"RectAreaLight":H={color:new F6,position:new g,halfWidth:new g,halfHeight:new g};break}return A[J.id]=H,H}}}function zk(){let A={};return{get:function(J){if(A[J.id]!==void 0)return A[J.id];let H;switch(J.type){case"DirectionalLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X6};break;case"SpotLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X6};break;case"PointLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X6,shadowCameraNear:1,shadowCameraFar:1000};break}return A[J.id]=H,H}}}var Qk=0;function Fk(A,J){return(J.castShadow?2:0)-(A.castShadow?2:0)+(J.map?1:0)-(A.map?1:0)}function Ck(A){let J=new Ik,H=zk(),E={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Y=0;Y<9;Y++)E.probe.push(new g);let X=new g,V=new x6,U=new x6;function Z(Y){let P=0,N=0,I=0;for(let k=0;k<9;k++)E.probe[k].set(0,0,0);let z=0,B=0,G=0,F=0,q=0,C=0,Q=0,D=0,f=0,S=0,L=0;Y.sort(Fk);for(let k=0,O=Y.length;k<O;k++){let j=Y[k],x=j.color,c=j.intensity,i=j.distance,AA=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)P+=x.r*c,N+=x.g*c,I+=x.b*c;else if(j.isLightProbe){for(let t=0;t<9;t++)E.probe[t].addScaledVector(j.sh.coefficients[t],c);L++}else if(j.isDirectionalLight){let t=J.get(j);if(t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let XA=j.shadow,s=H.get(j);s.shadowIntensity=XA.intensity,s.shadowBias=XA.bias,s.shadowNormalBias=XA.normalBias,s.shadowRadius=XA.radius,s.shadowMapSize=XA.mapSize,E.directionalShadow[z]=s,E.directionalShadowMap[z]=AA,E.directionalShadowMatrix[z]=j.shadow.matrix,C++}E.directional[z]=t,z++}else if(j.isSpotLight){let t=J.get(j);t.position.setFromMatrixPosition(j.matrixWorld),t.color.copy(x).multiplyScalar(c),t.distance=i,t.coneCos=Math.cos(j.angle),t.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),t.decay=j.decay,E.spot[G]=t;let XA=j.shadow;if(j.map){if(E.spotLightMap[f]=j.map,f++,XA.updateMatrices(j),j.castShadow)S++}if(E.spotLightMatrix[G]=XA.matrix,j.castShadow){let s=H.get(j);s.shadowIntensity=XA.intensity,s.shadowBias=XA.bias,s.shadowNormalBias=XA.normalBias,s.shadowRadius=XA.radius,s.shadowMapSize=XA.mapSize,E.spotShadow[G]=s,E.spotShadowMap[G]=AA,D++}G++}else if(j.isRectAreaLight){let t=J.get(j);t.color.copy(x).multiplyScalar(c),t.halfWidth.set(j.width*0.5,0,0),t.halfHeight.set(0,j.height*0.5,0),E.rectArea[F]=t,F++}else if(j.isPointLight){let t=J.get(j);if(t.color.copy(j.color).multiplyScalar(j.intensity),t.distance=j.distance,t.decay=j.decay,j.castShadow){let XA=j.shadow,s=H.get(j);s.shadowIntensity=XA.intensity,s.shadowBias=XA.bias,s.shadowNormalBias=XA.normalBias,s.shadowRadius=XA.radius,s.shadowMapSize=XA.mapSize,s.shadowCameraNear=XA.camera.near,s.shadowCameraFar=XA.camera.far,E.pointShadow[B]=s,E.pointShadowMap[B]=AA,E.pointShadowMatrix[B]=j.shadow.matrix,Q++}E.point[B]=t,B++}else if(j.isHemisphereLight){let t=J.get(j);t.skyColor.copy(j.color).multiplyScalar(c),t.groundColor.copy(j.groundColor).multiplyScalar(c),E.hemi[q]=t,q++}}if(F>0)if(A.has("OES_texture_float_linear")===!0)E.rectAreaLTC1=LA.LTC_FLOAT_1,E.rectAreaLTC2=LA.LTC_FLOAT_2;else E.rectAreaLTC1=LA.LTC_HALF_1,E.rectAreaLTC2=LA.LTC_HALF_2;E.ambient[0]=P,E.ambient[1]=N,E.ambient[2]=I;let u=E.hash;if(u.directionalLength!==z||u.pointLength!==B||u.spotLength!==G||u.rectAreaLength!==F||u.hemiLength!==q||u.numDirectionalShadows!==C||u.numPointShadows!==Q||u.numSpotShadows!==D||u.numSpotMaps!==f||u.numLightProbes!==L)E.directional.length=z,E.spot.length=G,E.rectArea.length=F,E.point.length=B,E.hemi.length=q,E.directionalShadow.length=C,E.directionalShadowMap.length=C,E.pointShadow.length=Q,E.pointShadowMap.length=Q,E.spotShadow.length=D,E.spotShadowMap.length=D,E.directionalShadowMatrix.length=C,E.pointShadowMatrix.length=Q,E.spotLightMatrix.length=D+f-S,E.spotLightMap.length=f,E.numSpotLightShadowsWithMaps=S,E.numLightProbes=L,u.directionalLength=z,u.pointLength=B,u.spotLength=G,u.rectAreaLength=F,u.hemiLength=q,u.numDirectionalShadows=C,u.numPointShadows=Q,u.numSpotShadows=D,u.numSpotMaps=f,u.numLightProbes=L,E.version=Qk++}function R(Y,P){let N=0,I=0,z=0,B=0,G=0,F=P.matrixWorldInverse;for(let q=0,C=Y.length;q<C;q++){let Q=Y[q];if(Q.isDirectionalLight){let D=E.directional[N];D.direction.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(Q.target.matrixWorld),D.direction.sub(X),D.direction.transformDirection(F),N++}else if(Q.isSpotLight){let D=E.spot[z];D.position.setFromMatrixPosition(Q.matrixWorld),D.position.applyMatrix4(F),D.direction.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(Q.target.matrixWorld),D.direction.sub(X),D.direction.transformDirection(F),z++}else if(Q.isRectAreaLight){let D=E.rectArea[B];D.position.setFromMatrixPosition(Q.matrixWorld),D.position.applyMatrix4(F),U.identity(),V.copy(Q.matrixWorld),V.premultiply(F),U.extractRotation(V),D.halfWidth.set(Q.width*0.5,0,0),D.halfHeight.set(0,Q.height*0.5,0),D.halfWidth.applyMatrix4(U),D.halfHeight.applyMatrix4(U),B++}else if(Q.isPointLight){let D=E.point[I];D.position.setFromMatrixPosition(Q.matrixWorld),D.position.applyMatrix4(F),I++}else if(Q.isHemisphereLight){let D=E.hemi[G];D.direction.setFromMatrixPosition(Q.matrixWorld),D.direction.transformDirection(F),G++}}}return{setup:Z,setupView:R,state:E}}function Kz(A){let J=new Ck(A),H=[],E=[];function X(P){Y.camera=P,H.length=0,E.length=0}function V(P){H.push(P)}function U(P){E.push(P)}function Z(){J.setup(H)}function R(P){J.setupView(H,P)}let Y={lightsArray:H,shadowsArray:E,camera:null,lights:J,transmissionRenderTarget:{}};return{init:X,state:Y,setupLights:Z,setupLightsView:R,pushLight:V,pushShadow:U}}function Bk(A){let J=new WeakMap;function H(X,V=0){let U=J.get(X),Z;if(U===void 0)Z=new Kz(A),J.set(X,[Z]);else if(V>=U.length)Z=new Kz(A),U.push(Z);else Z=U[V];return Z}function E(){J=new WeakMap}return{get:H,dispose:E}}var Gk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wk=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ok(A,J,H){let E=new X9,X=new X6,V=new X6,U=new UJ,Z=new YP({depthPacking:gI}),R=new PP,Y={},P=H.maxTextureSize,N={[mH]:k8,[k8]:mH,[_6]:_6},I=new GH({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X6},radius:{value:4}},vertexShader:Gk,fragmentShader:Wk}),z=I.clone();z.defines.HORIZONTAL_PASS=1;let B=new sH;B.setAttribute("position",new IJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let G=new aA(B,I),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z7;let q=this.type;this.render=function(S,L,u){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(S.length===0)return;let k=A.getRenderTarget(),O=A.getActiveCubeFace(),j=A.getActiveMipmapLevel(),x=A.state;x.setBlending(S1),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);let c=q!==CH&&this.type===CH,i=q===CH&&this.type!==CH;for(let AA=0,t=S.length;AA<t;AA++){let XA=S[AA],s=XA.shadow;if(s===void 0){console.warn("THREE.WebGLShadowMap:",XA,"has no shadow.");continue}if(s.autoUpdate===!1&&s.needsUpdate===!1)continue;X.copy(s.mapSize);let jA=s.getFrameExtents();if(X.multiply(jA),V.copy(s.mapSize),X.x>P||X.y>P){if(X.x>P)V.x=Math.floor(P/jA.x),X.x=V.x*jA.x,s.mapSize.x=V.x;if(X.y>P)V.y=Math.floor(P/jA.y),X.y=V.y*jA.y,s.mapSize.y=V.y}if(s.map===null||c===!0||i===!0){let $A=this.type!==CH?{minFilter:L1,magFilter:L1}:{};if(s.map!==null)s.map.dispose();s.map=new iH(X.x,X.y,$A),s.map.texture.name=XA.name+".shadowMap",s.camera.updateProjectionMatrix()}A.setRenderTarget(s.map),A.clear();let hA=s.getViewportCount();for(let $A=0;$A<hA;$A++){let W6=s.getViewport($A);U.set(V.x*W6.x,V.y*W6.y,V.x*W6.z,V.y*W6.w),x.viewport(U),s.updateMatrices(XA,$A),E=s.getFrustum(),D(L,u,s.camera,XA,this.type)}if(s.isPointLightShadow!==!0&&this.type===CH)C(s,u);s.needsUpdate=!1}q=this.type,F.needsUpdate=!1,A.setRenderTarget(k,O,j)};function C(S,L){let u=J.update(G);if(I.defines.VSM_SAMPLES!==S.blurSamples)I.defines.VSM_SAMPLES=S.blurSamples,z.defines.VSM_SAMPLES=S.blurSamples,I.needsUpdate=!0,z.needsUpdate=!0;if(S.mapPass===null)S.mapPass=new iH(X.x,X.y);I.uniforms.shadow_pass.value=S.map.texture,I.uniforms.resolution.value=S.mapSize,I.uniforms.radius.value=S.radius,A.setRenderTarget(S.mapPass),A.clear(),A.renderBufferDirect(L,null,u,I,G,null),z.uniforms.shadow_pass.value=S.mapPass.texture,z.uniforms.resolution.value=S.mapSize,z.uniforms.radius.value=S.radius,A.setRenderTarget(S.map),A.clear(),A.renderBufferDirect(L,null,u,z,G,null)}function Q(S,L,u,k){let O=null,j=u.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(j!==void 0)O=j;else if(O=u.isPointLight===!0?R:Z,A.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let x=O.uuid,c=L.uuid,i=Y[x];if(i===void 0)i={},Y[x]=i;let AA=i[c];if(AA===void 0)AA=O.clone(),i[c]=AA,L.addEventListener("dispose",f);O=AA}if(O.visible=L.visible,O.wireframe=L.wireframe,k===CH)O.side=L.shadowSide!==null?L.shadowSide:L.side;else O.side=L.shadowSide!==null?L.shadowSide:N[L.side];if(O.alphaMap=L.alphaMap,O.alphaTest=L.alphaTest,O.map=L.map,O.clipShadows=L.clipShadows,O.clippingPlanes=L.clippingPlanes,O.clipIntersection=L.clipIntersection,O.displacementMap=L.displacementMap,O.displacementScale=L.displacementScale,O.displacementBias=L.displacementBias,O.wireframeLinewidth=L.wireframeLinewidth,O.linewidth=L.linewidth,u.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let x=A.properties.get(O);x.light=u}return O}function D(S,L,u,k,O){if(S.visible===!1)return;if(S.layers.test(L.layers)&&(S.isMesh||S.isLine||S.isPoints)){if((S.castShadow||S.receiveShadow&&O===CH)&&(!S.frustumCulled||E.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,S.matrixWorld);let c=J.update(S),i=S.material;if(Array.isArray(i)){let AA=c.groups;for(let t=0,XA=AA.length;t<XA;t++){let s=AA[t],jA=i[s.materialIndex];if(jA&&jA.visible){let hA=Q(S,jA,k,O);S.onBeforeShadow(A,S,L,u,c,hA,s),A.renderBufferDirect(u,null,c,hA,S,s),S.onAfterShadow(A,S,L,u,c,hA,s)}}}else if(i.visible){let AA=Q(S,i,k,O);S.onBeforeShadow(A,S,L,u,c,AA,null),A.renderBufferDirect(u,null,c,AA,S,null),S.onAfterShadow(A,S,L,u,c,AA,null)}}}let x=S.children;for(let c=0,i=x.length;c<i;c++)D(x[c],L,u,k,O)}function f(S){S.target.removeEventListener("dispose",f);for(let u in Y){let k=Y[u],O=S.target.uuid;if(O in k)k[O].dispose(),delete k[O]}}}var Mk={[TU]:wU,[fU]:vU,[jU]:uU,[tX]:yU,[wU]:TU,[vU]:fU,[uU]:jU,[yU]:tX};function kk(A,J){function H(){let v=!1,IA=new UJ,a=null,_=new UJ(0,0,0,0);return{setMask:function(SA){if(a!==SA&&!v)A.colorMask(SA,SA,SA,SA),a=SA},setLocked:function(SA){v=SA},setClear:function(SA,yA,I6,t6,RJ){if(RJ===!0)SA*=t6,yA*=t6,I6*=t6;if(IA.set(SA,yA,I6,t6),_.equals(IA)===!1)A.clearColor(SA,yA,I6,t6),_.copy(IA)},reset:function(){v=!1,a=null,_.set(-1,0,0,0)}}}function E(){let v=!1,IA=!1,a=null,_=null,SA=null;return{setReversed:function(yA){if(IA!==yA){let I6=J.get("EXT_clip_control");if(IA)I6.clipControlEXT(I6.LOWER_LEFT_EXT,I6.ZERO_TO_ONE_EXT);else I6.clipControlEXT(I6.LOWER_LEFT_EXT,I6.NEGATIVE_ONE_TO_ONE_EXT);let t6=SA;SA=null,this.setClear(t6)}IA=yA},getReversed:function(){return IA},setTest:function(yA){if(yA)kA(A.DEPTH_TEST);else A6(A.DEPTH_TEST)},setMask:function(yA){if(a!==yA&&!v)A.depthMask(yA),a=yA},setFunc:function(yA){if(IA)yA=Mk[yA];if(_!==yA){switch(yA){case TU:A.depthFunc(A.NEVER);break;case wU:A.depthFunc(A.ALWAYS);break;case fU:A.depthFunc(A.LESS);break;case tX:A.depthFunc(A.LEQUAL);break;case jU:A.depthFunc(A.EQUAL);break;case yU:A.depthFunc(A.GEQUAL);break;case vU:A.depthFunc(A.GREATER);break;case uU:A.depthFunc(A.NOTEQUAL);break;default:A.depthFunc(A.LEQUAL)}_=yA}},setLocked:function(yA){v=yA},setClear:function(yA){if(SA!==yA){if(IA)yA=1-yA;A.clearDepth(yA),SA=yA}},reset:function(){v=!1,a=null,_=null,SA=null,IA=!1}}}function X(){let v=!1,IA=null,a=null,_=null,SA=null,yA=null,I6=null,t6=null,RJ=null;return{setTest:function(z6){if(!v)if(z6)kA(A.STENCIL_TEST);else A6(A.STENCIL_TEST)},setMask:function(z6){if(IA!==z6&&!v)A.stencilMask(z6),IA=z6},setFunc:function(z6,m8,JJ){if(a!==z6||_!==m8||SA!==JJ)A.stencilFunc(z6,m8,JJ),a=z6,_=m8,SA=JJ},setOp:function(z6,m8,JJ){if(yA!==z6||I6!==m8||t6!==JJ)A.stencilOp(z6,m8,JJ),yA=z6,I6=m8,t6=JJ},setLocked:function(z6){v=z6},setClear:function(z6){if(RJ!==z6)A.clearStencil(z6),RJ=z6},reset:function(){v=!1,IA=null,a=null,_=null,SA=null,yA=null,I6=null,t6=null,RJ=null}}}let V=new H,U=new E,Z=new X,R=new WeakMap,Y=new WeakMap,P={},N={},I=new WeakMap,z=[],B=null,G=!1,F=null,q=null,C=null,Q=null,D=null,f=null,S=null,L=new F6(0,0,0),u=0,k=!1,O=null,j=null,x=null,c=null,i=null,AA=A.getParameter(A.MAX_COMBINED_TEXTURE_IMAGE_UNITS),t=!1,XA=0,s=A.getParameter(A.VERSION);if(s.indexOf("WebGL")!==-1)XA=parseFloat(/^WebGL (\d)/.exec(s)[1]),t=XA>=1;else if(s.indexOf("OpenGL ES")!==-1)XA=parseFloat(/^OpenGL ES (\d)/.exec(s)[1]),t=XA>=2;let jA=null,hA={},$A=A.getParameter(A.SCISSOR_BOX),W6=A.getParameter(A.VIEWPORT),$=new UJ().fromArray($A),QA=new UJ().fromArray(W6);function rA(v,IA,a,_){let SA=new Uint8Array(4),yA=A.createTexture();A.bindTexture(v,yA),A.texParameteri(v,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(v,A.TEXTURE_MAG_FILTER,A.NEAREST);for(let I6=0;I6<a;I6++)if(v===A.TEXTURE_3D||v===A.TEXTURE_2D_ARRAY)A.texImage3D(IA,0,A.RGBA,1,1,_,0,A.RGBA,A.UNSIGNED_BYTE,SA);else A.texImage2D(IA+I6,0,A.RGBA,1,1,0,A.RGBA,A.UNSIGNED_BYTE,SA);return yA}let eA={};eA[A.TEXTURE_2D]=rA(A.TEXTURE_2D,A.TEXTURE_2D,1),eA[A.TEXTURE_CUBE_MAP]=rA(A.TEXTURE_CUBE_MAP,A.TEXTURE_CUBE_MAP_POSITIVE_X,6),eA[A.TEXTURE_2D_ARRAY]=rA(A.TEXTURE_2D_ARRAY,A.TEXTURE_2D_ARRAY,1,1),eA[A.TEXTURE_3D]=rA(A.TEXTURE_3D,A.TEXTURE_3D,1,1),V.setClear(0,0,0,1),U.setClear(1),Z.setClear(0),kA(A.DEPTH_TEST),U.setFunc(tX),K6(!1),lA(I7),kA(A.CULL_FACE),NJ(S1);function kA(v){if(P[v]!==!0)A.enable(v),P[v]=!0}function A6(v){if(P[v]!==!1)A.disable(v),P[v]=!1}function j6(v,IA){if(N[v]!==IA){if(A.bindFramebuffer(v,IA),N[v]=IA,v===A.DRAW_FRAMEBUFFER)N[A.FRAMEBUFFER]=IA;if(v===A.FRAMEBUFFER)N[A.DRAW_FRAMEBUFFER]=IA;return!0}return!1}function k6(v,IA){let a=z,_=!1;if(v){if(a=I.get(IA),a===void 0)a=[],I.set(IA,a);let SA=v.textures;if(a.length!==SA.length||a[0]!==A.COLOR_ATTACHMENT0){for(let yA=0,I6=SA.length;yA<I6;yA++)a[yA]=A.COLOR_ATTACHMENT0+yA;a.length=SA.length,_=!0}}else if(a[0]!==A.BACK)a[0]=A.BACK,_=!0;if(_)A.drawBuffers(a)}function O6(v){if(B!==v)return A.useProgram(v),B=v,!0;return!1}let SJ={[WE]:A.FUNC_ADD,[AI]:A.FUNC_SUBTRACT,[JI]:A.FUNC_REVERSE_SUBTRACT};SJ[HI]=A.MIN,SJ[EI]=A.MAX;let y={[XI]:A.ZERO,[VI]:A.ONE,[UI]:A.SRC_COLOR,[RI]:A.SRC_ALPHA,[zI]:A.SRC_ALPHA_SATURATE,[qI]:A.DST_COLOR,[PI]:A.DST_ALPHA,[ZI]:A.ONE_MINUS_SRC_COLOR,[YI]:A.ONE_MINUS_SRC_ALPHA,[II]:A.ONE_MINUS_DST_COLOR,[NI]:A.ONE_MINUS_DST_ALPHA,[QI]:A.CONSTANT_COLOR,[FI]:A.ONE_MINUS_CONSTANT_COLOR,[CI]:A.CONSTANT_ALPHA,[BI]:A.ONE_MINUS_CONSTANT_ALPHA};function NJ(v,IA,a,_,SA,yA,I6,t6,RJ,z6){if(v===S1){if(G===!0)A6(A.BLEND),G=!1;return}if(G===!1)kA(A.BLEND),G=!0;if(v!==_q){if(v!==F||z6!==k){if(q!==WE||D!==WE)A.blendEquation(A.FUNC_ADD),q=WE,D=WE;if(z6)switch(v){case rX:A.blendFuncSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case Q7:A.blendFunc(A.ONE,A.ONE);break;case F7:A.blendFuncSeparate(A.ZERO,A.ONE_MINUS_SRC_COLOR,A.ZERO,A.ONE);break;case C7:A.blendFuncSeparate(A.ZERO,A.SRC_COLOR,A.ZERO,A.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case rX:A.blendFuncSeparate(A.SRC_ALPHA,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case Q7:A.blendFunc(A.SRC_ALPHA,A.ONE);break;case F7:A.blendFuncSeparate(A.ZERO,A.ONE_MINUS_SRC_COLOR,A.ZERO,A.ONE);break;case C7:A.blendFunc(A.ZERO,A.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}C=null,Q=null,f=null,S=null,L.set(0,0,0),u=0,F=v,k=z6}return}if(SA=SA||IA,yA=yA||a,I6=I6||_,IA!==q||SA!==D)A.blendEquationSeparate(SJ[IA],SJ[SA]),q=IA,D=SA;if(a!==C||_!==Q||yA!==f||I6!==S)A.blendFuncSeparate(y[a],y[_],y[yA],y[I6]),C=a,Q=_,f=yA,S=I6;if(t6.equals(L)===!1||RJ!==u)A.blendColor(t6.r,t6.g,t6.b,RJ),L.copy(t6),u=RJ;F=v,k=!1}function S6(v,IA){v.side===_6?A6(A.CULL_FACE):kA(A.CULL_FACE);let a=v.side===k8;if(IA)a=!a;K6(a),v.blending===rX&&v.transparent===!1?NJ(S1):NJ(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),U.setFunc(v.depthFunc),U.setTest(v.depthTest),U.setMask(v.depthWrite),V.setMask(v.colorWrite);let _=v.stencilWrite;if(Z.setTest(_),_)Z.setMask(v.stencilWriteMask),Z.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),Z.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);nA(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?kA(A.SAMPLE_ALPHA_TO_COVERAGE):A6(A.SAMPLE_ALPHA_TO_COVERAGE)}function K6(v){if(O!==v){if(v)A.frontFace(A.CW);else A.frontFace(A.CCW);O=v}}function lA(v){if(v!==eq){if(kA(A.CULL_FACE),v!==j)if(v===I7)A.cullFace(A.BACK);else if(v===$q)A.cullFace(A.FRONT);else A.cullFace(A.FRONT_AND_BACK)}else A6(A.CULL_FACE);j=v}function AJ(v){if(v!==x){if(t)A.lineWidth(v);x=v}}function nA(v,IA,a){if(v){if(kA(A.POLYGON_OFFSET_FILL),c!==IA||i!==a)A.polygonOffset(IA,a),c=IA,i=a}else A6(A.POLYGON_OFFSET_FILL)}function iA(v){if(v)kA(A.SCISSOR_TEST);else A6(A.SCISSOR_TEST)}function w(v){if(v===void 0)v=A.TEXTURE0+AA-1;if(jA!==v)A.activeTexture(v),jA=v}function W(v,IA,a){if(a===void 0)if(jA===null)a=A.TEXTURE0+AA-1;else a=jA;let _=hA[a];if(_===void 0)_={type:void 0,texture:void 0},hA[a]=_;if(_.type!==v||_.texture!==IA){if(jA!==a)A.activeTexture(a),jA=a;A.bindTexture(v,IA||eA[v]),_.type=v,_.texture=IA}}function b(){let v=hA[jA];if(v!==void 0&&v.type!==void 0)A.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function JA(){try{A.compressedTexImage2D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function HA(){try{A.compressedTexImage3D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function e(){try{A.texSubImage2D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oA(){try{A.texSubImage3D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function OA(){try{A.compressedTexSubImage2D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function FA(){try{A.compressedTexSubImage3D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function R6(){try{A.texStorage2D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function UA(){try{A.texStorage3D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function vA(){try{A.texImage2D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _A(){try{A.texImage3D.apply(A,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function J6(v){if($.equals(v)===!1)A.scissor(v.x,v.y,v.z,v.w),$.copy(v)}function bA(v){if(QA.equals(v)===!1)A.viewport(v.x,v.y,v.z,v.w),QA.copy(v)}function q6(v,IA){let a=Y.get(IA);if(a===void 0)a=new WeakMap,Y.set(IA,a);let _=a.get(v);if(_===void 0)_=A.getUniformBlockIndex(IA,v.name),a.set(v,_)}function Q6(v,IA){let _=Y.get(IA).get(v);if(R.get(IA)!==_)A.uniformBlockBinding(IA,_,v.__bindingPointIndex),R.set(IA,_)}function b6(){A.disable(A.BLEND),A.disable(A.CULL_FACE),A.disable(A.DEPTH_TEST),A.disable(A.POLYGON_OFFSET_FILL),A.disable(A.SCISSOR_TEST),A.disable(A.STENCIL_TEST),A.disable(A.SAMPLE_ALPHA_TO_COVERAGE),A.blendEquation(A.FUNC_ADD),A.blendFunc(A.ONE,A.ZERO),A.blendFuncSeparate(A.ONE,A.ZERO,A.ONE,A.ZERO),A.blendColor(0,0,0,0),A.colorMask(!0,!0,!0,!0),A.clearColor(0,0,0,0),A.depthMask(!0),A.depthFunc(A.LESS),U.setReversed(!1),A.clearDepth(1),A.stencilMask(4294967295),A.stencilFunc(A.ALWAYS,0,4294967295),A.stencilOp(A.KEEP,A.KEEP,A.KEEP),A.clearStencil(0),A.cullFace(A.BACK),A.frontFace(A.CCW),A.polygonOffset(0,0),A.activeTexture(A.TEXTURE0),A.bindFramebuffer(A.FRAMEBUFFER,null),A.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),A.bindFramebuffer(A.READ_FRAMEBUFFER,null),A.useProgram(null),A.lineWidth(1),A.scissor(0,0,A.canvas.width,A.canvas.height),A.viewport(0,0,A.canvas.width,A.canvas.height),P={},jA=null,hA={},N={},I=new WeakMap,z=[],B=null,G=!1,F=null,q=null,C=null,Q=null,D=null,f=null,S=null,L=new F6(0,0,0),u=0,k=!1,O=null,j=null,x=null,c=null,i=null,$.set(0,0,A.canvas.width,A.canvas.height),QA.set(0,0,A.canvas.width,A.canvas.height),V.reset(),U.reset(),Z.reset()}return{buffers:{color:V,depth:U,stencil:Z},enable:kA,disable:A6,bindFramebuffer:j6,drawBuffers:k6,useProgram:O6,setBlending:NJ,setMaterial:S6,setFlipSided:K6,setCullFace:lA,setLineWidth:AJ,setPolygonOffset:nA,setScissorTest:iA,activeTexture:w,bindTexture:W,unbindTexture:b,compressedTexImage2D:JA,compressedTexImage3D:HA,texImage2D:vA,texImage3D:_A,updateUBOMapping:q6,uniformBlockBinding:Q6,texStorage2D:R6,texStorage3D:UA,texSubImage2D:e,texSubImage3D:oA,compressedTexSubImage2D:OA,compressedTexSubImage3D:FA,scissor:J6,viewport:bA,reset:b6}}function Dk(A,J,H,E,X,V,U){let Z=J.has("WEBGL_multisampled_render_to_texture")?J.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Y=new X6,P=new WeakMap,N,I=new WeakMap,z=!1;try{z=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function B(w,W){return z?new OffscreenCanvas(w,W):GE("canvas")}function G(w,W,b){let JA=1,HA=iA(w);if(HA.width>b||HA.height>b)JA=b/Math.max(HA.width,HA.height);if(JA<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let e=Math.floor(JA*HA.width),oA=Math.floor(JA*HA.height);if(N===void 0)N=B(e,oA);let OA=W?B(e,oA):N;return OA.width=e,OA.height=oA,OA.getContext("2d").drawImage(w,0,0,e,oA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+HA.width+"x"+HA.height+") to ("+e+"x"+oA+")."),OA}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+HA.width+"x"+HA.height+").");return w}return w}function F(w){return w.generateMipmaps}function q(w){A.generateMipmap(w)}function C(w){if(w.isWebGLCubeRenderTarget)return A.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return A.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return A.TEXTURE_2D_ARRAY;return A.TEXTURE_2D}function Q(w,W,b,JA,HA=!1){if(w!==null){if(A[w]!==void 0)return A[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let e=W;if(W===A.RED){if(b===A.FLOAT)e=A.R32F;if(b===A.HALF_FLOAT)e=A.R16F;if(b===A.UNSIGNED_BYTE)e=A.R8}if(W===A.RED_INTEGER){if(b===A.UNSIGNED_BYTE)e=A.R8UI;if(b===A.UNSIGNED_SHORT)e=A.R16UI;if(b===A.UNSIGNED_INT)e=A.R32UI;if(b===A.BYTE)e=A.R8I;if(b===A.SHORT)e=A.R16I;if(b===A.INT)e=A.R32I}if(W===A.RG){if(b===A.FLOAT)e=A.RG32F;if(b===A.HALF_FLOAT)e=A.RG16F;if(b===A.UNSIGNED_BYTE)e=A.RG8}if(W===A.RG_INTEGER){if(b===A.UNSIGNED_BYTE)e=A.RG8UI;if(b===A.UNSIGNED_SHORT)e=A.RG16UI;if(b===A.UNSIGNED_INT)e=A.RG32UI;if(b===A.BYTE)e=A.RG8I;if(b===A.SHORT)e=A.RG16I;if(b===A.INT)e=A.RG32I}if(W===A.RGB_INTEGER){if(b===A.UNSIGNED_BYTE)e=A.RGB8UI;if(b===A.UNSIGNED_SHORT)e=A.RGB16UI;if(b===A.UNSIGNED_INT)e=A.RGB32UI;if(b===A.BYTE)e=A.RGB8I;if(b===A.SHORT)e=A.RGB16I;if(b===A.INT)e=A.RGB32I}if(W===A.RGBA_INTEGER){if(b===A.UNSIGNED_BYTE)e=A.RGBA8UI;if(b===A.UNSIGNED_SHORT)e=A.RGBA16UI;if(b===A.UNSIGNED_INT)e=A.RGBA32UI;if(b===A.BYTE)e=A.RGBA8I;if(b===A.SHORT)e=A.RGBA16I;if(b===A.INT)e=A.RGBA32I}if(W===A.RGB){if(b===A.UNSIGNED_INT_5_9_9_9_REV)e=A.RGB9_E5}if(W===A.RGBA){let oA=HA?$7:f6.getTransfer(JA);if(b===A.FLOAT)e=A.RGBA32F;if(b===A.HALF_FLOAT)e=A.RGBA16F;if(b===A.UNSIGNED_BYTE)e=oA===i6?A.SRGB8_ALPHA8:A.RGBA8;if(b===A.UNSIGNED_SHORT_4_4_4_4)e=A.RGBA4;if(b===A.UNSIGNED_SHORT_5_5_5_1)e=A.RGB5_A1}if(e===A.R16F||e===A.R32F||e===A.RG16F||e===A.RG32F||e===A.RGBA16F||e===A.RGBA32F)J.get("EXT_color_buffer_float");return e}function D(w,W){let b;if(w){if(W===null||W===kE||W===DE)b=A.DEPTH24_STENCIL8;else if(W===T1)b=A.DEPTH32F_STENCIL8;else if(W===eX)b=A.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(W===null||W===kE||W===DE)b=A.DEPTH_COMPONENT24;else if(W===T1)b=A.DEPTH_COMPONENT32F;else if(W===eX)b=A.DEPTH_COMPONENT16;return b}function f(w,W){if(F(w)===!0||w.isFramebufferTexture&&w.minFilter!==L1&&w.minFilter!==XH)return Math.log2(Math.max(W.width,W.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return W.mipmaps.length;else return 1}function S(w){let W=w.target;if(W.removeEventListener("dispose",S),u(W),W.isVideoTexture)P.delete(W)}function L(w){let W=w.target;W.removeEventListener("dispose",L),O(W)}function u(w){let W=E.get(w);if(W.__webglInit===void 0)return;let b=w.source,JA=I.get(b);if(JA){let HA=JA[W.__cacheKey];if(HA.usedTimes--,HA.usedTimes===0)k(w);if(Object.keys(JA).length===0)I.delete(b)}E.remove(w)}function k(w){let W=E.get(w);A.deleteTexture(W.__webglTexture);let b=w.source,JA=I.get(b);delete JA[W.__cacheKey],U.memory.textures--}function O(w){let W=E.get(w);if(w.depthTexture)w.depthTexture.dispose(),E.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let JA=0;JA<6;JA++){if(Array.isArray(W.__webglFramebuffer[JA]))for(let HA=0;HA<W.__webglFramebuffer[JA].length;HA++)A.deleteFramebuffer(W.__webglFramebuffer[JA][HA]);else A.deleteFramebuffer(W.__webglFramebuffer[JA]);if(W.__webglDepthbuffer)A.deleteRenderbuffer(W.__webglDepthbuffer[JA])}else{if(Array.isArray(W.__webglFramebuffer))for(let JA=0;JA<W.__webglFramebuffer.length;JA++)A.deleteFramebuffer(W.__webglFramebuffer[JA]);else A.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer)A.deleteRenderbuffer(W.__webglDepthbuffer);if(W.__webglMultisampledFramebuffer)A.deleteFramebuffer(W.__webglMultisampledFramebuffer);if(W.__webglColorRenderbuffer){for(let JA=0;JA<W.__webglColorRenderbuffer.length;JA++)if(W.__webglColorRenderbuffer[JA])A.deleteRenderbuffer(W.__webglColorRenderbuffer[JA])}if(W.__webglDepthRenderbuffer)A.deleteRenderbuffer(W.__webglDepthRenderbuffer)}let b=w.textures;for(let JA=0,HA=b.length;JA<HA;JA++){let e=E.get(b[JA]);if(e.__webglTexture)A.deleteTexture(e.__webglTexture),U.memory.textures--;E.remove(b[JA])}E.remove(w)}let j=0;function x(){j=0}function c(){let w=j;if(w>=X.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+X.maxTextures);return j+=1,w}function i(w){let W=[];return W.push(w.wrapS),W.push(w.wrapT),W.push(w.wrapR||0),W.push(w.magFilter),W.push(w.minFilter),W.push(w.anisotropy),W.push(w.internalFormat),W.push(w.format),W.push(w.type),W.push(w.generateMipmaps),W.push(w.premultiplyAlpha),W.push(w.flipY),W.push(w.unpackAlignment),W.push(w.colorSpace),W.join()}function AA(w,W){let b=E.get(w);if(w.isVideoTexture)AJ(w);if(w.isRenderTargetTexture===!1&&w.version>0&&b.__version!==w.version){let JA=w.image;if(JA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(JA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{QA(b,w,W);return}}H.bindTexture(A.TEXTURE_2D,b.__webglTexture,A.TEXTURE0+W)}function t(w,W){let b=E.get(w);if(w.version>0&&b.__version!==w.version){QA(b,w,W);return}H.bindTexture(A.TEXTURE_2D_ARRAY,b.__webglTexture,A.TEXTURE0+W)}function XA(w,W){let b=E.get(w);if(w.version>0&&b.__version!==w.version){QA(b,w,W);return}H.bindTexture(A.TEXTURE_3D,b.__webglTexture,A.TEXTURE0+W)}function s(w,W){let b=E.get(w);if(w.version>0&&b.__version!==w.version){rA(b,w,W);return}H.bindTexture(A.TEXTURE_CUBE_MAP,b.__webglTexture,A.TEXTURE0+W)}let jA={[q8]:A.REPEAT,[gU]:A.CLAMP_TO_EDGE,[bU]:A.MIRRORED_REPEAT},hA={[L1]:A.NEAREST,[xU]:A.NEAREST_MIPMAP_NEAREST,[R0]:A.NEAREST_MIPMAP_LINEAR,[XH]:A.LINEAR,[ME]:A.LINEAR_MIPMAP_NEAREST,[BH]:A.LINEAR_MIPMAP_LINEAR},$A={[mI]:A.NEVER,[oI]:A.ALWAYS,[dI]:A.LESS,[_7]:A.LEQUAL,[nI]:A.EQUAL,[sI]:A.GEQUAL,[cI]:A.GREATER,[iI]:A.NOTEQUAL};function W6(w,W){if(W.type===T1&&J.has("OES_texture_float_linear")===!1&&(W.magFilter===XH||W.magFilter===ME||W.magFilter===R0||W.magFilter===BH||W.minFilter===XH||W.minFilter===ME||W.minFilter===R0||W.minFilter===BH))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(A.texParameteri(w,A.TEXTURE_WRAP_S,jA[W.wrapS]),A.texParameteri(w,A.TEXTURE_WRAP_T,jA[W.wrapT]),w===A.TEXTURE_3D||w===A.TEXTURE_2D_ARRAY)A.texParameteri(w,A.TEXTURE_WRAP_R,jA[W.wrapR]);if(A.texParameteri(w,A.TEXTURE_MAG_FILTER,hA[W.magFilter]),A.texParameteri(w,A.TEXTURE_MIN_FILTER,hA[W.minFilter]),W.compareFunction)A.texParameteri(w,A.TEXTURE_COMPARE_MODE,A.COMPARE_REF_TO_TEXTURE),A.texParameteri(w,A.TEXTURE_COMPARE_FUNC,$A[W.compareFunction]);if(J.has("EXT_texture_filter_anisotropic")===!0){if(W.magFilter===L1)return;if(W.minFilter!==R0&&W.minFilter!==BH)return;if(W.type===T1&&J.has("OES_texture_float_linear")===!1)return;if(W.anisotropy>1||E.get(W).__currentAnisotropy){let b=J.get("EXT_texture_filter_anisotropic");A.texParameterf(w,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(W.anisotropy,X.getMaxAnisotropy())),E.get(W).__currentAnisotropy=W.anisotropy}}}function $(w,W){let b=!1;if(w.__webglInit===void 0)w.__webglInit=!0,W.addEventListener("dispose",S);let JA=W.source,HA=I.get(JA);if(HA===void 0)HA={},I.set(JA,HA);let e=i(W);if(e!==w.__cacheKey){if(HA[e]===void 0)HA[e]={texture:A.createTexture(),usedTimes:0},U.memory.textures++,b=!0;HA[e].usedTimes++;let oA=HA[w.__cacheKey];if(oA!==void 0){if(HA[w.__cacheKey].usedTimes--,oA.usedTimes===0)k(W)}w.__cacheKey=e,w.__webglTexture=HA[e].texture}return b}function QA(w,W,b){let JA=A.TEXTURE_2D;if(W.isDataArrayTexture||W.isCompressedArrayTexture)JA=A.TEXTURE_2D_ARRAY;if(W.isData3DTexture)JA=A.TEXTURE_3D;let HA=$(w,W),e=W.source;H.bindTexture(JA,w.__webglTexture,A.TEXTURE0+b);let oA=E.get(e);if(e.version!==oA.__version||HA===!0){H.activeTexture(A.TEXTURE0+b);let OA=f6.getPrimaries(f6.workingColorSpace),FA=W.colorSpace===nH?null:f6.getPrimaries(W.colorSpace),R6=W.colorSpace===nH||OA===FA?A.NONE:A.BROWSER_DEFAULT_WEBGL;A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,W.unpackAlignment),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,R6);let UA=G(W.image,!1,X.maxTextureSize);UA=nA(W,UA);let vA=V.convert(W.format,W.colorSpace),_A=V.convert(W.type),J6=Q(W.internalFormat,vA,_A,W.colorSpace,W.isVideoTexture);W6(JA,W);let bA,q6=W.mipmaps,Q6=W.isVideoTexture!==!0,b6=oA.__version===void 0||HA===!0,v=e.dataReady,IA=f(W,UA);if(W.isDepthTexture){if(J6=D(W.format===_X,W.type),b6)if(Q6)H.texStorage2D(A.TEXTURE_2D,1,J6,UA.width,UA.height);else H.texImage2D(A.TEXTURE_2D,0,J6,UA.width,UA.height,0,vA,_A,null)}else if(W.isDataTexture)if(q6.length>0){if(Q6&&b6)H.texStorage2D(A.TEXTURE_2D,IA,J6,q6[0].width,q6[0].height);for(let a=0,_=q6.length;a<_;a++)if(bA=q6[a],Q6){if(v)H.texSubImage2D(A.TEXTURE_2D,a,0,0,bA.width,bA.height,vA,_A,bA.data)}else H.texImage2D(A.TEXTURE_2D,a,J6,bA.width,bA.height,0,vA,_A,bA.data);W.generateMipmaps=!1}else if(Q6){if(b6)H.texStorage2D(A.TEXTURE_2D,IA,J6,UA.width,UA.height);if(v)H.texSubImage2D(A.TEXTURE_2D,0,0,0,UA.width,UA.height,vA,_A,UA.data)}else H.texImage2D(A.TEXTURE_2D,0,J6,UA.width,UA.height,0,vA,_A,UA.data);else if(W.isCompressedTexture)if(W.isCompressedArrayTexture){if(Q6&&b6)H.texStorage3D(A.TEXTURE_2D_ARRAY,IA,J6,q6[0].width,q6[0].height,UA.depth);for(let a=0,_=q6.length;a<_;a++)if(bA=q6[a],W.format!==b8)if(vA!==null)if(Q6){if(v)if(W.layerUpdates.size>0){let SA=kP(bA.width,bA.height,W.format,W.type);for(let yA of W.layerUpdates){let I6=bA.data.subarray(yA*SA/bA.data.BYTES_PER_ELEMENT,(yA+1)*SA/bA.data.BYTES_PER_ELEMENT);H.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,a,0,0,yA,bA.width,bA.height,1,vA,I6)}W.clearLayerUpdates()}else H.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,a,0,0,0,bA.width,bA.height,UA.depth,vA,bA.data)}else H.compressedTexImage3D(A.TEXTURE_2D_ARRAY,a,J6,bA.width,bA.height,UA.depth,0,bA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Q6){if(v)H.texSubImage3D(A.TEXTURE_2D_ARRAY,a,0,0,0,bA.width,bA.height,UA.depth,vA,_A,bA.data)}else H.texImage3D(A.TEXTURE_2D_ARRAY,a,J6,bA.width,bA.height,UA.depth,0,vA,_A,bA.data)}else{if(Q6&&b6)H.texStorage2D(A.TEXTURE_2D,IA,J6,q6[0].width,q6[0].height);for(let a=0,_=q6.length;a<_;a++)if(bA=q6[a],W.format!==b8)if(vA!==null)if(Q6){if(v)H.compressedTexSubImage2D(A.TEXTURE_2D,a,0,0,bA.width,bA.height,vA,bA.data)}else H.compressedTexImage2D(A.TEXTURE_2D,a,J6,bA.width,bA.height,0,bA.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Q6){if(v)H.texSubImage2D(A.TEXTURE_2D,a,0,0,bA.width,bA.height,vA,_A,bA.data)}else H.texImage2D(A.TEXTURE_2D,a,J6,bA.width,bA.height,0,vA,_A,bA.data)}else if(W.isDataArrayTexture)if(Q6){if(b6)H.texStorage3D(A.TEXTURE_2D_ARRAY,IA,J6,UA.width,UA.height,UA.depth);if(v)if(W.layerUpdates.size>0){let a=kP(UA.width,UA.height,W.format,W.type);for(let _ of W.layerUpdates){let SA=UA.data.subarray(_*a/UA.data.BYTES_PER_ELEMENT,(_+1)*a/UA.data.BYTES_PER_ELEMENT);H.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,_,UA.width,UA.height,1,vA,_A,SA)}W.clearLayerUpdates()}else H.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,0,UA.width,UA.height,UA.depth,vA,_A,UA.data)}else H.texImage3D(A.TEXTURE_2D_ARRAY,0,J6,UA.width,UA.height,UA.depth,0,vA,_A,UA.data);else if(W.isData3DTexture)if(Q6){if(b6)H.texStorage3D(A.TEXTURE_3D,IA,J6,UA.width,UA.height,UA.depth);if(v)H.texSubImage3D(A.TEXTURE_3D,0,0,0,0,UA.width,UA.height,UA.depth,vA,_A,UA.data)}else H.texImage3D(A.TEXTURE_3D,0,J6,UA.width,UA.height,UA.depth,0,vA,_A,UA.data);else if(W.isFramebufferTexture){if(b6)if(Q6)H.texStorage2D(A.TEXTURE_2D,IA,J6,UA.width,UA.height);else{let{width:a,height:_}=UA;for(let SA=0;SA<IA;SA++)H.texImage2D(A.TEXTURE_2D,SA,J6,a,_,0,vA,_A,null),a>>=1,_>>=1}}else if(q6.length>0){if(Q6&&b6){let a=iA(q6[0]);H.texStorage2D(A.TEXTURE_2D,IA,J6,a.width,a.height)}for(let a=0,_=q6.length;a<_;a++)if(bA=q6[a],Q6){if(v)H.texSubImage2D(A.TEXTURE_2D,a,0,0,vA,_A,bA)}else H.texImage2D(A.TEXTURE_2D,a,J6,vA,_A,bA);W.generateMipmaps=!1}else if(Q6){if(b6){let a=iA(UA);H.texStorage2D(A.TEXTURE_2D,IA,J6,a.width,a.height)}if(v)H.texSubImage2D(A.TEXTURE_2D,0,0,0,vA,_A,UA)}else H.texImage2D(A.TEXTURE_2D,0,J6,vA,_A,UA);if(F(W))q(JA);if(oA.__version=e.version,W.onUpdate)W.onUpdate(W)}w.__version=W.version}function rA(w,W,b){if(W.image.length!==6)return;let JA=$(w,W),HA=W.source;H.bindTexture(A.TEXTURE_CUBE_MAP,w.__webglTexture,A.TEXTURE0+b);let e=E.get(HA);if(HA.version!==e.__version||JA===!0){H.activeTexture(A.TEXTURE0+b);let oA=f6.getPrimaries(f6.workingColorSpace),OA=W.colorSpace===nH?null:f6.getPrimaries(W.colorSpace),FA=W.colorSpace===nH||oA===OA?A.NONE:A.BROWSER_DEFAULT_WEBGL;A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,W.unpackAlignment),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,FA);let R6=W.isCompressedTexture||W.image[0].isCompressedTexture,UA=W.image[0]&&W.image[0].isDataTexture,vA=[];for(let _=0;_<6;_++){if(!R6&&!UA)vA[_]=G(W.image[_],!0,X.maxCubemapSize);else vA[_]=UA?W.image[_].image:W.image[_];vA[_]=nA(W,vA[_])}let _A=vA[0],J6=V.convert(W.format,W.colorSpace),bA=V.convert(W.type),q6=Q(W.internalFormat,J6,bA,W.colorSpace),Q6=W.isVideoTexture!==!0,b6=e.__version===void 0||JA===!0,v=HA.dataReady,IA=f(W,_A);W6(A.TEXTURE_CUBE_MAP,W);let a;if(R6){if(Q6&&b6)H.texStorage2D(A.TEXTURE_CUBE_MAP,IA,q6,_A.width,_A.height);for(let _=0;_<6;_++){a=vA[_].mipmaps;for(let SA=0;SA<a.length;SA++){let yA=a[SA];if(W.format!==b8)if(J6!==null)if(Q6){if(v)H.compressedTexSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA,0,0,yA.width,yA.height,J6,yA.data)}else H.compressedTexImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA,q6,yA.width,yA.height,0,yA.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Q6){if(v)H.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA,0,0,yA.width,yA.height,J6,bA,yA.data)}else H.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA,q6,yA.width,yA.height,0,J6,bA,yA.data)}}}else{if(a=W.mipmaps,Q6&&b6){if(a.length>0)IA++;let _=iA(vA[0]);H.texStorage2D(A.TEXTURE_CUBE_MAP,IA,q6,_.width,_.height)}for(let _=0;_<6;_++)if(UA){if(Q6){if(v)H.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,0,0,vA[_].width,vA[_].height,J6,bA,vA[_].data)}else H.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,q6,vA[_].width,vA[_].height,0,J6,bA,vA[_].data);for(let SA=0;SA<a.length;SA++){let I6=a[SA].image[_].image;if(Q6){if(v)H.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA+1,0,0,I6.width,I6.height,J6,bA,I6.data)}else H.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA+1,q6,I6.width,I6.height,0,J6,bA,I6.data)}}else{if(Q6){if(v)H.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,0,0,J6,bA,vA[_])}else H.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,0,q6,J6,bA,vA[_]);for(let SA=0;SA<a.length;SA++){let yA=a[SA];if(Q6){if(v)H.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA+1,0,0,J6,bA,yA.image[_])}else H.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+_,SA+1,q6,J6,bA,yA.image[_])}}}if(F(W))q(A.TEXTURE_CUBE_MAP);if(e.__version=HA.version,W.onUpdate)W.onUpdate(W)}w.__version=W.version}function eA(w,W,b,JA,HA,e){let oA=V.convert(b.format,b.colorSpace),OA=V.convert(b.type),FA=Q(b.internalFormat,oA,OA,b.colorSpace),R6=E.get(W),UA=E.get(b);if(UA.__renderTarget=W,!R6.__hasExternalTextures){let vA=Math.max(1,W.width>>e),_A=Math.max(1,W.height>>e);if(HA===A.TEXTURE_3D||HA===A.TEXTURE_2D_ARRAY)H.texImage3D(HA,e,FA,vA,_A,W.depth,0,oA,OA,null);else H.texImage2D(HA,e,FA,vA,_A,0,oA,OA,null)}if(H.bindFramebuffer(A.FRAMEBUFFER,w),lA(W))Z.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,JA,HA,UA.__webglTexture,0,K6(W));else if(HA===A.TEXTURE_2D||HA>=A.TEXTURE_CUBE_MAP_POSITIVE_X&&HA<=A.TEXTURE_CUBE_MAP_NEGATIVE_Z)A.framebufferTexture2D(A.FRAMEBUFFER,JA,HA,UA.__webglTexture,e);H.bindFramebuffer(A.FRAMEBUFFER,null)}function kA(w,W,b){if(A.bindRenderbuffer(A.RENDERBUFFER,w),W.depthBuffer){let JA=W.depthTexture,HA=JA&&JA.isDepthTexture?JA.type:null,e=D(W.stencilBuffer,HA),oA=W.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,OA=K6(W);if(lA(W))Z.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,OA,e,W.width,W.height);else if(b)A.renderbufferStorageMultisample(A.RENDERBUFFER,OA,e,W.width,W.height);else A.renderbufferStorage(A.RENDERBUFFER,e,W.width,W.height);A.framebufferRenderbuffer(A.FRAMEBUFFER,oA,A.RENDERBUFFER,w)}else{let JA=W.textures;for(let HA=0;HA<JA.length;HA++){let e=JA[HA],oA=V.convert(e.format,e.colorSpace),OA=V.convert(e.type),FA=Q(e.internalFormat,oA,OA,e.colorSpace),R6=K6(W);if(b&&lA(W)===!1)A.renderbufferStorageMultisample(A.RENDERBUFFER,R6,FA,W.width,W.height);else if(lA(W))Z.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,R6,FA,W.width,W.height);else A.renderbufferStorage(A.RENDERBUFFER,FA,W.width,W.height)}}A.bindRenderbuffer(A.RENDERBUFFER,null)}function A6(w,W){if(W&&W.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(H.bindFramebuffer(A.FRAMEBUFFER,w),!(W.depthTexture&&W.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let JA=E.get(W.depthTexture);if(JA.__renderTarget=W,!JA.__webglTexture||W.depthTexture.image.width!==W.width||W.depthTexture.image.height!==W.height)W.depthTexture.image.width=W.width,W.depthTexture.image.height=W.height,W.depthTexture.needsUpdate=!0;AA(W.depthTexture,0);let HA=JA.__webglTexture,e=K6(W);if(W.depthTexture.format===mU)if(lA(W))Z.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,A.DEPTH_ATTACHMENT,A.TEXTURE_2D,HA,0,e);else A.framebufferTexture2D(A.FRAMEBUFFER,A.DEPTH_ATTACHMENT,A.TEXTURE_2D,HA,0);else if(W.depthTexture.format===_X)if(lA(W))Z.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,A.DEPTH_STENCIL_ATTACHMENT,A.TEXTURE_2D,HA,0,e);else A.framebufferTexture2D(A.FRAMEBUFFER,A.DEPTH_STENCIL_ATTACHMENT,A.TEXTURE_2D,HA,0);else throw Error("Unknown depthTexture format")}function j6(w){let W=E.get(w),b=w.isWebGLCubeRenderTarget===!0;if(W.__boundDepthTexture!==w.depthTexture){let JA=w.depthTexture;if(W.__depthDisposeCallback)W.__depthDisposeCallback();if(JA){let HA=()=>{delete W.__boundDepthTexture,delete W.__depthDisposeCallback,JA.removeEventListener("dispose",HA)};JA.addEventListener("dispose",HA),W.__depthDisposeCallback=HA}W.__boundDepthTexture=JA}if(w.depthTexture&&!W.__autoAllocateDepthBuffer){if(b)throw Error("target.depthTexture not supported in Cube render targets");A6(W.__webglFramebuffer,w)}else if(b){W.__webglDepthbuffer=[];for(let JA=0;JA<6;JA++)if(H.bindFramebuffer(A.FRAMEBUFFER,W.__webglFramebuffer[JA]),W.__webglDepthbuffer[JA]===void 0)W.__webglDepthbuffer[JA]=A.createRenderbuffer(),kA(W.__webglDepthbuffer[JA],w,!1);else{let HA=w.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,e=W.__webglDepthbuffer[JA];A.bindRenderbuffer(A.RENDERBUFFER,e),A.framebufferRenderbuffer(A.FRAMEBUFFER,HA,A.RENDERBUFFER,e)}}else if(H.bindFramebuffer(A.FRAMEBUFFER,W.__webglFramebuffer),W.__webglDepthbuffer===void 0)W.__webglDepthbuffer=A.createRenderbuffer(),kA(W.__webglDepthbuffer,w,!1);else{let JA=w.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,HA=W.__webglDepthbuffer;A.bindRenderbuffer(A.RENDERBUFFER,HA),A.framebufferRenderbuffer(A.FRAMEBUFFER,JA,A.RENDERBUFFER,HA)}H.bindFramebuffer(A.FRAMEBUFFER,null)}function k6(w,W,b){let JA=E.get(w);if(W!==void 0)eA(JA.__webglFramebuffer,w,w.texture,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,0);if(b!==void 0)j6(w)}function O6(w){let W=w.texture,b=E.get(w),JA=E.get(W);w.addEventListener("dispose",L);let HA=w.textures,e=w.isWebGLCubeRenderTarget===!0,oA=HA.length>1;if(!oA){if(JA.__webglTexture===void 0)JA.__webglTexture=A.createTexture();JA.__version=W.version,U.memory.textures++}if(e){b.__webglFramebuffer=[];for(let OA=0;OA<6;OA++)if(W.mipmaps&&W.mipmaps.length>0){b.__webglFramebuffer[OA]=[];for(let FA=0;FA<W.mipmaps.length;FA++)b.__webglFramebuffer[OA][FA]=A.createFramebuffer()}else b.__webglFramebuffer[OA]=A.createFramebuffer()}else{if(W.mipmaps&&W.mipmaps.length>0){b.__webglFramebuffer=[];for(let OA=0;OA<W.mipmaps.length;OA++)b.__webglFramebuffer[OA]=A.createFramebuffer()}else b.__webglFramebuffer=A.createFramebuffer();if(oA)for(let OA=0,FA=HA.length;OA<FA;OA++){let R6=E.get(HA[OA]);if(R6.__webglTexture===void 0)R6.__webglTexture=A.createTexture(),U.memory.textures++}if(w.samples>0&&lA(w)===!1){b.__webglMultisampledFramebuffer=A.createFramebuffer(),b.__webglColorRenderbuffer=[],H.bindFramebuffer(A.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let OA=0;OA<HA.length;OA++){let FA=HA[OA];b.__webglColorRenderbuffer[OA]=A.createRenderbuffer(),A.bindRenderbuffer(A.RENDERBUFFER,b.__webglColorRenderbuffer[OA]);let R6=V.convert(FA.format,FA.colorSpace),UA=V.convert(FA.type),vA=Q(FA.internalFormat,R6,UA,FA.colorSpace,w.isXRRenderTarget===!0),_A=K6(w);A.renderbufferStorageMultisample(A.RENDERBUFFER,_A,vA,w.width,w.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+OA,A.RENDERBUFFER,b.__webglColorRenderbuffer[OA])}if(A.bindRenderbuffer(A.RENDERBUFFER,null),w.depthBuffer)b.__webglDepthRenderbuffer=A.createRenderbuffer(),kA(b.__webglDepthRenderbuffer,w,!0);H.bindFramebuffer(A.FRAMEBUFFER,null)}}if(e){H.bindTexture(A.TEXTURE_CUBE_MAP,JA.__webglTexture),W6(A.TEXTURE_CUBE_MAP,W);for(let OA=0;OA<6;OA++)if(W.mipmaps&&W.mipmaps.length>0)for(let FA=0;FA<W.mipmaps.length;FA++)eA(b.__webglFramebuffer[OA][FA],w,W,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+OA,FA);else eA(b.__webglFramebuffer[OA],w,W,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+OA,0);if(F(W))q(A.TEXTURE_CUBE_MAP);H.unbindTexture()}else if(oA){for(let OA=0,FA=HA.length;OA<FA;OA++){let R6=HA[OA],UA=E.get(R6);if(H.bindTexture(A.TEXTURE_2D,UA.__webglTexture),W6(A.TEXTURE_2D,R6),eA(b.__webglFramebuffer,w,R6,A.COLOR_ATTACHMENT0+OA,A.TEXTURE_2D,0),F(R6))q(A.TEXTURE_2D)}H.unbindTexture()}else{let OA=A.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)OA=w.isWebGL3DRenderTarget?A.TEXTURE_3D:A.TEXTURE_2D_ARRAY;if(H.bindTexture(OA,JA.__webglTexture),W6(OA,W),W.mipmaps&&W.mipmaps.length>0)for(let FA=0;FA<W.mipmaps.length;FA++)eA(b.__webglFramebuffer[FA],w,W,A.COLOR_ATTACHMENT0,OA,FA);else eA(b.__webglFramebuffer,w,W,A.COLOR_ATTACHMENT0,OA,0);if(F(W))q(OA);H.unbindTexture()}if(w.depthBuffer)j6(w)}function SJ(w){let W=w.textures;for(let b=0,JA=W.length;b<JA;b++){let HA=W[b];if(F(HA)){let e=C(w),oA=E.get(HA).__webglTexture;H.bindTexture(e,oA),q(e),H.unbindTexture()}}}let y=[],NJ=[];function S6(w){if(w.samples>0){if(lA(w)===!1){let{textures:W,width:b,height:JA}=w,HA=A.COLOR_BUFFER_BIT,e=w.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,oA=E.get(w),OA=W.length>1;if(OA)for(let FA=0;FA<W.length;FA++)H.bindFramebuffer(A.FRAMEBUFFER,oA.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+FA,A.RENDERBUFFER,null),H.bindFramebuffer(A.FRAMEBUFFER,oA.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+FA,A.TEXTURE_2D,null,0);H.bindFramebuffer(A.READ_FRAMEBUFFER,oA.__webglMultisampledFramebuffer),H.bindFramebuffer(A.DRAW_FRAMEBUFFER,oA.__webglFramebuffer);for(let FA=0;FA<W.length;FA++){if(w.resolveDepthBuffer){if(w.depthBuffer)HA|=A.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)HA|=A.STENCIL_BUFFER_BIT}if(OA){A.framebufferRenderbuffer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.RENDERBUFFER,oA.__webglColorRenderbuffer[FA]);let R6=E.get(W[FA]).__webglTexture;A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,R6,0)}if(A.blitFramebuffer(0,0,b,JA,0,0,b,JA,HA,A.NEAREST),R===!0){if(y.length=0,NJ.length=0,y.push(A.COLOR_ATTACHMENT0+FA),w.depthBuffer&&w.resolveDepthBuffer===!1)y.push(e),NJ.push(e),A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,NJ);A.invalidateFramebuffer(A.READ_FRAMEBUFFER,y)}}if(H.bindFramebuffer(A.READ_FRAMEBUFFER,null),H.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),OA)for(let FA=0;FA<W.length;FA++){H.bindFramebuffer(A.FRAMEBUFFER,oA.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+FA,A.RENDERBUFFER,oA.__webglColorRenderbuffer[FA]);let R6=E.get(W[FA]).__webglTexture;H.bindFramebuffer(A.FRAMEBUFFER,oA.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+FA,A.TEXTURE_2D,R6,0)}H.bindFramebuffer(A.DRAW_FRAMEBUFFER,oA.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&R){let W=w.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,[W])}}}function K6(w){return Math.min(X.maxSamples,w.samples)}function lA(w){let W=E.get(w);return w.samples>0&&J.has("WEBGL_multisampled_render_to_texture")===!0&&W.__useRenderToTexture!==!1}function AJ(w){let W=U.render.frame;if(P.get(w)!==W)P.set(w,W),w.update()}function nA(w,W){let{colorSpace:b,format:JA,type:HA}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return W;if(b!==A9&&b!==nH)if(f6.getTransfer(b)===i6){if(JA!==b8||HA!==K1)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",b);return W}function iA(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)Y.width=w.naturalWidth||w.width,Y.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)Y.width=w.displayWidth,Y.height=w.displayHeight;else Y.width=w.width,Y.height=w.height;return Y}this.allocateTextureUnit=c,this.resetTextureUnits=x,this.setTexture2D=AA,this.setTexture2DArray=t,this.setTexture3D=XA,this.setTextureCube=s,this.rebindTextures=k6,this.setupRenderTarget=O6,this.updateRenderTargetMipmap=SJ,this.updateMultisampleRenderTarget=S6,this.setupDepthRenderbuffer=j6,this.setupFrameBufferTexture=eA,this.useMultisampledRTT=lA}function Sk(A,J){function H(E,X=nH){let V,U=f6.getTransfer(X);if(E===K1)return A.UNSIGNED_BYTE;if(E===G7)return A.UNSIGNED_SHORT_4_4_4_4;if(E===W7)return A.UNSIGNED_SHORT_5_5_5_1;if(E===fI)return A.UNSIGNED_INT_5_9_9_9_REV;if(E===TI)return A.BYTE;if(E===wI)return A.SHORT;if(E===eX)return A.UNSIGNED_SHORT;if(E===B7)return A.INT;if(E===kE)return A.UNSIGNED_INT;if(E===T1)return A.FLOAT;if(E===$X)return A.HALF_FLOAT;if(E===jI)return A.ALPHA;if(E===yI)return A.RGB;if(E===b8)return A.RGBA;if(E===vI)return A.LUMINANCE;if(E===uI)return A.LUMINANCE_ALPHA;if(E===mU)return A.DEPTH_COMPONENT;if(E===_X)return A.DEPTH_STENCIL;if(E===hI)return A.RED;if(E===O7)return A.RED_INTEGER;if(E===lI)return A.RG;if(E===M7)return A.RG_INTEGER;if(E===k7)return A.RGBA_INTEGER;if(E===dU||E===nU||E===cU||E===iU)if(U===i6)if(V=J.get("WEBGL_compressed_texture_s3tc_srgb"),V!==null){if(E===dU)return V.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(E===nU)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(E===cU)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(E===iU)return V.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(V=J.get("WEBGL_compressed_texture_s3tc"),V!==null){if(E===dU)return V.COMPRESSED_RGB_S3TC_DXT1_EXT;if(E===nU)return V.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(E===cU)return V.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(E===iU)return V.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(E===D7||E===S7||E===L7||E===K7)if(V=J.get("WEBGL_compressed_texture_pvrtc"),V!==null){if(E===D7)return V.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(E===S7)return V.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(E===L7)return V.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(E===K7)return V.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(E===T7||E===w7||E===f7)if(V=J.get("WEBGL_compressed_texture_etc"),V!==null){if(E===T7||E===w7)return U===i6?V.COMPRESSED_SRGB8_ETC2:V.COMPRESSED_RGB8_ETC2;if(E===f7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:V.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(E===j7||E===y7||E===v7||E===u7||E===h7||E===l7||E===p7||E===g7||E===b7||E===x7||E===m7||E===d7||E===n7||E===c7)if(V=J.get("WEBGL_compressed_texture_astc"),V!==null){if(E===j7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:V.COMPRESSED_RGBA_ASTC_4x4_KHR;if(E===y7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:V.COMPRESSED_RGBA_ASTC_5x4_KHR;if(E===v7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:V.COMPRESSED_RGBA_ASTC_5x5_KHR;if(E===u7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:V.COMPRESSED_RGBA_ASTC_6x5_KHR;if(E===h7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:V.COMPRESSED_RGBA_ASTC_6x6_KHR;if(E===l7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:V.COMPRESSED_RGBA_ASTC_8x5_KHR;if(E===p7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:V.COMPRESSED_RGBA_ASTC_8x6_KHR;if(E===g7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:V.COMPRESSED_RGBA_ASTC_8x8_KHR;if(E===b7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:V.COMPRESSED_RGBA_ASTC_10x5_KHR;if(E===x7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:V.COMPRESSED_RGBA_ASTC_10x6_KHR;if(E===m7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:V.COMPRESSED_RGBA_ASTC_10x8_KHR;if(E===d7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:V.COMPRESSED_RGBA_ASTC_10x10_KHR;if(E===n7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:V.COMPRESSED_RGBA_ASTC_12x10_KHR;if(E===c7)return U===i6?V.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:V.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(E===sU||E===i7||E===s7)if(V=J.get("EXT_texture_compression_bptc"),V!==null){if(E===sU)return U===i6?V.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:V.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(E===i7)return V.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(E===s7)return V.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(E===pI||E===o7||E===r7||E===t7)if(V=J.get("EXT_texture_compression_rgtc"),V!==null){if(E===sU)return V.COMPRESSED_RED_RGTC1_EXT;if(E===o7)return V.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(E===r7)return V.COMPRESSED_RED_GREEN_RGTC2_EXT;if(E===t7)return V.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(E===DE)return A.UNSIGNED_INT_24_8;return A[E]!==void 0?A[E]:null}return{convert:H}}var Lk={type:"move"};class PZ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new E8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new E8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new g,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new g;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new E8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new g,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new g;return this._grip}dispatchEvent(A){if(this._targetRay!==null)this._targetRay.dispatchEvent(A);if(this._grip!==null)this._grip.dispatchEvent(A);if(this._hand!==null)this._hand.dispatchEvent(A);return this}connect(A){if(A&&A.hand){let J=this._hand;if(J)for(let H of A.hand.values())this._getHandJoint(J,H)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){if(this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(A,J,H){let E=null,X=null,V=null,U=this._targetRay,Z=this._grip,R=this._hand;if(A&&J.session.visibilityState!=="visible-blurred"){if(R&&A.hand){V=!0;for(let B of A.hand.values()){let G=J.getJointPose(B,H),F=this._getHandJoint(R,B);if(G!==null)F.matrix.fromArray(G.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=G.radius;F.visible=G!==null}let Y=R.joints["index-finger-tip"],P=R.joints["thumb-tip"],N=Y.position.distanceTo(P.position),I=0.02,z=0.005;if(R.inputState.pinching&&N>I+z)R.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this});else if(!R.inputState.pinching&&N<=I-z)R.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this})}else if(Z!==null&&A.gripSpace){if(X=J.getPose(A.gripSpace,H),X!==null){if(Z.matrix.fromArray(X.transform.matrix),Z.matrix.decompose(Z.position,Z.rotation,Z.scale),Z.matrixWorldNeedsUpdate=!0,X.linearVelocity)Z.hasLinearVelocity=!0,Z.linearVelocity.copy(X.linearVelocity);else Z.hasLinearVelocity=!1;if(X.angularVelocity)Z.hasAngularVelocity=!0,Z.angularVelocity.copy(X.angularVelocity);else Z.hasAngularVelocity=!1}}if(U!==null){if(E=J.getPose(A.targetRaySpace,H),E===null&&X!==null)E=X;if(E!==null){if(U.matrix.fromArray(E.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.matrixWorldNeedsUpdate=!0,E.linearVelocity)U.hasLinearVelocity=!0,U.linearVelocity.copy(E.linearVelocity);else U.hasLinearVelocity=!1;if(E.angularVelocity)U.hasAngularVelocity=!0,U.angularVelocity.copy(E.angularVelocity);else U.hasAngularVelocity=!1;this.dispatchEvent(Lk)}}}if(U!==null)U.visible=E!==null;if(Z!==null)Z.visible=X!==null;if(R!==null)R.visible=V!==null;return this}_getHandJoint(A,J){if(A.joints[J.jointName]===void 0){let H=new E8;H.matrixAutoUpdate=!1,H.visible=!1,A.joints[J.jointName]=H,A.add(H)}return A.joints[J.jointName]}}var Kk=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tk=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gz{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,J,H){if(this.texture===null){let E=new hJ,X=A.properties.get(E);if(X.__webglTexture=J.texture,J.depthNear!=H.depthNear||J.depthFar!=H.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=E}}getMesh(A){if(this.texture!==null){if(this.mesh===null){let J=A.cameras[0].viewport,H=new GH({vertexShader:Kk,fragmentShader:Tk,uniforms:{depthColor:{value:this.texture},depthWidth:{value:J.z},depthHeight:{value:J.w}}});this.mesh=new aA(new ZJ(20,20),H)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bz extends cH{constructor(A,J){super();let H=this,E=null,X=1,V=null,U="local-floor",Z=1,R=null,Y=null,P=null,N=null,I=null,z=null,B=new gz,G=J.getContextAttributes(),F=null,q=null,C=[],Q=[],D=new X6,f=null,S=new H8;S.viewport=new UJ;let L=new H8;L.viewport=new UJ;let u=[S,L],k=new WP,O=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let QA=C[$];if(QA===void 0)QA=new PZ,C[$]=QA;return QA.getTargetRaySpace()},this.getControllerGrip=function($){let QA=C[$];if(QA===void 0)QA=new PZ,C[$]=QA;return QA.getGripSpace()},this.getHand=function($){let QA=C[$];if(QA===void 0)QA=new PZ,C[$]=QA;return QA.getHandSpace()};function x($){let QA=Q.indexOf($.inputSource);if(QA===-1)return;let rA=C[QA];if(rA!==void 0)rA.update($.inputSource,$.frame,R||V),rA.dispatchEvent({type:$.type,data:$.inputSource})}function c(){E.removeEventListener("select",x),E.removeEventListener("selectstart",x),E.removeEventListener("selectend",x),E.removeEventListener("squeeze",x),E.removeEventListener("squeezestart",x),E.removeEventListener("squeezeend",x),E.removeEventListener("end",c),E.removeEventListener("inputsourceschange",i);for(let $=0;$<C.length;$++){let QA=Q[$];if(QA===null)continue;Q[$]=null,C[$].disconnect(QA)}O=null,j=null,B.reset(),A.setRenderTarget(F),I=null,N=null,P=null,E=null,q=null,W6.stop(),H.isPresenting=!1,A.setPixelRatio(f),A.setSize(D.width,D.height,!1),H.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){if(X=$,H.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){if(U=$,H.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return R||V},this.setReferenceSpace=function($){R=$},this.getBaseLayer=function(){return N!==null?N:I},this.getBinding=function(){return P},this.getFrame=function(){return z},this.getSession=function(){return E},this.setSession=async function($){if(E=$,E!==null){if(F=A.getRenderTarget(),E.addEventListener("select",x),E.addEventListener("selectstart",x),E.addEventListener("selectend",x),E.addEventListener("squeeze",x),E.addEventListener("squeezestart",x),E.addEventListener("squeezeend",x),E.addEventListener("end",c),E.addEventListener("inputsourceschange",i),G.xrCompatible!==!0)await J.makeXRCompatible();if(f=A.getPixelRatio(),A.getSize(D),E.renderState.layers===void 0){let QA={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:X};I=new XRWebGLLayer(E,J,QA),E.updateRenderState({baseLayer:I}),A.setPixelRatio(1),A.setSize(I.framebufferWidth,I.framebufferHeight,!1),q=new iH(I.framebufferWidth,I.framebufferHeight,{format:b8,type:K1,colorSpace:A.outputColorSpace,stencilBuffer:G.stencil})}else{let QA=null,rA=null,eA=null;if(G.depth)eA=G.stencil?J.DEPTH24_STENCIL8:J.DEPTH_COMPONENT24,QA=G.stencil?_X:mU,rA=G.stencil?DE:kE;let kA={colorFormat:J.RGBA8,depthFormat:eA,scaleFactor:X};P=new XRWebGLBinding(E,J),N=P.createProjectionLayer(kA),E.updateRenderState({layers:[N]}),A.setPixelRatio(1),A.setSize(N.textureWidth,N.textureHeight,!1),q=new iH(N.textureWidth,N.textureHeight,{format:b8,type:K1,depthTexture:new _U(N.textureWidth,N.textureHeight,rA,void 0,void 0,void 0,void 0,void 0,void 0,QA),stencilBuffer:G.stencil,colorSpace:A.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1})}q.isXRRenderTarget=!0,this.setFoveation(Z),R=null,V=await E.requestReferenceSpace(U),W6.setContext(E),W6.start(),H.isPresenting=!0,H.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(E!==null)return E.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function i($){for(let QA=0;QA<$.removed.length;QA++){let rA=$.removed[QA],eA=Q.indexOf(rA);if(eA>=0)Q[eA]=null,C[eA].disconnect(rA)}for(let QA=0;QA<$.added.length;QA++){let rA=$.added[QA],eA=Q.indexOf(rA);if(eA===-1){for(let A6=0;A6<C.length;A6++)if(A6>=Q.length){Q.push(rA),eA=A6;break}else if(Q[A6]===null){Q[A6]=rA,eA=A6;break}if(eA===-1)break}let kA=C[eA];if(kA)kA.connect(rA)}}let AA=new g,t=new g;function XA($,QA,rA){AA.setFromMatrixPosition(QA.matrixWorld),t.setFromMatrixPosition(rA.matrixWorld);let eA=AA.distanceTo(t),kA=QA.projectionMatrix.elements,A6=rA.projectionMatrix.elements,j6=kA[14]/(kA[10]-1),k6=kA[14]/(kA[10]+1),O6=(kA[9]+1)/kA[5],SJ=(kA[9]-1)/kA[5],y=(kA[8]-1)/kA[0],NJ=(A6[8]+1)/A6[0],S6=j6*y,K6=j6*NJ,lA=eA/(-y+NJ),AJ=lA*-y;if(QA.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(AJ),$.translateZ(lA),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),kA[10]===-1)$.projectionMatrix.copy(QA.projectionMatrix),$.projectionMatrixInverse.copy(QA.projectionMatrixInverse);else{let nA=j6+lA,iA=k6+lA,w=S6-AJ,W=K6+(eA-AJ),b=O6*k6/iA*nA,JA=SJ*k6/iA*nA;$.projectionMatrix.makePerspective(w,W,b,JA,nA,iA),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function s($,QA){if(QA===null)$.matrixWorld.copy($.matrix);else $.matrixWorld.multiplyMatrices(QA.matrixWorld,$.matrix);$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(E===null)return;let{near:QA,far:rA}=$;if(B.texture!==null){if(B.depthNear>0)QA=B.depthNear;if(B.depthFar>0)rA=B.depthFar}if(k.near=L.near=S.near=QA,k.far=L.far=S.far=rA,O!==k.near||j!==k.far)E.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,j=k.far;S.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,k.layers.mask=S.layers.mask|L.layers.mask;let eA=$.parent,kA=k.cameras;s(k,eA);for(let A6=0;A6<kA.length;A6++)s(kA[A6],eA);if(kA.length===2)XA(k,S,L);else k.projectionMatrix.copy(S.projectionMatrix);jA($,k,eA)};function jA($,QA,rA){if(rA===null)$.matrix.copy(QA.matrixWorld);else $.matrix.copy(rA.matrixWorld),$.matrix.invert(),$.matrix.multiply(QA.matrixWorld);if($.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(QA.projectionMatrix),$.projectionMatrixInverse.copy(QA.projectionMatrixInverse),$.isPerspectiveCamera)$.fov=BE*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1}this.getCamera=function(){return k},this.getFoveation=function(){if(N===null&&I===null)return;return Z},this.setFoveation=function($){if(Z=$,N!==null)N.fixedFoveation=$;if(I!==null&&I.fixedFoveation!==void 0)I.fixedFoveation=$},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(k)};let hA=null;function $A($,QA){if(Y=QA.getViewerPose(R||V),z=QA,Y!==null){let rA=Y.views;if(I!==null)A.setRenderTargetFramebuffer(q,I.framebuffer),A.setRenderTarget(q);let eA=!1;if(rA.length!==k.cameras.length)k.cameras.length=0,eA=!0;for(let A6=0;A6<rA.length;A6++){let j6=rA[A6],k6=null;if(I!==null)k6=I.getViewport(j6);else{let SJ=P.getViewSubImage(N,j6);if(k6=SJ.viewport,A6===0)A.setRenderTargetTextures(q,SJ.colorTexture,N.ignoreDepthValues?void 0:SJ.depthStencilTexture),A.setRenderTarget(q)}let O6=u[A6];if(O6===void 0)O6=new H8,O6.layers.enable(A6),O6.viewport=new UJ,u[A6]=O6;if(O6.matrix.fromArray(j6.transform.matrix),O6.matrix.decompose(O6.position,O6.quaternion,O6.scale),O6.projectionMatrix.fromArray(j6.projectionMatrix),O6.projectionMatrixInverse.copy(O6.projectionMatrix).invert(),O6.viewport.set(k6.x,k6.y,k6.width,k6.height),A6===0)k.matrix.copy(O6.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);if(eA===!0)k.cameras.push(O6)}let kA=E.enabledFeatures;if(kA&&kA.includes("depth-sensing")){let A6=P.getDepthInformation(rA[0]);if(A6&&A6.isValid&&A6.texture)B.init(A,A6,E.renderState)}}for(let rA=0;rA<C.length;rA++){let eA=Q[rA],kA=C[rA];if(eA!==null&&kA!==void 0)kA.update(eA,QA,R||V)}if(hA)hA($,QA);if(QA.detectedPlanes)H.dispatchEvent({type:"planesdetected",data:QA});z=null}let W6=new Tz;W6.setAnimationLoop($A),this.setAnimationLoop=function($){hA=$},this.dispose=function(){}}}var B0=new EH,wk=new x6;function fk(A,J){function H(F,q){if(F.matrixAutoUpdate===!0)F.updateMatrix();q.value.copy(F.matrix)}function E(F,q){if(q.color.getRGB(F.fogColor.value,UP(A)),q.isFog)F.fogNear.value=q.near,F.fogFar.value=q.far;else if(q.isFogExp2)F.fogDensity.value=q.density}function X(F,q,C,Q,D){if(q.isMeshBasicMaterial)V(F,q);else if(q.isMeshLambertMaterial)V(F,q);else if(q.isMeshToonMaterial)V(F,q),N(F,q);else if(q.isMeshPhongMaterial)V(F,q),P(F,q);else if(q.isMeshStandardMaterial){if(V(F,q),I(F,q),q.isMeshPhysicalMaterial)z(F,q,D)}else if(q.isMeshMatcapMaterial)V(F,q),B(F,q);else if(q.isMeshDepthMaterial)V(F,q);else if(q.isMeshDistanceMaterial)V(F,q),G(F,q);else if(q.isMeshNormalMaterial)V(F,q);else if(q.isLineBasicMaterial){if(U(F,q),q.isLineDashedMaterial)Z(F,q)}else if(q.isPointsMaterial)R(F,q,C,Q);else if(q.isSpriteMaterial)Y(F,q);else if(q.isShadowMaterial)F.color.value.copy(q.color),F.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function V(F,q){if(F.opacity.value=q.opacity,q.color)F.diffuse.value.copy(q.color);if(q.emissive)F.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)F.map.value=q.map,H(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,H(q.alphaMap,F.alphaMapTransform);if(q.bumpMap){if(F.bumpMap.value=q.bumpMap,H(q.bumpMap,F.bumpMapTransform),F.bumpScale.value=q.bumpScale,q.side===k8)F.bumpScale.value*=-1}if(q.normalMap){if(F.normalMap.value=q.normalMap,H(q.normalMap,F.normalMapTransform),F.normalScale.value.copy(q.normalScale),q.side===k8)F.normalScale.value.negate()}if(q.displacementMap)F.displacementMap.value=q.displacementMap,H(q.displacementMap,F.displacementMapTransform),F.displacementScale.value=q.displacementScale,F.displacementBias.value=q.displacementBias;if(q.emissiveMap)F.emissiveMap.value=q.emissiveMap,H(q.emissiveMap,F.emissiveMapTransform);if(q.specularMap)F.specularMap.value=q.specularMap,H(q.specularMap,F.specularMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest;let C=J.get(q),Q=C.envMap,D=C.envMapRotation;if(Q){if(F.envMap.value=Q,B0.copy(D),B0.x*=-1,B0.y*=-1,B0.z*=-1,Q.isCubeTexture&&Q.isRenderTargetTexture===!1)B0.y*=-1,B0.z*=-1;F.envMapRotation.value.setFromMatrix4(wk.makeRotationFromEuler(B0)),F.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1,F.reflectivity.value=q.reflectivity,F.ior.value=q.ior,F.refractionRatio.value=q.refractionRatio}if(q.lightMap)F.lightMap.value=q.lightMap,F.lightMapIntensity.value=q.lightMapIntensity,H(q.lightMap,F.lightMapTransform);if(q.aoMap)F.aoMap.value=q.aoMap,F.aoMapIntensity.value=q.aoMapIntensity,H(q.aoMap,F.aoMapTransform)}function U(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,q.map)F.map.value=q.map,H(q.map,F.mapTransform)}function Z(F,q){F.dashSize.value=q.dashSize,F.totalSize.value=q.dashSize+q.gapSize,F.scale.value=q.scale}function R(F,q,C,Q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.size.value=q.size*C,F.scale.value=Q*0.5,q.map)F.map.value=q.map,H(q.map,F.uvTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,H(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function Y(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.rotation.value=q.rotation,q.map)F.map.value=q.map,H(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,H(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function P(F,q){F.specular.value.copy(q.specular),F.shininess.value=Math.max(q.shininess,0.0001)}function N(F,q){if(q.gradientMap)F.gradientMap.value=q.gradientMap}function I(F,q){if(F.metalness.value=q.metalness,q.metalnessMap)F.metalnessMap.value=q.metalnessMap,H(q.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=q.roughness,q.roughnessMap)F.roughnessMap.value=q.roughnessMap,H(q.roughnessMap,F.roughnessMapTransform);if(q.envMap)F.envMapIntensity.value=q.envMapIntensity}function z(F,q,C){if(F.ior.value=q.ior,q.sheen>0){if(F.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),F.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)F.sheenColorMap.value=q.sheenColorMap,H(q.sheenColorMap,F.sheenColorMapTransform);if(q.sheenRoughnessMap)F.sheenRoughnessMap.value=q.sheenRoughnessMap,H(q.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(F.clearcoat.value=q.clearcoat,F.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)F.clearcoatMap.value=q.clearcoatMap,H(q.clearcoatMap,F.clearcoatMapTransform);if(q.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,H(q.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(F.clearcoatNormalMap.value=q.clearcoatNormalMap,H(q.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===k8)F.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)F.dispersion.value=q.dispersion;if(q.iridescence>0){if(F.iridescence.value=q.iridescence,F.iridescenceIOR.value=q.iridescenceIOR,F.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)F.iridescenceMap.value=q.iridescenceMap,H(q.iridescenceMap,F.iridescenceMapTransform);if(q.iridescenceThicknessMap)F.iridescenceThicknessMap.value=q.iridescenceThicknessMap,H(q.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(q.transmission>0){if(F.transmission.value=q.transmission,F.transmissionSamplerMap.value=C.texture,F.transmissionSamplerSize.value.set(C.width,C.height),q.transmissionMap)F.transmissionMap.value=q.transmissionMap,H(q.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=q.thickness,q.thicknessMap)F.thicknessMap.value=q.thicknessMap,H(q.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=q.attenuationDistance,F.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(F.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)F.anisotropyMap.value=q.anisotropyMap,H(q.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=q.specularIntensity,F.specularColor.value.copy(q.specularColor),q.specularColorMap)F.specularColorMap.value=q.specularColorMap,H(q.specularColorMap,F.specularColorMapTransform);if(q.specularIntensityMap)F.specularIntensityMap.value=q.specularIntensityMap,H(q.specularIntensityMap,F.specularIntensityMapTransform)}function B(F,q){if(q.matcap)F.matcap.value=q.matcap}function G(F,q){let C=J.get(q).light;F.referencePosition.value.setFromMatrixPosition(C.matrixWorld),F.nearDistance.value=C.shadow.camera.near,F.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:E,refreshMaterialUniforms:X}}function jk(A,J,H,E){let X={},V={},U=[],Z=A.getParameter(A.MAX_UNIFORM_BUFFER_BINDINGS);function R(C,Q){let D=Q.program;E.uniformBlockBinding(C,D)}function Y(C,Q){let D=X[C.id];if(D===void 0)B(C),D=P(C),X[C.id]=D,C.addEventListener("dispose",F);let f=Q.program;E.updateUBOMapping(C,f);let S=J.render.frame;if(V[C.id]!==S)I(C),V[C.id]=S}function P(C){let Q=N();C.__bindingPointIndex=Q;let D=A.createBuffer(),f=C.__size,S=C.usage;return A.bindBuffer(A.UNIFORM_BUFFER,D),A.bufferData(A.UNIFORM_BUFFER,f,S),A.bindBuffer(A.UNIFORM_BUFFER,null),A.bindBufferBase(A.UNIFORM_BUFFER,Q,D),D}function N(){for(let C=0;C<Z;C++)if(U.indexOf(C)===-1)return U.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function I(C){let Q=X[C.id],D=C.uniforms,f=C.__cache;A.bindBuffer(A.UNIFORM_BUFFER,Q);for(let S=0,L=D.length;S<L;S++){let u=Array.isArray(D[S])?D[S]:[D[S]];for(let k=0,O=u.length;k<O;k++){let j=u[k];if(z(j,S,k,f)===!0){let x=j.__offset,c=Array.isArray(j.value)?j.value:[j.value],i=0;for(let AA=0;AA<c.length;AA++){let t=c[AA],XA=G(t);if(typeof t==="number"||typeof t==="boolean")j.__data[0]=t,A.bufferSubData(A.UNIFORM_BUFFER,x+i,j.__data);else if(t.isMatrix3)j.__data[0]=t.elements[0],j.__data[1]=t.elements[1],j.__data[2]=t.elements[2],j.__data[3]=0,j.__data[4]=t.elements[3],j.__data[5]=t.elements[4],j.__data[6]=t.elements[5],j.__data[7]=0,j.__data[8]=t.elements[6],j.__data[9]=t.elements[7],j.__data[10]=t.elements[8],j.__data[11]=0;else t.toArray(j.__data,i),i+=XA.storage/Float32Array.BYTES_PER_ELEMENT}A.bufferSubData(A.UNIFORM_BUFFER,x,j.__data)}}}A.bindBuffer(A.UNIFORM_BUFFER,null)}function z(C,Q,D,f){let S=C.value,L=Q+"_"+D;if(f[L]===void 0){if(typeof S==="number"||typeof S==="boolean")f[L]=S;else f[L]=S.clone();return!0}else{let u=f[L];if(typeof S==="number"||typeof S==="boolean"){if(u!==S)return f[L]=S,!0}else if(u.equals(S)===!1)return u.copy(S),!0}return!1}function B(C){let Q=C.uniforms,D=0,f=16;for(let L=0,u=Q.length;L<u;L++){let k=Array.isArray(Q[L])?Q[L]:[Q[L]];for(let O=0,j=k.length;O<j;O++){let x=k[O],c=Array.isArray(x.value)?x.value:[x.value];for(let i=0,AA=c.length;i<AA;i++){let t=c[i],XA=G(t),s=D%f,jA=s%XA.boundary,hA=s+jA;if(D+=jA,hA!==0&&f-hA<XA.storage)D+=f-hA;x.__data=new Float32Array(XA.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=D,D+=XA.storage}}}let S=D%f;if(S>0)D+=f-S;return C.__size=D,C.__cache={},this}function G(C){let Q={boundary:0,storage:0};if(typeof C==="number"||typeof C==="boolean")Q.boundary=4,Q.storage=4;else if(C.isVector2)Q.boundary=8,Q.storage=8;else if(C.isVector3||C.isColor)Q.boundary=16,Q.storage=12;else if(C.isVector4)Q.boundary=16,Q.storage=16;else if(C.isMatrix3)Q.boundary=48,Q.storage=48;else if(C.isMatrix4)Q.boundary=64,Q.storage=64;else if(C.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C);return Q}function F(C){let Q=C.target;Q.removeEventListener("dispose",F);let D=U.indexOf(Q.__bindingPointIndex);U.splice(D,1),A.deleteBuffer(X[Q.id]),delete X[Q.id],delete V[Q.id]}function q(){for(let C in X)A.deleteBuffer(X[C]);U=[],X={},V={}}return{bind:R,update:Y,dispose:q}}class vP{constructor(A={}){let{canvas:J=tI(),context:H=null,depth:E=!0,stencil:X=!1,alpha:V=!1,antialias:U=!1,premultipliedAlpha:Z=!0,preserveDrawingBuffer:R=!1,powerPreference:Y="default",failIfMajorPerformanceCaveat:P=!1,reverseDepthBuffer:N=!1}=A;this.isWebGLRenderer=!0;let I;if(H!==null){if(typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");I=H.getContextAttributes().alpha}else I=V;let z=new Uint32Array(4),B=new Int32Array(4),G=null,F=null,q=[],C=[];this.domElement=J,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=w1,this.toneMapping=dH,this.toneMappingExposure=1;let Q=this,D=!1,f=0,S=0,L=null,u=-1,k=null,O=new UJ,j=new UJ,x=null,c=new F6(0),i=0,AA=J.width,t=J.height,XA=1,s=null,jA=null,hA=new UJ(0,0,AA,t),$A=new UJ(0,0,AA,t),W6=!1,$=new X9,QA=!1,rA=!1,eA=new x6,kA=new x6,A6=new g,j6=new UJ,k6={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},O6=!1;function SJ(){return L===null?XA:1}let y=H;function NJ(M,h){return J.getContext(M,h)}try{let M={alpha:!0,depth:E,stencil:X,antialias:U,premultipliedAlpha:Z,preserveDrawingBuffer:R,powerPreference:Y,failIfMajorPerformanceCaveat:P};if("setAttribute"in J)J.setAttribute("data-engine",`three.js r${LU}`);if(J.addEventListener("webglcontextlost",a,!1),J.addEventListener("webglcontextrestored",_,!1),J.addEventListener("webglcontextcreationerror",SA,!1),y===null){if(y=NJ("webgl2",M),y===null)if(NJ("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let S6,K6,lA,AJ,nA,iA,w,W,b,JA,HA,e,oA,OA,FA,R6,UA,vA,_A,J6,bA,q6,Q6,b6;function v(){if(S6=new r4(y),S6.init(),q6=new Sk(y,S6),K6=new d4(y,S6,A,q6),lA=new kk(y,S6),K6.reverseDepthBuffer&&N)lA.buffers.depth.setReversed(!0);AJ=new e4(y),nA=new Pk,iA=new Dk(y,S6,lA,nA,K6,q6,AJ),w=new c4(Q),W=new o4(Q),b=new XW(y),Q6=new x4(y,b),JA=new t4(y,b,AJ,Q6),HA=new _4(y,JA,b,AJ),_A=new $4(y,K6,iA),R6=new n4(nA),e=new Yk(Q,w,W,S6,K6,Q6,R6),oA=new fk(Q,nA),OA=new qk,FA=new Bk(S6),vA=new b4(Q,w,W,lA,HA,I,Z),UA=new Ok(Q,HA,K6),b6=new jk(y,AJ,K6,lA),J6=new m4(y,S6,AJ),bA=new a4(y,S6,AJ),AJ.programs=e.programs,Q.capabilities=K6,Q.extensions=S6,Q.properties=nA,Q.renderLists=OA,Q.shadowMap=UA,Q.state=lA,Q.info=AJ}v();let IA=new bz(Q,y);this.xr=IA,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let M=S6.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=S6.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return XA},this.setPixelRatio=function(M){if(M===void 0)return;XA=M,this.setSize(AA,t,!1)},this.getSize=function(M){return M.set(AA,t)},this.setSize=function(M,h,m=!0){if(IA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(AA=M,t=h,J.width=Math.floor(M*XA),J.height=Math.floor(h*XA),m===!0)J.style.width=M+"px",J.style.height=h+"px";this.setViewport(0,0,M,h)},this.getDrawingBufferSize=function(M){return M.set(AA*XA,t*XA).floor()},this.setDrawingBufferSize=function(M,h,m){AA=M,t=h,XA=m,J.width=Math.floor(M*m),J.height=Math.floor(h*m),this.setViewport(0,0,M,h)},this.getCurrentViewport=function(M){return M.copy(O)},this.getViewport=function(M){return M.copy(hA)},this.setViewport=function(M,h,m,d){if(M.isVector4)hA.set(M.x,M.y,M.z,M.w);else hA.set(M,h,m,d);lA.viewport(O.copy(hA).multiplyScalar(XA).round())},this.getScissor=function(M){return M.copy($A)},this.setScissor=function(M,h,m,d){if(M.isVector4)$A.set(M.x,M.y,M.z,M.w);else $A.set(M,h,m,d);lA.scissor(j.copy($A).multiplyScalar(XA).round())},this.getScissorTest=function(){return W6},this.setScissorTest=function(M){lA.setScissorTest(W6=M)},this.setOpaqueSort=function(M){s=M},this.setTransparentSort=function(M){jA=M},this.getClearColor=function(M){return M.copy(vA.getClearColor())},this.setClearColor=function(){vA.setClearColor.apply(vA,arguments)},this.getClearAlpha=function(){return vA.getClearAlpha()},this.setClearAlpha=function(){vA.setClearAlpha.apply(vA,arguments)},this.clear=function(M=!0,h=!0,m=!0){let d=0;if(M){let l=!1;if(L!==null){let NA=L.texture.format;l=NA===k7||NA===M7||NA===O7}if(l){let NA=L.texture.type,KA=NA===K1||NA===kE||NA===eX||NA===DE||NA===G7||NA===W7,pA=vA.getClearColor(),xA=vA.getClearAlpha(),H6=pA.r,V6=pA.g,K=pA.b;if(KA)z[0]=H6,z[1]=V6,z[2]=K,z[3]=xA,y.clearBufferuiv(y.COLOR,0,z);else B[0]=H6,B[1]=V6,B[2]=K,B[3]=xA,y.clearBufferiv(y.COLOR,0,B)}else d|=y.COLOR_BUFFER_BIT}if(h)d|=y.DEPTH_BUFFER_BIT;if(m)d|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);y.clear(d)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){J.removeEventListener("webglcontextlost",a,!1),J.removeEventListener("webglcontextrestored",_,!1),J.removeEventListener("webglcontextcreationerror",SA,!1),vA.dispose(),OA.dispose(),FA.dispose(),nA.dispose(),w.dispose(),W.dispose(),HA.dispose(),Q6.dispose(),b6.dispose(),e.dispose(),IA.dispose(),IA.removeEventListener("sessionstart",JJ),IA.removeEventListener("sessionend",rH),Q8.stop()};function a(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let M=AJ.autoReset,h=UA.enabled,m=UA.autoUpdate,d=UA.needsUpdate,l=UA.type;v(),AJ.autoReset=M,UA.enabled=h,UA.autoUpdate=m,UA.needsUpdate=d,UA.type=l}function SA(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function yA(M){let h=M.target;h.removeEventListener("dispose",yA),I6(h)}function I6(M){t6(M),nA.remove(M)}function t6(M){let h=nA.get(M).programs;if(h!==void 0){if(h.forEach(function(m){e.releaseProgram(m)}),M.isShaderMaterial)e.releaseShaderCache(M)}}this.renderBufferDirect=function(M,h,m,d,l,NA){if(h===null)h=k6;let KA=l.isMesh&&l.matrixWorld.determinant()<0,pA=nP(M,h,m,d,l);lA.setMaterial(d,KA);let xA=m.index,H6=1;if(d.wireframe===!0){if(xA=JA.getWireframeAttribute(m),xA===void 0)return;H6=2}let V6=m.drawRange,K=m.attributes.position,T=V6.start*H6,p=(V6.start+V6.count)*H6;if(NA!==null)T=Math.max(T,NA.start*H6),p=Math.min(p,(NA.start+NA.count)*H6);if(xA!==null)T=Math.max(T,0),p=Math.min(p,xA.count);else if(K!==void 0&&K!==null)T=Math.max(T,0),p=Math.min(p,K.count);let o=p-T;if(o<0||o===1/0)return;Q6.setup(l,d,pA,m,xA);let r,ZA=J6;if(xA!==null)r=b.get(xA),ZA=bA,ZA.setIndex(r);if(l.isMesh)if(d.wireframe===!0)lA.setLineWidth(d.wireframeLinewidth*SJ()),ZA.setMode(y.LINES);else ZA.setMode(y.TRIANGLES);else if(l.isLine){let VA=d.linewidth;if(VA===void 0)VA=1;if(lA.setLineWidth(VA*SJ()),l.isLineSegments)ZA.setMode(y.LINES);else if(l.isLineLoop)ZA.setMode(y.LINE_LOOP);else ZA.setMode(y.LINE_STRIP)}else if(l.isPoints)ZA.setMode(y.POINTS);else if(l.isSprite)ZA.setMode(y.TRIANGLES);if(l.isBatchedMesh)if(l._multiDrawInstances!==null)ZA.renderMultiDrawInstances(l._multiDrawStarts,l._multiDrawCounts,l._multiDrawCount,l._multiDrawInstances);else if(!S6.get("WEBGL_multi_draw")){let{_multiDrawStarts:VA,_multiDrawCounts:YA,_multiDrawCount:BA}=l,uA=xA?b.get(xA).bytesPerElement:1,fA=nA.get(d).currentProgram.getUniforms();for(let dA=0;dA<BA;dA++)fA.setValue(y,"_gl_DrawID",dA),ZA.render(VA[dA]/uA,YA[dA])}else ZA.renderMultiDraw(l._multiDrawStarts,l._multiDrawCounts,l._multiDrawCount);else if(l.isInstancedMesh)ZA.renderInstances(T,o,l.count);else if(m.isInstancedBufferGeometry){let VA=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,YA=Math.min(m.instanceCount,VA);ZA.renderInstances(T,o,YA)}else ZA.render(T,o)};function RJ(M,h,m){if(M.transparent===!0&&M.side===_6&&M.forceSinglePass===!1)M.side=k8,M.needsUpdate=!0,y1(M,h,m),M.side=mH,M.needsUpdate=!0,y1(M,h,m),M.side=_6;else y1(M,h,m)}this.compile=function(M,h,m=null){if(m===null)m=M;if(F=FA.get(m),F.init(h),C.push(F),m.traverseVisible(function(l){if(l.isLight&&l.layers.test(h.layers)){if(F.pushLight(l),l.castShadow)F.pushShadow(l)}}),M!==m)M.traverseVisible(function(l){if(l.isLight&&l.layers.test(h.layers)){if(F.pushLight(l),l.castShadow)F.pushShadow(l)}});F.setupLights();let d=new Set;return M.traverse(function(l){if(!(l.isMesh||l.isPoints||l.isLine||l.isSprite))return;let NA=l.material;if(NA)if(Array.isArray(NA))for(let KA=0;KA<NA.length;KA++){let pA=NA[KA];RJ(pA,m,l),d.add(pA)}else RJ(NA,m,l),d.add(NA)}),C.pop(),F=null,d},this.compileAsync=function(M,h,m=null){let d=this.compile(M,h,m);return new Promise((l)=>{function NA(){if(d.forEach(function(KA){if(nA.get(KA).currentProgram.isReady())d.delete(KA)}),d.size===0){l(M);return}setTimeout(NA,10)}if(S6.get("KHR_parallel_shader_compile")!==null)NA();else setTimeout(NA,10)})};let z6=null;function m8(M){if(z6)z6(M)}function JJ(){Q8.stop()}function rH(){Q8.start()}let Q8=new Tz;if(Q8.setAnimationLoop(m8),typeof self<"u")Q8.setContext(self);this.setAnimationLoop=function(M){z6=M,IA.setAnimationLoop(M),M===null?Q8.stop():Q8.start()},IA.addEventListener("sessionstart",JJ),IA.addEventListener("sessionend",rH),this.render=function(M,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(IA.enabled===!0&&IA.isPresenting===!0){if(IA.cameraAutoUpdate===!0)IA.updateCamera(h);h=IA.getCamera()}if(M.isScene===!0)M.onBeforeRender(Q,M,h,L);if(F=FA.get(M,C.length),F.init(h),C.push(F),kA.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),$.setFromProjectionMatrix(kA),rA=this.localClippingEnabled,QA=R6.init(this.clippingPlanes,rA),G=OA.get(M,q.length),G.init(),q.push(G),IA.enabled===!0&&IA.isPresenting===!0){let NA=Q.xr.getDepthSensingMesh();if(NA!==null)d8(NA,h,-1/0,Q.sortObjects)}if(d8(M,h,0,Q.sortObjects),G.finish(),Q.sortObjects===!0)G.sort(s,jA);if(O6=IA.enabled===!1||IA.isPresenting===!1||IA.hasDepthSensing()===!1,O6)vA.addToRenderList(G,M);if(this.info.render.frame++,QA===!0)R6.beginShadows();let m=F.state.shadowsArray;if(UA.render(m,M,h),QA===!0)R6.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:d,transmissive:l}=G;if(F.setupLights(),h.isArrayCamera){let NA=h.cameras;if(l.length>0)for(let KA=0,pA=NA.length;KA<pA;KA++){let xA=NA[KA];GZ(d,l,M,xA)}if(O6)vA.render(M);for(let KA=0,pA=NA.length;KA<pA;KA++){let xA=NA[KA];BZ(G,M,xA,xA.viewport)}}else{if(l.length>0)GZ(d,l,M,h);if(O6)vA.render(M);BZ(G,M,h)}if(L!==null)iA.updateMultisampleRenderTarget(L),iA.updateRenderTargetMipmap(L);if(M.isScene===!0)M.onAfterRender(Q,M,h);if(Q6.resetDefaultState(),u=-1,k=null,C.pop(),C.length>0){if(F=C[C.length-1],QA===!0)R6.setGlobalState(Q.clippingPlanes,F.state.camera)}else F=null;if(q.pop(),q.length>0)G=q[q.length-1];else G=null};function d8(M,h,m,d){if(M.visible===!1)return;if(M.layers.test(h.layers)){if(M.isGroup)m=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(h)}else if(M.isLight){if(F.pushLight(M),M.castShadow)F.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){if(d)j6.setFromMatrixPosition(M.matrixWorld).applyMatrix4(kA);let KA=HA.update(M),pA=M.material;if(pA.visible)G.push(M,KA,pA,m,j6.z,null)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||$.intersectsObject(M)){let KA=HA.update(M),pA=M.material;if(d){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();j6.copy(M.boundingSphere.center)}else{if(KA.boundingSphere===null)KA.computeBoundingSphere();j6.copy(KA.boundingSphere.center)}j6.applyMatrix4(M.matrixWorld).applyMatrix4(kA)}if(Array.isArray(pA)){let xA=KA.groups;for(let H6=0,V6=xA.length;H6<V6;H6++){let K=xA[H6],T=pA[K.materialIndex];if(T&&T.visible)G.push(M,KA,T,m,j6.z,K)}}else if(pA.visible)G.push(M,KA,pA,m,j6.z,null)}}}let NA=M.children;for(let KA=0,pA=NA.length;KA<pA;KA++)d8(NA[KA],h,m,d)}function BZ(M,h,m,d){let{opaque:l,transmissive:NA,transparent:KA}=M;if(F.setupLightsView(m),QA===!0)R6.setGlobalState(Q.clippingPlanes,m);if(d)lA.viewport(O.copy(d));if(l.length>0)UH(l,h,m);if(NA.length>0)UH(NA,h,m);if(KA.length>0)UH(KA,h,m);lA.buffers.depth.setTest(!0),lA.buffers.depth.setMask(!0),lA.buffers.color.setMask(!0),lA.setPolygonOffset(!1)}function GZ(M,h,m,d){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[d.id]===void 0)F.state.transmissionRenderTarget[d.id]=new iH(1,1,{generateMipmaps:!0,type:S6.has("EXT_color_buffer_half_float")||S6.has("EXT_color_buffer_float")?$X:K1,minFilter:BH,samples:4,stencilBuffer:X,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:f6.workingColorSpace});let NA=F.state.transmissionRenderTarget[d.id],KA=d.viewport||O;NA.setSize(KA.z,KA.w);let pA=Q.getRenderTarget();if(Q.setRenderTarget(NA),Q.getClearColor(c),i=Q.getClearAlpha(),i<1)Q.setClearColor(16777215,0.5);if(Q.clear(),O6)vA.render(m);let xA=Q.toneMapping;Q.toneMapping=dH;let H6=d.viewport;if(d.viewport!==void 0)d.viewport=void 0;if(F.setupLightsView(d),QA===!0)R6.setGlobalState(Q.clippingPlanes,d);if(UH(M,m,d),iA.updateMultisampleRenderTarget(NA),iA.updateRenderTargetMipmap(NA),S6.has("WEBGL_multisampled_render_to_texture")===!1){let V6=!1;for(let K=0,T=h.length;K<T;K++){let p=h[K],o=p.object,r=p.geometry,ZA=p.material,VA=p.group;if(ZA.side===_6&&o.layers.test(d.layers)){let YA=ZA.side;ZA.side=k8,ZA.needsUpdate=!0,xE(o,m,d,r,ZA,VA),ZA.side=YA,ZA.needsUpdate=!0,V6=!0}}if(V6===!0)iA.updateMultisampleRenderTarget(NA),iA.updateRenderTargetMipmap(NA)}if(Q.setRenderTarget(pA),Q.setClearColor(c,i),H6!==void 0)d.viewport=H6;Q.toneMapping=xA}function UH(M,h,m){let d=h.isScene===!0?h.overrideMaterial:null;for(let l=0,NA=M.length;l<NA;l++){let KA=M[l],pA=KA.object,xA=KA.geometry,H6=d===null?KA.material:d,V6=KA.group;if(pA.layers.test(m.layers))xE(pA,h,m,xA,H6,V6)}}function xE(M,h,m,d,l,NA){if(M.onBeforeRender(Q,h,m,d,l,NA),M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),l.onBeforeRender(Q,h,m,d,M,NA),l.transparent===!0&&l.side===_6&&l.forceSinglePass===!1)l.side=k8,l.needsUpdate=!0,Q.renderBufferDirect(m,h,d,l,M,NA),l.side=mH,l.needsUpdate=!0,Q.renderBufferDirect(m,h,d,l,M,NA),l.side=_6;else Q.renderBufferDirect(m,h,d,l,M,NA);M.onAfterRender(Q,h,m,d,l,NA)}function y1(M,h,m){if(h.isScene!==!0)h=k6;let d=nA.get(M),l=F.state.lights,NA=F.state.shadowsArray,KA=l.state.version,pA=e.getParameters(M,l.state,NA,h,m),xA=e.getProgramCacheKey(pA),H6=d.programs;if(d.environment=M.isMeshStandardMaterial?h.environment:null,d.fog=h.fog,d.envMap=(M.isMeshStandardMaterial?W:w).get(M.envMap||d.environment),d.envMapRotation=d.environment!==null&&M.envMap===null?h.environmentRotation:M.envMapRotation,H6===void 0)M.addEventListener("dispose",yA),H6=new Map,d.programs=H6;let V6=H6.get(xA);if(V6!==void 0){if(d.currentProgram===V6&&d.lightsStateVersion===KA)return ZH(M,pA),V6}else pA.uniforms=e.getUniforms(M),M.onBeforeCompile(pA,Q),V6=e.acquireProgram(pA,xA),H6.set(xA,V6),d.uniforms=pA.uniforms;let K=d.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)K.clippingPlanes=R6.uniform;if(ZH(M,pA),d.needsLights=j9(M),d.lightsStateVersion=KA,d.needsLights)K.ambientLightColor.value=l.state.ambient,K.lightProbe.value=l.state.probe,K.directionalLights.value=l.state.directional,K.directionalLightShadows.value=l.state.directionalShadow,K.spotLights.value=l.state.spot,K.spotLightShadows.value=l.state.spotShadow,K.rectAreaLights.value=l.state.rectArea,K.ltc_1.value=l.state.rectAreaLTC1,K.ltc_2.value=l.state.rectAreaLTC2,K.pointLights.value=l.state.point,K.pointLightShadows.value=l.state.pointShadow,K.hemisphereLights.value=l.state.hemi,K.directionalShadowMap.value=l.state.directionalShadowMap,K.directionalShadowMatrix.value=l.state.directionalShadowMatrix,K.spotShadowMap.value=l.state.spotShadowMap,K.spotLightMatrix.value=l.state.spotLightMatrix,K.spotLightMap.value=l.state.spotLightMap,K.pointShadowMap.value=l.state.pointShadowMap,K.pointShadowMatrix.value=l.state.pointShadowMatrix;return d.currentProgram=V6,d.uniformsList=null,V6}function v1(M){if(M.uniformsList===null){let h=M.currentProgram.getUniforms();M.uniformsList=P9.seqWithValue(h.seq,M.uniforms)}return M.uniformsList}function ZH(M,h){let m=nA.get(M);m.outputColorSpace=h.outputColorSpace,m.batching=h.batching,m.batchingColor=h.batchingColor,m.instancing=h.instancing,m.instancingColor=h.instancingColor,m.instancingMorph=h.instancingMorph,m.skinning=h.skinning,m.morphTargets=h.morphTargets,m.morphNormals=h.morphNormals,m.morphColors=h.morphColors,m.morphTargetsCount=h.morphTargetsCount,m.numClippingPlanes=h.numClippingPlanes,m.numIntersection=h.numClipIntersection,m.vertexAlphas=h.vertexAlphas,m.vertexTangents=h.vertexTangents,m.toneMapping=h.toneMapping}function nP(M,h,m,d,l){if(h.isScene!==!0)h=k6;iA.resetTextureUnits();let NA=h.fog,KA=d.isMeshStandardMaterial?h.environment:null,pA=L===null?Q.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:A9,xA=(d.isMeshStandardMaterial?W:w).get(d.envMap||KA),H6=d.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,V6=!!m.attributes.tangent&&(!!d.normalMap||d.anisotropy>0),K=!!m.morphAttributes.position,T=!!m.morphAttributes.normal,p=!!m.morphAttributes.color,o=dH;if(d.toneMapped){if(L===null||L.isXRRenderTarget===!0)o=Q.toneMapping}let r=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,ZA=r!==void 0?r.length:0,VA=nA.get(d),YA=F.state.lights;if(QA===!0){if(rA===!0||M!==k){let EA=M===k&&d.id===u;R6.setState(d,M,EA)}}let BA=!1;if(d.version===VA.__version){if(VA.needsLights&&VA.lightsStateVersion!==YA.state.version)BA=!0;else if(VA.outputColorSpace!==pA)BA=!0;else if(l.isBatchedMesh&&VA.batching===!1)BA=!0;else if(!l.isBatchedMesh&&VA.batching===!0)BA=!0;else if(l.isBatchedMesh&&VA.batchingColor===!0&&l.colorTexture===null)BA=!0;else if(l.isBatchedMesh&&VA.batchingColor===!1&&l.colorTexture!==null)BA=!0;else if(l.isInstancedMesh&&VA.instancing===!1)BA=!0;else if(!l.isInstancedMesh&&VA.instancing===!0)BA=!0;else if(l.isSkinnedMesh&&VA.skinning===!1)BA=!0;else if(!l.isSkinnedMesh&&VA.skinning===!0)BA=!0;else if(l.isInstancedMesh&&VA.instancingColor===!0&&l.instanceColor===null)BA=!0;else if(l.isInstancedMesh&&VA.instancingColor===!1&&l.instanceColor!==null)BA=!0;else if(l.isInstancedMesh&&VA.instancingMorph===!0&&l.morphTexture===null)BA=!0;else if(l.isInstancedMesh&&VA.instancingMorph===!1&&l.morphTexture!==null)BA=!0;else if(VA.envMap!==xA)BA=!0;else if(d.fog===!0&&VA.fog!==NA)BA=!0;else if(VA.numClippingPlanes!==void 0&&(VA.numClippingPlanes!==R6.numPlanes||VA.numIntersection!==R6.numIntersection))BA=!0;else if(VA.vertexAlphas!==H6)BA=!0;else if(VA.vertexTangents!==V6)BA=!0;else if(VA.morphTargets!==K)BA=!0;else if(VA.morphNormals!==T)BA=!0;else if(VA.morphColors!==p)BA=!0;else if(VA.toneMapping!==o)BA=!0;else if(VA.morphTargetsCount!==ZA)BA=!0}else BA=!0,VA.__version=d.version;let uA=VA.currentProgram;if(BA===!0)uA=y1(d,h,l);let fA=!1,dA=!1,TA=!1,PA=uA.getUniforms(),zA=VA.uniforms;if(lA.useProgram(uA.program))fA=!0,dA=!0,TA=!0;if(d.id!==u)u=d.id,dA=!0;if(fA||k!==M){if(lA.buffers.depth.getReversed())eA.copy(M.projectionMatrix),eI(eA),$I(eA),PA.setValue(y,"projectionMatrix",eA);else PA.setValue(y,"projectionMatrix",M.projectionMatrix);PA.setValue(y,"viewMatrix",M.matrixWorldInverse);let WA=PA.map.cameraPosition;if(WA!==void 0)WA.setValue(y,A6.setFromMatrixPosition(M.matrixWorld));if(K6.logarithmicDepthBuffer)PA.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(d.isMeshPhongMaterial||d.isMeshToonMaterial||d.isMeshLambertMaterial||d.isMeshBasicMaterial||d.isMeshStandardMaterial||d.isShaderMaterial)PA.setValue(y,"isOrthographic",M.isOrthographicCamera===!0);if(k!==M)k=M,dA=!0,TA=!0}if(l.isSkinnedMesh){PA.setOptional(y,l,"bindMatrix"),PA.setOptional(y,l,"bindMatrixInverse");let EA=l.skeleton;if(EA){if(EA.boneTexture===null)EA.computeBoneTexture();PA.setValue(y,"boneTexture",EA.boneTexture,iA)}}if(l.isBatchedMesh){if(PA.setOptional(y,l,"batchingTexture"),PA.setValue(y,"batchingTexture",l._matricesTexture,iA),PA.setOptional(y,l,"batchingIdTexture"),PA.setValue(y,"batchingIdTexture",l._indirectTexture,iA),PA.setOptional(y,l,"batchingColorTexture"),l._colorsTexture!==null)PA.setValue(y,"batchingColorTexture",l._colorsTexture,iA)}let n=m.morphAttributes;if(n.position!==void 0||n.normal!==void 0||n.color!==void 0)_A.update(l,m,uA);if(dA||VA.receiveShadow!==l.receiveShadow)VA.receiveShadow=l.receiveShadow,PA.setValue(y,"receiveShadow",l.receiveShadow);if(d.isMeshGouraudMaterial&&d.envMap!==null)zA.envMap.value=xA,zA.flipEnvMap.value=xA.isCubeTexture&&xA.isRenderTargetTexture===!1?-1:1;if(d.isMeshStandardMaterial&&d.envMap===null&&h.environment!==null)zA.envMapIntensity.value=h.environmentIntensity;if(dA){if(PA.setValue(y,"toneMappingExposure",Q.toneMappingExposure),VA.needsLights)mE(zA,TA);if(NA&&d.fog===!0)oA.refreshFogUniforms(zA,NA);oA.refreshMaterialUniforms(zA,d,XA,t,F.state.transmissionRenderTarget[M.id]),P9.upload(y,v1(VA),zA,iA)}if(d.isShaderMaterial&&d.uniformsNeedUpdate===!0)P9.upload(y,v1(VA),zA,iA),d.uniformsNeedUpdate=!1;if(d.isSpriteMaterial)PA.setValue(y,"center",l.center);if(PA.setValue(y,"modelViewMatrix",l.modelViewMatrix),PA.setValue(y,"normalMatrix",l.normalMatrix),PA.setValue(y,"modelMatrix",l.matrixWorld),d.isShaderMaterial||d.isRawShaderMaterial){let EA=d.uniformsGroups;for(let WA=0,MA=EA.length;WA<MA;WA++){let wA=EA[WA];b6.update(wA,uA),b6.bind(wA,uA)}}return uA}function mE(M,h){M.ambientLightColor.needsUpdate=h,M.lightProbe.needsUpdate=h,M.directionalLights.needsUpdate=h,M.directionalLightShadows.needsUpdate=h,M.pointLights.needsUpdate=h,M.pointLightShadows.needsUpdate=h,M.spotLights.needsUpdate=h,M.spotLightShadows.needsUpdate=h,M.rectAreaLights.needsUpdate=h,M.hemisphereLights.needsUpdate=h}function j9(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,h,m){nA.get(M.texture).__webglTexture=h,nA.get(M.depthTexture).__webglTexture=m;let d=nA.get(M);if(d.__hasExternalTextures=!0,d.__autoAllocateDepthBuffer=m===void 0,!d.__autoAllocateDepthBuffer){if(S6.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),d.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(M,h){let m=nA.get(M);m.__webglFramebuffer=h,m.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(M,h=0,m=0){L=M,f=h,S=m;let d=!0,l=null,NA=!1,KA=!1;if(M){let xA=nA.get(M);if(xA.__useDefaultFramebuffer!==void 0)lA.bindFramebuffer(y.FRAMEBUFFER,null),d=!1;else if(xA.__webglFramebuffer===void 0)iA.setupRenderTarget(M);else if(xA.__hasExternalTextures)iA.rebindTextures(M,nA.get(M.texture).__webglTexture,nA.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let K=M.depthTexture;if(xA.__boundDepthTexture!==K){if(K!==null&&nA.has(K)&&(M.width!==K.image.width||M.height!==K.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");iA.setupDepthRenderbuffer(M)}}let H6=M.texture;if(H6.isData3DTexture||H6.isDataArrayTexture||H6.isCompressedArrayTexture)KA=!0;let V6=nA.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(V6[h]))l=V6[h][m];else l=V6[h];NA=!0}else if(M.samples>0&&iA.useMultisampledRTT(M)===!1)l=nA.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(V6))l=V6[m];else l=V6;O.copy(M.viewport),j.copy(M.scissor),x=M.scissorTest}else O.copy(hA).multiplyScalar(XA).floor(),j.copy($A).multiplyScalar(XA).floor(),x=W6;if(lA.bindFramebuffer(y.FRAMEBUFFER,l)&&d)lA.drawBuffers(M,l);if(lA.viewport(O),lA.scissor(j),lA.setScissorTest(x),NA){let xA=nA.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+h,xA.__webglTexture,m)}else if(KA){let xA=nA.get(M.texture),H6=h||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,xA.__webglTexture,m||0,H6)}u=-1},this.readRenderTargetPixels=function(M,h,m,d,l,NA,KA){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pA=nA.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&KA!==void 0)pA=pA[KA];if(pA){lA.bindFramebuffer(y.FRAMEBUFFER,pA);try{let xA=M.texture,H6=xA.format,V6=xA.type;if(!K6.textureFormatReadable(H6)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K6.textureTypeReadable(V6)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=M.width-d&&(m>=0&&m<=M.height-l))y.readPixels(h,m,d,l,q6.convert(H6),q6.convert(V6),NA)}finally{let xA=L!==null?nA.get(L).__webglFramebuffer:null;lA.bindFramebuffer(y.FRAMEBUFFER,xA)}}},this.readRenderTargetPixelsAsync=async function(M,h,m,d,l,NA,KA){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pA=nA.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&KA!==void 0)pA=pA[KA];if(pA){let xA=M.texture,H6=xA.format,V6=xA.type;if(!K6.textureFormatReadable(H6))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K6.textureTypeReadable(V6))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(h>=0&&h<=M.width-d&&(m>=0&&m<=M.height-l)){lA.bindFramebuffer(y.FRAMEBUFFER,pA);let K=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,K),y.bufferData(y.PIXEL_PACK_BUFFER,NA.byteLength,y.STREAM_READ),y.readPixels(h,m,d,l,q6.convert(H6),q6.convert(V6),0);let T=L!==null?nA.get(L).__webglFramebuffer:null;lA.bindFramebuffer(y.FRAMEBUFFER,T);let p=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await aI(y,p,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,K),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,NA),y.deleteBuffer(K),y.deleteSync(p),NA}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,h=null,m=0){if(M.isTexture!==!0)P0("WebGLRenderer: copyFramebufferToTexture function signature has changed."),h=arguments[0]||null,M=arguments[1];let d=Math.pow(2,-m),l=Math.floor(M.image.width*d),NA=Math.floor(M.image.height*d),KA=h!==null?h.x:0,pA=h!==null?h.y:0;iA.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,m,0,0,KA,pA,l,NA),lA.unbindTexture()};let u1=y.createFramebuffer(),WZ=y.createFramebuffer();if(this.copyTextureToTexture=function(M,h,m=null,d=null,l=0,NA=null){if(M.isTexture!==!0)P0("WebGLRenderer: copyTextureToTexture function signature has changed."),d=arguments[0]||null,M=arguments[1],h=arguments[2],NA=arguments[3]||0,m=null;if(NA===null)if(l!==0)P0("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),NA=l,l=0;else NA=0;let KA,pA,xA,H6,V6,K,T,p,o,r=M.isCompressedTexture?M.mipmaps[NA]:M.image;if(m!==null)KA=m.max.x-m.min.x,pA=m.max.y-m.min.y,xA=m.isBox3?m.max.z-m.min.z:1,H6=m.min.x,V6=m.min.y,K=m.isBox3?m.min.z:0;else{let n=Math.pow(2,-l);if(KA=Math.floor(r.width*n),pA=Math.floor(r.height*n),M.isDataArrayTexture)xA=r.depth;else if(M.isData3DTexture)xA=Math.floor(r.depth*n);else xA=1;H6=0,V6=0,K=0}if(d!==null)T=d.x,p=d.y,o=d.z;else T=0,p=0,o=0;let ZA=q6.convert(h.format),VA=q6.convert(h.type),YA;if(h.isData3DTexture)iA.setTexture3D(h,0),YA=y.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)iA.setTexture2DArray(h,0),YA=y.TEXTURE_2D_ARRAY;else iA.setTexture2D(h,0),YA=y.TEXTURE_2D;y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,h.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,h.unpackAlignment);let BA=y.getParameter(y.UNPACK_ROW_LENGTH),uA=y.getParameter(y.UNPACK_IMAGE_HEIGHT),fA=y.getParameter(y.UNPACK_SKIP_PIXELS),dA=y.getParameter(y.UNPACK_SKIP_ROWS),TA=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,r.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,r.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,H6),y.pixelStorei(y.UNPACK_SKIP_ROWS,V6),y.pixelStorei(y.UNPACK_SKIP_IMAGES,K);let PA=M.isDataArrayTexture||M.isData3DTexture,zA=h.isDataArrayTexture||h.isData3DTexture;if(M.isDepthTexture){let n=nA.get(M),EA=nA.get(h),WA=nA.get(n.__renderTarget),MA=nA.get(EA.__renderTarget);lA.bindFramebuffer(y.READ_FRAMEBUFFER,WA.__webglFramebuffer),lA.bindFramebuffer(y.DRAW_FRAMEBUFFER,MA.__webglFramebuffer);for(let wA=0;wA<xA;wA++){if(PA)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,nA.get(M).__webglTexture,l,K+wA),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,nA.get(h).__webglTexture,NA,o+wA);y.blitFramebuffer(H6,V6,KA,pA,T,p,KA,pA,y.DEPTH_BUFFER_BIT,y.NEAREST)}lA.bindFramebuffer(y.READ_FRAMEBUFFER,null),lA.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(l!==0||M.isRenderTargetTexture||nA.has(M)){let n=nA.get(M),EA=nA.get(h);lA.bindFramebuffer(y.READ_FRAMEBUFFER,u1),lA.bindFramebuffer(y.DRAW_FRAMEBUFFER,WZ);for(let WA=0;WA<xA;WA++){if(PA)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,n.__webglTexture,l,K+WA);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,n.__webglTexture,l);if(zA)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,EA.__webglTexture,NA,o+WA);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,EA.__webglTexture,NA);if(l!==0)y.blitFramebuffer(H6,V6,KA,pA,T,p,KA,pA,y.COLOR_BUFFER_BIT,y.NEAREST);else if(zA)y.copyTexSubImage3D(YA,NA,T,p,o+WA,H6,V6,KA,pA);else y.copyTexSubImage2D(YA,NA,T,p,H6,V6,KA,pA)}lA.bindFramebuffer(y.READ_FRAMEBUFFER,null),lA.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(zA)if(M.isDataTexture||M.isData3DTexture)y.texSubImage3D(YA,NA,T,p,o,KA,pA,xA,ZA,VA,r.data);else if(h.isCompressedArrayTexture)y.compressedTexSubImage3D(YA,NA,T,p,o,KA,pA,xA,ZA,r.data);else y.texSubImage3D(YA,NA,T,p,o,KA,pA,xA,ZA,VA,r);else if(M.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,NA,T,p,KA,pA,ZA,VA,r.data);else if(M.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,NA,T,p,r.width,r.height,ZA,r.data);else y.texSubImage2D(y.TEXTURE_2D,NA,T,p,KA,pA,ZA,VA,r);if(y.pixelStorei(y.UNPACK_ROW_LENGTH,BA),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,uA),y.pixelStorei(y.UNPACK_SKIP_PIXELS,fA),y.pixelStorei(y.UNPACK_SKIP_ROWS,dA),y.pixelStorei(y.UNPACK_SKIP_IMAGES,TA),NA===0&&h.generateMipmaps)y.generateMipmap(YA);lA.unbindTexture()},this.copyTextureToTexture3D=function(M,h,m=null,d=null,l=0){if(M.isTexture!==!0)P0("WebGLRenderer: copyTextureToTexture3D function signature has changed."),m=arguments[0]||null,d=arguments[1]||null,M=arguments[2],h=arguments[3],l=arguments[4]||0;return P0('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,h,m,d,l)},this.initRenderTarget=function(M){if(nA.get(M).__webglFramebuffer===void 0)iA.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)iA.setTextureCube(M,0);else if(M.isData3DTexture)iA.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)iA.setTexture2DArray(M,0);else iA.setTexture2D(M,0);lA.unbindTexture()},this.resetState=function(){f=0,S=0,L=null,lA.reset(),Q6.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rI}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;let J=this.getContext();J.drawingBufferColorspace=f6._getDrawingBufferColorSpace(A),J.unpackColorSpace=f6._getUnpackColorSpace()}}var xz={type:"change"},hP={type:"start"},dz={type:"end"},qZ=new KE,mz=new N8,vk=Math.cos(70*Y0.DEG2RAD),DJ=new g,I8=2*Math.PI,g6={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uP=0.000001;class lP extends UZ{constructor(A,J=null){super(A,J);if(this.state=g6.NONE,this.enabled=!0,this.target=new g,this.cursor=new g,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:k1.ROTATE,MIDDLE:k1.DOLLY,RIGHT:k1.PAN},this.touches={ONE:D1.ROTATE,TWO:D1.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new g,this._lastQuaternion=new D8,this._lastTargetPosition=new g,this._quat=new D8().setFromUnitVectors(A.up,new g(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new R9,this._sphericalDelta=new R9,this._scale=1,this._panOffset=new g,this._rotateStart=new X6,this._rotateEnd=new X6,this._rotateDelta=new X6,this._panStart=new X6,this._panEnd=new X6,this._panDelta=new X6,this._dollyStart=new X6,this._dollyEnd=new X6,this._dollyDelta=new X6,this._dollyDirection=new g,this._mouse=new X6,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hk.bind(this),this._onPointerDown=uk.bind(this),this._onPointerUp=lk.bind(this),this._onContextMenu=nk.bind(this),this._onMouseWheel=bk.bind(this),this._onKeyDown=xk.bind(this),this._onTouchStart=mk.bind(this),this._onTouchMove=dk.bind(this),this._onMouseDown=pk.bind(this),this._onMouseMove=gk.bind(this),this._interceptControlDown=ck.bind(this),this._interceptControlUp=ik.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(A){A.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=A}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xz),this.update(),this.state=g6.NONE}update(A=null){let J=this.object.position;if(DJ.copy(J).sub(this.target),DJ.applyQuaternion(this._quat),this._spherical.setFromVector3(DJ),this.autoRotate&&this.state===g6.NONE)this._rotateLeft(this._getAutoRotationAngle(A));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let H=this.minAzimuthAngle,E=this.maxAzimuthAngle;if(isFinite(H)&&isFinite(E)){if(H<-Math.PI)H+=I8;else if(H>Math.PI)H-=I8;if(E<-Math.PI)E+=I8;else if(E>Math.PI)E-=I8;if(H<=E)this._spherical.theta=Math.max(H,Math.min(E,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(H+E)/2?Math.max(H,this._spherical.theta):Math.min(E,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let X=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let V=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),X=V!=this._spherical.radius}if(DJ.setFromSpherical(this._spherical),DJ.applyQuaternion(this._quatInverse),J.copy(this.target).add(DJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let V=null;if(this.object.isPerspectiveCamera){let U=DJ.length();V=this._clampDistance(U*this._scale);let Z=U-V;this.object.position.addScaledVector(this._dollyDirection,Z),this.object.updateMatrixWorld(),X=!!Z}else if(this.object.isOrthographicCamera){let U=new g(this._mouse.x,this._mouse.y,0);U.unproject(this.object);let Z=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),X=Z!==this.object.zoom;let R=new g(this._mouse.x,this._mouse.y,0);R.unproject(this.object),this.object.position.sub(R).add(U),this.object.updateMatrixWorld(),V=DJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(V!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(V).add(this.object.position);else if(qZ.origin.copy(this.object.position),qZ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qZ.direction))<vk)this.object.lookAt(this.target);else mz.setFromNormalAndCoplanarPoint(this.object.up,this.target),qZ.intersectPlane(mz,this.target)}else if(this.object.isOrthographicCamera){let V=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),V!==this.object.zoom)this.object.updateProjectionMatrix(),X=!0}if(this._scale=1,this._performCursorZoom=!1,X||this._lastPosition.distanceToSquared(this.object.position)>uP||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uP||this._lastTargetPosition.distanceToSquared(this.target)>uP)return this.dispatchEvent(xz),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(A){if(A!==null)return I8/60*this.autoRotateSpeed*A;else return I8/60/60*this.autoRotateSpeed}_getZoomScale(A){let J=Math.abs(A*0.01);return Math.pow(0.95,this.zoomSpeed*J)}_rotateLeft(A){this._sphericalDelta.theta-=A}_rotateUp(A){this._sphericalDelta.phi-=A}_panLeft(A,J){DJ.setFromMatrixColumn(J,0),DJ.multiplyScalar(-A),this._panOffset.add(DJ)}_panUp(A,J){if(this.screenSpacePanning===!0)DJ.setFromMatrixColumn(J,1);else DJ.setFromMatrixColumn(J,0),DJ.crossVectors(this.object.up,DJ);DJ.multiplyScalar(A),this._panOffset.add(DJ)}_pan(A,J){let H=this.domElement;if(this.object.isPerspectiveCamera){let E=this.object.position;DJ.copy(E).sub(this.target);let X=DJ.length();X*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*A*X/H.clientHeight,this.object.matrix),this._panUp(2*J*X/H.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(A*(this.object.right-this.object.left)/this.object.zoom/H.clientWidth,this.object.matrix),this._panUp(J*(this.object.top-this.object.bottom)/this.object.zoom/H.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(A){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(A){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=A;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(A,J){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let H=this.domElement.getBoundingClientRect(),E=A-H.left,X=J-H.top,V=H.width,U=H.height;this._mouse.x=E/V*2-1,this._mouse.y=-(X/U)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(A){return Math.max(this.minDistance,Math.min(this.maxDistance,A))}_handleMouseDownRotate(A){this._rotateStart.set(A.clientX,A.clientY)}_handleMouseDownDolly(A){this._updateZoomParameters(A.clientX,A.clientX),this._dollyStart.set(A.clientX,A.clientY)}_handleMouseDownPan(A){this._panStart.set(A.clientX,A.clientY)}_handleMouseMoveRotate(A){this._rotateEnd.set(A.clientX,A.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let J=this.domElement;this._rotateLeft(I8*this._rotateDelta.x/J.clientHeight),this._rotateUp(I8*this._rotateDelta.y/J.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(A){if(this._dollyEnd.set(A.clientX,A.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(A){this._panEnd.set(A.clientX,A.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(A){if(this._updateZoomParameters(A.clientX,A.clientY),A.deltaY<0)this._dollyIn(this._getZoomScale(A.deltaY));else if(A.deltaY>0)this._dollyOut(this._getZoomScale(A.deltaY));this.update()}_handleKeyDown(A){let J=!1;switch(A.code){case this.keys.UP:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateUp(I8*this.rotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);J=!0;break;case this.keys.BOTTOM:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateUp(-I8*this.rotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);J=!0;break;case this.keys.LEFT:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateLeft(I8*this.rotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);J=!0;break;case this.keys.RIGHT:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate)this._rotateLeft(-I8*this.rotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);J=!0;break}if(J)A.preventDefault(),this.update()}_handleTouchStartRotate(A){if(this._pointers.length===1)this._rotateStart.set(A.pageX,A.pageY);else{let J=this._getSecondPointerPosition(A),H=0.5*(A.pageX+J.x),E=0.5*(A.pageY+J.y);this._rotateStart.set(H,E)}}_handleTouchStartPan(A){if(this._pointers.length===1)this._panStart.set(A.pageX,A.pageY);else{let J=this._getSecondPointerPosition(A),H=0.5*(A.pageX+J.x),E=0.5*(A.pageY+J.y);this._panStart.set(H,E)}}_handleTouchStartDolly(A){let J=this._getSecondPointerPosition(A),H=A.pageX-J.x,E=A.pageY-J.y,X=Math.sqrt(H*H+E*E);this._dollyStart.set(0,X)}_handleTouchStartDollyPan(A){if(this.enableZoom)this._handleTouchStartDolly(A);if(this.enablePan)this._handleTouchStartPan(A)}_handleTouchStartDollyRotate(A){if(this.enableZoom)this._handleTouchStartDolly(A);if(this.enableRotate)this._handleTouchStartRotate(A)}_handleTouchMoveRotate(A){if(this._pointers.length==1)this._rotateEnd.set(A.pageX,A.pageY);else{let H=this._getSecondPointerPosition(A),E=0.5*(A.pageX+H.x),X=0.5*(A.pageY+H.y);this._rotateEnd.set(E,X)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let J=this.domElement;this._rotateLeft(I8*this._rotateDelta.x/J.clientHeight),this._rotateUp(I8*this._rotateDelta.y/J.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(A){if(this._pointers.length===1)this._panEnd.set(A.pageX,A.pageY);else{let J=this._getSecondPointerPosition(A),H=0.5*(A.pageX+J.x),E=0.5*(A.pageY+J.y);this._panEnd.set(H,E)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(A){let J=this._getSecondPointerPosition(A),H=A.pageX-J.x,E=A.pageY-J.y,X=Math.sqrt(H*H+E*E);this._dollyEnd.set(0,X),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let V=(A.pageX+J.x)*0.5,U=(A.pageY+J.y)*0.5;this._updateZoomParameters(V,U)}_handleTouchMoveDollyPan(A){if(this.enableZoom)this._handleTouchMoveDolly(A);if(this.enablePan)this._handleTouchMovePan(A)}_handleTouchMoveDollyRotate(A){if(this.enableZoom)this._handleTouchMoveDolly(A);if(this.enableRotate)this._handleTouchMoveRotate(A)}_addPointer(A){this._pointers.push(A.pointerId)}_removePointer(A){delete this._pointerPositions[A.pointerId];for(let J=0;J<this._pointers.length;J++)if(this._pointers[J]==A.pointerId){this._pointers.splice(J,1);return}}_isTrackingPointer(A){for(let J=0;J<this._pointers.length;J++)if(this._pointers[J]==A.pointerId)return!0;return!1}_trackPointer(A){let J=this._pointerPositions[A.pointerId];if(J===void 0)J=new X6,this._pointerPositions[A.pointerId]=J;J.set(A.pageX,A.pageY)}_getSecondPointerPosition(A){let J=A.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[J]}_customWheelEvent(A){let J=A.deltaMode,H={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(J){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}if(A.ctrlKey&&!this._controlActive)H.deltaY*=10;return H}}function uk(A){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(A.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(A))return;if(this._addPointer(A),A.pointerType==="touch")this._onTouchStart(A);else this._onMouseDown(A)}function hk(A){if(this.enabled===!1)return;if(A.pointerType==="touch")this._onTouchMove(A);else this._onMouseMove(A)}function lk(A){switch(this._removePointer(A),this._pointers.length){case 0:this.domElement.releasePointerCapture(A.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dz),this.state=g6.NONE;break;case 1:let J=this._pointers[0],H=this._pointerPositions[J];this._onTouchStart({pointerId:J,pageX:H.x,pageY:H.y});break}}function pk(A){let J;switch(A.button){case 0:J=this.mouseButtons.LEFT;break;case 1:J=this.mouseButtons.MIDDLE;break;case 2:J=this.mouseButtons.RIGHT;break;default:J=-1}switch(J){case k1.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(A),this.state=g6.DOLLY;break;case k1.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(A),this.state=g6.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(A),this.state=g6.ROTATE}break;case k1.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(A),this.state=g6.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(A),this.state=g6.PAN}break;default:this.state=g6.NONE}if(this.state!==g6.NONE)this.dispatchEvent(hP)}function gk(A){switch(this.state){case g6.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(A);break;case g6.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(A);break;case g6.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(A);break}}function bk(A){if(this.enabled===!1||this.enableZoom===!1||this.state!==g6.NONE)return;A.preventDefault(),this.dispatchEvent(hP),this._handleMouseWheel(this._customWheelEvent(A)),this.dispatchEvent(dz)}function xk(A){if(this.enabled===!1)return;this._handleKeyDown(A)}function mk(A){switch(this._trackPointer(A),this._pointers.length){case 1:switch(this.touches.ONE){case D1.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(A),this.state=g6.TOUCH_ROTATE;break;case D1.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(A),this.state=g6.TOUCH_PAN;break;default:this.state=g6.NONE}break;case 2:switch(this.touches.TWO){case D1.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(A),this.state=g6.TOUCH_DOLLY_PAN;break;case D1.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(A),this.state=g6.TOUCH_DOLLY_ROTATE;break;default:this.state=g6.NONE}break;default:this.state=g6.NONE}if(this.state!==g6.NONE)this.dispatchEvent(hP)}function dk(A){switch(this._trackPointer(A),this.state){case g6.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(A),this.update();break;case g6.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(A),this.update();break;case g6.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(A),this.update();break;case g6.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(A),this.update();break;default:this.state=g6.NONE}}function nk(A){if(this.enabled===!1)return;A.preventDefault()}function ck(A){if(A.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function ik(A){if(A.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var nz={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class hE{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(A){return new ez(A)}),this.register(function(A){return new $z(A)}),this.register(function(A){return new HQ(A)}),this.register(function(A){return new EQ(A)}),this.register(function(A){return new XQ(A)}),this.register(function(A){return new VQ(A)}),this.register(function(A){return new _z(A)}),this.register(function(A){return new AQ(A)}),this.register(function(A){return new JQ(A)}),this.register(function(A){return new UQ(A)}),this.register(function(A){return new ZQ(A)}),this.register(function(A){return new RQ(A)}),this.register(function(A){return new YQ(A)}),this.register(function(A){return new PQ(A)})}register(A){if(this.pluginCallbacks.indexOf(A)===-1)this.pluginCallbacks.push(A);return this}unregister(A){if(this.pluginCallbacks.indexOf(A)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1);return this}setTextureUtils(A){return this.textureUtils=A,this}parse(A,J,H,E){let X=new az,V=[];for(let U=0,Z=this.pluginCallbacks.length;U<Z;U++)V.push(this.pluginCallbacks[U](X));X.setPlugins(V),X.setTextureUtils(this.textureUtils),X.writeAsync(A,J,E).catch(H)}parseAsync(A,J){let H=this;return new Promise(function(E,X){H.parse(A,E,X,J)})}}var M6={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},pP="KHR_mesh_quantization",S8={};S8[L1]=M6.NEAREST;S8[xU]=M6.NEAREST_MIPMAP_NEAREST;S8[R0]=M6.NEAREST_MIPMAP_LINEAR;S8[XH]=M6.LINEAR;S8[ME]=M6.LINEAR_MIPMAP_NEAREST;S8[BH]=M6.LINEAR_MIPMAP_LINEAR;S8[gU]=M6.CLAMP_TO_EDGE;S8[q8]=M6.REPEAT;S8[bU]=M6.MIRRORED_REPEAT;var cz={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},sk=new F6,iz=12,ok=1179937895,rk=2,sz=8,tk=1313821514,ak=5130562;function N9(A,J){return A.length===J.length&&A.every(function(H,E){return H===J[E]})}function ek(A){return new TextEncoder().encode(A).buffer}function $k(A){return N9(A.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function _k(A,J,H){let E={min:Array(A.itemSize).fill(Number.POSITIVE_INFINITY),max:Array(A.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let X=J;X<J+H;X++)for(let V=0;V<A.itemSize;V++){let U;if(A.itemSize>4)U=A.array[X*A.itemSize+V];else{if(V===0)U=A.getX(X);else if(V===1)U=A.getY(X);else if(V===2)U=A.getZ(X);else if(V===3)U=A.getW(X);if(A.normalized===!0)U=Y0.normalize(U,A.array)}E.min[V]=Math.min(E.min[V],U),E.max[V]=Math.max(E.max[V],U)}return E}function tz(A){return Math.ceil(A/4)*4}function gP(A,J=0){let H=tz(A.byteLength);if(H!==A.byteLength){let E=new Uint8Array(H);if(E.set(new Uint8Array(A)),J!==0)for(let X=A.byteLength;X<H;X++)E[X]=J;return E.buffer}return A}function oz(){if(typeof document>"u"&&typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);return document.createElement("canvas")}function rz(A,J){if(A.toBlob!==void 0)return new Promise((E)=>A.toBlob(E,J));let H;if(J==="image/jpeg")H=0.92;else if(J==="image/webp")H=0.8;return A.convertToBlob({type:J,quality:H})}class az{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+LU}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(A){this.plugins=A}setTextureUtils(A){this.textureUtils=A}async writeAsync(A,J,H={}){if(this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},H),this.options.animations.length>0)this.options.trs=!0;await this.processInputAsync(A),await Promise.all(this.pending);let E=this,X=E.buffers,V=E.json;H=E.options;let{extensionsUsed:U,extensionsRequired:Z}=E,R=new Blob(X,{type:"application/octet-stream"}),Y=Object.keys(U),P=Object.keys(Z);if(Y.length>0)V.extensionsUsed=Y;if(P.length>0)V.extensionsRequired=P;if(V.buffers&&V.buffers.length>0)V.buffers[0].byteLength=R.size;if(H.binary===!0){let N=new FileReader;N.readAsArrayBuffer(R),N.onloadend=function(){let I=gP(N.result),z=new DataView(new ArrayBuffer(sz));z.setUint32(0,I.byteLength,!0),z.setUint32(4,ak,!0);let B=gP(ek(JSON.stringify(V)),32),G=new DataView(new ArrayBuffer(sz));G.setUint32(0,B.byteLength,!0),G.setUint32(4,tk,!0);let F=new ArrayBuffer(iz),q=new DataView(F);q.setUint32(0,ok,!0),q.setUint32(4,rk,!0);let C=iz+G.byteLength+B.byteLength+z.byteLength+I.byteLength;q.setUint32(8,C,!0);let Q=new Blob([F,G,B,z,I],{type:"application/octet-stream"}),D=new FileReader;D.readAsArrayBuffer(Q),D.onloadend=function(){J(D.result)}}}else if(V.buffers&&V.buffers.length>0){let N=new FileReader;N.readAsDataURL(R),N.onloadend=function(){let I=N.result;V.buffers[0].uri=I,J(V)}}else J(V)}serializeUserData(A,J){if(Object.keys(A.userData).length===0)return;let H=this.options,E=this.extensionsUsed;try{let X=JSON.parse(JSON.stringify(A.userData));if(H.includeCustomExtensions&&X.gltfExtensions){if(J.extensions===void 0)J.extensions={};for(let V in X.gltfExtensions)J.extensions[V]=X.gltfExtensions[V],E[V]=!0;delete X.gltfExtensions}if(Object.keys(X).length>0)J.extras=X}catch(X){console.warn("THREE.GLTFExporter: userData of '"+A.name+"' won't be serialized because of JSON.stringify error - "+X.message)}}getUID(A,J=!1){if(this.uids.has(A)===!1){let E=new Map;E.set(!0,this.uid++),E.set(!1,this.uid++),this.uids.set(A,E)}return this.uids.get(A).get(J)}isNormalizedNormalAttribute(A){if(this.cache.attributesNormalized.has(A))return!1;let H=new g;for(let E=0,X=A.count;E<X;E++)if(Math.abs(H.fromBufferAttribute(A,E).length()-1)>0.0005)return!1;return!0}createNormalizedNormalAttribute(A){let J=this.cache;if(J.attributesNormalized.has(A))return J.attributesNormalized.get(A);let H=A.clone(),E=new g;for(let X=0,V=H.count;X<V;X++){if(E.fromBufferAttribute(H,X),E.x===0&&E.y===0&&E.z===0)E.setX(1);else E.normalize();H.setXYZ(X,E.x,E.y,E.z)}return J.attributesNormalized.set(A,H),H}applyTextureTransform(A,J){let H=!1,E={};if(J.offset.x!==0||J.offset.y!==0)E.offset=J.offset.toArray(),H=!0;if(J.rotation!==0)E.rotation=J.rotation,H=!0;if(J.repeat.x!==1||J.repeat.y!==1)E.scale=J.repeat.toArray(),H=!0;if(H)A.extensions=A.extensions||{},A.extensions.KHR_texture_transform=E,this.extensionsUsed.KHR_texture_transform=!0}async buildMetalRoughTextureAsync(A,J){if(A===J)return A;function H(I){if(I.colorSpace===w1)return function(B){return B<0.04045?B*0.0773993808:Math.pow(B*0.9478672986+0.0521327014,2.4)};return function(B){return B}}if(A instanceof TE)A=await this.decompressTextureAsync(A);if(J instanceof TE)J=await this.decompressTextureAsync(J);let E=A?A.image:null,X=J?J.image:null,V=Math.max(E?E.width:0,X?X.width:0),U=Math.max(E?E.height:0,X?X.height:0),Z=oz();Z.width=V,Z.height=U;let R=Z.getContext("2d",{willReadFrequently:!0});R.fillStyle="#00ffff",R.fillRect(0,0,V,U);let Y=R.getImageData(0,0,V,U);if(E){R.drawImage(E,0,0,V,U);let I=H(A),z=R.getImageData(0,0,V,U).data;for(let B=2;B<z.length;B+=4)Y.data[B]=I(z[B]/256)*256}if(X){R.drawImage(X,0,0,V,U);let I=H(J),z=R.getImageData(0,0,V,U).data;for(let B=1;B<z.length;B+=4)Y.data[B]=I(z[B]/256)*256}R.putImageData(Y,0,0);let N=(A||J).clone();if(N.source=new LE(Z),N.colorSpace=nH,N.channel=(A||J).channel,A&&J&&A.channel!==J.channel)console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match.");return console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),N}async decompressTextureAsync(A,J=1/0){if(this.textureUtils===null)throw Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(A,J)}processBuffer(A){let J=this.json,H=this.buffers;if(!J.buffers)J.buffers=[{byteLength:0}];return H.push(A),0}processBufferView(A,J,H,E,X){let V=this.json;if(!V.bufferViews)V.bufferViews=[];let U;switch(J){case M6.BYTE:case M6.UNSIGNED_BYTE:U=1;break;case M6.SHORT:case M6.UNSIGNED_SHORT:U=2;break;default:U=4}let Z=A.itemSize*U;if(X===M6.ARRAY_BUFFER)Z=Math.ceil(Z/4)*4;let R=tz(E*Z),Y=new DataView(new ArrayBuffer(R)),P=0;for(let z=H;z<H+E;z++){for(let B=0;B<A.itemSize;B++){let G;if(A.itemSize>4)G=A.array[z*A.itemSize+B];else{if(B===0)G=A.getX(z);else if(B===1)G=A.getY(z);else if(B===2)G=A.getZ(z);else if(B===3)G=A.getW(z);if(A.normalized===!0)G=Y0.normalize(G,A.array)}if(J===M6.FLOAT)Y.setFloat32(P,G,!0);else if(J===M6.INT)Y.setInt32(P,G,!0);else if(J===M6.UNSIGNED_INT)Y.setUint32(P,G,!0);else if(J===M6.SHORT)Y.setInt16(P,G,!0);else if(J===M6.UNSIGNED_SHORT)Y.setUint16(P,G,!0);else if(J===M6.BYTE)Y.setInt8(P,G);else if(J===M6.UNSIGNED_BYTE)Y.setUint8(P,G);P+=U}if(P%Z!==0)P+=Z-P%Z}let N={buffer:this.processBuffer(Y.buffer),byteOffset:this.byteOffset,byteLength:R};if(X!==void 0)N.target=X;if(X===M6.ARRAY_BUFFER)N.byteStride=Z;return this.byteOffset+=R,V.bufferViews.push(N),{id:V.bufferViews.length-1,byteLength:0}}processBufferViewImage(A){let J=this,H=J.json;if(!H.bufferViews)H.bufferViews=[];return new Promise(function(E){let X=new FileReader;X.readAsArrayBuffer(A),X.onloadend=function(){let V=gP(X.result),U={buffer:J.processBuffer(V),byteOffset:J.byteOffset,byteLength:V.byteLength};J.byteOffset+=V.byteLength,E(H.bufferViews.push(U)-1)}})}processAccessor(A,J,H,E){let X=this.json,V={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},U;if(A.array.constructor===Float32Array)U=M6.FLOAT;else if(A.array.constructor===Int32Array)U=M6.INT;else if(A.array.constructor===Uint32Array)U=M6.UNSIGNED_INT;else if(A.array.constructor===Int16Array)U=M6.SHORT;else if(A.array.constructor===Uint16Array)U=M6.UNSIGNED_SHORT;else if(A.array.constructor===Int8Array)U=M6.BYTE;else if(A.array.constructor===Uint8Array)U=M6.UNSIGNED_BYTE;else throw Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+A.array.constructor.name);if(H===void 0)H=0;if(E===void 0||E===1/0)E=A.count;if(E===0)return null;let Z=_k(A,H,E),R;if(J!==void 0)R=A===J.index?M6.ELEMENT_ARRAY_BUFFER:M6.ARRAY_BUFFER;let Y=this.processBufferView(A,U,H,E,R),P={bufferView:Y.id,byteOffset:Y.byteOffset,componentType:U,count:E,max:Z.max,min:Z.min,type:V[A.itemSize]};if(A.normalized===!0)P.normalized=!0;if(!X.accessors)X.accessors=[];return X.accessors.push(P)-1}processImage(A,J,H,E="image/png"){if(A!==null){let X=this,V=X.cache,U=X.json,Z=X.options,R=X.pending;if(!V.images.has(A))V.images.set(A,{});let Y=V.images.get(A),P=E+":flipY/"+H.toString();if(Y[P]!==void 0)return Y[P];if(!U.images)U.images=[];let N={mimeType:E},I=oz();I.width=Math.min(A.width,Z.maxTextureSize),I.height=Math.min(A.height,Z.maxTextureSize);let z=I.getContext("2d",{willReadFrequently:!0});if(H===!0)z.translate(0,I.height),z.scale(1,-1);if(A.data!==void 0){if(J!==b8)console.error("GLTFExporter: Only RGBAFormat is supported.",J);if(A.width>Z.maxTextureSize||A.height>Z.maxTextureSize)console.warn("GLTFExporter: Image size is bigger than maxTextureSize",A);let G=new Uint8ClampedArray(A.height*A.width*4);for(let F=0;F<G.length;F+=4)G[F+0]=A.data[F+0],G[F+1]=A.data[F+1],G[F+2]=A.data[F+2],G[F+3]=A.data[F+3];z.putImageData(new ImageData(G,A.width,A.height),0,0)}else if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&A instanceof OffscreenCanvas)z.drawImage(A,0,0,I.width,I.height);else throw Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");if(Z.binary===!0)R.push(rz(I,E).then((G)=>X.processBufferViewImage(G)).then((G)=>{N.bufferView=G}));else if(I.toDataURL!==void 0)N.uri=I.toDataURL(E);else R.push(rz(I,E).then((G)=>new FileReader().readAsDataURL(G)).then((G)=>{N.uri=G}));let B=U.images.push(N)-1;return Y[P]=B,B}else throw Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(A){let J=this.json;if(!J.samplers)J.samplers=[];let H={magFilter:S8[A.magFilter],minFilter:S8[A.minFilter],wrapS:S8[A.wrapS],wrapT:S8[A.wrapT]};return J.samplers.push(H)-1}async processTextureAsync(A){let H=this.options,E=this.cache,X=this.json;if(E.textures.has(A))return E.textures.get(A);if(!X.textures)X.textures=[];if(A instanceof TE)A=await this.decompressTextureAsync(A,H.maxTextureSize);let V=A.userData.mimeType;if(V==="image/webp")V="image/png";let U={sampler:this.processSampler(A),source:this.processImage(A.image,A.format,A.flipY,V)};if(A.name)U.name=A.name;await this._invokeAllAsync(async function(R){R.writeTexture&&await R.writeTexture(A,U)});let Z=X.textures.push(U)-1;return E.textures.set(A,Z),Z}async processMaterialAsync(A){let J=this.cache,H=this.json;if(J.materials.has(A))return J.materials.get(A);if(A.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;if(!H.materials)H.materials=[];let E={pbrMetallicRoughness:{}};if(A.isMeshStandardMaterial!==!0&&A.isMeshBasicMaterial!==!0)console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let X=A.color.toArray().concat([A.opacity]);if(!N9(X,[1,1,1,1]))E.pbrMetallicRoughness.baseColorFactor=X;if(A.isMeshStandardMaterial)E.pbrMetallicRoughness.metallicFactor=A.metalness,E.pbrMetallicRoughness.roughnessFactor=A.roughness;else E.pbrMetallicRoughness.metallicFactor=0,E.pbrMetallicRoughness.roughnessFactor=1;if(A.metalnessMap||A.roughnessMap){let U=await this.buildMetalRoughTextureAsync(A.metalnessMap,A.roughnessMap),Z={index:await this.processTextureAsync(U),texCoord:U.channel};this.applyTextureTransform(Z,U),E.pbrMetallicRoughness.metallicRoughnessTexture=Z}if(A.map){let U={index:await this.processTextureAsync(A.map),texCoord:A.map.channel};this.applyTextureTransform(U,A.map),E.pbrMetallicRoughness.baseColorTexture=U}if(A.emissive){let U=A.emissive;if(Math.max(U.r,U.g,U.b)>0)E.emissiveFactor=A.emissive.toArray();if(A.emissiveMap){let R={index:await this.processTextureAsync(A.emissiveMap),texCoord:A.emissiveMap.channel};this.applyTextureTransform(R,A.emissiveMap),E.emissiveTexture=R}}if(A.normalMap){let U={index:await this.processTextureAsync(A.normalMap),texCoord:A.normalMap.channel};if(A.normalScale&&A.normalScale.x!==1)U.scale=A.normalScale.x;this.applyTextureTransform(U,A.normalMap),E.normalTexture=U}if(A.aoMap){let U={index:await this.processTextureAsync(A.aoMap),texCoord:A.aoMap.channel};if(A.aoMapIntensity!==1)U.strength=A.aoMapIntensity;this.applyTextureTransform(U,A.aoMap),E.occlusionTexture=U}if(A.transparent)E.alphaMode="BLEND";else if(A.alphaTest>0)E.alphaMode="MASK",E.alphaCutoff=A.alphaTest;if(A.side===_6)E.doubleSided=!0;if(A.name!=="")E.name=A.name;this.serializeUserData(A,E),await this._invokeAllAsync(async function(U){U.writeMaterialAsync&&await U.writeMaterialAsync(A,E)});let V=H.materials.push(E)-1;return J.materials.set(A,V),V}async processMeshAsync(A){let J=this.cache,H=this.json,E=[A.geometry.uuid];if(Array.isArray(A.material))for(let Q=0,D=A.material.length;Q<D;Q++)E.push(A.material[Q].uuid);else E.push(A.material.uuid);let X=E.join(":");if(J.meshes.has(X))return J.meshes.get(X);let V=A.geometry,U;if(A.isLineSegments)U=M6.LINES;else if(A.isLineLoop)U=M6.LINE_LOOP;else if(A.isLine)U=M6.LINE_STRIP;else if(A.isPoints)U=M6.POINTS;else U=A.material.wireframe?M6.LINES:M6.TRIANGLES;let Z={},R={},Y=[],P=[],N={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},I=V.getAttribute("normal");if(I!==void 0&&!this.isNormalizedNormalAttribute(I))console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),V.setAttribute("normal",this.createNormalizedNormalAttribute(I));let z=null;for(let Q in V.attributes){if(Q.slice(0,5)==="morph")continue;let D=V.attributes[Q];if(Q=N[Q]||Q.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(Q))Q="_"+Q;if(J.attributes.has(this.getUID(D))){R[Q]=J.attributes.get(this.getUID(D));continue}z=null;let S=D.array;if(Q==="JOINTS_0"&&!(S instanceof Uint16Array)&&!(S instanceof Uint8Array))console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),z=new IJ(new Uint16Array(S),D.itemSize,D.normalized);else if((S instanceof Uint32Array||S instanceof Int32Array)&&!Q.startsWith("_"))console.warn(`GLTFExporter: Attribute "${Q}" converted to type FLOAT.`),z=hE.Utils.toFloat32BufferAttribute(D);let L=this.processAccessor(z||D,V);if(L!==null){if(!Q.startsWith("_"))this.detectMeshQuantization(Q,D);R[Q]=L,J.attributes.set(this.getUID(D),L)}}if(I!==void 0)V.setAttribute("normal",I);if(Object.keys(R).length===0)return null;if(A.morphTargetInfluences!==void 0&&A.morphTargetInfluences.length>0){let Q=[],D=[],f={};if(A.morphTargetDictionary!==void 0)for(let S in A.morphTargetDictionary)f[A.morphTargetDictionary[S]]=S;for(let S=0;S<A.morphTargetInfluences.length;++S){let L={},u=!1;for(let k in V.morphAttributes){if(k!=="position"&&k!=="normal"){if(!u)console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),u=!0;continue}let O=V.morphAttributes[k][S],j=k.toUpperCase(),x=V.attributes[k];if(J.attributes.has(this.getUID(O,!0))){L[j]=J.attributes.get(this.getUID(O,!0));continue}let c=O.clone();if(!V.morphTargetsRelative)for(let i=0,AA=O.count;i<AA;i++)for(let t=0;t<O.itemSize;t++){if(t===0)c.setX(i,O.getX(i)-x.getX(i));if(t===1)c.setY(i,O.getY(i)-x.getY(i));if(t===2)c.setZ(i,O.getZ(i)-x.getZ(i));if(t===3)c.setW(i,O.getW(i)-x.getW(i))}L[j]=this.processAccessor(c,V),J.attributes.set(this.getUID(x,!0),L[j])}if(P.push(L),Q.push(A.morphTargetInfluences[S]),A.morphTargetDictionary!==void 0)D.push(f[S])}if(Z.weights=Q,D.length>0)Z.extras={},Z.extras.targetNames=D}let B=Array.isArray(A.material);if(B&&V.groups.length===0)return null;let G=!1;if(B&&V.index===null){let Q=[];for(let D=0,f=V.attributes.position.count;D<f;D++)Q[D]=D;V.setIndex(Q),G=!0}let F=B?A.material:[A.material],q=B?V.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let Q=0,D=q.length;Q<D;Q++){let f={mode:U,attributes:R};if(this.serializeUserData(V,f),P.length>0)f.targets=P;if(V.index!==null){let L=this.getUID(V.index);if(q[Q].start!==void 0||q[Q].count!==void 0)L+=":"+q[Q].start+":"+q[Q].count;if(J.attributes.has(L))f.indices=J.attributes.get(L);else f.indices=this.processAccessor(V.index,V,q[Q].start,q[Q].count),J.attributes.set(L,f.indices);if(f.indices===null)delete f.indices}let S=await this.processMaterialAsync(F[q[Q].materialIndex]);if(S!==null)f.material=S;Y.push(f)}if(G===!0)V.setIndex(null);if(Z.primitives=Y,!H.meshes)H.meshes=[];await this._invokeAllAsync(function(Q){Q.writeMesh&&Q.writeMesh(A,Z)});let C=H.meshes.push(Z)-1;return J.meshes.set(X,C),C}detectMeshQuantization(A,J){if(this.extensionsUsed[pP])return;let H=void 0;switch(J.array.constructor){case Int8Array:H="byte";break;case Uint8Array:H="unsigned byte";break;case Int16Array:H="short";break;case Uint16Array:H="unsigned short";break;default:return}if(J.normalized)H+=" normalized";let E=A.split("_",1)[0];if(nz[E]&&nz[E].includes(H))this.extensionsUsed[pP]=!0,this.extensionsRequired[pP]=!0}processCamera(A){let J=this.json;if(!J.cameras)J.cameras=[];let H=A.isOrthographicCamera,E={type:H?"orthographic":"perspective"};if(H)E.orthographic={xmag:A.right*2,ymag:A.top*2,zfar:A.far<=0?0.001:A.far,znear:A.near<0?0:A.near};else E.perspective={aspectRatio:A.aspect,yfov:Y0.degToRad(A.fov),zfar:A.far<=0?0.001:A.far,znear:A.near<0?0:A.near};if(A.name!=="")E.name=A.type;return J.cameras.push(E)-1}processAnimation(A,J){let H=this.json,E=this.nodeMap;if(!H.animations)H.animations=[];A=hE.Utils.mergeMorphTargetTracks(A.clone(),J);let X=A.tracks,V=[],U=[];for(let Z=0;Z<X.length;++Z){let R=X[Z],Y=T6.parseTrackName(R.name),P=T6.findNode(J,Y.nodeName),N=cz[Y.propertyName];if(Y.objectName==="bones")if(P.isSkinnedMesh===!0)P=P.skeleton.getBoneByName(Y.objectIndex);else P=void 0;if(!P||!N){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',R.name);continue}let I=1,z=R.values.length/R.times.length;if(N===cz.morphTargetInfluences)z/=P.morphTargetInfluences.length;let B;if(R.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0)B="CUBICSPLINE",z/=3;else if(R.getInterpolation()===a7)B="STEP";else B="LINEAR";U.push({input:this.processAccessor(new IJ(R.times,I)),output:this.processAccessor(new IJ(R.values,z)),interpolation:B}),V.push({sampler:U.length-1,target:{node:E.get(P),path:N}})}return H.animations.push({name:A.name||"clip_"+H.animations.length,samplers:U,channels:V}),H.animations.length-1}processSkin(A){let J=this.json,H=this.nodeMap,E=J.nodes[H.get(A)],X=A.skeleton;if(X===void 0)return null;let V=A.skeleton.bones[0];if(V===void 0)return null;let U=[],Z=new Float32Array(X.bones.length*16),R=new x6;for(let P=0;P<X.bones.length;++P)U.push(H.get(X.bones[P])),R.copy(X.boneInverses[P]),R.multiply(A.bindMatrix).toArray(Z,P*16);if(J.skins===void 0)J.skins=[];return J.skins.push({inverseBindMatrices:this.processAccessor(new IJ(Z,16)),joints:U,skeleton:H.get(V)}),E.skin=J.skins.length-1}async processNodeAsync(A){let J=this.json,H=this.options,E=this.nodeMap;if(!J.nodes)J.nodes=[];let X={};if(H.trs){let U=A.quaternion.toArray(),Z=A.position.toArray(),R=A.scale.toArray();if(!N9(U,[0,0,0,1]))X.rotation=U;if(!N9(Z,[0,0,0]))X.translation=Z;if(!N9(R,[1,1,1]))X.scale=R}else{if(A.matrixAutoUpdate)A.updateMatrix();if($k(A.matrix)===!1)X.matrix=A.matrix.elements}if(A.name!=="")X.name=String(A.name);if(this.serializeUserData(A,X),A.isMesh||A.isLine||A.isPoints){let U=await this.processMeshAsync(A);if(U!==null)X.mesh=U}else if(A.isCamera)X.camera=this.processCamera(A);if(A.isSkinnedMesh)this.skins.push(A);if(A.children.length>0){let U=[];for(let Z=0,R=A.children.length;Z<R;Z++){let Y=A.children[Z];if(Y.visible||H.onlyVisible===!1){let P=await this.processNodeAsync(Y);if(P!==null)U.push(P)}}if(U.length>0)X.children=U}await this._invokeAllAsync(function(U){U.writeNode&&U.writeNode(A,X)});let V=J.nodes.push(X)-1;return E.set(A,V),V}async processSceneAsync(A){let J=this.json,H=this.options;if(!J.scenes)J.scenes=[],J.scene=0;let E={};if(A.name!=="")E.name=A.name;J.scenes.push(E);let X=[];for(let V=0,U=A.children.length;V<U;V++){let Z=A.children[V];if(Z.visible||H.onlyVisible===!1){let R=await this.processNodeAsync(Z);if(R!==null)X.push(R)}}if(X.length>0)E.nodes=X;this.serializeUserData(A,E)}async processObjectsAsync(A){let J=new z0;J.name="AuxScene";for(let H=0;H<A.length;H++)J.children.push(A[H]);await this.processSceneAsync(J)}async processInputAsync(A){let J=this.options;A=A instanceof Array?A:[A],await this._invokeAllAsync(function(E){E.beforeParse&&E.beforeParse(A)});let H=[];for(let E=0;E<A.length;E++)if(A[E]instanceof z0)await this.processSceneAsync(A[E]);else H.push(A[E]);if(H.length>0)await this.processObjectsAsync(H);for(let E=0;E<this.skins.length;++E)this.processSkin(this.skins[E]);for(let E=0;E<J.animations.length;++E)this.processAnimation(J.animations[E],A[0]);await this._invokeAllAsync(function(E){E.afterParse&&E.afterParse(A)})}async _invokeAllAsync(A){for(let J=0,H=this.plugins.length;J<H;J++)await A(this.plugins[J])}}class ez{constructor(A){this.writer=A,this.name="KHR_lights_punctual"}writeNode(A,J){if(!A.isLight)return;if(!A.isDirectionalLight&&!A.isPointLight&&!A.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",A);return}let H=this.writer,E=H.json,X=H.extensionsUsed,V={};if(A.name)V.name=A.name;if(V.color=A.color.toArray(),V.intensity=A.intensity,A.isDirectionalLight)V.type="directional";else if(A.isPointLight){if(V.type="point",A.distance>0)V.range=A.distance}else if(A.isSpotLight){if(V.type="spot",A.distance>0)V.range=A.distance;V.spot={},V.spot.innerConeAngle=(1-A.penumbra)*A.angle,V.spot.outerConeAngle=A.angle}if(A.decay!==void 0&&A.decay!==2)console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2.");if(A.target&&(A.target.parent!==A||A.target.position.x!==0||A.target.position.y!==0||A.target.position.z!==-1))console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1.");if(!X[this.name])E.extensions=E.extensions||{},E.extensions[this.name]={lights:[]},X[this.name]=!0;let U=E.extensions[this.name].lights;U.push(V),J.extensions=J.extensions||{},J.extensions[this.name]={light:U.length-1}}}class $z{constructor(A){this.writer=A,this.name="KHR_materials_unlit"}async writeMaterialAsync(A,J){if(!A.isMeshBasicMaterial)return;let E=this.writer.extensionsUsed;J.extensions=J.extensions||{},J.extensions[this.name]={},E[this.name]=!0,J.pbrMetallicRoughness.metallicFactor=0,J.pbrMetallicRoughness.roughnessFactor=0.9}}class _z{constructor(A){this.writer=A,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.clearcoat===0)return;let H=this.writer,E=H.extensionsUsed,X={};if(X.clearcoatFactor=A.clearcoat,A.clearcoatMap){let V={index:await H.processTextureAsync(A.clearcoatMap),texCoord:A.clearcoatMap.channel};H.applyTextureTransform(V,A.clearcoatMap),X.clearcoatTexture=V}if(X.clearcoatRoughnessFactor=A.clearcoatRoughness,A.clearcoatRoughnessMap){let V={index:await H.processTextureAsync(A.clearcoatRoughnessMap),texCoord:A.clearcoatRoughnessMap.channel};H.applyTextureTransform(V,A.clearcoatRoughnessMap),X.clearcoatRoughnessTexture=V}if(A.clearcoatNormalMap){let V={index:await H.processTextureAsync(A.clearcoatNormalMap),texCoord:A.clearcoatNormalMap.channel};if(A.clearcoatNormalScale.x!==1)V.scale=A.clearcoatNormalScale.x;H.applyTextureTransform(V,A.clearcoatNormalMap),X.clearcoatNormalTexture=V}J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class AQ{constructor(A){this.writer=A,this.name="KHR_materials_dispersion"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.dispersion===0)return;let E=this.writer.extensionsUsed,X={};X.dispersion=A.dispersion,J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class JQ{constructor(A){this.writer=A,this.name="KHR_materials_iridescence"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.iridescence===0)return;let H=this.writer,E=H.extensionsUsed,X={};if(X.iridescenceFactor=A.iridescence,A.iridescenceMap){let V={index:await H.processTextureAsync(A.iridescenceMap),texCoord:A.iridescenceMap.channel};H.applyTextureTransform(V,A.iridescenceMap),X.iridescenceTexture=V}if(X.iridescenceIor=A.iridescenceIOR,X.iridescenceThicknessMinimum=A.iridescenceThicknessRange[0],X.iridescenceThicknessMaximum=A.iridescenceThicknessRange[1],A.iridescenceThicknessMap){let V={index:await H.processTextureAsync(A.iridescenceThicknessMap),texCoord:A.iridescenceThicknessMap.channel};H.applyTextureTransform(V,A.iridescenceThicknessMap),X.iridescenceThicknessTexture=V}J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class HQ{constructor(A){this.writer=A,this.name="KHR_materials_transmission"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.transmission===0)return;let H=this.writer,E=H.extensionsUsed,X={};if(X.transmissionFactor=A.transmission,A.transmissionMap){let V={index:await H.processTextureAsync(A.transmissionMap),texCoord:A.transmissionMap.channel};H.applyTextureTransform(V,A.transmissionMap),X.transmissionTexture=V}J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class EQ{constructor(A){this.writer=A,this.name="KHR_materials_volume"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.transmission===0)return;let H=this.writer,E=H.extensionsUsed,X={};if(X.thicknessFactor=A.thickness,A.thicknessMap){let V={index:await H.processTextureAsync(A.thicknessMap),texCoord:A.thicknessMap.channel};H.applyTextureTransform(V,A.thicknessMap),X.thicknessTexture=V}if(A.attenuationDistance!==1/0)X.attenuationDistance=A.attenuationDistance;X.attenuationColor=A.attenuationColor.toArray(),J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class XQ{constructor(A){this.writer=A,this.name="KHR_materials_ior"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.ior===1.5)return;let E=this.writer.extensionsUsed,X={};X.ior=A.ior,J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class VQ{constructor(A){this.writer=A,this.name="KHR_materials_specular"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.specularIntensity===1&&A.specularColor.equals(sk)&&!A.specularIntensityMap&&!A.specularColorMap)return;let H=this.writer,E=H.extensionsUsed,X={};if(A.specularIntensityMap){let V={index:await H.processTextureAsync(A.specularIntensityMap),texCoord:A.specularIntensityMap.channel};H.applyTextureTransform(V,A.specularIntensityMap),X.specularTexture=V}if(A.specularColorMap){let V={index:await H.processTextureAsync(A.specularColorMap),texCoord:A.specularColorMap.channel};H.applyTextureTransform(V,A.specularColorMap),X.specularColorTexture=V}X.specularFactor=A.specularIntensity,X.specularColorFactor=A.specularColor.toArray(),J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class UQ{constructor(A){this.writer=A,this.name="KHR_materials_sheen"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.sheen==0)return;let H=this.writer,E=H.extensionsUsed,X={};if(A.sheenRoughnessMap){let V={index:await H.processTextureAsync(A.sheenRoughnessMap),texCoord:A.sheenRoughnessMap.channel};H.applyTextureTransform(V,A.sheenRoughnessMap),X.sheenRoughnessTexture=V}if(A.sheenColorMap){let V={index:await H.processTextureAsync(A.sheenColorMap),texCoord:A.sheenColorMap.channel};H.applyTextureTransform(V,A.sheenColorMap),X.sheenColorTexture=V}X.sheenRoughnessFactor=A.sheenRoughness,X.sheenColorFactor=A.sheenColor.toArray(),J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class ZQ{constructor(A){this.writer=A,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(A,J){if(!A.isMeshPhysicalMaterial||A.anisotropy==0)return;let H=this.writer,E=H.extensionsUsed,X={};if(A.anisotropyMap){let V={index:await H.processTextureAsync(A.anisotropyMap)};H.applyTextureTransform(V,A.anisotropyMap),X.anisotropyTexture=V}X.anisotropyStrength=A.anisotropy,X.anisotropyRotation=A.anisotropyRotation,J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class RQ{constructor(A){this.writer=A,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(A,J){if(!A.isMeshStandardMaterial||A.emissiveIntensity===1)return;let E=this.writer.extensionsUsed,X={};X.emissiveStrength=A.emissiveIntensity,J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class YQ{constructor(A){this.writer=A,this.name="EXT_materials_bump"}async writeMaterialAsync(A,J){if(!A.isMeshStandardMaterial||A.bumpScale===1&&!A.bumpMap)return;let H=this.writer,E=H.extensionsUsed,X={};if(A.bumpMap){let V={index:await H.processTextureAsync(A.bumpMap),texCoord:A.bumpMap.channel};H.applyTextureTransform(V,A.bumpMap),X.bumpTexture=V}X.bumpFactor=A.bumpScale,J.extensions=J.extensions||{},J.extensions[this.name]=X,E[this.name]=!0}}class PQ{constructor(A){this.writer=A,this.name="EXT_mesh_gpu_instancing"}writeNode(A,J){if(!A.isInstancedMesh)return;let H=this.writer,E=A,X=new Float32Array(E.count*3),V=new Float32Array(E.count*4),U=new Float32Array(E.count*3),Z=new x6,R=new g,Y=new D8,P=new g;for(let I=0;I<E.count;I++)E.getMatrixAt(I,Z),Z.decompose(R,Y,P),R.toArray(X,I*3),Y.toArray(V,I*4),P.toArray(U,I*3);let N={TRANSLATION:H.processAccessor(new IJ(X,3)),ROTATION:H.processAccessor(new IJ(V,4)),SCALE:H.processAccessor(new IJ(U,3))};if(E.instanceColor)N._COLOR_0=H.processAccessor(E.instanceColor);J.extensions=J.extensions||{},J.extensions[this.name]={attributes:N},H.extensionsUsed[this.name]=!0,H.extensionsRequired[this.name]=!0}}hE.Utils={insertKeyframe:function(A,J){let E=A.getValueSize(),X=new A.TimeBufferType(A.times.length+1),V=new A.ValueBufferType(A.values.length+E),U=A.createInterpolant(new A.ValueBufferType(E)),Z;if(A.times.length===0){X[0]=J;for(let R=0;R<E;R++)V[R]=0;Z=0}else if(J<A.times[0]){if(Math.abs(A.times[0]-J)<0.001)return 0;X[0]=J,X.set(A.times,1),V.set(U.evaluate(J),0),V.set(A.values,E),Z=0}else if(J>A.times[A.times.length-1]){if(Math.abs(A.times[A.times.length-1]-J)<0.001)return A.times.length-1;X[X.length-1]=J,X.set(A.times,0),V.set(A.values,0),V.set(U.evaluate(J),A.values.length),Z=X.length-1}else for(let R=0;R<A.times.length;R++){if(Math.abs(A.times[R]-J)<0.001)return R;if(A.times[R]<J&&A.times[R+1]>J){X.set(A.times.slice(0,R+1),0),X[R+1]=J,X.set(A.times.slice(R+1),R+2),V.set(A.values.slice(0,(R+1)*E),0),V.set(U.evaluate(J),(R+1)*E),V.set(A.values.slice((R+1)*E),(R+2)*E),Z=R+1;break}}return A.times=X,A.values=V,Z},mergeMorphTargetTracks:function(A,J){let H=[],E={},X=A.tracks;for(let V=0;V<X.length;++V){let U=X[V],Z=T6.parseTrackName(U.name),R=T6.findNode(J,Z.nodeName);if(Z.propertyName!=="morphTargetInfluences"||Z.propertyIndex===void 0){H.push(U);continue}if(U.createInterpolant!==U.InterpolantFactoryMethodDiscrete&&U.createInterpolant!==U.InterpolantFactoryMethodLinear){if(U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),U=U.clone(),U.setInterpolation(e7)}let Y=R.morphTargetInfluences.length,P=R.morphTargetDictionary[Z.propertyIndex];if(P===void 0)throw Error("THREE.GLTFExporter: Morph target name not found: "+Z.propertyIndex);let N;if(E[R.uuid]===void 0){N=U.clone();let z=new N.ValueBufferType(Y*N.times.length);for(let B=0;B<N.times.length;B++)z[B*Y+P]=N.values[B];N.name=(Z.nodeName||"")+".morphTargetInfluences",N.values=z,E[R.uuid]=N,H.push(N);continue}let I=U.createInterpolant(new U.ValueBufferType(1));N=E[R.uuid];for(let z=0;z<N.times.length;z++)N.values[z*Y+P]=I.evaluate(N.times[z]);for(let z=0;z<U.times.length;z++){let B=this.insertKeyframe(N,U.times[z]);N.values[B*Y+P]=U.values[z]}}return A.tracks=H,A},toFloat32BufferAttribute:function(A){let J=new IJ(new Float32Array(A.count*A.itemSize),A.itemSize,!1);if(!A.normalized&&!A.isInterleavedBufferAttribute)return J.array.set(A.array),J;for(let H=0,E=A.count;H<E;H++)for(let X=0;X<A.itemSize;X++)J.setComponent(H,X,A.getComponent(H,X));return J}};var zZ=DH(x1(),1);var NQ=(A)=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),IZ=(...A)=>A.filter((J,H,E)=>{return Boolean(J)&&J.trim()!==""&&E.indexOf(J)===H}).join(" ").trim();var q9=DH(x1(),1);var qQ={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var IQ=q9.forwardRef(({color:A="currentColor",size:J=24,strokeWidth:H=2,absoluteStrokeWidth:E,className:X="",children:V,iconNode:U,...Z},R)=>{return q9.createElement("svg",{ref:R,...qQ,width:J,height:J,stroke:A,strokeWidth:E?Number(H)*24/Number(J):H,className:IZ("lucide",X),...Z},[...U.map(([Y,P])=>q9.createElement(Y,P)),...Array.isArray(V)?V:[V]])});var U6=(A,J)=>{let H=zZ.forwardRef(({className:E,...X},V)=>zZ.createElement(IQ,{ref:V,iconNode:J,className:IZ(`lucide-${NQ(A)}`,E),...X}));return H.displayName=`${A}`,H};var lE=U6("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);var O0=U6("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);var pE=U6("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);var M0=U6("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);var I9=U6("Combine",[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1",key:"ru65g8"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"e30een"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"2ahx8o"}],["path",{d:"m7 21 3-3-3-3",key:"127cv2"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}]]);var z9=U6("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var Q9=U6("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);var F9=U6("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);var C9=U6("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);var B9=U6("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);var z8=U6("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);var oH=U6("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);var x8=U6("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);var G9=U6("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);var W9=U6("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);var f1=U6("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);var gE=U6("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var O9=U6("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);var j1=U6("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);var M9=U6("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var bE=U6("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var k9=U6("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);var D9=U6("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var S9="/textures/tex-00.webp";var zQ="/textures/tex-01.webp";var bP="/textures/tex-02.webp";var QQ="/textures/tex-03.webp";var FQ="/textures/tex-04.webp";var QZ="/textures/tex-05.webp";var FZ="/textures/tex-06.webp";var xP="/textures/tex-07.webp";var CQ="/textures/tex-08.webp";var BQ="/textures/tex-09.webp";var GQ="/textures/tex-10.webp";var L9="/textures/tex-11.webp";var WQ="/textures/tex-12.webp";var OQ="/textures/tex-13.webp";var MQ="/textures/tex-14.webp";var kQ="/textures/tex-15.webp";var K9="/textures/tex-16.webp";var DQ=DH(x1(),1),AD=Symbol.for("react.element");var JD=Object.prototype.hasOwnProperty,HD=DQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ED={key:!0,ref:!0,__self:!0,__source:!0};function SQ(A,J,H){var E,X={},V=null,U=null;H!==void 0&&(V=""+H),J.key!==void 0&&(V=""+J.key),J.ref!==void 0&&(U=J.ref);for(E in J)JD.call(J,E)&&!ED.hasOwnProperty(E)&&(X[E]=J[E]);if(A&&A.defaultProps)for(E in J=A.defaultProps,J)X[E]===void 0&&(X[E]=J[E]);return{$$typeof:AD,type:A,key:V,ref:U,props:X,_owner:HD.current}}var RA=SQ,DA=SQ;var CA=62,T9=0.2,LQ=1,XD=2.15,w9=0.25,KQ=22,N6=0.2;var VD=[{id:"straight",name:"Rechte Trap",desc:"12 tred",icon:O0,color:"bg-zinc-800"},{id:"lshape",name:"L-Trap",desc:"Kwart draai",icon:O9,color:"bg-amber-900/40"},{id:"ushape",name:"U-Trap",desc:"180° bordes",icon:I9,color:"bg-orange-900/30"},{id:"spiral",name:"Wenteltrap",desc:"Spiraal 14 tred",icon:j1,color:"bg-violet-900/30"},{id:"floating",name:"Zwevend",desc:"Wand geen stringer",icon:D9,color:"bg-stone-800"},{id:"industrial",name:"Industrieel",desc:"Mono-stringer",icon:pE,color:"bg-neutral-900"},{id:"glass",name:"Glazen",desc:"Glas + RVS",icon:x8,color:"bg-cyan-900/20"},{id:"woodopen",name:"Hout Open",desc:"Eiken open",icon:oH,color:"bg-amber-800/30"},{id:"concrete",name:"Beton",desc:"Monoliet",icon:M9,color:"bg-zinc-700"},{id:"double",name:"Dubbel",desc:"Breed luxe",icon:M0,color:"bg-yellow-900/20"}],WD=[{id:"standard",l:"1 ruit"},{id:"grid2x2",l:"2×2"},{id:"grid3x2",l:"3×2"},{id:"triple",l:"3 ruiten"},{id:"sliding",l:"Schuif"},{id:"narrow",l:"Smal"}],DD=[{id:"solid",l:"Paneel"},{id:"double",l:"Dubbel"},{id:"french",l:"Frans"},{id:"glassTop",l:"Glas boven"},{id:"slidingGlass",l:"Schuifglas"}],TQ=[{id:"light_oak",name:"Light Oak",src:S9,category:"Hout",side:"inner"},{id:"red_brick",name:"Red Brick",src:zQ,category:"Baksteen",side:"outer"},{id:"white_stucco",name:"White Stucco",src:bP,category:"Stuc",side:"both"},{id:"botanical_wallpaper",name:"Botanical",src:QQ,category:"Behang",side:"inner"},{id:"geometric_wallpaper",name:"Geometric",src:FQ,category:"Behang",side:"inner"},{id:"herringbone_oak",name:"Herringbone",src:QZ,category:"Hout",side:"floor"},{id:"beige_linen",name:"Beige Linen",src:xP,category:"Stof",side:"inner"},{id:"sage_dots",name:"Sage Dots",src:CQ,category:"Behang",side:"inner"},{id:"terracotta_plaster",name:"Terracotta",src:BQ,category:"Stuc",side:"inner"},{id:"fluted_oak",name:"Fluted Oak",src:GQ,category:"Hout",side:"inner"},{id:"warm_greige",name:"Greige Concrete",src:L9,category:"Beton",side:"both"},{id:"polished_concrete",name:"Polished Con",src:K9,category:"Beton",side:"both"}],CZ=[{id:"terrazzo",name:"Terrazzo",src:FZ,category:"Tegels",side:"floor"},{id:"polished_concrete",name:"Polished",src:K9,category:"Beton",side:"floor"},{id:"light_oak",name:"Light Oak",src:S9,category:"Hout",side:"floor"},{id:"herringbone_oak",name:"Herringbone",src:QZ,category:"Hout",side:"floor"},{id:"warm_greige",name:"Greige",src:L9,category:"Beton",side:"floor"},{id:"beige_linen",name:"Linen Tile",src:xP,category:"Tegels",side:"floor"}],wQ=[{id:"white_stucco",name:"Wit Stuc",src:bP,category:"Stuc",side:"ceiling"},{id:"warm_greige",name:"Greige",src:L9,category:"Beton",side:"ceiling"},{id:"polished_concrete",name:"Polished",src:K9,category:"Beton",side:"ceiling"},{id:"light_oak",name:"Light Oak",src:S9,category:"Hout",side:"ceiling"}],fQ=[{id:"door_light_oak",name:"Licht Eiken",src:WQ,category:"Deur",side:"door"},{id:"door_dark_walnut",name:"Donker Walnoot",src:OQ,category:"Deur",side:"door"},{id:"door_matte_black",name:"Zwart Mat",src:MQ,category:"Deur",side:"door"},{id:"door_frosted",name:"Melkglas",src:kQ,category:"Deur",side:"door"}],UD=[{id:"light_oak",name:"Light Oak",src:S9,category:"Hout",side:"stair"},{id:"polished_concrete",name:"Beton",src:K9,category:"Beton",side:"stair"},{id:"warm_greige",name:"Greige",src:L9,category:"Beton",side:"stair"},{id:"herringbone_oak",name:"Herringbone",src:QZ,category:"Hout",side:"stair"},{id:"terrazzo",name:"Terrazzo",src:FZ,category:"Tegels",side:"stair"}],f9=new Map;[...TQ,...CZ,...wQ,...fQ,...UD].forEach((A)=>{if(!f9.has(A.id))f9.set(A.id,A.src)});function oJ(A){return`${A}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function grpFlr(ch){let g={};if(!ch)return g;for(let k in ch){let c=ch[k];if(!c||!c.hasFloor)continue;let p=k.split("_"),gx=+p[0],gz=+p[1],tex=c.tex||"terrazzo";(g[tex]||(g[tex]=[])).push(gx,gz)}return g}function mkFlr(cells,y,flip,map,color,texScale){let n=cells.length>>1;if(!n)return null;let pos=new Float32Array(n*12),nrm=new Float32Array(n*12),uv=new Float32Array(n*8),idx=n*4>65535?new Uint32Array(n*6):new Uint16Array(n*6),ts=Math.max(0.2,texScale||2),s=N6,ny=flip?-1:1;for(let i=0;i<n;i++){let gx=cells[i*2],gz=cells[i*2+1],x0=gx*s,z0=gz*s,x1=x0+s,z1=z0+s,o=i*4,p=o*3;pos[p]=x0,pos[p+1]=0,pos[p+2]=z0,pos[p+3]=x1,pos[p+4]=0,pos[p+5]=z0,pos[p+6]=x1,pos[p+7]=0,pos[p+8]=z1,pos[p+9]=x0,pos[p+10]=0,pos[p+11]=z1;for(let v=0;v<4;v++)nrm[p+v*3]=0,nrm[p+v*3+1]=ny,nrm[p+v*3+2]=0;let u=o*2;uv[u]=x0/ts,uv[u+1]=z0/ts,uv[u+2]=x1/ts,uv[u+3]=z0/ts,uv[u+4]=x1/ts,uv[u+5]=z1/ts,uv[u+6]=x0/ts,uv[u+7]=z1/ts;let io=i*6;if(flip)idx[io]=o,idx[io+1]=o+3,idx[io+2]=o+2,idx[io+3]=o,idx[io+4]=o+2,idx[io+5]=o+1;else idx[io]=o,idx[io+1]=o+1,idx[io+2]=o+2,idx[io+3]=o,idx[io+4]=o+2,idx[io+5]=o+3}let geo=new sH;geo.setAttribute("position",new IJ(pos,3)),geo.setAttribute("normal",new IJ(nrm,3)),geo.setAttribute("uv",new IJ(uv,2)),geo.setIndex(new IJ(idx,1));if(map)map.wrapS=map.wrapT=q8,map.repeat.set(1,1);let mesh=new aA(geo,new CJ({map:map||null,color:map?16777215:color,roughness:0.82,metalness:0.04,side:_6,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));return mesh.position.y=y,mesh.receiveShadow=!0,mesh}function setBoxUV(geo,w,h,d,su,sv,uOff,vOff){let uv=geo.attributes.uv;if(!uv||uv.count<24)return;su=su||1,sv=sv||1,uOff=uOff||0,vOff=vOff||0;let spec=[{u:d*su,v:h*sv,u0:0,v0:vOff*sv},{u:d*su,v:h*sv,u0:0,v0:vOff*sv},{u:w*su,v:d*sv,u0:uOff*su,v0:0},{u:w*su,v:d*sv,u0:uOff*su,v0:0},{u:w*su,v:h*sv,u0:uOff*su,v0:vOff*sv},{u:w*su,v:h*sv,u0:uOff*su,v0:vOff*sv}];for(let f=0;f<6;f++){let s=spec[f],o=f*4;uv.setXY(o,s.u0,s.v0+s.v),uv.setXY(o+1,s.u0+s.u,s.v0+s.v),uv.setXY(o+2,s.u0,s.v0),uv.setXY(o+3,s.u0+s.u,s.v0)}uv.needsUpdate=!0}function clrGrp(T){if(!T)return;for(let i=T.children.length-1;i>=0;i--){let ch=T.children[i];T.remove(ch),ch.traverse(function(o){if(o.geometry)o.geometry.dispose();let m=o.material;if(!m)return;if(Array.isArray(m))m.forEach(function(x){x&&x.dispose&&x.dispose()});else m.dispose&&m.dispose()})}}function mP(){let[A,J]=mA.useState(()=>{return[{id:"floor_0",name:"Begane grond",height:2.7,walls:[],windows:[],doors:[],stairs:[],floorTextureId:"terrazzo",ceilingTextureId:"white_stucco",floorChunks:{}}]}),[H,E]=mA.useState("floor_0"),X=A.find((K)=>K.id===H)||A[0],V=(()=>{let K=0;return A.map((T)=>{let p=K;return K+=T.height+w9,{...T,elevation:p}})})(),U=V.find((K)=>K.id===H),[Z,R]=mA.useState("select"),[Y,P]=mA.useState("standard"),[N,I]=mA.useState("solid"),[z,B]=mA.useState("botanical_wallpaper"),[G,F]=mA.useState("red_brick"),[q,C]=mA.useState("door_light_oak"),[Q,D]=mA.useState("light_oak"),[f,S]=mA.useState("straight"),[L,u]=mA.useState("terrazzo"),[k,O]=mA.useState(2),[j,x]=mA.useState(0.2),[c,i]=mA.useState("vloer"),[AA,t]=mA.useState("wall"),[XA,s]=mA.useState([]),[jA,hA]=mA.useState(!0),[$A,W6]=mA.useState(!0),[$,QA]=mA.useState(""),[rA,eA]=mA.useState("outer"),[kA,A6]=mA.useState(1),[j6,k6]=mA.useState(1),[O6,SJ]=mA.useState(0.2),[y,NJ]=mA.useState(null),[S6,K6]=mA.useState(!1),[lA,AJ]=mA.useState(0),nA=mA.useRef(null),iA=mA.useRef(null),w=mA.useRef(null),W=mA.useRef(null),b=mA.useRef(null),JA=mA.useRef(null),HA=mA.useRef(null),e=mA.useRef(new VZ),oA=mA.useRef(new X6),OA=mA.useRef(null),dg=mA.useRef(null),[FA,R6]=mA.useState({x:0,y:0,zoom:1}),[UA,vA]=mA.useState(null),[_A,J6]=mA.useState(null),[bA,q6]=mA.useState(null),[Q6,b6]=mA.useState(!1),[v,IA]=mA.useState(null),[a,_]=mA.useState(null),[SA,yA]=mA.useState(null),[I6,t6]=mA.useState(null),RJ=mA.useRef([]),z6=mA.useCallback(()=>{if(RJ.current.push(JSON.parse(JSON.stringify(A))),RJ.current.length>40)RJ.current.shift()},[A]),m8=()=>{let K=RJ.current.pop();if(K)J(K)},JJ=X?.walls||[],rH=X?.windows||[],Q8=X?.doors||[],d8=X?.stairs||[],BZ=mA.useCallback((K,T,p)=>{let o=iA.current,r=o?.clientWidth||800,ZA=o?.clientHeight||600;return{x:(K/CA+p.x)*p.zoom+r/2,y:(T/CA+p.y)*p.zoom+ZA/2}},[]),GZ=mA.useCallback((K,T,p)=>{let o=iA.current,r=o?.clientWidth||800,ZA=o?.clientHeight||600;return{x:(K+p.x*CA)*p.zoom/CA+r/2,y:(T+p.y*CA)*p.zoom/CA+ZA/2}},[]),UH=(K,T,p)=>{let o=iA.current,r=o?.clientWidth||800,ZA=o?.clientHeight||600;return{x:(K-r/2)/p.zoom-p.x*CA,y:(T-ZA/2)/p.zoom-p.y*CA}},xE=(K,T)=>{let p=CA*N6;for(let o of JJ){if(Math.hypot(K-o.x1,T-o.y1)<12)return{x:o.x1,y:o.y1};if(Math.hypot(K-o.x2,T-o.y2)<12)return{x:o.x2,y:o.y2}}return{x:Math.round(K/p)*p,y:Math.round(T/p)*p}},y1=(K,T,p,o,r,ZA)=>{let VA=(r-p)*(r-p)+(ZA-o)*(ZA-o);if(VA===0)return{dist:Math.hypot(K-p,T-o),t:0,projX:p,projY:o};let YA=((K-p)*(r-p)+(T-o)*(ZA-o))/VA;YA=Math.max(0,Math.min(1,YA));let BA=p+YA*(r-p),uA=o+YA*(ZA-o);return{dist:Math.hypot(K-BA,T-uA),t:YA,projX:BA,projY:uA}},v1=mA.useCallback((K,T,p)=>{let o=null;for(let r of JJ){let ZA=y1(K,T,r.x1,r.y1,r.x2,r.y2);if(ZA.dist<p&&(!o||ZA.dist<o.dist))o={wall:r,dist:ZA.dist,t:ZA.t,projX:ZA.projX,projY:ZA.projY}}return o},[JJ]),ZH=(K,T)=>XA.some((p)=>p.type===K&&p.id===T),nP=(K)=>{return{totalLen:K.type==="spiral"?1.8:K.type==="lshape"||K.type==="ushape"?3:3,numSteps:12}},mE=(K,T)=>`${K}_${T}`,j9=(K,T)=>{let p=Math.floor(K/N6),o=Math.floor(T/N6);return{gx:p,gz:o,key:mE(p,o)}},u1=(K,T)=>{if(!X)return;if(Z!=="floor")return;let p=j9(K,T),o=Math.round(j/N6),r=Math.floor(o/2),ZA=o%2===0?-r+1:-r,VA=r,YA=`${p.gx}_${p.gz}_${j}`;if(OA.current===YA)return;OA.current=YA,J((BA)=>BA.map((uA)=>{if(uA.id!==H)return uA;let fA={...uA.floorChunks||{}};for(let dA=ZA;dA<=VA;dA++)for(let TA=ZA;TA<=VA;TA++){let PA=p.gx+dA,zA=p.gz+TA,n=mE(PA,zA);if(L===null)fA[n]={hasFloor:!1,tex:uA.floorTextureId,texScale:k};else fA[n]={hasFloor:!0,tex:L,texScale:k}}return{...uA,floorChunks:fA}}))},WZ=(K,T)=>{let p=j9(K,T),o=Math.round(j/N6),r=Math.floor(o/2),ZA=o%2===0?-r+1:-r,VA=r,YA=[];for(let BA=ZA;BA<=VA;BA++)for(let uA=ZA;uA<=VA;uA++){let fA=p.gx+BA,dA=p.gz+uA;YA.push({gx:fA,gz:dA,key:mE(fA,dA)})}return YA},M=mA.useCallback(()=>{let K=nA.current;if(!K)return;let T=K.getContext("2d");if(!T)return;let p=iA.current?.getBoundingClientRect();if(p)K.width=p.width*window.devicePixelRatio,K.height=p.height*window.devicePixelRatio,K.style.width=`${p.width}px`,K.style.height=`${p.height}px`,T.setTransform(window.devicePixelRatio,0,0,window.devicePixelRatio,0,0);let o=FA,r=iA.current?.clientWidth||800,ZA=iA.current?.clientHeight||600;T.fillStyle="#0e0e10",T.fillRect(0,0,r,ZA),T.save();let VA=CA*N6*o.zoom,YA=CA*1*o.zoom;T.strokeStyle="rgba(255,255,255,0.06)",T.lineWidth=1;let BA=((o.x*CA*o.zoom+r/2)%VA+VA)%VA,uA=((o.y*CA*o.zoom+ZA/2)%VA+VA)%VA;T.strokeStyle="rgba(255,255,255,0.04)";for(let n=BA;n<r;n+=VA)T.beginPath(),T.moveTo(n,0),T.lineTo(n,ZA),T.stroke();for(let n=uA;n<ZA;n+=VA)T.beginPath(),T.moveTo(0,n),T.lineTo(r,n),T.stroke();T.strokeStyle="rgba(255,255,255,0.08)";let fA=((o.x*CA*o.zoom+r/2)%YA+YA)%YA,dA=((o.y*CA*o.zoom+ZA/2)%YA+YA)%YA;for(let n=fA;n<r;n+=YA)T.beginPath(),T.moveTo(n,0),T.lineTo(n,ZA),T.stroke();for(let n=dA;n<ZA;n+=YA)T.beginPath(),T.moveTo(0,n),T.lineTo(r,n),T.stroke();T.restore();let TA=(n,EA)=>{return{x:(n+o.x*CA)*o.zoom+r/2,y:(EA+o.y*CA)*o.zoom+ZA/2}};if($A){let n=A.findIndex((EA)=>EA.id===H);if(n>0){let EA=A[n-1];T.save(),T.strokeStyle="rgba(180,180,190,0.22)",T.lineWidth=Math.max(1,4*o.zoom),T.setLineDash([8,8]),EA.walls.forEach((WA)=>{let MA=TA(WA.x1,WA.y1),wA=TA(WA.x2,WA.y2);T.beginPath(),T.moveTo(MA.x,MA.y),T.lineTo(wA.x,wA.y),T.stroke()}),T.setLineDash([]),T.restore()}}if(X.floorChunks){let n=o.zoom,EA={terrazzo:"#a8a29e",herringbone_oak:"#c9a86a",light_oak:"#d9c5a0",polished_concrete:"#8a8a8a",white_stucco:"#e8e8e8",beige_linen:"#d6c7b5",warm_greige:"#b8b0a8"};Object.entries(X.floorChunks).forEach(([WA,MA])=>{let[wA,cA]=WA.split("_"),Y6=parseInt(wA),D6=parseInt(cA),y6=Y6*N6,l6=D6*N6,p6=y6*CA,lJ=l6*CA,P6=TA(p6,lJ),tA=N6*CA*n;if(MA.hasFloor){let v6=EA[MA.tex]||"#9ca3af";if(T.fillStyle="rgba(255,255,255,0.06)",T.fillRect(P6.x,P6.y,tA,tA),T.fillStyle=MA.tex===L?"rgba(139,92,246,0.35)":v6+"66",T.fillRect(P6.x+1,P6.y+1,tA-2,tA-2),T.strokeStyle=MA.tex===L?"rgba(139,92,246,0.9)":"rgba(255,255,255,0.18)",T.lineWidth=1,T.strokeRect(P6.x+0.5,P6.y+0.5,tA-1,tA-1),tA>10)T.fillStyle="rgba(255,255,255,0.25)",T.fillRect(P6.x+tA*0.2,P6.y+tA*0.2,tA*0.6,tA*0.15)}else T.fillStyle="rgba(239,68,68,0.22)",T.fillRect(P6.x,P6.y,tA,tA),T.strokeStyle="rgba(239,68,68,0.55)",T.lineWidth=1,T.beginPath(),T.moveTo(P6.x,P6.y),T.lineTo(P6.x+tA,P6.y+tA),T.stroke(),T.beginPath(),T.moveTo(P6.x+tA,P6.y),T.lineTo(P6.x,P6.y+tA),T.stroke()})}if(Z==="floor"&&_A){let n=_A.x/CA,EA=_A.y/CA,WA=Math.floor(n/N6),MA=Math.floor(EA/N6),wA=WA*N6*CA,cA=MA*N6*CA,Y6=TA(wA,cA),D6=N6*CA*o.zoom;T.save(),T.strokeStyle=L?"#8b5cf6":"#ef4444",T.lineWidth=2,T.setLineDash([4,4]),T.strokeRect(Y6.x,Y6.y,D6,D6),T.restore()}let PA=(n)=>{let EA=TA(n.x1,n.y1),WA=TA(n.x2,n.y2),MA=ZH("wall",n.id);if(MA)T.shadowColor="#facc15",T.shadowBlur=16,T.strokeStyle="#facc15",T.lineWidth=Math.max(2,10*o.zoom),T.beginPath(),T.moveTo(EA.x,EA.y),T.lineTo(WA.x,WA.y),T.stroke(),T.shadowBlur=0;T.strokeStyle=MA?"#facc15":"#e8e8ea",T.lineWidth=Math.max(2,8*o.zoom),T.beginPath(),T.moveTo(EA.x,EA.y),T.lineTo(WA.x,WA.y),T.stroke()};JJ.forEach(PA);let zA=(n)=>{let EA=JJ.find((l6)=>l6.id===n.wallId);if(!EA)return;let WA=EA.x2-EA.x1,MA=EA.y2-EA.y1,wA=EA.x1+WA*n.offset,cA=EA.y1+MA*n.offset,Y6=TA(wA,cA),D6=Math.atan2(MA,WA),y6=n.width*CA*o.zoom;if(T.save(),T.translate(Y6.x,Y6.y),T.rotate(D6),n.kind==="window"){let l6=Math.max(8*o.zoom,16);T.strokeStyle=ZH(n.kind,n.id)?"#60a5fa":"#d6d6db",T.lineWidth=2,T.beginPath(),T.rect(-y6/2,-l6/2,y6,l6),T.stroke()}else{let l6=y6,p6=Math.max(6*o.zoom,8);T.fillStyle=ZH(n.kind,n.id)?"#facc15":"#fb923c",T.beginPath(),T.rect(-l6/2,-p6/2,l6,p6),T.fill()}T.restore()};if(rH.forEach(zA),Q8.forEach(zA),d8.forEach((n)=>{let EA=ZH("stair",n.id),WA=TA(n.x,n.y);T.save(),T.translate(WA.x,WA.y),T.rotate(n.rotation*Math.PI/180);let MA=Math.max(4,n.treads||12)*(n.run||0.25)*CA*o.zoom,wA=n.width*CA*o.zoom;T.fillStyle=EA?"rgba(250,204,21,0.25)":"rgba(139,92,246,0.15)",T.strokeStyle=EA?"#facc15":"#8b5cf6",T.lineWidth=1.5,T.beginPath(),T.rect(-MA/2,-wA/2,MA,wA),T.fill(),T.stroke(),T.fillStyle="white",T.font="10px monospace",T.textAlign="center",T.fillText(n.type,0,0),T.restore()}),UA&&_A&&Z==="wall"){let n=TA(UA.x,UA.y),EA=TA(_A.x,_A.y);T.setLineDash([8,6]),T.strokeStyle="#a78bfa",T.lineWidth=3,T.beginPath(),T.moveTo(n.x,n.y),T.lineTo(EA.x,EA.y),T.stroke(),T.setLineDash([])}if(Z==="floor"&&_A){let n=_A.x/CA,EA=_A.y/CA;WZ(n,EA).forEach(({gx:MA,gz:wA})=>{let cA=MA*N6,Y6=wA*N6,D6=TA(cA*CA,Y6*CA),y6=TA((cA+N6)*CA,(Y6+N6)*CA),l6=y6.x-D6.x,p6=y6.y-D6.y;T.save(),T.strokeStyle=L===null?"rgba(248,113,113,0.9)":"rgba(168,85,247,0.9)",T.lineWidth=1.5,T.setLineDash([4,4]),T.strokeRect(D6.x,D6.y,l6,p6),T.fillStyle=L===null?"rgba(248,113,113,0.15)":"rgba(168,85,247,0.15)",T.fillRect(D6.x,D6.y,l6,p6),T.restore()})}},[JJ,rH,Q8,d8,FA,UA,_A,XA,$A,A,H,L,j,Z]);mA.useEffect(()=>{M()},[M]),mA.useEffect(()=>{let K=new ResizeObserver(()=>M());if(iA.current)K.observe(iA.current);return()=>K.disconnect()},[M]),mA.useEffect(()=>{let K=nA.current;if(!K)return;let T=(YA)=>{let BA=K.getBoundingClientRect();return{sx:YA.clientX-BA.left,sy:YA.clientY-BA.top}},p=(YA)=>{let{sx:BA,sy:uA}=T(YA);q6({x:BA,y:uA});let fA=UH(BA,uA,FA);if(dg.current&&(YA.buttons&1)&&Z==="select"){let d=dg.current,snap=CA*N6;if(!d.moved&&Math.hypot(fA.x-d.sx,fA.y-d.sy)<7)return;if(!d.moved)z6(),d.moved=!0;if(d.type==="stair"){let x=Math.round(fA.x/snap)*snap,y=Math.round(fA.y/snap)*snap;J((PA)=>PA.map((zA)=>zA.id===H?{...zA,stairs:zA.stairs.map((n)=>n.id===d.id?{...n,x,y}:n)}:zA))}else if(d.type==="wall"){let dx=Math.round((fA.x-d.sx)/snap)*snap,dy=Math.round((fA.y-d.sy)/snap)*snap;J((PA)=>PA.map((zA)=>zA.id===H?{...zA,walls:zA.walls.map((n)=>n.id===d.id?{...n,x1:d.x1+dx,y1:d.y1+dy,x2:d.x2+dx,y2:d.y2+dy}:n)}:zA))}else if(d.type==="window"||d.type==="door"){let hit=v1(fA.x,fA.y,140);if(hit){let wall=hit.wall,lenM=Math.hypot(wall.x2-wall.x1,wall.y2-wall.y1)/CA,half=(d.width||1)/2+0.05,distM=hit.t*lenM;distM=Math.round(distM/N6)*N6,distM=Math.max(half,Math.min(lenM-half,distM));let off=lenM>0?distM/lenM:0.5;J((PA)=>PA.map((zA)=>{if(zA.id!==H)return zA;if(d.type==="window")return{...zA,windows:zA.windows.map((n)=>n.id===d.id?{...n,wallId:wall.id,offset:off}:n)};return{...zA,doors:zA.doors.map((n)=>n.id===d.id?{...n,wallId:wall.id,offset:off}:n)}}))}}return}if(Q6&&v){let PA=(BA-v.x)/FA.zoom,zA=(uA-v.y)/FA.zoom;R6((n)=>({...n,x:v.vx+PA/CA,y:v.vy+zA/CA}));return}if(a?.active){_((PA)=>PA?{...PA,ex:BA,ey:uA}:PA);return}let dA=fA;if(Z==="wall"){let PA=xE(fA.x,fA.y);dA={x:PA.x,y:PA.y}}if(Z==="stair"){let PA=CA*N6;dA={x:Math.round(fA.x/PA)*PA,y:Math.round(fA.y/PA)*PA}}if(J6(dA),UA){let PA=Math.hypot(dA.x-UA.x,dA.y-UA.y)/CA;QA(`${PA.toFixed(2)}m`)}if((Z==="window"||Z==="door"||SA)&&!Q6){let PA=KQ*2/Math.max(0.2,FA.zoom),zA=v1(fA.x,fA.y,PA);if(zA){let n=zA.wall,WA=Math.hypot(n.x2-n.x1,n.y2-n.y1)/CA,MA=zA.t*WA,wA=MA,cA=!1;if(O6)wA=Math.round(MA/O6)*O6;if(Math.abs(MA-WA/2)<0.15)wA=WA/2,cA=!0;let D6=(SA?SA.width:Z==="window"?1.2:LQ)/2+0.05;wA=Math.max(D6,Math.min(WA-D6,wA));let y6=WA>0?wA/WA:0,l6=n.x1+(n.x2-n.x1)*y6,p6=n.y1+(n.y2-n.y1)*y6;NJ({wallId:n.id,wall:n,lenM:WA,snappedDistM:wA,projX:l6,projY:p6,isCenter:cA,t:y6})}else NJ(null)}if(S6&&Z==="floor"){let PA=(YA.buttons&2)!==0,zA=(YA.buttons&1)!==0&&Z==="floor";if(PA||zA){let n=fA.x/CA,EA=fA.y/CA;u1(n,EA)}}},o=(YA)=>{YA.target.setPointerCapture(YA.pointerId);let{sx:BA,sy:uA}=T(YA);if(YA.button===1||YA.button===0&&YA.altKey){b6(!0),IA({x:BA,y:uA,vx:FA.x,vy:FA.y});return}if(YA.button===2)if(Z==="floor"){YA.preventDefault(),K6(!0),OA.current=null;let TA=UH(BA,uA,FA);u1(TA.x/CA,TA.y/CA);return}else{YA.preventDefault(),b6(!0),IA({x:BA,y:uA,vx:FA.x,vy:FA.y});return}if(Z==="floor"&&YA.button===0){YA.preventDefault(),K6(!0),OA.current=null;let TA=UH(BA,uA,FA);u1(TA.x/CA,TA.y/CA);return}let fA=UH(BA,uA,FA),dA=xE(fA.x,fA.y);if(Z==="wall")if(!UA)vA({x:dA.x,y:dA.y});else{if(Math.hypot(dA.x-UA.x,dA.y-UA.y)>5){z6();let PA={id:oJ("wall"),x1:UA.x,y1:UA.y,x2:dA.x,y2:dA.y,outerTextureId:G,innerTextureId:z,height:X.height};J((zA)=>zA.map((n)=>n.id===H?{...n,walls:[...n.walls,PA]}:n)),s([{type:"wall",id:PA.id}])}vA(null),QA("")}else if(Z==="window"||Z==="door"){let TA=v1(fA.x,fA.y,KQ*1.5);if(y)TA={wall:y.wall,t:y.t,projX:y.projX,projY:y.projY,dist:0};if(TA){z6();let PA=Z,zA=PA==="window",n=zA?Y==="narrow"?0.6:Y==="triple"?1.8:1.2:N==="double"?2.2:LQ,EA=zA?Y==="narrow"?1.8:1.2:XD,WA=y?.t??TA.t,MA={id:oJ(PA),wallId:TA.wall.id,offset:Math.max(0.05,Math.min(0.95,WA)),width:n,height:EA,sillHeight:zA?0.9:0,type:zA?Y:N,kind:PA,doorTextureId:PA==="door"?q:void 0,frameWidth:zA?0.055:0.05,headHeight:0.05,openAngle:0,hinge:"left",panesX:zA?(Y==="triple"||Y==="grid3x2"?3:Y==="grid2x2"||Y==="sliding"?2:1):1,panesY:zA?(Y==="grid2x2"||Y==="grid3x2"?2:1):1};J((wA)=>wA.map((cA)=>cA.id===H?{...cA,[zA?"windows":"doors"]:[...cA[zA?"windows":"doors"],MA]}:cA)),s([{type:PA,id:MA.id}])}}else if(Z==="stair"){z6();let TA={id:oJ("stair"),type:f,x:dA.x,y:dA.y,width:f==="double"?1.6:1,rotation:0,materialId:Q,hasRailing:!0,treads:14,run:0.25,railHeight:0.9,railSides:"both"};J((PA)=>PA.map((zA)=>zA.id===H?{...zA,stairs:[...zA.stairs,TA]}:zA)),s([{type:"stair",id:TA.id}])}else if(Z==="select"){if(YA.shiftKey){_({active:!0,sx:BA,sy:uA,ex:BA,ey:uA});return}let TA=null,PA=1/0;for(let zA of JJ){let n=y1(fA.x,fA.y,zA.x1,zA.y1,zA.x2,zA.y2);if(n.dist<14&&n.dist<PA)PA=n.dist,TA={type:"wall",id:zA.id}}if(!TA)for(let zA of[...rH,...Q8]){let n=JJ.find((cA)=>cA.id===zA.wallId);if(!n)continue;let EA=n.x2-n.x1,WA=n.y2-n.y1,MA=n.x1+EA*zA.offset,wA=n.y1+WA*zA.offset;if(Math.hypot(fA.x-MA,fA.y-wA)<22){TA={type:zA.kind,id:zA.id};break}}if(!TA){for(let zA of d8)if(Math.hypot(fA.x-zA.x,fA.y-zA.y)<28){TA={type:"stair",id:zA.id};break}}if(TA){if(YA.ctrlKey||YA.metaKey)s((zA)=>zA.some((n)=>n.id===TA.id)?zA.filter((n)=>n.id!==TA.id):[...zA,TA]),dg.current=null;else{s([TA]);let extra={};if(TA.type==="wall"){let w=JJ.find((n)=>n.id===TA.id);if(w)extra={x1:w.x1,y1:w.y1,x2:w.x2,y2:w.y2}}else if(TA.type==="stair"){let st=d8.find((n)=>n.id===TA.id);if(st)extra={x:st.x,y:st.y}}else{let it=(TA.type==="window"?rH:Q8).find((n)=>n.id===TA.id);if(it)extra={width:it.width,offset:it.offset,wallId:it.wallId}}dg.current={type:TA.type,id:TA.id,sx:fA.x,sy:fA.y,moved:!1,...extra}}}else s([]),dg.current=null}else if(Z==="erase"){let TA=v1(fA.x,fA.y,20);if(TA)z6(),J((PA)=>PA.map((zA)=>zA.id===H?{...zA,walls:zA.walls.filter((n)=>n.id!==TA.wall.id),windows:zA.windows.filter((n)=>n.wallId!==TA.wall.id),doors:zA.doors.filter((n)=>n.wallId!==TA.wall.id)}:zA)),s([]);else{let PA=Math.floor(fA.x/CA/N6),zA=Math.floor(fA.y/CA/N6),n=`${PA}_${zA}`;if(X.floorChunks?.[n])z6(),J((EA)=>EA.map((WA)=>{if(WA.id!==H)return WA;let MA={...WA.floorChunks||{}};return MA[n]={hasFloor:!1,tex:WA.floorTextureId},{...WA,floorChunks:MA}}))}}},r=(YA)=>{dg.current=null;if(b6(!1),IA(null),YA.button===2||Z==="floor")K6(!1),OA.current=null;if(a?.active){let BA=Math.min(a.sx,a.ex),uA=Math.max(a.sx,a.ex),fA=Math.min(a.sy,a.ey),dA=Math.max(a.sy,a.ey),TA=(cA,Y6)=>UH(cA,Y6,FA),PA=TA(BA,fA),zA=TA(uA,dA),n=Math.min(PA.x,zA.x),EA=Math.max(PA.x,zA.x),WA=Math.min(PA.y,zA.y),MA=Math.max(PA.y,zA.y),wA=[];JJ.forEach((cA)=>{let Y6=(cA.x1+cA.x2)/2,D6=(cA.y1+cA.y2)/2;if(Y6>=n&&Y6<=EA&&D6>=WA&&D6<=MA)wA.push({type:"wall",id:cA.id})}),d8.forEach((cA)=>{if(cA.x>=n&&cA.x<=EA&&cA.y>=WA&&cA.y<=MA)wA.push({type:"stair",id:cA.id})}),s(wA),_(null)}if(SA)yA(null),NJ(null);if(I6)t6(null)},ZA=(YA)=>{YA.preventDefault();let{sx:BA,sy:uA}=T(YA),fA=YA.deltaY>0?0.92:1.08,dA=Math.max(0.25,Math.min(3.5,FA.zoom*fA)),TA=(BA-(iA.current?.clientWidth||800)/2)/FA.zoom-FA.x*CA,PA=(uA-(iA.current?.clientHeight||600)/2)/FA.zoom-FA.y*CA,zA=(BA-(iA.current?.clientWidth||800)/2)/dA-FA.x*CA,n=(uA-(iA.current?.clientHeight||600)/2)/dA-FA.y*CA;R6((EA)=>({...EA,zoom:dA,x:EA.x+(zA-TA)/CA,y:EA.y+(n-PA)/CA}))},VA=(YA)=>{YA.preventDefault()};return K.addEventListener("pointermove",p),K.addEventListener("pointerdown",o),K.addEventListener("pointerup",r),K.addEventListener("wheel",ZA,{passive:!1}),K.addEventListener("contextmenu",VA),()=>{K.removeEventListener("pointermove",p),K.removeEventListener("pointerdown",o),K.removeEventListener("pointerup",r),K.removeEventListener("wheel",ZA),K.removeEventListener("contextmenu",VA)}},[FA,UA,Z,JJ,rH,Q8,d8,v1,Y,N,G,z,q,Q,f,z6,Q6,v,H,X,O6,y,SA,I6,a,S6,L,j,k]),mA.useEffect(()=>{let K=w.current;if(!K)return;if(!W.current){let T=new vP({canvas:K,antialias:!0,alpha:!0});T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=KU,T.toneMapping=hU,T.toneMappingExposure=1.05,W.current=T;let p=new z0;p.background=new F6(855311),p.fog=null,b.current=p;let o=new E8;p.add(o),JA.current=o;let r=new XZ(16777215,0.55);p.add(r);let ZA=new HZ(16777215,4473958,0.55);p.add(ZA);let VA=new Z9(16774888,1.1);VA.position.set(8,14,6),VA.castShadow=!0,VA.shadow.mapSize.set(2048,2048),VA.shadow.camera.left=-80,VA.shadow.camera.right=80,VA.shadow.camera.top=80,VA.shadow.camera.bottom=-80,VA.shadow.camera.far=200,VA.shadow.bias=-0.0002,p.add(VA);let YA=new Z9(13162751,0.35);YA.position.set(-8,8,-6),p.add(YA);let BA=new H8(45,1,0.05,8000);BA.position.set(9,7,9),T._camera=BA;let uA=new lP(BA,T.domElement);uA.enableDamping=!0,uA.dampingFactor=0.08,uA.target.set(0,1.2,0),HA.current=uA;let fA=()=>{let TA=K.parentElement;if(!TA)return;let{clientWidth:PA,clientHeight:zA}=TA;T.setSize(PA,zA,!1),BA.aspect=PA/zA,BA.updateProjectionMatrix()};fA(),window.addEventListener("resize",fA);let dA=()=>{requestAnimationFrame(dA),uA.update(),T.render(p,BA)};return dA(),()=>{window.removeEventListener("resize",fA)}}},[]),mA.useEffect(()=>{let K=w.current,T=W.current,p=HA.current;if(!K||!T||!p)return;let o=(YA)=>{if(YA.button===2){if(Z!=="floor")return;YA.preventDefault(),K6(!0),OA.current=null,p.enabled=!1;let BA=K.getBoundingClientRect(),uA=(YA.clientX-BA.left)/BA.width*2-1,fA=-((YA.clientY-BA.top)/BA.height)*2+1;oA.current.set(uA,fA),e.current.setFromCamera(oA.current,T._camera);let dA=U.elevation+0.02,TA=new N8(new g(0,1,0),-dA),PA=new g;if(e.current.ray.intersectPlane(TA,PA),PA)u1(PA.x,PA.z)}},r=(YA)=>{if(!S6)return;if(Z!=="floor")return;if(!(YA.buttons&2))return;let BA=K.getBoundingClientRect(),uA=(YA.clientX-BA.left)/BA.width*2-1,fA=-((YA.clientY-BA.top)/BA.height)*2+1;oA.current.set(uA,fA),e.current.setFromCamera(oA.current,T._camera);let dA=U.elevation+0.02,TA=new N8(new g(0,1,0),-dA),PA=new g;if(e.current.ray.intersectPlane(TA,PA),PA)u1(PA.x,PA.z)},ZA=(YA)=>{if(YA.button===2){if(K6(!1),OA.current=null,p)p.enabled=!0}},VA=(YA)=>YA.preventDefault();return K.addEventListener("pointerdown",o),window.addEventListener("pointermove",r),window.addEventListener("pointerup",ZA),K.addEventListener("contextmenu",VA),()=>{K.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",ZA),K.removeEventListener("contextmenu",VA)}},[S6,U,L,H,A,Z,j,k]);let h=mA.useRef(null);mA.useEffect(()=>{if(h.current)clearTimeout(h.current);return h.current=setTimeout(()=>{let K=b.current,T=JA.current;if(!K||!T)return;clrGrp(T);let p=!0,o=new JZ,r=new Map,ZA=(EA)=>{let WA=f9.get(EA);if(!WA)return null;if(r.has(EA))return r.get(EA);let MA=o.load(WA);return MA.colorSpace=w1,MA.wrapS=MA.wrapT=q8,r.set(EA,MA),MA},VA=(EA)=>{let WA=f9.get(EA)||f9.get("door_light_oak");if(r.has(EA))return r.get(EA);let MA=o.load(WA);return MA.colorSpace=w1,MA.wrapS=MA.wrapT=q8,r.set(EA,MA),MA},YA=new CJ({color:16250869,roughness:0.45,metalness:0.08}),BA=new CJ({color:15790320,roughness:0.35,metalness:0.22}),uA=new CJ({color:657930,roughness:0.9,metalness:0}),fA=new fE({color:14544639,metalness:0,roughness:0.04,transmission:0.92,thickness:0.02,ior:1.52,transparent:!0,opacity:0.72,side:_6}),dA=new fE({color:14544639,metalness:0,roughness:0.04,transmission:0.92,thickness:0.02,ior:1.52,transparent:!0,opacity:0.72,side:_6}),TA=new fE({color:16777215,roughness:0.35,transmission:0.25,thickness:0.02,transparent:!0,opacity:0.55,side:_6}),PA=(EA,WA,MA)=>{let o=EA&&typeof EA==="object"&&EA.width?EA:null,type=o?o.type||"standard":EA,cA=Math.max(0.35,o?Number(o.width):WA),Y6=Math.max(0.4,o?Number(o.height):MA),fw=Math.max(0.03,o&&o.frameWidth||0.055),nx=Math.max(1,Math.min(5,o&&o.panesX||(type==="triple"||type==="grid3x2"?3:type==="grid2x2"||type==="sliding"?2:1))),ny=Math.max(1,Math.min(4,o&&o.panesY||(type==="grid2x2"||type==="grid3x2"?2:1))),wA=new E8,th=T9-0.002,fr=YA.clone();
let top=new aA(new m6(cA,fw,th),fr);top.position.set(0,Y6/2-fw/2,0),top.castShadow=p,wA.add(top);
let bot=new aA(new m6(cA,fw,th),fr);bot.position.set(0,-Y6/2+fw/2,0),bot.castShadow=p,wA.add(bot);
let lf=new aA(new m6(fw,Y6-fw*2,th),fr);lf.position.set(-cA/2+fw/2,0,0),lf.castShadow=p,wA.add(lf);
let rt=new aA(new m6(fw,Y6-fw*2,th),fr);rt.position.set(cA/2-fw/2,0,0),rt.castShadow=p,wA.add(rt);
let sill=new aA(new m6(cA+0.08,0.035,0.12),BA.clone());sill.position.set(0,-Y6/2+0.01,-th/2-0.04),sill.rotation.x=-0.12,sill.castShadow=p,wA.add(sill);
let innerW=cA-fw*2,innerH=Y6-fw*2,bar=0.028,cellW=(innerW-bar*(nx-1))/nx,cellH=(innerH-bar*(ny-1))/ny,glF=fA.clone(),glB=dA.clone();glF.side=_6,glB.side=_6;
for(let iy=0;iy<ny;iy++)for(let ix=0;ix<nx;ix++){let px=-innerW/2+cellW/2+ix*(cellW+bar),py=-innerH/2+cellH/2+iy*(cellH+bar),front=new aA(new m6(Math.max(0.04,cellW-0.004),Math.max(0.04,cellH-0.004),0.012),glF);front.position.set(px,py,0.01),wA.add(front);let back=new aA(new m6(Math.max(0.04,cellW-0.004),Math.max(0.04,cellH-0.004),0.012),glB);back.position.set(px,py,-0.01),wA.add(back)}
for(let ix=1;ix<nx;ix++){let mx=-innerW/2+ix*cellW+(ix-0.5)*bar+bar/2,mv=new aA(new m6(bar,innerH,0.04),fr.clone());mv.position.set(mx,0,0),wA.add(mv)}
for(let iy=1;iy<ny;iy++){let my=-innerH/2+iy*cellH+(iy-0.5)*bar+bar/2,mh=new aA(new m6(innerW,bar,0.04),fr.clone());mh.position.set(0,my,0),wA.add(mh)}
return wA},zA=(EA,WA,MA,wA)=>{let o=EA&&typeof EA==="object"&&EA.width?EA:null,type=o?o.type||"solid":EA,W=Math.max(0.4,o?Number(o.width):WA),H=Math.max(0.8,o?Number(o.height):MA),texId=o?o.doorTextureId||q:wA,jw=Math.max(0.03,o&&o.frameWidth||0.05),hd=Math.max(0.03,o&&o.headHeight||0.05),open=Number(o&&o.openAngle||0)*Math.PI/180,hinge=o&&o.hinge||"left",cA=new E8,th=T9-0.002,frame=new CJ({color:15987672,roughness:0.45,metalness:0.05,side:_6});
let lj=new aA(new m6(jw,H,th),frame.clone());lj.position.set(-W/2+jw/2,0,0),cA.add(lj);
let rj=new aA(new m6(jw,H,th),frame.clone());rj.position.set(W/2-jw/2,0,0),cA.add(rj);
let hdM=new aA(new m6(W,hd,th),frame.clone());hdM.position.set(0,H/2-hd/2,0),cA.add(hdM);
let lw=Math.max(0.2,W-jw*2-0.006),lh=Math.max(0.35,H-hd-0.008),zJ=VA(texId),leafMat=(()=>{if(!zJ)return new CJ({color:12889460,roughness:0.55,side:_6});let t=zJ.clone();return t.wrapS=q8,t.wrapT=q8,t.repeat.set(1,1),t.needsUpdate=!0,t.colorSpace=w1,new CJ({map:t,color:16777215,roughness:0.55,side:_6})})();
function addLeaf(parent,x,w,sign){if(type==="slidingGlass"||type==="french"||type==="glassTop"){if(type==="glassTop"){let sol=lh*0.58,pJ=new aA(new m6(w,sol,0.04),leafMat.clone());pJ.position.set(x,-lh/2+sol/2,0.01),parent.add(pJ);let gl=new aA(new m6(w*0.9,lh-sol-0.02,0.016),TA.clone());gl.material.side=_6,gl.position.set(x,lh/2-(lh-sol)/2-0.01,0.01),parent.add(gl)}else{let gl=new aA(new m6(w*0.86,lh*0.86,0.016),(type==="slidingGlass"?fA:TA).clone());gl.material.side=_6,gl.position.set(x,0,0.01),parent.add(gl);let st=new aA(new m6(w,lh,0.032),frame.clone());st.position.set(x,0,0),parent.add(st)}}else{let pJ=new aA(new m6(w,lh,0.04),leafMat.clone());pJ.position.set(x,0,0.01),parent.add(pJ)}let hdl=new aA(new m6(0.012,0.08,0.045),new CJ({color:13816530,roughness:0.25,metalness:0.75}));hdl.position.set(x+sign*(w/2-0.06),0,0.04),parent.add(hdl)}
if(type==="double"||type==="french"||type==="slidingGlass"){let dw=lw/2-0.002,g1=new E8,g2=new E8,hx1=-W/2+jw,hx2=W/2-jw;g1.position.set(hx1,-hd/2+0.002,0),g1.rotation.y=-open,addLeaf(g1,dw/2,dw,1),cA.add(g1);g2.position.set(hx2,-hd/2+0.002,0),g2.rotation.y=open,addLeaf(g2,-dw/2,dw,-1),cA.add(g2)}else{let g1=new E8,hx=hinge==="right"?W/2-jw:-W/2+jw,dir=hinge==="right"?1:-1;g1.position.set(hx,-hd/2+0.002,0),g1.rotation.y=dir*open,addLeaf(g1,-dir*lw/2,lw,-dir),cA.add(g1)}
return cA},n=(EA,WA,MA)=>{let g=new E8,W=Math.max(0.55,Number(EA.width)||1),H=Math.max(0.85,WA),nT=Math.max(4,Math.min(26,Number(EA.treads)||Math.round(H/0.175))),rise=H/nT,run=Math.max(0.18,Number(EA.run)||0.25),hasR=EA.hasRailing!==!1,sides=EA.railSides||"both",rh=Math.max(0.65,Number(EA.railHeight)||0.9),type=EA.type||"straight";
if(MA)MA.wrapS=MA.wrapT=q8,MA.repeat.set(1,1);
let wood=new CJ({map:MA||null,color:MA?16777215:9066540,roughness:0.48,metalness:0.04,side:_6}),
dark=new CJ({color:2697513,roughness:0.28,metalness:0.82}),
oak=new CJ({color:10124616,roughness:0.5}),
conc=new CJ({color:10526880,roughness:0.88}),
gl=fA.clone();gl.side=_6;
let treadM=type==="glass"?gl:type==="concrete"?conc:type==="industrial"?dark:wood,
riseM=type==="concrete"?conc:type==="industrial"?dark:oak,
strM=type==="industrial"||type==="glass"?dark:type==="concrete"?conc:wood,
railM=type==="woodopen"?oak:dark,openR=type==="woodopen"||type==="floating"||type==="industrial"||type==="glass";
function box(x,y,z,sx,sy,sz,mat,rx){let m=new aA(new m6(sx,sy,sz),mat);m.position.set(x,y,z);if(rx)m.rotation.x=rx;m.castShadow=!0,m.receiveShadow=!0,g.add(m);return m}
function cyl(x,y,z,r,h,mat,seg){let m=new aA(new wE(r,r,h,seg||8),mat);m.position.set(x,y,z);m.castShadow=!0,g.add(m);return m}
function rail(x,z0,y0,z1,y1){if(!hasR)return;cyl(x,y0+rh/2,z0,0.03,rh,railM,10);cyl(x,y1+rh/2+0.02,z1,0.036,rh+0.05,railM,10);let dy=y1-y0,dz=z1-z0,len=Math.hypot(dy,dz)||0.1,r=new aA(new m6(0.05,0.034,len+0.08),railM);r.position.set(x,(y0+y1)/2+rh,(z0+z1)/2),r.rotation.x=-Math.atan2(dy,dz),r.castShadow=!0,g.add(r);let nB=Math.max(2,Math.round(len/0.11));for(let i=1;i<nB;i++){let t=i/nB;cyl(x,y0+t*dy+rh/2-0.01,z0+t*dz,0.01,rh-0.05,railM,6)}}
function flight(z0,y0,cnt,sign,xOff){xOff=xOff||0;for(let i=0;i<cnt;i++){let y=y0+i*rise,z=z0+sign*(i+0.5)*run;box(xOff,y+rise-0.018,z,W,0.04,run+0.03,treadM);if(type!=="floating")box(xOff,y+rise-0.004,z+sign*run*0.48,W,0.02,0.03,treadM);if(!openR)box(xOff,y+rise/2-0.004,z-sign*(run*0.47),W-0.05,rise-0.018,0.03,riseM)}if(type!=="floating"){let fl=cnt*run,fh=cnt*rise,sl=Math.hypot(fl,fh),sa=Math.atan2(fh,fl);[-1,1].forEach((s)=>{let m=new aA(new m6(0.048,type==="concrete"?0.26:0.16,sl+0.05),strM);m.position.set(xOff+s*(W/2+0.02),y0+fh/2+0.03,z0+sign*fl/2),m.rotation.x=-sign*sa,m.castShadow=!0,g.add(m)})}if(sides!=="right")rail(xOff-W/2-0.055,z0,y0,z0+sign*cnt*run,y0+cnt*rise);if(sides!=="left")rail(xOff+W/2+0.055,z0,y0,z0+sign*cnt*run,y0+cnt*rise)}
function pie(a0,a1,y,r0,r1,th,mat){let c0=Math.cos(a0),s0=Math.sin(a0),c1=Math.cos(a1),s1=Math.sin(a1),y1=y+th,pos=new Float32Array([r0*c0,y1,r0*s0,r0*c1,y1,r0*s1,r1*c1,y1,r1*s1,r1*c0,y1,r1*s0,r0*c0,y,r0*s0,r0*c1,y,r0*s1,r1*c1,y,r1*s1,r1*c0,y,r1*s0]),geo=new sH;geo.setAttribute("position",new IJ(pos,3)),geo.setIndex([0,1,2,0,2,3,4,7,6,4,6,5,0,3,7,0,7,4,1,5,6,1,6,2,3,2,6,3,6,7,0,4,5,0,5,1]),geo.computeVertexNormals();let m=new aA(geo,mat);return m.castShadow=!0,m.receiveShadow=!0,g.add(m),m}
function flightX(x0,y0,z,cnt,sign){for(let i=0;i<cnt;i++){let y=y0+i*rise,x=x0+sign*(i+0.5)*run;box(x,y+rise-0.018,z,run+0.03,0.04,W,treadM);if(type!=="floating")box(x+sign*run*0.48,y+rise-0.004,z,0.03,0.02,W,treadM);if(!openR)box(x-sign*run*0.47,y+rise/2-0.004,z,0.03,rise-0.018,W-0.05,riseM)}if(type!=="floating"){let fl=cnt*run,fh=cnt*rise,sl=Math.hypot(fl,fh),sa=Math.atan2(fh,fl);[-1,1].forEach((s)=>{let m=new aA(new m6(sl+0.05,type==="concrete"?0.26:0.16,0.048),strM);m.position.set(x0+sign*fl/2,y0+fh/2+0.03,z+s*(W/2+0.02)),m.rotation.z=sign>0?sa:-sa,m.castShadow=!0,g.add(m)})}if(hasR){if(sides!=="right"){for(let i=0;i<=cnt;i++)cyl(x0+sign*i*run,y0+i*rise+rh/2,z-W/2-0.055,i===0||i===cnt?0.03:0.011,rh,railM,8);let sl=Math.hypot(cnt*run,cnt*rise),m=new aA(new m6(0.05,0.034,sl+0.06),railM);m.position.set(x0+sign*cnt*run/2,y0+cnt*rise/2+rh,z-W/2-0.055),m.rotation.z=sign>0?-Math.atan2(cnt*rise,cnt*run):Math.atan2(cnt*rise,cnt*run),m.rotation.y=Math.PI/2,g.add(m)}if(sides!=="left"){for(let i=0;i<=cnt;i++)cyl(x0+sign*i*run,y0+i*rise+rh/2,z+W/2+0.055,i===0||i===cnt?0.03:0.011,rh,railM,8);let sl=Math.hypot(cnt*run,cnt*rise),m=new aA(new m6(0.05,0.034,sl+0.06),railM);m.position.set(x0+sign*cnt*run/2,y0+cnt*rise/2+rh,z+W/2+0.055),m.rotation.z=sign>0?-Math.atan2(cnt*rise,cnt*run):Math.atan2(cnt*rise,cnt*run),m.rotation.y=Math.PI/2,g.add(m)}}}
if(type==="spiral"){let rOut=Math.max(0.9,W*0.95),rIn=0.11,turns=1.4,da=turns*Math.PI*2/nT;cyl(0,H/2,0,0.075,H+0.14,railM,20);cyl(0,H+0.09,0,0.09,0.06,railM,16);for(let i=0;i<nT;i++){let a0=i*da,a1=a0+da*0.92,y=i*rise;pie(a0,a1,y+rise-0.04,rIn,rOut,0.04,treadM);if(!openR){let mid=(a0+a1)/2,rw=(rOut-rIn)*0.9,cx=Math.cos(mid)*(rIn+rOut)/2,cz=Math.sin(mid)*(rIn+rOut)/2,rs=new aA(new m6(0.03,rise-0.01,rw),riseM);rs.position.set(cx,y+rise/2-0.01,cz),rs.rotation.y=-mid,g.add(rs)}if(hasR){let ox=Math.cos(a0)*rOut,oz=Math.sin(a0)*rOut;cyl(ox,y+rh/2,oz,0.012,rh,railM,6);if(i<nT-1){let a2=(i+1)*da,hx=(ox+Math.cos(a2)*rOut)/2,hz=(oz+Math.sin(a2)*rOut)/2,gap=Math.hypot(Math.cos(a2)*rOut-ox,Math.sin(a2)*rOut-oz,rise),hr=new aA(new m6(0.046,0.032,Math.max(0.1,gap)),railM);hr.position.set(hx,y+rh+rise/2,hz),hr.lookAt(Math.cos(a2)*rOut,y+rise+rh,Math.sin(a2)*rOut),g.add(hr)}}}if(hasR)cyl(Math.cos(nT*da)*rOut,H+rh/2,Math.sin(nT*da)*rOut,0.034,rh+0.05,railM,10)}
else if(type==="lshape"){let a=Math.max(4,Math.ceil(nT*0.55)),b=Math.max(4,nT-a),zL=a*run,yL=a*rise;flight(0,0,a,1,0);box(0,yL-0.02,zL+W/2,W+0.04,0.055,W+0.04,treadM);if(type!=="floating"){box(0,yL-0.12,zL+W/2,W+0.02,0.2,W+0.02,strM)}flightX(W/2,yL,zL+W/2,b,1);if(hasR){cyl(-W/2-0.055,yL+rh/2,zL+W,0.034,rh,railM,10);cyl(W/2,yL+rh/2,zL+W+0.055,0.034,rh,railM,10);let land=new aA(new m6(W+0.1,0.034,0.05),railM);land.position.set(0,yL+rh,zL+W+0.055),g.add(land)}}
else if(type==="ushape"){let a=Math.max(4,Math.ceil(nT*0.5)),b=Math.max(4,nT-a),gap=0.22,x2=W+gap,zL=a*run,yL=a*rise;flight(0,0,a,1,0);box(x2/2,yL-0.02,zL+W/2,x2+W+0.06,0.055,W+0.04,treadM);if(type!=="floating")box(x2/2,yL-0.14,zL+W/2,x2+W,0.22,W,strM);flight(zL+W,yL,b,-1,x2);if(hasR){cyl(-W/2-0.055,yL+rh/2,zL+W,0.034,rh,railM,10);cyl(x2+W/2+0.055,yL+rh/2,zL+W,0.034,rh,railM,10);let land=new aA(new m6(x2+W+0.12,0.034,0.05),railM);land.position.set(x2/2,yL+rh,zL+W+0.055),g.add(land);let inn=new aA(new m6(gap-0.02,0.034,0.05),railM);inn.position.set(x2/2,yL+rh,zL),g.add(inn)}}
else if(type==="double"){W=Math.max(1.35,W*1.55);flight(0,0,nT,1,0);if(hasR)rail(0,0,0,nT*run,H)}
else flight(0,0,nT,1,0);
return g};if(V.forEach((EA,WA)=>{let MA=new E8;MA.position.y=EA.elevation,T.add(MA);let{walls:wA,windows:cA,doors:Y6,stairs:D6,height:y6}=EA,l6=0.65,p6=new Map,lJ=[],P6=wA.flatMap((GA)=>[{wallId:GA.id,x:GA.x1,y:GA.y1},{wallId:GA.id,x:GA.x2,y:GA.y2}]),tA=Array(P6.length).fill(!1);for(let GA=0;GA<P6.length;GA++)if(!tA[GA]){let sA=P6[GA].x,E6=P6[GA].y,L6=[P6[GA]];tA[GA]=!0;for(let d6=GA+1;d6<P6.length;d6++)if(!tA[d6]&&Math.hypot(P6[GA].x-P6[d6].x,P6[GA].y-P6[d6].y)<8)sA+=P6[d6].x,E6+=P6[d6].y,L6.push(P6[d6]),tA[d6]=!0;if(L6.length>=2)lJ.push({x:sA/L6.length,y:E6/L6.length,pts:L6})}wA.forEach((GA)=>{p6.set(GA.id,{start:!1,end:!1})}),lJ.forEach((GA)=>{GA.pts.forEach((sA)=>{let E6=p6.get(sA.wallId);if(E6)if(Math.hypot(sA.x-wA.find((L6)=>L6.id===sA.wallId).x1,sA.y-wA.find((L6)=>L6.id===sA.wallId).y1)<8)E6.start=!0;else E6.end=!0})});let v6=1/0,u6=1/0,zJ=-1/0,BJ=-1/0;wA.forEach((GA)=>{v6=Math.min(v6,GA.x1,GA.x2),zJ=Math.max(zJ,GA.x1,GA.x2),u6=Math.min(u6,GA.y1,GA.y2),BJ=Math.max(BJ,GA.y1,GA.y2)});let Z6=wA.length>0,HJ=Z6?(zJ-v6)/CA:12,GJ=Z6?(BJ-u6)/CA:12,pJ=Z6?(v6+zJ)/2/CA:0,rJ=Z6?(u6+BJ)/2/CA:0,OH=pJ,F8=rJ;if(Z6){let GA=0,sA=0;wA.forEach((E6)=>{GA+=(E6.x1+E6.x2)/2,sA+=(E6.y1+E6.y2)/2}),OH=GA/wA.length/CA,F8=sA/wA.length/CA}let RH=1/0,tJ=-1/0,fJ=1/0,jJ=-1/0;if(Z6)wA.forEach((GA)=>{let sA=GA.x2-GA.x1,E6=GA.y2-GA.y1,L6=Math.hypot(sA,E6);if(L6<1)return;let d6=sA/L6,a6=-(E6/L6),YJ=d6,gJ=(GA.x1+GA.x2)/2/CA,kH=(GA.y1+GA.y2)/2/CA,K8=gJ-OH,c8=kH-F8,k0=K8*a6+c8*YJ>0?1:-1,X8=-a6*T9/2*k0,u9=-YJ*T9/2*k0,OZ=GA.x1/CA+X8,D0=GA.y1/CA+u9,S0=GA.x2/CA+X8,h9=GA.y2/CA+u9;RH=Math.min(RH,OZ,S0),tJ=Math.max(tJ,OZ,S0),fJ=Math.min(fJ,D0,h9),jJ=Math.max(jJ,D0,h9)});let h1=0.05,y9=Z6?tJ-RH:12,v9=Z6?jJ-fJ:12,l1=Z6?Math.max(0.5,y9-h1*2):12,p1=Z6?Math.max(0.5,v9-h1*2):12,MH=Z6?(RH+tJ)/2:pJ,n8=Z6?(fJ+jJ)/2:rJ;{let texM=Math.max(0.2,Number(k)||2),gF=grpFlr(EA.floorChunks);for(let tex in gF){let s6=ZA(tex),map=s6?s6.clone():null;if(map)map.wrapS=map.wrapT=q8,map.repeat.set(1,1),map.offset.set(0,0);let mesh=mkFlr(gF[tex],0.02,!1,map,2236966,texM);if(mesh)MA.add(mesh)}let sA=WA<V.length-1?V[WA+1]:null;if(sA){let gC=grpFlr(sA.floorChunks);for(let tex in gC){let s6=ZA(tex),map=s6?s6.clone():null;if(map)map.wrapS=map.wrapT=q8,map.repeat.set(1,1),map.offset.set(0,0);let mesh=mkFlr(gC[tex],y6-0.01,!0,map,16119280,texM);if(mesh)MA.add(mesh)}}}if(WA===0&&Z6){let GA=new m6(l1+0.5,w9,p1+0.5),sA=new CJ({color:2763310,roughness:0.9}),E6=new aA(GA,sA);E6.position.set(MH,-w9/2,n8),MA.add(E6)}if((()=>{function GA(sA,E6,L6,d6){if(!sA)return null;let s6=sA.clone();return s6.needsUpdate=!0,s6.wrapS=q8,s6.wrapT=q8,s6.minFilter=BH,s6.magFilter=XH,s6.repeat.set(1,1),s6.offset.set(0,0),s6}wA.forEach((sA)=>{let E6=sA.x2-sA.x1,L6=sA.y2-sA.y1,d6=Math.hypot(E6,L6);if(d6<1)return;let s6=d6/CA,a6=T9,YJ=[...cA,...Y6].filter((n6)=>n6.wallId===sA.id).sort((n6,YH)=>n6.offset-YH.offset),gJ=0.0005,kH=gJ/s6,K8=p6.get(sA.id),c8=K8.start?a6/2:0,g1=K8.end?a6/2:0,k0=s6+c8+g1,X8=Math.atan2(L6,E6),u9=E6/d6,D0=-(L6/d6),S0=u9,h9=(sA.x1+sA.x2)/2/CA,vQ=(sA.y1+sA.y2)/2/CA,uQ=h9-OH,hQ=vQ-F8,l9=uQ*D0+hQ*S0>0?1:-1,lQ=ZA(sA.outerTextureId),pQ=ZA(sA.innerTextureId),L0=(n6,YH,V8,aJ)=>{if(YH<=n6+0.0001||aJ<=0.01)return;let PH=(YH-n6)*s6,nE=(n6+YH)/2,b1=0;if(n6===0&&K8.start)PH+=c8,b1-=c8/2;if(YH===1&&K8.end)PH+=g1,b1+=g1/2;if(n6===0&&YH===1&&K8.start&&K8.end)PH=k0,nE=0.5,b1=(g1-c8)/2;let p9=sA.x1+E6*nE+E6/d6*(b1*CA),g9=sA.y1+L6*nE+L6/d6*(b1*CA),i8=p9/CA,T8=g9/CA,tH=GA(lQ,PH,aJ,sA.outerTextureId),cP=GA(pQ,PH,aJ,sA.innerTextureId),gQ=new CJ({map:tH||null,color:tH?16777215:9079434,roughness:0.85,metalness:0.02,side:mH}),bQ=new CJ({map:cP||null,color:cP?16777215:14540253,roughness:0.82,metalness:0.02,side:mH}),xQ=V8<0.001,mQ=V8+aJ>=y6-0.001,iP=V8,b9=aJ;if(xQ&&WA>0)iP=V8-0.01,b9+=0.01;if(mQ&&WA<V.length-1)b9+=0.01;let along0=n6*s6;if(n6===0&&K8.start)along0-=c8;let su=kA||1,sv=j6||1,geo=new m6(Math.max(0.01,PH),Math.max(0.01,b9),Math.max(0.01,a6));setBoxUV(geo,PH,b9,a6,su,sv,along0,iP);let cE=new aA(geo,[gQ,gQ,gQ,gQ,gQ,bQ]);cE.position.set(i8,iP+b9/2,T8),cE.rotation.y=-X8+(l9<0?Math.PI:0),cE.castShadow=p,cE.receiveShadow=!0,MA.add(cE)};if(YJ.length===0){L0(0,1,0,y6);return}let dE=0;if(YJ.forEach((n6)=>{let YH=n6.width/2/s6,V8=n6.offset-YH,aJ=n6.offset+YH;if(V8=Math.max(0,Math.min(1,V8)),aJ=Math.max(0,Math.min(1,aJ)),V8-kH>dE)L0(dE,V8-kH,0,y6);let PH=(V8+aJ)/2,nE=sA.x1+E6*PH,b1=sA.y1+L6*PH,p9=nE/CA,g9=b1/CA;if(n6.kind==="window"){let i8=n6.sillHeight??0.9;if(i8>0.015)L0(V8,aJ,0,i8-gJ);let T8=i8+n6.height+gJ;if(y6>T8)L0(V8,aJ,T8,y6-T8);let tH=PA(n6);tH.position.set(p9,i8+n6.height/2,g9),tH.rotation.y=-X8,MA.add(tH)}else{let i8=n6.height+gJ;if(y6>i8)L0(V8,aJ,i8,y6-i8);let T8=zA(n6);T8.position.set(p9,n6.height/2,g9),T8.rotation.y=-X8,MA.add(T8)}dE=aJ+kH}),dE<0.9999)L0(dE,1,0,y6)})})(),jA)lJ.forEach((GA)=>{let sA=GA.x/CA,E6=GA.y/CA,ww=T9+0.02,L6=new m6(ww,y6,ww),d6=wA.find((gJ)=>gJ.id===GA.pts[0]?.wallId)?.outerTextureId||G,s6=ZA(d6),map=s6?s6.clone():null;if(map)map.wrapS=map.wrapT=q8,map.repeat.set(1,1);setBoxUV(L6,ww,y6,ww,kA||1,j6||1,sA,0);let a6=new CJ({color:map?16777215:9079434,map:map,roughness:0.85,side:mH}),YJ=new aA(L6,a6);YJ.position.set(sA,y6/2,E6),YJ.castShadow=p,MA.add(YJ)});D6.forEach((GA)=>{let sA=ZA(GA.materialId),E6=n(GA,y6,sA);E6.position.set(GA.x/CA,0,GA.y/CA),E6.rotation.y=-GA.rotation*Math.PI/180,MA.add(E6)})}),V.length>0&&HA.current){let EA=V.find((WA)=>WA.id===H);if(EA&&EA.walls.length>0){let WA=0,MA=0,wA=0;EA.walls.forEach((D6)=>{WA+=(D6.x1+D6.x2)/2,MA+=(D6.y1+D6.y2)/2,wA++});let cA=WA/wA/CA,Y6=MA/wA/CA;HA.current.target.set(cA,EA.elevation+EA.height/2,Y6)}}},350),()=>{if(h.current)clearTimeout(h.current)}},[A,H,q,G,jA,kA,j6,lA,k]);let m=()=>{let K=JA.current;if(!K)return;new hE().parse(K,(p)=>{let o=new Blob([JSON.stringify(p)],{type:"application/json"}),r=URL.createObjectURL(o),ZA=document.createElement("a");ZA.href=r,ZA.download="map_studio_v9.glb",ZA.click(),URL.revokeObjectURL(r)},()=>{},{binary:!1})},d=(K)=>{if(F(K),XA.some((T)=>T.type==="wall"))J((T)=>T.map((p)=>p.id===H?{...p,walls:p.walls.map((o)=>XA.some((r)=>r.type==="wall"&&r.id===o.id)?{...o,outerTextureId:K}:o)}:p))},l=(K)=>{if(B(K),XA.some((T)=>T.type==="wall"))J((T)=>T.map((p)=>p.id===H?{...p,walls:p.walls.map((o)=>XA.some((r)=>r.type==="wall"&&r.id===o.id)?{...o,innerTextureId:K}:o)}:p))},NA=(K)=>{J((T)=>T.map((p)=>p.id===H?{...p,floorTextureId:K}:p))},KA=(K)=>{J((T)=>T.map((p)=>p.id===H?{...p,ceilingTextureId:K}:p))},pA=(K)=>{if(C(K),XA.some((T)=>T.type==="door"))J((T)=>T.map((p)=>p.id===H?{...p,doors:p.doors.map((o)=>XA.some((r)=>r.type==="door"&&r.id===o.id)?{...o,doorTextureId:K}:o)}:p))},xA=()=>{z6();let K=oJ("floor"),T=A.length,p=T===1?"1e Verdieping":T===2?"2e Verdieping":`${T}e Verdieping`;J((o)=>[...o,{id:K,name:p,height:2.7,walls:[],windows:[],doors:[],stairs:[],floorTextureId:"terrazzo",ceilingTextureId:"white_stucco",floorChunks:{}}]),E(K)},H6=()=>{z6();let K=A.find((r)=>r.id===H);if(!K)return;let T=oJ("floor"),p={...K,id:T,name:K.name+" kopie",walls:K.walls.map((r)=>({...r,id:oJ("wall")})),windows:[],doors:[],stairs:K.stairs.map((r)=>({...r,id:oJ("stair")})),floorChunks:{...K.floorChunks||{}}},o=new Map;K.walls.forEach((r,ZA)=>{o.set(r.id,p.walls[ZA].id)}),p.windows=K.windows.map((r)=>({...r,id:oJ("window"),wallId:o.get(r.wallId)||r.wallId})),p.doors=K.doors.map((r)=>({...r,id:oJ("door"),wallId:o.get(r.wallId)||r.wallId})),J((r)=>[...r,p]),E(T)},V6=()=>{if(XA.length===0)return;z6();let K=XA.filter((r)=>r.type==="wall").map((r)=>r.id),T=XA.filter((r)=>r.type==="window").map((r)=>r.id),p=XA.filter((r)=>r.type==="door").map((r)=>r.id),o=XA.filter((r)=>r.type==="stair").map((r)=>r.id);J((r)=>r.map((ZA)=>{if(ZA.id!==H)return ZA;return{...ZA,walls:ZA.walls.filter((VA)=>!K.includes(VA.id)),windows:ZA.windows.filter((VA)=>!T.includes(VA.id)&&!K.includes(VA.wallId)),doors:ZA.doors.filter((VA)=>!p.includes(VA.id)&&!K.includes(VA.wallId)),stairs:ZA.stairs.filter((VA)=>!o.includes(VA.id))}})),s([])};let selD=Q8.find((K)=>ZH("door",K.id)),selW=rH.find((K)=>ZH("window",K.id)),selS=d8.find((K)=>ZH("stair",K.id));
function patchOp(kind,patch){J((T)=>T.map((p)=>{if(p.id!==H)return p;if(kind==="door")return{...p,doors:p.doors.map((o)=>selD&&o.id===selD.id?{...o,...patch}:o)};if(kind==="window")return{...p,windows:p.windows.map((o)=>selW&&o.id===selW.id?{...o,...patch}:o)};if(kind==="stair")return{...p,stairs:p.stairs.map((o)=>selS&&o.id===selS.id?{...o,...patch}:o)};return p}))}
function sld(label,val,min,max,step,onCh,suf){let u=suf===void 0?"m":suf;return DA("div",{className:"space-y-0.5",children:[DA("div",{className:"flex justify-between text-[10px]",children:[RA("span",{className:"text-zinc-400",children:label}),RA("span",{className:"text-violet-300 font-mono",children:[Number(val||0).toFixed(step<0.1?2:step<1?1:0),u]})]}),RA("input",{type:"range",min,max,step,value:val||0,onChange:(e)=>onCh(parseFloat(e.target.value)),className:"w-full h-1.5 accent-violet-500 cursor-pointer"}),DA("div",{className:"flex justify-between text-[8px] text-zinc-500 font-mono",children:[RA("span",{children:[min,u]}),RA("span",{children:[max,u]})]})]})}
function chips(cur,items,onP){return RA("div",{className:"flex flex-wrap gap-1",children:items.map((it)=>RA("button",{onClick:()=>onP(it.id),className:`h-6 px-2 rounded-full text-[9px] font-semibold border ${cur===it.id?"bg-white text-black border-white":"bg-[#1a1a1e] text-zinc-400 border-[#2a2a30]"}`,children:it.l},it.id))})}
function doorInsp(K){return DA("div",{className:"space-y-2",children:[RA("div",{className:"text-[11px] font-semibold text-orange-200",children:"Deur instellingen"}),chips(K.type,DD,(id)=>{I(id),patchOp("door",{type:id,width:id==="double"||id==="french"?2.1:id==="slidingGlass"?2.2:K.width})}),sld("Breedte",K.width,0.5,3.2,0.05,(v)=>patchOp("door",{width:v})),sld("Hoogte",K.height,1.6,3,0.05,(v)=>patchOp("door",{height:v})),sld("Positie op muur",K.offset,0.08,0.92,0.01,(v)=>patchOp("door",{offset:v}),""),sld("Kozijn dikte",K.frameWidth||0.05,0.03,0.12,0.005,(v)=>patchOp("door",{frameWidth:v})),sld("Latei",K.headHeight||0.05,0.03,0.18,0.005,(v)=>patchOp("door",{headHeight:v})),sld("Openhoek",K.openAngle||0,0,90,1,(v)=>patchOp("door",{openAngle:v}),"°"),RA("div",{className:"flex gap-1",children:[{id:"left",l:"Scharnier L"},{id:"right",l:"Scharnier R"}].map((it)=>RA("button",{onClick:()=>patchOp("door",{hinge:it.id}),className:`flex-1 h-6 rounded-full text-[9px] font-semibold border ${(K.hinge||"left")===it.id?"bg-white text-black":"bg-[#1a1a1e] text-zinc-400 border-[#2a2a30]"}`,children:it.l},it.id))}),RA("div",{className:"grid grid-cols-4 gap-1",children:fQ.map((T)=>DA("button",{onClick:()=>{C(T.id),patchOp("door",{doorTextureId:T.id})},className:`rounded overflow-hidden border ${(K.doorTextureId||q)===T.id?"border-white":"border-[#2a2a30]"}`,children:RA("img",{src:T.src,className:"w-full h-8 object-cover"})},T.id))})]})}
function winInsp(K){return DA("div",{className:"space-y-2",children:[RA("div",{className:"text-[11px] font-semibold text-sky-200",children:"Raam instellingen"}),chips(K.type,WD,(id)=>{P(id),patchOp("window",{type:id,width:id==="narrow"?0.6:id==="triple"||id==="grid3x2"?1.8:id==="sliding"?1.6:1.2,panesX:id==="triple"||id==="grid3x2"?3:id==="grid2x2"||id==="sliding"?2:1,panesY:id==="grid2x2"||id==="grid3x2"?2:1})}),sld("Breedte",K.width,0.3,5,0.05,(v)=>patchOp("window",{width:v})),sld("Hoogte",K.height,0.3,2.85,0.05,(v)=>patchOp("window",{height:v})),sld("Dorpel hoogte",K.sillHeight??0.9,0,2.4,0.05,(v)=>patchOp("window",{sillHeight:v})),sld("Positie op muur",K.offset,0.08,0.92,0.01,(v)=>patchOp("window",{offset:v}),""),sld("Kozijn dikte",K.frameWidth||0.055,0.03,0.12,0.005,(v)=>patchOp("window",{frameWidth:v})),sld("Ruiten horizontaal",K.panesX||1,1,5,1,(v)=>patchOp("window",{panesX:v}),""),sld("Ruiten verticaal",K.panesY||1,1,4,1,(v)=>patchOp("window",{panesY:v}),"")]})}
function stairInsp(K){return DA("div",{className:"space-y-2",children:[RA("div",{className:"text-[11px] font-semibold text-violet-200",children:"Trap instellingen"}),RA("div",{className:"grid grid-cols-2 gap-1",children:VD.map((T)=>RA("button",{onClick:()=>{S(T.id),patchOp("stair",{type:T.id,width:T.id==="double"?1.6:K.width})},className:`h-7 px-1 rounded-lg text-[9px] font-semibold border ${K.type===T.id?"bg-violet-500/20 border-violet-400 text-white":"bg-[#1a1a1e] text-zinc-400 border-[#2a2a30]"}`,children:T.name},T.id))}),sld("Breedte",K.width,0.6,2.4,0.05,(v)=>patchOp("stair",{width:v})),sld("Treden",K.treads||14,6,24,1,(v)=>patchOp("stair",{treads:v}),""),sld("Aantrede",K.run||0.25,0.2,0.35,0.01,(v)=>patchOp("stair",{run:v})),sld("Rotatie",K.rotation||0,0,360,5,(v)=>patchOp("stair",{rotation:v}),"°"),sld("Leuning hoogte",K.railHeight||0.9,0.7,1.2,0.05,(v)=>patchOp("stair",{railHeight:v})),RA("div",{className:"flex gap-1",children:[{id:"both",l:"2 zijden"},{id:"left",l:"Links"},{id:"right",l:"Rechts"},{id:"none",l:"Geen"}].map((it)=>RA("button",{onClick:()=>patchOp("stair",{railSides:it.id,hasRailing:it.id!=="none"}),className:`flex-1 h-6 rounded-full text-[9px] font-semibold border ${(K.railSides||"both")===it.id?"bg-white text-black":"bg-[#1a1a1e] text-zinc-400 border-[#2a2a30]"}`,children:it.l},it.id))}),RA("div",{className:"grid grid-cols-3 gap-1",children:TQ.filter((T)=>T.side==="inner"||T.category==="Hout").slice(0,6).map((T)=>DA("button",{onClick:()=>{D(T.id),patchOp("stair",{materialId:T.id})},className:`rounded overflow-hidden border ${(K.materialId||Q)===T.id?"border-white":"border-[#2a2a30]"}`,children:RA("img",{src:T.src,className:"w-full h-7 object-cover"})},T.id))})]})}
return DA("div",{className:"h-[100dvh] w-screen max-w-[100vw] bg-[#0e0e10] text-zinc-100 flex flex-col overflow-hidden",children:[DA("div",{className:"min-h-[52px] flex flex-wrap items-center px-3 py-1 border-b border-[#25252a] bg-[#121214] gap-2 shrink-0 max-w-full overflow-hidden",children:[DA("div",{className:"flex items-center gap-2 shrink-0",children:[RA("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center font-black text-[13px]",children:"M"}),DA("div",{className:"leading-tight",children:[RA("div",{className:"text-[12px] font-semibold tracking-wide",children:"MAP STUDIO PRO V9"}),RA("div",{className:"text-[10px] text-zinc-500",children:"VLOER 0.2x0.2 • 5×5 per meter • Rechts-klik schilderen"})]})]}),RA("div",{className:"h-6 w-px bg-[#25252a] mx-2"}),RA("div",{className:"flex items-center gap-1",children:[{id:"select",icon:W9,label:"Select"},{id:"wall",icon:f1,label:"Muur"},{id:"window",icon:lE,label:"Raam"},{id:"door",icon:Q9,label:"Deur"},{id:"stair",icon:O0,label:"Trap"},{id:"floor",icon:z8,label:"Vloer"},{id:"erase",icon:C9,label:"Wis"}].map((K)=>{let T=K.icon,p=Z===K.id;return DA("button",{onClick:()=>{R(K.id);K.id==="floor"&&i("vloer")},className:`h-8 px-2.5 rounded-full flex items-center gap-1.5 text-[11px] font-medium border transition ${p?"bg-white text-black border-white shadow":"bg-[#1a1a1e] border-[#2a2a30] text-zinc-300 hover:bg-[#232328]"}`,children:[RA(T,{size:14}),K.label]},K.id)})}),DA("div",{className:"flex items-center gap-1 ml-3 pl-3 border-l border-[#25252a]",children:[RA(M0,{size:14,className:"text-zinc-500"}),DA("div",{className:"flex items-center gap-1",children:[A.map((K,T)=>{let p=K.id===H;return DA("button",{onClick:()=>E(K.id),className:`h-8 px-3 rounded-full border text-[11px] font-medium flex items-center gap-1.5 ${p?"bg-violet-500 text-white border-violet-400":"bg-[#1a1a1e] border-[#2a2a30] text-zinc-400 hover:bg-[#232328]"}`,children:[RA("span",{children:K.name}),DA("span",{className:"opacity-60",children:[V[T]?.elevation.toFixed(1),"m"]})]},K.id)}),RA("button",{onClick:xA,className:"h-8 w-8 grid place-items-center rounded-full bg-[#1e1e22] border border-[#2a2a30] hover:bg-[#2a2a30]",children:RA(gE,{size:14})})]})]}),DA("div",{className:"ml-auto flex items-center gap-1.5",children:[DA("button",{onClick:()=>W6((K)=>!K),className:`h-8 px-3 rounded-full border text-[11px] flex items-center gap-1.5 ${$A?"bg-zinc-100 text-black border-white":"bg-[#1a1a1e] border-[#2a2a30] text-zinc-400"}`,children:[RA(x8,{size:14}),"Ghost"]}),RA("button",{onClick:H6,className:"h-8 w-8 grid place-items-center rounded-full bg-[#1a1a1e] border border-[#2a2a30] hover:bg-[#232328]",title:"Dupliceer",children:RA(z9,{size:14})}),RA("button",{onClick:m8,className:"h-8 w-8 grid place-items-center rounded-full bg-[#1a1a1e] border border-[#2a2a30] hover:bg-[#232328]",children:RA(k9,{size:16})}),RA("button",{onClick:V6,className:"h-8 w-8 grid place-items-center rounded-full bg-[#1a1a1e] border border-[#2a2a30] hover:bg-[#232328]",children:RA(bE,{size:16})}),DA("button",{onClick:m,className:"h-8 px-3 rounded-full bg-white text-black text-[11px] font-semibold flex items-center gap-1.5",children:[RA(F9,{size:14}),"Export"]})]})]}),DA("div",{className:"flex-1 flex overflow-hidden",children:[DA("div",{className:"w-[340px] shrink-0 border-r border-[#25252a] bg-[#121214] flex flex-col",children:[DA("div",{className:"p-3 border-b border-[#25252a] space-y-3",children:[DA("div",{className:"flex items-center justify-between",children:[RA("h3",{className:"text-[11px] tracking-widest font-semibold text-zinc-400",children:"BOUW"}),RA("div",{className:"text-[10px] text-zinc-500",children:$||`Actief: ${X.name}`})]}),DA("div",{className:"grid grid-cols-2 gap-2",children:[DA("button",{onClick:()=>{z6();let K=600,T=360,p=0,o=0,r=[{id:oJ("wall"),x1:p-K/2,y1:o+T/2,x2:p+K/2,y2:o+T/2,outerTextureId:"red_brick",innerTextureId:"botanical_wallpaper",height:X.height},{id:oJ("wall"),x1:p+K/2,y1:o+T/2,x2:p+K/2,y2:o-T/2,outerTextureId:"red_brick",innerTextureId:"geometric_wallpaper",height:X.height},{id:oJ("wall"),x1:p+K/2,y1:o-T/2,x2:p-K/2,y2:o-T/2,outerTextureId:"white_stucco",innerTextureId:"beige_linen",height:X.height},{id:oJ("wall"),x1:p-K/2,y1:o-T/2,x2:p-K/2,y2:o+T/2,outerTextureId:"white_stucco",innerTextureId:"light_oak",height:X.height}],ZA={},VA=Math.floor(-K/2/CA/N6),YA=Math.ceil(K/2/CA/N6),BA=Math.floor(-T/2/CA/N6),uA=Math.ceil(T/2/CA/N6);for(let PA=VA;PA<YA;PA++)for(let zA=BA;zA<uA;zA++)ZA[`${PA}_${zA}`]={hasFloor:!0,tex:X.floorTextureId};let fA={id:oJ("window"),wallId:r[0].id,offset:0.3,width:1.2,height:1.2,sillHeight:0.9,type:"grid2x2",kind:"window"},dA={id:oJ("window"),wallId:r[0].id,offset:0.7,width:1.2,height:1.2,sillHeight:0.9,type:"grid2x2",kind:"window"},TA={id:oJ("door"),wallId:r[1].id,offset:0.5,width:1,height:2.15,type:"solid",kind:"door",doorTextureId:q};J((PA)=>PA.map((zA)=>zA.id===H?{...zA,walls:r,windows:[fA,dA],doors:[TA],floorChunks:ZA}:zA))},className:"h-9 rounded-xl bg-[#1e1e22] border border-[#2a2a30] text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-[#2a2a30]",children:[RA(oH,{size:14}),"Voorbeeld huis"]}),DA("button",{onClick:()=>i("textures"),className:"h-9 rounded-xl bg-[#1e1e22] border border-[#2a2a30] text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-[#2a2a30]",children:[RA(x8,{size:14}),"Textures"]})]}),S6&&DA("div",{className:"rounded-full bg-violet-500 text-white text-[11px] px-3 py-1.5 flex items-center gap-2",children:[RA("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"}),"Rechts-klik schilderen actief • ",L?L:"GEEN VLOER (gat)"]})]}),DA("div",{className:"p-2.5 border-b border-[#25252a] space-y-2",children:[RA("div",{className:"text-[10px] tracking-widest text-zinc-500",children:"TRAPPEN • Snap 0.2m • Hout open"}),RA("div",{className:"grid grid-cols-3 gap-1.5",children:VD.map((K)=>{let T=K.icon,p=f===K.id;return DA("button",{onClick:()=>S(K.id),className:`rounded-xl border p-2 text-left ${p?"bg-violet-500/15 border-violet-500/30":"bg-[#0a0a0b] border-[#25252a] hover:bg-[#15151a]"}`,children:[RA(T,{size:14,className:p?"text-violet-300":"text-zinc-400"}),RA("div",{className:"text-[10px] font-semibold mt-1",children:K.name}),RA("div",{className:"text-[9px] text-zinc-500 leading-tight",children:K.desc})]},K.id)})})]}),RA("div",{className:"p-2.5 flex-1 overflow-y-auto custom-scroll space-y-3",children:DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-[#25252a] p-2.5",children:[RA("div",{className:"text-[11px] font-semibold",children:"Grid 0.2m vloer"}),RA("div",{className:"text-[10px] text-zinc-500 mt-1",children:"Rechts-klik ingedrukt schilderen in 2D en 3D. Elk chunk 0.2x0.2 (5×5 per vak) krijgt geselecteerde texture of gat. Geen auto-plafond: plaats vloer op de verdieping erboven."})]})})]}),DA("div",{className:"flex-1 flex flex-col bg-[#0a0a0b]",children:[DA("div",{className:"h-9 flex items-center px-2 border-b border-[#25252a] bg-[#121214] gap-1 shrink-0",children:[DA("div",{className:"text-[10px] text-zinc-500",children:["2D • ",X.name," • ",JJ.length," muren • Rechts-klik = vloer schilderen • Shift+drag = box select"]}),DA("div",{className:"ml-auto flex items-center gap-1 text-[10px] text-zinc-500",children:[RA(G9,{size:12}),"Snap 0.2m"]})]}),DA("div",{ref:iA,className:"flex-1 relative overflow-hidden",children:[RA("canvas",{ref:nA,className:"absolute inset-0 w-full h-full touch-none"}),DA("div",{className:"absolute bottom-3 left-3 rounded-full bg-[#121214] border border-[#25252a] px-3 h-7 flex items-center gap-2 text-[10px] text-zinc-400",children:[RA("div",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),X.name," • Elev ",U.elevation.toFixed(2),"m • Chunks ",Object.keys(X.floorChunks||{}).length," • Rechts-klik schilder"]}),(selD||selW||selS)&&DA("div",{className:"absolute top-2 right-2 rounded-2xl bg-[#121214]/95 border border-[#25252a] p-3 w-[250px] max-h-[72%] overflow-y-auto custom-scroll space-y-2 shadow-xl z-20",onPointerDown:(YA)=>YA.stopPropagation(),onPointerUp:(YA)=>YA.stopPropagation(),onPointerMove:(YA)=>YA.stopPropagation(),children:selD?doorInsp(selD):selW?winInsp(selW):stairInsp(selS)}),Z==="floor"&&DA("div",{className:"absolute bottom-3 right-3 rounded-2xl bg-[#121214]/95 border border-[#25252a] p-3 w-[240px] space-y-2.5 shadow-xl",onPointerDown:(YA)=>YA.stopPropagation(),onPointerUp:(YA)=>YA.stopPropagation(),children:[DA("div",{className:"space-y-1",children:[DA("div",{className:"flex items-center justify-between text-[10px]",children:[RA("span",{className:"text-zinc-400",children:"Textuur grootte"}),RA("span",{className:"text-violet-300 font-mono",children:[Number(k).toFixed(1),"m"]})]}),RA("input",{type:"range",min:0.2,max:5,step:0.1,value:k,onChange:(YA)=>O(parseFloat(YA.target.value)),className:"w-full h-1.5 accent-violet-500 cursor-pointer"})]}),DA("div",{className:"space-y-1",children:[DA("div",{className:"flex items-center justify-between text-[10px]",children:[RA("span",{className:"text-zinc-400",children:"Kwast grootte"}),RA("span",{className:"text-violet-300 font-mono",children:[Number(j).toFixed(1),"×",Number(j).toFixed(1),"m"]})]}),RA("input",{type:"range",min:0.2,max:5,step:0.2,value:j,onChange:(YA)=>x(parseFloat(YA.target.value)),className:"w-full h-1.5 accent-violet-500 cursor-pointer"})]})]})]}),DA("div",{className:"h-[48%] border-t border-[#25252a] bg-[#0e0e10] relative",children:[DA("div",{className:"h-8 flex items-center px-3 border-b border-[#25252a] bg-[#121214] gap-2",children:[RA(pE,{size:14,className:"text-violet-400"}),RA("span",{className:"text-[11px] font-semibold tracking-wide",children:"3D VIEW • V9 • Vloer 0.2x0.2 • 5×5 per meter • Rechts-klik = vloer tekenen"})]}),RA("canvas",{ref:w,className:"absolute inset-0 top-8 w-full h-[calc(100%-32px)]"}),S6&&DA("div",{className:"absolute top-10 left-3 bg-violet-600 text-white text-[11px] px-3 py-1 rounded-full",children:["VLOER SCHILDEREN • ",L||"GAT"]})]})]}),DA("div",{className:"w-[360px] shrink-0 border-l border-[#25252a] bg-[#121214] flex flex-col",children:[RA("div",{className:"h-10 flex items-center border-b border-[#25252a] shrink-0 overflow-x-auto",children:[{id:"vloer",label:"Vloer",icon:z8},{id:"floor",label:"Verdieping",icon:M0},{id:"walls",label:"Muren",icon:x8},{id:"openings",label:"Openingen",icon:lE},{id:"textures",label:"Textures",icon:B9},{id:"stairs",label:"Trappen",icon:O0}].map((K)=>{let T=c===K.id,p=K.icon;return DA("button",{onClick:()=>i(K.id),className:`flex-1 h-full flex items-center justify-center gap-1 text-[11px] font-medium border-b-2 px-2 whitespace-nowrap ${T?"border-violet-500 text-white bg-[#1a1a1e]":"border-transparent text-zinc-500 hover:text-zinc-300"}`,children:[RA(p,{size:12}),K.label]},K.id)})}),DA("div",{className:"flex-1 overflow-y-auto custom-scroll",children:[c==="vloer"&&DA("div",{className:"p-3 space-y-4",children:[DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-violet-500/30 p-3 space-y-3",children:[DA("div",{className:"text-[11px] font-semibold text-violet-200",children:"Vloer instellingen"}),DA("div",{className:"space-y-1.5",children:[DA("div",{className:"flex items-center justify-between text-[11px]",children:[RA("span",{className:"text-zinc-300",children:"Textuur grootte"}),RA("span",{className:"text-violet-300 font-mono",children:[Number(k).toFixed(1)," × ",Number(k).toFixed(1)," m"]})]}),RA("input",{type:"range",min:0.2,max:5,step:0.1,value:k,onChange:(YA)=>O(parseFloat(YA.target.value)),className:"w-full h-2 accent-violet-500 cursor-pointer"})]}),DA("div",{className:"space-y-1.5",children:[DA("div",{className:"flex items-center justify-between text-[11px]",children:[RA("span",{className:"text-zinc-300",children:"Kwast grootte"}),RA("span",{className:"text-violet-300 font-mono",children:[Number(j).toFixed(1)," × ",Number(j).toFixed(1)," m"]})]}),RA("input",{type:"range",min:0.2,max:5,step:0.2,value:j,onChange:(YA)=>x(parseFloat(YA.target.value)),className:"w-full h-2 accent-violet-500 cursor-pointer"})]}),RA("div",{className:"text-[9px] text-zinc-500",children:"Textuur: hoe groot één tegel in meters is. Kwast: 0.2×0.2 tot 5×5 m (1 tot 25 vakjes)."})]}),DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-violet-500/20 p-3 space-y-2",children:[DA("div",{className:"text-[11px] font-semibold text-violet-200 flex items-center gap-2",children:[RA(z8,{size:14}),"VLOER TAB • 0.2x0.2 • 5×5 per meter"]}),DA("div",{className:"text-[10px] text-zinc-400 leading-relaxed",children:["• Nieuw grid: floorChunks Map per verdieping, key gx,gz (0.2 stappen). Elk chunk {hasFloor, tex}.",RA("br",{}),"• Rendering: elke chunk met hasFloor = PlaneGeometry 0.2x0.2 y=elevation+0.02 met tex. Zonder vloer = open gat.",RA("br",{}),"• Plafond = vloer van de verdieping erboven. Muren maken geen plafond.",RA("br",{}),"• Geen auto holes voor trappen meer, alleen floorChunks holes.",RA("br",{}),"• Tekenen: rechtermuisknop ingedrukt isDrawing, raycast naar vloer, bepaal chunk onder cursor, set naar geselecteerde tex of hasFloor false.",RA("br",{}),"• Trap snap 0.2 en hout open netjes behouden, scherpe hoeken perfect."]})]}),DA("div",{className:"space-y-2",children:[RA("div",{className:"text-[10px] tracking-widest text-zinc-500",children:"GESELECTEERDE VLOER TEXTURE"}),DA("div",{className:"grid grid-cols-3 gap-2",children:[CZ.slice(0,6).map((K)=>{let T=L===K.id;return DA("button",{onClick:()=>u(K.id),className:`rounded-xl overflow-hidden border-2 text-left ${T?"border-violet-500":"border-[#25252a] hover:border-zinc-600"}`,children:[RA("div",{className:"aspect-square",children:RA("img",{src:K.src,className:"w-full h-full object-cover"})}),DA("div",{className:"bg-[#0a0a0b] p-1.5",children:[RA("div",{className:"text-[10px] font-semibold text-white truncate",children:K.name}),RA("div",{className:"text-[9px] text-zinc-500",children:K.category})]}),T&&RA("div",{className:"bg-violet-500 text-white text-[9px] text-center py-0.5",children:"ACTIEF"})]},K.id)}),DA("button",{onClick:()=>u(null),className:`rounded-xl overflow-hidden border-2 flex flex-col items-center justify-center aspect-[3/4] ${L===null?"border-red-500 bg-red-500/10":"border-[#25252a] bg-[#0a0a0b] hover:bg-[#1a1a1e]"}`,children:[RA("div",{className:"w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/30 grid place-items-center",children:RA(bE,{size:18,className:"text-red-400"})}),RA("div",{className:"mt-2 text-[11px] font-bold text-red-300",children:"Geen vloer"}),RA("div",{className:"text-[9px] text-zinc-500",children:"Open gat"}),L===null&&RA("div",{className:"mt-1 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full",children:"ACTIEF"})]})]})]}),DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-[#25252a] p-3 space-y-2",children:[DA("div",{className:"text-[11px] font-semibold",children:["Huidige verdieping: ",X.name]}),DA("div",{className:"text-[10px] text-zinc-500",children:["Chunks bewerkt: ",Object.keys(X.floorChunks||{}).length," • Default: ",X.floorTextureId]}),DA("div",{className:"flex gap-2",children:[RA("button",{onClick:()=>{z6(),J((K)=>K.map((T)=>T.id===H?{...T,floorChunks:{}}:T))},className:"flex-1 h-8 rounded-full bg-[#1a1a1e] border border-[#2a2a30] text-[11px]",children:"Reset naar vol"}),RA("button",{onClick:()=>{z6();let K=-6,T=6,p=-6,o=6;if(X.walls.length>0){let uA=1/0,fA=-1/0,dA=1/0,TA=-1/0;X.walls.forEach((n)=>{uA=Math.min(uA,n.x1,n.x2),fA=Math.max(fA,n.x1,n.x2),dA=Math.min(dA,n.y1,n.y2),TA=Math.max(TA,n.y1,n.y2)});let PA=(fA-uA)/CA,zA=(maxY-minY)/CA}let r={},ZA=Math.floor(-6/N6),VA=Math.ceil(6/N6),YA=Math.floor(-6/N6),BA=Math.ceil(6/N6);for(let uA=ZA;uA<VA;uA++)for(let fA=YA;fA<BA;fA++)if(L===null)r[`${uA}_${fA}`]={hasFloor:!1,tex:X.floorTextureId};else r[`${uA}_${fA}`]={hasFloor:!0,tex:L};J((uA)=>uA.map((fA)=>fA.id===H?{...fA,floorChunks:r}:fA))},className:"flex-1 h-8 rounded-full bg-white text-black text-[11px] font-semibold",children:"Vul 12x12m"})]}),RA("div",{className:"text-[9px] text-zinc-500",children:"Rechts-klik slepen = schilderen. Elke chunk waar cursor overheen gaat wordt geselecteerde vloer. Trap snap 0.2m blijft, hout open netjes."})]}),DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-[#25252a] p-3",children:[RA("div",{className:"text-[11px] font-semibold",children:"Debug chunks"}),DA("div",{className:"mt-2 max-h-[160px] overflow-auto text-[9px] font-mono text-zinc-500 space-y-0.5",children:[Object.entries(X.floorChunks||{}).slice(0,30).map(([K,T])=>DA("div",{children:[K," → ",T.hasFloor?"✓":"✗"," ",T.tex.slice(0,12)]},K)),Object.keys(X.floorChunks||{}).length===0&&RA("div",{children:"Geen overschreven chunks – alles vol vloer (default true)."})]})]})]}),c==="floor"&&DA("div",{className:"p-3 space-y-3",children:[V.map((K,T)=>DA("div",{onClick:()=>{E(K.id)},className:`rounded-xl border p-3 cursor-pointer ${H===K.id?"bg-violet-500/10 border-violet-500/30":"bg-[#0a0a0b] border-[#25252a] hover:bg-[#15151a]"}`,children:[DA("div",{className:"flex justify-between items-center",children:[RA("div",{className:"text-[12px] font-semibold",children:K.name}),DA("div",{className:"text-[10px] text-zinc-500 font-mono",children:[K.elevation.toFixed(2),"m • ",K.height.toFixed(2),"m"]})]}),DA("div",{className:"text-[10px] text-zinc-500 mt-2",children:[K.walls.length," muren • ",K.stairs.length," trappen • chunks ",Object.keys(K.floorChunks||{}).length]})]},K.id)),DA("button",{onClick:xA,className:"w-full h-9 rounded-xl bg-white text-black text-[11px] font-semibold flex items-center justify-center gap-1.5",children:[RA(gE,{size:14}),"Nieuwe verdieping (lege vloer — schilderen = plafond eronder)"]})]}),c==="walls"&&RA("div",{className:"p-3 space-y-2",children:JJ.map((K)=>{let T=ZH("wall",K.id),p=Math.hypot(K.x2-K.x1,K.y2-K.y1)/CA;return RA("div",{onClick:()=>s([{type:"wall",id:K.id}]),className:`rounded-xl border p-2.5 cursor-pointer flex gap-2 ${T?"bg-amber-500/10 border-amber-500/30":"bg-[#0a0a0b] border-[#25252a]"}`,children:RA("div",{className:"flex-1",children:DA("div",{className:"text-[11px] font-medium",children:[p.toFixed(2),"m • ",K.id.slice(0,8)]})})},K.id)})}),c==="openings"&&RA("div",{className:"p-3 space-y-3",children:[selD?doorInsp(selD):selW?winInsp(selW):DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-[#25252a] p-3 space-y-2",children:[RA("div",{className:"text-[11px] font-semibold",children:"Nieuwe opening"}),RA("div",{className:"text-[10px] text-zinc-500",children:"Kies type, zet tool Deur of Raam, klik op een muur. Daarna alle schuiven in dit paneel."}),RA("div",{className:"text-[10px] text-zinc-400",children:"Raamtype"}),chips(Y,WD,(id)=>P(id)),RA("div",{className:"text-[10px] text-zinc-400",children:"Deurtype"}),chips(N,DD,(id)=>I(id))]}),RA("div",{className:"text-[10px] tracking-widest text-zinc-500",children:"GEPLAATST"}),[...rH,...Q8].map((K)=>{let T=ZH(K.kind,K.id);return RA("div",{onClick:()=>s([{type:K.kind,id:K.id}]),className:`rounded-xl border p-2.5 cursor-pointer ${T?"bg-blue-500/10 border-blue-500/30":"bg-[#0a0a0b] border-[#25252a]"}`,children:DA("div",{className:"flex justify-between text-[11px]",children:[DA("span",{className:K.kind==="window"?"text-blue-300":"text-orange-300",children:[K.kind," • ",K.type]}),DA("span",{className:"text-zinc-500 font-mono",children:[K.width.toFixed(2)," x ",K.height.toFixed(2),"m"]})]})},K.id)})]}),c==="stairs"&&DA("div",{className:"p-3 space-y-3",children:[selS?stairInsp(selS):DA("div",{className:"rounded-xl bg-[#0a0a0b] border border-violet-500/20 p-3",children:[DA("div",{className:"text-[11px] font-semibold text-violet-200",children:["Trappen • ",d8.length]}),RA("div",{className:"text-[10px] text-zinc-500 mt-1",children:"Kies een type links, klik in 2D om te plaatsen. Selecteer daarna voor leuning, treden, breedte en rotatie."})]}),d8.map((K)=>{let T=ZH("stair",K.id);return RA("div",{onClick:()=>s([{type:"stair",id:K.id}]),className:`rounded-xl border p-2.5 cursor-pointer ${T?"bg-violet-500/10 border-violet-500/30":"bg-[#0a0a0b] border-[#25252a]"}`,children:DA("div",{className:"text-[11px] font-medium",children:[K.type," • ",K.width.toFixed(1),"m • ",K.treads||14," tred • ",K.rotation,"°"]})},K.id)})]}),c==="textures"&&DA("div",{className:"p-3 space-y-3",children:[RA("div",{className:"flex gap-1 bg-[#0a0a0b] border border-[#25252a] rounded-full p-1",children:[{id:"wall",label:"Muur"},{id:"floor",label:"Vloer"},{id:"ceiling",label:"Plafond"},{id:"door",label:"Deur"}].map((K)=>{let T=AA===K.id;return RA("button",{onClick:()=>t(K.id),className:`flex-1 h-7 rounded-full text-[10px] font-semibold ${T?"bg-white text-black":"text-zinc-400"}`,children:K.label},K.id)})}),AA==="wall"&&RA("div",{className:"grid grid-cols-2 gap-2",children:TQ.map((K)=>DA("button",{onClick:()=>{l(K.id),d(K.id)},className:"rounded-lg overflow-hidden border border-[#25252a]",children:[RA("img",{src:K.src,className:"w-full h-16 object-cover"}),RA("div",{className:"text-[10px] p-1 bg-[#0a0a0b]",children:K.name})]},K.id))}),AA==="floor"&&RA("div",{className:"grid grid-cols-2 gap-2",children:CZ.map((K)=>DA("button",{onClick:()=>NA(K.id),className:"rounded-lg overflow-hidden border border-[#25252a]",children:[RA("img",{src:K.src,className:"w-full h-16 object-cover"}),RA("div",{className:"text-[10px] p-1 bg-[#0a0a0b]",children:K.name})]},K.id))}),AA==="ceiling"&&RA("div",{className:"grid grid-cols-2 gap-2",children:wQ.map((K)=>DA("button",{onClick:()=>KA(K.id),className:"rounded-lg overflow-hidden border border-[#25252a]",children:[RA("img",{src:K.src,className:"w-full h-16 object-cover"}),RA("div",{className:"text-[10px] p-1 bg-[#0a0a0b]",children:K.name})]},K.id))}),AA==="door"&&RA("div",{className:"grid grid-cols-2 gap-2",children:fQ.map((K)=>DA("button",{onClick:()=>pA(K.id),className:"rounded-lg overflow-hidden border border-[#25252a]",children:[RA("img",{src:K.src,className:"w-full h-16 object-cover"}),RA("div",{className:"text-[10px] p-1 bg-[#0a0a0b]",children:K.name})]},K.id))})]})]}),DA("div",{className:"p-3 border-t border-[#25252a] bg-[#0a0a0b] flex items-center gap-2.5",children:[DA("div",{className:"flex -space-x-2",children:[RA("div",{className:"w-9 h-9 rounded-full bg-violet-500/20 border-2 border-[#0a0a0b] grid place-items-center",children:RA(z8,{size:14,className:"text-violet-300"})}),RA("img",{src:CZ.find((K)=>K.id===L)?.src||FZ,className:"w-9 h-9 rounded-full object-cover border-2 border-[#0a0a0b]"})]}),DA("div",{className:"flex-1 leading-tight",children:[DA("div",{className:"text-[11px] font-semibold text-zinc-100",children:["V9 • 0.2x0.2 • ",L||"Geen vloer"," • ",Object.keys(X.floorChunks||{}).length," chunks • Geen auto holes"]}),RA("div",{className:"text-[10px] text-zinc-500",children:"Rechts-klik schilderen • Trap snap 0.2 • Scherpe hoeken"})]})]})]})]}),RA("style",{children:`
        .custom-scroll::-webkit-scrollbar { width:5px; height:5px; }
        .custom-scroll::-webkit-scrollbar-thumb { background:#25252a; border-radius:999px; }
        .custom-scroll::-webkit-scrollbar-track { background:#0a0a0b; }
        input[type=range]{accent-color:#8b5cf6;cursor:pointer;height:6px;background:transparent;}
        input[type=range]::-webkit-slider-runnable-track{height:4px;background:#2a2a30;border-radius:999px;}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:#a78bfa;border:2px solid #1a1a1e;margin-top:-5px;cursor:pointer;}
      `})]})}function dP(){return RA(mP,{})}yQ.createRoot(document.getElementById("map-studio-root")).render(RA(jQ.default.StrictMode,{children:RA(dP,{})}));
