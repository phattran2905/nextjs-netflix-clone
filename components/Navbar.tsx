"use client";
import { signOut } from "next-auth/react";

type Props = {};
function Navbar({}: Props) {
	return (
		<div>
			<h1>Navbar</h1>
			<button
				onClick={() => signOut()}
				className="bg-white w-full"
			>
				Log out
			</button>
		</div>
	);
}
export default Navbar;
