import { ChatOpenAI } from "@langchain/openai";

// 根据文档正确定义 ChatOpenAICallOptions 类型
interface ChatOpenAICallOptions {
  temperature: number;
  azureOpenAIApiKey?: string;
  azureOpenAIApiVersion?: string;
  azureOpenAIApiInstanceName?: string;
  azureOpenAIApiDeploymentName?: string;
}

// 初始化模型
const llm_model = new ChatOpenAI({
  temperature: 0.9,
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
} as ChatOpenAICallOptions);

export default llm_model;