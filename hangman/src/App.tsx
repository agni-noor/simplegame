import { useCallback, useEffect, useState } from "react"



import words from "./wordList.json"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
 const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log(wordToGuess)


  return (
   <h1>Hi!</h1> 
  )
}

export default App
