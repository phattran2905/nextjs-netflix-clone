"use client";

import useMovieList from "@/hooks/useMovieList";
import MovieList from "./MovieList";

type Props = {};
export default function TrendingNow({}: Props) {
	const { data: movies } = useMovieList();

	return (
		<MovieList
			data={movies}
			title="Trending Now"
		/>
	);
}
