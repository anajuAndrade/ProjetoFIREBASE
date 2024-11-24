import './Create.css';
import React, { useState } from 'react';

export default function Create() {
    // Estados para armazenar os valores dos campos
    const [formData, setFormData] = useState({
        nome: '',
        rg: '',
        dataNascimento: '',
        email: '',
        telefone: '',
        endereco: '',
        estadoCivil: ''
    });

    // Função para mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Função para o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do funcionário:', formData);
    };

    return (
        <div className="createContainer">
            <h2>Adicionar Funcionário</h2>
            <form onSubmit={handleSubmit} className="createForm">
                <label>
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    placeholder='Seu nome'/>
                </label>

                <label>
                    Registro Geral:
                    <input
                        type="text"
                        name="rg"
                        value={formData.rg}
                        onChange={handleChange}
                        required
                    placeholder='12.345.678-9'/>
                </label>

                <label>
                    Data de Nascimento:
                    <input
                        type="date"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    E-mail:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    placeholder='email@gmail.com'/>
                </label>

                <label>
                    Telefone:
                    <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    placeholder='11 1 1111-1111'/>
                </label>

                <label>
                    Endereço:
                    <input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                        required
                    placeholder='Rua XYZ, 111 - Cidade'/>
                </label>

                <label>
                    Estado Civil:
                    <select
                        name="estadoCivil"
                        value={formData.estadoCivil}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="solteiro">Solteiro(a)</option>
                        <option value="casado">Casado(a)</option>
                        <option value="divorciado">Divorciado(a)</option>
                        <option value="viuvo">Viúvo(a)</option>
                    </select>
                </label>

                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}
