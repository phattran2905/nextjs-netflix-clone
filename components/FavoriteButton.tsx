"use client";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import useFavorites from "@/hooks/useFavorites";
import { useCallback, useMemo } from "react";

type Props = {
	movieId: string;
};
export default function FavoriteButton({ movieId }: Props) {
	const { mutate: mutateFavorites } = useFavorites();
	const { data: currentUser, mutate } = useCurrentUser();

	const isFavorite = useMemo(() => {
		const list = currentUser?.favoriteIds || [];

		return list.includes(movieId);
	}, [currentUser, movieId]);

	const toggleFavorite = useCallback(async () => {
		let response;

		if (isFavorite) {
			response = await axios.delete("/api/favorite", { data: { movieId } });
		} else {
			response = await axios.post("/api/favorite", { movieId });
		}

		const updatedFavoriteIds = response?.data?.favoriteIds;

		mutate({
			...currentUser,
			favoriteIds: updatedFavoriteIds,
		});

		mutateFavorites();
	}, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

	const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

	return (
		<div
			onClick={toggleFavorite}
			className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center transition items-center hover:border-neutral-300"
		>
			<Icon
				className="text-white"
				size={25}
			/>
		</div>
	);
}
