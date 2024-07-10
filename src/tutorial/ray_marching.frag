precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float map(vec3 pos)
{
    vec3 sphere_pos = vec3(sin(u_time), sin(u_time * 3.14), 1.0);
    return distance(pos, sphere_pos) - 1.0;
}

void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.x;

    vec3 ro = vec3(0.0, 0.0, -3.0);
    vec3 rd = vec3(uv.xy, 1.0);

    float t = 1.0;
    float dist;

    for (float i = 0.0; i < 80.0; i += 1.0)
    {
        vec3 ray = ro + rd * t;

        float diff = map(ray);

        dist = i;
        
        if (diff < 0.01) break;
        if (diff > 500.0) 
        {
            dist = 50.0;
            break;
        }
        if (ray.y < -2.0)
        {
            dist = 20.0;
            break;
        }

        t += diff;
    }

    vec3 color = vec3(dist / 80.0, dist / 80.0, dist / 80.0);
    
    gl_FragColor = vec4(color, 1.0);
}