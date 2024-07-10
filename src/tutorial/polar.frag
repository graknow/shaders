precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;

    float r = length(uv);
    float a = atan(uv.y, uv.x);

    float f = cos(a * 3.0 + u_time / 1.0);
    vec3 color = vec3(smoothstep(f, f + 0.01, r));

    gl_FragColor = vec4(color, 1.0);
}