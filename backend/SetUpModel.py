from transformers import pipeline

def setUpModel():
    question_answerer = pipeline("question-answering",
                                model="distilbert-base-cased-distilled-squad")
    return question_answerer

def generate_answer(model, context: str, question: str):

    result = model(
        question=question,
        context=context
    )
    return result['answer']