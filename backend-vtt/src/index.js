// import { Ai } from '@cloudflare/ai'

// export default {
// 	async fetch(request, env, ctx) {
//     const ai = new Ai(env.AI)

//     const answer = await ai.run(
//       '@cf/meta/llama-2-7b-chat-int8',
//       {
//         messages: [
//           { role: 'user', content: `tell me a joke about cloudflare?` }
//         ]
//       }
//     )

//     return new Response(JSON.stringify(answer))
// 	}
// }

import { Ai } from '@cloudflare/ai';

export default {
  async fetch(request, env) {
    const audioResponse = await fetch(
      'https://github.com/intGus/auto-vtt/raw/main/Untitled.mp3'
    );
    const blob = await audioResponse.arrayBuffer();

    const ai = new Ai(env.AI);
    const inputs = {
      audio: [...new Uint8Array(blob)]
    };
    const response = await ai.run('@cf/openai/whisper', inputs);

    return Response.json({ inputs, response });
  }
};
