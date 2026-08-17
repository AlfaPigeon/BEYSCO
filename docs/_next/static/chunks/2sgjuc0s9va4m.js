(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10440,e=>{"use strict";var t=e.i(79924),o=e.i(42156),a=e.i(58882);let i=[[20,.09,268],[38,.22,266],[50.1,.28,263.8],[70.7,.165,254.6],[86,.12,205]],n=e=>Math.min(1,Math.max(0,e)),r=([e,t,o])=>{let a=e/100,i=o*Math.PI/180,r=t*Math.cos(i),s=t*Math.sin(i),l=(a+.3963377774*r+.2158037573*s)**3,c=(a-.1055613458*r-.0638541728*s)**3,u=(a-.0894841775*r-1.291485548*s)**3;return[n(4.0767416621*l-3.3077115913*c+.2309699292*u),n(-1.2684380046*l+2.6097574011*c-.3413193965*u),n(-.0041960863*l-.7034186147*c+1.707614701*u)]},s=`#version 300 es
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
`,c=new Float32Array([-1,-1,3,-1,-1,3]),u=(e,t)=>{},d=(e,t,o)=>{let a=e.createShader(t);return a?(e.shaderSource(a,o),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS))?a:(u(t===e.VERTEX_SHADER?"vertex shader":"fragment shader",e.getShaderInfoLog(a)),e.deleteShader(a),null):null};e.s(["default",0,e=>{let n,h,f,m=(0,o.c)(4),{config:g}=e,p=(0,a.useRef)(null);return m[0]!==g?(n=()=>{let e=p.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,antialias:!1});if(!t)return;let o=(e=>{let t=d(e,e.VERTEX_SHADER,s),o=d(e,e.FRAGMENT_SHADER,l);if(!(t&&o))return null;let a=e.createProgram();return(e.attachShader(a,t),e.attachShader(a,o),e.bindAttribLocation(a,0,"a_position"),e.linkProgram(a),e.deleteShader(t),e.deleteShader(o),e.getProgramParameter(a,e.LINK_STATUS))?(e.useProgram(a),a):(u("program link",e.getProgramInfoLog(a)),e.deleteProgram(a),null)})(t);if(!o)return;let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.clearColor(0,0,0,0);let n=t.getUniformLocation(o,"u_resolution"),h=t.getUniformLocation(o,"u_time"),{bandHeight:f,bandHeightRight:m,bandWidth:_,bands:b,bloom:v,ceiling:w,damp:A,density:x,palette:S,speed:R,spread:T}=((e={})=>({bandHeight:e.bandHeight??.1,bandHeightRight:e.bandHeightRight??e.bandHeight??.1,bandWidth:e.bandWidth??.05,bands:e.bands??3,bloom:e.bloom??.17,ceiling:e.ceiling??.35,damp:e.damp,density:e.density??1.6,palette:e.palette??i,speed:e.speed??.4,spread:e.spread??1}))(g);for(let[e,a]of S.entries())t.uniform3fv(t.getUniformLocation(o,`u_color${e}`),r(a));t.uniform1f(t.getUniformLocation(o,"u_bands"),b),t.uniform1f(t.getUniformLocation(o,"u_bandWidth"),_),t.uniform1f(t.getUniformLocation(o,"u_bandHeight"),f),t.uniform1f(t.getUniformLocation(o,"u_bandHeightRight"),m),t.uniform1f(t.getUniformLocation(o,"u_ceiling"),w),t.uniform1f(t.getUniformLocation(o,"u_spread"),T),t.uniform1f(t.getUniformLocation(o,"u_density"),x),t.uniform1f(t.getUniformLocation(o,"u_bloom"),v),t.uniform4f(t.getUniformLocation(o,"u_damp"),A?.x??.5,A?.y??.5,A?.radiusX??1,A?.radiusY??1),t.uniform1f(t.getUniformLocation(o,"u_dampStrength"),A?.strength??0);let E=0,L=0,y=0,P=0,I=!1,C=!0,H=()=>{let o,a,i;o=Math.min(window.devicePixelRatio||1,2),a=Math.max(1,Math.round(e.clientWidth*o)),i=Math.max(1,Math.round(e.clientHeight*o)),(e.width!==a||e.height!==i)&&(e.width=a,e.height=i),t.viewport(0,0,a,i),t.uniform2f(n,a,i),t.clear(t.COLOR_BUFFER_BIT),t.uniform1f(h,E),t.drawArrays(t.TRIANGLES,0,3)},O=e=>{P=requestAnimationFrame(O);let t=e/1e3,o=0===L?0:Math.min(.05,t-L);L=t,E+=o*R,(y+=1)%2==0&&H()},U=()=>{I&&(I=!1,cancelAnimationFrame(P))},N=window.matchMedia("(prefers-reduced-motion: reduce)"),F=()=>{N.matches||document.hidden||!C?U():I||(I=!0,L=0,P=requestAnimationFrame(O))},W=new IntersectionObserver(e=>{let[t]=e;C=t.isIntersecting,F()},{rootMargin:"20px"});W.observe(e),H();let M=new ResizeObserver(()=>{I||H()});return M.observe(e),document.addEventListener("visibilitychange",F),N.addEventListener("change",F),F(),()=>{U(),W.disconnect(),M.disconnect(),document.removeEventListener("visibilitychange",F),N.removeEventListener("change",F),t.deleteBuffer(a),t.deleteProgram(o),e.isConnected||t.getExtension("WEBGL_lose_context")?.loseContext()}},h=[g],m[0]=g,m[1]=n,m[2]=h):(n=m[1],h=m[2]),(0,a.useEffect)(n,h),m[3]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsx)("canvas",{"aria-hidden":"true",className:"pointer-events-none absolute -top-[2%] -left-[10%] z-10 block h-[104%] w-[120%]",ref:p}),m[3]=f):f=m[3],f}],10440)}]);