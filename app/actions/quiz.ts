"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export async function generateQuizQuestion(): Promise<QuizQuestion | null> {
  const prompt = `Generate a quiz question with 4 options and the correct answer. Format the response as a JSON object with the following structure:
  {
    "question": "The question text",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": "The correct option (must be exactly the same as one of the options)"
  }
  Ensure the response is a valid JSON string and the correctAnswer matches exactly one of the options.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Sanitize the response by removing backticks and other invalid characters
    const sanitizedText = text.replace(/`/g, '').trim();

    try {
      const quizData = JSON.parse(sanitizedText) as QuizQuestion;
      
      // Validate the quiz data structure
      if (!quizData.question || !Array.isArray(quizData.options) || 
          quizData.options.length !== 4 || !quizData.correctAnswer || 
          !quizData.options.includes(quizData.correctAnswer)) {
        console.error("Invalid quiz data structure:", quizData);
        return null;
      }

      return quizData;
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError);
      return null;
    }
  } catch (error) {
    console.error("Error generating quiz question:", error);
    return null;
  }
}