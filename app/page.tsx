import { getServerSession } from "next-auth/next";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
import Billboard from "@/components/Billboard";
import TrendingNow from "@/components/TrendingNow";
import InfoModal from "@/components/InfoModal";
import InfoModalWrapper from "@/components/InfoModalWrapper";
import FavoriteList from "@/components/FavoriteList";

export default async function Home() {
	// const session = await getServerSession(authOptions);
	// console.log(session);
	// if (!session) {
	// 	return redirect("/auth");
	// }

	return (
		<main>
			<InfoModalWrapper />
			<Navbar />
			<Billboard />
			<div className="pb-40">
				<TrendingNow />
				<FavoriteList />
			</div>
		</main>
	);
}
