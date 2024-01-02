import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';


const OPEN_API_KEY = OPENAI_KEY
const openai = new OpenAI({
    apiKey: OPEN_API_KEY,
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