import "./App.css";

const App = () => {
	return (
		<div>
			App
			<button
				onClick={() => {
					console.log("sending info");
				}}
			>
				send a info to server
			</button>
			<button
				onClick={() => {
					console.log("getting info");
					fetch("http://localhost:3001/greet/jonathan")
					.then((res) => {
						console.log(res.json());
					});
				}}
			>
				get info from server
			</button>
		</div>
	);
};

export default App;
