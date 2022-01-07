(()=>{"use strict";var t={873:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(943);class n extends HTMLElement{setState(){var t,e;this.state={id:this.getAttribute("id"),style:{bg:this.getAttribute("bg"),width:this.getAttribute("w"),height:this.getAttribute("h")},animation:{side:null!==(t=this.getAttribute("side"))&&void 0!==t?t:"left"},transition:{name:this.getAttribute("transition"),duration:null!==(e=this.getAttribute("duration"))&&void 0!==e?e:"0.5"}}}getAnimationName(){return`${this.state.transition.name}-${this.state.id}`}getSelector(){return`#${this.state.id}`}getBackground(){return this.state.style.bg.startsWith("http")||this.state.style.bg.startsWith(".")?`url("${this.state.style.bg}")`:this.state.style.bg}getPresentationStyle(){return{selector:this.getSelector(),declarations:{background:this.getBackground(),width:`${this.state.style.width}px`,height:`${this.state.style.height}px`}}}getSlideStyle(){return[{selector:`${this.getSelector()} widget-slide[active]`,declarations:{animation:`${this.getAnimationName()} ${this.state.transition.duration}s`}}]}getKeyframes(){return[{name:this.getAnimationName(),steps:[{selector:"from",declarations:{[this.state.animation.side]:"100%"}},{selector:"to",declarations:{[this.state.animation.side]:"0"}}]}]}getRootStyle(){return s.default.getStyleTag(`presentation-style-${this.getAttribute("id")}`,[{rules:[this.getPresentationStyle(),...this.getSlideStyle()],keyframes:this.getKeyframes()}])}setStyle(){document.head.appendChild(this.getRootStyle())}modifyChild(t,e){const i=this.children.item(t);t===e?i.setAttribute("active","true"):i.removeAttribute("active"),i.addEventListener("click",(()=>this.modifyChildren(t+1)))}modifyChildren(t){[...this.children].forEach(((e,i)=>{this.modifyChild(i,t)})),this.replaceChildren(...this.children)}connectedCallback(){this.setState(),this.setStyle(),setTimeout((()=>{this.modifyChildren(0)}))}}e.default=n},918:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class i extends HTMLElement{}e.default=i},332:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class i extends HTMLElement{constructor(){super(...arguments),this.wrapper=t=>{const e=document.createElement("div");return e.textContent=JSON.parse(t).pepe,e}}connectedCallback(){const t=this.getAttribute("texts").split(","),e=this.getAttribute("sm:hola");console.log(e),this.style.display="flex",this.style.justifyContent="space-between",t.forEach((t=>this.appendChild(this.wrapper(t))))}}e.default=i},648:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(873),n=i(918),a=i(332);e.default=()=>{window.customElements.define("flex-row",a.default),window.customElements.define("widget-presentation",s.default),window.customElements.define("widget-slide",n.default)}},46:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(943);e.default=()=>{const t=s.default.getStyleTag("root-style",[{rules:[{selector:"widget-presentation",declarations:{display:"flex",overflow:"hidden"}},{selector:"widget-slide",declarations:{display:"none",position:"relative",flexDirection:"column"}},{selector:"widget-slide[active]",declarations:{display:"flex"}}]}]);document.head.appendChild(t)}},943:(t,e)=>{var i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.getDeclaration=(t,e)=>{return`${i=t,i.split("").map((t=>(t=>t===t.toUpperCase())(t)?`-${t.toLowerCase()}`:t)).join("")}: ${e};`;var i},t.getDeclarations=e=>Object.entries(e).map((([e,i])=>t.getDeclaration(e,i))).join("\n\t"),t.getDeclarationBlock=e=>`{\n\t${t.getDeclarations(e)}\n}`,t.getRule=e=>`${e.selector} ${t.getDeclarationBlock(e.declarations)}`,t.getRules=e=>e.map(t.getRule).join("\n"),t.getBreakpoint=(t,e)=>e?`(${t}: ${e}px)`:"",t.getMinWidth=e=>t.getBreakpoint("min-width",e),t.getMaxWidth=e=>t.getBreakpoint("max-width",e),t.getRange=(e,i)=>`${t.getMinWidth(e)} ${e&&i?"and":""} ${t.getMaxWidth(i)}`,t.getKeyframe=e=>`\n@keyframes ${e.name} {\n${t.getRules(e.steps)}\n}\n`,t.getKeyframes=e=>e?e.map(t.getKeyframe).join("\n"):"",t.getScreen=e=>{const i=`${t.getRules(e.rules)} ${t.getKeyframes(e.keyframes)}`;return e.maxWidth||e.minWidth?`@media ${t.getRange(e.minWidth,e.maxWidth)} {\n            ${i}\n        }`:i},t.getStyleSheet=e=>e.map(t.getScreen).join("\n\n"),t.getStyleTag=(e,i)=>{const s=document.createElement("style");return s.setAttribute("id",e),s.innerHTML=t.getStyleSheet(i),s}}(i||(i={})),e.default=i}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,i),a.exports}(()=>{const t=i(648),e=i(46);(0,t.default)(),(0,e.default)()})()})();