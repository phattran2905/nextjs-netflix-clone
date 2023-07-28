import { prisma } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		await serverAuth();

		const movieCount = await prisma.movie.count();
		const randomIndex = Math.floor(Math.random() * movieCount);

		const randomMovies = await prisma.movie.findMany({
			take: 1,
			skip: randomIndex,
		});

		return NextResponse.json(randomMovies[0], { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
