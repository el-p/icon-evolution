(this["webpackJsonpicons-evolution"]=this["webpackJsonpicons-evolution"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),i=n.n(c),r=n(12),s=n.n(r),a=n(10),l=n(15),h=n(14),j=n(5),d=n(6),u=n(8),p=n(7);n(36),n(37);var b=n(2),f=(n(38),function(e){return Object(o.jsx)("div",Object(b.a)(Object(b.a)({className:"ClosingButton"},e),{},{children:Object(o.jsx)("div",{className:"cross-1",children:Object(o.jsx)("div",{className:"cross-2"})})}))}),O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={blurRequested:!1},e.onBlur=function(){e.setState({blurRequested:!0}),setTimeout((function(){e.setState({blurRequested:!1}),e.props.onBlur()}),250)},e.onContentClick=function(e){e.stopPropagation()},e}return Object(d.a)(n,[{key:"render",value:function(){var e="modal";return this.state.blurRequested&&(e+=" backOutDown"),this.props.isOpen&&!this.state.blurRequested&&(e+=" backInUp"),Object(o.jsx)("div",{className:"Details",style:{display:this.props.isOpen?"inline":"none"},onClick:this.onBlur,children:Object(o.jsxs)("div",{className:e,onClick:this.onContentClick,children:[Object(o.jsxs)("div",{className:"details-header",children:[Object(o.jsx)("div",{className:"icon",children:this.props.icon}),Object(o.jsx)("h3",{children:this.props.title}),Object(o.jsx)(f,{onClick:this.onBlur})]}),Object(o.jsx)("div",{className:"details-content",children:this.props.children})]})})}}]),n}(c.Component);O.defaultProps={isOpen:!1,onBlur:function(){},title:"Icon Title"};var v=O,m=(n(39),function(e){return Object(o.jsxs)("div",{className:"Toolbar",children:[Object(o.jsx)("div",{className:"toolbar-header",children:Object(o.jsx)("h4",{children:"Toolbar"})}),Object(o.jsx)("div",{className:"toolbar-content",children:e.children})]})}),x=(n(40),n(41),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"Popover",style:{display:this.props.isOpen?"inline":"none"},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,children:[Object(o.jsxs)("div",{className:"popover-content",children:[this.props.description,Object(o.jsx)("span",{className:"cta",children:this.props.callToAction})]}),Object(o.jsx)("div",{className:"popover-more",onClick:this.props.onClick,children:"Discover More"})]})}}]),n}(c.Component));x.defaultProps={isOpen:!1,onMouseEnter:function(){},onMouseLeave:function(){}};var g=x,y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={showPopover:!1},e.showPopover=function(t){e.setState({showPopover:t})},e.handleClick=function(t){e.setState({showPopover:!1}),e.props.onClick(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t="IconBox ".concat(this.state.showPopover?"hover":"");return Object(o.jsxs)("div",{className:"IconBoxContainer",children:[Object(o.jsx)("div",{className:t,ref:this.iconBox,onMouseEnter:function(){return e.showPopover(!0)},onMouseLeave:function(){return e.showPopover(!1)},onClick:this.handleClick,children:this.props.children}),Object(o.jsx)(g,{isOpen:this.state.showPopover,description:this.props.description,callToAction:this.props.callToAction,onMouseEnter:function(){return e.showPopover(!0)},onMouseLeave:function(){return e.showPopover(!1)},onClick:this.handleClick})]})}}]),n}(c.Component);y.defaultProps={onClick:function(){}};var w=y,k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("svg",Object(b.a)({id:this.props.id,xmlns:"http://www.w3.org/2000/svg"},this.props))}}]),n}(c.Component),M=function(e){return Object(o.jsxs)(k,Object(b.a)(Object(b.a)({id:"IconCompass",viewBox:"0 0 462.4 462.4"},e),{},{children:[Object(o.jsx)("rect",{x:"3",y:"3",width:"456.4",height:"456.41",rx:"114.6",fill:"#424242"}),Object(o.jsx)("path",{d:"M344.8 6a111.6 111.6 0 01111.6 111.6v227.2a111.6 111.6 0 01-111.6 111.6H117.6A111.6 111.6 0 016 344.8V117.6A111.6 111.6 0 01117.6 6h227.2m0-6H117.6A117.4 117.4 0 000 117.6v227.2a117.4 117.4 0 00117.6 117.6h227.2a117.4 117.4 0 00117.6-117.6V117.6A117.4 117.4 0 00344.8 0z",fill:"#1c1b1c"}),Object(o.jsx)("rect",{x:"6",y:"6",width:"450.4",height:"450.41",rx:"111.6",fill:"none",stroke:"#666665",strokeMiterlimit:"10",strokeWidth:"4"}),Object(o.jsx)("path",{d:"M272.9 233.6H287a4.8 4.8 0 004.9-4.8v-4.4a4.9 4.9 0 00-4.9-4.9h-17.9l-21.2-79.3a38.3 38.3 0 00-9.6-72.2V50.7a4.9 4.9 0 00-4.9-4.9H229a4.9 4.9 0 00-4.9 4.9V68a38.3 38.3 0 00-9.6 72.2l-21.2 79.3h-17.9a4.9 4.9 0 00-4.9 4.9v4.4a4.8 4.8 0 004.9 4.8h14.1l-41.7 155.8 7.1 27.2 6.7-23.5 42.7-159.5h19.8v3.5a4.9 4.9 0 004.9 4.9h4.4a4.9 4.9 0 004.9-4.9v-3.5h19.8l42.7 159.5 6.7 23.5 7.1-27.2zm-67.2-127.9a25.5 25.5 0 1125.5 25.5 25.5 25.5 0 01-25.5-25.5zm32.6 113.8v-3.4a4.9 4.9 0 00-4.9-4.9H229a4.9 4.9 0 00-4.9 4.9v3.4h-16l20.3-75.6h5.6l20.3 75.6z",fill:"#f39f39"})]}))},C=function(e){return Object(o.jsx)(k,{viewBox:"0 0 493.3 481.1",children:Object(o.jsx)("path",{d:"M255.8,15.3C119.6,15.3,9.2,125.7,9.2,261.9c0,109,70.7,201.4,168.7,234,12.3,2.3,16.8-5.3,16.8-11.8s-.2-25.3-.3-45.9c-68.6,14.9-83.1-29.1-83.1-29.1C100.1,380.5,83.9,373,83.9,373c-22.4-15.3,1.7-15,1.7-15,24.8,1.7,37.8,25.4,37.8,25.4,22,37.7,57.7,26.8,71.8,20.5,2.2-15.9,8.6-26.8,15.6-33C156.1,364.7,98.5,343.5,98.5,249c0-26.9,9.6-48.9,25.4-66.2-2.6-6.2-11-31.3,2.4-65.3,0,0,20.7-6.6,67.8,25.3a233.9,233.9,0,0,1,123.5,0c47.1-31.9,67.8-25.3,67.8-25.3,13.4,34,5,59.1,2.4,65.3,15.8,17.3,25.4,39.3,25.4,66.2,0,94.8-57.7,115.6-112.6,121.7,8.8,7.7,16.7,22.7,16.7,45.7,0,33-.3,59.5-.3,67.7,0,6.5,4.5,14.2,17,11.8,97.9-32.6,168.5-125.1,168.5-234C502.5,125.7,392.1,15.3,255.8,15.3Z",transform:"translate(-9.2 -15.3)",fill:"#fff",fillRule:"evenodd"})})},z=[{name:"Lasso",shortDescription:"Allows you to make freehand selections.",callToAction:"Why a Lasso?",description:"To use the lasso like a real CowBoy you need a rope ending in a closed shape that captures the 'outline' of what you want to take.",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconLazo",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsxs)("g",{fill:"none",stroke:"#c6c6c6",strokeMiterlimit:"10",strokeWidth:"10",children:[Object(o.jsx)("path",{d:"M186.2 340.3c167.6 20.2 242.8-98.9 221.5-153.2-20-50.7-95.9-73.4-177.2-47.8S77.4 239 104 294.9c15 31.8 52.7 37.8 82.2 45.4"}),Object(o.jsx)("path",{d:"M182.8 351.6s-81.5 17.3-72.2-26.6 93.6-29.5 81.3-.4-21.6 82.9-21.6 82.9"})]})}))}},{name:"Magic Wand",shortDescription:"Select areas of the image with similar colors.",callToAction:"Why a Magic Wand?",description:"If you outline freehand for hours, finding yourself in front of the perfect image to do it automatically thanks to a color difference is a kind of magic!",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconMagicWand",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsxs)("g",{fill:"#c6c6c6",children:[Object(o.jsxs)("g",{"data-name":"Sparkle 3",children:[Object(o.jsx)("path",{d:"M225.2 103.5h15.5v90.44h-15.5z"}),Object(o.jsx)("path",{d:"M185.2 141h92.1v13.2h-92.1z"}),Object(o.jsx)("path",{d:"M216.2 133.4h31.2v29.32h-31.2z"})]}),Object(o.jsxs)("g",{"data-name":"Sparkle 2",children:[Object(o.jsx)("path",{d:"M395.6 114.2h11.5v69.6h-11.5z"}),Object(o.jsx)("path",{d:"M365.9 143h68.5v10.16h-68.5z"}),Object(o.jsx)("path",{d:"M389 137.2h23.2v23.22H389z"})]}),Object(o.jsxs)("g",{"data-name":"Sparkle 1",children:[Object(o.jsx)("path",{d:"M379.6 225.3H391v55.13h-11.4z"}),Object(o.jsx)("path",{d:"M356.1 246.6H413v13.47h-56.9z"})]}),Object(o.jsx)("path",{d:"M350 163.7c-8.5-8-30.5-7.1-44.5-6.2-5.6.3-10.6 3.1-14.5 7L112.9 340.6s-20.7 22.9-1.3 45.8c25.8 30.3 54.4 13.5 54.4 13.5l181.2-181.2a24.3 24.3 0 006.6-11.8c2.9-11.5 4.1-35.9-3.8-43.2zm-18.2 52.9l-37.6 37.2a9.7 9.7 0 01-13.9-.3l-23.2-23.7a9.6 9.6 0 01.3-13.5l37.9-37.6a19.7 19.7 0 0115.4-5.7c8.6.6 23.6-.9 26.8 2.8s1.3 16.6 1.2 24.7a23.2 23.2 0 01-6.9 16.1z"})]})}))}},{name:"Eyedropper",shortDescription:"Samples the colors of an image.",callToAction:"What's this lil pacifier?",description:"The dropper allows you to collect a color sample and store it in a bottle to be able to replicate it a number of times at a later time.",icon:function(e){return Object(o.jsxs)(k,Object(b.a)(Object(b.a)({id:"IconDropper",viewBox:"0 0 512 460"},e),{},{children:[Object(o.jsx)("path",{d:"M302.8 267.1L183.7 379.6c-13.3 12.5-18.5 17-32 14.7h0a3.1 3.1 0 00-3.1 1 25.9 25.9 0 01-9 6.7l-9.2-2.1a13.9 13.9 0 01-10.3-11.6c-.6-5-.8-10-.8-10a21.9 21.9 0 015-4.5 3.1 3.1 0 001-3.8c-.7-1.5-1.2-3-1.7-4.3-3.2-10.7 3.1-18.1 16.3-30.7L259 222.6c13.3-12.6 27.5-19.3 31.8-14.7l28.1 28.5c4.3 4.4-2.8 18.2-16.1 30.7z",fill:"none",stroke:"#c6c6c6",strokeMiterlimit:"10",strokeWidth:"10"}),Object(o.jsx)("path",{d:"M391.4 132.5c-13.1-13.5-29.8-11.1-43.3 2.1l-51.4 49.1-20.8-19.7-43.4 42.1 87 83.7 42.4-44-22.1-21.2 48.8-47.6c13.6-13.1 16-30.9 2.8-44.5z",fill:"#c6c6c6"})]}))}},{name:"Healing Brush",shortDescription:"Corrects defects and imperfections.",callToAction:"Why is it a patch?",description:"As when we put on a flesh-colored patch, it recalls the physical action of repairing a portion of the canvas by 'putting a patch' that respects the pattern of it to be repaired, so that the outlines of the retouch are not visible.",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconCorrectiveBrush",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsx)("g",{fill:"#c6c6c6",children:Object(o.jsx)("path",{d:"M198.1 273.2l-.5-.4-54 54.7c-16 16.3-13.4 44 5.9 62s47.9 19.3 63.9 3l56-56.9zM393.5 137.3c-19.9-19-49.3-20.4-65.8-3.2l-37 38.6 71.9 68.7 36.9-38.5c16.5-17.3 13.8-46.6-6-65.6zM283.8 179.9l-79.2 85.7 71.8 62.9 79.3-79.9zm-37.5 80.2h-14v-12.8h14zm19.8 18.3H252v-12.9h14.1zm2.9-69.2h14.1V222H269zm18.4 88.2h-14.1v-12.9h14.1zm15.4-57.1h-14v-12.9h14zm7.3 18.9v-12.8h14v12.8zM162.7 178.9h14.1v12.84h-14.1zM162.7 210.2h14.1v12.84h-14.1zM176 238.6h14.1v12.84H176zM256.9 159H271v12.84h-14.1zM229.5 146.4h14.1v12.84h-14.1zM197.7 146.4h14.1v12.84h-14.1zM169.8 152.8h14.1v12.84h-14.1z"})})}))}},{name:"Clone Stamp",shortDescription:"Draw using pixels from another part of the image.",callToAction:"Why a stamp?",description:"It emulates the possibility of transferring an image created on a matrix to another two-dimensional support by pressing a stamp: this operation made it possible to inking the matrix and reproduce the starting image for multiple.",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconCloningTool",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsxs)("g",{fill:"#c6c6c6",children:[Object(o.jsx)("path",{d:"M133.3 380.2h248.3v17.18H133.3zM319.6 180.1c0-34.3-28.9-62.2-64.4-62.2s-64.3 27.9-64.3 62.2 28.8 62.2 64.3 62.2 64.4-27.9 64.4-62.2z"}),Object(o.jsx)("path",{d:"M125 366c2.7 2.3 5.6 3.9 8.8 3.9h247.5c3.1 0 6.1-1.6 8.7-4 13.2-11.7 6.4-33.2-9.2-41.6s-32.5-11.4-52.2-18.6c-34.3-11.4-51.2-23.4-57.2-39.6-1.2-3.1 1.3-20.8 1.1-25a3.6 3.6 0 00-3.5-3.5h-28.4a3.6 3.6 0 00-3.5 3.5c-.1 4.2 2 22.2 1 25.2-5.7 15.5-16.1 26.1-54.6 39.4-15.7 6.1-34.7 10-50 19.1s-21.4 29.7-8.5 41.2z"})]})}))}},{name:"Burn",shortDescription:"Darkens some areas of the image.",callToAction:"Why is it an OK emoji?",description:"It represents a hand that directs the light in a certain area to burn it, a technique used in photography to darken some parts of the original shot to obtain contrasting effects.",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconBurn",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsx)("path",{d:"M352.7 182c-106.6-97.9-88.6-74.8-211.4-40.3-29.4 29.4-42 63.9-44.8 91 11.6-20.8 42.2-72.7 61.4-79.2 22.8-7.8 53-12.6 53.3-12.7a2.5 2.5 0 012.8 2.1 2.5 2.5 0 01-2.1 2.9c-.2 0-30 4.8-52.4 12.4-6.1 2.1-18 11.7-39.5 45.1-13.1 20.3-23.6 40-23.7 40.2l-.5.5c-.1 18.9 4.9 32.3 11.9 34.4 54.7 16.9 42.4-97.5 127.2-46.4 40.4 38.3-.3 86.4-37 81.2-40.5-20.6-61.1-40.3-88.1-20.4-6.2 14.4-8.1 25.6 76.9 74.6 80.9 15.5 84.7-9.1 167.5-21.2 14-4.8 62 52.3 62 52.3l24.9-134.1S386.7 227 352.7 182z",fill:"#c6c6c6"})}))}},{name:"Mask",shortDescription:"Adds a layer mask.",callToAction:"What is it?",description:"Trivially a cardboard with a hole in the center! To intervene on a portion of the image in a massive way, for example with an airbrush, but while preserving some areas from the intervention, it was necessary to mask them with a cardboard applied to the areas to be protected.",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconMask",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsx)("path",{d:"M384.4 121.1H126.5a12.4 12.4 0 00-12.3 12.4v190.6a12.3 12.3 0 0012.3 12.4h257.9a12.4 12.4 0 0012.4-12.4V133.5a12.5 12.5 0 00-12.4-12.4zM255.5 297.3a68.5 68.5 0 1168.5-68.5 68.5 68.5 0 01-68.5 68.5z",fill:"#c6c6c6"})}))}},{name:"Pen",shortDescription:"Draw paths for anchor points.",callToAction:"What a strange pen!",description:"It is in fact the stylization of an ink nib: it recalls the ink passage of the sketch, which it forces you to detach the nib from the sheet when the direction of the stroke changes, a point that becomes an anchor for the next stroke.",icon:function(e){return Object(o.jsx)(k,Object(b.a)(Object(b.a)({id:"IconPen",viewBox:"0 0 512 460"},e),{},{children:Object(o.jsx)("g",{fill:"#c6c6c6",children:Object(o.jsx)("path",{d:"M285.1 171.7l77.5 77.5 37.3-37.3-95.1-95.2-37.3 37.4 17.6 17.6zM280.9 176l-5.4-5.4-80.2 41.9L127.1 377l4.8 4.8 85.9-85.8a16.9 16.9 0 116.3 6.4l-85.8 85.8 5.6 5.6L307 325.6l39.9-83.6z"})})}))}}],A=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={showDetails:!1,detailTitle:"Icon Title",detailContent:Object(o.jsx)("div",{}),currentIcon:Object(o.jsx)("div",{})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:"Home",children:[Object(o.jsx)(v,{isOpen:this.state.showDetails,onBlur:function(){return e.setState({showDetails:!1})},title:this.state.detailTitle,icon:this.state.currentIcon,children:this.state.detailContent}),Object(o.jsxs)("div",{className:"home-header",children:[Object(o.jsx)("div",{className:"icon",children:Object(o.jsx)(M,{})}),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h1",{children:"Icon Evolution"}),Object(o.jsx)("h2",{children:"Discover their past to unlock their future."})]})]}),Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("p",{children:["In order to be part of the ",Object(o.jsx)("strong",{children:"Icon Evolution"})," Landing Page, each icon must meet specific requirements. First of all, it must be featured in a computer graphics software interface. It must also represent an object or action whose meaning has been lost in the contemporary cultural context to the point that younger generations struggle to grasp its apparent meaning or utility. Last but not least, it must be eligible for design updates that will improve the user experience."]}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:"Interact with the icons to learn more about their history."})})]}),Object(o.jsx)("div",{className:"toolbar-container",children:Object(o.jsx)(m,{children:Object(o.jsx)("ul",{children:z.map((function(t){return Object(o.jsx)("li",{children:Object(o.jsx)(w,{description:t.shortDescription,callToAction:t.callToAction,onClick:function(){return e.setState({showDetails:!0,detailTitle:t.name,currentIcon:Object(o.jsx)(t.icon,{}),detailContent:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:t.shortDescription}),Object(o.jsx)("p",{children:t.description})]})})},children:Object(o.jsx)(t.icon,{})})},t.name)}))})})})]})}}]),n}(c.Component),T=Object(a.c)((function(e,t){return{}}),(function(e){return{}}))(A),I=function(e){return Object(o.jsxs)("div",{className:"Shell",children:[Object(o.jsx)("a",{className:"forkme",href:"https://github.com/el-p/icon-evolution.git",children:Object(o.jsx)(C,{})}),Object(o.jsx)("div",{class:"ribbon"}),Object(o.jsx)("div",{className:"main",children:Object(o.jsx)(h.c,{children:Object(o.jsx)(h.a,{path:"/",component:T})})}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("p",{children:"Icon Evolution \xa9 2021, Elsa Passioni"})})]})},N=function(e){var t=e.history,n=e.store;return Object(o.jsx)(a.a,{store:n,children:Object(o.jsx)(l.a,{history:t,children:Object(o.jsx)(h.c,{children:Object(o.jsx)(h.a,{path:"/",component:I})})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))},P=n(9),D=n(22),S=(n(44),n(24)),L=Object(P.combineReducers)({noop:function(){return{}}}),E=n(25),H="".concat("https://my-production-site.com","/api"),W=function(e){var t=[],n=/\[\]$/,o=function(e,n){n="function"===typeof n?n():null===n||void 0===n?"":n,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)};return function e(c,i){var r,s,a;if(c)if(Array.isArray(i))for(r=0,s=i.length;r<s;r++)n.test(c)?o(c,i[r]):e(c+"["+("object"===typeof i[r]?r:"")+"]",i[r]);else if(i&&"[object Object]"===String(i))for(a in i)e(c+"["+a+"]",i[a]);else o(c,i);else if(Array.isArray(i))for(r=0,s=i.length;r<s;r++)o(i[r].name,i[r].value);else for(a in i)e(a,i[a]);return t}("",e).join("&").replace(/%20/g,"+")},R=function(e,t){return Object.keys(t).forEach((function(e){"undefined"===typeof t[e]&&delete t[e]})),e+"?"+W(t)};n(45);function q(e){return-1!==e.indexOf("http://")||-1!==e.indexOf("https://")}var F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,c=q(e)?e:"".concat(H,"/").concat(e);n._=(new Date).getTime();var i=R(c,n),r={method:t,credentials:"include",headers:{"Cache-Control":"no-cache, no-store, must-revalidate"}};return o&&("GET"===r.method&&(r.method="POST"),o instanceof FormData?r.body=o:(r.body=JSON.stringify(o),r.headers["Content-Type"]="application/json")),fetch(i,r).then((function(e){return e.status>=200&&e.status<300?e:e.json().then((function(t){var n=new Error(e.statusText);throw n.response=e,n})).catch((function(t){throw new Error(e.statusText)}))})).then((function(e){return e.json().then((function(t){return{json:t,response:e}}))})).then((function(e){var t=e.json;return e.response.ok?Object.assign({},t):Promise.reject(t)}))},V=function(e){return function(t){return function(n){var o=n.API_CALL;if(!o)return t(n);var c=o.endpoint,i=o.method,r=o.types,s=o.params,a=o.payload;if("function"===typeof c&&(c=c(e.getState())),"string"!==typeof c)throw new Error("Specify a string enpoint URL");if(!Array.isArray(r)||3!==r.length)throw new Error("Expected an array of three action types");if(!r.every((function(e){return"string"===typeof e})))throw new Error("Expected action types to be strings.");var l=function(e){var t=Object.assign({},n,e);return delete t.API_CALL,t},h=Object(E.a)(r,3),j=h[0],d=h[1],u=h[2];return t(l({type:j})),F(c,i,s,a).then((function(e){return t(l({response:e,type:d}))}),(function(e){return t(l({type:u,error:e.message||"An unexpected API error occurred"}))}))}}},U=P.compose,J=function(e){return Object(P.createStore)(Object(P.combineReducers)({reducers:L,router:Object(l.b)(e)}),U(Object(P.applyMiddleware)(S.a,Object(D.a)(e),V)))},_=n(26),G=(n(46),Object(_.a)()),K=J(G);s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(N,{history:G,store:K})}),document.getElementById("root")),B()}},[[47,1,2]]]);
//# sourceMappingURL=main.b36ee78b.chunk.js.map