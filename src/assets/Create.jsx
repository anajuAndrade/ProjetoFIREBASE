import './Create.css'
import React from 'react'
import { useState } from 'react'
import app from '../services/Firestore'

import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore"


export default function Create() {

    const [nome, setNome] = useState("")
    const [registroGeral, setRegistroGeral] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")

    const db = getFirestore(app);

    async function criarDado(e) {
        e.preventDefault();
        try {
            const funcionario = await addDoc(collection(db, "funcionarios"), {
                email,
                endereco,
                nome,
                registroGeral,
                telefone
            });
            alert("Dados salvos com sucesso!", funcionario);
            setEmail("");
            setEndereco("");
            setNome("");
            setRegistroGeral("");
            setTelefone("");
        } catch (e) {
            alert("Erro ao adicionar documento! ", e);
        }
    }


    return (
        <div className="createContainer">
            <h2>Adicionar Funcionário</h2>
            <form onSubmit={criarDado} className="formC">
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        placeholder='Nome completo' />
                </label>

                <label>
                    Registro Geral:
                    <input
                        type="text"
                        name="registroGeral"
                        value={registroGeral}
                        onChange={(e) => setRegistroGeral(e.target.value)}
                        required
                        placeholder='12.345.678-9' />
                </label>


                <label>
                    E-mail:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='email@gmail.com' />
                </label>

                <label>
                    Telefone:
                    <input
                        type="tel"
                        name="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                        placeholder='11 1 1111-1111' />
                </label>

                <label>
                    Endereço:
                    <input
                        type="text"
                        name="endereco"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        required
                        placeholder='Rua XYZ, 111 - Cidade' />
                </label>


                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
    
}