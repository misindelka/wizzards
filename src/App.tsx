// external imports
import { Routes, Route } from 'react-router-dom'

// internal imports
import { Home } from './pages/Home'
import { WizzardList } from './pages/WizzardList'
import { WizzardProvider } from './context/WizzardContext'

const App = () => {
  return (
    <div>
      <WizzardProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wizzards" element={<WizzardList />} />
        </Routes>
      </WizzardProvider>
    </div>
  )
}

export default App
