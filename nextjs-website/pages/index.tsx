import Navbar from "../components/NavBar";
import { geistSans } from "../components/font";

export default function Home() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<Navbar />
			<h1 className={`m-4 text-xl ${geistSans.className}`}>
				<span>Hi</span> welcome to my website!
			</h1>
		</div>
	);
}
