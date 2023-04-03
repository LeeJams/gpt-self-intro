export default function RadioForm(props) {
  return (
    <div className="flex items-center justify-start mb-4">
      {props.options.map((option, idx) => (
        <div className="flex items-center mr-10" key={idx}>
          <input
            type="radio"
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            name={props.name}
            value={option}
            checked={props.value === option}
            onChange={(e) => props.onInputChange(e, props.name)}
            id={option}
          />
          <label htmlFor={option} className="ml-2 block text-sm leading-5">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}