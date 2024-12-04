import './Cards.css'
import { Link } from 'react-router-dom'

export default function Cards() {
    return (
        <section className="cardsContainer">
            <Link to="/read" className="card">
                <div>Visualizar Funcionários</div>
            </Link>
            <Link to="/create" className="card">
                <div>Adicionar Funcionário</div>
            </Link>
            <Link to="/delete" className="card">
                <div>Deletar Funcionário</div>
            </Link>
        </section>
    );
}