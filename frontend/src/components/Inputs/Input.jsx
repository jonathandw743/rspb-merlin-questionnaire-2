import { useState } from "react";

const Input = (props) => {
	const [value, setValue] = useState(props.value);
	return (
		<input props={{
			...props,
			onChange: (event) => {
				setValue(event.target.value);
				props.onChange(event.target.value);
			},
			value: value,
		}} />
	);
};

export default Input;
