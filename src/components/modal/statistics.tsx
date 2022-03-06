import CountDown from '../count-down'
import { useContext } from 'react'
import { GameContext } from '../../context/gameContext'
import ModalContainer from './modal-container'

type Props = {
  onClose: () => void
}

function ModalStatistics({ onClose }: Props) {
  const { totalPlays, totalVictories, previuosWord, cleanPreviousWord } =
    useContext(GameContext)
  const handleCloseModal = () => {
    if (previuosWord) cleanPreviousWord()
    onClose()
  }
  return (
    <ModalContainer>
      <h3 className="text-4xl text-center pb-10 font-bold text-gray-900 dark:text-white">
        Estadísticas
      </h3>
      <div className="flex justify-between">
        <div>
          <h3 className="text-center text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {totalPlays}
          </h3>
          <p className="text-center text-xl text-gray-900 dark:text-white">
            Jugadas
          </p>
        </div>
        <div>
          <h3 className="text-center text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {totalVictories}
          </h3>
          <p className="text-center text-xl text-gray-900 dark:text-white">
            Victorias
          </p>
        </div>
      </div>
      {previuosWord && (
        <div className="text-center mt-12 mb-8">
          <p className="dark:text-white text-black text-lg">
            La palabra era: <strong>{previuosWord.toUpperCase()}</strong>
          </p>
        </div>
      )}
      <div className="text-center mt-12 mb-8">
        <p className="dark:text-white text-black text-lg">
          {`siguiente palabra`.toUpperCase()}
        </p>
        <CountDown />
      </div>
      <div className="text-center">
        <button
          onClick={handleCloseModal}
          type="button"
          className="text-white bg-primary focus:ring-4 font-medium rounded-md text-2xl px-16 py-2.5 text-center"
        >
          Aceptar
        </button>
      </div>
    </ModalContainer>
  )
}

export default ModalStatistics
