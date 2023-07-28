import useSwr from "swr";
import fetcher from "@/lib/fetcher";

export default function useFavorites() {
	const { data, isLoading, error, mutate } = useSwr("/api/favorites", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return { data, isLoading, error, mutate };
}
