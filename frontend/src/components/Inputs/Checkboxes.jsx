import { useState } from "react";

const Checkboxes = ({ options, onChange }) => {
	const [value, setValue] = useState([]);
	return (
		<ul>
			{options.map((option, index) => (
				<div key={index}>
					<input
						type="checkbox"
						onChange={(event) => {
							const index = value.indexOf(option);
							console.log(index);
							if (index > -1) {
								console.log("removing");
								const newValue = value.filter((e) => e != option);
								setValue(newValue);
								onChange(newValue);
							} else {
								console.log("adding");
								const newValue = [...value, option];
								setValue(newValue);
								onChange(newValue);
							}
						}}
						checked={value.includes(option)}
					/>
					{option}
				</div>
			))}
		</ul>
	);
};

export default Checkboxes;
