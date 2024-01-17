export default function Input({ label, inputValue, changedInput }) {
    return (
      <p>
        <label>{label}</label>
        <input onChange={changedInput} value={inputValue} type="number" />
      </p>
    );
}