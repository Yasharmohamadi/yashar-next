import Link from "next/link";

export default function Posts(props) {
	return (
			<ul>
				{props.posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.id}</Link>
					</li>
				))}
			</ul>
	);
}


// getServerSideProps() // Server-side Rendering  (SSR) // the page HTML is generated on each request.
// getStaticProps() // Static Site Generation (SSG) // the page HTML is generated at build time.
export async function getServerSideProps() {
	let response = await fetch("https://jsonplaceholder.typicode.com/posts");
	let posts = await response.json();

    return {
        props: {posts}
    }
}
