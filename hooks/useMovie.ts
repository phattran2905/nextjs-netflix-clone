import useSwr from "swr";
import fetcher from "@/lib/fetcher";

export default function useMovie(id?: string) {
	const { data, isLoading, error } = useSwr(id ? `/api/movies/${id}` : null, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return { data, isLoading, error };
}
