# backend/app.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os

app = FastAPI()

# Replace * with your Vercel frontend URL if you want to restrict it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Optionally: ["https://your-vercel-site.vercel.app"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your OpenAI API key securely from environment variable
openai_api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=openai_api_key)

class Message(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(msg: Message):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are a glam beauty assistant who helps users with makeup, skincare, and outfit advice in a friendly tone. Be cute and girly.",
                },
                {"role": "user", "content": msg.message},
            ],
        )
        reply = response.choices[0].message.content
        return {"response": reply}
    except Exception as e:
        return {"response": f"Error: {str(e)}"}
