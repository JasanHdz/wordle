import ModalContainer from './modal-container'
import { useContext } from 'react';
import { GameContext } from '../../context/gameContext';

type Props = {
  onClose: () => void
}

function ModalInstructions({ onClose }: Props) {
  const { currentWord, handleUpateWord } = useContext(GameContext)
  const handleCloseModal = () => {
    if (!currentWord) {
      handleUpateWord()
    }
    onClose()
  }
  return (
    <ModalContainer>
      <h3 className="text-4xl text-center mb-8 dark:text-white">Cómo Jugar</h3>
      <p className="dark:text-white mb-4">
        Adivina la palabra oculta en cinco intentos.
        <br />
        <br />
        Cada intento debe ser una palabra válida de 5 letras.
        <br />
        <br />
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>
      <h4 className="dark:text-white mb-6 font-bold">Ejemplos</h4>
      <div className='flex gap-2 justify-center mb-4'>
        <KeyBox letter='g' bgColor='bg-primary' />
        <KeyBox letter='a' />
        <KeyBox letter='t' />
        <KeyBox letter='o' />
        <KeyBox letter='s' />
      </div>
      <p className="dark:text-white mb-5">La letra <strong>G</strong> está en la palabra y en la posición correcta</p>
      <div className='flex gap-2 justify-center mb-4'>
        <KeyBox letter='v' />
        <KeyBox letter='o' />
        <KeyBox letter='c' bgColor="bg-secondary" />
        <KeyBox letter='a' />
        <KeyBox letter='l' />
      </div>
      <p className="dark:text-white mb-5">La letra <strong>C</strong> está en la palabra pero no en la posición correcta</p>
      <div className='flex gap-2 justify-center mb-4'>
        <KeyBox letter='c' />
        <KeyBox letter='a' />
        <KeyBox letter='n' />
        <KeyBox letter='t' />
        <KeyBox letter='o' bgColor='bg-grayNoMatch' />
      </div>
      <p className="dark:text-white mb-9">La letra <strong>O</strong> no está en la palabra</p>
      <p className="dark:text-white mb-8">Puede haber letras repetidas. Las pistas son <br /> independientes para cada letra.</p>
      <div className="text-center">
        <p className="dark:text-white mb-8">¡Una palabra nueva cada 5 minutos!</p>
        <button
          onClick={handleCloseModal}
          type="button"
          className="text-white bg-primary focus:ring-4 font-medium rounded-md text-2xl px-16 py-2.5 text-center"
        >
          ¡Jugar!
        </button>
      </div>
    </ModalContainer>
  )
}

export default ModalInstructions

type KeyProps = {
  letter: string,
  bgColor?: string,
}

function KeyBox({ letter, bgColor } : KeyProps) {
  return (
    <div className={`text-lg rounded-md box-border flex justify-center items-center w-16 h-16 dark:text-white ${bgColor ? bgColor : 'border'}`}>
      <p className="font-medium">{letter.toUpperCase()}</p>
    </div>
  )
}
