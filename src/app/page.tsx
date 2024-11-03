export default function Home() {
	return (
		<main className="bg-[#0F1421] flex h-[100vh]">
			<div className="flex flex-1 flex-col w-full h-full justify-center items-center pl-5">
				<div className="flex flex-col gap-y-10">
					<h1 className="md:text-9xl text-6xl text-zinc-100 font-bold font-sans">
						She Peiran
					</h1>
					<h2 className="md:text-4xl text-3xl font-bold bg-gradient-to-tr from-blue-500 via-blue-200 to-blue-500 bg-clip-text text-transparent">
						FULL STACK DEVELOPER
					</h2>
				</div>
			</div>
			<div className="flex flex-1 justify-center w-full text-zinc-100 h-full items-center">
				<p className="md:text-9xl text-6xl">{"</>"}</p>
			</div>
		</main>
	);
}
