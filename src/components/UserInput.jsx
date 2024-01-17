import Input from "./Input";
import { useState } from "react";

export default function UserInput() {

  const [inputChange, setInputChange] = useState('');

  function handleInpuntChange(event) {
    setInputChange(event.target.value);
    console.log(inputChange);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          changedInput={handleInpuntChange}
          value={inputChange}
        />
        <Input
          label="Annual Investment"
          changedInput={handleInpuntChange}
          value={inputChange}
        />
      </div>

      <div className="input-group">
        <Input
          label="Expected Return"
          changedInput={handleInpuntChange}
          value={inputChange}
        />
        <Input
          label="Duration"
          changedInput={handleInpuntChange}
          value={inputChange}
        />
      </div>
    </div>
  );
}