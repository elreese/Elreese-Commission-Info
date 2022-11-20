!function(){"use strict";var e,t={514:function(){var e=window.wp.element,t=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/accordion-panel","title":"Panel","category":"gutena","parent":["gutena/accordion"],"description":"Accordion Panel Block by Gutena","textdomain":"gutena-accordion","supports":{"html":false,"inserter":false,"reusable":false},"editorScript":"file:./index.js"}'),a=window.wp.i18n,l=window.wp.blockEditor;const o=["gutena/accordion-panel-title","gutena/accordion-panel-content"],r=[["gutena/accordion-panel-title"],["gutena/accordion-panel-content"]];(0,t.registerBlockType)(n,{edit:function(){const t=(0,l.useBlockProps)({className:"gutena-accordion-block__panel"});return(0,e.createElement)("div",t,(0,e.createElement)(l.InnerBlocks,{allowedBlocks:o,template:r}))},save:function(){const t=l.useBlockProps.save({className:"gutena-accordion-block__panel"});return(0,e.createElement)("div",t,(0,e.createElement)(l.InnerBlocks.Content,null))},icon:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"2",y:"2",width:"1.5",height:"20",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"21",y:"2",width:"1.5",height:"20",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"3",width:"1.5",height:"20.5",transform:"rotate(-90 2 3)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"22",width:"1.5",height:"20.5",transform:"rotate(-90 2 22)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"5",y:"13",width:"7",height:"14",transform:"rotate(-90 5 13)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"5",y:"17",width:"2",height:"14",transform:"rotate(-90 5 17)",fill:"#3F6DE4"}))});var i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/accordion-panel-title","title":"Title","category":"gutena","parent":["gutena/accordion-panel"],"description":"Accordion Panel Title Block by Gutena","textdomain":"gutena-accordion","supports":{"html":false,"inserter":false,"reusable":false,"spacing":{"padding":true,"margin":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"attributes":{"panelTriggerIconGlobal":{"type":"string"}},"usesContext":["gutenaAccordionTriggerIcon"],"editorScript":"file:./index.js"}');const c=[["core/paragraph"]];(0,t.registerBlockType)(i,{edit:function(t){let{attributes:n,context:a,setAttributes:o}=t;const{panelTriggerIconGlobal:r}=n,i=null==a?void 0:a.gutenaAccordionTriggerIcon;(0,e.useEffect)((()=>{r!=i&&o({panelTriggerIconGlobal:i})}),[i]);const p=(0,l.useBlockProps)({className:"gutena-accordion-block__panel-title editor"});return(0,e.createElement)("div",p,(0,e.createElement)("div",{className:"gutena-accordion-block__panel-title-inner"},(0,e.createElement)(l.InnerBlocks,{template:c}),"none"!=r&&(0,e.createElement)("div",{className:`trigger-${r}`},(0,e.createElement)("div",{className:"horizontal"}),(0,e.createElement)("div",{className:"vertical"}))))},save:function(t){let{attributes:n}=t;const a=l.useBlockProps.save({className:"gutena-accordion-block__panel-title"});return(0,e.createElement)("div",a,(0,e.createElement)("div",{className:"gutena-accordion-block__panel-title-inner"},(0,e.createElement)(l.InnerBlocks.Content,null),"none"!=n.panelTriggerIconGlobal&&(0,e.createElement)("div",{className:`trigger-${n.panelTriggerIconGlobal}`},(0,e.createElement)("div",{className:"horizontal"}),(0,e.createElement)("div",{className:"vertical"}))))},icon:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V22.276C21.0001 22.3594 20.9793 22.4416 20.9395 22.5149C20.8997 22.5882 20.8422 22.6505 20.7722 22.6959C20.7023 22.7413 20.622 22.7685 20.5388 22.775C20.4557 22.7815 20.3722 22.767 20.296 22.733L12 19.03L3.704 22.732C3.6279 22.766 3.54451 22.7805 3.46141 22.774C3.37831 22.7676 3.29813 22.7405 3.22818 22.6952C3.15822 22.6499 3.1007 22.5878 3.06085 22.5146C3.021 22.4414 3.00008 22.3593 3 22.276V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2ZM19 19.965V4H5V19.965L12 16.841L19 19.965ZM12 13.5L9.061 15.045L9.622 11.773L7.245 9.455L10.531 8.977L12 6L13.47 8.977L16.755 9.455L14.378 11.773L14.938 15.045L12 13.5Z",fill:"#3F6DE4"}))});var p=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/accordion-panel-content","title":"Content","category":"gutena","parent":["gutena/accordion-panel"],"description":"Gutena Accordion Panel Content","textdomain":"gutena-accordion","supports":{"html":false,"inserter":false,"reusable":false,"spacing":{"padding":true,"margin":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"editorScript":"file:./index.js"}');const g=[["core/paragraph"]];(0,t.registerBlockType)(p,{edit:function(){const t=(0,l.useBlockProps)({className:"gutena-accordion-block__panel-content editor"});return(0,e.createElement)("div",t,(0,e.createElement)("div",{className:"gutena-accordion-block__panel-content-inner"},(0,e.createElement)(l.InnerBlocks,{template:g})))},save:function(){const t=l.useBlockProps.save({className:"gutena-accordion-block__panel-content"});return(0,e.createElement)("div",t,(0,e.createElement)("div",{className:"gutena-accordion-block__panel-content-inner"},(0,e.createElement)(l.InnerBlocks.Content,null)))},icon:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{"clip-path":"url(#clip0_3264_121)"},(0,e.createElement)("rect",{x:"2",y:"17",width:"9",height:"2",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"14",y:"17",width:"8",height:"2",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"17",y:"22",width:"8",height:"2",transform:"rotate(-90 17 22)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"3",width:"20",height:"2",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"10",width:"20",height:"2",fill:"#3F6DE4"})),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"clip0_3264_121"},(0,e.createElement)("rect",{width:"24",height:"24",fill:"white"}))))});var s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/accordion","title":"Accordion","category":"gutena","description":"Accordion Block by Gutena","textdomain":"gutena-accordion","supports":{"align":["wide","full"],"html":false,"spacing":{"padding":true,"margin":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true},"__experimentalSettings":true,"__experimentalLayout":true},"attributes":{"uniqueId":{"type":"string"},"panelPadding":{"type":"object"},"panelSpaceBetween":{"type":"number","default":10},"panelCollapse":{"type":"boolean"},"panelBorder":{"type":"object"},"panelRadius":{"type":"object"},"panelBackgroundColor":{"type":"string"},"panelBorderOpen":{"type":"object"},"panelRadiusOpen":{"type":"object"},"panelBackgroundColorOpen":{"type":"string"},"panelTitleTag":{"type":"string","default":"div"},"panelTitleColor":{"type":"string"},"panelContentColor":{"type":"string"},"panelTitleFontFamily":{"type":"string"},"panelTitleFontSize":{"type":"string"},"panelTitleFontStyle":{"type":"string"},"panelTitleFontWeight":{"type":"string"},"panelTitleLineHeight":{"type":"number","default":1.6},"panelTitleTextTransform":{"type":"string","default":""},"panelContentFontFamily":{"type":"string"},"panelContentFontSize":{"type":"string"},"panelContentFontStyle":{"type":"string"},"panelContentFontWeight":{"type":"string"},"panelContentLineHeight":{"type":"number","default":1.6},"panelContentTextTransform":{"type":"string","default":""},"panelTitleContentGap":{"type":"number","default":10},"panelTriggerIcon":{"type":"string","default":"none"},"showVariation":{"type":"boolean","default":true},"blockStyles":{"type":"object"}},"providesContext":{"gutenaAccordionTriggerIcon":"panelTriggerIcon"},"editorScript":"file:./index.js","script":"file:./view.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}var h=window.wp.data,u=window.wp.components,m=window.lodash,f=[{name:"default",title:(0,a.__)("Default"),description:(0,a.__)("Default Style"),icon:(0,e.createElement)("svg",{width:"261",height:"175",viewBox:"0 0 261 175",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"0.157349",width:"260",height:"175",fill:"white"}),(0,e.createElement)("rect",{x:"19.8573",y:"93.4993",width:"220.6",height:"22.3721",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.3506",y:"101.798",width:"86.7885",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"19.8573",y:"127.595",width:"220.6",height:"22.3721",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.3506",y:"135.894",width:"86.7885",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"19.8573",y:"25.0327",width:"220.6",height:"58.9427",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.3506",y:"34.7065",width:"82.5694",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"48.1799",width:"176.698",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"56.429",width:"186.607",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"64.678",width:"176.698",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"72.9268",width:"73.762",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"224.557",y:"36.7991",width:"6",height:"1.22697",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"228.157",y:"34.3457",width:"6.13318",height:"1.2",transform:"rotate(90 228.157 34.3457)",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"224.557",y:"103.855",width:"6",height:"1.22697",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"228.157",y:"101.402",width:"6.13318",height:"1.2",transform:"rotate(90 228.157 101.402)",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"224.557",y:"138.201",width:"6",height:"1.22697",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"228.157",y:"135.748",width:"6.13318",height:"1.2",transform:"rotate(90 228.157 135.748)",fill:"#6884CA"})),isDefault:!0,innerBlocks:[["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"plus-minus",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]]],attributes:{showVariation:!1,panelPadding:{top:"15px",right:"15px",bottom:"15px",left:"15px"},panelSpaceBetween:15,panelCollapse:!0,panelBackgroundColor:"#ffffff",panelTitleTag:"h6",panelTitleColor:"#252740",panelContentColor:"#575b7a",panelTitleFontSize:"18px",panelContentFontSize:"14px",panelTitleContentGap:13,panelTriggerIcon:"up-down"},scope:["block"]},{name:"style-one",title:(0,a.__)("Style 1"),description:(0,a.__)("Style 1 - Plus Minus"),icon:(0,e.createElement)("svg",{width:"261",height:"175",viewBox:"0 0 261 175",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"0.157349",width:"260",height:"175",fill:"white"}),(0,e.createElement)("rect",{x:"19.8573",y:"93.4993",width:"220.6",height:"22.3721",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.3506",y:"101.798",width:"86.7885",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"19.8573",y:"127.595",width:"220.6",height:"22.3721",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.3506",y:"135.894",width:"86.7885",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"19.8573",y:"25.0327",width:"220.6",height:"58.9427",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.3506",y:"34.7065",width:"82.5694",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"48.1799",width:"176.698",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"56.429",width:"186.607",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"64.678",width:"176.698",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.3506",y:"72.9268",width:"73.762",height:"1.3752",rx:"0.687601",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"224.557",y:"36.7991",width:"6",height:"1.22697",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"228.157",y:"34.3457",width:"6.13318",height:"1.2",transform:"rotate(90 228.157 34.3457)",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"224.557",y:"103.855",width:"6",height:"1.22697",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"228.157",y:"101.402",width:"6.13318",height:"1.2",transform:"rotate(90 228.157 101.402)",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"224.557",y:"138.201",width:"6",height:"1.22697",fill:"#6884CA"}),(0,e.createElement)("rect",{x:"228.157",y:"135.748",width:"6.13318",height:"1.2",transform:"rotate(90 228.157 135.748)",fill:"#6884CA"})),innerBlocks:[["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"plus-minus",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]],["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"plus-minus",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]],["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"plus-minus",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]]],attributes:{showVariation:!1,panelPadding:{top:"15px",right:"15px",bottom:"15px",left:"15px"},panelSpaceBetween:15,panelCollapse:!1,panelBorder:{color:"#d8dfef",style:"solid",width:"1px"},panelBackgroundColor:"#ffffff",panelTitleTag:"h6",panelTitleColor:"#252740",panelContentColor:"#575b7a",panelTitleFontSize:"18px",panelContentFontSize:"14px",panelTitleContentGap:13,panelTriggerIcon:"plus-minus"},scope:["block"]},{name:"style-two",title:(0,a.__)("Style 2"),description:(0,a.__)("Style 2 - with Dropdown"),icon:(0,e.createElement)("svg",{width:"260",height:"175",viewBox:"0 0 260 175",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{width:"260",height:"175",fill:"white"}),(0,e.createElement)("rect",{x:"19.7",y:"93.4995",width:"220.6",height:"22.3721",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.1932",y:"101.798",width:"86.7885",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"19.7",y:"127.595",width:"220.6",height:"22.3721",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.1932",y:"135.894",width:"86.7885",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{x:"19.7",y:"25.0327",width:"220.6",height:"58.9427",fill:"white",stroke:"#B3C8FD"}),(0,e.createElement)("rect",{x:"30.1932",y:"34.7063",width:"82.5694",height:"5.49933",rx:"2.74966",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.1932",y:"48.1797",width:"176.698",height:"1.37483",rx:"0.687416",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.1932",y:"56.429",width:"186.607",height:"1.37483",rx:"0.687416",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.1932",y:"64.678",width:"176.698",height:"1.37483",rx:"0.687416",fill:"#94ABE7"}),(0,e.createElement)("rect",{opacity:"0.7",x:"30.1932",y:"72.9265",width:"73.762",height:"1.37483",rx:"0.687416",fill:"#94ABE7"}),(0,e.createElement)("path",{d:"M224.59 39.3414L228 35.8555L231.41 39.3414",stroke:"#6884CA","stroke-width":"2"}),(0,e.createElement)("path",{d:"M224.59 103.583L228 107.069L231.41 103.583",stroke:"#6884CA","stroke-width":"2"}),(0,e.createElement)("path",{d:"M224 137.446L227.41 140.932L230.821 137.446",stroke:"#6884CA","stroke-width":"2"})),innerBlocks:[["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"up-down",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]],["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"up-down",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]],["gutena/accordion-panel",{},[["gutena/accordion-panel-title",{},[["core/heading",{content:"Add your title here",panelTriggerIconGlobal:"up-down",textAlign:"left",level:6,style:{spacing:{margin:{top:"0px",right:"0px",bottom:"0px",left:"0px"}}}}]]],["gutena/accordion-panel-content",{},[["core/paragraph",{content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",color:{text:"#505050"}}]]]]]],attributes:{showVariation:!1,panelPadding:{top:"15px",right:"15px",bottom:"15px",left:"15px"},panelSpaceBetween:15,panelCollapse:!0,panelBorder:{color:"#d8dfef",style:"solid",width:"1px"},panelBackgroundColor:"#ffffff",panelTitleTag:"h6",panelTitleColor:"#252740",panelContentColor:"#575b7a",panelTitleFontSize:"18px",panelContentFontSize:"14px",panelTitleContentGap:13,panelTriggerIcon:"up-down"},scope:["block"]}];const y=[],x=["gutena/accordion-panel"];function w(t){let{clientId:n,attributes:o,setAttributes:r}=t;const{uniqueId:i,panelPadding:c,panelSpaceBetween:p,panelCollapse:g,panelBorder:s,panelRadius:h,panelBackgroundColor:f,panelBorderOpen:w,panelRadiusOpen:E,panelBackgroundColorOpen:C,panelTitleColor:b,panelContentColor:_,panelTitleFontFamily:v,panelTitleFontSize:B,panelTitleFontStyle:k,panelTitleFontWeight:S,panelTitleLineHeight:F,panelTitleTextTransform:T,panelContentFontFamily:A,panelContentFontSize:I,panelContentFontStyle:P,panelContentFontWeight:O,panelContentLineHeight:N,panelContentTextTransform:D,panelTitleContentGap:z,panelTriggerIcon:L,showVariation:j,blockStyles:G}=o,V=(0,l.useBlockProps)({className:`gutena-accordion-block gutena-accordion-block-${o.uniqueId}`}),$=(0,l.useInnerBlocksProps)(V,{allowedBlocks:x,orientation:"horizontal",renderAppender:!1});(0,e.useEffect)((()=>{!i||y.includes(i)?(r({uniqueId:n.substr(2,9)}),y.push(n.substr(2,9))):y.push(i)}),[]);const W=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(u.__experimentalSpacer,{marginBottom:5},(0,e.createElement)(u.__experimentalBorderControl,{label:(0,a.__)("Border","gutena-accordion"),onChange:e=>r({panelBorder:e}),value:s})),(0,e.createElement)(u.__experimentalSpacer,{marginBottom:4},(0,e.createElement)(u.__experimentalBoxControl,{label:(0,a.__)("Border radius","gutena-accordion"),values:h,onChange:e=>r({panelRadius:e})})),(0,e.createElement)(u.__experimentalSpacer,{marginBottom:4},(0,e.createElement)(u.__experimentalBoxControl,{label:(0,a.__)("Padding","gutena-accordion"),values:c,onChange:e=>r({panelPadding:e})})),(0,e.createElement)(l.ColorPaletteControl,{label:(0,a.__)("Background color","gutena-accordion"),value:f,onChange:e=>r({panelBackgroundColor:e})})),R=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(u.__experimentalSpacer,{marginBottom:5},(0,e.createElement)(u.__experimentalBorderControl,{label:(0,a.__)("Border","gutena-accordion"),onChange:e=>r({panelBorderOpen:e}),value:w})),(0,e.createElement)(u.__experimentalSpacer,{marginBottom:4},(0,e.createElement)(u.__experimentalBoxControl,{label:(0,a.__)("Border radius","gutena-accordion"),values:E,onChange:e=>r({panelRadiusOpen:e})})),(0,e.createElement)(l.ColorPaletteControl,{label:(0,a.__)("Background color","gutena-accordion"),value:C,onChange:e=>r({panelBackgroundColorOpen:e})})),H=(0,e.createElement)("div",{className:"gutena-accordion-title-typography"},(0,e.createElement)(l.__experimentalFontFamilyControl,{label:(0,a.__)("Font family","gutena-accordion"),fontFamilies:(0,l.useSetting)("typography.fontFamilies"),value:v,onChange:e=>r({panelTitleFontFamily:e})}),(0,e.createElement)(u.FontSizePicker,{label:(0,a.__)("Font size","gutena-accordion"),value:B,onChange:e=>r({panelTitleFontSize:e}),fallBackFontSize:14,fontSizes:(0,l.useSetting)("typography.fontSizes")}),(0,e.createElement)(l.__experimentalFontAppearanceControl,{hasFontStyles:!!(0,l.useSetting)("typography.fontStyle"),hasFontWeights:!!(0,l.useSetting)("typography.fontWeight"),value:{fontStyle:k,fontWeight:S},onChange:e=>{r({panelTitleFontStyle:null==e?void 0:e.fontStyle,panelTitleFontWeight:null==e?void 0:e.fontWeight})}}),(0,e.createElement)(u.RangeControl,{label:(0,a.__)("Line height","gutena-accordion"),value:F,onChange:e=>r({panelTitleLineHeight:e}),min:0,max:10,step:.1,allowReset:!0}),(0,e.createElement)(u.SelectControl,{label:(0,a.__)("Text transform","gutena-accordion"),value:T,options:[{label:(0,a.__)("None","gutena-accordion"),value:""},{label:(0,a.__)("Lower case","gutena-accordion"),value:"lowercase"},{label:(0,a.__)("Upper case","gutena-accordion"),value:"uppercase"},{label:(0,a.__)("Capitalized case","gutena-accordion"),value:"capitalize"}],onChange:e=>r({panelTitleTextTransform:e})})),M=(0,e.createElement)("div",{className:"gutena-accordion-content-typography"},(0,e.createElement)(l.__experimentalFontFamilyControl,{label:(0,a.__)("Font family","gutena-accordion"),fontFamilies:(0,l.useSetting)("typography.fontFamilies"),value:A,onChange:e=>r({panelContentFontFamily:e})}),(0,e.createElement)(u.FontSizePicker,{label:(0,a.__)("Font size","gutena-accordion"),value:I,onChange:e=>r({panelContentFontSize:e}),fallBackFontSize:14,fontSizes:(0,l.useSetting)("typography.fontSizes")}),(0,e.createElement)(l.__experimentalFontAppearanceControl,{hasFontStyles:!!(0,l.useSetting)("typography.fontStyle"),hasFontWeights:!!(0,l.useSetting)("typography.fontWeight"),value:{fontStyle:P,fontWeight:O},onChange:e=>{r({panelContentFontStyle:null==e?void 0:e.fontStyle,panelContentFontWeight:null==e?void 0:e.fontWeight})}}),(0,e.createElement)(u.RangeControl,{label:(0,a.__)("Line height","gutena-accordion"),value:N,onChange:e=>r({panelContentLineHeight:e}),min:0,max:10,step:.1,allowReset:!0}),(0,e.createElement)(u.SelectControl,{label:(0,a.__)("Text transform","gutena-accordion"),value:D,options:[{label:(0,a.__)("None","gutena-accordion"),value:""},{label:(0,a.__)("Lower case","gutena-accordion"),value:"lowercase"},{label:(0,a.__)("Upper case","gutena-accordion"),value:"uppercase"},{label:(0,a.__)("Capitalized case","gutena-accordion"),value:"capitalize"}],onChange:e=>r({panelContentTextTransform:e})})),q=function(e){const{panelPadding:t,panelSpaceBetween:n,panelBorder:a,panelRadius:l,panelBackgroundColor:o,panelBorderOpen:r,panelRadiusOpen:i,panelBackgroundColorOpen:c,panelTitleColor:p,panelContentColor:g,panelTitleFontFamily:s,panelTitleFontSize:d,panelTitleFontStyle:h,panelTitleFontWeight:u,panelTitleLineHeight:f,panelTitleTextTransform:y,panelContentFontFamily:x,panelContentFontSize:w,panelContentFontStyle:E,panelContentFontWeight:C,panelContentLineHeight:b,panelContentTextTransform:_,panelTitleContentGap:v}=e,B=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return(0,m.merge)(n,t,e),`${null==n?void 0:n.top} ${null==n?void 0:n.right} ${null==n?void 0:n.bottom} ${null==n?void 0:n.left}`},k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return(0,m.merge)(n,t,e),`${null==n?void 0:n.width} ${null==n?void 0:n.style} ${null==n?void 0:n.color}`};return(0,m.pickBy)({"--gutena--accordion-panel-padding":B(t),"--gutena--accordion-panel-spacing":n,"--gutena--accordion-panel-border":k(a),"--gutena--accordion-panel-border-radius":B(l),"--gutena--accordion-panel-background-color":o,"--gutena--accordion-panel-open-border":k(r,a),"--gutena--accordion-panel-open-border-radius":B(i,l),"--gutena--accordion-panel-open-background-color":c,"--gutena--accordion-panel-title-color":p,"--gutena--accordion-panel-content-color":g,"--gutena--accordion-panel-title-font-family":s,"--gutena--accordion-panel-title-font-size":d,"--gutena--accordion-panel-title-font-style":h,"--gutena--accordion-panel-title-font-weight":u,"--gutena--accordion-panel-title-line-height":f,"--gutena--accordion-panel-title-text-transform":y,"--gutena--accordion-panel-content-font-family":x,"--gutena--accordion-panel-content-font-size":w,"--gutena--accordion-panel-content-font-style":E,"--gutena--accordion-panel-content-font-weight":C,"--gutena--accordion-panel-content-line-height":b,"--gutena--accordion-panel-content-text-transform":_,"--gutena--accordion-panel-title-content-spacing":v},(e=>void 0!==e&&""!==e&&!(0,m.includes)(e,"undefined")))}(o),J=(0,e.createElement)("style",null,`\n\t\t\t\t.gutena-accordion-block-${i} {\n\t\t\t\t\t${Object.entries(q).map((e=>{let[t,n]=e;return`${t}:${n}`})).join(";")}\n\t\t\t\t}\n\t\t\t`),U=JSON.stringify(q);return(0,e.useEffect)((()=>{U!=JSON.stringify(G)&&r({blockStyles:q})}),[U]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(u.PanelBody,{title:(0,a.__)("Panel Settings","gutena-accordion"),initialOpen:!1},(0,e.createElement)(u.__experimentalSpacer,{marginTop:3,marginBottom:7},(0,e.createElement)(u.ToggleControl,{label:(0,a.__)("Open single panel at a time","gutena-accordion"),checked:g,onChange:e=>r({panelCollapse:e})})),(0,e.createElement)(u.RangeControl,{label:(0,a.__)("Space between the panels","gutena-accordion"),value:p,onChange:e=>r({panelSpaceBetween:e}),min:0,max:50}),(0,e.createElement)(u.RangeControl,{label:(0,a.__)("Margin below the title","gutena-accordion"),value:z,onChange:e=>r({panelTitleContentGap:e}),min:0,max:50})),(0,e.createElement)(u.PanelBody,{title:(0,a.__)("Panel Styles","gutena-accordion"),initialOpen:!1},(0,e.createElement)(u.TabPanel,{className:"gutena-tab-panel",activeClass:"active-tab",tabs:[{name:"default",title:(0,a.__)("Default","gutena-accordion"),className:"gutena-default-tab"},{name:"active",title:(0,a.__)("Active","gutena-accordion"),className:"gutena-active-tab"}]},(e=>{let t=W;return"active"==(null==e?void 0:e.name)&&(t=R),t}))),(0,e.createElement)(l.PanelColorSettings,{__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,title:(0,a.__)("Color Settings","gutena-accordion"),initialOpen:!1,colorSettings:[{value:b,onChange:e=>r({panelTitleColor:e}),label:(0,a.__)("Title color","gutena-accordion")},{value:_,onChange:e=>r({panelContentColor:e}),label:(0,a.__)("Content color","gutena-accordion")}]}),(0,e.createElement)(u.PanelBody,{title:(0,a.__)("Typography","gutena-accordion"),initialOpen:!1},(0,e.createElement)(u.TabPanel,{className:"gutena-tab-panel",activeClass:"active-tab",tabs:[{name:"title",title:(0,a.__)("Title","gutena-accordion"),className:"gutena-title-tab"},{name:"content",title:(0,a.__)("Content","gutena-accordion"),className:"gutena-content-tab"}]},(e=>{let t=H;return"content"==(null==e?void 0:e.name)&&(t=M),t}))),(0,e.createElement)(u.PanelBody,{title:(0,a.__)("Trigger Icon Settings","gutena-accordion"),initialOpen:!1},(0,e.createElement)(u.SelectControl,{label:(0,a.__)("Trigger icon","gutena-accordion"),value:L,options:[{label:(0,a.__)("Plus Minus","gutena-accordion"),value:"plus-minus"},{label:(0,a.__)("Up Down","gutena-accordion"),value:"up-down"},{label:(0,a.__)("None","gutena-accordion"),value:"none"}],onChange:e=>r({panelTriggerIcon:e})}))),J,(0,e.createElement)("div",d({},$,{"data-single":g})))}function E(n){let{clientId:o,attributes:r,setAttributes:i}=n;const c=f.filter((e=>e.isDefault))[0]||f[0],{replaceInnerBlocks:p}=(0,h.useDispatch)(l.store),g=(0,l.useBlockProps)({className:`gutena-accordion-block gutena-accordion-block-${r.uniqueId}`});return(0,e.createElement)("div",g,(0,e.createElement)(l.__experimentalBlockVariationPicker,{label:(0,a.__)("Accordion Style","gutena-accordion"),instructions:(0,a.__)("Select a Accordion style to start with.","gutena-accordion"),variations:f,onSelect:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;e.attributes&&i(e.attributes),e.innerBlocks&&p(o,(0,t.createBlocksFromInnerBlocksTemplate)(e.innerBlocks),!0)},allowSkip:!0}))}(0,t.registerBlockType)(s,{edit:function(t){const{clientId:n}=t,a=(0,h.useSelect)((e=>e(l.store).getBlocks(n).length>0),[n])?w:E;return(0,e.createElement)(a,t)},save:function(t){let{attributes:n}=t;const{uniqueId:a,panelCollapse:o}=n,r=l.useBlockProps.save({className:`gutena-accordion-block gutena-accordion-block-${a}`});return(0,e.createElement)("div",d({},r,{"data-single":o}),(0,e.createElement)(l.InnerBlocks.Content,null))},icon:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("rect",{x:"2",y:"2",width:"1.5",height:"20",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"21",y:"2",width:"1.5",height:"20",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"3",width:"1.5",height:"20.5",transform:"rotate(-90 2 3)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"22",width:"1.5",height:"20.5",transform:"rotate(-90 2 22)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"15",width:"1.5",height:"20.5",transform:"rotate(-90 2 15)",fill:"#3F6DE4"}),(0,e.createElement)("rect",{x:"2",y:"9",width:"1.5",height:"20.5",transform:"rotate(-90 2 9)",fill:"#3F6DE4"}))})}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,n,l,o){if(!n){var r=1/0;for(g=0;g<e.length;g++){n=e[g][0],l=e[g][1],o=e[g][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(g--,1);var p=l();void 0!==p&&(t=p)}}return t}o=o||0;for(var g=e.length;g>0&&e[g-1][2]>o;g--)e[g]=e[g-1];e[g]=[n,l,o]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,r=n[0],i=n[1],c=n[2],p=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(c)var g=c(a)}for(t&&t(n);p<r.length;p++)o=r[p],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(g)},n=self.webpackChunkgutena_accordion=self.webpackChunkgutena_accordion||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=a.O(void 0,[431],(function(){return a(514)}));l=a.O(l)}();