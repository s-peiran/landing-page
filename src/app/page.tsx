"use client";
import { Separator } from "@/components/ui/separator";
import workExperience from "../components/workexp.json";
import { WorkExp } from "@/components/work-exp";

export default function Home() {
	return (
		<main className="flex-col flex-1">
			<div className="flex max-sm:flex-col h-full md:pt-36 pt-16 md:pb-36 pb-12">
				<div className="flex flex-1 flex-col w-full h-full justify-center items-center pl-5">
					<div className="flex flex-col gap-y-10">
						<h1 className="md:text-9xl text-6xl text-zinc-100 font-bold font-sans">
							She Peiran
						</h1>
						<h2 className="md:text-4xl text-3xl font-bold bg-gradient-to-tr from-blue-500 via-blue-200 to-blue-500 bg-clip-text text-transparent">
							FULL STACK DEVELOPER
						</h2>
						<h2 className="md:text-3xl text-3xl font-bold bg-gradient-to-tr from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
							全栈开发人员
						</h2>
					</div>
				</div>
				<div className="flex flex-col flex-1 justify-center w-full text-zinc-100 h-full max-sm:pt-20 items-center">
					<div className="max-sm:w-[80vw]">
						<p className="text-4xl max-sm:text-3xl">Spoken Languages</p>
						<div className="pl-2 flex items-center gap-4">
							<img className="h-20 w-20" src="/flags/UK.png" alt="GB" />
							<h2 className="text-3xl max-sm:text-2xl font-semibold">
								English
							</h2>
						</div>
						<div className="pl-2 flex items-center gap-4">
							<img className="h-20 w-20" src="/flags/China.png" alt="CN" />
							<h2 className="text-3xl max-sm:text-2xl font-semibold">
								Chinese (Mandarin / Cantonese)
							</h2>
						</div>
						<div className="pl-2 flex items-center gap-4">
							<img className="h-20 w-20" src="/flags/Malaysia.png" alt="MY" />
							<h2 className="text-3xl max-sm:text-2xl font-semibold">Malay</h2>
						</div>
						<div className="pl-2 flex items-center gap-4">
							<img className="h-20 w-20" src="/flags/Indonesia.png" alt="ID" />
							<h2 className="text-3xl max-sm:text-2xl font-semibold">
								Bahasa Indonesia
							</h2>
						</div>
					</div>
				</div>
			</div>

			<Separator className="mx-auto w-[80vw] my-4" />
			<h1 className="text-5xl md:ml-40 ml-8 md:mt-36 mt-16 pb-4 text-gray-100">
				Experience
			</h1>
			<div className="flex flex-col gap-6">
				<WorkExp {...workExperience.pints} />
				<WorkExp {...workExperience.meetarts} />
				<WorkExp {...workExperience.block71} />
			</div>
		</main>
	);
}
