import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";

import { prisma } from "@/lib/db";

const handler = NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		Credentials({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Email and password are required");
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user.hashedPassword) {
					throw new Error("Email does not exist");
				}

				const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

				if (!isCorrectPassword) {
					throw new Error("Password is incorrect");
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: "/auth",
	},
	debug: process.env.NODE_ENV === "development",
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
