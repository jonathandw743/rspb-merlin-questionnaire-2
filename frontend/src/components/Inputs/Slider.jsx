import { useState } from "react";

const Slider = ({ min, max, initialValue, onChange, showValue }) => {
	const [value, setValue] = useState(initialValue);
	return (
		<>
			<input
				onChange={(event) => {
					setValue(event.target.value);
					onChange(event.target.value);
				}}
				type="range"
				min={min}
				max={max}
				value={value}
				step="1"
			/>
			{showValue && value}
		</>
	);
};

Slider.defaultProps = {
	min: 0,
	max: 10,
	initialValue: 5,
	onChange: (value) => {
		console.log(value);
	},
	showValue: true,
};

export default Slider;
