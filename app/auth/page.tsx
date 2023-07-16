import Image from "next/image";
import Form from "./Form";

type Props = {};
export default function Auth({}: Props) {
	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<Image
						src={"/images/logo.png"}
						alt="Logo"
						width={192}
						height={192}
					/>
				</nav>
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}
