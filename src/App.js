import "./index.css";
import { useEffect, useState } from "react";
import Cuce from "./cuce";
import Deve from "./deve";

function App() {
  const [devecuce, setDeveCuce] = useState(true);
  const [sayac, setSayac] = useState(0);
  const [tıklama, setTıklama] = useState(false);
  const [click, setClick] = useState(false);

  const button = document.querySelector("button");

  useEffect(() => {
    const aralık = setInterval(() => {
      const randomElement = Math.random() > 0.5 ? true : false;

      setDeveCuce(randomElement);
      setTıklama(false);
      setClick(false);
    }, 2000);

    return () => {
      clearInterval(aralık);
    };
  });

  function devHesapla(e) {
    if (!tıklama && !click) {
      setClick(true);
      setTıklama(true);

      devecuce
        ? setSayac((eskideğer) => eskideğer + 1)
        : setSayac((eskideğer) => eskideğer - 1);
    }
  }

  function cucHesapla(e) {
    if (!tıklama && !click) {
      setClick(true);
      setTıklama(true);
      devecuce
        ? setSayac((eskideğer) => eskideğer - 1)
        : setSayac((eskideğer) => eskideğer + 1);
    }
  }

  return (
    <>
      <div className="main">
        <div className="row">
          <h2>Deve Cüce</h2>
          {devecuce ? <Deve /> : <Cuce />}
          <div className="button-container">
            <button
              onClick={devHesapla}
              className={` btn btn-primary dev-button ${
                click ? "opacity" : ""
              }`}
            >
              Deve
            </button>
            <button
              onClick={cucHesapla}
              className={`btn btn-primary cuc-button ${click ? "opacity" : ""}`}
            >
              Cüce
            </button>
            <div className="p-2 skor">Skor = {sayac} </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
