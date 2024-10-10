import Link from "next/link";
import { useState } from "react";

export default function Users(props) {
	// const [users, setUsers] = useState([
	// 	{ id: 1, name: "yashar" },
	// 	{ id: 2, name: "eshi" },
	// 	{ id: 3, name: "balas" },
	// 	{ id: 4, name: "moji" },
	// ]);
    console.log(props.users);
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
