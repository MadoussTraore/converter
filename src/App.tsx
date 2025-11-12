import "./styles/App.scss";
import currencies from "./data/currencies.ts";


function App() {
	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">

				{currencies.map((currency)=>
					<li className="currency">
					<button className="currency__button" type="button">
						{currency.description}
					</button>
				</li>
				)}

				<li className="currency">
					<button className="currency__button" type="button">
						United States Dollar
					</button>
				</li>

			</ul>

			<footer className="result">
				<div className="result__amount">1.09</div>
				<div className="result__currency">United States Dollar</div>
			</footer>
		</div>
	);
}

export default App;