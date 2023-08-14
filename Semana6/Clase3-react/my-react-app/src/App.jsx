import { useState } from 'react'
import './App.css'
import './index.css'
import Card from './Card'
import { CardChildren } from './CardChildren'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title="Hola Mundo" text="que pashaaaaa"></Card>
      <CardChildren title="declarado con Arrow function">Esto es el children papá</CardChildren>
    </>
  )
}

export default App



