import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Navbar from "@/components/Navbar";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main>
			<h1 className="text-white text-4xl">Netflix Clone</h1>
			<pre className="text-white">{JSON.stringify(session, null, 2)}</pre>
			<Navbar />
		</main>
	);
}
