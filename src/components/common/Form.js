import React from "react";

const Form = props => (
	<form class="center" onSubmit={props.getWeather}>
		<input class="container" type="text" name="city" placeholder="City..."/>
		<hr></hr>
		<input class="container" type="text" name="country" placeholder="Country..."/>
		<hr></hr>
		<button>Get Weather</button>
	</form>
);

export default Form;