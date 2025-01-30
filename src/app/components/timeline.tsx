const personalTimeline = [
	{
		year: "07.2023 — 06.2024",
		title: "Military Service — Estonian Defence Forces",
		description: `
		Conducted regular monitoring and optimization of network infrastructure and servers to maintain system reliability and performance, particularly under variable and challenging field conditions.
        Implemented stringent security protocols to protect sensitive military data and communications channels, actively managing access controls and encryption standards to prevent unauthorized access and data breaches.
        Provided hands-on assistance to end-users, troubleshooting and resolving issues related to hardware, software, and communication devices, ensuring minimal downtime and high operational efficiency.
		`,
		done: true,
	},
	{
		year: "06.2021 — 12.2022",
		title: "Back-End Developer — Pipedrive OÜ",
		description: `
			Integrated front-end and back-end components through APIs, focusing on the activities section of the CRM platform, using JavaScript and TypeScript.
        	Conducted frequent code reviews, collaborating via Git to manage version control and contribute constructive feedback to the development team.
        	Led multiple projects, overseeing task prioritization and ensuring timely completion by coordinating between developers and product managers.
        	Maintained detailed records of IT incidents and system performance to facilitate efficient system upgrades, repairs, and audits.
		`,
		done: true,
	},
	{
		year: "10.2019 — 05.2021",
		title: "Junior Back-End Developer — Pipedrive OÜ",
		description: `
			Started as a school intern, later transitioned to a full-time Junior Back-End Developer, contributing to core CRM platform features.
        	Assisted in code quality improvements, bug fixes, and cross-functional integrations, working closely with back-end and front-end teams.
		`,
		done: true,
	},
	{
		year: "2017 — 2020",
		title: "Junior Software Engineer — Tallinn Polytechnic School",
		description: `
		  Graduated with honours. Alongside studies completed a year long internship at Pipedrive OÜ as a Junior Back-End Developer.
		`,
		done: true,
	}
];

export default function Timeline() {
	return (
		<div>
			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-7xl m-auto px-8">
				{personalTimeline.map((item, index) => (
					<li key={index}>
						{(item.done || personalTimeline[index - 1].done) &&
						index != 0 ? (
							<hr
								className={
									item.done ||
									personalTimeline[index - 1].done
										? "bg-primary"
										: ""
								}
							/>
						) : (
							""
						)}
						<div className="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-5 w-5"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div
							className={
								(index % 2 == 0
									? "timeline-start md:text-end"
									: "timeline-end md:text-start") + " mb-10"
							}
						>
							<time className="font-mono italic">
								{item.year}
							</time>
							<div className="text-lg font-black">
								{item.title}
							</div>
							{item.description}
						</div>
						{index != personalTimeline.length - 1 ? (
							<hr className={item.done ? "bg-primary" : ""} />
						) : (
							""
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
