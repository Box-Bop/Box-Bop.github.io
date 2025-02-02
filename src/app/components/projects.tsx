const personalTimeline = [
	{
		year: "2018",
		title: "AISee — Garage48 Edutech Hackathon",
		description: `
		Designed and developed the front-end view of a mobile application chat interface for an AI-powered
back-end during a 48-hour hackathon event.
		`,
		done: true,
	},
	{
		year: "2019",
		title: "Save Your Home — Global Game Jam 2019",
		description: `
			Participated in the Global Game Jam event in Tallinn, developing a game within 48 hours using Unity
game engine and Trello for task organization and team coordination.
		`,
		done: true,
	},
	{
		year: "2019",
		title: "DGMap — Garage48 Hackathon",
		description: `
			Developed a mobile app during the hackathon using Xamarin that allows students to submit their
homework photos to their teachers for review, solving the issue of lost or forgotten student work. Led
the development of both front-end and back-end, interfacing with an API created by a team member.
		`,
		done: true,
	},
	{
		year: "2020",
		title: "Mentornaut — The Global Hack",
		description: `
		  Developed an online platform connecting teachers/tutors with students and facilitating peer-to-peer
learning within a 48-hour period, responsible for designing and implementing the website’s API using
Strapi and Node.js.
		`,
		done: true,
	}
];

export default function Projects() {
	return (
		<div>
			<ul className="timeline timeline-snap-icon timeline-compact timeline-vertical max-w-5xl m-auto px-0 sm:px-8">
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
							className="timeline-start mb-10"
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
