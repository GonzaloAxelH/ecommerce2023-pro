(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29150],{74842:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/navigation/command-palettes/semi_transparent_with_icons",function(){return __webpack_require__(61412)}])},61412:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(59810),_headlessui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(94789),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(7266),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34332),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(97535),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(58907),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(21809),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(68547);let projects=[{id:1,name:"Workflow Inc. / Website Redesign",url:"#"}],recent=[projects[0]],quickActions=[{name:"Add new file...",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Z,shortcut:"N",url:"#"},{name:"Add new folder...",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,shortcut:"F",url:"#"},{name:"Add hashtag...",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,shortcut:"H",url:"#"},{name:"Add label...",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,shortcut:"L",url:"#"}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),filteredProjects=""===query?[]:projects.filter(project=>project.name.toLowerCase().includes(query.toLowerCase()));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.u.Root,{show:open,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,afterLeave:()=>setQuery(""),appear:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.V,{as:"div",className:"relative z-10",onClose:setOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.V.Panel,{className:"mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.h,{onChange:item=>window.location=item.url,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.h.Input,{className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:event=>setQuery(event.target.value)})]}),(""===query||filteredProjects.length>0)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.h.Options,{static:!0,className:"max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"p-2",children:[""===query&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"mt-4 mb-2 px-3 text-xs font-semibold text-gray-900",children:"Recent searches"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"text-sm text-gray-700",children:(""===query?recent:filteredProjects).map(project=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.h.Option,{value:project,className(param){let{active}=param;return classNames("flex cursor-default select-none items-center rounded-md px-3 py-2",active&&"bg-gray-900 bg-opacity-5 text-gray-900")},children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__.Z,{className:classNames("h-6 w-6 flex-none text-gray-900 text-opacity-40",active&&"text-opacity-100"),"aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-3 flex-auto truncate",children:project.name}),active&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-3 flex-none text-gray-500",children:"Jump to..."})]})}},project.id))})]}),""===query&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"p-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"sr-only",children:"Quick actions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"text-sm text-gray-700",children:quickActions.map(action=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.h.Option,{value:action,className(param){let{active}=param;return classNames("flex cursor-default select-none items-center rounded-md px-3 py-2",active&&"bg-gray-900 bg-opacity-5 text-gray-900")},children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(action.icon,{className:classNames("h-6 w-6 flex-none text-gray-900 text-opacity-40",active&&"text-opacity-100"),"aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-3 flex-auto truncate",children:action.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"ml-3 flex-none text-xs font-semibold text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd",{className:"font-sans",children:"⌘"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd",{className:"font-sans",children:action.shortcut})]})]})}},action.shortcut))})]})]}),""!==query&&0===filteredProjects.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"py-14 px-6 text-center sm:px-14",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"mx-auto h-6 w-6 text-gray-900 text-opacity-40","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-4 text-sm text-gray-900",children:"We couldn't find any projects with that term. Please try again."})]})]})})})})]})})}}},function(__webpack_require__){__webpack_require__.O(0,[5500,24282,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=74842)}),_N_E=__webpack_require__.O()}]);