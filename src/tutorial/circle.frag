precision mediump float;

uniform vec2 u_resolution;

void circle(vec2 pixel, vec2 center, float radius, vec4 color)
{
    float dist = distance(pixel, center);
    
    if (step(radius, dist) == 0.0) gl_FragColor = color;
}

void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;

    vec2 pos = vec2(1.0, 1.0);
    float radius = 0.3;

    vec4 color = vec4(1.0, 0.0, 0.0, 1.0);

    circle(uv, pos, radius, color);
}