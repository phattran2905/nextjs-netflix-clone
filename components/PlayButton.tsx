"use client";

import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

type Props = { movieId: string };
export default function PlayButton({ movieId }: Props) {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(`/watch/${movieId}`)}
			className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center transition hover:bg-neutral-300"
		>
			<BsFillPlayFill
				size={25}
				className="mr-1"
			/>
			Play
		</button>
	);
}
