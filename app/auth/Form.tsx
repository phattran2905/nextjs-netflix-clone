"use client";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type Props = {};
export default function Form({}: Props) {
	const router = useRouter();

	const [name, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const [variant, setVariant] = useState<string>("login");
	const toggleVariant = useCallback(() => {
		setError("");
		setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
	}, []);

	const login = useCallback(async () => {
		setError("");
		try {
			signIn("credentials", {
				email,
				password,
				redirect: true,
				callbackUrl: "/profiles",
			});
		} catch (error) {
			setError("Failed to login.");
		}
	}, [email, password, router]);

	const register = useCallback(async () => {
		setError("");
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					name,
					password,
				}),
			});

			const { error } = await res.json();
			if (error) {
				return setError(error);
			}

			login();
		} catch (error) {
			console.log(error);
			setError("Failed to register.");
		}
	}, [email, name, password]);

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
						id="name"
						value={name}
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
			{/* Error */}
			{error && (
				<div className="my-3 bg-red-300">
					<p className="font-bold text-red-700 p-2 rounded-md text-sm">{error}</p>
				</div>
			)}

			<button
				onClick={variant === "login" ? login : register}
				className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
			>
				{variant === "login" ? "Login" : "Sign up"}
			</button>

			{/* GOOGLE & GITHUB */}
			<div className="flex flex-row items-center gap-4 mt-8 justify-center">
				<div
					onClick={() => signIn("google", { callbackUrl: "/profiles" })}
					className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
				>
					<FcGoogle size={30} />
				</div>
				<div
					onClick={() => signIn("github", { callbackUrl: "/profiles" })}
					className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
				>
					<FaGithub size={30} />
				</div>
			</div>

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
