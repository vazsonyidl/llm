import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request, env) {
		const {prompt} = await request.json();

		const ai = new Ai(env.AI);

    let response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {prompt});
    return Response.json(response, {headers: {"Access-Control-Allow-Origin": env.UI_URL}});
  }
};
