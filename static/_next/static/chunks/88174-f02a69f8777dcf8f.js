"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88174,574,98688,85450],{39516:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return F},f:function(){return k}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19946),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23784),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function k(){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(r=>(t(o=>[...o,r]),()=>t(o=>{let s=o.slice(),p=s.indexOf(r);return -1!==p&&s.splice(p,1),s}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:a},e.children)},[t])]}let F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(t,c){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.M)(),{id:i=`headlessui-description-${e}`,...a}=t,r=function u(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===n){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return n}(),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.T)(c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.e)(()=>r.register(i),[i,r.register]);let s={ref:o,...r.props,id:i};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})},59810:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return mt}});var t,e,r,e1,react=__webpack_require__(67294),match=__webpack_require__(32984),render=__webpack_require__(12351),use_sync_refs=__webpack_require__(23784),keyboard=__webpack_require__(61363),bugs=__webpack_require__(64103),use_id=__webpack_require__(19946),use_server_handoff_complete=__webpack_require__(82180),internal_hidden=__webpack_require__(46045),focus_management=__webpack_require__(84575),use_event=__webpack_require__(73781),use_tab_direction=__webpack_require__(70638),use_is_mounted=__webpack_require__(14879),use_owner=__webpack_require__(51074),use_event_listener=__webpack_require__(14007),micro_task=__webpack_require__(81021),use_watch=__webpack_require__(96599),use_disposables=__webpack_require__(94192),A=((t=A||{})[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t);let de=Object.assign((0,render.yV)(function(u,e){let l=(0,react.useRef)(null),a=(0,use_sync_refs.T)(l,e),{initialFocus:m,containers:t,features:n=30,...E}=u;(0,use_server_handoff_complete.H)()||(n=1);let s=(0,use_owner.i)(l);!function({ownerDocument:r},u){let e=(0,react.useRef)(null);(0,use_event_listener.O)(null==r?void 0:r.defaultView,"focusout",a=>{!u||e.current||(e.current=a.target)},!0),(0,use_watch.q)(()=>{u||((null==r?void 0:r.activeElement)===(null==r?void 0:r.body)&&(0,focus_management.C5)(e.current),e.current=null)},[u]);let l=(0,react.useRef)(!1);(0,react.useEffect)(()=>(l.current=!1,()=>{l.current=!0,(0,micro_task.Y)(()=>{l.current&&((0,focus_management.C5)(e.current),e.current=null)})}),[])}({ownerDocument:s},Boolean(16&n));let S=function({ownerDocument:r,container:u,initialFocus:e},l){let a=(0,react.useRef)(null),m=(0,use_is_mounted.t)();return(0,use_watch.q)(()=>{if(!l)return;let t=u.current;t&&(0,micro_task.Y)(()=>{if(!m.current)return;let n=null==r?void 0:r.activeElement;if(null!=e&&e.current){if((null==e?void 0:e.current)===n){a.current=n;return}}else if(t.contains(n)){a.current=n;return}null!=e&&e.current?(0,focus_management.C5)(e.current):(0,focus_management.jA)(t,focus_management.TO.First)===focus_management.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==r?void 0:r.activeElement})},[l]),a}({ownerDocument:s,container:l,initialFocus:m},Boolean(2&n));!function({ownerDocument:r,container:u,containers:e,previousActiveElement:l},a){let m=(0,use_is_mounted.t)();(0,use_event_listener.O)(null==r?void 0:r.defaultView,"focus",t=>{if(!a||!m.current)return;let n=new Set(null==e?void 0:e.current);n.add(u);let E=l.current;if(!E)return;let s=t.target;s&&s instanceof HTMLElement?h(n,s)?(l.current=s,(0,focus_management.C5)(s)):(t.preventDefault(),t.stopPropagation(),(0,focus_management.C5)(E)):(0,focus_management.C5)(l.current)},!0)}({ownerDocument:s,container:l,containers:t,previousActiveElement:S},Boolean(8&n));let H=(0,use_tab_direction.l)(),R=(0,use_event.z)(o=>{let c=l.current;c&&(0,match.E)(H.current,{[use_tab_direction.N.Forwards]:()=>(0,focus_management.jA)(c,focus_management.TO.First,{skipElements:[o.relatedTarget]}),[use_tab_direction.N.Backwards]:()=>(0,focus_management.jA)(c,focus_management.TO.Last,{skipElements:[o.relatedTarget]})})}),B=(0,use_disposables.G)(),L=(0,react.useRef)(!1);return react.createElement(react.Fragment,null,Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden.A.Focusable}),(0,render.sY)({ourProps:{ref:a,onKeyDown(o){"Tab"==o.key&&(L.current=!0,B.requestAnimationFrame(()=>{L.current=!1}))},onBlur(o){let c=new Set(null==t?void 0:t.current);c.add(l);let p=o.relatedTarget;!p||"true"!==p.dataset.headlessuiFocusGuard&&(h(c,p)||(L.current?(0,focus_management.jA)(l.current,(0,match.E)(H.current,{[use_tab_direction.N.Forwards]:()=>focus_management.TO.Next,[use_tab_direction.N.Backwards]:()=>focus_management.TO.Previous})|focus_management.TO.WrapAround,{relativeTo:o.target}):o.target instanceof HTMLElement&&(0,focus_management.C5)(o.target)))}},theirProps:E,defaultTag:"div",name:"FocusTrap"}),Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden.A.Focusable}))}),{features:A});function h(r,u){var e;for(let l of r)if(null!=(e=l.current)&&e.contains(u))return!0;return!1}var owner=__webpack_require__(15466),use_iso_morphic_effect=__webpack_require__(16723);let i=new Set,r1=new Map;function u(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function l(t){let n=r1.get(t);n&&(null===n["aria-hidden"]?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}var react_dom=__webpack_require__(73935);let e2=(0,react.createContext)(!1);function portal_force_root_P(o){return react.createElement(e2.Provider,{value:o.force},o.children)}var ssr=__webpack_require__(43393);let _=react.Fragment,U=(0,render.yV)(function(u,o){let r=(0,react.useRef)(null),f=(0,use_sync_refs.T)((0,use_sync_refs.h)(a=>{r.current=a}),o),n=(0,use_owner.i)(r),t=function(i){let u=(0,react.useContext)(e2),o=(0,react.useContext)(portal_A),e=(0,use_owner.i)(i),[r,f]=(0,react.useState)(()=>{if(!u&&null!==o||ssr.s)return null;let n=null==e?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(null===e)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return(0,react.useEffect)(()=>{null!==r&&(null!=e&&e.body.contains(r)||null==e||e.body.appendChild(r))},[r,e]),(0,react.useEffect)(()=>{u||null!==o&&f(o.current)},[o,f,u]),r}(r),[l]=(0,react.useState)(()=>{var a;return ssr.s?null:null!=(a=null==n?void 0:n.createElement("div"))?a:null}),b=(0,use_server_handoff_complete.H)(),p=(0,react.useRef)(!1);return(0,use_iso_morphic_effect.e)(()=>{if(p.current=!1,!(!t||!l))return t.contains(l)||(l.setAttribute("data-headlessui-portal",""),t.appendChild(l)),()=>{p.current=!0,(0,micro_task.Y)(()=>{var a;p.current&&t&&l&&(t.removeChild(l),t.childNodes.length<=0&&(null==(a=t.parentElement)||a.removeChild(t)))})}},[t,l]),b&&t&&l?(0,react_dom.createPortal)((0,render.sY)({ourProps:{ref:f},theirProps:u,defaultTag:_,name:"Portal"}),l):null}),j=react.Fragment,portal_A=(0,react.createContext)(null),portal_$=Object.assign(U,{Group:(0,render.yV)(function(u,o){let{target:e,...r}=u,n={ref:(0,use_sync_refs.T)(o)};return react.createElement(portal_A.Provider,{value:e},(0,render.sY)({ourProps:n,theirProps:r,defaultTag:j,name:"Popover.Group"}))})});var description=__webpack_require__(39516),open_closed=__webpack_require__(16567);let a=(0,react.createContext)(()=>{});a.displayName="StackContext";var stack_context_s=((e=stack_context_s||{})[e.Add=0]="Add",e[e.Remove=1]="Remove",e);function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=(0,react.useContext)(a),o=(0,use_event.z)((...t)=>{null==r||r(...t),l(...t)});return(0,use_iso_morphic_effect.e)(()=>{let t=void 0===u||!0===u;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react.createElement(a.Provider,{value:o},i)}var use_outside_click=__webpack_require__(39650),disposables=__webpack_require__(9362),be=((r=be||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),ve=((e1=ve||{})[e1.SetTitleId=0]="SetTitleId",e1);let Ae={0:(t,e)=>t.titleId===e.id?t:{...t,titleId:e.id}},H=(0,react.createContext)(null);function k(t){let e=(0,react.useContext)(H);if(null===e){let r=Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,k),r}return e}function Ce(t,e){return(0,match.E)(e.type,Ae,t,e)}H.displayName="DialogContext";let Le=render.AN.RenderStrategy|render.AN.Static,Me=(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-${s}`,open:a,onClose:o,initialFocus:p,__demoMode:f=!1,...c}=e,[n,i1]=(0,react.useState)(0),l1=(0,open_closed.oJ)();void 0===a&&null!==l1&&(a=(0,match.E)(l1,{[open_closed.ZM.Open]:!0,[open_closed.ZM.Closed]:!1}));let P=(0,react.useRef)(new Set),u1=(0,react.useRef)(null),_=(0,use_sync_refs.T)(u1,r),U=(0,react.useRef)(null),y=(0,use_owner.i)(u1),$=e.hasOwnProperty("open")||null!==l1,Y=e.hasOwnProperty("onClose");if(!$&&!Y)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!Y)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof a)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if("function"!=typeof o)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let g=a?0:1,[h,Q]=(0,react.useReducer)(Ce,{titleId:null,descriptionId:null,panelRef:(0,react.createRef)()}),R=(0,use_event.z)(()=>o(!1)),j=(0,use_event.z)(T=>Q({type:0,id:T})),x=!!(0,use_server_handoff_complete.H)()&&!f&&0===g,w=n>1,X=null!==(0,react.useContext)(H);!function(t,n=!0){(0,use_iso_morphic_effect.e)(()=>{if(!n||!t.current)return;let o=t.current,a=(0,owner.r)(o);if(a){for(let e of(i.add(o),r1.keys()))e.contains(o)&&(l(e),r1.delete(e));return a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;1===i.size&&(r1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e))}}),()=>{if(i.delete(o),i.size>0)a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!r1.has(e)){for(let f of i)if(e.contains(f))return;r1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e)}});else for(let e of r1.keys())l(e),r1.delete(e)}}},[n])}(u1,!!w&&x);let N=(0,use_event.z)(()=>{var b,D;return[...Array.from(null!=(b=null==y?void 0:y.querySelectorAll("body > *, [data-headlessui-portal]"))?b:[]).filter(E=>!(!(E instanceof HTMLElement)||E.contains(U.current)||h.panelRef.current&&E.contains(h.panelRef.current))),null!=(D=h.panelRef.current)?D:u1.current]});(0,use_outside_click.O)(()=>N(),R,x&&!w),(0,use_event_listener.O)(null==y?void 0:y.defaultView,"keydown",T=>{T.defaultPrevented||T.key===keyboard.R.Escape&&0===g&&(w||(T.preventDefault(),T.stopPropagation(),R()))}),function(t,e,r=()=>[document.body]){(0,react.useEffect)(()=>{var c;if(!e||!t)return;let s=(0,disposables.k)(),d=window.pageYOffset;function a(n,i,l){let P=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:l}),s.add(()=>{Object.assign(n.style,{[i]:P})})}let o=t.documentElement,f=(null!=(c=t.defaultView)?c:window).innerWidth-o.clientWidth;if(a(o,"overflow","hidden"),f>0){let n=o.clientWidth-o.offsetWidth;a(o,"paddingRight",`${f-n}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){a(t.body,"marginTop",`-${d}px`),window.scrollTo(0,0);let n1=null;s.addEventListener(t,"click",i=>{if(i.target instanceof HTMLElement)try{let l=i.target.closest("a");if(!l)return;let{hash:P}=new URL(l.href),u=t.querySelector(P);u&&!r().some(_=>_.contains(u))&&(n1=u)}catch{}},!0),s.addEventListener(t,"touchmove",i=>{i.target instanceof HTMLElement&&!r().some(l=>l.contains(i.target))&&i.preventDefault()},{passive:!1}),s.add(()=>{window.scrollTo(0,window.pageYOffset+d),n1&&n1.isConnected&&(n1.scrollIntoView({block:"nearest"}),n1=null)})}return s.dispose},[t,e])}(y,0===g&&!X,N),(0,react.useEffect)(()=>{if(0!==g||!u1.current)return;let T=new IntersectionObserver(b=>{for(let D of b)0===D.boundingClientRect.x&&0===D.boundingClientRect.y&&0===D.boundingClientRect.width&&0===D.boundingClientRect.height&&R()});return T.observe(u1.current),()=>T.disconnect()},[g,u1,R]);let[ee,te]=(0,description.f)(),oe=(0,react.useMemo)(()=>[{dialogState:g,close:R,setTitleId:j},h],[g,h,R,j]),V=(0,react.useMemo)(()=>({open:0===g}),[g]),re={ref:_,id:d,role:"dialog","aria-modal":0===g||void 0,"aria-labelledby":h.titleId,"aria-describedby":ee};return react.createElement(stack_context_M,{type:"Dialog",enabled:0===g,element:u1,onUpdate:(0,use_event.z)((T,b,D)=>{"Dialog"===b&&(0,match.E)(T,{[stack_context_s.Add](){P.current.add(D),i1(E=>E+1)},[stack_context_s.Remove](){P.current.add(D),i1(E=>E-1)}})})},react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_$,null,react.createElement(H.Provider,{value:oe},react.createElement(portal_$.Group,{target:u1},react.createElement(portal_force_root_P,{force:!1},react.createElement(te,{slot:V,name:"Dialog.Description"},react.createElement(de,{initialFocus:p,containers:P,features:x?(0,match.E)(w?"parent":"leaf",{parent:de.features.RestoreFocus,leaf:de.features.All&~de.features.FocusLock}):de.features.None},(0,render.sY)({ourProps:re,theirProps:c,slot:V,defaultTag:"div",features:Le,visible:0===g,name:"Dialog"})))))))),react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:U}))}),we=(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-overlay-${s}`,...a}=e,[{dialogState:o,close:p}]=k("Dialog.Overlay"),f=(0,use_sync_refs.T)(r),c=(0,use_event.z)(l=>{if(l.target===l.currentTarget){if((0,bugs.P)(l.currentTarget))return l.preventDefault();l.preventDefault(),l.stopPropagation(),p()}}),n=(0,react.useMemo)(()=>({open:0===o}),[o]);return(0,render.sY)({ourProps:{ref:f,id:d,"aria-hidden":!0,onClick:c},theirProps:a,slot:n,defaultTag:"div",name:"Dialog.Overlay"})}),mt=Object.assign(Me,{Backdrop:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-backdrop-${s}`,...a}=e,[{dialogState:o},p]=k("Dialog.Backdrop"),f=(0,use_sync_refs.T)(r);(0,react.useEffect)(()=>{if(null===p.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[p.panelRef]);let c=(0,react.useMemo)(()=>({open:0===o}),[o]);return react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_$,null,(0,render.sY)({ourProps:{ref:f,id:d,"aria-hidden":!0},theirProps:a,slot:c,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-panel-${s}`,...a}=e,[{dialogState:o},p]=k("Dialog.Panel"),f=(0,use_sync_refs.T)(r,p.panelRef),c=(0,react.useMemo)(()=>({open:0===o}),[o]),n=(0,use_event.z)(l=>{l.stopPropagation()});return(0,render.sY)({ourProps:{ref:f,id:d,onClick:n},theirProps:a,slot:c,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:we,Title:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-title-${s}`,...a}=e,[{dialogState:o,setTitleId:p}]=k("Dialog.Title"),f=(0,use_sync_refs.T)(r);(0,react.useEffect)(()=>(p(d),()=>p(null)),[d,p]);let c=(0,react.useMemo)(()=>({open:0===o}),[o]);return(0,render.sY)({ourProps:{ref:f,id:d},theirProps:a,slot:c,defaultTag:"h2",name:"Dialog.Title"})}),Description:description.d})},95389:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return F},b:function(){return M}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19946),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23784),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function M(){let[n,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(l=>(r(t=>[...t,l]),()=>r(t=>{let i=t.slice(),a=i.indexOf(l);return -1!==a&&i.splice(a,1),i}))),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:o,slot:e.slot,name:e.name,props:e.props}),[o,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(u.Provider,{value:s},e.children)},[r])]}let F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(r,d){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.M)(),{id:o=`headlessui-label-${e}`,passive:s=!1,...l}=r,t=function c(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(u);if(null===n){let r=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,c),r}return n}(),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.T)(d);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.e)(()=>t.register(o),[o,t.register]);let a={ref:i,...t.props,id:o};return s&&("onClick"in a&&delete a.onClick,"onClick"in l&&delete l.onClick),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:a,theirProps:l,slot:t.slot||{},defaultTag:"label",name:t.name||"Label"})})},65451:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return ut}});var t,t1,react=__webpack_require__(67294),render=__webpack_require__(12351),use_id=__webpack_require__(19946),match=__webpack_require__(32984),use_iso_morphic_effect=__webpack_require__(16723),keyboard=__webpack_require__(61363),focus_management=__webpack_require__(84575),label=__webpack_require__(95389),description=__webpack_require__(39516),use_tree_walker=__webpack_require__(31591),use_sync_refs=__webpack_require__(23784),internal_hidden=__webpack_require__(46045),utils_form=__webpack_require__(18689),owner=__webpack_require__(15466),use_event=__webpack_require__(73781),use_controllable=__webpack_require__(31147),bugs=__webpack_require__(64103),use_latest_value=__webpack_require__(3855),use_disposables=__webpack_require__(94192),he=((t=he||{})[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t);let ke={0(n,r){let t=[...n.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...n,options:(0,focus_management.z2)(t,d=>d.element.current)}},1(n,r){let t=n.options.slice(),d=n.options.findIndex(c=>c.id===r.id);return -1===d?n:(t.splice(d,1),{...n,options:t})}},$=(0,react.createContext)(null);$.displayName="RadioGroupDataContext";let V=(0,react.createContext)(null);function Fe(n,r){return(0,match.E)(r.type,ke,n,r)}V.displayName="RadioGroupActionsContext";let Ce=(0,render.yV)(function(r,t){let d=(0,use_id.M)(),{id:c=`headlessui-radiogroup-${d}`,value:D,defaultValue:O,name:I,onChange:E,by:G=(e,i)=>e===i,disabled:h=!1,...U}=r,T=(0,use_event.z)("string"==typeof G?(e,i)=>(null==e?void 0:e[G])===(null==i?void 0:i[G]):G),[k,F]=(0,react.useReducer)(Fe,{options:[]}),a=k.options,[M,N]=(0,label.b)(),[m,L]=(0,description.f)(),C=(0,react.useRef)(null),W=(0,use_sync_refs.T)(C,t),[l,x]=(0,use_controllable.q)(D,E,O),s=(0,react.useMemo)(()=>a.find(e=>!e.propsRef.current.disabled),[a]),b=(0,react.useMemo)(()=>a.some(e=>T(e.propsRef.current.value,l)),[a,l]),u=(0,use_event.z)(e=>{var o;if(h||T(e,l))return!1;let i=null==(o=a.find(f=>T(f.propsRef.current.value,e)))?void 0:o.propsRef.current;return(null==i||!i.disabled)&&(null==x||x(e),!0)});(0,use_tree_walker.B)({container:C.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let K=(0,use_event.z)(e=>{let i=C.current;if(!i)return;let o=(0,owner.r)(i),f=a.filter(p=>!1===p.propsRef.current.disabled).map(p=>p.element.current);switch(e.key){case keyboard.R.Enter:(0,utils_form.g)(e.currentTarget);break;case keyboard.R.ArrowLeft:case keyboard.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.jA)(f,focus_management.TO.Previous|focus_management.TO.WrapAround)===focus_management.fE.Success){let y=a.find(j=>j.element.current===(null==o?void 0:o.activeElement));y&&u(y.propsRef.current.value)}break;case keyboard.R.ArrowRight:case keyboard.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.jA)(f,focus_management.TO.Next|focus_management.TO.WrapAround)===focus_management.fE.Success){let y1=a.find(j=>j.element.current===(null==o?void 0:o.activeElement));y1&&u(y1.propsRef.current.value)}break;case keyboard.R.Space:{e.preventDefault(),e.stopPropagation();let p=a.find(y=>y.element.current===(null==o?void 0:o.activeElement));p&&u(p.propsRef.current.value)}}}),w=(0,use_event.z)(e=>(F({type:0,...e}),()=>F({type:1,id:e.id}))),R=(0,react.useMemo)(()=>({value:l,firstOption:s,containsCheckedOption:b,disabled:h,compare:T,...k}),[l,s,b,h,T,k]),S=(0,react.useMemo)(()=>({registerOption:w,change:u}),[w,u]),le=(0,react.useMemo)(()=>({value:l}),[l]),_=(0,react.useRef)(null),pe=(0,use_disposables.G)();return(0,react.useEffect)(()=>{_.current&&void 0!==O&&pe.addEventListener(_.current,"reset",()=>{u(O)})},[_,u]),react.createElement(L,{name:"RadioGroup.Description"},react.createElement(N,{name:"RadioGroup.Label"},react.createElement(V.Provider,{value:S},react.createElement($.Provider,{value:R},null!=I&&null!=l&&(0,utils_form.t)({[I]:l}).map(([e,i],o)=>react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:0===o?f=>{var p;_.current=null!=(p=null==f?void 0:f.closest("form"))?p:null}:void 0,...(0,render.oA)({key:e,as:"input",type:"radio",checked:null!=i,hidden:!0,readOnly:!0,name:e,value:i})})),(0,render.sY)({ourProps:{ref:W,id:c,role:"radiogroup","aria-labelledby":M,"aria-describedby":m,onKeyDown:K},theirProps:U,slot:le,defaultTag:"div",name:"RadioGroup"})))))});var xe=((t1=xe||{})[t1.Empty=1]="Empty",t1[t1.Active=2]="Active",t1);let ut=Object.assign(Ce,{Option:(0,render.yV)(function(r,t){var w;let d=(0,use_id.M)(),{id:c=`headlessui-radiogroup-option-${d}`,value:D,disabled:O=!1,...I}=r,E=(0,react.useRef)(null),G=(0,use_sync_refs.T)(E,t),[h,U]=(0,label.b)(),[T,k]=(0,description.f)(),{addFlag:F,removeFlag:a,hasFlag:M}=function(g=0){let[r,l]=(0,react.useState)(g);return{addFlag:(0,react.useCallback)(e=>l(a=>a|e),[r]),hasFlag:(0,react.useCallback)(e=>Boolean(r&e),[r]),removeFlag:(0,react.useCallback)(e=>l(a=>a&~e),[l]),toggleFlag:(0,react.useCallback)(e=>l(a=>a^e),[l])}}(1),N=(0,use_latest_value.E)({value:D,disabled:O}),m=function ne(n){let r=(0,react.useContext)($);if(null===r){let t=Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return r}("RadioGroup.Option"),L=function ie(n){let r=(0,react.useContext)(V);if(null===r){let t=Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ie),t}return r}("RadioGroup.Option");(0,use_iso_morphic_effect.e)(()=>L.registerOption({id:c,element:E,propsRef:N}),[c,L,E,r]);let C=(0,use_event.z)(R=>{var S;if((0,bugs.P)(R.currentTarget))return R.preventDefault();L.change(D)&&(F(2),null==(S=E.current)||S.focus())}),W=(0,use_event.z)(R=>{if((0,bugs.P)(R.currentTarget))return R.preventDefault();F(2)}),l=(0,use_event.z)(()=>a(2)),x=(null==(w=m.firstOption)?void 0:w.id)===c,s=m.disabled||O,b=m.compare(m.value,D),u={ref:G,id:c,role:"radio","aria-checked":b?"true":"false","aria-labelledby":h,"aria-describedby":T,"aria-disabled":!!s||void 0,tabIndex:s?-1:b||!m.containsCheckedOption&&x?0:-1,onClick:s?void 0:C,onFocus:s?void 0:W,onBlur:s?void 0:l},K=(0,react.useMemo)(()=>({checked:b,disabled:s,active:M(2)}),[b,s,M]);return react.createElement(k,{name:"RadioGroup.Description"},react.createElement(U,{name:"RadioGroup.Label"},(0,render.sY)({ourProps:u,theirProps:I,slot:K,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:label._,Description:description.d})},31147:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return T}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=void 0!==l,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!e||t.current||u.current?e||!t.current||d.current||(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(n=>(e||s(n),null==r?void 0:r(n)))]}},31591:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return F}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723),_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15466);function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.r)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}},96599:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return m}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}},18689:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function s(n,r){return n?n+"["+r+"]":r}function p(n){var t;let r=null!=(t=null==n?void 0:n.form)?t:n.closest("form");if(r){for(let i of r.elements)if("INPUT"===i.tagName&&"submit"===i.type||"BUTTON"===i.tagName&&"submit"===i.type||"INPUT"===i.nodeName&&"image"===i.type){i.click();return}}}__webpack_require__.d(__webpack_exports__,{g:function(){return p},t:function(){return function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))!function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):"boolean"==typeof t?n.push([r,t?"1":"0"]):"string"==typeof t?n.push([r,t]):"number"==typeof t?n.push([r,`${t}`]):null==t?n.push([r,""]):e(t,r,n)}(t,s(r,i),o);return t}}})},13840:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},83141:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},89227:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},59968:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"}))});__webpack_exports__.Z=ForwardRef},31415:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});__webpack_exports__.Z=ForwardRef}}]);