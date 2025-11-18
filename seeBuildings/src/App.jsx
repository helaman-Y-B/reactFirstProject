import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './welcomePage/Welcome.jsx'
import SeeBuildings from './seeBuildngsPage/seeBuildings.jsx'
import Header from './frames/header.jsx'
import Footer from './frames/footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/see-buildings" element={<SeeBuildings />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
