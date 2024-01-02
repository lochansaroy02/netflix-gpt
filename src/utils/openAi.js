import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';



const openai = new OpenAI({
    apiKey:"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",
    dangerouslyAllowBrowser: true

});

const openAiResponse = async (gptQuary) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuary }],
        model: 'gpt-3.5-turbo',
    }); 
    return chatCompletion.choices;

}

export default openAiResponse;