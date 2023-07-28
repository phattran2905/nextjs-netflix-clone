import useSwr from "swr";

import fetcher from "@/lib/fetcher";

export default function useBillboard() {
	const { data, isLoading, error } = useSwr("/api/random", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return { data, isLoading, error };
}
