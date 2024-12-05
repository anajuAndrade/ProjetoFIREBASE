import './App.css'
import Cabecalho from './assets/Cabecalho'
import Rodape from './assets/Rodape.jsx'
import Read from './assets/Read.jsx'
import Create from './assets/Create.jsx'
import Delete from './assets/Delete.jsx'
import Cards from './assets/Cards.jsx'
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