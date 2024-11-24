import logoMenu from './img/logoMenu.jpg'
import './Cabecalho.css'
export default function Cabecalho(){
    return(
        <>
        <header>
            <nav className="cabecalho">
                <img src={logoMenu} className="logo"></img>
            </nav>
        </header>
        </>
    );
}