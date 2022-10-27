import logo from "./logo.svg";
import "./App.css";

import Question from "./components/Question";

import Slider from "./components/Inputs/Slider";
import TextInput from "./components/Inputs/TextInput";
import TextAreaInput from "./components/Inputs/TextAreaInput";
import Options from "./components/Inputs/Options";
import Checkboxes from "./components/Inputs/Checkboxes";
import RadioButtons from "./components/Inputs/RadioButtons";
import ImmutableInput from "./components/Inputs/ImmutableInput";

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
				<Question
					question={"What is your name?"}
					input={
						<Checkboxes
							// this would be loaded in so wouldn't look like this
							options={["Merlin update newsletter via email", "Merlin Yammer channel", "Spotlight talks", "Directorate updates", "Intranet"]}
							onChange={(value) => {
								console.log(value);
							}}
						/>
					}
				/>
				<Question
					question={"How are you?"}
					input={
						<RadioButtons
							onChange={(value) => {
								console.log(value);
							}}
							inputs={[<Slider />, <TextInput />, <TextInput />, <ImmutableInput initialValue={"hello"} />]}
						/>
					}
				/>
				<Question
					question={"How would you rate something out of 10? If you do not know, select n/a."}
					input={
						<RadioButtons
							onChange={(value) => {
								console.log(value);
							}}
							inputs={[<Slider min={0} max={10} initialValue={5} />, <ImmutableInput initialValue={"n/a"} />]}
						/>
					}
				/>
			</div>
		</div>
	);
}

export default App;
