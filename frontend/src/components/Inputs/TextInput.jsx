import { useState } from "react";

const TextInput = ({ width, initialValue, onChange }) => {
	const [value, setValue] = useState(initialValue);
	return (
		<input
			onChange={(event) => {
				setValue(event.target.value);
				onChange(event.target.value);
			}}
			type="text"
			value={value}
		/>
	);
};

TextInput.defaultProps = {
	initialValue: "",
	onChange: (value) => {
		console.log(value);
	},
};

export default TextInput;