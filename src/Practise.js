import { useReducer } from "react";
import reducer from "./Reducer";

function Practise() {
	const initialState = 0;
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<p>{state}</p>
			<div>
				<button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
				<button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
			</div>
		</div>
	);
}

export default Practise;
