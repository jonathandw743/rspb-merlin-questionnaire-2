import React, { useState } from "react";

// a way to get some inputs and be able to read their values from outside the element
const useInputs = (inputs, onChange, activeChecker) => {
	const [values, setValues] = useState(inputs.map((input) => input.props.initialValue));
	let newInputs = inputs.map((input, i) => ({
		...input,
		props: {
			...input.props,
			onChange:
				typeof input.props.onChange === "undefined"
					? undefined
					: (value) => {
							if (activeChecker(i)) {
								input.props.onChange(value);
								onChange(value);
							}
							setValues((prev) => {
								let next = [...prev];
								next[i] = value;
								return next;
							});
					  },
		},
	}));
	return {
		inputs: newInputs,
		values: values,
	};
};

export default useInputs;
