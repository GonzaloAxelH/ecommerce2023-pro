(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81754],{25939:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/page-examples/detail-screens/with_page_heading_and_stacked_list",function(){return __webpack_require__(22072)}])},22072:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6512),_headlessui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(72510),_headlessui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(64729),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7266),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17524),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1452),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(53445),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(98840),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(36338),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(20402),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(55913),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(13840),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(57349),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(11155),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(11332),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(8650),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(98734),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31415),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43407),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(64412);let user={name:"Whitney Francis",email:"whitney.francis@example.com",imageUrl:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},navigation=[{name:"Dashboard",href:"#",current:!0},{name:"Jobs",href:"#",current:!1},{name:"Applicants",href:"#",current:!1},{name:"Company",href:"#",current:!1}],userNavigation=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}],tabs=[{name:"Applied",href:"#",count:"2",current:!1},{name:"Phone Screening",href:"#",count:"4",current:!1},{name:"Interview",href:"#",count:"6",current:!0},{name:"Offer",href:"#",current:!1},{name:"Disqualified",href:"#",current:!1}],candidates=[{name:"Emily Selman",email:"emily.selman@example.com",imageUrl:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",applied:"January 7, 2020",appliedDatetime:"2020-07-01T15:34:56",status:"Completed phone screening"}],publishingOptions=[{name:"Published",description:"This job posting can be viewed by anyone who has the link.",current:!0},{name:"Draft",description:"This job posting will no longer be publicly accessible.",current:!1}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(publishingOptions[0]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"min-h-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.p,{as:"nav",className:"bg-gray-50",children(param){let{open}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative flex h-16 items-center justify-between border-b border-gray-200",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500",alt:"Your Company"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:ml-10 lg:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex space-x-4",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:classNames(item.current?"bg-gray-100":"hover:text-gray-700","px-3 py-2 rounded-md text-sm font-medium text-gray-900"),"aria-current":item.current?"page":void 0,children:item.name},item.name))})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-full max-w-lg lg:max-w-xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative text-gray-400 focus-within:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.Z,{className:"h-5 w-5","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"search",className:"block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm",placeholder:"Search",type:"search",name:"search"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex lg:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.p.Button,{className:"inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open main menu"}),open?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:ml-4 lg:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v,{as:"div",className:"relative ml-3 flex-shrink-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Button,{className:"flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-8 rounded-full",src:user.imageUrl,alt:""})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:userNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Item,{children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:classNames(active?"bg-gray-100":"","block py-2 px-4 text-sm text-gray-700"),children:item.name})}},item.name))})})]})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.p.Panel,{className:"border-b border-gray-200 bg-gray-50 lg:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"space-y-1 px-2 pt-2 pb-3",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.p.Button,{as:"a",href:item.href,className:classNames(item.current?"bg-gray-100":"hover:bg-gray-100","block px-3 py-2 rounded-md font-medium text-gray-900"),"aria-current":item.current?"page":void 0,children:item.name},item.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"border-t border-gray-200 pt-4 pb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center px-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-10 w-10 rounded-full",src:user.imageUrl,alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"ml-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-base font-medium text-gray-800",children:user.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-sm font-medium text-gray-500",children:user.email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"View notifications"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-3 space-y-1 px-2",children:userNavigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.p.Button,{as:"a",href:item.href,className:"block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100",children:item.name},item.name))})]})]})]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{className:"bg-gray-50 py-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"flex","aria-label":"Breadcrumb",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol",{role:"list",className:"flex items-center space-x-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-sm font-medium text-gray-500 hover:text-gray-700",children:"Jobs"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",children:"Engineering"})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",children:"Back End Developer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Full-time"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.Z,{className:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Remote"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_12__.Z,{className:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"$120k – $140k"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_13__.Z,{className:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Closing on January 9, 2020"]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-5 flex xl:mt-0 xl:ml-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hidden sm:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Edit"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-3 hidden sm:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),"View"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.R,{as:"div",value:selected,onChange:setSelected,className:"sm:ml-3",children(param){let{open}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.R.Label,{className:"sr-only",children:" Change published status "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"inline-flex divide-x divide-purple-600 rounded-md shadow-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"inline-flex divide-x divide-purple-600 rounded-md shadow-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"inline-flex items-center rounded-l-md border border-transparent bg-purple-500 py-2 pl-3 pr-4 text-white shadow-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_17__.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"ml-2.5 text-sm font-medium",children:selected.name})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.R.Button,{className:"inline-flex items-center rounded-l-none rounded-r-md bg-purple-500 p-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Change published status"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_18__.Z,{className:"h-5 w-5 text-white","aria-hidden":"true"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.u,{show:open,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.R.Options,{className:"absolute left-0 z-10 mt-2 -mr-1 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-auto sm:right-0",children:publishingOptions.map(option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.R.Option,{className(param){let{active}=param;return classNames(active?"text-white bg-purple-500":"text-gray-900","cursor-default select-none p-4 text-sm")},value:option,children(param){let{selected,active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:selected?"font-semibold":"font-normal",children:option.name}),selected?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:active?"text-white":"text-purple-500",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_17__.Z,{className:"h-5 w-5","aria-hidden":"true"})}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:classNames(active?"text-purple-200":"text-gray-500","mt-2"),children:option.description})]})}},option.name))})})]})]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v,{as:"div",className:"relative ml-3 sm:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Button,{className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",children:["More",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_18__.Z,{className:"-mr-1 ml-2 h-5 w-5 text-gray-500","aria-hidden":"true"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Items,{className:"absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Item,{children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:classNames(active?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Edit"})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.v.Item,{children(param){let{active}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:classNames(active?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"View"})}})]})})]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main",{className:"pt-8 pb-16",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Candidates"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"sm:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{id:"tabs",name:"tabs",className:"mt-4 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm",defaultValue:tabs.find(tab=>tab.current).name,children:tabs.map(tab=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{children:tab.name},tab.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden sm:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"border-b border-gray-200",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:"mt-2 -mb-px flex space-x-8","aria-label":"Tabs",children:tabs.map(tab=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:tab.href,className:classNames(tab.current?"border-purple-500 text-purple-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"),children:[tab.name,tab.count?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classNames(tab.current?"bg-purple-100 text-purple-600":"bg-gray-100 text-gray-900","hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"),children:tab.count}):null]},tab.name))})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0",children:candidates.map(candidate=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"group block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center py-5 px-4 sm:py-6 sm:px-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex min-w-0 flex-1 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-12 w-12 rounded-full group-hover:opacity-75",src:candidate.imageUrl,alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"truncate text-sm font-medium text-purple-600",children:candidate.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"mt-2 flex items-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_19__.Z,{className:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"truncate",children:candidate.email})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden md:block",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"text-sm text-gray-900",children:["Applied on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("time",{dateTime:candidate.appliedDatetime,children:candidate.applied})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"mt-2 flex items-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_20__.Z,{className:"mr-1.5 h-5 w-5 flex-shrink-0 text-green-400","aria-hidden":"true"}),candidate.status]})]})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"h-5 w-5 text-gray-400 group-hover:text-gray-700","aria-hidden":"true"})})]})})},candidate.email))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"flex items-center justify-between border-t border-gray-200 px-4 sm:px-0","aria-label":"Pagination",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"-mt-px flex w-0 flex-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_21__.Z,{className:"mr-3 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Previous"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hidden md:-mt-px md:flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"inline-flex items-center border-t-2 border-purple-500 px-4 pt-4 text-sm font-medium text-purple-600","aria-current":"page",children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:"3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:"5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:"6"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"-mt-px flex w-0 flex-1 justify-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700",children:["Next",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_22__.Z,{className:"ml-3 h-5 w-5 text-gray-400","aria-hidden":"true"})]})})]})]})})]})})}}},function(__webpack_require__){__webpack_require__.O(0,[80123,82664,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=25939)}),_N_E=__webpack_require__.O()}]);