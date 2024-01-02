import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';


const api = process.env.REACT_APP_OPENAI_API_KEY;
console.log(api)


const openai = new OpenAI({
    apiKey:process.env.REACT_APP_OPENAI_API_KEY,
    
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