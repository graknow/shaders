precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

vec3 palette( float t, vec3 a, vec3 b, vec3 c, vec3 d)
{
    return a + b*cos(6.28318*(c*t+d));
}

void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 3.0; i++)
    {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col;
        {
            vec3 palette_a = vec3(0.5, 0.5, 0.5);
            vec3 palette_b = vec3(0.5, 0.5, 0.5);
            vec3 palette_c = vec3(1.0, 1.0, 1.0);
            vec3 palette_d = vec3(0.263, 0.416, 0.557);

            col = palette(length(uv0) + i*0.4 + u_time * 0.4, 
                          palette_a, 
                          palette_b, 
                          palette_c, 
                          palette_d);
        }

        d = sin(d * 8.0 + u_time)/8.0;
        d = abs(d);

        d = pow(0.01 / d, 2.0);

        finalColor += col * d;
    }

    

    gl_FragColor = vec4(finalColor, 1.0);
}