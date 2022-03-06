import { useContext } from 'react';
import { GameContext } from '../context/gameContext';

function CountDown() {
  const { minsArr, secondsArr } = useContext(GameContext)
  return (
    <p className="dark:text-white text-black text-2xl">
      <span>{minsArr[0]}</span>
      <span>{minsArr[1]}</span>
      <span>:</span>
      <span>{secondsArr[0]}</span>
      <span>{secondsArr[1]}</span>
    </p>
  )
}

export default CountDown