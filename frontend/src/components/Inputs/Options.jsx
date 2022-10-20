import { useState } from "react";

const Options = ({ options, allowOther, onChange }) => {
	const [value, setValue] = useState("");
	const [otherValue, setOtherValue] = useState("");
	const [otherSelected, setOtherSelected] = useState(otherValue == value);
	return (
		<ul>
			{options.map((option, index) => (
				<div key={index}>
					<button
						className={value == option ? "selected-button" : ""}
						onClick={() => {
							setValue(option);
							onChange(option);
							setOtherSelected(false);
						}}
					>
						{option}
					</button>
				</div>
			))}
			{allowOther ? (
				<div>
					<button className={otherSelected ? "selected-button" : ""} onClick={() => {
						setOtherSelected(true);
						setValue(otherValue);
						onChange(otherValue);
					}}>
						Other:
						<input type="text" onChange={(event) => {
							setOtherValue(event.target.value);
							onChange(event.target.value);
						}}/>
					</button>
				</div>
			) : (
				<></>
			)}
		</ul>
	);
};

export default Options;
