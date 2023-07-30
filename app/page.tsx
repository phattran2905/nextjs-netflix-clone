import { getServerSession } from "next-auth/next";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
import Billboard from "@/components/Billboard";
import TrendingNow from "@/components/TrendingNow";
import InfoModalWrapper from "@/components/InfoModalWrapper";
import FavoriteList from "@/components/FavoriteList";
import AuthProvider from "@/context/AuthProvider";

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (!session) {
		return redirect("/auth");
	}

	return (
		<AuthProvider>
			<main>
				<InfoModalWrapper />
				<Navbar />
				<Billboard />
				<div className="pb-40">
					<TrendingNow />
					<FavoriteList />
				</div>
			</main>
		</AuthProvider>
	);
}
