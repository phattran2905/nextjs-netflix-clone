"use client";
import useFavorites from "@/hooks/useFavorites";
import MovieList from "./MovieList";

type Props = {};
export default function FavoriteList({}: Props) {
	const { data: favoriteMovies } = useFavorites();

	return (
		<MovieList
			title="My List"
			data={favoriteMovies}
		/>
	);
}
