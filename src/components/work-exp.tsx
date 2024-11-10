import { Icons } from "@shadcn/icons";

type TProps = {
	company: string;
	period: string;
	position: string;
	prototype?: { title: string; link: string };
	source?: string;
	description: string[];
};
export const WorkExp = (props: TProps) => {
	console.log(props.source);
	return (
		<div className="flex-col w-[80vw] mx-auto mt-4 text-gray-100">
			<div className="flex max-sm:flex-col">
				<div className="flex-row flex gap-5">
					{props.company === "Pints.AI" ? (
						<div className="pr-4">
							<Icons.PintsAI />
						</div>
					) : (
						<img className="h-32 w-32" src={props.source} alt={props.company} />
					)}

					<div className="flex-col">
						<h1 className="text-4xl">{props.company}</h1>
						<h1 className="ml-auto text-2xl">{props.position}</h1>
					</div>
				</div>
				<div className="ml-auto text-2xl">{props.period}</div>
			</div>
			<div className="flex">
				<div className="w-36" />
				<div>
					{props.prototype && (
						<div className="flex max-sm:flex-col max-sm:pt-2 gap-2">
							<h1 className="text-2xl font-semibold">
								{props.prototype.title}
							</h1>
							<a
								href={props.prototype?.link}
								className="text-2xl"
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
	);
};
