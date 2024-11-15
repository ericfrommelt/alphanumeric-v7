import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

export async function POST(request) {
  try {
    const { topic } = await request.json();

    const client = new BedrockRuntimeClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const prompt = `Write cerebral and abstract song lyrics about "${topic}". 
    The song should have a verse-chorus structure and be smart and emotionally engaging. Use a mix of words, phrases, and metaphors to create a unique and thought-provoking experience. Use rhyme sparingly. 
    Format the output with clear line breaks between verses and chorus. Don't include any explanations, just the lyrics.`;

    const input = {
      modelId: "anthropic.claude-3-haiku-20240307-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    };

    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    
    return Response.json({ 
      response: responseBody.content[0].text
    });
    
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: 'Failed to generate lyrics' }, { status: 500 });
  }
}