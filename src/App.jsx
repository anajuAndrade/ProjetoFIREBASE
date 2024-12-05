import './App.css'
import Cabecalho from './assets/Cabecalho'
import Rodape from './assets/Rodape'
import Read from './assets/Read'
import Create from './assets/Create'
import Delete from './assets/Delete'
import Cards from './assets/Cards'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <>
                <Cabecalho />
                
                <div className="espacamento">
                    <Routes>
                        <Route path="/" element={<Cards />} />
                        <Route path="/read" element={<Read />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/delete" element={<Delete />} />
                    </Routes>
                </div>
                
                <Rodape />
            </>
        </Router>
    );
}

export default App;