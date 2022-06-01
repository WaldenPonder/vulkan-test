#version 450

layout (binding = 1) uniform sampler2D samplerColor;

layout (location = 0) in vec3 inColoraaa;
layout (location = 1) in vec2 inUV;

layout (location = 0) out vec4 outFragColor;

void main() 
{
  outFragColor = vec4(inColoraaa, 1.0);
  //outFragColor = vec4(0.4,0.1,0.2,1);
  
  vec4 color = texture(samplerColor, inUV, 0);
  outFragColor = color;
}