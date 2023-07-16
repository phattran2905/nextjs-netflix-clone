"use client";
import Input from "@/components/Input";
import { useCallback, useState } from "react";

type Props = {};
export default function Form({}: Props) {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [variant, setVariant] = useState<string>("login");
	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
	}, []);

	const onSubmitForm = () => {};

	return (
		<>
			<h2 className="text-white font-semibold text-4xl mb-8">
				{variant === "login" ? "Sign In" : "Create an account"}
			</h2>
			<div className="flex flex-col gap-4">
				{variant === "register" && (
					<Input
						label="Username"
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						value={username}
						type="text"
					/>
				)}
				<Input
					label="Email"
					onChange={(e) => setEmail(e.target.value)}
					id="email"
					value={email}
					type="email"
				/>
				<Input
					label="Password"
					onChange={(e) => setPassword(e.target.value)}
					id="password"
					value={password}
					type="password"
				/>
			</div>
			<button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
				{variant === "login" ? "Login" : "Sign up"}
			</button>
			<p className="text-neutral-500 mt-12 text-sm text-center">
				{variant === "login" ? "First time using Netflix?" : "Already have an account?"}

				<span
					onClick={toggleVariant}
					className="text-white ml-1 hover:underline cursor-pointer"
				>
					{variant === "login" ? "Create an account" : "Login"}
				</span>
			</p>
		</>
	);
}
