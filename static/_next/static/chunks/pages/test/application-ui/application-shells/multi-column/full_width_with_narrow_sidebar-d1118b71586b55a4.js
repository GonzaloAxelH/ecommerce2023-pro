(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38515],{65376:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/application-shells/multi-column/full_width_with_narrow_sidebar",function(){return __webpack_require__(99594)}])},99594:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(72510),_headlessui_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(59810),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(57349),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(7266),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(38832),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(40004),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(30097),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43529),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(84529),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(311),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(43407),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(64412),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(31415);let user={name:"Whitney Francis",email:"whitney.francis@example.com",imageUrl:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},navigation=[{name:"Inboxes",href:"#",children:[{name:"Technical Support",href:"#"},{name:"Sales",href:"#"},{name:"General",href:"#"}]},{name:"Reporting",href:"#",children:[]},{name:"Settings",href:"#",children:[]}],sidebarNavigation=[{name:"Open",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Z,current:!0},{name:"Archive",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,current:!1},{name:"Customers",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,current:!1},{name:"Flagged",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,current:!1},{name:"Spam",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Z,current:!1},{name:"Drafts",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.Z,current:!1}],userNavigation=[{name:"Your Profile",href:"#"},{name:"Sign out",href:"#"}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[mobileMenuOpen,setMobileMenuOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-full flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header",{className:"relative flex h-16 flex-shrink-0 items-center bg-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute inset-y-0 left-0 md:static md:flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"flex h-16 w-16 items-center justify-center bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=white",alt:"Your Company"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto md:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"inbox-select",className:"sr-only",children:"Choose inbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{id:"inbox-select",className:"rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600",defaultValue:sidebarNavigation.find(item=>item.current).name,children:sidebarNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{children:item.name},item.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_8__.Z,{className:"h-5 w-5 text-gray-500","aria-hidden":"true"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600",onClick:()=>setMobileMenuOpen(!0),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-w-0 flex-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative max-w-2xl text-gray-400 focus-within:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"desktop-search",className:"sr-only",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"desktop-search",type:"search",placeholder:"Search",className:"block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent focus:ring-0 sm:text-sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-10 flex flex-shrink-0 items-center space-x-10 pr-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{"aria-label":"Global",className:"flex space-x-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-sm font-medium text-gray-900",children:"Inboxes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-sm font-medium text-gray-900",children:"Reporting"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-sm font-medium text-gray-900",children:"Settings"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"inline-flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v,{as:"div",className:"relative inline-block text-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-8 rounded-full",src:user.imageUrl,alt:""})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"py-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Item,{children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:classNames(active?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Your Profile"})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Item,{children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:classNames(active?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Sign Out"})}})]})})})]})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.u.Root,{show:mobileMenuOpen,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.V,{as:"div",className:"relative z-40 md:hidden",onClose:setMobileMenuOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 z-40",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-150 sm:ease-in-out sm:duration-300",enterFrom:"transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100",enterTo:"transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100",leave:"transition ease-in duration-150 sm:ease-in-out sm:duration-300",leaveFrom:"transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100",leaveTo:"transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.V.Panel,{className:"fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg","aria-label":"Global",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-16 items-center justify-between px-4 sm:px-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"block h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600",onClick:()=>setMobileMenuOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-8xl mx-auto mt-2 px-4 sm:px-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative text-gray-400 focus-within:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"mobile-search",className:"sr-only",children:"Search all inboxes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"mobile-search",type:"search",placeholder:"Search all inboxes",className:"block w-full rounded-md border-gray-300 pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center justify-center pl-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-8xl mx-auto py-3 px-2 sm:px-4",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100",children:item.name}),item.children.map(child=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:child.href,className:"block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100",children:child.name},child.name))]},item.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"max-w-8xl mx-auto flex items-center px-4 sm:px-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-10 w-10 rounded-full",src:user.imageUrl,alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-3 min-w-0 flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"truncate text-base font-medium text-gray-800",children:user.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"truncate text-sm font-medium text-gray-500",children:user.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4",children:userNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50",children:item.name},item.name))})]})]})})})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex min-h-0 flex-1 overflow-hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{"aria-label":"Sidebar",className:"hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative flex w-20 flex-col space-y-3 p-3",children:sidebarNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:item.href,className:classNames(item.current?"bg-gray-900 text-white":"text-gray-400 hover:bg-gray-700","flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(item.icon,{className:"h-6 w-6","aria-hidden":"true"})]},item.name))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main",{className:"min-w-0 flex-1 border-t border-gray-200 lg:flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{"aria-labelledby":"primary-heading",className:"flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{id:"primary-heading",className:"sr-only",children:"Home"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("aside",{className:"hidden lg:order-first lg:block lg:flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-gray-100"})})]})]})]})})}}},function(__webpack_require__){__webpack_require__.O(0,[5500,11167,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=65376)}),_N_E=__webpack_require__.O()}]);