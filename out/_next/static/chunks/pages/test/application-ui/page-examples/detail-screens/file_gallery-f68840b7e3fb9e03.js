(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39617],{39316:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/application-ui/page-examples/detail-screens/file_gallery",function(){return __webpack_require__(19239)}])},19239:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var jsx_runtime=__webpack_require__(85893),react=__webpack_require__(67294),transition=__webpack_require__(84539),dialog=__webpack_require__(59810),menu=__webpack_require__(72510),HomeIcon=__webpack_require__(42237),Squares2X2Icon=__webpack_require__(76223),PhotoIcon=__webpack_require__(7814),UserGroupIcon=__webpack_require__(78357),RectangleStackIcon=__webpack_require__(33955),CogIcon=__webpack_require__(87272),XMarkIcon=__webpack_require__(31415),Bars3BottomLeftIcon=__webpack_require__(37714),PlusIcon=__webpack_require__(78680),HeartIcon=__webpack_require__(50063),MagnifyingGlassIcon=__webpack_require__(7266);let ForwardRef=react.forwardRef(function({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});var esm_Squares2X2Icon=__webpack_require__(56221),PencilIcon=__webpack_require__(20402),esm_PlusIcon=__webpack_require__(77e3);let navigation=[{name:"Home",href:"#",icon:HomeIcon.Z,current:!1},{name:"All Files",href:"#",icon:Squares2X2Icon.Z,current:!1},{name:"Photos",href:"#",icon:PhotoIcon.Z,current:!0},{name:"Shared",href:"#",icon:UserGroupIcon.Z,current:!1},{name:"Albums",href:"#",icon:RectangleStackIcon.Z,current:!1},{name:"Settings",href:"#",icon:CogIcon.Z,current:!1}],userNavigation=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}],tabs=[{name:"Recently Viewed",href:"#",current:!0},{name:"Recently Added",href:"#",current:!1},{name:"Favorited",href:"#",current:!1}],files=[{name:"IMG_4985.HEIC",size:"3.9 MB",source:"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",current:!0}],currentFile={name:"IMG_4985.HEIC",size:"3.9 MB",source:"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",information:{"Uploaded by":"Marie Culver",Created:"June 8, 2020","Last modified":"June 8, 2020",Dimensions:"4032 x 3024",Resolution:"72 x 72"},sharedWith:[{id:1,name:"Aimee Douglas",imageUrl:"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"},{id:2,name:"Andrea McMillan",imageUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}]};function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[mobileMenuOpen,setMobileMenuOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"flex h-full",children:[(0,jsx_runtime.jsx)("div",{className:"hidden w-28 overflow-y-auto bg-indigo-700 md:block",children:(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col items-center py-6",children:[(0,jsx_runtime.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,jsx_runtime.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=white",alt:"Your Company"})}),(0,jsx_runtime.jsx)("div",{className:"mt-6 w-full flex-1 space-y-1 px-2",children:navigation.map(item=>(0,jsx_runtime.jsxs)("a",{href:item.href,className:classNames(item.current?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-800 hover:text-white","group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"),"aria-current":item.current?"page":void 0,children:[(0,jsx_runtime.jsx)(item.icon,{className:classNames(item.current?"text-white":"text-indigo-300 group-hover:text-white","h-6 w-6"),"aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"mt-2",children:item.name})]},item.name))})]})}),(0,jsx_runtime.jsx)(transition.u.Root,{show:mobileMenuOpen,as:react.Fragment,children:(0,jsx_runtime.jsxs)(dialog.V,{as:"div",className:"relative z-40 md:hidden",onClose:setMobileMenuOpen,children:[(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,jsx_runtime.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,jsx_runtime.jsxs)("div",{className:"fixed inset-0 z-40 flex",children:[(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,jsx_runtime.jsxs)(dialog.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4",children:[(0,jsx_runtime.jsx)(transition.u.Child,{as:react.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,jsx_runtime.jsx)("div",{className:"absolute top-1 right-0 -mr-14 p-1",children:(0,jsx_runtime.jsxs)("button",{type:"button",className:"flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>setMobileMenuOpen(!1),children:[(0,jsx_runtime.jsx)(XMarkIcon.Z,{className:"h-6 w-6 text-white","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Close sidebar"})]})})}),(0,jsx_runtime.jsx)("div",{className:"flex flex-shrink-0 items-center px-4",children:(0,jsx_runtime.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=white",alt:"Your Company"})}),(0,jsx_runtime.jsx)("div",{className:"mt-5 h-0 flex-1 overflow-y-auto px-2",children:(0,jsx_runtime.jsx)("nav",{className:"flex h-full flex-col",children:(0,jsx_runtime.jsx)("div",{className:"space-y-1",children:navigation.map(item=>(0,jsx_runtime.jsxs)("a",{href:item.href,className:classNames(item.current?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-800 hover:text-white","group py-2 px-3 rounded-md flex items-center text-sm font-medium"),"aria-current":item.current?"page":void 0,children:[(0,jsx_runtime.jsx)(item.icon,{className:classNames(item.current?"text-white":"text-indigo-300 group-hover:text-white","mr-3 h-6 w-6"),"aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{children:item.name})]},item.name))})})})]})}),(0,jsx_runtime.jsx)("div",{className:"w-14 flex-shrink-0","aria-hidden":"true"})]})]})}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 flex-col overflow-hidden",children:[(0,jsx_runtime.jsx)("header",{className:"w-full",children:(0,jsx_runtime.jsxs)("div",{className:"relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm",children:[(0,jsx_runtime.jsxs)("button",{type:"button",className:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",onClick:()=>setMobileMenuOpen(!0),children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,jsx_runtime.jsx)(Bars3BottomLeftIcon.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 justify-between px-4 sm:px-6",children:[(0,jsx_runtime.jsx)("div",{className:"flex flex-1",children:(0,jsx_runtime.jsxs)("form",{className:"flex w-full md:ml-0",action:"#",method:"GET",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"desktop-search-field",className:"sr-only",children:"Search all files"}),(0,jsx_runtime.jsx)("label",{htmlFor:"mobile-search-field",className:"sr-only",children:"Search all files"}),(0,jsx_runtime.jsxs)("div",{className:"relative w-full text-gray-400 focus-within:text-gray-600",children:[(0,jsx_runtime.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center",children:(0,jsx_runtime.jsx)(MagnifyingGlassIcon.Z,{className:"h-5 w-5 flex-shrink-0","aria-hidden":"true"})}),(0,jsx_runtime.jsx)("input",{name:"mobile-search-field",id:"mobile-search-field",className:"h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden",placeholder:"Search",type:"search"}),(0,jsx_runtime.jsx)("input",{name:"desktop-search-field",id:"desktop-search-field",className:"hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block",placeholder:"Search all files",type:"search"})]})]})}),(0,jsx_runtime.jsxs)("div",{className:"ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6",children:[(0,jsx_runtime.jsxs)(menu.v,{as:"div",className:"relative flex-shrink-0",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(menu.v.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,jsx_runtime.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",alt:""})]})}),(0,jsx_runtime.jsx)(transition.u,{as:react.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,jsx_runtime.jsx)(menu.v.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:userNavigation.map(item=>(0,jsx_runtime.jsx)(menu.v.Item,{children(param){let{active}=param;return(0,jsx_runtime.jsx)("a",{href:item.href,className:classNames(active?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:item.name})}},item.name))})})]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"flex items-center justify-center rounded-full bg-indigo-600 p-1 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[(0,jsx_runtime.jsx)(PlusIcon.Z,{className:"h-6 w-6","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Add file"})]})]})]})]})}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-1 items-stretch overflow-hidden",children:[(0,jsx_runtime.jsx)("main",{className:"flex-1 overflow-y-auto",children:(0,jsx_runtime.jsxs)("div",{className:"mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8",children:[(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)("h1",{className:"flex-1 text-2xl font-bold text-gray-900",children:"Photos"}),(0,jsx_runtime.jsxs)("div",{className:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden",children:[(0,jsx_runtime.jsxs)("button",{type:"button",className:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)(ForwardRef,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Use list view"})]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)(esm_Squares2X2Icon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Use grid view"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-3 sm:mt-2",children:[(0,jsx_runtime.jsxs)("div",{className:"sm:hidden",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),(0,jsx_runtime.jsxs)("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",defaultValue:"Recently Viewed",children:[(0,jsx_runtime.jsx)("option",{children:"Recently Viewed"}),(0,jsx_runtime.jsx)("option",{children:"Recently Added"}),(0,jsx_runtime.jsx)("option",{children:"Favorited"})]})]}),(0,jsx_runtime.jsx)("div",{className:"hidden sm:block",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center border-b border-gray-200",children:[(0,jsx_runtime.jsx)("nav",{className:"-mb-px flex flex-1 space-x-6 xl:space-x-8","aria-label":"Tabs",children:tabs.map(tab=>(0,jsx_runtime.jsx)("a",{href:tab.href,"aria-current":tab.current?"page":void 0,className:classNames(tab.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"),children:tab.name},tab.name))}),(0,jsx_runtime.jsxs)("div",{className:"ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex",children:[(0,jsx_runtime.jsxs)("button",{type:"button",className:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)(ForwardRef,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Use list view"})]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)(esm_Squares2X2Icon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Use grid view"})]})]})]})})]}),(0,jsx_runtime.jsxs)("section",{className:"mt-8 pb-16","aria-labelledby":"gallery-heading",children:[(0,jsx_runtime.jsx)("h2",{id:"gallery-heading",className:"sr-only",children:"Recently viewed"}),(0,jsx_runtime.jsx)("ul",{role:"list",className:"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:files.map(file=>(0,jsx_runtime.jsxs)("li",{className:"relative",children:[(0,jsx_runtime.jsxs)("div",{className:classNames(file.current?"ring-2 ring-offset-2 ring-indigo-500":"focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500","group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"),children:[(0,jsx_runtime.jsx)("img",{src:file.source,alt:"",className:classNames(file.current?"":"group-hover:opacity-75","object-cover pointer-events-none")}),(0,jsx_runtime.jsx)("button",{type:"button",className:"absolute inset-0 focus:outline-none",children:(0,jsx_runtime.jsxs)("span",{className:"sr-only",children:["View details for ",file.name]})})]}),(0,jsx_runtime.jsx)("p",{className:"pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900",children:file.name}),(0,jsx_runtime.jsx)("p",{className:"pointer-events-none block text-sm font-medium text-gray-500",children:file.size})]},file.name))})]})]})}),(0,jsx_runtime.jsx)("aside",{className:"hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block",children:(0,jsx_runtime.jsxs)("div",{className:"space-y-6 pb-16",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg",children:(0,jsx_runtime.jsx)("img",{src:currentFile.source,alt:"",className:"object-cover"})}),(0,jsx_runtime.jsxs)("div",{className:"mt-4 flex items-start justify-between",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h2",{className:"text-lg font-medium text-gray-900",children:[(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Details for "}),currentFile.name]}),(0,jsx_runtime.jsx)("p",{className:"text-sm font-medium text-gray-500",children:currentFile.size})]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)(HeartIcon.Z,{className:"h-6 w-6","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Favorite"})]})]})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"font-medium text-gray-900",children:"Information"}),(0,jsx_runtime.jsx)("dl",{className:"mt-2 divide-y divide-gray-200 border-t border-b border-gray-200",children:Object.keys(currentFile.information).map(key=>(0,jsx_runtime.jsxs)("div",{className:"flex justify-between py-3 text-sm font-medium",children:[(0,jsx_runtime.jsx)("dt",{className:"text-gray-500",children:key}),(0,jsx_runtime.jsx)("dd",{className:"whitespace-nowrap text-gray-900",children:currentFile.information[key]})]},key))})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"font-medium text-gray-900",children:"Description"}),(0,jsx_runtime.jsxs)("div",{className:"mt-2 flex items-center justify-between",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm italic text-gray-500",children:"Add a description to this image."}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)(PencilIcon.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"Add description"})]})]})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h3",{className:"font-medium text-gray-900",children:"Shared with"}),(0,jsx_runtime.jsxs)("ul",{role:"list",className:"mt-2 divide-y divide-gray-200 border-t border-b border-gray-200",children:[currentFile.sharedWith.map(person=>(0,jsx_runtime.jsxs)("li",{className:"flex items-center justify-between py-3",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center",children:[(0,jsx_runtime.jsx)("img",{src:person.imageUrl,alt:"",className:"h-8 w-8 rounded-full"}),(0,jsx_runtime.jsx)("p",{className:"ml-4 text-sm font-medium text-gray-900",children:person.name})]}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:["Remove",(0,jsx_runtime.jsxs)("span",{className:"sr-only",children:[" ",person.name]})]})]},person.id)),(0,jsx_runtime.jsx)("li",{className:"flex items-center justify-between py-2",children:(0,jsx_runtime.jsxs)("button",{type:"button",className:"group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[(0,jsx_runtime.jsx)("span",{className:"flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400",children:(0,jsx_runtime.jsx)(esm_PlusIcon.Z,{className:"h-5 w-5","aria-hidden":"true"})}),(0,jsx_runtime.jsx)("span",{className:"ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500",children:"Share"})]})})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex",children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Download"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Delete"})]})]})})]})]})]})})}},7266:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",clipRule:"evenodd"}))});__webpack_exports__.Z=ForwardRef},20402:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"}))});__webpack_exports__.Z=ForwardRef},37714:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"}))});__webpack_exports__.Z=ForwardRef},87272:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"}))});__webpack_exports__.Z=ForwardRef},50063:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"}))});__webpack_exports__.Z=ForwardRef},42237:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))});__webpack_exports__.Z=ForwardRef},7814:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))});__webpack_exports__.Z=ForwardRef},78680:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))});__webpack_exports__.Z=ForwardRef},33955:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"}))});__webpack_exports__.Z=ForwardRef},76223:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"}))});__webpack_exports__.Z=ForwardRef},78357:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294);let ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"}))});__webpack_exports__.Z=ForwardRef}},function(__webpack_require__){__webpack_require__.O(0,[5500,4533,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=39316)}),_N_E=__webpack_require__.O()}]);