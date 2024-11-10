"use client";

import { useRouter } from "next/navigation";

export const Header = () => {
	const router = useRouter();
	const handleNavigation = (route: string) => {
		router.push(route);
	};

	return (
		<header className="sticky top-0 w-full flex items-center bg-[#0F1421] min-h-[70px]">
			<nav
				className="px-5 py-2 bg-white ml-5 rounded-sm cursor-pointer font-semibold text-[#0F1421]"
				onClick={() => handleNavigation("/")}
				onKeyDown={() => null}
			>
				She Peiran
			</nav>
			<nav className="ml-auto flex justify-between gap-x-5 pr-5">
				<ul className="px-5 py-2 bg-blue-300 rounded-sm cursor-pointer font-semibold">
					About
				</ul>
				<ul className="px-5 py-2 bg-blue-300 rounded-sm cursor-pointer font-semibold">
					Projects
				</ul>
			</nav>
		</header>
	);
};
