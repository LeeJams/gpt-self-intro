import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-NsCoTugKcgVqLgT63XcfTPml",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    try{
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `너는 ${data.company} ${data.job} 직군에 ${data.career} 부분에 지원을 하고 싶은 취업을 하고싶은 취업 준비생이다. 너는 ${data.major}야. 너는 ${data.experience}를 한 경험을 가지고 있어. 너는 무엇이든 잘 하고 이력서에 넣을 자소소개서인 만큼 잘 꾸며서 대답해줄수있어.`,
          },
          { role: "user", content: data.question },
        ],
        max_tokens: 1000,
        temperature: 0,
      });
  
      res.status(200).json({ answer: response.data.choices[0].message.content });
    } catch(e) {
      res.status(e.response.status).json({message: e.message});
    }
  }
}
