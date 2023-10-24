import React, { useState } from "react";

const useInput = (input) => {
	const [value, setValue] = useState(input.props.initialValue);

	return {
		render: {...input, props: {...input.props, onChange: (value) => {
			input.props.onChange(value);
			setValue(value);
		}}},
		value,
	};
};

export default useInput;
