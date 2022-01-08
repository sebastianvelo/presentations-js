(()=>{"use strict";var t={873:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(231),a=i(966),n=i(176),o=i(943),l=i(903),d=i(882);class r extends HTMLElement{constructor(){super(...arguments),this.setState=()=>{var t;this.state={id:this.getAttribute("id"),active:0,style:{bg:this.getAttribute(a.default.Background),width:this.getAttribute(a.default.Width),height:this.getAttribute(a.default.Height)},animation:{side:this.getAttribute(a.default.AnimationSide)},transition:{name:this.getAttribute(a.default.TransitionName),duration:null!==(t=this.getAttribute(a.default.TransitionDuration))&&void 0!==t?t:"0.5"}}},this.getPresentationSelector=()=>d.default.getIDSelector(this.state.id),this.getSlideSelector=()=>`${this.getPresentationSelector()} w-slide[active]`,this.getAnimationName=()=>`${this.state.transition.name}-${this.state.id}`,this.getAnimation=()=>`${this.getAnimationName()} ${this.state.transition.duration}s`,this.getPresentationStyle=()=>({selector:this.getPresentationSelector(),declarations:{background:l.default.getBackground(this.state.style.bg),width:l.default.getValueUnit(this.state.style.width,n.default.PX),height:l.default.getValueUnit(this.state.style.height,n.default.PX)}}),this.getSlideStyle=()=>({selector:this.getSlideSelector(),declarations:{animation:this.getAnimation()}}),this.getKeyframes=()=>[{name:this.getAnimationName(),steps:[{selector:"from",declarations:{[this.state.animation.side]:"100%"}},{selector:"to",declarations:{[this.state.animation.side]:"0"}}]}],this.getStyle=()=>o.default.getStyleSheet([{rules:[this.getPresentationStyle(),this.getSlideStyle()],keyframes:this.getKeyframes()}]),this.appendStyle=()=>(0,s.getRootStyle)().append(this.getStyle()),this.getBody=()=>this.children[1],this.getSlidesCount=()=>this.getBody().children.length-1,this.changeSlide=t=>{t?this.state.active===this.getSlidesCount()?this.state.active=0:this.state.active++:0===this.state.active?this.state.active=this.getSlidesCount():this.state.active--,this.getBody().setAttribute("slide",`${this.state.active}`)},this.getControl=t=>{const e=document.createElement("w-control");return t&&e.setAttribute("next",""),!t&&e.setAttribute("prev",""),e.addEventListener("click",(()=>this.changeSlide(t))),e},this.setContent=()=>{this.replaceChildren(this.getControl(!1),...this.children,this.getControl(!0))}}connectedCallback(){setTimeout((()=>{this.setState(),this.appendStyle(),this.setContent()}))}}e.default=r},577:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class i extends HTMLElement{constructor(){super(...arguments),this.init=()=>{this.setState(),this.modifyChildren(this.state.slideActive)},this.setState=()=>{this.state={slideActive:+this.getAttribute("slide")}},this.modifyChild=(t,e)=>{const i=this.children.item(t);t===e?i.setAttribute("active",""):i.removeAttribute("active")},this.modifyChildren=t=>{setTimeout((()=>{[...this.children].forEach(((e,i)=>{this.modifyChild(i,t)})),this.replaceChildren(...this.children)}))}}static get observedAttributes(){return["slide"]}attributeChangedCallback(){this.init()}connectedCallback(){this.init()}}e.default=i},594:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class i extends HTMLElement{}e.default=i},12:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class i extends HTMLElement{constructor(){super(...arguments),this.setState=()=>{this.state={next:null!==this.getAttribute("next")}},this.setContent=()=>{const t=document.createElement("button");t.textContent=this.state.next?">":"<",this.append(t)}}connectedCallback(){this.setState(),this.setContent()}}e.default=i},332:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(550);class a extends s.default{}e.default=a},550:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(231),a=i(966),n=i(176),o=i(943),l=i(903),d=i(882);class r extends HTMLElement{constructor(){super(...arguments),this.getPosition=()=>Object.values(this.state.position).filter((t=>t)).length?"absolute":"",this.getStyle=()=>o.default.getStyleSheet([{rules:[{selector:d.default.getIDSelector(this.state.id),declarations:{color:this.state.text,background:l.default.getBackground(this.state.bg),width:l.default.getValueUnit(this.state.size.width,n.default.PERCENT),height:l.default.getValueUnit(this.state.size.height,n.default.PERCENT),top:l.default.getValueUnit(this.state.position.top,n.default.PX),right:l.default.getValueUnit(this.state.position.right,n.default.PX),left:l.default.getValueUnit(this.state.position.left,n.default.PX),bottom:l.default.getValueUnit(this.state.position.bottom,n.default.PX),position:this.getPosition()}}]}])}setState(){this.state={id:`s-${d.default.generateID()}`,bg:this.getAttribute(a.default.Background),text:this.getAttribute(a.default.Text),size:{width:this.getAttribute(a.default.Width),height:this.getAttribute(a.default.Height)},position:{top:this.getAttribute(a.default.Top),right:this.getAttribute(a.default.Right),left:this.getAttribute(a.default.Left),bottom:this.getAttribute(a.default.Bottom)}}}appendStyle(){(0,s.getRootStyle)().append(this.getStyle())}connectedCallback(){this.setState(),this.appendStyle(),this.setAttribute("id",this.state.id)}}e.default=r},648:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(873),a=i(594),n=i(332),o=i(577),l=i(12);e.default=()=>{window.customElements.define("w-row",n.default),window.customElements.define("w-presentation",s.default),window.customElements.define("w-presentation-body",o.default),window.customElements.define("w-control",l.default),window.customElements.define("w-slide",a.default)}},46:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(231),a=i(943);e.default=()=>{const t=a.default.getStyleTag(s.rootStyleId,[{rules:[{selector:"w-row",declarations:{display:"flex"}},{selector:"w-presentation",declarations:{display:"flex",overflow:"hidden"}},{selector:"w-presentation-body",declarations:{width:"100%",height:"100%"}},{selector:"w-slide",declarations:{display:"none",position:"relative",flexDirection:"column",width:"100%",height:"100%"}},{selector:"w-slide[active]",declarations:{display:"flex"}}]}]);document.head.appendChild(t)}},231:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getRootStyle=e.rootStyleId=void 0,e.rootStyleId="root-style",e.getRootStyle=()=>document.getElementById(e.rootStyleId)},966:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.Background="bg",t.Text="text",t.Width="w",t.Height="h",t.Top="t",t.Right="r",t.Left="l",t.Bottom="b",t.AnimationSide="side",t.TransitionName="transition",t.TransitionDuration="duration"}(i||(i={})),e.default=i},176:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.PX="px",t.PERCENT="%"}(i||(i={})),e.default=i},943:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(882);var a;!function(t){const e=t=>{return`${t.selector} ${e=t.declarations,`{\n\t${(t=>Object.entries(t).filter((t=>t[1])).map((([t,e])=>((t,e)=>e?`${s.default.camelCaseToKebabCase(t)}: ${e};`:"")(t,e))).join("\n\t"))(e)}\n}`}`;var e},i=t=>t.map(e).join("\n"),a=(t,e)=>e?`(${t}: ${e}px)`:"",n=t=>`\n@keyframes ${t.name} {\n${i(t.steps)}\n}\n`,o=t=>{const e=`${i(t.rules)} ${s=t.keyframes,s?s.map(n).join("\n"):""}`;var s,o,l;return t.maxWidth||t.minWidth?`@media ${o=t.minWidth,l=t.maxWidth,`${(t=>a("min-width",t))(o)} ${o&&l?"and":""} ${(t=>a("max-width",t))(l)}`} {\n            ${e}\n        }`:e};t.getStyleSheet=t=>t.map(o).join("\n\n"),t.getStyleTag=(e,i)=>{const s=document.createElement("style");return s.setAttribute("id",e),s.innerHTML=t.getStyleSheet(i),s}}(a||(a={})),e.default=a},903:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(882);var a;!function(t){t.getBackground=t=>s.default.isAPath(t)?`url("${t}")`:t,t.getValueUnit=(t,e)=>t&&`${t}${e}`}(a||(a={})),e.default=a},882:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.isUpperCase=t=>t===t.toUpperCase(),t.camelCaseToKebabCase=e=>e.split("").map((e=>t.isUpperCase(e)?`-${e.toLowerCase()}`:e)).join(""),t.generateID=()=>Date.now()-Math.floor(5e3*Math.random()),t.isAPath=t=>t.startsWith("http")||t.startsWith("."),t.getIDSelector=t=>`#${t}`}(i||(i={})),e.default=i}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}(()=>{const t=i(648),e=i(46);(0,t.default)(),(0,e.default)()})()})();