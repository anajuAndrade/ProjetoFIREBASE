import './Rodape.css'
import { Link } from 'react-router-dom'

export default function Rodape() {
    return (
        <footer>

            <div className="itemRodape">
                <h3>Links Rápidos:</h3>
                <ul>
                    <li><Link to="/">Página inicial</Link></li>
                    <li><Link to="/read">Visualizar Funcionários</Link></li>
                    <li><Link to="/create">Adicionar Funcionário</Link></li>
                    <li><Link to="/delete">Deletar Funcionário</Link></li>
                </ul>
            </div>

            <div className="itemRodape">
                <h3>Desenvolvido por:</h3>
                <ul>
                    <li>Ana Julia Ev. Andrade</li>
                    <li>Isabelly Nathália M. da Rocha</li>
                    <li>Paola Abrantes</li>
                </ul>
            </div>
            
        </footer>
    );
}