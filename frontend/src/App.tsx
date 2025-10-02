import './App.css'
import UserInput from './components/UserInput'
import ModelOutput from './components/ModelOutput'
import { useState } from 'react'
import type { UserInputData } from './Interfaces/UserInputData'

function App() {

    const [userInputData, setUserInputData] =
        useState<UserInputData | null>(null)

    const handleUserInputData = (data: UserInputData) => {
        setUserInputData(data)
    }

    return (

        <div
            className='app-container'
        >
            <header
                className='app-header'
            >
                <h1
                    className='app-title'
                >
                    Question Answering Web Application
                </h1>

            </header>

            <main
                className='main-app-component'
            >
                <div
                    className='input-output'
                >
                    <UserInput
                        onDataSend={handleUserInputData}
                    />

                    <ModelOutput
                        userAnswer={userInputData?.userAnswer}
                        userQuestion={userInputData?.userQuestion}
                    />
                </div>
            </main>
        </div>
    )
}

export default App
