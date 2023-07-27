"use client";

import useSwr from "swr";
import fetcher from "@/lib/fetcher";

export default function useCurrentUser() {
	const { data, isLoading, error, mutate } = useSwr("/api/current", fetcher);

	return { data, isLoading, error, mutate };
}
