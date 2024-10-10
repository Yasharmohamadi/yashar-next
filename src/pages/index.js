import Link from "next/link";

export default function Home() {
	return (
		<>
			<ul>
				<li>
					<Link href="/users">Users</Link>
				</li>
				<li>
					<Link href="/posts">Posts</Link>
				</li>
			</ul>
		</>
	);
}
