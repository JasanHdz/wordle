import Header from "./components/header"
import Keyboard from "./components/keyboard"
import OutputGrid from "./components/output-grid"
import Wrapper from "./components/wrapper"
import GameProvider from "./context/gameContext"

function App() {
  return (
    <GameProvider>
      <main className="min-h-screen bg-white dark:prose-dark dark:bg-black">
        <Wrapper>
          <Header />
          <OutputGrid />
          <Keyboard />
        </Wrapper>
      </main>
    </GameProvider>
  )
}

export default App
