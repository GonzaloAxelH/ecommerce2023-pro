(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4754],{37342:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/navigation/sidebar-navigation/with_icons_and_expandable_sections",function(){return __webpack_require__(8648)}])},8648:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),_headlessui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6512),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42237),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7543),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(68547),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(89871),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38832),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13658);let navigation=[{name:"Dashboard",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.Z,current:!0,href:"#"},{name:"Team",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Z,current:!1,children:[{name:"Overview",href:"#"},{name:"Members",href:"#"},{name:"Calendar",href:"#"},{name:"Settings",href:"#"}]},{name:"Projects",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,current:!1,children:[{name:"Overview",href:"#"},{name:"Members",href:"#"},{name:"Calendar",href:"#"},{name:"Settings",href:"#"}]},{name:"Calendar",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,current:!1,children:[{name:"Overview",href:"#"},{name:"Members",href:"#"},{name:"Calendar",href:"#"},{name:"Settings",href:"#"}]},{name:"Documents",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,current:!1,children:[{name:"Overview",href:"#"},{name:"Members",href:"#"},{name:"Calendar",href:"#"},{name:"Settings",href:"#"}]},{name:"Reports",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Z,current:!1,children:[{name:"Overview",href:"#"},{name:"Members",href:"#"},{name:"Calendar",href:"#"},{name:"Settings",href:"#"}]}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-shrink-0 items-center px-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-5 flex flex-grow flex-col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"flex-1 space-y-1 bg-white px-2","aria-label":"Sidebar",children:navigation.map(item=>item.children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.p,{as:"div",className:"space-y-1",children(param){let{open}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.p.Button,{className:classNames(item.current?"bg-gray-100 text-gray-900":"bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900","group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(item.icon,{className:"mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"flex-1",children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{className:classNames(open?"text-gray-400 rotate-90":"text-gray-300","ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"),viewBox:"0 0 20 20","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M6 6L14 10L6 14V6Z",fill:"currentColor"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.p.Panel,{className:"space-y-1",children:item.children.map(subItem=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.p.Button,{as:"a",href:subItem.href,className:"group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900",children:subItem.name},subItem.name))})]})}},item.name):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:classNames(item.current?"bg-gray-100 text-gray-900":"bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900","group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(item.icon,{className:classNames(item.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"),"aria-hidden":"true"}),item.name]})},item.name))})})]})}},6512:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{p:function(){return Le}});var l,t,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_utils_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32984),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(23784),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19946),_keyboard_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(61363),_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(64103),_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16567),_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(14157),_utils_owner_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15466),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(73781),J=((l=J||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l),Q=((t=Q||{})[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t);let V={0:e=>({...e,disclosureState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,n)=>e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId},3:(e,n)=>e.panelId===n.panelId?e:{...e,panelId:n.panelId}},B=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function v(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(B);if(null===n){let l=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,v),l}return n}B.displayName="DisclosureContext";let h=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);h.displayName="DisclosureAPIContext";let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Y(e,n){return(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(n.type,V,e,n)}H.displayName="DisclosurePanelContext";let Z=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,ee=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,l){let{defaultOpen:y=!1,...u}=n,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),t=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(l,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.h)(a=>{T.current=a},void 0===n.as||n.as===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Y,{disclosureState:y?0:1,linkedPanel:!1,buttonRef:f,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:p},D]=s,d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.z)(a=>{D({type:1});let r=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_5__.r)(T);if(!r||!p)return;let c=a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:r.getElementById(p):r.getElementById(p);null==c||c.focus()}),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:d}),[d]),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===i,close:d}),[i,d]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(B.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(h.Provider,{value:P},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.up,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(i,{0:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.ZM.Open,1:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.ZM.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:{ref:t},theirProps:u,slot:A,defaultTag:Z,name:"Disclosure"}))))}),ne=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,l){let y=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.M)(),{id:u=`headlessui-disclosure-button-${y}`,...T}=n,[t,o]=v("Disclosure.Button"),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H),s=null!==f&&f===t.panelId,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(i,l,s?null:t.buttonRef);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return o({type:2,buttonId:u}),()=>{o({type:2,buttonId:null})}},[u,o,s]);let D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.z)(r=>{var c;if(s){if(1===t.disclosureState)return;switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.R.Enter:r.preventDefault(),r.stopPropagation(),o({type:0}),null==(c=t.buttonRef.current)||c.focus()}}else switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.R.Enter:r.preventDefault(),r.stopPropagation(),o({type:0})}}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.z)(r=>{r.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_8__.R.Space&&r.preventDefault()}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.z)(r=>{var c;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__.P)(r.currentTarget)||n.disabled||(s?(o({type:0}),null==(c=t.buttonRef.current)||c.focus()):o({type:0}))}),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===t.disclosureState}),[t]),S=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__.f)(n,i),a=s?{ref:p,type:S,onKeyDown:D,onClick:P}:{ref:p,id:u,type:S,"aria-expanded":n.disabled?void 0:0===t.disclosureState,"aria-controls":t.linkedPanel?t.panelId:void 0,onKeyDown:D,onKeyUp:d,onClick:P};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:a,theirProps:T,slot:A,defaultTag:"button",name:"Disclosure.Button"})}),re=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.AN.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.AN.Static,Le=Object.assign(ee,{Button:ne,Panel:(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,l){let y=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__.M)(),{id:u=`headlessui-disclosure-panel-${y}`,...T}=n,[t,o]=v("Disclosure.Panel"),{close:f}=function K(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(h);if(null===n){let l=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,K),l}return n}("Disclosure.Panel"),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(l,t.panelRef,P=>{o({type:P?4:5})});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(o({type:3,panelId:u}),()=>{o({type:3,panelId:null})}),[u,o]);let i=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.oJ)(),p=null!==i?i===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.ZM.Open:0===t.disclosureState,D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===t.disclosureState,close:f}),[t,f]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(H.Provider,{value:t.panelId},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:{ref:s,id:u},theirProps:T,slot:D,defaultTag:"div",features:re,visible:p,name:"Disclosure.Panel"}))})})},61363:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},73781:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return o}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3855);let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])}},19946:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{M:function(){return I}});var u,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16723),_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(82180);let l=0;function r(){return++l}let I=null!=(u=react__WEBPACK_IMPORTED_MODULE_0__.useId)?u:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.H)(),[e,o]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?r:null);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.e)(()=>{null===e&&o(r())},[e]),null!=e?""+e:void 0}},16723:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let s=__webpack_require__(43393).s?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},3855:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{r.current=e},[e]),r}},14157:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";if("string"==typeof e&&"button"===e.toLowerCase())return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}},82180:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:function(){return a}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let r={serverHandoffComplete:!1};function a(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r.serverHandoffComplete);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!0!==e&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!1===r.serverHandoffComplete&&(r.serverHandoffComplete=!0)},[]),e}},23784:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{T:function(){return y},h:function(){return T}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)});return t.every(e=>null==e||(null==e?void 0:e[u]))?void 0:c}},16567:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ZM:function(){return p},oJ:function(){return s},up:function(){return C}});var e,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=((e=p||{})[e.Open=0]="Open",e[e.Closed=1]="Closed",e);function s(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}},64103:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(null==e?void 0:e.getAttribute("disabled"))==="";return!(t&&function(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}__webpack_require__.d(__webpack_exports__,{P:function(){return r}})},32984:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:function(){return u}})},15466:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return e}});var _ssr_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43393);function e(r){return _ssr_js__WEBPACK_IMPORTED_MODULE_0__.s?null:r instanceof Node?r.ownerDocument:null!=r&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}},12351:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{AN:function(){return S},l4:function(){return j},oA:function(){return F},sY:function(){return $},yV:function(){return C}});var a,e,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32984),S=((a=S||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),j=((e=j||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function $({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T(t,r);if(n)return p(s,e,a,l);let u=null!=o?o:0;if(2&u){let{static:i=!1,...d}=s;if(i)return p(d,e,a,l)}if(1&u){let{unmount:i1=!0,...d1}=s;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(i1?0:1,{0:()=>null,1:()=>p({...d1,hidden:!0,style:{display:"none"}},e,a,l)})}return p(s,e,a,l)}function p(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m(r,["unmount","static"]),u=void 0!==r.ref?{[l]:r.ref}:{},i="function"==typeof n?n(t):n;s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))"boolean"==typeof g&&(f=!0),!0===g&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "))}if(o===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(F(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},T(i.props,F(m(s,["ref"]))),d,u,function(...r){return{ref:r.every(t=>null==t)?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(i.ref,u.ref)))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o,Object.assign({},m(s,["ref"]),o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function T(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&"function"==typeof o[n]?(null!=e[n]||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o1 in e)Object.assign(t,{[o1](n,...l){for(let u of e[o1]){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function C(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function F(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}},43393:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return e}});let e="undefined"==typeof window||"undefined"==typeof document},89871:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}))});__webpack_exports__.Z=ForwardRef},13658:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}))});__webpack_exports__.Z=ForwardRef},68547:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}))});__webpack_exports__.Z=ForwardRef},42237:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))});__webpack_exports__.Z=ForwardRef},38832:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"}))});__webpack_exports__.Z=ForwardRef},7543:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))});__webpack_exports__.Z=ForwardRef}},function(__webpack_require__){__webpack_require__.O(0,[49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=37342)}),_N_E=__webpack_require__.O()}]);