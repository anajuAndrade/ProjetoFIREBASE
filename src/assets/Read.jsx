import './style/Read.css'
import app from '../services/Firestore'
import { useState, useEffect } from 'react'

import {
    collection,
    getFirestore,
    getDocs
} from "firebase/firestore"

export default function Read() {

    const db = getFirestore(app);
    const funcionariosCollectionRef = collection(db, "funcionarios");
    const [funcionarios, setFuncionarios] = useState([]);

    const fetchFuncionarios = async () => {
        try {
            const data = await getDocs(funcionariosCollectionRef);
            setFuncionarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Erro ao buscar os funcionários:", error);
        }
    };

    useEffect(() => {
        fetchFuncionarios();
    }, []);

    return (
        <>
            <div className="readContainer">
                <h2>Lista de Funcionários Registrados</h2>
                <ul className="funcionariosList">
                    {funcionarios.length === 0 ? (
                        <p>Nenhum funcionário cadastrado.</p>
                    ) : (
                        funcionarios.map((funcionario) => (
                            <li key={funcionario.id} className="funcionarioCard">
                                <div>
                                    <p><strong>Nome:</strong> {funcionario.nome}</p>
                                    <p><strong>Email:</strong> {funcionario.email}</p>
                                    <p><strong>Endereço:</strong> {funcionario.endereco}</p>
                                    <p><strong>Telefone:</strong> {funcionario.telefone}</p>
                                    <p><strong>Registro Geral:</strong> {funcionario.registroGeral}</p>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

            </div>
        </>
    );
    
}