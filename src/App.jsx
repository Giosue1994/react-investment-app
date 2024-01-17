import { useState } from "react";

import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [inputChange, setInputChange] = useState({
    initialInvestment: 1000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });

  // aggiornare l'oggetto all'onChange passando chiave e valore
  function handleInputChange(key, value) {
    // passare una funzione che ritorna l'oggetto precedente con il nuovo valore
    setInputChange((prevInput) => {
      return {
        ...prevInput,
        [key]: +value, // il + davanti converte la stringa in numero
      };
    });

    // console.log(key + ": " + value);
  }

  return (
    <>
      <UserInput inputChange={inputChange} onChangeInput={handleInputChange} />
      <Results input={inputChange} />
    </>
  );
}

export default App;
