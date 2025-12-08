import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Program from './pages/Program'
import Research from './pages/Research'
import Resources from './pages/Resources'
import Tools from './pages/Tools'

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/tools" element={<Tools />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
