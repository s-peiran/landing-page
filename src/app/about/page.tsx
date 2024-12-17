"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function About() {
	const imageRef = useRef(null);

	useEffect(() => {
		gsap.set(imageRef.current, { rotate: 2 });
	}, []);

	const handleMouseEnter = () => {
		gsap.to(imageRef.current, { rotate: 0, duration: 0.5 });
	};

	const handleMouseLeave = () => {
		gsap.to(imageRef.current, { rotate: 2, duration: 0.5 });
	};

	return (
		<div className="flex max-sm:flex-col">
			<div
				className="flex flex-1 p-4 justify-center"
				ref={imageRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<Image height={500} width={500} src="/prambanan.png" alt="profile" />
			</div>
			<div className="md:max-w-[60%] md:pr-10 max-sm:p-6">
				<h1 className="text-4xl font-sans text-gray-200">About Peiran</h1>
				&nbsp;
				<p className="text-white font-sans">
					Hi there! <br /> I&#39;m a final year student at the National
					Unviersity of Singapore, studying bachelor of business administration,
					specializing in business analytics with a second major in computer
					science. I am passionate about technology, particularly in the area of
					software development and artificial intelligence. I&#39;m a full stack
					developer with experience in React, nextJS, and postgreSQL. Deeply
					interested in connecting with people, I can speak 4 languages namely
					English, Chinese, Malay, and Bahasa Indonesia. Recently, I have
					completed an enriching semester abroad at the City University of Hong
					Kong.
				</p>
			</div>
		</div>
	);
}
