import{aw as X,p as g,a1 as Y,q as N,a8 as we,a0 as q,a3 as K,ae as me,L as et,c as u,ax as A,aa as Be,ay as ge,az as tt,am as E,g as P,aA as nt,j as Ie,d as h,b as v,F as at,n as he,m as D,a as G,t as V,C as st,O as Ve,U as it,ag as lt,B as Ee,K as ot,N as rt,V as ut,at as ct,k as dt,M as ne,aB as vt,aC as ft,aD as mt,s as gt,as as ht,ac as yt,u as Pe,T as bt,aE as Ct,aF as ye,X as Le,P as pt,aG as St,aH as be,R as _t,S as kt}from"./index-29587798.js";const Te=["top","bottom"],xt=["start","end","left","right"];function wt(e,t){let[a,n]=e.split(" ");return n||(n=X(Te,a)?"start":X(xt,a)?"top":"center"),{side:Ce(a,t),align:Ce(n,t)}}function Ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function cn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function dn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function vn(e){return{side:e.align,align:e.side}}function fn(e){return X(Te,e.side)?"y":"x"}const M=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function $(e){const t=Y("useRender");t.render=e}function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=N(),n=N();if(we){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(t==="content"?n.value=s[0].contentRect:n.value=s[0].target.getBoundingClientRect())});q(()=>{i.disconnect()}),K(a,(s,l)=>{l&&(i.unobserve(me(l)),n.value=void 0),s&&i.observe(me(s))},{flush:"post"})}return{resizeRef:a,contentRect:et(n)}}const mn=(e,t)=>{const a=e.__vccOpts||e;for(const[n,i]of t)a[n]=i;return a};function ie(e){return Be(()=>{const t=[],a={};if(e.value.background)if(ge(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text){const n=tt(a.backgroundColor);a.color=n,a.caretColor=n}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ge(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function j(e,t){const a=u(()=>({text:A(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{textColorClasses:n,textColorStyles:i}}function pe(e,t){const a=u(()=>({background:A(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const $e=g({border:[Boolean,Number,String]},"border");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:u(()=>{const n=A(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}const Ne=g({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ze(e){return{elevationClasses:u(()=>{const a=A(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const le=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:u(()=>{const n=A(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const H=g({tag:{type:String,default:"div"}},"tag"),It=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Z=P(!1)({name:"VDefaultsProvider",props:It(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:c}=nt(e);return Ie(n,{reset:s,root:l,scoped:c,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}}),Vt=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Et(e){return{dimensionStyles:u(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}const Pt=[null,"default","comfortable","compact"],Oe=g({density:{type:String,default:"default",validator:e=>Pt.includes(e)}},"density");function Ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const Lt=["elevated","flat","tonal","outlined","text","plain"];function Tt(e,t){return v(at,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const De=g({color:String,variant:{type:String,default:"elevated",validator:e=>Lt.includes(e)}},"variant");function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const a=u(()=>{const{variant:s}=he(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=ie(u(()=>{const{variant:s,color:l}=he(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Ge=g({divided:Boolean,...$e(),...M(),...Oe(),...Ne(),...le(),...H(),...D(),...De()},"VBtnGroup"),Se=P()({name:"VBtnGroup",props:Ge(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=G(e),{densityClasses:i}=Ae(e),{borderClasses:s}=Re(e),{elevationClasses:l}=ze(e),{roundedClasses:c}=oe(e);Ie({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),$(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,c.value,e.class],style:e.style},a))}}),Rt=g({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Nt=g({value:null,disabled:Boolean,selectedClass:String},"group-item");function zt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=st();Ve(Symbol.for(`${t.description}:id`),i);const s=it(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=V(e,"value"),c=u(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:c},n),q(()=>{s.unregister(i)});const o=u(()=>s.isSelected(i)),y=u(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return K(o,b=>{n.emit("group:selected",{value:b})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:b=>s.select(i,b),selectedClass:y,value:l,disabled:c,group:s}}function Ot(e,t){let a=!1;const n=lt([]),i=Ee(e,"modelValue",[],r=>r==null?[]:Me(n,ut(r)),r=>{const d=Dt(n,r);return e.multiple?d:d[0]}),s=Y("useGroup");function l(r,d){const C=r,m=Symbol.for(`${t.description}:id`),S=ct(m,s==null?void 0:s.vnode).indexOf(d);S>-1?n.splice(S,0,C):n.push(C)}function c(r){if(a)return;o();const d=n.findIndex(C=>C.id===r);n.splice(d,1)}function o(){const r=n.find(d=>!d.disabled);r&&e.mandatory==="force"&&!i.value.length&&(i.value=[r.id])}ot(()=>{o()}),q(()=>{a=!0});function y(r,d){const C=n.find(m=>m.id===r);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const m=i.value.slice(),x=m.findIndex(f=>f===r),S=~x;if(d=d??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;x<0&&d?m.push(r):x>=0&&!d&&m.splice(x,1),i.value=m}else{const m=i.value.includes(r);if(e.mandatory&&m)return;i.value=d??!m?[r]:[]}}function b(r){if(e.multiple,i.value.length){const d=i.value[0],C=n.findIndex(S=>S.id===d);let m=(C+r)%n.length,x=n[m];for(;x.disabled&&m!==C;)m=(m+r)%n.length,x=n[m];if(x.disabled)return;i.value=[n[m].id]}else{const d=n.find(C=>!C.disabled);d&&(i.value=[d.id])}}const _={register:l,unregister:c,selected:i,select:y,disabled:V(e,"disabled"),prev:()=>b(n.length-1),next:()=>b(1),isSelected:r=>i.value.includes(r),selectedClass:u(()=>e.selectedClass),items:u(()=>n),getItemIndex:r=>At(n,r)};return Ve(t,_),_}function At(e,t){const a=Me(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Me(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>rt(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Dt(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const He=Symbol.for("vuetify:v-btn-toggle"),Gt=g({...Ge(),...Rt()},"VBtnToggle");P()({name:"VBtnToggle",props:Gt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:c}=Ot(e,He);return $(()=>{const[o]=Se.filterProps(e);return v(Se,dt({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var y;return[(y=a.default)==null?void 0:y.call(a,{isSelected:n,next:i,prev:s,select:l,selected:c})]}})}),{next:i,prev:s,select:l}}});const Mt=["x-small","small","default","large","x-large"],re=g({size:{type:[String,Number],default:"default"}},"size");function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return Be(()=>{let a,n;return X(Mt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:h(e.size),height:h(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Ht=g({color:String,start:Boolean,end:Boolean,icon:ne,...M(),...re(),...H({tag:"i"}),...D()},"VIcon"),ee=P()({name:"VIcon",props:Ht(),setup(e,t){let{attrs:a,slots:n}=t;const i=N(),{themeClasses:s}=G(e),{iconData:l}=vt(u(()=>i.value||e.icon)),{sizeClasses:c}=ue(e),{textColorClasses:o,textColorStyles:y}=j(V(e,"color"));return $(()=>{var _,r;const b=(_=n.default)==null?void 0:_.call(n);return b&&(i.value=(r=ft(b).filter(d=>d.type===mt&&d.children&&typeof d.children=="string")[0])==null?void 0:r.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,c.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},y.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[b]})}),{}}});function Fe(e,t){const a=N(),n=gt(!1);if(ht){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);q(()=>{i.disconnect()}),K(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Ft=g({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...M(),...re(),...H({tag:"div"}),...D()},"VProgressCircular"),Wt=P()({name:"VProgressCircular",props:Ft(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=N(),{themeClasses:l}=G(e),{sizeClasses:c,sizeStyles:o}=ue(e),{textColorClasses:y,textColorStyles:b}=j(V(e,"color")),{textColorClasses:_,textColorStyles:r}=j(V(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=Fe(),{resizeRef:m,contentRect:x}=Bt(),S=u(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=u(()=>Number(e.width)),p=u(()=>o.value?Number(e.size):x.value?x.value.width:Math.max(f.value,32)),I=u(()=>n/(1-f.value/p.value)*2),B=u(()=>f.value/p.value*I.value),R=u(()=>h((100-S.value)/100*i));return yt(()=>{d.value=s.value,m.value=s.value}),$(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,y.value,e.class],style:[o.value,b.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[v("circle",{class:["v-progress-circular__underlay",_.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":R.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}});const _e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},We=g({location:String},"location");function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Pe();return{locationStyles:u(()=>{if(!e.location)return{};const{side:s,align:l}=wt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function c(y){return a?a(y):0}const o={};return s!=="center"&&(t?o[_e[s]]=`calc(100% - ${c(s)}px)`:o[s]=0),l!=="center"?t?o[_e[l]]=`calc(100% - ${c(l)}px)`:o[l]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const Xt=g({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...M(),...We({location:"top"}),...le(),...H(),...D()},"VProgressLinear"),jt=P()({name:"VProgressLinear",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ee(e,"modelValue"),{isRtl:i,rtlClasses:s}=Pe(),{themeClasses:l}=G(e),{locationStyles:c}=Xe(e),{textColorClasses:o,textColorStyles:y}=j(e,"color"),{backgroundColorClasses:b,backgroundColorStyles:_}=pe(u(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=pe(e,"color"),{roundedClasses:C}=oe(e),{intersectionRef:m,isIntersecting:x}=Fe(),S=u(()=>parseInt(e.max,10)),f=u(()=>parseInt(e.height,10)),p=u(()=>parseFloat(e.bufferValue)/S.value*100),I=u(()=>parseFloat(n.value)/S.value*100),B=u(()=>i.value!==e.reverse),R=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=u(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function J(k){if(!m.value)return;const{left:L,right:Q,width:T}=m.value.getBoundingClientRect(),W=B.value?T-k.clientX+(Q-T):k.clientX-L;n.value=Math.round(W/T*S.value)}return $(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(f.value):0,"--v-progress-linear-height":h(f.value),...c.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&J},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...y.value,[B.value?"left":"right"]:h(-f.value),borderTop:`${h(f.value/2)} dotted`,opacity:F.value,top:`calc(50% - ${h(f.value/4)})`,width:h(100-p.value,"%"),"--v-progress-linear-stream-to":h(f.value*(B.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",b.value],style:[_.value,{opacity:F.value,width:h(e.stream?p.value:100,"%")}]},null),v(bt,{name:R.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>v("div",{key:k,class:["v-progress-linear__indeterminate",k,r.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",r.value],style:[d.value,{width:h(I.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:I.value,buffer:p.value})])]})),{}}}),Ut=g({loading:[Boolean,String]},"loader");function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function gn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(jt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const qt=["static","relative","fixed","absolute","sticky"],Kt=g({position:{type:String,validator:e=>qt.includes(e)}},"position");function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}function hn(){var e,t;return(t=(e=Y("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Qt(e,t){const a=Ct("RouterLink"),n=u(()=>!!(e.href||e.to)),i=u(()=>(n==null?void 0:n.value)||ye(t,"click")||ye(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:V(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&u(()=>{var l,c;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(c=s.isActive)==null?void 0:c.value}),href:u(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Zt=g({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let te=!1;function yn(e,t){let a=!1,n,i;we&&(Le(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,c,o)=>{te?a?t(o):o():setTimeout(()=>a?t(o):o()),te=!0}),i=e==null?void 0:e.afterEach(()=>{te=!1})}),pt(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var c;(c=l.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function en(e,t){K(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Le(()=>{t(!0)})},{immediate:!0})}const ae=Symbol("rippleStop"),tn=80;function ke(e,t){e.style.transform=t,e.style.webkitTransform=t}function se(e){return e.constructor.name==="TouchEvent"}function je(e){return e.constructor.name==="KeyboardEvent"}const nn=function(e,t){var _;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!je(e)){const r=t.getBoundingClientRect(),d=se(e)?e.touches[e.touches.length-1]:e;n=d.clientX-r.left,i=d.clientY-r.top}let s=0,l=.3;(_=t._ripple)!=null&&_.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,y=a.center?c:`${n-s}px`,b=a.center?o:`${i-s}px`;return{radius:s,scale:l,x:y,y:b,centerX:c,centerY:o}},U={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:c,y:o,centerX:y,centerY:b}=nn(e,t,a),_=`${s*2}px`;i.className="v-ripple__animation",i.style.width=_,i.style.height=_,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),ke(i,`translate(${c}, ${o}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),ke(i,`translate(${y}, ${b}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Ue(e){return typeof e>"u"||!!e}function z(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ae])){if(e[ae]=!0,se(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||je(e),a._ripple.class&&(t.class=a._ripple.class),se(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{U.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},tn)}else U.show(e,a,t)}}function xe(e){e[ae]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function Ye(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function qe(e){!O&&(e.keyCode===be.enter||e.keyCode===be.space)&&(O=!0,z(e))}function Ke(e){O=!1,w(e)}function Je(e){O&&(O=!1,w(e))}function Qe(e,t,a){const{value:n,modifiers:i}=t,s=Ue(n);if(s||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,St(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",xe,{passive:!0}),e.addEventListener("mousedown",xe);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Ye,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",z),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",qe),e.addEventListener("keyup",Ke),e.addEventListener("blur",Je),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&Ze(e)}function Ze(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Ye),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",qe),e.removeEventListener("keyup",Ke),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Je)}function an(e,t){Qe(e,t,!1)}function sn(e){delete e._ripple,Ze(e)}function ln(e,t){if(t.value===t.oldValue)return;const a=Ue(t.oldValue);Qe(e,t,a)}const on={mounted:an,unmounted:sn,updated:ln},rn=g({active:{type:Boolean,default:void 0},symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...$e(),...M(),...Oe(),...Vt(),...Ne(),...Nt(),...Ut(),...We(),...Kt(),...le(),...Zt(),...re(),...H({tag:"button"}),...D(),...De({variant:"elevated"})},"VBtn"),bn=P()({name:"VBtn",directives:{Ripple:on},props:rn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=G(e),{borderClasses:s}=Re(e),{colorClasses:l,colorStyles:c,variantClasses:o}=$t(e),{densityClasses:y}=Ae(e),{dimensionStyles:b}=Et(e),{elevationClasses:_}=ze(e),{loaderClasses:r}=Yt(e),{locationStyles:d}=Xe(e),{positionClasses:C}=Jt(e),{roundedClasses:m}=oe(e),{sizeClasses:x,sizeStyles:S}=ue(e),f=zt(e,e.symbol,!1),p=Qt(e,a),I=u(()=>{var k;return e.active!==void 0?e.active:p.isLink.value?(k=p.isActive)==null?void 0:k.value:f==null?void 0:f.isSelected.value}),B=u(()=>(f==null?void 0:f.disabled.value)||e.disabled),R=u(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=u(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(k){var L;B.value||p.isLink.value&&(k.metaKey||k.ctrlKey||k.shiftKey||k.button!==0||a.target==="_blank")||((L=p.navigate)==null||L.call(p,k),f==null||f.toggle())}return en(p,f==null?void 0:f.select),$(()=>{var ce,de;const k=p.isLink.value?"a":e.tag,L=!!(e.prependIcon||n.prepend),Q=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),W=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((ce=p.isActive)==null?void 0:ce.value))||!f||((de=p.isActive)==null?void 0:de.value);return _t(v(k,{type:k==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,W?l.value:void 0,y.value,_.value,r.value,C.value,m.value,x.value,o.value,e.class],style:[W?c.value:void 0,b.value,d.value,S.value,e.style],disabled:B.value||void 0,href:p.href.value,onClick:J,value:F.value},{default:()=>{var ve;return[Tt(!0,"v-btn"),!e.icon&&L&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(ee,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(ee,{key:"content-icon",icon:e.icon},null):v(Z,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var fe;return[((fe=n.default)==null?void 0:fe.call(n))??e.text]}})]),!e.icon&&Q&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(ee,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ve=n.loader)==null?void 0:ve.call(n))??v(Wt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[kt("ripple"),!B.value&&e.ripple,null]])}),{}}});export{Qt as A,Tt as B,Vt as C,Et as D,wt as E,cn as F,dn as G,vn as H,fn as I,hn as J,yn as K,Ut as L,We as M,Kt as N,Yt as O,Xe as P,Jt as Q,on as R,gn as S,Z as V,mn as _,M as a,Ne as b,le as c,H as d,Re as e,ze as f,oe as g,Bt as h,$ as i,rn as j,bn as k,ee as l,$e as m,Oe as n,Ae as o,j as p,Rt as q,De as r,Ot as s,Nt as t,pe as u,Zt as v,re as w,$t as x,ue as y,zt as z};
