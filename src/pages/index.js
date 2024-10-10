import Navbar from "@/components/Navbar/Navbar";
import { navLinks } from "@/Data";

export default function Home() {
	return (
		<>
			<Navbar items={navLinks} />
		</>
	);
}
