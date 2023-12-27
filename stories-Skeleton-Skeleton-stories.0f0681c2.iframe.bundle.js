"use strict";(self.webpackChunkgevima_ui=self.webpackChunkgevima_ui||[]).push([[126],{"./src/stories/Skeleton/Skeleton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,Default:()=>Default,Rounded:()=>Rounded,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Skeleton_stories});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs"),__jsx=react.createElement,Skeleton=function Skeleton(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"rect":_ref$variant,width=_ref.width,height=_ref.height;return __jsx("div",{className:(0,clsx.Z)("animate-pulse bg-gray-200","rect"===variant&&"rounded-none","circle"===variant&&"rounded-full","rounded"===variant&&"rounded"),style:{width:width?"".concat(width,"px"):"200px",height:height?"".concat(height,"px"):"30px"}})};Skeleton.displayName="Skeleton";const Skeleton_Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{variant:{defaultValue:{value:"rect"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"rect"'},{value:'"circle"'},{value:'"rounded"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/stories/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const Skeleton_stories={title:"GevimaUI/Skeleton",component:Skeleton_Skeleton,parameters:{layout:"centered",docs:{source:{type:"code",code:"<Skeleton />"}}},tags:["autodocs"],argTypes:{}};var Default={args:{}},Rounded={args:{variant:"rounded",width:200,height:30},parameters:{docs:{source:{code:'<Skeleton variant="rounded" width={200} height={30} />'}}}},Circle={args:{variant:"circle",width:40,height:40},parameters:{docs:{source:{code:'<Skeleton variant="circle" width={40} height={40} />'}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Rounded.parameters={...Rounded.parameters,docs:{...Rounded.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'rounded',\n    width: 200,\n    height: 30\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: '<Skeleton variant=\"rounded\" width={200} height={30} />'\n      }\n    }\n  }\n}",...Rounded.parameters?.docs?.source}}},Circle.parameters={...Circle.parameters,docs:{...Circle.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'circle',\n    width: 40,\n    height: 40\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: '<Skeleton variant=\"circle\" width={40} height={40} />'\n      }\n    }\n  }\n}",...Circle.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Rounded","Circle"]},"./node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);