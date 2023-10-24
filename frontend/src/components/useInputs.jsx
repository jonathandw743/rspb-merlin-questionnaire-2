import React, { useState } from "react";

// a way to get some inputs and be able to read their values from outside the element
const useInputs = (inputs) => {
	const [values, setValues] = useState(inputs.map((input) => input.props.initialValue));
	// inputs.forEach((input, i) => {
	// 	input.props.onChange = (value) => {
	// 		input.props.onChange(value);
	// 		setValues((prev) => {
	// 			let next = [...prev];
	// 			next[i] = value;
	// 			return next;
	// 		});
	// 	};
	// });
	return {
		inputs: inputs.map((input, i) => {
			return {...input, props: {...input.props, onChange: (value) => {
				input.props.onChange(value);
				setValues((prev) => {
					let next = [...prev];
					next[i] = value;
					return next;
				})
			}}}
		}),
		values: values,
	};
};

export default useInputs;
