precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    gl_FragColor = vec4(uv.y, uv.y, uv.y, 1.0);

    if (uv.y >= 1.0) gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    if (uv.y <= -1.0) gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    if (uv.x >= 1.0) gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    if (uv.x <= -1.0) gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}