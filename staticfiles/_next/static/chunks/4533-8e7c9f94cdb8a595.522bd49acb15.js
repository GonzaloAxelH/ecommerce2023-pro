"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4533],{39516:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return F},f:function(){return k}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19946),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23784),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function k(){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(r=>(t(o=>[...o,r]),()=>t(o=>{let s=o.slice(),p=s.indexOf(r);return -1!==p&&s.splice(p,1),s}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:a},e.children)},[t])]}let F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(t,c){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.M)(),{id:i=`headlessui-description-${e}`,...a}=t,r=function u(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===n){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return n}(),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.T)(c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.e)(()=>r.register(i),[i,r.register]);let s={ref:o,...r.props,id:i};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})},59810:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return mt}});var t,e,r,e1,react=__webpack_require__(67294),match=__webpack_require__(32984),render=__webpack_require__(12351),use_sync_refs=__webpack_require__(23784),keyboard=__webpack_require__(61363),bugs=__webpack_require__(64103),use_id=__webpack_require__(19946),use_server_handoff_complete=__webpack_require__(82180),internal_hidden=__webpack_require__(46045),focus_management=__webpack_require__(84575),use_event=__webpack_require__(73781),use_tab_direction=__webpack_require__(70638),use_is_mounted=__webpack_require__(14879),use_owner=__webpack_require__(51074),use_event_listener=__webpack_require__(14007),micro_task=__webpack_require__(81021),use_watch=__webpack_require__(96599),use_disposables=__webpack_require__(94192),A=((t=A||{})[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t);let de=Object.assign((0,render.yV)(function(u,e){let l=(0,react.useRef)(null),a=(0,use_sync_refs.T)(l,e),{initialFocus:m,containers:t,features:n=30,...E}=u;(0,use_server_handoff_complete.H)()||(n=1);let s=(0,use_owner.i)(l);!function({ownerDocument:r},u){let e=(0,react.useRef)(null);(0,use_event_listener.O)(null==r?void 0:r.defaultView,"focusout",a=>{!u||e.current||(e.current=a.target)},!0),(0,use_watch.q)(()=>{u||((null==r?void 0:r.activeElement)===(null==r?void 0:r.body)&&(0,focus_management.C5)(e.current),e.current=null)},[u]);let l=(0,react.useRef)(!1);(0,react.useEffect)(()=>(l.current=!1,()=>{l.current=!0,(0,micro_task.Y)(()=>{l.current&&((0,focus_management.C5)(e.current),e.current=null)})}),[])}({ownerDocument:s},Boolean(16&n));let S=function({ownerDocument:r,container:u,initialFocus:e},l){let a=(0,react.useRef)(null),m=(0,use_is_mounted.t)();return(0,use_watch.q)(()=>{if(!l)return;let t=u.current;t&&(0,micro_task.Y)(()=>{if(!m.current)return;let n=null==r?void 0:r.activeElement;if(null!=e&&e.current){if((null==e?void 0:e.current)===n){a.current=n;return}}else if(t.contains(n)){a.current=n;return}null!=e&&e.current?(0,focus_management.C5)(e.current):(0,focus_management.jA)(t,focus_management.TO.First)===focus_management.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==r?void 0:r.activeElement})},[l]),a}({ownerDocument:s,container:l,initialFocus:m},Boolean(2&n));!function({ownerDocument:r,container:u,containers:e,previousActiveElement:l},a){let m=(0,use_is_mounted.t)();(0,use_event_listener.O)(null==r?void 0:r.defaultView,"focus",t=>{if(!a||!m.current)return;let n=new Set(null==e?void 0:e.current);n.add(u);let E=l.current;if(!E)return;let s=t.target;s&&s instanceof HTMLElement?h(n,s)?(l.current=s,(0,focus_management.C5)(s)):(t.preventDefault(),t.stopPropagation(),(0,focus_management.C5)(E)):(0,focus_management.C5)(l.current)},!0)}({ownerDocument:s,container:l,containers:t,previousActiveElement:S},Boolean(8&n));let H=(0,use_tab_direction.l)(),R=(0,use_event.z)(o=>{let c=l.current;c&&(0,match.E)(H.current,{[use_tab_direction.N.Forwards]:()=>(0,focus_management.jA)(c,focus_management.TO.First,{skipElements:[o.relatedTarget]}),[use_tab_direction.N.Backwards]:()=>(0,focus_management.jA)(c,focus_management.TO.Last,{skipElements:[o.relatedTarget]})})}),B=(0,use_disposables.G)(),L=(0,react.useRef)(!1);return react.createElement(react.Fragment,null,Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden.A.Focusable}),(0,render.sY)({ourProps:{ref:a,onKeyDown(o){"Tab"==o.key&&(L.current=!0,B.requestAnimationFrame(()=>{L.current=!1}))},onBlur(o){let c=new Set(null==t?void 0:t.current);c.add(l);let p=o.relatedTarget;!p||"true"!==p.dataset.headlessuiFocusGuard&&(h(c,p)||(L.current?(0,focus_management.jA)(l.current,(0,match.E)(H.current,{[use_tab_direction.N.Forwards]:()=>focus_management.TO.Next,[use_tab_direction.N.Backwards]:()=>focus_management.TO.Previous})|focus_management.TO.WrapAround,{relativeTo:o.target}):o.target instanceof HTMLElement&&(0,focus_management.C5)(o.target)))}},theirProps:E,defaultTag:"div",name:"FocusTrap"}),Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden.A.Focusable}))}),{features:A});function h(r,u){var e;for(let l of r)if(null!=(e=l.current)&&e.contains(u))return!0;return!1}var owner=__webpack_require__(15466),use_iso_morphic_effect=__webpack_require__(16723);let i=new Set,r1=new Map;function u(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function l(t){let n=r1.get(t);n&&(null===n["aria-hidden"]?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}var react_dom=__webpack_require__(73935);let e2=(0,react.createContext)(!1);function portal_force_root_P(o){return react.createElement(e2.Provider,{value:o.force},o.children)}var ssr=__webpack_require__(43393);let _=react.Fragment,U=(0,render.yV)(function(u,o){let r=(0,react.useRef)(null),f=(0,use_sync_refs.T)((0,use_sync_refs.h)(a=>{r.current=a}),o),n=(0,use_owner.i)(r),t=function(i){let u=(0,react.useContext)(e2),o=(0,react.useContext)(portal_A),e=(0,use_owner.i)(i),[r,f]=(0,react.useState)(()=>{if(!u&&null!==o||ssr.s)return null;let n=null==e?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(null===e)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return(0,react.useEffect)(()=>{null!==r&&(null!=e&&e.body.contains(r)||null==e||e.body.appendChild(r))},[r,e]),(0,react.useEffect)(()=>{u||null!==o&&f(o.current)},[o,f,u]),r}(r),[l]=(0,react.useState)(()=>{var a;return ssr.s?null:null!=(a=null==n?void 0:n.createElement("div"))?a:null}),b=(0,use_server_handoff_complete.H)(),p=(0,react.useRef)(!1);return(0,use_iso_morphic_effect.e)(()=>{if(p.current=!1,!(!t||!l))return t.contains(l)||(l.setAttribute("data-headlessui-portal",""),t.appendChild(l)),()=>{p.current=!0,(0,micro_task.Y)(()=>{var a;p.current&&t&&l&&(t.removeChild(l),t.childNodes.length<=0&&(null==(a=t.parentElement)||a.removeChild(t)))})}},[t,l]),b&&t&&l?(0,react_dom.createPortal)((0,render.sY)({ourProps:{ref:f},theirProps:u,defaultTag:_,name:"Portal"}),l):null}),j=react.Fragment,portal_A=(0,react.createContext)(null),portal_$=Object.assign(U,{Group:(0,render.yV)(function(u,o){let{target:e,...r}=u,n={ref:(0,use_sync_refs.T)(o)};return react.createElement(portal_A.Provider,{value:e},(0,render.sY)({ourProps:n,theirProps:r,defaultTag:j,name:"Popover.Group"}))})});var description=__webpack_require__(39516),open_closed=__webpack_require__(16567);let a=(0,react.createContext)(()=>{});a.displayName="StackContext";var stack_context_s=((e=stack_context_s||{})[e.Add=0]="Add",e[e.Remove=1]="Remove",e);function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=(0,react.useContext)(a),o=(0,use_event.z)((...t)=>{null==r||r(...t),l(...t)});return(0,use_iso_morphic_effect.e)(()=>{let t=void 0===u||!0===u;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react.createElement(a.Provider,{value:o},i)}var use_outside_click=__webpack_require__(39650),disposables=__webpack_require__(9362),be=((r=be||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),ve=((e1=ve||{})[e1.SetTitleId=0]="SetTitleId",e1);let Ae={0:(t,e)=>t.titleId===e.id?t:{...t,titleId:e.id}},H=(0,react.createContext)(null);function k(t){let e=(0,react.useContext)(H);if(null===e){let r=Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,k),r}return e}function Ce(t,e){return(0,match.E)(e.type,Ae,t,e)}H.displayName="DialogContext";let Le=render.AN.RenderStrategy|render.AN.Static,Me=(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-${s}`,open:a,onClose:o,initialFocus:p,__demoMode:f=!1,...c}=e,[n,i1]=(0,react.useState)(0),l1=(0,open_closed.oJ)();void 0===a&&null!==l1&&(a=(0,match.E)(l1,{[open_closed.ZM.Open]:!0,[open_closed.ZM.Closed]:!1}));let P=(0,react.useRef)(new Set),u1=(0,react.useRef)(null),_=(0,use_sync_refs.T)(u1,r),U=(0,react.useRef)(null),y=(0,use_owner.i)(u1),$=e.hasOwnProperty("open")||null!==l1,Y=e.hasOwnProperty("onClose");if(!$&&!Y)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!Y)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof a)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if("function"!=typeof o)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let g=a?0:1,[h,Q]=(0,react.useReducer)(Ce,{titleId:null,descriptionId:null,panelRef:(0,react.createRef)()}),R=(0,use_event.z)(()=>o(!1)),j=(0,use_event.z)(T=>Q({type:0,id:T})),x=!!(0,use_server_handoff_complete.H)()&&!f&&0===g,w=n>1,X=null!==(0,react.useContext)(H);!function(t,n=!0){(0,use_iso_morphic_effect.e)(()=>{if(!n||!t.current)return;let o=t.current,a=(0,owner.r)(o);if(a){for(let e of(i.add(o),r1.keys()))e.contains(o)&&(l(e),r1.delete(e));return a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;1===i.size&&(r1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e))}}),()=>{if(i.delete(o),i.size>0)a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!r1.has(e)){for(let f of i)if(e.contains(f))return;r1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e)}});else for(let e of r1.keys())l(e),r1.delete(e)}}},[n])}(u1,!!w&&x);let N=(0,use_event.z)(()=>{var b,D;return[...Array.from(null!=(b=null==y?void 0:y.querySelectorAll("body > *, [data-headlessui-portal]"))?b:[]).filter(E=>!(!(E instanceof HTMLElement)||E.contains(U.current)||h.panelRef.current&&E.contains(h.panelRef.current))),null!=(D=h.panelRef.current)?D:u1.current]});(0,use_outside_click.O)(()=>N(),R,x&&!w),(0,use_event_listener.O)(null==y?void 0:y.defaultView,"keydown",T=>{T.defaultPrevented||T.key===keyboard.R.Escape&&0===g&&(w||(T.preventDefault(),T.stopPropagation(),R()))}),function(t,e,r=()=>[document.body]){(0,react.useEffect)(()=>{var c;if(!e||!t)return;let s=(0,disposables.k)(),d=window.pageYOffset;function a(n,i,l){let P=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:l}),s.add(()=>{Object.assign(n.style,{[i]:P})})}let o=t.documentElement,f=(null!=(c=t.defaultView)?c:window).innerWidth-o.clientWidth;if(a(o,"overflow","hidden"),f>0){let n=o.clientWidth-o.offsetWidth;a(o,"paddingRight",`${f-n}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){a(t.body,"marginTop",`-${d}px`),window.scrollTo(0,0);let n1=null;s.addEventListener(t,"click",i=>{if(i.target instanceof HTMLElement)try{let l=i.target.closest("a");if(!l)return;let{hash:P}=new URL(l.href),u=t.querySelector(P);u&&!r().some(_=>_.contains(u))&&(n1=u)}catch{}},!0),s.addEventListener(t,"touchmove",i=>{i.target instanceof HTMLElement&&!r().some(l=>l.contains(i.target))&&i.preventDefault()},{passive:!1}),s.add(()=>{window.scrollTo(0,window.pageYOffset+d),n1&&n1.isConnected&&(n1.scrollIntoView({block:"nearest"}),n1=null)})}return s.dispose},[t,e])}(y,0===g&&!X,N),(0,react.useEffect)(()=>{if(0!==g||!u1.current)return;let T=new IntersectionObserver(b=>{for(let D of b)0===D.boundingClientRect.x&&0===D.boundingClientRect.y&&0===D.boundingClientRect.width&&0===D.boundingClientRect.height&&R()});return T.observe(u1.current),()=>T.disconnect()},[g,u1,R]);let[ee,te]=(0,description.f)(),oe=(0,react.useMemo)(()=>[{dialogState:g,close:R,setTitleId:j},h],[g,h,R,j]),V=(0,react.useMemo)(()=>({open:0===g}),[g]),re={ref:_,id:d,role:"dialog","aria-modal":0===g||void 0,"aria-labelledby":h.titleId,"aria-describedby":ee};return react.createElement(stack_context_M,{type:"Dialog",enabled:0===g,element:u1,onUpdate:(0,use_event.z)((T,b,D)=>{"Dialog"===b&&(0,match.E)(T,{[stack_context_s.Add](){P.current.add(D),i1(E=>E+1)},[stack_context_s.Remove](){P.current.add(D),i1(E=>E-1)}})})},react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_$,null,react.createElement(H.Provider,{value:oe},react.createElement(portal_$.Group,{target:u1},react.createElement(portal_force_root_P,{force:!1},react.createElement(te,{slot:V,name:"Dialog.Description"},react.createElement(de,{initialFocus:p,containers:P,features:x?(0,match.E)(w?"parent":"leaf",{parent:de.features.RestoreFocus,leaf:de.features.All&~de.features.FocusLock}):de.features.None},(0,render.sY)({ourProps:re,theirProps:c,slot:V,defaultTag:"div",features:Le,visible:0===g,name:"Dialog"})))))))),react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:U}))}),we=(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-overlay-${s}`,...a}=e,[{dialogState:o,close:p}]=k("Dialog.Overlay"),f=(0,use_sync_refs.T)(r),c=(0,use_event.z)(l=>{if(l.target===l.currentTarget){if((0,bugs.P)(l.currentTarget))return l.preventDefault();l.preventDefault(),l.stopPropagation(),p()}}),n=(0,react.useMemo)(()=>({open:0===o}),[o]);return(0,render.sY)({ourProps:{ref:f,id:d,"aria-hidden":!0,onClick:c},theirProps:a,slot:n,defaultTag:"div",name:"Dialog.Overlay"})}),mt=Object.assign(Me,{Backdrop:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-backdrop-${s}`,...a}=e,[{dialogState:o},p]=k("Dialog.Backdrop"),f=(0,use_sync_refs.T)(r);(0,react.useEffect)(()=>{if(null===p.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[p.panelRef]);let c=(0,react.useMemo)(()=>({open:0===o}),[o]);return react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_$,null,(0,render.sY)({ourProps:{ref:f,id:d,"aria-hidden":!0},theirProps:a,slot:c,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-panel-${s}`,...a}=e,[{dialogState:o},p]=k("Dialog.Panel"),f=(0,use_sync_refs.T)(r,p.panelRef),c=(0,react.useMemo)(()=>({open:0===o}),[o]),n=(0,use_event.z)(l=>{l.stopPropagation()});return(0,render.sY)({ourProps:{ref:f,id:d,onClick:n},theirProps:a,slot:c,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:we,Title:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-title-${s}`,...a}=e,[{dialogState:o,setTitleId:p}]=k("Dialog.Title"),f=(0,use_sync_refs.T)(r);(0,react.useEffect)(()=>(p(d),()=>p(null)),[d,p]);let c=(0,react.useMemo)(()=>({open:0===o}),[o]);return(0,render.sY)({ourProps:{ref:f,id:d},theirProps:a,slot:c,defaultTag:"h2",name:"Dialog.Title"})}),Description:description.d})},72510:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return Ze}});var o,o1,e,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_utils_match_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32984),_utils_render_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12351),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(9362),_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(94192),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23784),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(19946),_keyboard_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(61363),_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11497),_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(64103),_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(84575),_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39650),_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(31591),_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(16567),_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(14157),_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(51074),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(73781),_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(40476),pe=((o=pe||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),de=((o1=de||{})[o1.Pointer=0]="Pointer",o1[o1.Other=1]="Other",o1),me=((e=me||{})[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e);function U(t,i=o=>o){let o=null!==t.activeItemIndex?t.items[t.activeItemIndex]:null,s=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.z2)(i(t.items.slice()),u=>u.dataRef.current.domRef.current),a=o?s.indexOf(o):null;return -1===a&&(a=null),{items:s,activeItemIndex:a}}let fe={1:t=>1===t.menuState?t:{...t,activeItemIndex:null,menuState:1},0:t=>0===t.menuState?t:{...t,menuState:0},2(t,i){var a;let o=U(t),s=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.d)(i,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(a=i.trigger)?a:1}},3(t,i){let s=""!==t.searchQuery?0:1,a=t.searchQuery+i.value.toLowerCase(),n=(null!==t.activeItemIndex?t.items.slice(t.activeItemIndex+s).concat(t.items.slice(0,t.activeItemIndex+s)):t.items).find(d=>{var l;return(null==(l=d.dataRef.current.textValue)?void 0:l.startsWith(a))&&!d.dataRef.current.disabled}),e=n?t.items.indexOf(n):-1;return -1===e||e===t.activeItemIndex?{...t,searchQuery:a}:{...t,searchQuery:a,activeItemIndex:e,activationTrigger:1}},4:t=>""===t.searchQuery?t:{...t,searchQuery:"",searchActiveItemIndex:null},5(t,i){let o=U(t,s=>[...s,{id:i.id,dataRef:i.dataRef}]);return{...t,...o}},6(t,i){let o=U(t,s=>{let a=s.findIndex(u=>u.id===i.id);return -1!==a&&s.splice(a,1),s});return{...t,...o,activationTrigger:1}}},G=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function O(t){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(G);if(null===i){let o=Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,O),o}return i}function Te(t,i){return(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.E)(i.type,fe,t,i)}G.displayName="MenuContext";let ye=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.yV)(function(i,o){let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Te,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:u,buttonRef:n},e]=s,d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.T)(o);(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_6__.O)([n,u],(R,A)=>{var g;e({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sP)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.tJ.Loose)||(R.preventDefault(),null==(g=n.current)||g.focus())},0===a);let l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{e({type:1})}),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===a,close:l}),[a,l]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(G.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.up,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.E)(a,{0:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.ZM.Open,1:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.ZM.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.sY)({ourProps:{ref:d},theirProps:i,slot:f,defaultTag:ye,name:"Menu"})))}),Me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.yV)(function(i,o){var g;let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.M)(),{id:a=`headlessui-menu-button-${s}`,...u}=i,[n,e]=O("Menu.Button"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.T)(n.buttonRef,o),l=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__.G)(),f=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(c=>{switch(c.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.ArrowDown:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame(()=>e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.First}));break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.ArrowUp:c.preventDefault(),c.stopPropagation(),e({type:0}),l.nextFrame(()=>e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Last}))}}),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(c=>{c.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Space&&c.preventDefault()}),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(c=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.P)(c.currentTarget))return c.preventDefault();i.disabled||(0===n.menuState?(e({type:1}),l.nextFrame(()=>{var b;return null==(b=n.buttonRef.current)?void 0:b.focus({preventScroll:!0})})):(c.preventDefault(),e({type:0})))}),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===n.menuState}),[n]),A={ref:d,id:a,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.f)(i,n.buttonRef),"aria-haspopup":"menu","aria-controls":null==(g=n.itemsRef.current)?void 0:g.id,"aria-expanded":i.disabled?void 0:0===n.menuState,onKeyDown:f,onKeyUp:M,onClick:T};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.sY)({ourProps:A,theirProps:u,slot:R,defaultTag:"button",name:"Menu.Button"})}),be=_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.AN.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.AN.Static,Ae=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.yV)(function(i,o){var b,S;let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.M)(),{id:a=`headlessui-menu-items-${s}`,...u}=i,[n,e]=O("Menu.Items"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.T)(n.itemsRef,o),l=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_14__.i)(n.itemsRef),f=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__.G)(),M=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.oJ)(),T=null!==M?M===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_8__.ZM.Open:0===n.menuState;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let r=n.itemsRef.current;r&&0===n.menuState&&r!==(null==l?void 0:l.activeElement)&&r.focus({preventScroll:!0})},[n.menuState,n.itemsRef,l]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_15__.B)({container:n.itemsRef.current,enabled:0===n.menuState,accept:r=>"menuitem"===r.getAttribute("role")?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(r){r.setAttribute("role","none")}});let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(r=>{var h,F;switch(f.dispose(),r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Space:if(""!==n.searchQuery)return r.preventDefault(),r.stopPropagation(),e({type:3,value:r.key});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Enter:if(r.preventDefault(),r.stopPropagation(),e({type:1}),null!==n.activeItemIndex){let{dataRef:p}=n.items[n.activeItemIndex];null==(F=null==(h=p.current)?void 0:h.domRef.current)||F.click()}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.wI)(n.buttonRef.current);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.ArrowDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Next});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.ArrowUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Previous});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.PageUp:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.First});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.PageDown:return r.preventDefault(),r.stopPropagation(),e({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Last});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Escape:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.k)().nextFrame(()=>{var p;return null==(p=n.buttonRef.current)?void 0:p.focus({preventScroll:!0})});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Tab:r.preventDefault(),r.stopPropagation(),e({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.k)().nextFrame(()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.EO)(n.buttonRef.current,r.shiftKey?_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.TO.Previous:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.TO.Next)});break;default:1===r.key.length&&(e({type:3,value:r.key}),f.setTimeout(()=>e({type:4}),350))}}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(r=>{r.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.R.Space&&r.preventDefault()}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===n.menuState}),[n]),c={"aria-activedescendant":null===n.activeItemIndex||null==(b=n.items[n.activeItemIndex])?void 0:b.id,"aria-labelledby":null==(S=n.buttonRef.current)?void 0:S.id,id:a,onKeyDown:R,onKeyUp:A,role:"menu",tabIndex:0,ref:d};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.sY)({ourProps:c,theirProps:u,slot:g,defaultTag:"div",features:be,visible:T,name:"Menu.Items"})}),ve=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,Ze=Object.assign(Ie,{Button:Me,Items:Ae,Item:(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.yV)(function(i,o){let s=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.M)(),{id:a=`headlessui-menu-item-${s}`,disabled:u=!1,...n}=i,[e,d]=O("Menu.Item"),l=null!==e.activeItemIndex&&e.items[e.activeItemIndex].id===a,f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),M=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.T)(o,f);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.e)(()=>{if(0!==e.menuState||!l||0===e.activationTrigger)return;let p=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.k)();return p.requestAnimationFrame(()=>{var v,B;null==(B=null==(v=f.current)?void 0:v.scrollIntoView)||B.call(v,{block:"nearest"})}),p.dispose},[f,l,e.menuState,e.activationTrigger,e.activeItemIndex]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:u,domRef:f});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.e)(()=>{T.current.disabled=u},[T,u]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.e)(()=>{var p,v;T.current.textValue=null==(v=null==(p=f.current)?void 0:p.textContent)?void 0:v.toLowerCase()},[T,f]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.e)(()=>(d({type:5,id:a,dataRef:T}),()=>d({type:6,id:a})),[T,a]);let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{d({type:1})}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>{if(u)return p.preventDefault();d({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.wI)(e.buttonRef.current)}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{if(u)return d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Nothing});d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Specific,id:a})}),c=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__.g)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>c.update(p)),S=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>{!c.wasMoved(p)||u||l||d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Specific,id:a,trigger:0})}),r=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>{c.wasMoved(p)&&!u&&l&&d({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.T.Nothing})}),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,disabled:u,close:R}),[l,u,R]);return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.sY)({ourProps:{id:a,ref:M,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,disabled:void 0,onClick:A,onFocus:g,onPointerEnter:b,onMouseEnter:b,onPointerMove:S,onMouseMove:S,onPointerLeave:r,onMouseLeave:r},theirProps:n,slot:h,defaultTag:ve,name:"Menu.Item"})})})},14157:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";if("string"==typeof e&&"button"===e.toLowerCase())return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}},40476:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return u}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}},31591:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return F}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723),_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15466);function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.r)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}},96599:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return m}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}},11497:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return a},d:function(){return x}});var e,a=((e=a||{})[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e);function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=null!=l?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>(-1===s||!(u.length-c-1>=s))&&!n.resolveDisabled(i));return -1===e?e:t.length-1-e}case 2:return t.findIndex((e,i)=>!(i<=s)&&!n.resolveDisabled(e));case 3:{let e1=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return -1===e1?e1:t.length-1-e1}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:!function(r){throw Error("Unexpected object: "+r)}(r)}})();return -1===d?l:d}},77e3:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"}))});__webpack_exports__.Z=ForwardRef},56221:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},31415:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});__webpack_exports__.Z=ForwardRef}}]);