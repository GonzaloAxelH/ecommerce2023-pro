(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47022],{30431:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/ecommerce/page-examples/order-history-pages/with_invoice_list_and_quick_actions",function(){return __webpack_require__(80429)}])},80429:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Example}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(84539),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59810),_headlessui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49808),_headlessui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(86215),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31415),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43407),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(49633),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(41113),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(43451),_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(57349);let currencies=["CAD","USD","AUD","EUR","GBP"],navigation={categories:[{name:"Women",featured:[{name:"Sleep",href:"#"},{name:"Swimwear",href:"#"},{name:"Underwear",href:"#"}],collection:[{name:"Everything",href:"#"},{name:"Core",href:"#"},{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"}],categories:[{name:"Basic Tees",href:"#"},{name:"Artwork Tees",href:"#"},{name:"Bottoms",href:"#"},{name:"Underwear",href:"#"},{name:"Accessories",href:"#"}],brands:[{name:"Full Nelson",href:"#"},{name:"My Way",href:"#"},{name:"Re-Arranged",href:"#"},{name:"Counterfeit",href:"#"},{name:"Significant Other",href:"#"}]},{name:"Men",featured:[{name:"Casual",href:"#"},{name:"Boxers",href:"#"},{name:"Outdoor",href:"#"}],collection:[{name:"Everything",href:"#"},{name:"Core",href:"#"},{name:"New Arrivals",href:"#"},{name:"Sale",href:"#"}],categories:[{name:"Artwork Tees",href:"#"},{name:"Pants",href:"#"},{name:"Accessories",href:"#"},{name:"Boxers",href:"#"},{name:"Basic Tees",href:"#"}],brands:[{name:"Significant Other",href:"#"},{name:"My Way",href:"#"},{name:"Counterfeit",href:"#"},{name:"Re-Arranged",href:"#"},{name:"Full Nelson",href:"#"}]}],pages:[{name:"Company",href:"#"},{name:"Stores",href:"#"}]},orders=[{number:"4376",status:"Delivered on January 22, 2021",href:"#",invoiceHref:"#",products:[{id:1,name:"Machined Brass Puzzle",href:"#",price:"$95.00",color:"Brass",size:'3" x 3" x 3"',imageSrc:"https://tailwindui.com/img/ecommerce-images/order-history-page-07-product-01.jpg",imageAlt:"Brass puzzle in the shape of a jack with overlapping rounded posts."}]}],footerNavigation={account:[{name:"Manage Account",href:"#"},{name:"Saved Items",href:"#"},{name:"Orders",href:"#"},{name:"Redeem Gift card",href:"#"}],service:[{name:"Shipping & Returns",href:"#"},{name:"Warranty",href:"#"},{name:"FAQ",href:"#"},{name:"Find a store",href:"#"},{name:"Get in touch",href:"#"}],company:[{name:"Who we are",href:"#"},{name:"Press",href:"#"},{name:"Careers",href:"#"},{name:"Terms & Conditions",href:"#"},{name:"Privacy",href:"#"}],connect:[{name:"Instagram",href:"#"},{name:"Pinterest",href:"#"},{name:"Twitter",href:"#"}]};function classNames(){for(var _len=arguments.length,classes=Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.filter(Boolean).join(" ")}function Example(){let[mobileMenuOpen,setMobileMenuOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"bg-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Root,{show:mobileMenuOpen,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V,{as:"div",className:"relative z-40 lg:hidden",onClose:setMobileMenuOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"fixed inset-0 z-40 flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.V.Panel,{className:"relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex px-4 pt-5 pb-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400",onClick:()=>setMobileMenuOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.O.Group,{as:"div",className:"mt-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"border-b border-gray-200",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.O.List,{className:"-mb-px flex space-x-8 px-4",children:navigation.categories.map(category=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.O,{className(param){let{selected}=param;return classNames(selected?"text-indigo-600 border-indigo-600":"text-gray-900 border-transparent","flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium")},children:category.name},category.name))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.O.Panels,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,children:navigation.categories.map((category,categoryIdx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.O.Panel,{className:"space-y-12 px-4 pt-10 pb-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-1 items-start gap-y-10 gap-x-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"mobile-featured-heading-".concat(categoryIdx),className:"font-medium text-gray-900",children:"Featured"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"mobile-featured-heading-".concat(categoryIdx),className:"mt-6 space-y-6",children:category.featured.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500",children:item.name})},item.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"mobile-categories-heading",className:"font-medium text-gray-900",children:"Categories"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"mobile-categories-heading",className:"mt-6 space-y-6",children:category.categories.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500",children:item.name})},item.name))})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"mobile-collection-heading",className:"font-medium text-gray-900",children:"Collection"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"mobile-collection-heading",className:"mt-6 space-y-6",children:category.collection.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500",children:item.name})},item.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"mobile-brand-heading",className:"font-medium text-gray-900",children:"Brands"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"mobile-brand-heading",className:"mt-6 space-y-6",children:category.brands.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500",children:item.name})},item.name))})]})]})]})},category.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"space-y-6 border-t border-gray-200 py-6 px-4",children:navigation.pages.map(page=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flow-root",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:page.href,className:"-m-2 block p-2 font-medium text-gray-900",children:page.name})},page.name))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"space-y-6 border-t border-gray-200 py-6 px-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flow-root",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Create an account"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flow-root",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"-m-2 block p-2 font-medium text-gray-900",children:"Sign in"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"space-y-6 border-t border-gray-200 py-6 px-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"inline-block",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"mobile-currency",className:"sr-only",children:"Currency"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{id:"mobile-currency",name:"currency",className:"flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800",children:currencies.map(currency=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{children:currency},currency))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"h-5 w-5 text-gray-500","aria-hidden":"true"})})]})]})})})]})})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{className:"relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{"aria-label":"Top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-gray-900",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form",{className:"hidden lg:block lg:flex-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"desktop-currency",className:"sr-only",children:"Currency"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{id:"desktop-currency",name:"currency",className:"flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100",children:currencies.map(currency=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{children:currency},currency))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"h-5 w-5 text-gray-300","aria-hidden":"true"})})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"flex-1 text-center text-sm font-medium text-white lg:flex-none",children:"Get free delivery on orders over $100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-sm font-medium text-white hover:text-gray-100",children:"Create an account"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"h-6 w-px bg-gray-600","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"text-sm font-medium text-white hover:text-gray-100",children:"Sign in"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"border-b border-gray-200",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:flex lg:items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden h-full lg:flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.J.Group,{className:"ml-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-full justify-center space-x-8",children:[navigation.categories.map((category,categoryIdx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.J,{className:"flex",children(param){let{open}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.J.Button,{className:classNames(open?"border-indigo-600 text-indigo-600":"border-transparent text-gray-700 hover:text-gray-800","relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"),children:category.name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.u,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.J.Panel,{className:"absolute inset-x-0 top-full text-gray-500 sm:text-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute inset-0 top-1/2 bg-white shadow","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative bg-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto max-w-7xl px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-2 gap-y-10 gap-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"desktop-featured-heading-".concat(categoryIdx),className:"font-medium text-gray-900",children:"Featured"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"desktop-featured-heading-".concat(categoryIdx),className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:category.featured.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"hover:text-gray-800",children:item.name})},item.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"desktop-categories-heading",className:"font-medium text-gray-900",children:"Categories"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"desktop-categories-heading",className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:category.categories.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"hover:text-gray-800",children:item.name})},item.name))})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-2 gap-y-10 gap-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"desktop-collection-heading",className:"font-medium text-gray-900",children:"Collection"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"desktop-collection-heading",className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:category.collection.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"hover:text-gray-800",children:item.name})},item.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{id:"desktop-brand-heading",className:"font-medium text-gray-900",children:"Brands"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list","aria-labelledby":"desktop-brand-heading",className:"mt-6 space-y-6 sm:mt-4 sm:space-y-4",children:category.brands.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"hover:text-gray-800",children:item.name})},item.name))})]})]})]})})})]})})]})}},category.name)),navigation.pages.map(page=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:page.href,className:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-800",children:page.name},page.name))]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-1 items-center lg:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",className:"-ml-2 rounded-md bg-white p-2 text-gray-400",onClick:()=>setMobileMenuOpen(!0),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"ml-2 p-2 text-gray-400 hover:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"lg:hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"",className:"h-8 w-auto"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-1 items-center justify-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center lg:ml-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex space-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden lg:flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"-m-2 p-2 text-gray-400 hover:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"-m-2 p-2 text-gray-400 hover:text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Account"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__.Z,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"mx-4 h-6 w-px bg-gray-200 lg:mx-6","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flow-root",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:"#",className:"group -m-2 flex items-center p-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__.Z,{className:"h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"items in cart, view bag"})]})})]})})]})})})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main",{className:"mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"max-w-xl",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Your Orders"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Check the status of recent orders, manage returns, and discover similar products."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-12 space-y-16 sm:mt-16",children:orders.map(order=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{"aria-labelledby":"".concat(order.number,"-heading"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2",{id:"".concat(order.number,"-heading"),className:"text-lg font-medium text-gray-900 md:flex-shrink-0",children:["Order #",order.number]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-sm font-medium text-gray-500",children:order.status}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex text-sm font-medium",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:order.href,className:"text-indigo-600 hover:text-indigo-500",children:"Manage order"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:order.invoiceHref,className:"text-indigo-600 hover:text-indigo-500",children:"View Invoice"})})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-6 -mb-6 flow-root divide-y divide-gray-200 border-t border-gray-200",children:order.products.map(product=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"py-6 sm:flex",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:product.imageSrc,alt:product.imageAlt,className:"h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"min-w-0 flex-1 pt-1.5 sm:pt-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:product.href,children:product.name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"truncate text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:product.color})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"mx-1 text-gray-400","aria-hidden":"true",children:"\xb7"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:product.size})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-1 font-medium text-gray-900",children:product.price})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:w-40 sm:flex-none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0",children:"Buy again"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:"flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0",children:"Shop similar"})]})]},product.id))})]},order.number))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer",{"aria-labelledby":"footer-heading",className:"border-t border-gray-200 bg-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:"Account"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-6 space-y-6",children:footerNavigation.account.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"text-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500 hover:text-gray-600",children:item.name})},item.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:"Service"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-6 space-y-6",children:footerNavigation.service.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"text-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500 hover:text-gray-600",children:item.name})},item.name))})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:"Company"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-6 space-y-6",children:footerNavigation.company.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"text-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500 hover:text-gray-600",children:item.name})},item.name))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"text-sm font-medium text-gray-900",children:"Connect"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{role:"list",className:"mt-6 space-y-6",children:footerNavigation.connect.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"text-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"text-gray-500 hover:text-gray-600",children:item.name})},item.name))})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-center text-sm text-gray-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Shipping to Canada ($CAD)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"ml-3 border-l border-gray-200 pl-3",children:"English"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"mt-6 text-center text-sm text-gray-500 sm:mt-0",children:"\xa9 2021 Your Company, Inc."})]})]})]})]})}}},function(__webpack_require__){__webpack_require__.O(0,[5500,55945,49774,92888,40179],function(){return __webpack_require__(__webpack_require__.s=30431)}),_N_E=__webpack_require__.O()}]);