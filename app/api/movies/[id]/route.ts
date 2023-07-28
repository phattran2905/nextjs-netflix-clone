import { prisma } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
	try {
		await serverAuth();
		const movieId = params.id;

		const movie = await prisma.movie.findUnique({
			where: {
				id: movieId,
			},
		});

		if (!movie) {
			throw new Error("Invalid ID");
		}

		return NextResponse.json(movie, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
