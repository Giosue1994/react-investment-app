export default function Input({ label, changedInput }) {
    return (
      <p>
        <label>{label}</label>
        <input onChange={changedInput} type="number" />
      </p>
    );
}