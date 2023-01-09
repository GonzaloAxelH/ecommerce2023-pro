(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64194],{58236:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/overlays/notifications/with_buttons_below",function(){return __webpack_require__(31826)}])},31826:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(84539),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25652);function Example(){let[show,setShow]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex w-full flex-col items-center space-y-4 sm:items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u,{show:show,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-10 w-10 rounded-full",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-3 w-0 flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-sm font-medium text-gray-900",children:"Emilia Gates"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Sent you an invite to connect."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-4 flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Accept"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Decline"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-4 flex flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick(){setShow(!1)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Close"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"h-5 w-5","aria-hidden":"true"})]})})]})})})})})})})}},84539:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{u:function(){return Je}});var s,react=__webpack_require__(67294),render=__webpack_require__(12351),open_closed=__webpack_require__(16567),match=__webpack_require__(32984),use_is_mounted=__webpack_require__(14879),use_iso_morphic_effect=__webpack_require__(16723),use_latest_value=__webpack_require__(3855),use_server_handoff_complete=__webpack_require__(82180),use_sync_refs=__webpack_require__(23784),disposables=__webpack_require__(9362);function v(t,...e){t&&e.length>0&&t.classList.add(...e)}function f(t,...e){t&&e.length>0&&t.classList.remove(...e)}var use_disposables=__webpack_require__(94192),use_event=__webpack_require__(73781);function P(i=""){return i.split(" ").filter(e=>e.trim().length>1)}let A=(0,react.createContext)(null);A.displayName="TransitionContext";var Ce=((s=Ce||{}).Visible="visible",s.Hidden="hidden",s);let transition_M=(0,react.createContext)(null);function I(i){return"children"in i?I(i.children):i.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function ne(i,e){let s=(0,use_latest_value.E)(i),n=(0,react.useRef)([]),m=(0,use_is_mounted.t)(),R=(0,use_disposables.G)(),b=(0,use_event.z)((l,r=render.l4.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);-1!==t&&((0,match.E)(r,{[render.l4.Unmount](){n.current.splice(t,1)},[render.l4.Hidden](){n.current[t].state="hidden"}}),R.microTask(()=>{var o;!I(n)&&m.current&&(null==(o=s.current)||o.call(s))}))}),E=(0,use_event.z)(l=>{let r=n.current.find(({el:t})=>t===l);return r?"visible"!==r.state&&(r.state="visible"):n.current.push({el:l,state:"visible"}),()=>b(l,render.l4.Unmount)}),S=(0,react.useRef)([]),u=(0,react.useRef)(Promise.resolve()),p=(0,react.useRef)({enter:[],leave:[],idle:[]}),d=(0,use_event.z)((l,r,t)=>{S.current.splice(0),e&&(e.chains.current[r]=e.chains.current[r].filter(([o])=>o!==l)),null==e||e.chains.current[r].push([l,new Promise(o=>{S.current.push(o)})]),null==e||e.chains.current[r].push([l,new Promise(o=>{Promise.all(p.current[r].map(([f,a])=>a)).then(()=>o())})]),"enter"===r?u.current=u.current.then(()=>null==e?void 0:e.wait.current).then(()=>t(r)):t(r)}),v=(0,use_event.z)((l,r,t)=>{Promise.all(p.current[r].splice(0).map(([o,f])=>f)).then(()=>{var o;null==(o=S.current.shift())||o()}).then(()=>t(r))});return(0,react.useMemo)(()=>({children:n,register:E,unregister:b,onStart:d,onStop:v,wait:u,chains:p}),[E,b,n,d,v,p,u])}function Ee(){}transition_M.displayName="NestingContext";let Se=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(i){var s;let e={};for(let n of Se)e[n]=null!=(s=i[n])?s:Ee;return e}let ie=render.AN.RenderStrategy,oe=(0,render.yV)(function(e,s){var i;let e1,{beforeEnter:n,afterEnter:m,beforeLeave:R,afterLeave:b,enter:E,enterFrom:S,enterTo:u,entered:p,leave:d,leaveFrom:v1,leaveTo:l,...r}=e,t=(0,react.useRef)(null),o=(0,use_sync_refs.T)(t,s),f1=r.unmount?render.l4.Unmount:render.l4.Hidden,{show:a,appear:x,initial:se}=function(){let i=(0,react.useContext)(A);if(null===i)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}(),[h,_]=(0,react.useState)(a?"visible":"hidden"),K=function(){let i=(0,react.useContext)(transition_M);if(null===i)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}(),{register:D,unregister:V}=K,j=(0,react.useRef)(null);(0,react.useEffect)(()=>D(t),[D,t]),(0,react.useEffect)(()=>{if(f1===render.l4.Hidden&&t.current){if(a&&"visible"!==h){_("visible");return}return(0,match.E)(h,{hidden:()=>V(t),visible:()=>D(t)})}},[h,t,D,V,a,f1]);let U=(0,use_latest_value.E)({enter:P(E),enterFrom:P(S),enterTo:P(u),entered:P(p),leave:P(d),leaveFrom:P(v1),leaveTo:P(l)}),w=(i={beforeEnter:n,afterEnter:m,beforeLeave:R,afterLeave:b},e1=(0,react.useRef)(re(i)),(0,react.useEffect)(()=>{e1.current=re(i)},[i]),e1),k=(0,use_server_handoff_complete.H)();(0,react.useEffect)(()=>{if(k&&"visible"===h&&null===t.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,h,k]);let G=se&&!x,le=!k||G||j.current===a?"idle":a?"enter":"leave",ae=(0,use_event.z)(C=>(0,match.E)(C,{enter:()=>w.current.beforeEnter(),leave:()=>w.current.beforeLeave(),idle(){}})),ue=(0,use_event.z)(C=>(0,match.E)(C,{enter:()=>w.current.afterEnter(),leave:()=>w.current.afterLeave(),idle(){}})),L=ne(()=>{_("hidden"),V(t)},K);(function({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,use_is_mounted.t)(),c=(0,use_disposables.G)(),r=(0,use_latest_value.E)(t);(0,use_iso_morphic_effect.e)(()=>{let e=(0,disposables.k)();c.add(e.dispose);let n=i.current;if(n&&"idle"!==r.current&&a.current){var t,e1,n1,a1;let e2,i1,m,d,u1,o1,r1;return e.dispose(),s.current(r.current),e.add((t=n,e1=o.current,n1="enter"===r.current,a1=()=>{e.dispose(),u.current(r.current)},i1=n1?"enter":"leave",m=(0,disposables.k)(),d=void 0!==a1?(e2={called:!1},(...t)=>{if(!e2.called)return e2.called=!0,a1(...t)}):()=>{},"enter"===i1&&(t.removeAttribute("hidden"),t.style.display=""),u1=(0,match.E)(i1,{enter:()=>e1.enter,leave:()=>e1.leave}),o1=(0,match.E)(i1,{enter:()=>e1.enterTo,leave:()=>e1.leaveTo}),r1=(0,match.E)(i1,{enter:()=>e1.enterFrom,leave:()=>e1.leaveFrom}),f(t,...e1.enter,...e1.enterTo,...e1.enterFrom,...e1.leave,...e1.leaveFrom,...e1.leaveTo,...e1.entered),v(t,...u1,...r1),m.nextFrame(()=>{f(t,...r1),v(t,...o1),function(t,e){let n=(0,disposables.k)();if(!t)return n.dispose;let{transitionDuration:a,transitionDelay:i}=getComputedStyle(t),[m,d]=[a,i].map(o=>{let[r=0]=o.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):1e3*parseFloat(l)).sort((l,g)=>g-l);return r});if(m+d!==0){let o=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),o())})}else e();n.add(()=>e()),n.dispose}(t,()=>(f(t,...u1),v(t,...e1.entered),d()))}),m.dispose)),e.dispose}},[t])})({container:t,classes:U,direction:le,onStart:(0,use_latest_value.E)(C=>{L.onStart(t,C,ae)}),onStop:(0,use_latest_value.E)(C=>{L.onStop(t,C,ue),"leave"!==C||I(L)||(_("hidden"),V(t))})}),(0,react.useEffect)(()=>{G&&(f1===render.l4.Hidden?j.current=null:j.current=a)},[a,G,h]);let B=r;return x&&a&&("undefined"==typeof window||"undefined"==typeof document)&&(B={...B,className:function(...n){return n.filter(Boolean).join(" ")}(r.className,...U.current.enter,...U.current.enterFrom)}),react.createElement(transition_M.Provider,{value:L},react.createElement(open_closed.up,{value:(0,match.E)(h,{visible:open_closed.ZM.Open,hidden:open_closed.ZM.Closed})},(0,render.sY)({ourProps:{ref:o},theirProps:B,defaultTag:"div",features:ie,visible:"visible"===h,name:"Transition.Child"})))}),J=(0,render.yV)(function(e,s){let{show:n,appear:m=!1,unmount:R,...b}=e,E=(0,react.useRef)(null),S=(0,use_sync_refs.T)(E,s);(0,use_server_handoff_complete.H)();let u=(0,open_closed.oJ)();if(void 0===n&&null!==u&&(n=(0,match.E)(u,{[open_closed.ZM.Open]:!0,[open_closed.ZM.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=(0,react.useState)(n?"visible":"hidden"),v=ne(()=>{d("hidden")}),[l,r]=(0,react.useState)(!0),t=(0,react.useRef)([n]);(0,use_iso_morphic_effect.e)(()=>{!1!==l&&t.current[t.current.length-1]!==n&&(t.current.push(n),r(!1))},[t,n]);let o=(0,react.useMemo)(()=>({show:n,appear:m,initial:l}),[n,m,l]);(0,react.useEffect)(()=>{if(n)d("visible");else if(I(v)){let a=E.current;if(!a)return;let x=a.getBoundingClientRect();0===x.x&&0===x.y&&0===x.width&&0===x.height&&d("hidden")}else d("hidden")},[n,v]);let f={unmount:R};return react.createElement(transition_M.Provider,{value:v},react.createElement(A.Provider,{value:o},(0,render.sY)({ourProps:{...f,as:react.Fragment,children:react.createElement(oe,{ref:S,...f,...b})},theirProps:{},defaultTag:react.Fragment,features:ie,visible:"visible"===p,name:"Transition"})))}),ye=(0,render.yV)(function(e,s){let n=null!==(0,react.useContext)(A),m=null!==(0,open_closed.oJ)();return react.createElement(react.Fragment,null,!n&&m?react.createElement(J,{ref:s,...e}):react.createElement(oe,{ref:s,...e}))}),Je=Object.assign(J,{Child:ye,Root:J})},94192:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{G:function(){return p}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9362);function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}},73781:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return o}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3855);let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])}},14879:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{t:function(){return f}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},16723:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let s=__webpack_require__(43393).s?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},3855:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{r.current=e},[e]),r}},82180:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:function(){return a}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let r={serverHandoffComplete:!1};function a(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r.serverHandoffComplete);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!0!==e&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!1===r.serverHandoffComplete&&(r.serverHandoffComplete=!0)},[]),e}},23784:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{T:function(){return y},h:function(){return T}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)});return t.every(e=>null==e||(null==e?void 0:e[u]))?void 0:c}},16567:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ZM:function(){return p},oJ:function(){return s},up:function(){return C}});var e,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=((e=p||{})[e.Open=0]="Open",e[e.Closed=1]="Closed",e);function s(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}},9362:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{k:function(){return m}});var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(81021);function m(){let n=[],i=[],r={enqueue(e){i.push(e)},addEventListener:(e,t,a,o)=>(e.addEventListener(t,a,o),r.add(()=>e.removeEventListener(t,a,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>r.requestAnimationFrame(()=>r.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.Y)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0){let[a]=n.splice(t,1);a()}}),dispose(){for(let e of n.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()}};return r}},32984:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:function(){return u}})},81021:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}__webpack_require__.d(__webpack_exports__,{Y:function(){return t}})},12351:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{AN:function(){return S},l4:function(){return j},oA:function(){return F},sY:function(){return $},yV:function(){return C}});var a,e,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32984),S=((a=S||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),j=((e=j||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function $({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T(t,r);if(n)return p(s,e,a,l);let u=null!=o?o:0;if(2&u){let{static:i=!1,...d}=s;if(i)return p(d,e,a,l)}if(1&u){let{unmount:i1=!0,...d1}=s;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(i1?0:1,{0:()=>null,1:()=>p({...d1,hidden:!0,style:{display:"none"}},e,a,l)})}return p(s,e,a,l)}function p(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m(r,["unmount","static"]),u=void 0!==r.ref?{[l]:r.ref}:{},i="function"==typeof n?n(t):n;s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))"boolean"==typeof g&&(f=!0),!0===g&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "))}if(o===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(F(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},T(i.props,F(m(s,["ref"]))),d,u,function(...r){return{ref:r.every(t=>null==t)?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(i.ref,u.ref)))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o,Object.assign({},m(s,["ref"]),o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function T(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&"function"==typeof o[n]?(null!=e[n]||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o1 in e)Object.assign(t,{[o1](n,...l){for(let u of e[o1]){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function C(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function F(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}},43393:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return e}});let e="undefined"==typeof window||"undefined"==typeof document},25652:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))});__webpack_exports__.Z=ForwardRef}},function(__webpack_require__){__webpack_require__.O(0,[49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=58236)}),_N_E=__webpack_require__.O()}]);