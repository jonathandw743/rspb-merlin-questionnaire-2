import logo from "./logo.svg";
import "./App.css";

import Slider from "./components/Inputs/Slider";
import TextInput from "./components/Inputs/TextInput";
import TextAreaInput from "./components/Inputs/TextAreaInput";

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
        <Question question={"What is your name?"} input={
          <TextInput onChange={(value) => {
            console.log(`could store this value: ${value} to be sent to the server on submit`);
          }}/>
        }/>
			</div>
		</div>
	);
}

export default App;
