type Skill = {
	title: string;
	value: number;
	tooltip: string;
};

type Skillset = {
	[category: string]: Skill[];
};

const skillsets: Skillset[] = [
	{
		"Back-end": [
			{
				title: "Node.js, Javascript, Typescript",
				value: 75,
				tooltip:
					"My preferred language for most software. Great for robust websites, API's and even quick scripts.",
			},
			{
				title: "SQL, MySQL, SQLite, MongoDB",
				value: 50,
				tooltip:
					"While I haven't built many large-scale databases, I understand how they work and how to be careful with migrations. I haven't accidentally deleted any production DB's.... yet",
			},
			{
				title: "Python",
				value: 60,
				tooltip:
					"Python is my go-to language for small scripts. I have written many small utilities that run on my Raspberry Pi(s), from custom smart alarm clocks to smart home energy managment.",
			},
			{
				title: "C#, Xamarin",
				value: 20,
				tooltip:
					"C# and Xamarin are what I learned at school. Funnily enough that was the last time I used them. Although, I'm sure I could still comprehend them. I know C# is often used in game dev, which I might give a go at some point.",
			},
		],
	},
	{
		"Front-end": [
			{
				title: "React.js, Next.js",
				value: 50,
				tooltip:
					"This is what the current site is written in, including TailwindCSS and DaisyUI.",
			},
			{
				title: "CSS",
				value: 28,
				tooltip:
					"Great CSS looks clean and minimal. Do not expect this from me. I know my way around, but great design and components are not my forte.",
			},
		],
	},
	{
		Misc: [
			{
				title: "3D printing",
				value: 80,
				tooltip:
					"I've been designing and printing various 3D parts over the years. It's fun being able to make something in CAD and have it automagically be brought to life.",
			},
			{
				title: "Linux",
				value: 70,
				tooltip:
					"I have daily driven Linux for at least 5 years now. I don't have much experience in building/managing server configs, but I'm not afraid of using a terminal. I also know how to exit Vim.",
			},
		],
	},
];

export default function Skills() {
	return (
		<ul className="md:flex">
			{skillsets.map((item, index) => {
				const category = Object.keys(item)[0];
				const skills = item[category];

				return (
					<li key={index} className="flex-grow">
						<h1 className="text-3xl font-bold mx-auto w-fit pt-4 sm:pt-0">
							{category}
						</h1>
						<ul className="w-fit mx-auto">
							{skills.map((item2, index2) => (
								<li key={index2} className="flex-col py-3">
									<div className="tooltip" data-tip={item2.tooltip}>
										<div className="text-m w-fit mx-auto">
											{item2.title}
										</div>
										<progress
											className="progress progress-primary w-56 right-0"
											value={item2.value}
											max="100"
										/>
									</div>
								</li>
							))}
						</ul>
					</li>
				);
			})}
		</ul>
	);
}
