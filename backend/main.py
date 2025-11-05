from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from SetUpModel import setUpModel, generate_answer
from fastapi.middleware.cors import CORSMiddleware

qa_model = setUpModel()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ModelInputData(BaseModel):
    context: str
    question: str

@app.get('/')
def test():
    return {"Hello": "World"}

# POST method
@app.post('/answer')
async def get_answer(data: ModelInputData):
    if not data.context.strip() or not data.question.strip():
        raise HTTPException(status_code=400, 
                            detail="Context and Question cannot be empty.")
    generated_answer = generate_answer(qa_model, data.context, data.question)
    return {"answer": generated_answer}