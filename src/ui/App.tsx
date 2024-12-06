import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(9999)

  return (
    <>
      <h1>ВЫ МИНИСТР ЭКОНОМИКИ!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 5)}>
          Курс рубля: {count}
        </button>
        <p>
          СПАСИ РУБЛЬ ОТ ОБВАЛА! КЛИКАЙ КАК МОЖНО БЫСТРЕЕ!
        </p>
      </div>
      <p className="read-the-docs">
        ЕСЛИ ВЫ НЕ УСПЕЕТЕ, ТО ОТПРАВИТЕСЬ НА СВО
      </p>
    </>
  )
}

export default App
