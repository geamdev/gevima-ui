"use strict";(self.webpackChunkgevima_ui=self.webpackChunkgevima_ui||[]).push([[734],{"./src/stories/Input/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs"),index_esm=__webpack_require__("./node_modules/.pnpm/react-currency-input-field@3.6.12_react@18.2.0/node_modules/react-currency-input-field/dist/index.esm.js"),io5_index_esm=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/io5/index.esm.js"),react_tooltip_min=__webpack_require__("./node_modules/.pnpm/react-tooltip@5.25.0_react-dom@18.2.0_react@18.2.0/node_modules/react-tooltip/dist/react-tooltip.min.mjs"),_excluded=["fullWidth","error","icon","currency","label"],__jsx=react.createElement,Input=(0,react.forwardRef)((function(_ref,ref){var fullWidth=_ref.fullWidth,error=_ref.error,icon=_ref.icon,currency=_ref.currency,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),disabled=props.disabled,InputComponent=currency?index_esm.Z:"input",currencyConfig=currency?{decimalLimit:2,prefix:currency}:void 0,inputClasses=(0,clsx.Z)("mt-[1px] p-3 border border-[#cfdb5b2]  w-full outline-none text-sm font-semibold",{"pl-10":icon,"pr-4":currency,"text-black bg-[#f200892c]":error},disabled?"bg-trasparent border-none":"bg-white rounded-lg"),wrapperClasses=(0,clsx.Z)("relative",{"pl-10":icon,"w-full":fullWidth});return __jsx("div",{className:wrapperClasses},label&&__jsx("label",{className:(0,clsx.Z)("text-xs font-bold mb-0.5 ml-0.5",error?"text-[#ff0000]":"text-[#2d3748]",disabled?"text-[#747A80]":"text-[#2d3748]")},label),icon&&__jsx("div",{className:"absolute inset-y-0 right-4 flex items-center pl-0.5 pointer-events-none mt-0.5 z-50","data-tip":error,"data-for":"tooltip-".concat(label)},icon),__jsx("div",{className:"relative"},__jsx(InputComponent,(0,esm_extends.Z)({},currencyConfig,{className:inputClasses,ref},props)),error&&__jsx("div",{"data-tooltip-id":"tooltip",className:"absolute top-4 right-4"},__jsx(react_tooltip_min.u,{id:"tooltip",place:"top",style:{backgroundColor:error?"#F20089":"#333",color:"#fff"}},error),error&&__jsx(io5_index_esm.so2,{className:"text-white bg-[#f20089] rounded-full p-0.5 text-sm font-bold mt-0.5"}))),disabled&&__jsx("div",{className:"h-[1px] bg-[#CFDBD5B2]"}))}));Input.displayName="Input";const Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},currency:{defaultValue:null,description:"",name:"currency",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/stories/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}const Input_stories={title:"GevimaUI/Input",component:Input_Input,parameters:{layout:"centered",docs:{source:{type:"code",code:'<Input label="Input" />'}}},tags:["autodocs"],argTypes:{}};var Default={args:{label:"Input"}},Error={args:{label:"Input",error:"Este campo es requerido"},parameters:{docs:{source:{code:'\n<Input\n  label="Input"\n  error="Este campo es requerido"\n/>\n        '}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Input'\n  }\n}",...Default.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Input',\n    error: 'Este campo es requerido'\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\n<Input\n  label=\"Input\"\n  error=\"Este campo es requerido\"\n/>\n        `\n      }\n    }\n  }\n}",...Error.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Error"]}}]);