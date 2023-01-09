(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5563],{42328:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/forms/radio-groups/list_with_descriptions_in_panel",function(){return __webpack_require__(55907)}])},55907:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(65451);let settings=[{name:"Public access",description:"This project would be available to anyone who has the link"},{name:"Private to Project Members",description:"Only members of this project would be able to access"},{name:"Private to you",description:"You are the only one able to access this project"}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(settings[0]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.E,{value:selected,onChange:setSelected,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.E.Label,{className:"sr-only",children:" Privacy setting "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"-space-y-px rounded-md bg-white",children:settings.map((setting,settingIdx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.E.Option,{value:setting,className(param){let{checked}=param;return classNames(0===settingIdx?"rounded-tl-md rounded-tr-md":"",settingIdx===settings.length-1?"rounded-bl-md rounded-br-md":"",checked?"bg-indigo-50 border-indigo-200 z-10":"border-gray-200","relative border p-4 flex cursor-pointer focus:outline-none")},children(param){let{active,checked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classNames(checked?"bg-indigo-600 border-transparent":"bg-white border-gray-300",active?"ring-2 ring-offset-2 ring-indigo-500":"","mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"),"aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"rounded-full bg-white w-1.5 h-1.5"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"ml-3 flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.E.Label,{as:"span",className:classNames(checked?"text-indigo-900":"text-gray-900","block text-sm font-medium"),children:setting.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.E.Description,{as:"span",className:classNames(checked?"text-indigo-700":"text-gray-500","block text-sm"),children:setting.description})]})]})}},setting.name))})]})}},39516:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{d:function(){return F},f:function(){return k}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19946),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23784),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function k(){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(r=>(t(o=>[...o,r]),()=>t(o=>{let s=o.slice(),p=s.indexOf(r);return -1!==p&&s.splice(p,1),s}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:a},e.children)},[t])]}let F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(t,c){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.M)(),{id:i=`headlessui-description-${e}`,...a}=t,r=function u(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(null===n){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return n}(),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.T)(c);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.e)(()=>r.register(i),[i,r.register]);let s={ref:o,...r.props,id:i};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})},61363:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},95389:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_:function(){return F},b:function(){return M}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19946),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16723),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23784),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function M(){let[n,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[n.length>0?n.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(l=>(r(t=>[...t,l]),()=>r(t=>{let i=t.slice(),a=i.indexOf(l);return -1!==a&&i.splice(a,1),i}))),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:o,slot:e.slot,name:e.name,props:e.props}),[o,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(u.Provider,{value:s},e.children)},[r])]}let F=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(r,d){let e=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.M)(),{id:o=`headlessui-label-${e}`,passive:s=!1,...l}=r,t=function c(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(u);if(null===n){let r=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,c),r}return n}(),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.T)(d);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.e)(()=>t.register(o),[o,t.register]);let a={ref:i,...t.props,id:o};return s&&("onClick"in a&&delete a.onClick,"onClick"in l&&delete l.onClick),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:a,theirProps:l,slot:t.slot||{},defaultTag:"label",name:t.name||"Label"})})},65451:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return ut}});var t,t1,react=__webpack_require__(67294),render=__webpack_require__(12351),use_id=__webpack_require__(19946),match=__webpack_require__(32984),use_iso_morphic_effect=__webpack_require__(16723),keyboard=__webpack_require__(61363),focus_management=__webpack_require__(84575),label=__webpack_require__(95389),description=__webpack_require__(39516),use_tree_walker=__webpack_require__(31591),use_sync_refs=__webpack_require__(23784),internal_hidden=__webpack_require__(46045),utils_form=__webpack_require__(18689),owner=__webpack_require__(15466),use_event=__webpack_require__(73781),use_controllable=__webpack_require__(31147),bugs=__webpack_require__(64103),use_latest_value=__webpack_require__(3855),use_disposables=__webpack_require__(94192),he=((t=he||{})[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t);let ke={0(n,r){let t=[...n.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...n,options:(0,focus_management.z2)(t,d=>d.element.current)}},1(n,r){let t=n.options.slice(),d=n.options.findIndex(c=>c.id===r.id);return -1===d?n:(t.splice(d,1),{...n,options:t})}},$=(0,react.createContext)(null);$.displayName="RadioGroupDataContext";let V=(0,react.createContext)(null);function Fe(n,r){return(0,match.E)(r.type,ke,n,r)}V.displayName="RadioGroupActionsContext";let Ce=(0,render.yV)(function(r,t){let d=(0,use_id.M)(),{id:c=`headlessui-radiogroup-${d}`,value:D,defaultValue:O,name:I,onChange:E,by:G=(e,i)=>e===i,disabled:h=!1,...U}=r,T=(0,use_event.z)("string"==typeof G?(e,i)=>(null==e?void 0:e[G])===(null==i?void 0:i[G]):G),[k,F]=(0,react.useReducer)(Fe,{options:[]}),a=k.options,[M,N]=(0,label.b)(),[m,L]=(0,description.f)(),C=(0,react.useRef)(null),W=(0,use_sync_refs.T)(C,t),[l,x]=(0,use_controllable.q)(D,E,O),s=(0,react.useMemo)(()=>a.find(e=>!e.propsRef.current.disabled),[a]),b=(0,react.useMemo)(()=>a.some(e=>T(e.propsRef.current.value,l)),[a,l]),u=(0,use_event.z)(e=>{var o;if(h||T(e,l))return!1;let i=null==(o=a.find(f=>T(f.propsRef.current.value,e)))?void 0:o.propsRef.current;return(null==i||!i.disabled)&&(null==x||x(e),!0)});(0,use_tree_walker.B)({container:C.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let K=(0,use_event.z)(e=>{let i=C.current;if(!i)return;let o=(0,owner.r)(i),f=a.filter(p=>!1===p.propsRef.current.disabled).map(p=>p.element.current);switch(e.key){case keyboard.R.Enter:(0,utils_form.g)(e.currentTarget);break;case keyboard.R.ArrowLeft:case keyboard.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.jA)(f,focus_management.TO.Previous|focus_management.TO.WrapAround)===focus_management.fE.Success){let y=a.find(j=>j.element.current===(null==o?void 0:o.activeElement));y&&u(y.propsRef.current.value)}break;case keyboard.R.ArrowRight:case keyboard.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.jA)(f,focus_management.TO.Next|focus_management.TO.WrapAround)===focus_management.fE.Success){let y1=a.find(j=>j.element.current===(null==o?void 0:o.activeElement));y1&&u(y1.propsRef.current.value)}break;case keyboard.R.Space:{e.preventDefault(),e.stopPropagation();let p=a.find(y=>y.element.current===(null==o?void 0:o.activeElement));p&&u(p.propsRef.current.value)}}}),w=(0,use_event.z)(e=>(F({type:0,...e}),()=>F({type:1,id:e.id}))),R=(0,react.useMemo)(()=>({value:l,firstOption:s,containsCheckedOption:b,disabled:h,compare:T,...k}),[l,s,b,h,T,k]),S=(0,react.useMemo)(()=>({registerOption:w,change:u}),[w,u]),le=(0,react.useMemo)(()=>({value:l}),[l]),_=(0,react.useRef)(null),pe=(0,use_disposables.G)();return(0,react.useEffect)(()=>{_.current&&void 0!==O&&pe.addEventListener(_.current,"reset",()=>{u(O)})},[_,u]),react.createElement(L,{name:"RadioGroup.Description"},react.createElement(N,{name:"RadioGroup.Label"},react.createElement(V.Provider,{value:S},react.createElement($.Provider,{value:R},null!=I&&null!=l&&(0,utils_form.t)({[I]:l}).map(([e,i],o)=>react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:0===o?f=>{var p;_.current=null!=(p=null==f?void 0:f.closest("form"))?p:null}:void 0,...(0,render.oA)({key:e,as:"input",type:"radio",checked:null!=i,hidden:!0,readOnly:!0,name:e,value:i})})),(0,render.sY)({ourProps:{ref:W,id:c,role:"radiogroup","aria-labelledby":M,"aria-describedby":m,onKeyDown:K},theirProps:U,slot:le,defaultTag:"div",name:"RadioGroup"})))))});var xe=((t1=xe||{})[t1.Empty=1]="Empty",t1[t1.Active=2]="Active",t1);let ut=Object.assign(Ce,{Option:(0,render.yV)(function(r,t){var w;let d=(0,use_id.M)(),{id:c=`headlessui-radiogroup-option-${d}`,value:D,disabled:O=!1,...I}=r,E=(0,react.useRef)(null),G=(0,use_sync_refs.T)(E,t),[h,U]=(0,label.b)(),[T,k]=(0,description.f)(),{addFlag:F,removeFlag:a,hasFlag:M}=function(g=0){let[r,l]=(0,react.useState)(g);return{addFlag:(0,react.useCallback)(e=>l(a=>a|e),[r]),hasFlag:(0,react.useCallback)(e=>Boolean(r&e),[r]),removeFlag:(0,react.useCallback)(e=>l(a=>a&~e),[l]),toggleFlag:(0,react.useCallback)(e=>l(a=>a^e),[l])}}(1),N=(0,use_latest_value.E)({value:D,disabled:O}),m=function ne(n){let r=(0,react.useContext)($);if(null===r){let t=Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return r}("RadioGroup.Option"),L=function ie(n){let r=(0,react.useContext)(V);if(null===r){let t=Error(`<${n} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ie),t}return r}("RadioGroup.Option");(0,use_iso_morphic_effect.e)(()=>L.registerOption({id:c,element:E,propsRef:N}),[c,L,E,r]);let C=(0,use_event.z)(R=>{var S;if((0,bugs.P)(R.currentTarget))return R.preventDefault();L.change(D)&&(F(2),null==(S=E.current)||S.focus())}),W=(0,use_event.z)(R=>{if((0,bugs.P)(R.currentTarget))return R.preventDefault();F(2)}),l=(0,use_event.z)(()=>a(2)),x=(null==(w=m.firstOption)?void 0:w.id)===c,s=m.disabled||O,b=m.compare(m.value,D),u={ref:G,id:c,role:"radio","aria-checked":b?"true":"false","aria-labelledby":h,"aria-describedby":T,"aria-disabled":!!s||void 0,tabIndex:s?-1:b||!m.containsCheckedOption&&x?0:-1,onClick:s?void 0:C,onFocus:s?void 0:W,onBlur:s?void 0:l},K=(0,react.useMemo)(()=>({checked:b,disabled:s,active:M(2)}),[b,s,M]);return react.createElement(k,{name:"RadioGroup.Description"},react.createElement(U,{name:"RadioGroup.Label"},(0,render.sY)({ourProps:u,theirProps:I,slot:K,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:label._,Description:description.d})},31147:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{q:function(){return T}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=void 0!==l,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!e||t.current||u.current?e||!t.current||d.current||(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(n=>(e||s(n),null==r?void 0:r(n)))]}},94192:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{G:function(){return p}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9362);function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}},73781:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return o}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3855);let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])}},19946:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{M:function(){return I}});var u,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16723),_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(82180);let l=0;function r(){return++l}let I=null!=(u=react__WEBPACK_IMPORTED_MODULE_0__.useId)?u:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.H)(),[e,o]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?r:null);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.e)(()=>{null===e&&o(r())},[e]),null!=e?""+e:void 0}},16723:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let s=__webpack_require__(43393).s?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},3855:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{r.current=e},[e]),r}},82180:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:function(){return a}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let r={serverHandoffComplete:!1};function a(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r.serverHandoffComplete);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!0!==e&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!1===r.serverHandoffComplete&&(r.serverHandoffComplete=!0)},[]),e}},23784:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{T:function(){return y},h:function(){return T}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73781);let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)});return t.every(e=>null==e||(null==e?void 0:e[u]))?void 0:c}},31591:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{B:function(){return F}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723),_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15466);function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.r)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}},46045:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return s},_:function(){return h}});var e,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12351),s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.yV)(function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":(2&e)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&e)==4&&(2&e)!=2&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.sY)({ourProps:d,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},64103:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(null==e?void 0:e.getAttribute("disabled"))==="";return!(t&&function(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}__webpack_require__.d(__webpack_exports__,{P:function(){return r}})},9362:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{k:function(){return m}});var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(81021);function m(){let n=[],i=[],r={enqueue(e){i.push(e)},addEventListener:(e,t,a,o)=>(e.addEventListener(t,a,o),r.add(()=>e.removeEventListener(t,a,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>r.requestAnimationFrame(()=>r.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.Y)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0){let[a]=n.splice(t,1);a()}}),dispose(){for(let e of n.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()}};return r}},84575:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{C5:function(){return S},EO:function(){return g},GO:function(){return E},TO:function(){return L},fE:function(){return N},jA:function(){return I},sP:function(){return h},tJ:function(){return F},wI:function(){return v},z2:function(){return A}});var n,o,r,r1,_disposables_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9362),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32984),_owner_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15466);let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L=((n=L||{})[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n),N=((o=N||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),T=((r=T||{})[r.Previous=-1]="Previous",r[r.Next=1]="Next",r);function E(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(f)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=((r1=F||{})[r1.Strict=0]="Strict",r1[r1.Loose=1]="Loose",r1);function h(e,t=0){var r;return e!==(null==(r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e))?void 0:r.body)&&(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(t,{0:()=>e.matches(f),1(){let l=e;for(;null!==l;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function v(e){let t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.k)().nextFrame(()=>{t&&!h(t.activeElement,0)&&S(e)})}function S(e){null==e||e.focus({preventScroll:!0})}function A(e,t=r=>r){return e.slice().sort((r,l)=>{let o=t(r),i=t(l);if(null===o||null===i)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function g(e,t){return I(E(),t,{relativeTo:e})}function I(e,t,{sorted:r=!0,relativeTo:l=null,skipElements:o=[]}={}){var e1,t1,r1;let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?r?A(e):e:E(e);o.length>0&&(n=n.filter(s=>!o.includes(s))),l=null!=l?l:i.activeElement;let d=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,n.indexOf(l))-1;if(4&t)return Math.max(0,n.indexOf(l))+1;if(8&t)return n.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=32&t?{preventScroll:!0}:{},c=0,a=n.length,u;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(16&t)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}null==(u=n[s])||u.focus(p),c+=d}while(u!==i.activeElement);return 6&t&&null!=(r1=null==(t1=null==(e1=u)?void 0:e1.matches)?void 0:t1.call(e1,"textarea,input"))&&r1&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}},18689:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function s(n,r){return n?n+"["+r+"]":r}function p(n){var t;let r=null!=(t=null==n?void 0:n.form)?t:n.closest("form");if(r){for(let i of r.elements)if("INPUT"===i.tagName&&"submit"===i.type||"BUTTON"===i.tagName&&"submit"===i.type||"INPUT"===i.nodeName&&"image"===i.type){i.click();return}}}__webpack_require__.d(__webpack_exports__,{g:function(){return p},t:function(){return function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))!function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):"boolean"==typeof t?n.push([r,t?"1":"0"]):"string"==typeof t?n.push([r,t]):"number"==typeof t?n.push([r,`${t}`]):null==t?n.push([r,""]):e(t,r,n)}(t,s(r,i),o);return t}}})},32984:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:function(){return u}})},81021:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}__webpack_require__.d(__webpack_exports__,{Y:function(){return t}})},15466:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return e}});var _ssr_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43393);function e(r){return _ssr_js__WEBPACK_IMPORTED_MODULE_0__.s?null:r instanceof Node?r.ownerDocument:null!=r&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}},12351:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{AN:function(){return S},l4:function(){return j},oA:function(){return F},sY:function(){return $},yV:function(){return C}});var a,e,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32984),S=((a=S||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),j=((e=j||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function $({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T(t,r);if(n)return p(s,e,a,l);let u=null!=o?o:0;if(2&u){let{static:i=!1,...d}=s;if(i)return p(d,e,a,l)}if(1&u){let{unmount:i1=!0,...d1}=s;return(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(i1?0:1,{0:()=>null,1:()=>p({...d1,hidden:!0,style:{display:"none"}},e,a,l)})}return p(s,e,a,l)}function p(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m(r,["unmount","static"]),u=void 0!==r.ref?{[l]:r.ref}:{},i="function"==typeof n?n(t):n;s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))"boolean"==typeof g&&(f=!0),!0===g&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "))}if(o===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(F(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},T(i.props,F(m(s,["ref"]))),d,u,function(...r){return{ref:r.every(t=>null==t)?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(i.ref,u.ref)))}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o,Object.assign({},m(s,["ref"]),o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function T(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&"function"==typeof o[n]?(null!=e[n]||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o1 in e)Object.assign(t,{[o1](n,...l){for(let u of e[o1]){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function C(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function F(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}},43393:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return e}});let e="undefined"==typeof window||"undefined"==typeof document}},function(__webpack_require__){__webpack_require__.O(0,[49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=42328)}),_N_E=__webpack_require__.O()}]);