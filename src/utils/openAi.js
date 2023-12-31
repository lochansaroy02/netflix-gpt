import OpenAI from 'openai';

const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY
const openai = new OpenAI({
    apiKey: OPEN_API_KEY,
});

const openAiResponse = async (gptQuary) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuary }],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion.choices;

}

export default openAiResponse;