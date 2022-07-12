import "./styles.css";

const Modal = ({ handleOpenModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <header>
          <h2>Adicionar nova paleta</h2>
          <button onClick={handleOpenModal}>X</button>
        </header>
        <div>
          <input />
          <input />
          <input />
          <input />
          <button>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
