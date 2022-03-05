import Header from "./components/header"
import Keyboard from "./components/keyboard"
import OutputGrid from "./components/output-grid"
import Wrapper from "./components/wrapper"

function App() {
  return (
    <main className="min-h-screen bg-white dark:prose-dark dark:bg-black">
      <Wrapper>
        <Header />
        <OutputGrid />
        <Keyboard />
      </Wrapper>
    </main>
  )
}

export default App
