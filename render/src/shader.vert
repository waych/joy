#version 450

layout(location = 0) in vec3 a_position;
layout(location = 1) in uint a_depth;

layout(location = 0) out float f_color;

layout(set = 0, binding = 0)
uniform Uniforms {
    mat4 u_mvp;
    uint width;
    uint height;
};

void main() {
    vec3 off = vec3(gl_InstanceIndex % width, gl_InstanceIndex / width, -float(a_depth));
    gl_Position = u_mvp * vec4(a_position + off, 1.0);
    f_color = a_depth / 256.;
}
