import Switch from "./switch"
import { AiFillQuestionCircle } from 'react-icons/ai'
import { HiOutlineChartSquareBar } from 'react-icons/hi'
import { useContext } from "react"
import { GameContext } from '../context/gameContext';

function Header() {
  const { getWord } = useContext(GameContext)
  return (
    <header className="flex justify-between items-center rounded-2xl py-4 pl-5 pr-4 bg-lightGray dark:bg-darkLighGray">
      <AiFillQuestionCircle className="cursor-pointer select-none" size={28} />
      <h1 className="text-4xl col">WORDLE</h1>
      <div className="flex gap-4 items-center">
        <HiOutlineChartSquareBar className="cursor-pointer select-none" size={28} />
        <Switch />
      </div>
      <button onClick={getWord}>
        word
      </button>
    </header>
  )
}

export default Header