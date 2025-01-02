import{d as ee,p as te}from"./LggTt9xo.js";import{d as P,aN as ae,ay as ne,D as A,r as K,aO as le,aP as ie,o as se,B as re,ar as M,aQ as oe,aR as ce,aS as ue,aT as de,aU as ge,F as O,aV as G,S as D,U,H as fe,I as me,c as l,L as V,w as k,e as o,M as f,n as i,a9 as t,h as u,f as w,N as C,ac as Q,g as _,t as h,X as E,i as v,K as T,E as N,R,x as Y,$ as pe,aa as q,al as ye,ab as J,aW as he,af as xe,ag as be,ah as ve,ai as ke,aj as $e,q as we}from"./B3s6vNw4.js";import{_ as Se}from"./0PPkPpg3.js";import{_ as Ue}from"./1T65TZIK.js";import{_ as je}from"./BeusiWDV.js";let Ce=Symbol("GroupContext"),Ae=P({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:c,attrs:m,slots:s,expose:a}){var r;let n=(r=e.id)!=null?r:`headlessui-switch-${ae()}`,p=ne(Ce,null),[g,x]=ee(A(()=>e.modelValue),d=>c("update:modelValue",d),A(()=>e.defaultChecked));function b(){x(!g.value)}let S=K(null),$=p===null?S:p.switchRef,I=le(A(()=>({as:e.as,type:m.type})),$);a({el:$,$el:$});function B(d){d.preventDefault(),b()}function L(d){d.key===G.Space?(d.preventDefault(),b()):d.key===G.Enter&&te(d.currentTarget)}function y(d){d.preventDefault()}let j=A(()=>{var d,z;return(z=(d=ie($))==null?void 0:d.closest)==null?void 0:z.call(d,"form")});return se(()=>{re([j],()=>{if(!j.value||e.defaultChecked===void 0)return;function d(){x(e.defaultChecked)}return j.value.addEventListener("reset",d),()=>{var z;(z=j.value)==null||z.removeEventListener("reset",d)}},{immediate:!0})}),()=>{let{name:d,value:z,form:W,tabIndex:F,...H}=e,X={checked:g.value},Z={id:n,ref:$,role:"switch",type:I.value,tabIndex:F===-1?0:F,"aria-checked":g.value,"aria-labelledby":p==null?void 0:p.labelledby.value,"aria-describedby":p==null?void 0:p.describedby.value,onClick:B,onKeyup:L,onKeypress:y};return M(O,[d!=null&&g.value!=null?M(oe,ce({features:ue.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:g.value,form:W,disabled:H.disabled,name:d,value:z})):null,de({ourProps:Z,theirProps:{...m,...ge(H,["modelValue","defaultChecked"])},slot:X,attrs:m,slots:s,name:"Switch"})])}}});const Oe=P({inheritAttrs:!1,__name:"PricingToggle",props:{modelValue:{type:Boolean,default:!1},left:{type:String,default:"Monthly"},right:{type:String,default:"Yearly"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:c}){const m=e,s=c,a={wrapper:"ring-1 ring-gray-300 dark:ring-gray-700 flex items-center relative h-8 w-auto flex-shrink-0 cursor-pointer rounded-full p-1 w-full focus:outline-none",marker:"w-1/2 text-white dark:text-gray-900 pointer-events-none inline-block h-6 transform rounded-full bg-gray-900 dark:bg-white shadow transition duration-200 ease-in-out z-0 relative",active:"text-white dark:text-gray-900",inactive:"text-gray-500 dark:text-gray-400",base:"absolute inset-y-0 w-1/2 flex items-center justify-center pointer-events-none z-[1] transition-colors duration-200 select-none text-xs font-semibold flex-shrink-0",left:"left-0",right:"right-0"},r=A({get(){return m.modelValue},set(g){s("update:modelValue",g)}}),{ui:n,attrs:p}=D("pricing.toggle",U(m,"ui"),a,U(m,"class"),!0);return fe(()=>me()),(g,x)=>(l(),V(t(Ae),C({modelValue:t(r),"onUpdate:modelValue":x[0]||(x[0]=b=>Q(r)?r.value=b:null),"aria-label":"pricing toggle",class:t(n).wrapper},t(p)),{default:k(()=>[e.left||g.$slots.left?(l(),o("span",{key:0,"aria-hidden":"true",class:i([t(n).base,t(n).left,t(r)?t(n).inactive:t(n).active])},[f(g.$slots,"left",{},()=>[_(h(e.left),1)])],2)):u("",!0),e.right||g.$slots.right?(l(),o("span",{key:1,"aria-hidden":"true",class:i([t(n).base,t(n).right,t(r)?t(n).active:t(n).inactive])},[f(g.$slots,"right",{},()=>[_(h(e.right),1)])],2)):u("",!0),w("span",{"aria-hidden":"true",class:i([t(r)?"translate-x-full":"translate-x-0",t(n).marker])},null,2)]),_:3},16,["modelValue","class"]))}}),Ve=Object.assign(Oe,{__name:"UPricingToggle"}),Pe={key:2},Be=P({inheritAttrs:!1,__name:"PageHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},align:{type:String,default:"left"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,m=A(()=>{const r=E("gap-8 sm:gap-y-16",c.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),n=E("",c.align==="center"&&"text-center flex flex-col items-center",c.align==="right"&&"lg:order-last"),p=E("mt-8 flex flex-wrap gap-x-3 gap-y-1.5",c.align==="center"&&"justify-center");return{wrapper:"py-8 sm:py-16",container:r,base:n,icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:p}}),{ui:s,attrs:a}=D("page.hero",U(c,"ui"),m,U(c,"class"),!0);return(r,n)=>{var x,b;const p=N,g=R;return l(),o("div",C({class:t(s).wrapper},t(a)),[w("div",{class:i(t(s).container)},[e.icon||r.$slots.icon||e.title||r.$slots.title||e.description||r.$slots.description||(x=e.links)!=null&&x.length||r.$slots.links?(l(),o("div",{key:0,class:i(t(s).base)},[e.icon||r.$slots.icon?(l(),o("div",{key:0,class:i(t(s).icon.wrapper)},[f(r.$slots,"icon",{},()=>[v(p,{name:e.icon,class:i(t(s).icon.base)},null,8,["name","class"])])],2)):u("",!0),w("h1",{class:i(t(s).title)},[f(r.$slots,"title",{},()=>[_(h(e.title),1)])],2),e.description||r.$slots.description?(l(),o("div",{key:1,class:i(t(s).description)},[f(r.$slots,"description",{},()=>[_(h(e.description),1)])],2)):u("",!0),(b=e.links)!=null&&b.length||r.$slots.links?(l(),o("div",{key:2,class:i(t(s).links)},[f(r.$slots,"links",{},()=>[(l(!0),o(O,null,T(e.links,(S,$)=>(l(),V(g,C({key:$,ref_for:!0},S,{onClick:S.click}),null,16,["onClick"]))),128))])],2)):u("",!0)],2)):u("",!0),r.$slots.default?f(r.$slots,"default",{key:1}):e.align==="right"?(l(),o("div",Pe)):u("",!0)],2)],16)}}}),ze=Object.assign(Be,{__name:"UPageHero"}),Ie={key:0,class:"flex-1"},Le=P({inheritAttrs:!1,__name:"PricingCard",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},orientation:{type:String,default:"vertical"},align:{type:String,default:"bottom"},highlight:{type:Boolean,default:!1},scale:{type:Boolean,default:!1},features:{type:Array,default:()=>[]},badge:{type:Object,default:void 0},button:{type:Object,default:void 0},price:{type:String,default:void 0},discount:{type:String,default:void 0},cycle:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,m=Y(),s=A(()=>{const n=E("flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col",c.orientation==="horizontal"?"lg:grid lg:grid-cols-10":""),p=c.orientation==="horizontal"?"lg:col-span-7":"",g=c.orientation==="horizontal"?"flex flex-col lg:items-center justify-center gap-y-6 lg:col-span-3 border-t lg:border-l lg:border-t-0 border-gray-200 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8 xl:pl-10":"";return{wrapper:"relative flex flex-col self-stretch w-full",highlight:"ring-2 ring-primary dark:ring-primary",scale:"lg:scale-[1.1] lg:z-10",rounded:"rounded-xl",header:{padding:"p-6 lg:px-8 xl:px-10"},body:{base:n,padding:"p-6 lg:p-8 xl:p-10"},footer:{padding:"p-6 lg:px-8 xl:px-10"},inner:"flex items-center gap-3",title:"text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate",description:"text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2",amount:{base:"flex flex-row items-baseline gap-x-1",discount:"text-gray-500 dark:text-gray-400 line-through text-xl sm:text-2xl font-medium",price:"text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold",cycle:"text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate"},features:{vertical:"space-y-3 text-sm",horizontal:"grid lg:grid-cols-2 text-sm gap-3",item:{base:"flex items-center gap-x-3 min-w-0",label:"text-gray-600 dark:text-gray-400 truncate",icon:{base:"w-5 h-5 flex-shrink-0 text-primary",name:m.ui.icons.check}}},divider:"my-6 lg:my-8",left:p,right:g}}),{ui:a,attrs:r}=D("pricing.card",U(c,"ui"),s,U(c,"class"),!0);return(n,p)=>{const g=ye,x=Se,b=N,S=R,$=Ue;return l(),V($,C({class:[t(a).wrapper,e.highlight&&t(a).highlight,e.scale&&t(a).scale]},t(r),{ui:t(a)}),pe({default:k(()=>{var I,B,L;return[w("div",{class:i(t(a).left)},[w("div",{class:i(t(a).inner)},[e.title||n.$slots.title?(l(),o("p",{key:0,class:i(t(a).title)},[f(n.$slots,"title",{},()=>[_(h(e.title),1)])],2)):u("",!0),e.badge?(l(),V(g,q(C({key:1},{variant:"subtle",...e.badge})),null,16)):u("",!0)],2),e.description||n.$slots.description?(l(),o("div",{key:0,class:i(t(a).description)},[f(n.$slots,"description",{},()=>[_(h(e.description),1)])],2)):u("",!0),e.orientation==="horizontal"?(l(),o(O,{key:1},[v(x,{class:i(t(a).divider)},null,8,["class"]),(I=e.features)!=null&&I.length||n.$slots.features?(l(),o("div",Ie,[f(n.$slots,"features",{},()=>{var y;return[(y=e.features)!=null&&y.length?(l(),o("ul",{key:0,class:i(t(a).features.horizontal)},[(l(!0),o(O,null,T(e.features,(j,d)=>(l(),o("li",{key:d,class:i(t(a).features.item.base)},[v(b,{name:t(a).features.item.icon.name,class:i(t(a).features.item.icon.base)},null,8,["name","class"]),w("span",{class:i(t(a).features.item.label)},h(j),3)],2))),128))],2)):u("",!0)]})])):u("",!0)],64)):u("",!0)],2),e.orientation==="vertical"?(l(),o(O,{key:0},[w("div",{class:i(t(a).amount.base)},[f(n.$slots,"amount",{},()=>[e.discount&&e.price?(l(),o("p",{key:0,class:i(t(a).amount.discount)},h(e.price),3)):u("",!0),w("p",{class:i(t(a).amount.price)},h(e.discount||e.price||" "),3),f(n.$slots,"cycle",{},()=>[e.cycle?(l(),o("p",{key:0,class:i(t(a).amount.cycle)},h(e.cycle),3)):u("",!0)])])],2),(B=e.features)!=null&&B.length||n.$slots.features?(l(),o("div",{key:0,class:i([e.align==="top"&&"order-last","flex-1"])},[f(n.$slots,"features",{},()=>{var y;return[(y=e.features)!=null&&y.length?(l(),o("ul",{key:0,class:i(t(a).features.vertical)},[(l(!0),o(O,null,T(e.features,(j,d)=>(l(),o("li",{key:d,class:i(t(a).features.item.base)},[v(b,{name:t(a).features.item.icon.name,class:i(t(a).features.item.icon.base)},null,8,["name","class"]),w("span",{class:i(t(a).features.item.label)},h(j),3)],2))),128))],2)):u("",!0)]})],2)):u("",!0)],64)):u("",!0),w("div",{class:i(t(a).right)},[e.orientation==="horizontal"?(l(),o("div",{key:0,class:i([t(a).amount.base,e.align==="top"&&"order-last"])},[f(n.$slots,"amount",{},()=>[e.discount&&e.price?(l(),o("p",{key:0,class:i(t(a).amount.discount)},h(e.price),3)):u("",!0),w("p",{class:i(t(a).amount.price)},h(e.discount||e.price||" "),3),f(n.$slots,"cycle",{},()=>[e.cycle?(l(),o("p",{key:0,class:i(t(a).amount.cycle)},h(e.cycle),3)):u("",!0)])])],2)):u("",!0),e.button?(l(),V(S,C({key:1},{block:!0,size:"lg",...e.button},{onClick:(L=e.button)==null?void 0:L.click}),null,16,["onClick"])):u("",!0),e.orientation==="horizontal"?f(n.$slots,"bottom",{key:2}):u("",!0)],2),e.orientation==="vertical"?f(n.$slots,"bottom",{key:1}):u("",!0)]}),_:2},[n.$slots.header?{name:"header",fn:k(()=>[f(n.$slots,"header")]),key:"0"}:void 0,n.$slots.footer?{name:"footer",fn:k(()=>[f(n.$slots,"footer")]),key:"1"}:void 0]),1040,["class","ui"])}}}),_e=Object.assign(Le,{__name:"UPricingCard"}),De=P({inheritAttrs:!1,__name:"PricingGrid",props:{compact:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,m={wrapper:"flex flex-col lg:grid lg:grid-cols-3 w-full justify-center items-center gap-8"},{ui:s,attrs:a}=D("pricing.grid",U(c,"ui"),m,U(c,"class"),!0);return(r,n)=>(l(),o("div",C({class:[t(s).wrapper,e.compact&&"gap-x-0"]},t(a)),[f(r.$slots,"default")],16))}}),Te=Object.assign(De,{__name:"UPricingGrid"}),Ee=P({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,m=A(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[c.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:s,attrs:a}=D("landing.logos",U(c,"ui"),m,U(c,"class"),!0);return(r,n)=>(l(),o("div",C({class:t(s).wrapper},t(a)),[e.title?(l(),o("h2",{key:0,class:i(t(s).title)},h(e.title),3)):u("",!0),w("div",{class:i(t(s).images)},[f(r.$slots,"default")],2)],16))}}),Ne=Object.assign(Ee,{__name:"ULandingLogos"}),Re=P({inheritAttrs:!1,__name:"LandingFAQ",props:{items:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=Y(),m=A(()=>({wrapper:"divide-y divide-gray-200 dark:divide-gray-800 -mt-6",container:"divide-y divide-gray-200 dark:divide-gray-800",item:{size:"text-base",padding:"py-6"},button:{base:"text-left text-lg py-6 w-full",label:"text-gray-900 dark:text-white",trailingIcon:{name:c.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"",inactive:"-rotate-90"}}})),s=e,{ui:a,attrs:r}=D("landing.faq",U(s,"ui"),m,U(s,"class"),!0);return(n,p)=>{const g=N,x=R,b=he;return l(),V(b,C({class:t(a).wrapper,items:e.items,multiple:e.multiple},t(r),{ui:{item:t(a).item,container:t(a).container}}),{default:k(({item:S,open:$})=>[v(x,{color:"gray",variant:"link",ui:{rounded:"rounded-none",color:{gray:{link:"hover:no-underline"}}},padded:!1,class:i(t(a).button.base)},{trailing:k(()=>[v(g,{name:t(a).button.trailingIcon.name,class:i([t(a).button.trailingIcon.base,$?t(a).button.trailingIcon.active:t(a).button.trailingIcon.inactive])},null,8,["name","class"])]),default:k(()=>[w("span",{class:i(t(a).button.label)},h(S.label),3)]),_:2},1032,["class"])]),item:k(S=>[f(n.$slots,"item",q(J(S)))]),_:3},16,["class","items","multiple","ui"])}}}),qe=Object.assign(Re,{__name:"ULandingFAQ"}),Fe={key:0},Ye=P({__name:"pricing",async setup(e){let c,m;const{data:s}=([c,m]=xe(()=>ke("pricing",()=>we("/pricing").findOne())),c=await c,m(),c);if(!s.value)throw be({statusCode:404,statusMessage:"Page not found",fatal:!0});ve({title:s.value.title,ogTitle:s.value.title,description:s.value.description,ogDescription:s.value.description});const a=K(!1);return(r,n)=>{const p=Ve,g=ze,x=_e,b=Te,S=$e,$=N,I=Ne,B=je,L=qe;return t(s)?(l(),o("div",Fe,[v(g,q(J(t(s).hero)),{links:k(()=>[v(p,{modelValue:t(a),"onUpdate:modelValue":n[0]||(n[0]=y=>Q(a)?a.value=y:null),class:"w-48"},null,8,["modelValue"])]),_:1},16),v(S,null,{default:k(()=>[v(b,null,{default:k(()=>[(l(!0),o(O,null,T(t(s).plans,(y,j)=>(l(),V(x,C({key:j,ref_for:!0},y,{price:t(a)?y.price.year:y.price.month,cycle:t(a)?"/year":"/month"}),null,16,["price","cycle"]))),128))]),_:1})]),_:1}),v(B,null,{default:k(()=>[v(I,null,{default:k(()=>[(l(!0),o(O,null,T(t(s).logos.icons,y=>(l(),V($,{key:y,name:y,class:"w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"},null,8,["name"]))),128))]),_:1})]),_:1}),v(B,{title:t(s).faq.title,description:t(s).faq.description},{default:k(()=>[v(L,{items:t(s).faq.items,multiple:"","default-open":"",class:"max-w-4xl mx-auto"},null,8,["items"])]),_:1},8,["title","description"])])):u("",!0)}}});export{Ye as default};
