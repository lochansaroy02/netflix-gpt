import OpenAI from 'openai';

const OPEN_API_KEY ="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"
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