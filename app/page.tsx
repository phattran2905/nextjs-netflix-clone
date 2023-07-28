import { getServerSession } from "next-auth/next";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
import Billboard from "@/components/Billboard";

export default async function Home() {
	// const session = await getServerSession(authOptions);
	// console.log(session);
	// if (!session) {
	// 	return redirect("/auth");
	// }

	return (
		<main>
			<Navbar />
			<Billboard />
		</main>
	);
}
