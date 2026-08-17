(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64462,e=>{"use strict";var t=e.i(79924),o=e.i(42156),a=e.i(56966),i=e.i(58882),n=e.i(5032);let r={ai:{buttonSurface:"linear-gradient(to bottom, oklch(54% 0.272 263.8), oklch(48% 0.28 263.8))",capabilityIcons:{c1:a.RiBrainLine,c2:a.RiDatabase2Line,c3:a.RiSpeedUpLine},heroClass:"bg-blue-150"},cloud:{buttonSurface:"linear-gradient(to bottom, oklch(54.4% 0.207 27.5), oklch(48.4% 0.213 27.5))",capabilityIcons:{c1:a.RiServerLine,c2:a.RiCloudLine,c3:a.RiPulseLine},heroClass:"bg-red-100"},consulting:{buttonSurface:"linear-gradient(to bottom, oklch(51.5% 0.111 61.9), oklch(45.5% 0.114 61.9))",capabilityIcons:{c1:a.RiCompass3Line,c2:a.RiShieldCheckLine,c3:a.RiRoadMapLine},heroClass:"bg-yellow-100"},simulation:{buttonSurface:"linear-gradient(to bottom, oklch(54% 0.272 315), oklch(48% 0.28 315))",capabilityIcons:{c1:a.RiBox3Line,c2:a.RiGogglesLine,c3:a.RiLineChartLine},heroClass:"bg-purple-100"},software:{buttonSurface:"linear-gradient(to bottom, oklch(56.6% 0.15 150.1), oklch(50.6% 0.154 150.1))",capabilityIcons:{c1:a.RiCodeSSlashLine,c2:a.RiStackLine,c3:a.RiCheckDoubleLine},heroClass:"bg-green-100"}};e.s(["default",0,e=>{let l,s,c,d,u,h=(0,o.c)(23),{items:m,service:f}=e,[g,p]=(0,i.useState)(0);h[0]!==f?(l=n.SERVICES.find(e=>e.id===f)?.accent,h[0]=f,h[1]=l):l=h[1];let b=l,_=r[f].capabilityIcons;if(h[2]!==b||h[3]!==g||h[4]!==m){let e;h[6]!==b||h[7]!==g?(e=(e,o)=>{let i=o===g;return(0,t.jsx)("li",{className:"border-b border-neutral-200 last:border-b-0",children:(0,t.jsxs)("button",{className:`ease-snap flex w-full cursor-pointer items-center justify-between gap-2 px-8 py-5 text-left text-[15px] font-medium transition-colors duration-180 ${i?"bg-white":"text-neutral-800 hover:bg-white"}`,onClick:()=>p(o),onFocus:()=>p(o),onMouseEnter:()=>p(o),style:i?{color:b}:void 0,type:"button",children:[e.title,(0,t.jsx)(a.RiArrowRightSLine,{"aria-hidden":"true",className:`size-4 shrink-0 transition-opacity ${i?"opacity-100":"opacity-0"}`})]})},e.id)},h[6]=b,h[7]=g,h[8]=e):e=h[8],s=m.map(e),h[2]=b,h[3]=g,h[4]=m,h[5]=s}else s=h[5];if(h[9]!==s?(c=(0,t.jsx)("ul",{className:"hidden bg-neutral-50 md:col-start-1 md:row-start-1 md:row-end-4 md:block",children:s}),h[9]=s,h[10]=c):c=h[10],h[11]!==b||h[12]!==g||h[13]!==_||h[14]!==m){let e;h[16]!==b||h[17]!==g||h[18]!==_?(e=(e,o)=>{let a=_[e.id],i=o===g;return(0,t.jsxs)("div",{className:`flex-col bg-neutral-50 px-6 py-8 md:col-start-2 md:row-start-1 md:row-end-4 md:bg-white md:px-10 md:py-9 ${i?"flex":"flex md:hidden"}`,children:[(0,t.jsxs)("span",{className:"flex items-center gap-3.5",children:[(0,t.jsx)(a,{"aria-hidden":"true",className:"size-6 shrink-0 md:size-7",style:{color:b}}),(0,t.jsx)("h3",{className:"text-lg font-semibold tracking-[-0.01em] md:text-xl",children:e.title})]}),(0,t.jsx)("p",{className:"mt-4 max-w-[56ch] text-base leading-[1.6] text-neutral-800",children:e.description}),(0,t.jsx)("span",{className:"mt-auto pt-6 text-[11px] font-medium tracking-wider text-neutral-700 uppercase",children:e.tag})]},e.id)},h[16]=b,h[17]=g,h[18]=_,h[19]=e):e=h[19],d=m.map(e),h[11]=b,h[12]=g,h[13]=_,h[14]=m,h[15]=d}else d=h[15];return h[20]!==c||h[21]!==d?(u=(0,t.jsxs)("div",{className:"grid gap-px border-y border-neutral-200 bg-neutral-200 md:grid-cols-[300px_1fr]",children:[c,d]}),h[20]=c,h[21]=d,h[22]=u):u=h[22],u}],64462)},10440,e=>{"use strict";var t=e.i(79924),o=e.i(42156),a=e.i(58882);let i=[[20,.09,268],[38,.22,266],[50.1,.28,263.8],[70.7,.165,254.6],[86,.12,205]],n=e=>Math.min(1,Math.max(0,e)),r=([e,t,o])=>{let a=e/100,i=o*Math.PI/180,r=t*Math.cos(i),l=t*Math.sin(i),s=(a+.3963377774*r+.2158037573*l)**3,c=(a-.1055613458*r-.0638541728*l)**3,d=(a-.0894841775*r-1.291485548*l)**3;return[n(4.0767416621*s-3.3077115913*c+.2309699292*d),n(-1.2684380046*s+2.6097574011*c-.3413193965*d),n(-.0041960863*s-.7034186147*c+1.707614701*d)]},l=`#version 300 es
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
`,c=new Float32Array([-1,-1,3,-1,-1,3]),d=(e,t)=>{},u=(e,t,o)=>{let a=e.createShader(t);return a?(e.shaderSource(a,o),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(d(t===e.VERTEX_SHADER?"vertex shader":"fragment shader",e.getShaderInfoLog(a)),e.deleteShader(a),null):null};e.s(["default",0,e=>{let n,h,m,f=(0,o.c)(4),{config:g}=e,p=(0,a.useRef)(null);return f[0]!==g?(n=()=>{let e=p.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,antialias:!1});if(!t)return;let o=(e=>{let t=u(e,e.VERTEX_SHADER,l),o=u(e,e.FRAGMENT_SHADER,s);if(!(t&&o))return null;let a=e.createProgram();return(e.attachShader(a,t),e.attachShader(a,o),e.bindAttribLocation(a,0,"a_position"),e.linkProgram(a),e.deleteShader(t),e.deleteShader(o),e.getProgramParameter(a,e.LINK_STATUS))?(e.useProgram(a),a):(d("program link",e.getProgramInfoLog(a)),e.deleteProgram(a),null)})(t);if(!o)return;let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.clearColor(0,0,0,0);let n=t.getUniformLocation(o,"u_resolution"),h=t.getUniformLocation(o,"u_time"),{bandHeight:m,bandHeightRight:f,bandWidth:b,bands:_,bloom:v,ceiling:x,damp:R,density:w,palette:S,speed:L,spread:y}=((e={})=>({bandHeight:e.bandHeight??.1,bandHeightRight:e.bandHeightRight??e.bandHeight??.1,bandWidth:e.bandWidth??.05,bands:e.bands??3,bloom:e.bloom??.17,ceiling:e.ceiling??.35,damp:e.damp,density:e.density??1.6,palette:e.palette??i,speed:e.speed??.4,spread:e.spread??1}))(g);for(let[e,a]of S.entries())t.uniform3fv(t.getUniformLocation(o,`u_color${e}`),r(a));t.uniform1f(t.getUniformLocation(o,"u_bands"),_),t.uniform1f(t.getUniformLocation(o,"u_bandWidth"),b),t.uniform1f(t.getUniformLocation(o,"u_bandHeight"),m),t.uniform1f(t.getUniformLocation(o,"u_bandHeightRight"),f),t.uniform1f(t.getUniformLocation(o,"u_ceiling"),x),t.uniform1f(t.getUniformLocation(o,"u_spread"),y),t.uniform1f(t.getUniformLocation(o,"u_density"),w),t.uniform1f(t.getUniformLocation(o,"u_bloom"),v),t.uniform4f(t.getUniformLocation(o,"u_damp"),R?.x??.5,R?.y??.5,R?.radiusX??1,R?.radiusY??1),t.uniform1f(t.getUniformLocation(o,"u_dampStrength"),R?.strength??0);let A=0,T=0,E=0,C=0,I=!1,P=!0,N=()=>{let o,a,i;o=Math.min(window.devicePixelRatio||1,2),a=Math.max(1,Math.round(e.clientWidth*o)),i=Math.max(1,Math.round(e.clientHeight*o)),(e.width!==a||e.height!==i)&&(e.width=a,e.height=i),t.viewport(0,0,a,i),t.uniform2f(n,a,i),t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(h,A),t.drawArrays(t.TRIANGLES,0,3)},k=e=>{C=requestAnimationFrame(k);let t=e/1e3,o=0===T?0:Math.min(.05,t-T);T=t,A+=o*L,(E+=1)%2==0&&N()},H=()=>{I&&(I=!1,cancelAnimationFrame(C))},O=window.matchMedia("(prefers-reduced-motion: reduce)"),U=()=>{O.matches||document.hidden||!P?H():I||(I=!0,T=0,C=requestAnimationFrame(k))},F=new IntersectionObserver(e=>{let[t]=e;P=t.isIntersecting,U()},{rootMargin:"20px"});F.observe(e),N();let W=new ResizeObserver(()=>{I||N()});return W.observe(e),document.addEventListener("visibilitychange",U),O.addEventListener("change",U),U(),()=>{H(),F.disconnect(),W.disconnect(),document.removeEventListener("visibilitychange",U),O.removeEventListener("change",U),t.deleteBuffer(a),t.deleteProgram(o),e.isConnected||t.getExtension("WEBGL_lose_context")?.loseContext()}},h=[g],f[0]=g,f[1]=n,f[2]=h):(n=f[1],h=f[2]),(0,a.useEffect)(n,h),f[3]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsx)("canvas",{"aria-hidden":"true",className:"pointer-events-none absolute -top-[2%] -left-[10%] z-10 block h-[104%] w-[120%]",ref:p}),f[3]=m):m=f[3],m}],10440)}]);