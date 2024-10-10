import React from "react";
import Link from "next/link";

export default function Navbar({ items }) {
	console.log(items);
	return (
		<div>
			<ul>
				{items.map((item) => (
					<li>
						<Link href={item.href}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
