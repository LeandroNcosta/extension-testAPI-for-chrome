import { Configuration, OpenAIApi } from "openai"
import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

//app
const openai = new OpenAIApi(configuration);

const getAnswer = async (question) => {
  const { data: completion } = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: 'Você é um especialista em responder perguntas de forma simplificada' },
      { role: "user", content: question }
    ],
  });
  return completion.choices[0].message.content
}


export default getAnswer 