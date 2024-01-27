import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from instructions import TT_Ai_instructions
#from functions import get_city_for_date, get_qa
#from dall_e_3 import get_dalle_image
from assistant import create_assistant, create_thread, get_completion


# 创建 FastAPI 实例
app = FastAPI()

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许的来源列表
    allow_credentials=True,
    allow_methods=["*"],  # 允许的方法
    allow_headers=["*"],  # 允许的头部
)

# 定义数据模型
class ChatMessage(BaseModel):
    message: str
    thread_id: str
    
DEBUG = True


from openai import OpenAI
client = OpenAI()
assistant =  client.beta.assistants.retrieve("asst_hhciAgvcdHocGFls3wHeYrEA")




@app.get("/create_thread")
async def create_thread_endpoint():
    # # 创建 Thread
    # thread_id = create_thread(debug=DEBUG)
    thread = client.beta.threads.create()
    return {"thread_id": thread.id}

@app.post("/chat")
async def chat_endpoint(request: ChatMessage):
    # 处理请求，返回响应
    message = main(request.message, request.thread_id, debug=DEBUG)
    if isinstance(message, dict) and "image" in message.keys():
        return {
            "message": "",
            "image": message["image"]
        }
    return {
        "message": message,
        "image": ""
    }

def main(query, thread_id, debug=False):
    # 根据输入获取回答
   
    message = get_completion(assistant.id, thread_id, query, debug)
    return message


if __name__ == "__main__":
    uvicorn.run(app, port=8000)