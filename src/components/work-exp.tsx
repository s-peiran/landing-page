import { Icons } from "@shadcn/icons";
import { useScreenSize } from "@/app/hooks/use-screen-size";

type TProps = {
	company: string;
	period: string;
	position: string;
	prototype?: { title: string; link: string };
	source?: string;
	description: string[];
};
export const WorkExp = (props: TProps) => {
	const { isMobile } = useScreenSize();
	if (isMobile) {
		return (
			<main className="flex flex-col w-[80vw] mx-auto mt-4 text-gray-100">
				<div className="flex">
					<div className="flex">
						{props.company === "Pints.AI" ? (
							<div className="pr-4 pl-3">
								<Icons.PintsAI width="70" height="70" />
							</div>
						) : (
							<img
								className="h-24 w-24"
								src={props.source}
								alt={props.company}
							/>
						)}
					</div>
					<div>
						<div className="flex-col w-full">
							<div className="flex-col">
								<h1 className="text-2xl">{props.company}</h1>
								<h1 className="ml-auto text-xl text-gray-400">
									{props.position}
								</h1>
							</div>
							<div className="ml-auto text-xl text-gray-400">
								{props.period}
							</div>
						</div>
					</div>
				</div>
				{props.prototype && (
					<div className="flex-col gap-2">
						&nbsp;
						<h1 className="text-xl font-semibold">{props.prototype.title}</h1>
						<a
							href={props.prototype?.link}
							className="text-xl text-gray-400"
							target="_blank"
							rel="noreferrer"
						>
							{props.prototype.link}
						</a>
					</div>
				)}
				<div className="flex">
					<div>
						<ul className="pt-4 pl-5 list-disc">
							{props.description.map((desc) => (
								<li key={desc}>{desc}</li>
							))}
						</ul>
					</div>
				</div>
			</main>
		);
	}
	return (
		<div className="flex w-[80vw] mx-auto mt-4 text-gray-100 gap-2">
			<div>
				{props.company === "Pints.AI" ? (
					<div className="pr-4">
						<Icons.PintsAI />
					</div>
				) : (
					<img className="h-32 w-32" src={props.source} alt={props.company} />
				)}
			</div>
			<div className="w-full">
				<div className="flex pl-4">
					<div className="flex-row flex gap-5">
						<div className="flex-col">
							<h1 className="text-4xl">{props.company}</h1>
							<h1 className="text-2xl text-gray-400">{props.position}</h1>
						</div>
					</div>
					<div className="ml-auto text-2xl">{props.period}</div>
				</div>
				<div className="flex">
					<div>
						{props.prototype && (
							<div className="flex gap-2 pl-4">
								<h1 className="text-2xl font-semibold">
									{props.prototype.title}
								</h1>
								<a
									href={props.prototype?.link}
									className="text-2xl  text-gray-400"
									target="_blank"
									rel="noreferrer"
								>
									{props.prototype.link}
								</a>
							</div>
						)}

						<ul className="pt-4 pl-5 list-disc">
							{props.description.map((desc) => (
								<li key={desc}>{desc}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
