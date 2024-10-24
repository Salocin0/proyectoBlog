import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import DetalleBlog from './pages/Home/DetalleBlog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs/:id' element={<DetalleBlog/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
