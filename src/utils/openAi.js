import OpenAI from 'openai';

const OPEN_API_KEY = process.env.REACT_APP_OPENAI_KEY;
// const OPEN_API_KEY ="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"
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