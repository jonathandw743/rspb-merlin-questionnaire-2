import React, { useState } from "react";

const ImmutableInput = ({ initialValue }) => {
	const [value, setValue] = useState(initialValue);
	return <>{value}</>;
};

ImmutableInput.defaultProps = {
	initialValue: "",
};

export default ImmutableInput;
