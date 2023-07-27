import { getServerSession } from "next-auth";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main>
			<Navbar />
		</main>
	);
}
