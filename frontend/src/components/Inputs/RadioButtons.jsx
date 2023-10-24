import React, { useState, useRef, useEffect } from "react";
import useInputs from "../useInputs";

const RadioButtons = ({ inputs, onChange }) => {
	// const [value, setValue] = useState();
	const inputsHook = useInputs(inputs, onChange);
	const [activeInputIndex, setActiveInputIndex] = useState();
	// useEffect(
    //     () => {
    //         setValue(10);
    //     }, inputsHook.values
    // )

	// useEffect(() => {
	// 	console.log(value);
	// }, value);

	return (
		<div>
			{inputsHook.inputs.map((input, i) => (
				<div key={i}>
					<input
						type="radio"
						checked={activeInputIndex === i}
						onClick={() => {
							setActiveInputIndex(i);
							// setValue(inputsHook.values[i]);
							onChange(inputsHook.values[i]);
						}}
					/>
					{input}
				</div>
			))}
		</div>
	);
};

export default RadioButtons;
