import Header from './components/header'
import Keyboard from './components/keyboard'
import ModalStatistics from './components/modal/statistics'
import OutputGrid from './components/output-grid'
import Wrapper from './components/wrapper'
import { GameContext } from './context/gameContext'
import { useContext } from 'react'
import Portal from './components/portal'
import Overlay from './components/overlay'
import ModalInstructions from './components/modal/instructions';

function App() {
  const {
    toggleModalStatistics,
    isOpenModalStatistics,
    isOpenModalInstructions,
    toggleModalInstructions
  } = useContext(GameContext)
  return (
    <main className="min-h-screen bg-white dark:prose-dark dark:bg-black">
      <Wrapper>
        <Header />
        <OutputGrid />
        <Keyboard />
      </Wrapper>
      {isOpenModalStatistics && (
        <Portal>
          <Overlay>
            <ModalStatistics onClose={toggleModalStatistics} />
          </Overlay>
        </Portal>
      )}
      {isOpenModalInstructions && (
        <Portal>
          <Overlay>
            <ModalInstructions onClose={toggleModalInstructions} />
          </Overlay>
        </Portal>
      )}
    </main>
  )
}

export default App
