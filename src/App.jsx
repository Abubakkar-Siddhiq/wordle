import { useState } from 'react'
import Keyboard from './components/Keyboard'
import GameLayout from './Layout/GameLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <GameLayout />
    </main>
  )
}

export default App
