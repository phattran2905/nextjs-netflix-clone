import AuthProvider from "@/context/AuthProvider";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export default function layout({ children }: Props) {
	return <AuthProvider>{children}</AuthProvider>;
}
