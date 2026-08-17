(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22360,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let a=e.r(81258),i=e.r(44066),o=e.r(79924),n=i._(e.r(58882)),l=a._(e.r(96761)),s=a._(e.r(88585)),u=e.r(3191),d=e.r(18153),c=e.r(72873),f=e.r(88043),m=a._(e.r(30880)),h=e.r(35620),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,a,i,o,n){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function b(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let _="u"<typeof window?n.useEffect:n.useLayoutEffect,v=(0,n.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:i,decoding:l,className:s,style:u,fetchPriority:d,placeholder:c,loading:f,unoptimized:m,fill:g,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,sizesInput:S,onLoad:P,onError:E,...R},O)=>{let j=(0,n.useRef)(!1),C=(0,n.useRef)(null);_(()=>{let{current:e}=j,{current:t}=C;e||null===t||(E&&(t.src=t.src),t.complete&&p(t,c,v,x,y,m,S),j.current=!0)},[e,c,v,x,E,m,S]);let A=(0,h.useMergedRef)(O,C);return(0,o.jsx)("img",{...R,...b(d),loading:f,width:i,height:a,decoding:l,"data-nimg":g?"fill":"1",className:s,style:u,sizes:r,srcSet:t,src:e,ref:A,onLoad:e=>{p(e.currentTarget,c,v,x,y,m,S)},onError:e=>{w(!0),"empty"!==c&&y(!0),E&&E(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(f.RouterContext),a=(0,n.useContext)(c.ImageConfigContext),i=(0,n.useMemo)(()=>{let e=g||a||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:l,onLoadingComplete:s}=e,h=(0,n.useRef)(l);(0,n.useEffect)(()=>{h.current=l},[l]);let p=(0,n.useRef)(s);(0,n.useEffect)(()=>{p.current=s},[s]);let[b,_]=(0,n.useState)(!1),[y,w]=(0,n.useState)(!1),{props:S,meta:P}=(0,u.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:b,showAltText:y});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:p,setBlurComplete:_,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.preload?(0,o.jsx)(x,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},37303,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},3191,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}});let a=e.r(77056),i=e.r(51152),o=e.r(18153),n=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:c=!1,loading:f,className:m,quality:h,width:g,height:p,fill:b=!1,style:_,overrideSrc:v,onLoad:x,onLoadingComplete:y,placeholder:w="empty",blurDataURL:S,fetchPriority:P,decoding:E="async",layout:R,objectFit:O,objectPosition:j,lazyBoundary:C,lazyRoot:A,...T},I){var L;let N,M,z,{imgConf:U,showAltText:D,blurComplete:F,defaultLoader:k}=I,W=U||o.imageConfigDefault;if("allSizes"in W)N=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),r=W.qualities?.sort((e,t)=>e-t);N={...W,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===k)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let H=T.loader||k;delete T.loader,delete T.srcSet;let $="__next_img_default"in H;if($){if("custom"===N.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=H;H=t=>{let{config:r,...a}=t;return e(a)}}if(R){"fill"===R&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(_={..._,...e});let r={responsive:"100vw",fill:"100vw"}[R];r&&!t&&(t=r)}let B="",G=s(g),X=s(p);if((L=e)&&"object"==typeof L&&(l(L)||void 0!==L.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=t.blurWidth,z=t.blurHeight,S=S||t.blurDataURL,B=t.src,!b)if(G||X){if(G&&!X){let e=G/t.width;X=Math.round(t.height*e)}else if(!G&&X){let e=X/t.height;G=Math.round(t.width*e)}}else G=t.width,X=t.height}let q=!d&&!c&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:B)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,q=!1),N.unoptimized&&(r=!0),$&&!N.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let Y=s(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:j}:{},D?{}:{color:"transparent"},_),K=F||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:G,heightInt:X,blurWidth:M,blurHeight:z,blurDataURL:S||"",objectFit:V.objectFit})}")`:`url("${w}")`,J=n.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,Q=K?{backgroundSize:J,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:o,sizes:n,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,a.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,a.getAssetToken)())e=void 0;else if(e){let r=t.indexOf("?");if(-1!==r){let a=new URLSearchParams(t.slice(r+1));a.get("dpl")||(a.append("dpl",e),t=t.slice(0,r)+"?"+a.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:u}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(a);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,n),d=s.length-1;return{sizes:n||"w"!==u?n:"100vw",srcSet:s.map((r,a)=>`${l({config:e,src:t,quality:o,width:r})} ${"w"===u?r:a+1}${u}`).join(", "),src:l({config:e,src:t,quality:o,width:s[d]})}}({config:N,src:e,unoptimized:r,width:G,quality:Y,sizes:t,loader:H}),ee=q?"lazy":f;return{props:{...T,loading:ee,fetchPriority:P,width:G,height:X,decoding:E,className:m,style:{...V,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:v||Z.src},meta:{unoptimized:r,preload:c||d,placeholder:w,fill:b}}}},88585,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},defaultHead:function(){return c}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let o=e.r(81258),n=e.r(44066),l=e.r(79924),s=n._(e.r(58882)),u=o._(e.r(47412)),d=e.r(9579);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let m=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,a,i;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let o=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=m.length;t<r;t++){let r=m[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?o=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!n)&&a.has(t)?o=!1:(a.add(t),i[r]=a)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,s.useContext)(d.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},51152,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:n}){let l=r?40*r:e,s=i?40*i:t,u=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},72873,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let a=e.r(81258)._(e.r(58882)),i=e.r(18153),o=a.default.createContext(i.imageConfigDefault)},88043,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(81258)._(e.r(58882)).default.createContext(null)},18153,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return n}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let o=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},28510,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return d},getImageProps:function(){return u}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let o=e.r(81258),n=e.r(3191),l=e.r(22360),s=o._(e.r(30880));function u(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=l.Image},81281,(e,t,r)=>{t.exports=e.r(28510)},30880,(e,t,r)=>{"use strict";e.i(5831),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let a=e.r(37303),i=e.r(77056);function o({config:e,src:t,width:r,quality:n}){let l=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,i.getAssetToken)())l=void 0;else{let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),a=r.get("dpl");if(a){l=a,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,a.findClosestQuality)(n,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}o.__next_img_default=!0;let n=o},47412,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let a=e.r(58882),i="u"<typeof window,o=i?()=>{}:a.useLayoutEffect,n=i?()=>{}:a.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),l()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},20858,e=>{"use strict";var t=e.i(79924),r=e.i(42156),a=e.i(81281),i=e.i(58882),o=e.i(20133);function n(e){return(0,t.jsxs)(o.Link,{className:"group ease-snap bg-neutral-50 pb-7 transition-colors duration-180 hover:bg-white",href:e.href,children:[(0,t.jsx)("span",{className:"relative block aspect-[3/2] overflow-hidden bg-neutral-100",children:e.image?(0,t.jsx)(a.default,{alt:"",className:"object-cover",fill:!0,sizes:"(min-width: 768px) 33vw, 100vw",src:e.image}):(0,t.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 bg-neutral-200 bg-[repeating-linear-gradient(45deg,transparent,transparent_7px,var(--color-neutral-300)_7px,var(--color-neutral-300)_8px)]"})}),(0,t.jsxs)("span",{className:"mt-4.5 flex items-baseline gap-3.5 px-6 md:px-8",children:[(0,t.jsx)("span",{className:"text-sm text-neutral-700 tabular-nums",children:e.dateLabel}),(0,t.jsx)("span",{className:"text-xs font-medium tracking-wide text-blue-700 uppercase",children:e.categoryLabel})]}),(0,t.jsx)("h2",{className:"mt-2.5 max-w-[30ch] px-6 text-base leading-[1.4] font-semibold tracking-[-0.01em] md:px-8",children:e.title})]},e.slug)}e.s(["default",0,e=>{let a,o,l,s,u,d,c,f,m,h=(0,r.c)(26),{filterLabel:g,filters:p,items:b}=e,[_,v]=(0,i.useState)("all");h[0]!==_||h[1]!==b?(a="all"===_?b:b.filter(e=>e.category===_),h[0]=_,h[1]=b,h[2]=a):a=h[2];let x=a,y=(3-x.length%3)%3;if(h[3]!==g?(o=(0,t.jsx)("legend",{className:"sr-only",children:g}),h[3]=g,h[4]=o):o=h[4],h[5]!==_||h[6]!==p){let e;h[8]!==_?(e=e=>(0,t.jsx)("button",{"aria-pressed":e.id===_,className:`ease-snap cursor-pointer text-sm font-medium transition-colors duration-180 ${e.id===_?"text-neutral-950 shadow-[0_1px_0_currentcolor]":"text-neutral-700 hover:text-neutral-950"}`,onClick:()=>v(e.id),type:"button",children:e.label},e.id),h[8]=_,h[9]=e):e=h[9],l=p.map(e),h[5]=_,h[6]=p,h[7]=l}else l=h[7];return h[10]!==o||h[11]!==l?(s=(0,t.jsxs)("fieldset",{className:"mb-10 flex flex-wrap items-baseline gap-x-7 gap-y-2",children:[o,l]}),h[10]=o,h[11]=l,h[12]=s):s=h[12],h[13]!==x?(u=x.map(n),h[13]=x,h[14]=u):u=h[14],h[15]!==y?(d=y>=1?(0,t.jsx)("div",{"aria-hidden":"true",className:"hidden bg-neutral-50 md:block"}):null,h[15]=y,h[16]=d):d=h[16],h[17]!==y?(c=y>=2?(0,t.jsx)("div",{"aria-hidden":"true",className:"hidden bg-neutral-50 md:block"}):null,h[17]=y,h[18]=c):c=h[18],h[19]!==u||h[20]!==d||h[21]!==c?(f=(0,t.jsxs)("div",{className:"-mx-6 grid gap-px border-y border-neutral-200 bg-neutral-200 md:-mx-8 md:grid-cols-3",children:[u,d,c]}),h[19]=u,h[20]=d,h[21]=c,h[22]=f):f=h[22],h[23]!==s||h[24]!==f?(m=(0,t.jsxs)(t.Fragment,{children:[s,f]}),h[23]=s,h[24]=f,h[25]=m):m=h[25],m}])},10440,e=>{"use strict";var t=e.i(79924),r=e.i(42156),a=e.i(58882);let i=[[20,.09,268],[38,.22,266],[50.1,.28,263.8],[70.7,.165,254.6],[86,.12,205]],o=e=>Math.min(1,Math.max(0,e)),n=([e,t,r])=>{let a=e/100,i=r*Math.PI/180,n=t*Math.cos(i),l=t*Math.sin(i),s=(a+.3963377774*n+.2158037573*l)**3,u=(a-.1055613458*n-.0638541728*l)**3,d=(a-.0894841775*n-1.291485548*l)**3;return[o(4.0767416621*s-3.3077115913*u+.2309699292*d),o(-1.2684380046*s+2.6097574011*u-.3413193965*d),o(-.0041960863*s-.7034186147*u+1.707614701*d)]},l=`#version 300 es
in vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,s=`#version 300 es
precision highp float;

out vec4 outColor;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color0;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform vec3 u_color4;
uniform float u_bands;           // active band count (1..MAX_BANDS)
uniform float u_bandWidth;       // half-width, fraction of canvas height
uniform float u_bandHeight;      // baseline height at uv.x = 0.5
uniform float u_bandHeightRight; // baseline height at uv.x = 1.0
uniform float u_ceiling;         // bands fade out above this height
uniform float u_spread;          // extra separation between bands
uniform float u_density;
uniform float u_bloom;
uniform vec4 u_damp;             // (x, y, radiusX, radiusY) in uv space
uniform float u_dampStrength;

const int MAX_BANDS = 8;
const float SWAY = 2.5;             // vertical swing, multiple of band width
const float TWIST = 6.0;            // wave count across the canvas width
const float SHARPNESS = 14.0;       // cross-section exponent; high = hard edge
const float CORE_FALLOFF = 0.9;
const float STRIATION = 220.0;
const float STRIATION_DEPTH = 0.15;
const float COLOUR_TRAVEL = 0.45;
const float COLOUR_SPAN = 0.75;
const float GRAIN = 0.012;
// Canvas aspect the form was tuned at; see the note on \`along\` in main().
const float REFERENCE_ASPECT = 2.4;

vec3 ramp(float t) {
  float clamped = clamp(t, 0.0, 1.0);
  vec3 colour = mix(u_color0, u_color1, smoothstep(0.0, 0.25, clamped));
  colour = mix(colour, u_color2, smoothstep(0.25, 0.5, clamped));
  colour = mix(colour, u_color3, smoothstep(0.5, 0.75, clamped));
  return mix(colour, u_color4, smoothstep(0.75, 1.0, clamped));
}

/** Triangle wave. A plain fract() would leave a hard seam where it wraps. */
float pingPong(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float grain(vec2 point) {
  return fract(sin(dot(point, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // Everything below is authored in units of canvas HEIGHT: band widths and
  // heights are fractions of it, so they already scale correctly. The x axis
  // does not — normalising it to canvas width would fit a fixed TWIST wave
  // count into whatever width is available, squashing the whole form
  // horizontally on a narrow viewport. Rescaling by the aspect ratio, about
  // the centre, keeps the geometry uniform: a narrow screen shows less of the
  // ribbon rather than a compressed version of all of it.
  float aspect = u_resolution.x / u_resolution.y;
  float along = 0.5 + (uv.x - 0.5) * (aspect / REFERENCE_ASPECT);
  float across = uv.y;

  // Auto-thin always multiplies the caller's band width once the count rises
  // past three, keeping total ink roughly constant so high counts don't
  // become a wall. Identity at three bands or fewer — the hero is unchanged.
  float bandWidth = u_bandWidth
    * mix(1.0, 0.62, clamp((u_bands - 3.0) / 5.0, 0.0, 1.0));

  // Baseline in uv.x (see the coordinate-spaces note above): u_bandHeight at
  // the horizontal centre, u_bandHeightRight at the right edge, the same
  // slope continuing left of centre.
  float base = u_bandHeight
    + (u_bandHeightRight - u_bandHeight) * ((uv.x - 0.5) / 0.5);

  // max() guards a zero radius: 0/0 here is NaN, which would silently blank
  // every band it touches.
  float dampX = (uv.x - u_damp.x) / max(u_damp.z, 1e-3);
  float dampY = (uv.y - u_damp.y) / max(u_damp.w, 1e-3);
  float damp = 1.0 - u_dampStrength * exp(-(dampX * dampX + dampY * dampY));

  vec3 colour = vec3(0.0);
  float coverage = 0.0;

  for (int i = 0; i < MAX_BANDS; i++) {
    float index = float(i);
    if (index >= u_bands) {
      break;
    }
    float phase = index * 1.15;
    float weight = 1.0 - index * (0.72 / u_bands);
    float offset = u_spread * (index - (u_bands - 1.0) * 0.5) * bandWidth * 1.6;
    float sway = SWAY * bandWidth;

    float centre = base + offset
      + sway * sin(along * TWIST + u_time * 0.9 + phase)
      + sway * 0.3 * sin(along * TWIST * 2.1 - u_time * 0.62 + phase * 2.4);
    float halfWidth = bandWidth * weight
      * (1.0 + 0.36 * sin(along * TWIST * 0.85 - u_time * 0.74 + phase * 1.7));

    // Signed position across the band: 0 at the centreline, \xb11 at the edges.
    // Not called "distance" because that shadows the GLSL builtin.
    float crossPosition = (across - centre) / max(halfWidth, 0.01);
    if (abs(crossPosition) > 3.2) {
      continue;
    }

    float profile =
      clamp(1.0 - pow(abs(crossPosition), SHARPNESS), 0.0, 1.0);
    float stop = 0.5 + 0.5 * crossPosition
      + 0.16 * sin(crossPosition * 5.0 + along * 5.5 - u_time * 1.7 + phase)
      + COLOUR_TRAVEL * along;
    vec3 bandColour = ramp(pingPong(stop * COLOUR_SPAN + index * 0.15));

    float striations = (1.0 - STRIATION_DEPTH) + STRIATION_DEPTH
      * (0.5 + 0.5 * sin(crossPosition * STRIATION + along * 9.0
        - u_time * 2.4 + phase));
    float core = pow(profile, CORE_FALLOFF) * striations;
    float bloom = exp(-abs(crossPosition) * 1.35) * u_bloom;

    float alpha = clamp((core + bloom) * weight * u_density, 0.0, 1.0);
    alpha *= 1.0 - smoothstep(u_ceiling, u_ceiling + 0.2, across);
    alpha *= damp;

    float merged = alpha + coverage * (1.0 - alpha);
    colour = merged > 0.0
      ? (bandColour * alpha + colour * coverage * (1.0 - alpha)) / merged
      : vec3(0.0);
    coverage = merged;
  }

  colour += (grain(gl_FragCoord.xy + u_time) - 0.5) * GRAIN;

  float alpha = clamp(coverage, 0.0, 1.0);
  outColor = vec4(pow(max(colour, 0.0), vec3(1.0 / 2.2)) * alpha, alpha);
}
`,u=new Float32Array([-1,-1,3,-1,-1,3]),d=(e,t)=>{},c=(e,t,r)=>{let a=e.createShader(t);return a?(e.shaderSource(a,r),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(d(t===e.VERTEX_SHADER?"vertex shader":"fragment shader",e.getShaderInfoLog(a)),e.deleteShader(a),null):null};e.s(["default",0,e=>{let o,f,m,h=(0,r.c)(4),{config:g}=e,p=(0,a.useRef)(null);return h[0]!==g?(o=()=>{let e=p.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,antialias:!1});if(!t)return;let r=(e=>{let t=c(e,e.VERTEX_SHADER,l),r=c(e,e.FRAGMENT_SHADER,s);if(!(t&&r))return null;let a=e.createProgram();return(e.attachShader(a,t),e.attachShader(a,r),e.bindAttribLocation(a,0,"a_position"),e.linkProgram(a),e.deleteShader(t),e.deleteShader(r),e.getProgramParameter(a,e.LINK_STATUS))?(e.useProgram(a),a):(d("program link",e.getProgramInfoLog(a)),e.deleteProgram(a),null)})(t);if(!r)return;let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,u,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.clearColor(0,0,0,0);let o=t.getUniformLocation(r,"u_resolution"),f=t.getUniformLocation(r,"u_time"),{bandHeight:m,bandHeightRight:h,bandWidth:b,bands:_,bloom:v,ceiling:x,damp:y,density:w,palette:S,speed:P,spread:E}=((e={})=>({bandHeight:e.bandHeight??.1,bandHeightRight:e.bandHeightRight??e.bandHeight??.1,bandWidth:e.bandWidth??.05,bands:e.bands??3,bloom:e.bloom??.17,ceiling:e.ceiling??.35,damp:e.damp,density:e.density??1.6,palette:e.palette??i,speed:e.speed??.4,spread:e.spread??1}))(g);for(let[e,a]of S.entries())t.uniform3fv(t.getUniformLocation(r,`u_color${e}`),n(a));t.uniform1f(t.getUniformLocation(r,"u_bands"),_),t.uniform1f(t.getUniformLocation(r,"u_bandWidth"),b),t.uniform1f(t.getUniformLocation(r,"u_bandHeight"),m),t.uniform1f(t.getUniformLocation(r,"u_bandHeightRight"),h),t.uniform1f(t.getUniformLocation(r,"u_ceiling"),x),t.uniform1f(t.getUniformLocation(r,"u_spread"),E),t.uniform1f(t.getUniformLocation(r,"u_density"),w),t.uniform1f(t.getUniformLocation(r,"u_bloom"),v),t.uniform4f(t.getUniformLocation(r,"u_damp"),y?.x??.5,y?.y??.5,y?.radiusX??1,y?.radiusY??1),t.uniform1f(t.getUniformLocation(r,"u_dampStrength"),y?.strength??0);let R=0,O=0,j=0,C=0,A=!1,T=!0,I=()=>{let r,a,i;r=Math.min(window.devicePixelRatio||1,2),a=Math.max(1,Math.round(e.clientWidth*r)),i=Math.max(1,Math.round(e.clientHeight*r)),(e.width!==a||e.height!==i)&&(e.width=a,e.height=i),t.viewport(0,0,a,i),t.uniform2f(o,a,i),t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(f,R),t.drawArrays(t.TRIANGLES,0,3)},L=e=>{C=requestAnimationFrame(L);let t=e/1e3,r=0===O?0:Math.min(.05,t-O);O=t,R+=r*P,(j+=1)%2==0&&I()},N=()=>{A&&(A=!1,cancelAnimationFrame(C))},M=window.matchMedia("(prefers-reduced-motion: reduce)"),z=()=>{M.matches||document.hidden||!T?N():A||(A=!0,O=0,C=requestAnimationFrame(L))},U=new IntersectionObserver(e=>{let[t]=e;T=t.isIntersecting,z()},{rootMargin:"20px"});U.observe(e),I();let D=new ResizeObserver(()=>{A||I()});return D.observe(e),document.addEventListener("visibilitychange",z),M.addEventListener("change",z),z(),()=>{N(),U.disconnect(),D.disconnect(),document.removeEventListener("visibilitychange",z),M.removeEventListener("change",z),t.deleteBuffer(a),t.deleteProgram(r),e.isConnected||t.getExtension("WEBGL_lose_context")?.loseContext()}},f=[g],h[0]=g,h[1]=o,h[2]=f):(o=h[1],f=h[2]),(0,a.useEffect)(o,f),h[3]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsx)("canvas",{"aria-hidden":"true",className:"pointer-events-none absolute -top-[2%] -left-[10%] z-10 block h-[104%] w-[120%]",ref:p}),h[3]=m):m=h[3],m}],10440)}]);