"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74137,6137,89204],{86215:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return St}});var f,o,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_utils_match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32984),_utils_render_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12351),_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(23784),_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(19946),_keyboard_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(61363),_utils_bugs_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(64103),_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(84575),_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(16567),_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(14157),_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(39650),_utils_owner_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(15466),_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(51074),_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14007),_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(46045),_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(73781),_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(70638),_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3855),Ce=((f=Ce||{})[f.Open=0]="Open",f[f.Closed=1]="Closed",f),Oe=((o=Oe||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let Me={0:r=>({...r,popoverState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(r.popoverState,{0:1,1:0})}),1:r=>1===r.popoverState?r:{...r,popoverState:1},2:(r,n)=>r.button===n.button?r:{...r,button:n.button},3:(r,n)=>r.buttonId===n.buttonId?r:{...r,buttonId:n.buttonId},4:(r,n)=>r.panel===n.panel?r:{...r,panel:n.panel},5:(r,n)=>r.panelId===n.panelId?r:{...r,panelId:n.panelId}},ne=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Z(r){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ne);if(null===n){let f=Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,Z),f}return n}ne.displayName="PopoverContext";let re=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function le(r){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(re);if(null===n){let f=Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,le),f}return n}re.displayName="PopoverAPIContext";let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function ve(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae)}ae.displayName="PopoverGroupContext";let ue=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function Fe(r,n){return(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(n.type,Me,r,n)}ue.displayName="PopoverPanelContext";let he=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,f){var O;let I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),b=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(f,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.h)(e=>{I.current=e})),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Fe,{popoverState:1,buttons:[],button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),afterPanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),[{popoverState:o,button:t,buttonId:P,panel:a,panelId:L,beforePanelSentinel:F,afterPanelSentinel:v},u]=S,s=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__.i)(null!=(O=I.current)?O:t),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(!t||!a)return!1;for(let M of document.querySelectorAll("body > *"))if(Number(null==M?void 0:M.contains(t))^Number(null==M?void 0:M.contains(a)))return!0;let e=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.GO)(),l=e.indexOf(t),d=(l+e.length-1)%e.length,E=(l+1)%e.length,D=e[d],Y=e[E];return!a.contains(D)&&!a.contains(Y)},[t,a]),c=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.E)(P),T=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_6__.E)(L),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:c,panelId:T,close:()=>u({type:1})}),[c,T,u]),A=ve(),C=null==A?void 0:A.registerPopover,k=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{var e;return null!=(e=null==A?void 0:A.isFocusWithinPopoverGroup())?e:(null==s?void 0:s.activeElement)&&((null==t?void 0:t.contains(s.activeElement))||(null==a?void 0:a.contains(s.activeElement)))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>null==C?void 0:C(g),[C,g]),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_8__.O)(null==s?void 0:s.defaultView,"focus",e=>{var l,d,E,D;0===o&&(k()||!t||!a||e.target!==window&&(null!=(d=null==(l=F.current)?void 0:l.contains)&&d.call(l,e.target)||null!=(D=null==(E=v.current)?void 0:E.contains)&&D.call(E,e.target)||u({type:1})))},!0),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_9__.O)([t,a],(e,l)=>{u({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.sP)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.tJ.Loose)||(e.preventDefault(),null==t||t.focus())},0===o);let B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(e=>{u({type:1});let l=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:t:t;null==l||l.focus()}),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:B,isPortalled:p}),[B,p]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===o,close:B}),[o,B]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ne.Provider,{value:S},react__WEBPACK_IMPORTED_MODULE_0__.createElement(re.Provider,{value:W},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.up,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(o,{0:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.ZM.Open,1:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.ZM.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:{ref:b},theirProps:n,slot:i,defaultTag:"div",name:"Popover"}))))}),De=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,f){let I=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.M)(),{id:b=`headlessui-popover-button-${I}`,...S}=n,[o,t]=Z("Popover.Button"),{isPortalled:P}=le("Popover.Button"),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),L=`headlessui-focus-sentinel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.M)()}`,F=ve(),v=null==F?void 0:F.closeOthers,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ue),s=null!==u&&u===o.panelId;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return t({type:3,buttonId:b}),()=>{t({type:3,buttonId:null})}},[b,t]);let p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(a,f,s?null:e=>{if(e)o.buttons.push(b);else{let l=o.buttons.indexOf(b);-1!==l&&o.buttons.splice(l,1)}o.buttons.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&t({type:2,button:e})}),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(a,f),T=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__.i)(a),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(e=>{var l,d,E;if(s){if(1===o.popoverState)return;switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Enter:e.preventDefault(),null==(d=(l=e.target).click)||d.call(l),t({type:1}),null==(E=o.button)||E.focus()}}else switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Enter:e.preventDefault(),e.stopPropagation(),1===o.popoverState&&(null==v||v(o.buttonId)),t({type:0});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Escape:if(0!==o.popoverState)return null==v?void 0:v(o.buttonId);if(!a.current||(null==T?void 0:T.activeElement)&&!a.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),t({type:1})}}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(e=>{s||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Space&&e.preventDefault()}),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(e=>{var l,d;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_13__.P)(e.currentTarget)||n.disabled||(s?(t({type:1}),null==(l=o.button)||l.focus()):(e.preventDefault(),e.stopPropagation(),1===o.popoverState&&(null==v||v(o.buttonId)),t({type:0}),null==(d=o.button)||d.focus()))}),k=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(e=>{e.preventDefault(),e.stopPropagation()}),B=0===o.popoverState,W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:B}),[B]),i=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_14__.f)(n,a),m=s?{ref:c,type:i,onKeyDown:g,onClick:C}:{ref:p,id:o.buttonId,type:i,"aria-expanded":n.disabled?void 0:0===o.popoverState,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:g,onKeyUp:A,onClick:C,onMouseDown:k},R=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.l)(),O=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{let e=o.panel;e&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(R.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.N.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.jA)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.TO.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.N.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.jA)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.TO.Last)})});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:m,theirProps:S,slot:W,defaultTag:"button",name:"Popover.Button"}),B&&!s&&P&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__._,{id:L,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.A.Focusable,as:"button",type:"button",onFocus:O}))}),ke=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.AN.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.AN.Static,Ge=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,f){let I=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.M)(),{id:b=`headlessui-popover-overlay-${I}`,...S}=n,[{popoverState:o},t]=Z("Popover.Overlay"),P=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(f),a=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.oJ)(),L=null!==a?a===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.ZM.Open:0===o,F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(s=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_13__.P)(s.currentTarget))return s.preventDefault();t({type:1})}),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===o}),[o]);return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:{ref:P,id:b,"aria-hidden":!0,onClick:F},theirProps:S,slot:v,defaultTag:"div",features:ke,visible:L,name:"Popover.Overlay"})}),_e=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.AN.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.AN.Static,St=Object.assign(he,{Button:De,Overlay:Ge,Panel:(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,f){let I=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.M)(),{id:b=`headlessui-popover-panel-${I}`,focus:S=!1,...o}=n,[t,P]=Z("Popover.Panel"),{close:a,isPortalled:L}=le("Popover.Panel"),F=`headlessui-focus-sentinel-before-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.M)()}`,v=`headlessui-focus-sentinel-after-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_11__.M)()}`,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(u,f,i=>{P({type:4,panel:i})}),p=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_4__.i)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(P({type:5,panelId:b}),()=>{P({type:5,panelId:null})}),[b,P]);let c=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.oJ)(),T=null!==c?c===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.ZM.Open:0===t.popoverState,g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(i=>{var m;if(i.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.R.Escape){if(0!==t.popoverState||!u.current||(null==p?void 0:p.activeElement)&&!u.current.contains(p.activeElement))return;i.preventDefault(),i.stopPropagation(),P({type:1}),null==(m=t.button)||m.focus()}});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var i;n.static||1===t.popoverState&&(null==(i=n.unmount)||i)&&P({type:4,panel:null})},[t.popoverState,n.unmount,n.static,P]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!S||0!==t.popoverState||!u.current)return;let i=null==p?void 0:p.activeElement;u.current.contains(i)||(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.jA)(u.current,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.TO.First)},[S,u,t.popoverState]);let A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:0===t.popoverState,close:a}),[t,a]),C={ref:s,id:t.panelId,onKeyDown:g,onBlur:S&&0===t.popoverState?i=>{var R,O,e,l,d;let m=i.relatedTarget;!m||!u.current||null!=(R=u.current)&&R.contains(m)||(P({type:1}),((null==(e=null==(O=t.beforePanelSentinel.current)?void 0:O.contains)?void 0:e.call(O,m))||(null==(d=null==(l=t.afterPanelSentinel.current)?void 0:l.contains)?void 0:d.call(l,m)))&&m.focus({preventScroll:!0}))}:void 0,tabIndex:-1},k=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.l)(),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{let i=u.current;i&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(k.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.N.Forwards](){(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.jA)(i,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.TO.First)},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.N.Backwards](){var R;null==(R=t.button)||R.focus({preventScroll:!0})}})}),W=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{let i=u.current;i&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(k.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.N.Forwards](){var E,D,Y;if(!t.button)return;let R=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.GO)(),O=R.indexOf(t.button),e=R.slice(0,O+1),d=[...R.slice(O+1),...e];for(let M of d.slice())if((null==(D=null==(E=null==M?void 0:M.id)?void 0:E.startsWith)?void 0:D.call(E,"headlessui-focus-sentinel-"))||(null==(Y=t.panel)?void 0:Y.contains(M))){let pe=d.indexOf(M);-1!==pe&&d.splice(pe,1)}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.jA)(d,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.TO.First,{sorted:!1})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_15__.N.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.jA)(i,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_5__.TO.Last)})});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue.Provider,{value:t.panelId},T&&L&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__._,{id:F,ref:t.beforePanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.A.Focusable,as:"button",type:"button",onFocus:B}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:C,theirProps:o,slot:A,defaultTag:"div",features:_e,visible:T,name:"Popover.Panel"}),T&&L&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__._,{id:v,ref:t.afterPanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_16__.A.Focusable,as:"button",type:"button",onFocus:W}))}),Group:(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.yV)(function(n,f){let I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),b=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.T)(I,f),[S,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),t=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>{o(c=>{let T=c.indexOf(p);if(-1!==T){let g=c.slice();return g.splice(T,1),g}return c})}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>(o(c=>[...c,p]),()=>t(p))),a=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(()=>{var T;let p=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_17__.r)(I);if(!p)return!1;let c=p.activeElement;return!!(null!=(T=I.current)&&T.contains(c))||S.some(g=>{var A,C;return(null==(A=p.getElementById(g.buttonId.current))?void 0:A.contains(c))||(null==(C=p.getElementById(g.panelId.current))?void 0:C.contains(c))})}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.z)(p=>{for(let c of S)c.buttonId.current!==p&&c.close()}),F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:P,unregisterPopover:t,isFocusWithinPopoverGroup:a,closeOthers:L}),[P,t,a,L]),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ae.Provider,{value:F},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.sY)({ourProps:{ref:b},theirProps:n,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},14157:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return s}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16723);function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";if("string"==typeof e&&"button"===e.toLowerCase())return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}},13840:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},57349:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},27489:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},85973:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))});__webpack_exports__.Z=ForwardRef},43407:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});__webpack_exports__.Z=ForwardRef},85755:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"}))});__webpack_exports__.Z=ForwardRef},89871:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}))});__webpack_exports__.Z=ForwardRef},13658:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}))});__webpack_exports__.Z=ForwardRef},87243:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"}))});__webpack_exports__.Z=ForwardRef},6551:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"}))});__webpack_exports__.Z=ForwardRef},67377:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"}))});__webpack_exports__.Z=ForwardRef},21321:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"}))});__webpack_exports__.Z=ForwardRef},59968:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"}))});__webpack_exports__.Z=ForwardRef},76223:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"}))});__webpack_exports__.Z=ForwardRef},31415:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});__webpack_exports__.Z=ForwardRef}}]);