"use client";

import { useRouter } from "next/navigation";
import EmailIcon from "@mui/icons-material/Email";

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
				<ul
					onClick={() => router.push("/about")}
					onKeyDown={() => null}
					className="px-5 py-2 bg-blue-300 rounded-sm cursor-pointer font-semibold"
				>
					About
				</ul>
				<a
					href="https://github.com/s-peiran"
					className="px-5 py-2 bg-blue-300 rounded-sm cursor-pointer font-semibold"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
				<a
					className="flex px-5 gap-1 py-2 bg-blue-300 rounded-sm cursor-pointer font-semibold"
					href="mailto:she.peiran@gmail.com"
				>
					<EmailIcon />
					Contact
				</a>
			</nav>
		</header>
	);
};
