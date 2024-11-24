import './Delete.css'

export default function Delete() {
  return (
    <>
      <div className="deleteContainer">
        <h2>Preencha o campo a seguir com o Registro Geral do funcionário que será deletado.</h2>
        <form className="deleteForm">
          <label htmlFor="registro" className="deleteLabel">
            Registro Geral:
          </label>
          <input type="text" id="registro" className="deleteInput" placeholder='12.345.678-9'/>
          <button type="button" className="deleteButton">Deletar</button>
        </form>
      </div>
    </>
  );
}