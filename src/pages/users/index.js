import Link from "next/link";

export default function Users(props) {
	return (
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						<Link href={`users/${user.username}`}>{user.username}</Link>
					</li>
				))}
			</ul>
	);
}


// getServerSideProps() // Server-side Rendering  (SSR) // the page HTML is generated on each request.
// getStaticProps() // Static Site Generation (SSG) // the page HTML is generated at build time.
export async function getStaticProps() {
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
	let users = await response.json();

    return {
        props: {users}
    }
}
