import { useState } from "react";
import "./styles/App.css";
import InputForm from "./components/InputFormMode";
import Table from "./components/Table";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <div className="container">
        <h1 className="title">2024 파리 올림픽</h1>
        <InputForm countries={countries} setCountries={setCountries} />

      </div>
    </>
  );
}

export default App;
