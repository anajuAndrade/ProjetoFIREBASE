import app from '../services/Firestore'
import './Delete.css'

import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore"

import { useState, useEffect } from 'react'

export default function Delete() {

  const [funcionarios, setFuncionarios] = useState([]);

  const db = getFirestore(app);
  const funcionariosCollectionRef = collection(db, "funcionarios");

  const fetchFuncionarios = async () => {
    const data = await getDocs(funcionariosCollectionRef);
    setFuncionarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteFuncionario = async (id) => {
    try {
      const funcionarioDoc = doc(db, "funcionarios", id);
      await deleteDoc(funcionarioDoc);

      alert("Funcionário deletado com sucesso!");
      fetchFuncionarios();
    } catch (error) {
      alert("Erro ao tentar deletar o funcionário.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFuncionarios();
  }, []);

  return (
    <>
      <div className="deleteContainer">
        <h2><strong>Lista de Funcionários</strong></h2>
        <ul className="funcionariosList">
          {funcionarios.length === 0 ? (
            <p>Não há funcionários registrados.</p>
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
                <button
                  className="deleteButton"
                  onClick={() => deleteFuncionario(funcionario.id)}
                >
                  Deletar
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );

}