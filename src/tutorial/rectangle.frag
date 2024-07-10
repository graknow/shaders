precision mediump float;

uniform vec2 u_resolution;

void rectangle(vec2 pixel, vec2 bl, vec2 tr, vec4 color)
{
    float rect = step(bl.x, pixel.x);
    rect *= step(bl.y, pixel.y);
    rect *= step(1.0 - tr.x, 1.0 - pixel.x);
    rect *= step(1.0 - tr.y, 1.0 - pixel.y);

    if (rect > 0.0) gl_FragColor = color;
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    vec2 bottom_left = vec2(0.2, 0.1);
    vec2 top_right = vec2(0.3, 0.8);
    vec4 color = vec4(1.0, 0.0, 0.0, 1.0);

    rectangle(uv, bottom_left, top_right, color);

    bottom_left = vec2(0.5, 0.5);
    top_right = vec2(0.7, 0.9);
    color = vec4(0.0, 1.0, 0.0, 1.0);
    
    rectangle(uv, bottom_left, top_right, color);
}