import { useState } from "react";
import { apiUrl } from "../constants/routes";
import { Form } from "../components";

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = { email, password };
		const response = await fetch(`${apiUrl}/api/auth`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		console.log(await response.text());
	};

	return (
		<Form>
			<Form.SmallForm>
				<Form.Title>Sign In</Form.Title>
				<Form.Base onSubmit={handleSubmit}>
					<Form.Input
						type="text"
						placeholder="Email Address"
						onChange={({ target }) => setEmail(target.value)}
					/>
					<Form.Input
						type="password"
						placeholder="Password"
						onChange={({ target }) => setPassword(target.value)}
					/>
					<Form.Button>Log In </Form.Button>
				</Form.Base>
				<Form.Text>
					Don't have an account? <Form.Link to="#">Sign Up</Form.Link>
				</Form.Text>
			</Form.SmallForm>
		</Form>
	);
};

export default Signin;
