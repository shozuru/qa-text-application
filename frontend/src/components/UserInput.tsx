import React, { useState } from 'react'
import './UserInput.css'
import type { UserInputData } from '../Interfaces/UserInputData'
import axios from 'axios'

interface SendData {
    onDataSend: (input: UserInputData) => void
}

const UserInput: React.FC<SendData> = ({ onDataSend }) => {

    const [context, setContext] = useState<string>('')
    const [question, setQuestion] = useState<string>('')

    const [emptyInput, setEmptyInput] = useState<boolean>(false)

    const handleQuestion =
        (event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault()
            setQuestion(event.target.value)
        }

    const handleContext =
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            event.preventDefault()
            setContext(event.target.value)
        }

    const handleSendTobackend = async (context: string, question: string) => {

        axios.post("https://qa-text-application.duckdns.org/answer",
            {
                "context": context,
                "question": question
            }
        )
            .then(res => {
                onDataSend(
                    { userAnswer: res.data.answer, userQuestion: question }
                )
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleButtonSubmit =
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()

            if (!(context && question)) {
                setEmptyInput(true)
            } else {

                if (emptyInput === true) {
                    setEmptyInput(false)
                }

                handleSendTobackend(context, question)
                setQuestion('')
            }
        }

    return (

        <div
            className='user-input-container'
        >
            < div
                className='user-context-container'
            >
                <span
                    className={
                        emptyInput && context == '' ?
                            'context-prompt-empty' :
                            'context-prompt'
                    }
                >
                    {emptyInput && context == '' ? (
                        <span>*Enter text to be analyzed:</span>
                    ) : (
                        <span>Enter text to be analyzed:</span>
                    )}

                </span>


                <textarea
                    className={
                        emptyInput && context == '' ?
                            'user-context-empty' :
                            'user-context'
                    }
                    rows={10}
                    value={context}
                    onChange={handleContext}
                    placeholder="Enter text here"
                />

            </div >

            <div
                className='user-question-container'
            >
                <div
                    className={
                        emptyInput && question == '' ?
                            'user-question-prompt-empty' :
                            'user-question-prompt'
                    }
                >
                    {emptyInput && question == '' ? (
                        <span>*Enter a question about the text:</span>
                    ) : (
                        <span>Enter a question about the text:</span>
                    )}

                </div>

                <input
                    className={
                        emptyInput && question == '' ?
                            'user-question-empty' :
                            'user-question'
                    }
                    type='text'
                    value={question}
                    onChange={handleQuestion}
                    placeholder='Enter question here'
                />

            </div >

            <button
                onClick={handleButtonSubmit}
                className='user-submit-button'
            >
                Generate Response

            </button>

        </div >
    )
}

export default UserInput