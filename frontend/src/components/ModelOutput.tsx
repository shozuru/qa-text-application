import React, { useState, useEffect } from "react";
import './ModelOutput.css'
import type { ReceivedUserData } from "../Interfaces/UserInputData";

const ModelOutput: React.FC<ReceivedUserData> =
    ({ userAnswer, userQuestion }) => {

        const [questionsList, setQuestionsList] = useState<string[]>([])
        const [answersList, setAnswersList] = useState<string[]>([])

        const zippedList = questionsList.map((val, i) => {
            return { question: val, answer: answersList[i] }
        })

        useEffect(() => {

            if (userQuestion) {
                setQuestionsList(prev => [...prev, userQuestion])
            }
            if (userAnswer) {
                setAnswersList(prev => [...prev, userAnswer])
            }

        }, [userQuestion, userAnswer])


        return (

            <div
                className="model-output-container"
            >

                <div
                    className="output-prompt"
                >
                    AI Generated Answers:
                </div>

                {zippedList.length === 0 ? (
                    <div>
                        <p
                            className="enter-some-text"
                        >
                            Your question and an AI generated response will
                            appear here.
                        </p>
                    </div>
                ) : (

                    <div
                        className="output-items"
                    >
                        {zippedList.map((set, i) => (
                            <li
                                className="question-answer-entry"
                                key={i}
                            >
                                <div
                                    className="question-text"
                                >
                                    Q: {set.question}
                                </div>

                                <div
                                    className="answer-text"
                                >
                                    A: {set.answer}
                                </div>
                            </li>
                        ))}
                    </div>
                )
                }
            </div >
        )
    }

export default ModelOutput