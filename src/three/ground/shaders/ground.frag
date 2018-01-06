precision highp float;

uniform float time;

varying vec3 vPosition;

#pragma glslify: import('libs/glsl/convertHsvToRgb.glsl');

const float duration = 2.0;
const float delay = 0.0;

void main() {
  float now = clamp((time - delay) / duration, 0.0, 1.0);
  float opacity = (1.0 - length(vPosition.xy / vec2(512.0))) * 0.6 * now;
  vec3 v = normalize(vPosition);
  vec3 rgb = convertHsvToRgb(vec3(0.5 + (v.x + v.y + v.x) / 40.0 + time * 0.1, 0.4, 1.0));
  gl_FragColor = vec4(rgb, opacity);
}
