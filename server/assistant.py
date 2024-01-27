import os
import re
import json
import time
from openai import OpenAI
from dotenv import load_dotenv


# 加载环境变量
load_dotenv()

# 获取 API 密钥
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# 实例化 OpenAI 客户端
client = OpenAI(api_key=OPENAI_API_KEY, timeout=600)

# 创建或加载 Assistant
def create_assistant(name="Assistant", instructions="You are a helpful assistant.", model="gpt-4-1106-preview", tools=None, files=None, debug=False):
    """
    Creates an assistant with the given name, instructions, model, tools, and files.

    Args:
        name (str, optional): The name of the assistant. Defaults to "Assistant".
        instructions (str, optional): The instructions for the assistant. Defaults to "You are a helpful assistant.".
        model (str, optional): The model to use for the assistant. Defaults to "gpt-4-1106-preview".
        tools (list, optional): The list of tools to provide to the assistant. Defaults to None.
        files (list or str, optional): The list of files or a single file to upload and associate with the assistant. Defaults to None.

    Returns:
        str: The ID of the created assistant.
    """
    assistant_file_path = "assistant.json"
    assistant_json = []
    # 如果存在同名 assistant 则读取
    if os.path.exists(assistant_file_path):
        with open(assistant_file_path, "r") as file:
            assistant_json = json.load(file)
            for assistant_data in assistant_json:
                assistant_name = assistant_data["assistant_name"]
                if assistant_name == name:
                    assistant_id = assistant_data["assistant_id"]
                    print("加载已经存在的 Assistant ID")
                    if debug:
                        print("Assistant ID: ", assistant_id)
                    return assistant_id

   

    # 创建 Assistant
    assistant = client.beta.assistants.create(
        name=name,
        instructions=instructions,
        model=model,
        tools=tools,
       # file_ids=file_ids
    )

    assistant_id = assistant.id
    assistant_name = assistant.name
    
    # 保存 Assistant 信息
    assistant_json.append(
        {
            "assistant_name": assistant_name,
            "assistant_id": assistant_id
        }
    )
    with open(assistant_file_path, "w", encoding="utf-8") as file:
        json.dump(assistant_json, file, ensure_ascii=False, indent=4)
        print("已保存 Assistant 信息")
        
    return assistant_id

# 创建 Thread
def create_thread(debug=False):
    """
    Creates a new thread.

    Returns:
        str: The ID of the newly created thread.
    """
    thread = client.beta.threads.create()
    if debug:
        print("Thread ID: ", thread.id)
    return thread.id


# 获取回答
def get_completion(assistant_id, thread_id, user_input, debug=False):
   
    # 创建 Message
    message = client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=user_input
    )

    # 创建 Run
    run = client.beta.threads.runs.create(
      thread_id=thread_id,
      assistant_id=assistant_id,
    )

    # 运行 Run
    while True:
        while run.status in ['queued', 'in_progress']:
            run = client.beta.threads.runs.retrieve(
                thread_id=thread_id,
                run_id=run.id
            )
            time.sleep(1)
        messages = client.beta.threads.messages.list(thread_id=thread_id)

        # 执行 function
        
        return messages.data[0].content[0].text.value