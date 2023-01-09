(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32798],{65731:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/page-examples/detail-screens/constrained_with_sidebar",function(){return __webpack_require__(28683)}])},28683:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(59810),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(42237),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41410),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(30097),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(40004),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20445),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(31415),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(37714),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(7266),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(20402),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(9544),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(52022),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(95423),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(36338),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(96586),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(21241),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(11332);let navigation=[{name:"All Issues",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Z,current:!0},{name:"My Issues",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Z,current:!1},{name:"Assigned",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,current:!1},{name:"Closed",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.Z,current:!1},{name:"Recent",href:"#",icon:_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__.Z,current:!1}],projects=[{id:1,name:"GraphQL API",href:"#"},{id:2,name:"iOS App",href:"#"},{id:3,name:"Marketing Site Redesign",href:"#"},{id:4,name:"Customer Portal",href:"#"}],activity=[{id:1,type:"comment",person:{name:"Eduardo Benz",href:"#"},imageUrl:"https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",date:"6d ago"},{id:2,type:"assignment",person:{name:"Hilary Mahy",href:"#"},assigned:{name:"Kristin Watson",href:"#"},date:"2d ago"},{id:3,type:"tags",person:{name:"Hilary Mahy",href:"#"},tags:[{name:"Bug",href:"#",color:"bg-rose-500"},{name:"Accessibility",href:"#",color:"bg-indigo-500"}],date:"6h ago"},{id:4,type:"comment",person:{name:"Jason Meyers",href:"#"},imageUrl:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",date:"2h ago"}];function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[sidebarOpen,setSidebarOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex min-h-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.u.Root,{show:sidebarOpen,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.V,{as:"div",className:"relative z-40 lg:hidden",onClose:setSidebarOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"fixed inset-0 z-40 flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute top-0 right-0 -mr-12 pt-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:()=>setSidebarOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-shrink-0 items-center px-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500",alt:"Your Company"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-5 h-0 flex-1 overflow-y-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"px-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"space-y-1",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:item.href,className:classNames(item.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","group flex items-center px-2 py-2 text-base font-medium rounded-md"),"aria-current":item.current?"page":void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(item.icon,{className:classNames(item.current?"text-gray-300":"text-gray-400 group-hover:text-gray-300","mr-4 flex-shrink-0 h-6 w-6"),"aria-hidden":"true"}),item.name]},item.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"px-2 text-sm font-medium text-gray-400",children:"Projects"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-2 space-y-1",children:projects.map(project=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:project.href,className:"flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"truncate",children:project.name})},project.id))})]})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"w-14 flex-shrink-0","aria-hidden":"true"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex min-h-0 flex-1 flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-16 flex-shrink-0 items-center bg-gray-900 px-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500",alt:"Your Company"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1 flex-col overflow-y-auto bg-gray-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"flex-1 px-2 py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"space-y-1",children:navigation.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:item.href,className:classNames(item.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","group flex items-center px-2 py-2 text-sm font-medium rounded-md"),"aria-current":item.current?"page":void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(item.icon,{className:classNames(item.current?"text-gray-300":"text-gray-400 group-hover:text-gray-300","mr-3 flex-shrink-0 h-6 w-6"),"aria-hidden":"true"}),item.name]},item.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"px-3 text-sm font-medium text-gray-400",children:"Projects"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-2 space-y-1",children:projects.map(project=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:project.href,className:"group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"truncate",children:project.name})},project.id))})]})]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex w-0 flex-1 flex-col lg:pl-64",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden",onClick:()=>setSidebarOpen(!0),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-1 justify-between px-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{className:"flex w-full lg:ml-0",action:"#",method:"GET",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative w-full text-gray-400 focus-within:text-gray-600",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_11__.Z,{className:"h-5 w-5","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:"search-field",className:"block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm",placeholder:"Search",type:"search",name:"search"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-4 flex items-center lg:ml-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",children:"Create"})})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main",{className:"flex-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"py-8 xl:py-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"ARIA attribute misspelled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"mt-2 text-sm text-gray-500",children:["#400 opened by"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"font-medium text-gray-900",children:"Hilary Mahy"})," ","in"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"font-medium text-gray-900",children:"Customer Portal"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-4 flex space-x-3 md:mt-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_12__.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_13__.Z,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Subscribe"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside",{className:"mt-8 xl:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"sr-only",children:"Details"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"space-y-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"h-5 w-5 text-green-500","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-sm font-medium text-green-700",children:"Open Issue"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-sm font-medium text-gray-900",children:"4 comments"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_16__.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"text-sm font-medium text-gray-900",children:["Created on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("time",{dateTime:"2020-12-02",children:"Dec 2, 2020"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 space-y-8 border-t border-b border-gray-200 py-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Assignees"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-3 space-y-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex justify-start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"flex items-center space-x-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-5 w-5 rounded-full",src:"https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-sm font-medium text-gray-900",children:"Eduardo Benz"})]})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Tags"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{role:"list",className:"mt-2 leading-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"inline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute flex flex-shrink-0 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-500","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:"Bug"})]})," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"inline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute flex flex-shrink-0 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-indigo-500","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:"Accessibility"})]})," "]})]})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"py-3 xl:pt-6 xl:pb-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"sr-only",children:"Description"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"prose max-w-none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum consequatur laboriosam voluptas tempore aut voluptatum alias?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{role:"list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate fermentum id facilisis nam pharetra. Aliquet leo tellus."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut tellus in sed dignissim."})]})]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{"aria-labelledby":"activity-title",className:"mt-8 xl:mt-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"divide-y divide-gray-200",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pb-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{id:"activity-title",className:"text-lg font-medium text-gray-900",children:"Activity"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"pt-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flow-root",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"-mb-8",children:activity.map((item,itemIdx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative pb-8",children:[itemIdx!==activity.length-1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative flex items-start space-x-3",children:"comment"===item.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white",src:item.imageUrl,alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.person.href,className:"font-medium text-gray-900",children:item.person.name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"mt-0.5 text-sm text-gray-500",children:["Commented ",item.date]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-2 text-sm text-gray-700",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:item.comment})})]})]}):"assignment"===item.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative px-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_17__.Z,{className:"h-5 w-5 text-gray-500","aria-hidden":"true"})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-w-0 flex-1 py-1.5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.person.href,className:"font-medium text-gray-900",children:item.person.name})," ","assigned"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.assigned.href,className:"font-medium text-gray-900",children:item.assigned.name})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"whitespace-nowrap",children:item.date})]})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative px-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_18__.Z,{className:"h-5 w-5 text-gray-500","aria-hidden":"true"})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-w-0 flex-1 py-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"text-sm leading-8 text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"mr-0.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.person.href,className:"font-medium text-gray-900",children:item.person.name})," ","added tags"]})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"mr-0.5",children:item.tags.map(tag=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:tag.href,className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute flex flex-shrink-0 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classNames(tag.color,"h-1.5 w-1.5 rounded-full"),"aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-3.5 font-medium text-gray-900",children:tag.name})]})," "]},tag.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"whitespace-nowrap",children:item.date})]})})]})})]})},item.id))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex space-x-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white",src:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"min-w-0 flex-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{action:"#",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"comment",className:"sr-only",children:"Comment"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea",{id:"comment",name:"comment",rows:3,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm",placeholder:"Leave a comment",defaultValue:""})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 flex items-center justify-end space-x-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_19__.Z,{className:"-ml-1 mr-2 h-5 w-5 text-green-500","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Close issue"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"submit",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",children:"Comment"})]})]})})]})})]})]})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside",{className:"hidden xl:block xl:pl-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"sr-only",children:"Details"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"space-y-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_14__.Z,{className:"h-5 w-5 text-green-500","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-sm font-medium text-green-700",children:"Open Issue"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_15__.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-sm font-medium text-gray-900",children:"4 comments"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_16__.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"text-sm font-medium text-gray-900",children:["Created on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("time",{dateTime:"2020-12-02",children:"Dec 2, 2020"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 space-y-8 border-t border-gray-200 py-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Assignees"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-3 space-y-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex justify-start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"flex items-center space-x-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex-shrink-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-5 w-5 rounded-full",src:"https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-sm font-medium text-gray-900",children:"Eduardo Benz"})]})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-sm font-medium text-gray-500",children:"Tags"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{role:"list",className:"mt-2 leading-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"inline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute flex flex-shrink-0 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-500","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:"Bug"})]})," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"inline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute flex flex-shrink-0 items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-indigo-500","aria-hidden":"true"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-3.5 text-sm font-medium text-gray-900",children:"Accessibility"})]})," "]})]})]})]})]})]})})})]})]})})}}},function(__webpack_require__){__webpack_require__.O(0,[5500,65465,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=65731)}),_N_E=__webpack_require__.O()}]);