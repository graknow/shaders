precision mediump float;

uniform vec2 u_resolution;

void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    vec3 color = vec3(0.0);
    float d = 0.0;

    d = length(abs(uv) - 0.3);

    gl_FragColor = vec4(vec3(fract(d * 10.0)), 1.0);
}