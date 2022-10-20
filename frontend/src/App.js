import logo from "./logo.svg";
import "./App.css";

import Slider from "./components/Inputs/Slider";
import TextInput from "./components/Inputs/TextInput";
import TextAreaInput from "./components/Inputs/TextAreaInput";
import Options from "./components/Inputs/Options";

import Question from "./components/Question";

function App() {
	return (
		<div>
			<div>banner</div>
			<div>title</div>
			<div>
				<Slider />
				<br />
				<TextInput />
				<br />
				<TextAreaInput />
				<br />
				<Question
					question={"What is your name?"}
					input={
						<TextInput
							onChange={(value) => {
								console.log(`could store this value: ${value} to be sent to the server on submit`);
							}}
						/>
					}
				/>
				<br />
				<Question
					question={"What is your name?"}
					input={
						<Options
							// this would be loaded in so wouldn't look like this
							options={["Merlin update newsletter via email", "Merlin Yammer channel", "Spotlight talks", "Directorate updates", "Intranet"]}
							allowOther={true}
							onChange={(value) => {
								console.log(value);
							}}
						/>
					}
				/>
				<br />
			</div>
		</div>
	);
}

export default App;
