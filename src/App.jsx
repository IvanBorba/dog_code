import "./App.css";
import {
  IoIceCreamOutline,
  IoAddCircleOutline,
  IoBagCheckOutline,
} from "react-icons/io5";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [url, setUrl] = useState(
    "https://elgeladon-api.herokuapp.com/paletas/listar-todas"
  );
  const [allPaletas, setAllPaletas] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    fetchPaletasFromDb();
  }, []);

  const fetchPaletasFromDb = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllPaletas(data);
      });
  };

  return (
    <main>
      <header className="header">
        <div className="logo-container">
          <IoIceCreamOutline size={"40px"} className="icon" />
          <h1>El Geladon</h1>
        </div>
        <div>
          <IoAddCircleOutline
            size={"20px"}
            className="icon"
            onClick={handleOpenModal}
          />
          <IoBagCheckOutline
            size={"20px"}
            style={{ marginLeft: "10px" }}
            className="icon"
            onClick={() => console.log(allPaletas)}
          />
        </div>
      </header>
      {allPaletas.map((elem) => (
        <div>{elem.sabor}</div>
      ))}

      {openModal && <Modal handleOpenModal={handleOpenModal} />}
    </main>
  );
};

export default App;
