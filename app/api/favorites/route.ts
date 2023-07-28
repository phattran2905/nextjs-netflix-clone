import { prisma } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { currentUser } = await serverAuth();

		const favoriteMovies = await prisma.movie.findMany({
			where: {
				id: {
					in: currentUser?.favoriteIds,
				},
			},
		});

		return NextResponse.json(favoriteMovies, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
