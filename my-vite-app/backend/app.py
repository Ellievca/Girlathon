# backend/app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from openai import OpenAI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai_api_key = "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"
client = OpenAI(api_key=openai_api_key)

class Message(BaseModel):
    message: str

@app.post("/chat")
async def chat(msg: Message):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a glam beauty assistant who helps users with makeup, skincare, and outfit advice in a friendly tone. Be cute and girly."},
                {"role": "user", "content": msg.message}
            ]
        )
        reply = response.choices[0].message.content
        return {"response": reply}
    except Exception as e:
        return {"response": f"Error: {str(e)}"}