import { createContext, useEffect, useLayoutEffect, useState } from 'react'
import words from '../assets/words.json'
import getCountDown from '../utils/get-count-down'

interface IGameContext {
  getWord: () => string
  toggleModalStatistics: () => void
  toggleModalInstructions: () => void
  handleUpateWord: () => void
  addLetterToCurrentInput: (letter: string) => void
  deleteWord: () => void
  handleAddWord: () => void
  cleanPreviousWord: () => void
  isOpenModalStatistics: boolean
  isOpenModalInstructions: boolean
  currentDate: Date
  currentWord: string
  minsArr: string[]
  secondsArr: string[]
  totalPlays: number
  totalVictories: number
  currentInput: string[]
  inputList: string[]
  previuosWord: string
}

export const GameContext = createContext<IGameContext>({
  getWord: () => '',
  toggleModalStatistics: () => {},
  toggleModalInstructions: () => {},
  handleUpateWord: () => {},
  isOpenModalStatistics: false,
  isOpenModalInstructions: false,
  currentDate: new Date(),
  currentWord: '',
  minsArr: [],
  secondsArr: [],
  totalPlays: 0,
  totalVictories: 0,
  currentInput: [],
  inputList: [],
  addLetterToCurrentInput: () => {},
  deleteWord: () => {},
  handleAddWord: () => {},
  cleanPreviousWord: () => {},
  previuosWord: ''
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

function GameProvider({ children }: Props) {
  const [currentWord, setCurrentWord] = useState('')
  const [inputList, setInputList] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState<string[]>([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [totalPlays, setTotalPlays] = useState(0)
  const [totalVictories, setTotalVictories] = useState(0)
  const [isOpenModalStatistics, setIsOpenModalStatistics] = useState(false)
  const [isOpenModalInstructions, setIsOpenModalInstructions] = useState(false)
  const [previousWords, setPreviousWords] = useState<string[]>([])
  const [previuosWord, setPreviousWord] = useState('')
  const generateWord = (): string => {
    return words[Math.floor(Math.random() * words.length)]
  }
  const handleWordNotRepeat = (): string => {
    const word = generateWord()
    if (previousWords.includes(word)) {
      return handleWordNotRepeat()
    }
    const values = [...previousWords]
    values.push(word)
    setPreviousWords(values)
    return word
  }
  const toggleModalStatistics = () =>
    setIsOpenModalStatistics(!isOpenModalStatistics)
  const toggleModalInstructions = () => setIsOpenModalInstructions(!isOpenModalInstructions)
  const handleOpenModalStatistics = () => setIsOpenModalStatistics(true)
  const cleanPreviousWord = () => setPreviousWord('')
  const handleNewCountDown = () => {
    const fiveMinutesLater = new Date()
    fiveMinutesLater.setMinutes(fiveMinutesLater.getMinutes() + 5)
    setCurrentDate(fiveMinutesLater)
  }
  const handleUpateWord = () => {
    const word = handleWordNotRepeat()
    setCurrentWord(word)
    handleNewCountDown()
  }

  const endGame = (isWon?: boolean) => {
    setTimeout(() => {
      handleUpateWord()
      setInputList([])
      setCurrentInput([])
      handleOpenModalStatistics()
    }, 500)
    if (currentWord) setTotalPlays((value) => value + 1)
    if (isWon) {
      setTotalVictories((value) => value + 1)
    } else {
      setPreviousWord(currentWord)
    }
  }

  const addLetterToCurrentInput = (letter: string) => {
    if (currentInput.length < 5) {
      const values: string[] = [...currentInput]
      values.push(letter)
      setCurrentInput(values)
    }
  }
  const deleteWord = () => {
    if (currentInput.length) {
      const values: string[] = [...currentInput]
      values.pop()
      setCurrentInput(values)
    }
  }

  const handleAddWord = () => {
    if (currentInput.length === 5) {
      const values = [...inputList]
      values.push(currentInput.join(''))
      setCurrentInput([])
      setInputList(values)
    } else {
      alert('Necesitas completar la palabra con 5 letras :(')
    }
  }

  const [mins, setMins] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const minsArr = mins.split('')
  const secondsArr = seconds.split('')

  useLayoutEffect(() => {
    // que el juego comience despues del modal de inicio
    if (!localStorage.hasInstructions) {
      setIsOpenModalInstructions(true)
      localStorage.hasInstructions = true
    } else {
      handleUpateWord()
      handleOpenModalStatistics()
    }
  }, [])

  useEffect(() => {
    if (inputList.includes(currentWord)) {
      endGame(true)
    }
    if (inputList.length === 5 && !inputList.includes(currentWord)) {
      endGame()
    }
  }, [inputList])

  useEffect(() => {
    if (currentWord) {
      const intervalo = setInterval(() => {
        let t = getCountDown(currentDate)
        if (t.remainTime <= 0) {
          clearInterval(intervalo)
          endGame()
        } else {
          setMins(t.remainMinutes)
          setSeconds(t.remainSeconds)
        }
      }, 1000)
      return () => {
        clearInterval(intervalo)
      }
    }
  }, [currentDate])
  return (
    <GameContext.Provider
      value={{
        getWord: handleWordNotRepeat,
        toggleModalStatistics,
        isOpenModalStatistics,
        toggleModalInstructions,
        isOpenModalInstructions,
        handleUpateWord,
        currentDate,
        currentWord,
        minsArr,
        secondsArr,
        totalPlays,
        totalVictories,
        currentInput,
        addLetterToCurrentInput,
        deleteWord,
        handleAddWord,
        inputList,
        previuosWord,
        cleanPreviousWord,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
