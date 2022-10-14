import { useState } from "react";

const TextAreaInput = ({ rows, cols, initialValue, onChange }) => {
	const [value, setValue] = useState(initialValue);
	return (
		<textarea
			onChange={(event) => {
				setValue(event.target.value);
				onChange(event.target.value);
			}}
			rows={rows}
			cols={cols}
            value={value}
		/>
	);
};

TextAreaInput.defaultProps = {
	rows: 5,
	cols: 50,
	initialValue: "",
	onChange: (value) => {
		console.log(value);
	},
};

export default TextAreaInput;
