import { createContext, Provider, useEffect, useState } from 'react';
import words from '../assets/words.json'

interface IGameContext {
  getWord: () => string,
}

export const GameContext = createContext<IGameContext>({
  getWord: () => '',
})

type Props = {
  children: JSX.Element | JSX.Element[];
}

function GameProvider({ children } : Props) {
  const [currentWord, setCurrentWord] = useState('')
  const previousWords: string [] = []
  const generateWord = () : string => {
    return words[Math.floor((Math.random() * words.length))]
  }
  const handleWordNotRepeat = () : string => {
    const word = generateWord()
    if (previousWords.includes(word)) {
      return handleWordNotRepeat()
    }
    previousWords.push(word)
    // TODO borrar al terminar
    console.log(word)
    console.log(previousWords)
    return word
  }
  // useEffect(() => {

  // }, [])
  return (
    <GameContext.Provider value={{
      getWord: handleWordNotRepeat,
    }}>{children}</GameContext.Provider>
  )
}

export default GameProvider