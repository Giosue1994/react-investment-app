import Input from "./Input";

export default function UserInput({ onChangeInput, inputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          // two-way binding - alla funzione assegnare il nome della chiave dell'oggetto ed il valore ricavato dall'evento onChange
          changedInput={(event) =>
            onChangeInput("initialInvestment", event.target.value)
          }
          inputValue={inputChange.initialInvestment}
        />
        <Input
          label="Annual Investment"
          changedInput={(event) =>
            onChangeInput("annualInvestment", event.target.value)
          }
          inputValue={inputChange.annualInvestment}
        />
      </div>

      <div className="input-group">
        <Input
          label="Expected Return"
          changedInput={(event) =>
            onChangeInput("expectedReturn", event.target.value)
          }
          inputValue={inputChange.expectedReturn}
        />
        <Input
          label="Duration"
          changedInput={(event) =>
            onChangeInput("duration", event.target.value)
          }
          inputValue={inputChange.duration}
        />
      </div>
    </section>
  );
}