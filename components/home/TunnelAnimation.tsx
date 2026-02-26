"use client";

import { useEffect, useRef } from "react";

// ── Vertex shader ────────────────────────────────────────────────────────
const VERT = `
  attribute vec2 aPos;
  void main() {
    gl_Position = vec4(aPos, 0.0, 1.0);
  }
`;

// ── Fragment shader (ported from original GLSL / Shadertoy) ──────────────
const FRAG = `
  precision mediump float;

  uniform float uTime;
  uniform vec2  uRes;

  #define TAU     6.28318530718
  #define LAYERS  96
  #define RING_PTS 128
  #define PT_SIZE  1.8
  #define SPEED    0.48

  float sq(float x) { return x * x; }

  // Angular repeat — folds UV into one sector of a regular polygon
  vec2 angRep(vec2 uv, float angle) {
    vec2 polar = vec2(atan(uv.y, uv.x), length(uv));
    polar.x = mod(polar.x + angle * 0.5, angle) - angle * 0.5;
    return polar.y * vec2(cos(polar.x), sin(polar.x));
  }

  float sdCircle(vec2 p, float r) { return length(p) - r; }

  vec3 mixShape(float sd, vec3 fill, vec3 tgt) {
    float blend = smoothstep(0.0, 1.0 / uRes.y, sd);
    return mix(fill, tgt, blend);
  }

  // Camera wander path through tunnel space
  vec2 tunnelPath(float x) {
    vec2 o = vec2(0.0);
    o.x = 0.2 * sin(TAU * x * 0.5) + 0.4 * sin(TAU * x * 0.2 + 0.3);
    o.y = 0.3 * cos(TAU * x * 0.3) + 0.2 * cos(TAU * x * 0.1);
    o *= smoothstep(1.0, 4.0, x);
    return o;
  }

  void main() {
    vec2 res = uRes / uRes.y;
    vec2 uv  = gl_FragCoord.xy / uRes.y - res * 0.5;

    // Anchor the tunnel center in the top-right quadrant of the hero.
    // Negative x shifts the apparent center rightward on screen;
    // positive y shifts it upward.
    uv.x -= 0.38;
    uv.y += 0.22;

    float repAngle = TAU / float(RING_PTS);
    float ptSize   = PT_SIZE * 0.5 / uRes.y;
    float camZ     = uTime * SPEED;
    vec2  camOffs  = tunnelPath(camZ);

    vec3 color = vec3(0.0);

    for (int i = 1; i <= LAYERS; i++) {
      float pz = 1.0 - float(i) / float(LAYERS);

      // Scroll rings toward camera
      pz -= mod(camZ, 4.0 / float(LAYERS));

      vec2  offs    = tunnelPath(camZ + pz) - camOffs;
      float ringRad = 0.15 / sq(pz * 0.8 + 0.4);

      // Early-exit: only shade pixels near the ring edge
      if (abs(length(uv + offs) - ringRad) < ptSize * 1.5) {
        vec2  aruv = angRep(uv + offs, repAngle);
        float pd   = sdCircle(aruv - vec2(ringRad, 0.0), ptSize);

        // Alternate ring brightness — warm-white palette to sit on pink hero
        vec3 ptCol = (mod(float(i / 2), 2.0) == 0.0)
          ? vec3(1.00, 0.86, 0.88)   // warm white
          : vec3(0.68, 0.58, 0.62);  // warm mid-gray

        // Depth fade: rings closer to camera (low pz) are brighter
        float shade = 1.0 - pz;

        color = mixShape(pd, ptCol * shade, color);
      }
    }

    // Use luminance as alpha so the black void is transparent —
    // the hero gradient shows through everywhere except the dots.
    float alpha = dot(color, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(color, alpha);
  }
`;

// ── WebGL helpers ────────────────────────────────────────────────────────
function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  src: string
): WebGLShader | null {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error("[TunnelAnimation] shader error:", gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function buildProgram(
  gl: WebGLRenderingContext,
  vert: WebGLShader,
  frag: WebGLShader
): WebGLProgram | null {
  const p = gl.createProgram();
  if (!p) return null;
  gl.attachShader(p, vert);
  gl.attachShader(p, frag);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error("[TunnelAnimation] link error:", gl.getProgramInfoLog(p));
    gl.deleteProgram(p);
    return null;
  }
  return p;
}

// ── Component ────────────────────────────────────────────────────────────
export default function TunnelAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const t0Ref     = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use WebGL with alpha:true so the background shows through
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    }) as WebGLRenderingContext | null;
    if (!gl) {
      console.warn("[TunnelAnimation] WebGL not available");
      return;
    }

    // Build shader program
    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vert || !frag) return;
    const program = buildProgram(gl, vert, frag);
    if (!program) return;

    // Full-screen triangle strip (two triangles)
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1,  1, -1,  -1, 1,  1, 1]),
      gl.STATIC_DRAW
    );

    gl.useProgram(program);

    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uRes  = gl.getUniformLocation(program, "uRes");

    // Transparent clear + additive-friendly blending
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Resize canvas to match CSS size (capped DPR for perf)
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width  = Math.floor(canvas.offsetWidth  * dpr);
      canvas.height = Math.floor(canvas.offsetHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    t0Ref.current = performance.now();

    const render = (now: number) => {
      const t = (now - t0Ref.current) / 1000;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      gl.deleteProgram(program);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        // Sit above the gradient overlay divs in HeroSection (z-10 = text content)
        zIndex: 2,
        // Diagonal fade: fully visible in the top-right corner, dissolves toward
        // the bottom-left where the headline and body copy live.
        // mask-space: black = show canvas, transparent = hide canvas.
        maskImage:
          "linear-gradient(to top right, transparent 10%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.75) 62%, black 80%)",
        WebkitMaskImage:
          "linear-gradient(to top right, transparent 10%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.75) 62%, black 80%)",
      }}
    />
  );
}
