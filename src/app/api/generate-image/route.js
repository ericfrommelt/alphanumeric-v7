import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

export async function POST(request) {
  try {
    const { lyrics, style } = await request.json();

    const client = new BedrockRuntimeClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    // Adjust prompt based on style
    let stylePrompt = '';
    if (style === 'anime') {
      stylePrompt = 'in anime style, with bold colors and dramatic composition';
    } else {
      stylePrompt = 'in a realistic photographic style with dramatic lighting';
    }

    const imagePrompt = `Create a captivating album cover based on these song lyrics: ${lyrics}. 
    Make it artistic and abstract, suitable for an album cover, ${stylePrompt}. 
    Use vibrant colors and meaningful symbolism from the lyrics.`;

    const input = {
      modelId: "stability.stable-diffusion-xl-v1",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        text_prompts: [
          {
            text: imagePrompt,
            weight: 1.0
          }
        ],
        cfg_scale: 10,
        steps: 50,
        seed: Math.floor(Math.random() * 1000000),
        style_preset: style === 'anime' ? 'anime' : 'cinematic',
      })
    };

    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    
    // Convert base64 image to data URL
    const base64Image = responseBody.artifacts[0].base64;
    const imageUrl = `data:image/png;base64,${base64Image}`;
    
    return Response.json({ imageUrl });
    
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}