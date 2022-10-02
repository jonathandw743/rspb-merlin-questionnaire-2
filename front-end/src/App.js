import "./App.css";

const App = () => {
	return (
		<div>
			App
			<button
				onClick={() => {
					console.log("posting info");
					fetch("http://localhost:3001/post-data", {
						method: 'POST',
						headers: {
							'Content-Type': "application/json"
						},
						body: JSON.stringify({"some posted data": "47832947"})
					})
				}}
			>
				send a info to server
			</button>
			<button
				onClick={() => {
					console.log("getting info");
					fetch("http://localhost:3001/get-data")
					.then((res) => {
						res.json().then((data) => {
							console.log(data);
						});
					});
				}}
			>
				get info from server
			</button>
		</div>
	);
};

export default App;
