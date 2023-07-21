import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { email, name, password }: { email: string; name: string; password: string } =
			await request.json();

		const existingUser = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (existingUser) {
			return NextResponse.json({ error: "Email is taken." }, { status: 422 });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				email,
				name,
				hashedPassword,
				image: "",
				emailVerified: new Date(),
			},
		});

		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: error }, { status: 400 });
	}
}
