"use client";

import useMovie from "@/hooks/useMovie";
import { useRouter, useParams } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {};
export default function Watch({}: Props) {
	const router = useRouter();
	const { movieId } = useParams();

	const { data } = useMovie(movieId as string);
	console.log(movieId);
	return (
		<div className="h-screen w-screen bg-black">
			<nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
				<AiOutlineArrowLeft
					onClick={() => router.push("/")}
					className="text-white cursor-pointer"
					size={40}
				/>
				<p className="text-white text-1xl md:text-3xl font-bold">
					<span className="font-light mr-2">Watching:</span>
					{data?.title}
				</p>
			</nav>
			<video
				autoPlay
				controls
				className="h-full w-full"
				src={data?.videoUrl}
			></video>
		</div>
	);
}
