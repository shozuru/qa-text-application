# QA Text Application
A question-answering text application built on top of the DistilBERT (distilbert-base-cased-distilled-squad) model that allows users to provide a passage of text along with a specific question, with the system generating a context-based answer derived from the given passage.

# Features
* Takes a passage of text and answers user-provided questions based on context.
* Uses a lightweight model (distilbert-base-cased-distilled-squad) fine-tuned for Q&A.
* Delivers accurate responses while being smaller and faster than BERT.
* Built with Hugging Face Transformers and PyTorch.

# Tech Stack
Frontend:
* React
* Axios

Backend:
* FastAPI
* Uvicorn
* Hugging Face Transformers
* PyTorch

# Cloning
```
git clone https://github.com/shozuru/qa-text-application.git
cd qa-text-application
```

# Installing backend:
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

# Installing frontend:
```
cd frontend
npm install
npm run build
npm run preview
```
