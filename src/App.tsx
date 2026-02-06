import { useState } from "react"
import {data} from "../src/data/data.tsx"

function App() {
  const [answers,setAnswers] = useState("")
  const Yes = () => {
    setAnswers(data.answer.yes)
  }
  const No = () => {
    setAnswers(data.answer.no)
  }
  return (
    <div className="bg-gradient-to-br from-zinc-950 via-emerald-900 to-lime-400 min-h-screen text-white flex flex-col items-center justify-center bg-[length:200%_200%] animate-bg">
      <div>
        <h1 className="text-4xl bg-gradient-to-r from-emerald-300 via-lime-200 to-emerald-300 bg-[length:200%_auto] animate-text bg-clip-text text-transparent">{data.question}</h1>
        <div className="flex justify-around mt-4 mb-4 text-2xl bg-gradient-to-r from-emerald-300 via-lime-200 to-emerald-300 bg-[length:200%_auto] animate-text bg-clip-text text-transparent">
          <button onClick={Yes}>Yes</button>
          <button onClick={No}>No</button>
        </div>
      </div>
      <p className="text-l bg-gradient-to-r from-emerald-300 via-lime-200 to-emerald-300 bg-[length:200%_auto] animate-text bg-clip-text text-transparent">{answers}</p>
    </div>
  )
}

export default App
