import "./App.css";

function App() {
	const names = ["John", "David", "Michael", "Elaine", "Ben"];
	return (
		<div className="container">
			<h1> Names list</h1>
			<ul className="name-list">
				{names.map((name, index) => (
					<li className="name-item" key={index}>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
