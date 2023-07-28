import { prisma } from "@/lib/db";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { currentUser } = await serverAuth();
		const { movieId }: { movieId: string } = await request.json();

		const existingMovie = await prisma.movie.findUnique({
			where: {
				id: movieId,
			},
		});

		if (!existingMovie) {
			throw new Error("Invalid ID");
		}

		const user = await prisma.user.update({
			where: { email: currentUser.email || undefined },
			data: {
				favoriteIds: {
					push: movieId,
				},
			},
		});

		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}

export async function DELETE(request: Request) {
	try {
		const { currentUser } = await serverAuth();
		const { movieId }: { movieId: string } = await request.json();

		const existingMovie = await prisma.movie.findUnique({
			where: {
				id: movieId,
			},
		});

		if (!existingMovie) {
			throw new Error("Invalid ID");
		}

		const updateFavoriteIds = currentUser.favoriteIds.filter((id) => id !== existingMovie.id);

		const updatedUser = await prisma.user.update({
			where: { email: currentUser.email || undefined },
			data: {
				favoriteIds: updateFavoriteIds,
			},
		});

		return NextResponse.json(updatedUser, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
