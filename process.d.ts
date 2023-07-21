declare namespace NodeJS {
	export interface ProcessEnv {
		DATABASE_URL: string;
		NEXT_PUBLIC_URL: string;
		MONGODB_USERNAME: string;
		MONGODB_PASSWORD: string;
		NEXTAUTH_URL: string;
		NEXTAUTH_JWT_SECRET: string;
		NEXTAUTH_SECRET: string;
		GITHUB_ID: string;
		GITHUB_SECRET: string;
		GOOGLE_CLIENT_ID: string;
		GOOGLE_CLIENT_SECRET: string;
	}
}
