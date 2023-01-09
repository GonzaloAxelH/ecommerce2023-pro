(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28146],{61253:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/ecommerce/components/shopping-carts/modal",function(){return __webpack_require__(32758)}])},32758:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59810),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31415);let products=[{id:1,name:"Zip Tote Basket",href:"#",color:"White and black",price:"$140.00",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",imageAlt:"Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."},{id:2,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."}];function Example(){let[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:open,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"relative z-10",onClose:setOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-105",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-105",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Panel,{className:"flex w-full max-w-3xl transform text-left text-base transition sm:my-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{className:"relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-lg sm:pb-6 lg:py-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-between px-4 sm:px-6 lg:px-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Shopping Cart"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"text-gray-400 hover:text-gray-500",onClick:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Close"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{"aria-labelledby":"cart-heading",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 px-4 sm:px-6 lg:px-8",children:products.map((product,productIdx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"flex py-8 text-sm sm:items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:product.imageSrc,alt:product.imageAlt,className:"h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-y-3 gap-x-5 sm:ml-6 sm:flex sm:items-center sm:gap-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row-end-1 flex-auto sm:pr-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-medium text-gray-900",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:product.href,children:product.name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-1 text-gray-500",children:product.color})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right",children:product.price}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center sm:block sm:flex-none sm:text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:"quantity-".concat(productIdx),className:"sr-only",children:["Quantity, ",product.name]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{id:"quantity-".concat(productIdx),name:"quantity-".concat(productIdx),className:"block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:1,children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:2,children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:3,children:"3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:4,children:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:5,children:"5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:6,children:"6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:7,children:"7"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:8,children:"8"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Remove"})})]})]})]},product.id))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{"aria-labelledby":"summary-heading",className:"mt-auto sm:px-6 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"bg-gray-50 p-6 sm:rounded-lg sm:p-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{id:"summary-heading",className:"sr-only",children:"Order summary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flow-root",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl",{className:"-my-4 divide-y divide-gray-200 text-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt",{className:"text-gray-600",children:"Subtotal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd",{className:"font-medium text-gray-900",children:"$262.00"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt",{className:"text-gray-600",children:"Shipping"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd",{className:"font-medium text-gray-900",children:"$5.00"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt",{className:"text-gray-600",children:"Tax"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd",{className:"font-medium text-gray-900",children:"$53.40"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd",{className:"text-base font-medium text-gray-900",children:"$320.40"})]})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-8 flex justify-end px-4 sm:px-6 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"submit",className:"rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Continue to Payment"})})]})})})})})]})})}},39516:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{d:function(){return F},f:function(){return k}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19946),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23784),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function k(){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(r=>(t(o=>[...o,r]),()=>t(o=>{let s=o.slice(),p=s.indexOf(r);return -1!==p&&s.splice(p,1),s}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:a},e.children)},[t])]}let F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(t,c){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.M)(),{id:i=`headlessui-description-${e}`,...a}=t,r=function u(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===n){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return n}(),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.T)(c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.e)(()=>r.register(i),[i,r.register]);let s={ref:o,...r.props,id:i};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})},59810:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{V:function(){return mt}});var t,e,r,e1,react=__webpack_require__(67294),match=__webpack_require__(32984),render=__webpack_require__(12351),use_sync_refs=__webpack_require__(23784),keyboard=__webpack_require__(61363),bugs=__webpack_require__(64103),use_id=__webpack_require__(19946),use_server_handoff_complete=__webpack_require__(82180),internal_hidden=__webpack_require__(46045),focus_management=__webpack_require__(84575),use_event=__webpack_require__(73781),use_tab_direction=__webpack_require__(70638),use_is_mounted=__webpack_require__(14879),use_owner=__webpack_require__(51074),use_event_listener=__webpack_require__(14007),micro_task=__webpack_require__(81021),use_watch=__webpack_require__(96599),use_disposables=__webpack_require__(94192),A=((t=A||{})[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t);let de=Object.assign((0,render.yV)(function(u,e){let l=(0,react.useRef)(null),a=(0,use_sync_refs.T)(l,e),{initialFocus:m,containers:t,features:n=30,...E}=u;(0,use_server_handoff_complete.H)()||(n=1);let s=(0,use_owner.i)(l);!function({ownerDocument:r},u){let e=(0,react.useRef)(null);(0,use_event_listener.O)(null==r?void 0:r.defaultView,"focusout",a=>{!u||e.current||(e.current=a.target)},!0),(0,use_watch.q)(()=>{u||((null==r?void 0:r.activeElement)===(null==r?void 0:r.body)&&(0,focus_management.C5)(e.current),e.current=null)},[u]);let l=(0,react.useRef)(!1);(0,react.useEffect)(()=>(l.current=!1,()=>{l.current=!0,(0,micro_task.Y)(()=>{l.current&&((0,focus_management.C5)(e.current),e.current=null)})}),[])}({ownerDocument:s},Boolean(16&n));let S=function({ownerDocument:r,container:u,initialFocus:e},l){let a=(0,react.useRef)(null),m=(0,use_is_mounted.t)();return(0,use_watch.q)(()=>{if(!l)return;let t=u.current;t&&(0,micro_task.Y)(()=>{if(!m.current)return;let n=null==r?void 0:r.activeElement;if(null!=e&&e.current){if((null==e?void 0:e.current)===n){a.current=n;return}}else if(t.contains(n)){a.current=n;return}null!=e&&e.current?(0,focus_management.C5)(e.current):(0,focus_management.jA)(t,focus_management.TO.First)===focus_management.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==r?void 0:r.activeElement})},[l]),a}({ownerDocument:s,container:l,initialFocus:m},Boolean(2&n));!function({ownerDocument:r,container:u,containers:e,previousActiveElement:l},a){let m=(0,use_is_mounted.t)();(0,use_event_listener.O)(null==r?void 0:r.defaultView,"focus",t=>{if(!a||!m.current)return;let n=new Set(null==e?void 0:e.current);n.add(u);let E=l.current;if(!E)return;let s=t.target;s&&s instanceof HTMLElement?h(n,s)?(l.current=s,(0,focus_management.C5)(s)):(t.preventDefault(),t.stopPropagation(),(0,focus_management.C5)(E)):(0,focus_management.C5)(l.current)},!0)}({ownerDocument:s,container:l,containers:t,previousActiveElement:S},Boolean(8&n));let H=(0,use_tab_direction.l)(),R=(0,use_event.z)(o=>{let c=l.current;c&&(0,match.E)(H.current,{[use_tab_direction.N.Forwards]:()=>(0,focus_management.jA)(c,focus_management.TO.First,{skipElements:[o.relatedTarget]}),[use_tab_direction.N.Backwards]:()=>(0,focus_management.jA)(c,focus_management.TO.Last,{skipElements:[o.relatedTarget]})})}),B=(0,use_disposables.G)(),L=(0,react.useRef)(!1);return react.createElement(react.Fragment,null,Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden.A.Focusable}),(0,render.sY)({ourProps:{ref:a,onKeyDown(o){"Tab"==o.key&&(L.current=!0,B.requestAnimationFrame(()=>{L.current=!1}))},onBlur(o){let c=new Set(null==t?void 0:t.current);c.add(l);let p=o.relatedTarget;!p||"true"!==p.dataset.headlessuiFocusGuard&&(h(c,p)||(L.current?(0,focus_management.jA)(l.current,(0,match.E)(H.current,{[use_tab_direction.N.Forwards]:()=>focus_management.TO.Next,[use_tab_direction.N.Backwards]:()=>focus_management.TO.Previous})|focus_management.TO.WrapAround,{relativeTo:o.target}):o.target instanceof HTMLElement&&(0,focus_management.C5)(o.target)))}},theirProps:E,defaultTag:"div",name:"FocusTrap"}),Boolean(4&n)&&react.createElement(internal_hidden._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:internal_hidden.A.Focusable}))}),{features:A});function h(r,u){var e;for(let l of r)if(null!=(e=l.current)&&e.contains(u))return!0;return!1}var owner=__webpack_require__(15466),use_iso_morphic_effect=__webpack_require__(16723);let i=new Set,r1=new Map;function u(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function l(t){let n=r1.get(t);n&&(null===n["aria-hidden"]?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",n["aria-hidden"]),t.inert=n.inert)}var react_dom=__webpack_require__(73935);let e2=(0,react.createContext)(!1);function portal_force_root_P(o){return react.createElement(e2.Provider,{value:o.force},o.children)}var ssr=__webpack_require__(43393);let _=react.Fragment,U=(0,render.yV)(function(u,o){let r=(0,react.useRef)(null),f=(0,use_sync_refs.T)((0,use_sync_refs.h)(a=>{r.current=a}),o),n=(0,use_owner.i)(r),t=function(i){let u=(0,react.useContext)(e2),o=(0,react.useContext)(portal_A),e=(0,use_owner.i)(i),[r,f]=(0,react.useState)(()=>{if(!u&&null!==o||ssr.s)return null;let n=null==e?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(null===e)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return(0,react.useEffect)(()=>{null!==r&&(null!=e&&e.body.contains(r)||null==e||e.body.appendChild(r))},[r,e]),(0,react.useEffect)(()=>{u||null!==o&&f(o.current)},[o,f,u]),r}(r),[l]=(0,react.useState)(()=>{var a;return ssr.s?null:null!=(a=null==n?void 0:n.createElement("div"))?a:null}),b=(0,use_server_handoff_complete.H)(),p=(0,react.useRef)(!1);return(0,use_iso_morphic_effect.e)(()=>{if(p.current=!1,!(!t||!l))return t.contains(l)||(l.setAttribute("data-headlessui-portal",""),t.appendChild(l)),()=>{p.current=!0,(0,micro_task.Y)(()=>{var a;p.current&&t&&l&&(t.removeChild(l),t.childNodes.length<=0&&(null==(a=t.parentElement)||a.removeChild(t)))})}},[t,l]),b&&t&&l?(0,react_dom.createPortal)((0,render.sY)({ourProps:{ref:f},theirProps:u,defaultTag:_,name:"Portal"}),l):null}),j=react.Fragment,portal_A=(0,react.createContext)(null),portal_$=Object.assign(U,{Group:(0,render.yV)(function(u,o){let{target:e,...r}=u,n={ref:(0,use_sync_refs.T)(o)};return react.createElement(portal_A.Provider,{value:e},(0,render.sY)({ourProps:n,theirProps:r,defaultTag:j,name:"Popover.Group"}))})});var description=__webpack_require__(39516),open_closed=__webpack_require__(16567);let a=(0,react.createContext)(()=>{});a.displayName="StackContext";var stack_context_s=((e=stack_context_s||{})[e.Add=0]="Add",e[e.Remove=1]="Remove",e);function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=(0,react.useContext)(a),o=(0,use_event.z)((...t)=>{null==r||r(...t),l(...t)});return(0,use_iso_morphic_effect.e)(()=>{let t=void 0===u||!0===u;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react.createElement(a.Provider,{value:o},i)}var use_outside_click=__webpack_require__(39650),disposables=__webpack_require__(9362),be=((r=be||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),ve=((e1=ve||{})[e1.SetTitleId=0]="SetTitleId",e1);let Ae={0:(t,e)=>t.titleId===e.id?t:{...t,titleId:e.id}},H=(0,react.createContext)(null);function k(t){let e=(0,react.useContext)(H);if(null===e){let r=Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,k),r}return e}function Ce(t,e){return(0,match.E)(e.type,Ae,t,e)}H.displayName="DialogContext";let Le=render.AN.RenderStrategy|render.AN.Static,Me=(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-${s}`,open:a,onClose:o,initialFocus:p,__demoMode:f=!1,...c}=e,[n,i1]=(0,react.useState)(0),l1=(0,open_closed.oJ)();void 0===a&&null!==l1&&(a=(0,match.E)(l1,{[open_closed.ZM.Open]:!0,[open_closed.ZM.Closed]:!1}));let P=(0,react.useRef)(new Set),u1=(0,react.useRef)(null),_=(0,use_sync_refs.T)(u1,r),U=(0,react.useRef)(null),y=(0,use_owner.i)(u1),$=e.hasOwnProperty("open")||null!==l1,Y=e.hasOwnProperty("onClose");if(!$&&!Y)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!Y)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof a)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if("function"!=typeof o)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let g=a?0:1,[h,Q]=(0,react.useReducer)(Ce,{titleId:null,descriptionId:null,panelRef:(0,react.createRef)()}),R=(0,use_event.z)(()=>o(!1)),j=(0,use_event.z)(T=>Q({type:0,id:T})),x=!!(0,use_server_handoff_complete.H)()&&!f&&0===g,w=n>1,X=null!==(0,react.useContext)(H);!function(t,n=!0){(0,use_iso_morphic_effect.e)(()=>{if(!n||!t.current)return;let o=t.current,a=(0,owner.r)(o);if(a){for(let e of(i.add(o),r1.keys()))e.contains(o)&&(l(e),r1.delete(e));return a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let f of i)if(e.contains(f))return;1===i.size&&(r1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e))}}),()=>{if(i.delete(o),i.size>0)a.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!r1.has(e)){for(let f of i)if(e.contains(f))return;r1.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),u(e)}});else for(let e of r1.keys())l(e),r1.delete(e)}}},[n])}(u1,!!w&&x);let N=(0,use_event.z)(()=>{var b,D;return[...Array.from(null!=(b=null==y?void 0:y.querySelectorAll("body > *, [data-headlessui-portal]"))?b:[]).filter(E=>!(!(E instanceof HTMLElement)||E.contains(U.current)||h.panelRef.current&&E.contains(h.panelRef.current))),null!=(D=h.panelRef.current)?D:u1.current]});(0,use_outside_click.O)(()=>N(),R,x&&!w),(0,use_event_listener.O)(null==y?void 0:y.defaultView,"keydown",T=>{T.defaultPrevented||T.key===keyboard.R.Escape&&0===g&&(w||(T.preventDefault(),T.stopPropagation(),R()))}),function(t,e,r=()=>[document.body]){(0,react.useEffect)(()=>{var c;if(!e||!t)return;let s=(0,disposables.k)(),d=window.pageYOffset;function a(n,i,l){let P=n.style.getPropertyValue(i);return Object.assign(n.style,{[i]:l}),s.add(()=>{Object.assign(n.style,{[i]:P})})}let o=t.documentElement,f=(null!=(c=t.defaultView)?c:window).innerWidth-o.clientWidth;if(a(o,"overflow","hidden"),f>0){let n=o.clientWidth-o.offsetWidth;a(o,"paddingRight",`${f-n}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){a(t.body,"marginTop",`-${d}px`),window.scrollTo(0,0);let n1=null;s.addEventListener(t,"click",i=>{if(i.target instanceof HTMLElement)try{let l=i.target.closest("a");if(!l)return;let{hash:P}=new URL(l.href),u=t.querySelector(P);u&&!r().some(_=>_.contains(u))&&(n1=u)}catch{}},!0),s.addEventListener(t,"touchmove",i=>{i.target instanceof HTMLElement&&!r().some(l=>l.contains(i.target))&&i.preventDefault()},{passive:!1}),s.add(()=>{window.scrollTo(0,window.pageYOffset+d),n1&&n1.isConnected&&(n1.scrollIntoView({block:"nearest"}),n1=null)})}return s.dispose},[t,e])}(y,0===g&&!X,N),(0,react.useEffect)(()=>{if(0!==g||!u1.current)return;let T=new IntersectionObserver(b=>{for(let D of b)0===D.boundingClientRect.x&&0===D.boundingClientRect.y&&0===D.boundingClientRect.width&&0===D.boundingClientRect.height&&R()});return T.observe(u1.current),()=>T.disconnect()},[g,u1,R]);let[ee,te]=(0,description.f)(),oe=(0,react.useMemo)(()=>[{dialogState:g,close:R,setTitleId:j},h],[g,h,R,j]),V=(0,react.useMemo)(()=>({open:0===g}),[g]),re={ref:_,id:d,role:"dialog","aria-modal":0===g||void 0,"aria-labelledby":h.titleId,"aria-describedby":ee};return react.createElement(stack_context_M,{type:"Dialog",enabled:0===g,element:u1,onUpdate:(0,use_event.z)((T,b,D)=>{"Dialog"===b&&(0,match.E)(T,{[stack_context_s.Add](){P.current.add(D),i1(E=>E+1)},[stack_context_s.Remove](){P.current.add(D),i1(E=>E-1)}})})},react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_$,null,react.createElement(H.Provider,{value:oe},react.createElement(portal_$.Group,{target:u1},react.createElement(portal_force_root_P,{force:!1},react.createElement(te,{slot:V,name:"Dialog.Description"},react.createElement(de,{initialFocus:p,containers:P,features:x?(0,match.E)(w?"parent":"leaf",{parent:de.features.RestoreFocus,leaf:de.features.All&~de.features.FocusLock}):de.features.None},(0,render.sY)({ourProps:re,theirProps:c,slot:V,defaultTag:"div",features:Le,visible:0===g,name:"Dialog"})))))))),react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:U}))}),we=(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-overlay-${s}`,...a}=e,[{dialogState:o,close:p}]=k("Dialog.Overlay"),f=(0,use_sync_refs.T)(r),c=(0,use_event.z)(l=>{if(l.target===l.currentTarget){if((0,bugs.P)(l.currentTarget))return l.preventDefault();l.preventDefault(),l.stopPropagation(),p()}}),n=(0,react.useMemo)(()=>({open:0===o}),[o]);return(0,render.sY)({ourProps:{ref:f,id:d,"aria-hidden":!0,onClick:c},theirProps:a,slot:n,defaultTag:"div",name:"Dialog.Overlay"})}),mt=Object.assign(Me,{Backdrop:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-backdrop-${s}`,...a}=e,[{dialogState:o},p]=k("Dialog.Backdrop"),f=(0,use_sync_refs.T)(r);(0,react.useEffect)(()=>{if(null===p.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[p.panelRef]);let c=(0,react.useMemo)(()=>({open:0===o}),[o]);return react.createElement(portal_force_root_P,{force:!0},react.createElement(portal_$,null,(0,render.sY)({ourProps:{ref:f,id:d,"aria-hidden":!0},theirProps:a,slot:c,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-panel-${s}`,...a}=e,[{dialogState:o},p]=k("Dialog.Panel"),f=(0,use_sync_refs.T)(r,p.panelRef),c=(0,react.useMemo)(()=>({open:0===o}),[o]),n=(0,use_event.z)(l=>{l.stopPropagation()});return(0,render.sY)({ourProps:{ref:f,id:d,onClick:n},theirProps:a,slot:c,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:we,Title:(0,render.yV)(function(e,r){let s=(0,use_id.M)(),{id:d=`headlessui-dialog-title-${s}`,...a}=e,[{dialogState:o,setTitleId:p}]=k("Dialog.Title"),f=(0,use_sync_refs.T)(r);(0,react.useEffect)(()=>(p(d),()=>p(null)),[d,p]);let c=(0,react.useMemo)(()=>({open:0===o}),[o]);return(0,render.sY)({ourProps:{ref:f,id:d},theirProps:a,slot:c,defaultTag:"h2",name:"Dialog.Title"})}),Description:description.d})},96599:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{q:function(){return m}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}},31415:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});__webpack_exports__.Z=ForwardRef}},function(__webpack_require__){__webpack_require__.O(0,[5500,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=61253)}),_N_E=__webpack_require__.O()}]);