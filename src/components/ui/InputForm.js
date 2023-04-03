export default function InputForm(props) {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-2" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onInputChange(e, props.id)}
      />
    </div>
  );
}