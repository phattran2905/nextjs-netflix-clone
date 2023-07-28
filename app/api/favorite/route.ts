import { prisma } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const { currentUser } = await serverAuth();

		const favoriteMovies = await prisma.movie.findMany();
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
