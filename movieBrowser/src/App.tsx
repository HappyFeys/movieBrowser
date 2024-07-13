
import { Routes, Route} from 'react-router-dom'
import Discover from './component/Discover/Discover'
import Home from './component/Home/Home'
import Details from './component/Details/Details'

function App() {

  return (
    <>  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/details/:id" element={<Details />} />
    </Routes>
    </>
  )
}

export default App
