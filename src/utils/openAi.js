import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';


// const OPEN_API_KEY = "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"
console.log(process.env.REACT_APP_OPENAI_KEY)
const openai = new OpenAI({
    apiKey:process.env.REACT_APP_OPENAI_KEY,
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