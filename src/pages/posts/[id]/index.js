import { useRouter } from "next/router";

export default function id(props) {
	const route = useRouter();

	const goBackHandler = () => {
		route.back();
	};

	return (
		<>
			<div className="path-wrapper">
				<div className="svg-wrapper" onClick={goBackHandler}>
					<svg
						width="15"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
						/>
					</svg>
				</div>
				<div className="path">
					<span className="title">{props.post.id} -</span>
					<span className="title">{props.post.title}</span>
				</div>
			</div>
			<p className="text">{props.post.body}</p>
		</>
	);
}

export async function getServerSideProps({ params }) {
	// console.log(params); // { id: 2 }
	let response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	let post = await response.json();

	return {
		props: { post },
	};
}
