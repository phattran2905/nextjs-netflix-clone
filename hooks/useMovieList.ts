import useSwr from "swr";
import fetcher from "@/lib/fetcher";

export default function useMovieList() {
	const { data, error, isLoading } = useSwr("/api/movies", fetcher, {
		revalidateIfStale: false,
		revalidateOnReconnect: false,
		revalidateOnFocus: false,
	});

	return { data, error, isLoading };
}
