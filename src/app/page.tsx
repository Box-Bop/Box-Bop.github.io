import Image from "next/image";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
	return (
		<div className="sm:py-16 py-8 sm:px-8 px-4">
			{/* <div className="navbar bg-base-300">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">daisyUI</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Link</a>
						</li>
						<li>
							<details>
								<summary>Parent</summary>
								<ul className="bg-base-100 rounded-t-none p-2">
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div> */}

			<div className="card bg-base-300 rounded-box max-w-5xl mx-auto sm:p-8 p-2 my-8">
				<div className="md:flex">
					<div className="flex-grow max-w-3xl text-center m-auto px-6">
						<h1 className="text-5xl font-bold">
							Roberts Pauls Tohver
						</h1>
						<p className="py-6">
							I am an IT professional with a strong foundation in
							creating and enhancing digital solutions. With
							hands-on experience in IT support, I am drawn to
							complex challenges, initiating innovation, and data
							analysis aimed at improving processes. I have a keen
							interest in the latest technologies and their
							potential, along with a desire to continually
							develop my skills to create valuable solutions that
							drive company growth. I am confident in my ability
							to adapt and work in a team not only helps achieve
							goals but also fosters positive relationships with
							colleagues and partners.
						</p>
					</div>
					<div className="flex-none flex-column px-2 max-w-[300px] mx-auto">
						<Image
							className="rounded-xl md:h-max md:w-max"
							src={"/pfp.jpg"}
							alt="Profile picture"
							width="300"
							height="300"
						/>

						<ul className="menu bg-background rounded-box w-m mt-4">
							<li>
								<a
									className="link link-hover"
									href="https://www.linkedin.com/in/roberts-pauls-tohver"
									target="_blank"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7"
										fill="none"
										viewBox="0 0 32 32"
										stroke="currentColor"
									>
										<path
											// strokeLinecap="round"
											// strokeLinejoin="round"
											// strokeWidth="2"
											d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
										/>
									</svg>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									className="link link-hover"
									href="https://github.com/Box-Bop"
									target="_blank"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7"
										fill="none"
										viewBox="0 0 32 32"
										stroke="currentColor"
									>
										<path
											// strokeLinecap="round"
											// strokeLinejoin="round"
											// strokeWidth="2"
											d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"
										/>
									</svg>
									GitHub
								</a>
							</li>
							<li>
								<a
									className="link link-hover"
									href="mailto:tohverrobert@gmail.com"
									target="_blank"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-7 w-7"
										fill="none"
										viewBox="0 0 32 32"
										stroke="currentColor"
									>
										<path
											// strokeLinecap="round"
											// strokeLinejoin="round"
											// strokeWidth="2"
											d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"
										/>
									</svg>
									E-mail
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div
				role="tablist"
				className="tabs tabs-lifted tabs-lg max-w-[1300px] mx-auto"
			>

				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab mx-auto"
					aria-label="Experience"
					defaultChecked
				/>
				<div
					role="tabpanel"
					className="tab-content bg-base-100 border-base-300 rounded-box p-6"
				>
					<Timeline />
				</div>

				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab"
					aria-label="Skills"
				/>
				<div
					role="tabpanel"
					className="tab-content bg-base-100 border-base-300 rounded-box p-6"
				>
					<Skills/>
				</div>

				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab"
					aria-label="Projects"
				/>
				<div
					role="tabpanel"
					className="tab-content bg-base-100 border-base-300 rounded-box p-6"
				>
					<Projects/>
				</div>
			</div>
		</div>
	);
}
