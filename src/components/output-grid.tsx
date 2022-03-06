import { useContext, useState, useLayoutEffect } from 'react';
import { GameContext } from '../context/gameContext';

function createList(initialList: any [], filling: number): string [] {
  const newList: string [] = []
  for (let i = 0; i < filling; i++) {
    if (initialList[i]) {
      newList.push(initialList[i])
    } else {
      newList.push('')
    }
  }
  return newList
}

function OutputGrid() {
  const { inputList, currentInput, currentWord } = useContext(GameContext)
  const wordArr = currentWord.split('')
  const listToLetters: string [] = []
    inputList.forEach((word) => {
      const arr = word.split('')
      arr.forEach((letter) => listToLetters.push(letter))
    })
  const wordsOfCurrentWord = wordArr.concat(wordArr).concat(wordArr).concat(wordArr).concat(wordArr)
  const outputList = createList(listToLetters.concat(currentInput), 25)
  const validateBgColor = (idx: number) : string => {
    if (wordsOfCurrentWord.length && listToLetters[idx] !== '') {
      if (wordsOfCurrentWord[idx] === listToLetters[idx]) {
        return 'bg-primary'
      }
      if (wordsOfCurrentWord.includes(listToLetters[idx])) {
        return 'bg-yellow-400'
      } 
      if (listToLetters[idx]) {
        return 'bg-grayNoMatch'
      }
    }
    return 'bg-grayGrid dark:bg-darkLighGray'
  }
  return (
    <section className='grid grid-cols-5 gap-2 mx-28 my-16'>
      {outputList.map((item, idx) => <article className={`w-16 h-16 rounded-md  flex justify-center items-center ${validateBgColor(idx)}`} key={idx}>
        <p className='text-4xl'>{item.toUpperCase()}</p>
      </article>)}
    </section>
  )
}

export default OutputGrid