(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68536,e=>{"use strict";var t=e.i(79924),o=e.i(42156),a=e.i(58882);let n=["kickoff","concept","build","test","golive","optimize"],r={build:{align:"center",delay:.35,x:488,y:185.6},concept:{align:"center",delay:.18,x:264,y:230.4},golive:{align:"center",delay:.8,x:936,y:230.4},kickoff:{align:"start",delay:.05,x:40,y:320},optimize:{align:"end",delay:1.1,x:1160,y:320},test:{align:"center",delay:.55,x:712,y:185.6}},i="M40,320 Q600,40 1160,320",s=e=>(e-130)/270*100,l={center:{desc:"left-1/2 -translate-x-1/2",label:"-translate-x-1/2 text-center"},end:{desc:"right-0 translate-x-[8%]",label:"-translate-x-[86%] text-right"},start:{desc:"left-0 -translate-x-[8%]",label:"-translate-x-[14%] text-left"}};function c(e){return e.isIntersecting}e.s(["default",0,e=>{let d,u,p,f,h,m,g,x,b,_,v,y,w,S,A,R,T,N,E,j,L=(0,o.c)(39),{steps:C}=e,P=(0,a.useRef)(null),[I,O]=(0,a.useState)("idle");L[0]===Symbol.for("react.memo_cache_sentinel")?(d=()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(c)?(O("play"),t.disconnect()):O("armed")},{threshold:.3});return t.observe(e),()=>t.disconnect()},u=[],L[0]=d,L[1]=u):(d=L[0],u=L[1]),(0,a.useEffect)(d,u),L[2]!==I?(p=e=>"play"===I?e:"armed"===I?"motion-safe:opacity-0":"",L[2]=I,L[3]=p):p=L[3];let k=p;L[4]!==C?(f=e=>{let t=C.find(t=>t.id===e);if(!t)throw Error(`Process step content missing for "${e}"`);return t},L[4]=C,L[5]=f):f=L[5];let H=f;L[6]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsxs)("linearGradient",{id:"process-line",x1:"0",x2:"1",y1:"0",y2:"0",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"var(--color-blue-100)"}),(0,t.jsx)("stop",{offset:"0.15",stopColor:"var(--color-blue-300)"}),(0,t.jsx)("stop",{offset:"0.45",stopColor:"var(--color-blue-600)"}),(0,t.jsx)("stop",{offset:"0.55",stopColor:"var(--color-blue-600)"}),(0,t.jsx)("stop",{offset:"0.85",stopColor:"var(--color-blue-300)"}),(0,t.jsx)("stop",{offset:"1",stopColor:"var(--color-blue-100)"})]}),L[6]=h):h=L[6],L[7]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsxs)("linearGradient",{id:"process-glow",x1:"0",x2:"1",y1:"0",y2:"0",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"var(--color-blue-300)",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:"0.3",stopColor:"var(--color-blue-400)",stopOpacity:"0.5"}),(0,t.jsx)("stop",{offset:"0.5",stopColor:"var(--color-blue-400)"}),(0,t.jsx)("stop",{offset:"0.7",stopColor:"var(--color-blue-400)",stopOpacity:"0.5"}),(0,t.jsx)("stop",{offset:"1",stopColor:"var(--color-blue-300)",stopOpacity:"0"})]}),L[7]=m):m=L[7],L[8]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsxs)("defs",{children:[h,m,(0,t.jsx)("filter",{height:"260%",id:"process-soften",width:"120%",x:"-10%",y:"-80%",children:(0,t.jsx)("feGaussianBlur",{stdDeviation:"7"})})]}),x=(0,t.jsx)("line",{stroke:"var(--color-neutral-300)",strokeWidth:"1",x1:"0",x2:1200,y1:320,y2:320}),L[8]=g,L[9]=x):(g=L[8],x=L[9]),L[10]!==k?(b=k("motion-safe:animate-process-draw"),L[10]=k,L[11]=b):b=L[11],L[12]!==b?(_=(0,t.jsx)("path",{className:b,d:i,fill:"none",filter:"url(#process-soften)",opacity:"0.6",pathLength:"1",stroke:"url(#process-glow)",strokeWidth:"10"}),L[12]=b,L[13]=_):_=L[13],L[14]!==k?(v=k("motion-safe:animate-process-draw"),L[14]=k,L[15]=v):v=L[15];let U=`[stroke-dasharray:1] ${v}`;return L[16]!==U?(y=(0,t.jsx)("path",{className:U,d:i,fill:"none",pathLength:"1",stroke:"url(#process-line)",strokeLinecap:"round",strokeWidth:"2.5"}),L[16]=U,L[17]=y):y=L[17],L[18]!==_||L[19]!==y?(w=(0,t.jsxs)("svg",{"aria-hidden":"true",className:"block h-auto w-full overflow-visible",viewBox:"0 130 1200 270",children:[g,x,_,y]}),L[18]=_,L[19]=y,L[20]=w):w=L[20],L[21]!==k?(S=n.map(e=>{let{delay:o,x:a,y:n}=r[e];return n>=320?null:(0,t.jsx)("span",{"aria-hidden":"true",className:`absolute w-px bg-[repeating-linear-gradient(to_bottom,var(--color-neutral-400)_0_2px,transparent_2px_7px)] ${k("motion-safe:animate-process-fade")}`,style:{animationDelay:`${o+.12}s`,bottom:`${100-s(320)}%`,left:`calc(${a/1200*100}% - 0.5px)`,top:`calc(${s(n)}% + 68px)`}},e)}),L[21]=k,L[22]=S):S=L[22],L[23]!==k||L[24]!==H?(A=n.map((e,o)=>{let{align:a,delay:n,x:i,y:c}=r[e],{description:d,title:u}=H(e),p=String(o+1).padStart(2,"0");return(0,t.jsxs)("li",{className:"group/step absolute",style:{left:`${i/1200*100}%`,top:`${s(c)}%`},children:[(0,t.jsx)("span",{"aria-hidden":"true",className:`absolute -top-[11px] -left-[11px] size-[22px] rounded-full bg-blue-600/12 ${k("motion-safe:animate-process-pop")}`,style:{animationDelay:`${n}s`}}),(0,t.jsx)("span",{"aria-hidden":"true",className:`ease-snap absolute -top-[4.5px] -left-[4.5px] size-[9px] rounded-full bg-blue-600 shadow-[0_0_0_3px_var(--color-neutral-50)] transition-transform duration-180 group-hover/step:scale-120 ${k("motion-safe:animate-process-pop")}`,style:{animationDelay:`${n}s`}}),(0,t.jsxs)("div",{className:`absolute top-[15px] left-0 ${l[a].label}`,children:[(0,t.jsxs)("div",{className:`flex flex-col gap-[3px] px-2.5 pt-[3px] pb-1 whitespace-nowrap ${k("motion-safe:animate-process-rise")}`,style:{animationDelay:`${n+.08}s`},children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"text-xs font-medium tracking-[0.08em] text-blue-700",children:p}),(0,t.jsx)("h3",{className:"ease-snap text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-180 group-hover/step:text-blue-700",children:u})]}),(0,t.jsx)("p",{className:`ease-snap pointer-events-none absolute top-[calc(100%+2px)] w-[25ch] -translate-y-[3px] bg-neutral-50 px-2 pt-0.5 pb-1 text-[13px] leading-normal whitespace-normal text-neutral-700 opacity-0 transition-[opacity,translate] duration-180 group-hover/step:translate-y-0 group-hover/step:opacity-100 ${l[a].desc}`,children:d})]})]},e)}),L[23]=k,L[24]=H,L[25]=A):A=L[25],L[26]!==A?(R=(0,t.jsx)("ol",{className:"absolute inset-0",children:A}),L[26]=A,L[27]=R):R=L[27],L[28]!==w||L[29]!==S||L[30]!==R?(T=(0,t.jsxs)("div",{className:"relative mt-11 hidden md:block",ref:P,children:[w,S,R]}),L[28]=w,L[29]=S,L[30]=R,L[31]=T):T=L[31],L[32]!==H?(N=n.map((e,o)=>{let{description:a,title:n}=H(e),r=String(o+1).padStart(2,"0");return(0,t.jsxs)("li",{className:"relative py-4 pl-8",children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"absolute top-[26px] -left-[3px] size-[7px] rounded-full bg-blue-600"}),(0,t.jsxs)("span",{className:"flex items-baseline gap-3",children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"text-xs font-medium tracking-[0.08em] text-blue-700",children:r}),(0,t.jsx)("h3",{className:"text-lg font-semibold tracking-[-0.01em]",children:n})]}),(0,t.jsx)("p",{className:"mt-1.5 text-base leading-[1.6] text-neutral-800",children:a})]},e)}),L[32]=H,L[33]=N):N=L[33],L[34]!==N?(E=(0,t.jsx)("ol",{className:"mt-10 border-l border-neutral-200 md:hidden",children:N}),L[34]=N,L[35]=E):E=L[35],L[36]!==T||L[37]!==E?(j=(0,t.jsxs)(t.Fragment,{children:[T,E]}),L[36]=T,L[37]=E,L[38]=j):j=L[38],j}],68536)},10440,e=>{"use strict";var t=e.i(79924),o=e.i(42156),a=e.i(58882);let n=[[20,.09,268],[38,.22,266],[50.1,.28,263.8],[70.7,.165,254.6],[86,.12,205]],r=e=>Math.min(1,Math.max(0,e)),i=([e,t,o])=>{let a=e/100,n=o*Math.PI/180,i=t*Math.cos(n),s=t*Math.sin(n),l=(a+.3963377774*i+.2158037573*s)**3,c=(a-.1055613458*i-.0638541728*s)**3,d=(a-.0894841775*i-1.291485548*s)**3;return[r(4.0767416621*l-3.3077115913*c+.2309699292*d),r(-1.2684380046*l+2.6097574011*c-.3413193965*d),r(-.0041960863*l-.7034186147*c+1.707614701*d)]},s=`#version 300 es
in vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,l=`#version 300 es
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
`,c=new Float32Array([-1,-1,3,-1,-1,3]),d=(e,t)=>{},u=(e,t,o)=>{let a=e.createShader(t);return a?(e.shaderSource(a,o),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(d(t===e.VERTEX_SHADER?"vertex shader":"fragment shader",e.getShaderInfoLog(a)),e.deleteShader(a),null):null};e.s(["default",0,e=>{let r,p,f,h=(0,o.c)(4),{config:m}=e,g=(0,a.useRef)(null);return h[0]!==m?(r=()=>{let e=g.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,antialias:!1});if(!t)return;let o=(e=>{let t=u(e,e.VERTEX_SHADER,s),o=u(e,e.FRAGMENT_SHADER,l);if(!(t&&o))return null;let a=e.createProgram();return(e.attachShader(a,t),e.attachShader(a,o),e.bindAttribLocation(a,0,"a_position"),e.linkProgram(a),e.deleteShader(t),e.deleteShader(o),e.getProgramParameter(a,e.LINK_STATUS))?(e.useProgram(a),a):(d("program link",e.getProgramInfoLog(a)),e.deleteProgram(a),null)})(t);if(!o)return;let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.clearColor(0,0,0,0);let r=t.getUniformLocation(o,"u_resolution"),p=t.getUniformLocation(o,"u_time"),{bandHeight:f,bandHeightRight:h,bandWidth:x,bands:b,bloom:_,ceiling:v,damp:y,density:w,palette:S,speed:A,spread:R}=((e={})=>({bandHeight:e.bandHeight??.1,bandHeightRight:e.bandHeightRight??e.bandHeight??.1,bandWidth:e.bandWidth??.05,bands:e.bands??3,bloom:e.bloom??.17,ceiling:e.ceiling??.35,damp:e.damp,density:e.density??1.6,palette:e.palette??n,speed:e.speed??.4,spread:e.spread??1}))(m);for(let[e,a]of S.entries())t.uniform3fv(t.getUniformLocation(o,`u_color${e}`),i(a));t.uniform1f(t.getUniformLocation(o,"u_bands"),b),t.uniform1f(t.getUniformLocation(o,"u_bandWidth"),x),t.uniform1f(t.getUniformLocation(o,"u_bandHeight"),f),t.uniform1f(t.getUniformLocation(o,"u_bandHeightRight"),h),t.uniform1f(t.getUniformLocation(o,"u_ceiling"),v),t.uniform1f(t.getUniformLocation(o,"u_spread"),R),t.uniform1f(t.getUniformLocation(o,"u_density"),w),t.uniform1f(t.getUniformLocation(o,"u_bloom"),_),t.uniform4f(t.getUniformLocation(o,"u_damp"),y?.x??.5,y?.y??.5,y?.radiusX??1,y?.radiusY??1),t.uniform1f(t.getUniformLocation(o,"u_dampStrength"),y?.strength??0);let T=0,N=0,E=0,j=0,L=!1,C=!0,P=()=>{let o,a,n;o=Math.min(window.devicePixelRatio||1,2),a=Math.max(1,Math.round(e.clientWidth*o)),n=Math.max(1,Math.round(e.clientHeight*o)),(e.width!==a||e.height!==n)&&(e.width=a,e.height=n),t.viewport(0,0,a,n),t.uniform2f(r,a,n),t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(p,T),t.drawArrays(t.TRIANGLES,0,3)},I=e=>{j=requestAnimationFrame(I);let t=e/1e3,o=0===N?0:Math.min(.05,t-N);N=t,T+=o*A,(E+=1)%2==0&&P()},O=()=>{L&&(L=!1,cancelAnimationFrame(j))},k=window.matchMedia("(prefers-reduced-motion: reduce)"),H=()=>{k.matches||document.hidden||!C?O():L||(L=!0,N=0,j=requestAnimationFrame(I))},U=new IntersectionObserver(e=>{let[t]=e;C=t.isIntersecting,H()},{rootMargin:"20px"});U.observe(e),P();let W=new ResizeObserver(()=>{L||P()});return W.observe(e),document.addEventListener("visibilitychange",H),k.addEventListener("change",H),H(),()=>{O(),U.disconnect(),W.disconnect(),document.removeEventListener("visibilitychange",H),k.removeEventListener("change",H),t.deleteBuffer(a),t.deleteProgram(o),e.isConnected||t.getExtension("WEBGL_lose_context")?.loseContext()}},p=[m],h[0]=m,h[1]=r,h[2]=p):(r=h[1],p=h[2]),(0,a.useEffect)(r,p),h[3]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsx)("canvas",{"aria-hidden":"true",className:"pointer-events-none absolute -top-[2%] -left-[10%] z-10 block h-[104%] w-[120%]",ref:g}),h[3]=f):f=h[3],f}],10440)}]);