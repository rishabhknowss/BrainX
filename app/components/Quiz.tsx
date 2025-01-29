"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { generateQuizQuestion } from ".././actions/quiz"

interface QuizData {
  question: string
  options: string[]
  correctAnswer: string
}

export default function Quiz() {
  const [quizData, setQuizData] = useState<QuizData | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchNewQuestion = async () => {
    setIsLoading(true)
    const newQuizData = await generateQuizQuestion()
    setQuizData(newQuizData)
    setSelectedAnswer("")
    setIsCorrect(null)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchNewQuestion()
  }, []) //This is the line that was causing the warning.  Adding [] as a dependency makes it only run once on mount.  If you need it to run on other state changes, add those states as dependencies.

  const handleSubmit = () => {
    if (quizData) {
      setIsCorrect(selectedAnswer === quizData.correctAnswer)
    }
  }

  if (!quizData) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">AI-Generated Quiz</h2>
      <p className="mb-4 text-white">{quizData.question}</p>
      <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="mb-4">
        {quizData.options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option} className="text-white">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <Button onClick={handleSubmit} className="w-full mb-4" disabled={!selectedAnswer || isLoading}>
        Submit Answer
      </Button>
      <Button onClick={fetchNewQuestion} className="w-full" variant="outline" disabled={isLoading}>
        {isLoading ? "Loading..." : "Next Question"}
      </Button>
      {isCorrect !== null && (
        <p className={`mt-4 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "Correct! You earned 10 tokens." : "Incorrect. Try again!"}
        </p>
      )}
    </div>
  )
}

