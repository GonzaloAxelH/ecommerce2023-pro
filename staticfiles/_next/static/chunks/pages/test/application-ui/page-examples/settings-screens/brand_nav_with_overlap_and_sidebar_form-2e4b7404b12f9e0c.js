(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37626],{29531:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/page-examples/settings-screens/brand_nav_with_overlap_and_sidebar_form",function(){return __webpack_require__(88075)}])},88075:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6512),_headlessui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(72510),_headlessui_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(77768),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(7266),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(30097),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(87272),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9878),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(64412),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(77495),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8910),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(31415),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(43407);let user={name:"Debbie Lewis",handle:"deblewis",email:"debbielewis@example.com",imageUrl:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"},navigation=[{name:"Dashboard",href:"#",current:!0},{name:"Jobs",href:"#",current:!1},{name:"Applicants",href:"#",current:!1},{name:"Company",href:"#",current:!1}],subNavigation=[{name:"Profile",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Z,current:!0},{name:"Account",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,current:!1},{name:"Password",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,current:!1},{name:"Notifications",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,current:!1},{name:"Billing",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Z,current:!1},{name:"Integrations",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.Z,current:!1}],userNavigation=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[availableToHire,setAvailableToHire]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),[privateAccount,setPrivateAccount]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[allowCommenting,setAllowCommenting]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),[allowMentions,setAllowMentions]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.p,{as:"div",className:"relative overflow-hidden bg-sky-700 pb-32",children(param){let{open}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:classNames(open?"bg-sky-900":"bg-transparent","relative z-10 border-b border-teal-500 border-opacity-25 lg:border-none lg:bg-transparent"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center px-2 lg:px-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"block h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=teal&shade=400",alt:"Your Company"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:ml-6 lg:block lg:space-x-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:classNames(item.current?"bg-black bg-opacity-25":"hover:bg-sky-800","rounded-md py-2 px-3 text-sm font-medium text-white"),children:item.name},item.name))})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-full max-w-lg lg:max-w-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative text-sky-100 focus-within:text-gray-400",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"h-5 w-5 flex-shrink-0","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"search",name:"search",className:"block w-full rounded-md border border-transparent bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 leading-5 placeholder-sky-100 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm",placeholder:"Search",type:"search"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex lg:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.p.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open main menu"}),open?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"block h-6 w-6 flex-shrink-0","aria-hidden":"true"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__.Z,{className:"block h-6 w-6 flex-shrink-0","aria-hidden":"true"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:ml-4 lg:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v,{as:"div",className:"relative ml-4 flex-shrink-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Button,{className:"flex rounded-full text-sm text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-8 rounded-full",src:user.imageUrl,alt:""})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:userNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_12__.v.Item,{children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:classNames(active?"bg-gray-100":"","block py-2 px-4 text-sm text-gray-700"),children:item.name})}},item.name))})})]})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.p.Panel,{className:"bg-sky-900 lg:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"space-y-1 px-2 pt-2 pb-3",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.p.Button,{as:"a",href:item.href,className:classNames(item.current?"bg-black bg-opacity-25":"hover:bg-sky-800","block rounded-md py-2 px-3 text-base font-medium text-white"),children:item.name},item.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"border-t border-sky-800 pt-4 pb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center px-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-10 w-10 rounded-full",src:user.imageUrl,alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-base font-medium text-white",children:user.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-sm font-medium text-sky-200",children:user.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-3 px-2",children:userNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.p.Button,{as:"a",href:item.href,className:"block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white",children:item.name},item.name))})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{"aria-hidden":"true",className:classNames(open?"bottom-0":"inset-y-0","absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"absolute inset-0 flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-full w-1/2",style:{backgroundColor:"#0a527b"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-full w-1/2",style:{backgroundColor:"#065d8c"}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative flex justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{className:"flex-shrink-0",width:1750,height:308,viewBox:"0 0 1750 308",xmlns:"http://www.w3.org/2000/svg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M284.161 308H1465.84L875.001 182.413 284.161 308z",fill:"#0369a1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M1465.84 308L16.816 0H1750v308h-284.16z",fill:"#065d8c"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M1733.19 0L284.161 308H0V0h1733.19z",fill:"#0a527b"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M875.001 182.413L1733.19 0H16.816l858.185 182.413z",fill:"#0a4f76"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{className:"relative py-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-white",children:"Settings"})})})]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main",{className:"relative -mt-32",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"overflow-hidden rounded-lg bg-white shadow",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("aside",{className:"py-6 lg:col-span-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"space-y-1",children:subNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:item.href,className:classNames(item.current?"bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700":"border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900","group border-l-4 px-3 py-2 flex items-center text-sm font-medium"),"aria-current":item.current?"page":void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(item.icon,{className:classNames(item.current?"text-teal-500 group-hover:text-teal-500":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"),"aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"truncate",children:item.name})]},item.name))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{className:"divide-y divide-gray-200 lg:col-span-9",action:"#",method:"POST",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"py-6 px-4 sm:p-6 lg:pb-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-lg font-medium leading-6 text-gray-900",children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"This information will be displayed publicly so be careful what you share."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 flex flex-col lg:flex-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex-grow space-y-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"Username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-1 flex rounded-md shadow-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm",children:"workcation.com/"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",name:"username",id:"username",autoComplete:"username",className:"block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm",defaultValue:user.handle})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium text-gray-700",children:"About"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{id:"about",name:"about",rows:3,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm",defaultValue:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Brief description for your profile. URLs are hyperlinked."})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-sm font-medium text-gray-700","aria-hidden":"true",children:"Photo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-1 lg:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-full w-full rounded-full",src:user.imageUrl,alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-5 rounded-md shadow-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:"mobile-user-photo",className:"pointer-events-none relative text-sm font-medium leading-4 text-gray-700",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Change"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:" user photo"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"mobile-user-photo",name:"user-photo",type:"file",className:"absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative hidden overflow-hidden rounded-full lg:block",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"relative h-40 w-40 rounded-full",src:user.imageUrl,alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:"desktop-user-photo",className:"absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Change"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:" user photo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"file",id:"desktop-user-photo",name:"user-photo",className:"absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"})]})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 grid grid-cols-12 gap-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium text-gray-700",children:"First name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",name:"first-name",id:"first-name",autoComplete:"given-name",className:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"last-name",className:"block text-sm font-medium text-gray-700",children:"Last name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",name:"last-name",id:"last-name",autoComplete:"family-name",className:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-span-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"url",className:"block text-sm font-medium text-gray-700",children:"URL"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",name:"url",id:"url",className:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700",children:"Company"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",name:"company",id:"company",autoComplete:"organization",className:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"divide-y divide-gray-200 pt-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"px-4 sm:px-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-lg font-medium leading-6 text-gray-900",children:"Privacy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Ornare eu a volutpat eget vulputate. Fringilla commodo amet."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{role:"list",className:"mt-2 divide-y divide-gray-200",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Group,{as:"li",className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Label,{as:"p",className:"text-sm font-medium text-gray-900",passive:!0,children:"Available to hire"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Description,{className:"text-sm text-gray-500",children:"Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r,{checked:availableToHire,onChange:setAvailableToHire,className:classNames(availableToHire?"bg-teal-500":"bg-gray-200","relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",className:classNames(availableToHire?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Group,{as:"li",className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Label,{as:"p",className:"text-sm font-medium text-gray-900",passive:!0,children:"Make account private"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Description,{className:"text-sm text-gray-500",children:"Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r,{checked:privateAccount,onChange:setPrivateAccount,className:classNames(privateAccount?"bg-teal-500":"bg-gray-200","relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",className:classNames(privateAccount?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Group,{as:"li",className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Label,{as:"p",className:"text-sm font-medium text-gray-900",passive:!0,children:"Allow commenting"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Description,{className:"text-sm text-gray-500",children:"Integer amet, nunc hendrerit adipiscing nam. Elementum ame"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r,{checked:allowCommenting,onChange:setAllowCommenting,className:classNames(allowCommenting?"bg-teal-500":"bg-gray-200","relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",className:classNames(allowCommenting?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Group,{as:"li",className:"flex items-center justify-between py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Label,{as:"p",className:"text-sm font-medium text-gray-900",passive:!0,children:"Allow mentions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r.Description,{className:"text-sm text-gray-500",children:"Adipiscing est venenatis enim molestie commodo eu gravid"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.r,{checked:allowMentions,onChange:setAllowMentions,className:classNames(allowMentions?"bg-teal-500":"bg-gray-200","relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",className:classNames(allowMentions?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-4 flex justify-end py-4 px-4 sm:px-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",children:"Cancel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"submit",className:"ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",children:"Save"})]})]})]})]})})})})]})}}},function(__webpack_require__){__webpack_require__.O(0,[90378,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=29531)}),_N_E=__webpack_require__.O()}]);