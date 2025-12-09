import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import {config} from "dotenv";
config();

const  model =  new ChatGoogleGenerativeAI({
    model:"gemini-2.5-flash",
    apiKey:process.env.GEMINI_API_KEY
})

const promptTemplate = PromptTemplate.fromTemplate(`
     explain {topic} in ELI5,make sure the answer is concise as possible
    `)

const chain = promptTemplate.pipe(model) ;
chain.invoke({topic:"express"}).then((res)=>{
    console.log(res);
    
});