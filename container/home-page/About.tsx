"use client";
import Image from "next/image";
import { useState } from "react";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";


export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about  padding-y rounded-t-[20px] z-20 relative mt-[-15px]">

			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Cheespace is a strategic partner for fast-grow­ing brands
					<b className="sm:hidden xm:hidden" /> helping businesses build identity,&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						launch and scale,
					</span>
					&nbsp;drive sales, <b className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						simplify complex ideas
					</span>

					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						&nbsp; to dominate their industry.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className=" sub-heading text-secondry font-NeueMontreal mt-3  "  >
							We get it! growing a business is tough.
						</h3>

					</div>
					<div className="w-[100%] sm:w-full xm:w-full">
						<div className="w-full flex  h-full items-start sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[50%] sm:w-[80%] xm:w-[80%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[20px] tracking-wide">
									You're feeling overwhelmed with endless tasks and decisions, It’s exhausting but it doesn’t always have to be this way.
									We're here to elevate your business and take it to the next level <br /> More stability, revenue and global clients. Whatever your goals are, We will help you succeed with expert solutions in Web & Mobile development, Branding, Digital marketing, SEO, and IT support. <br />
									Your business deserves more than just a logo <br />It needs a complete brand experience that turns visitors into loyal customers.
								</p>
							</div>
							<div className="w-[60%] flex justify-end flex-col  sm:w-full xm:w-full ml-10 mt-5">
								<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px] ">
									Socials:
								</h1>
								<div className="flex flex-col space-y-2">
									{footerItems.map((item) => (
										<div key={item.id} className="flex items-center space-x-2">
											<Image
												src={item.img} // Ensure the correct path
												alt={item.title}
												width={30} // Adjust as needed
												height={30}
												className="w-10 h-10"
											/>
											<LinkHover
												className="w-fit sub-paragraph font-medium capitalize"
												title={item.title}
												href={item.href}
											/>
										</div>
									))}
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Our approach:" />
					<p className="font-medium font-NeueMontreal text-secondry ">
						At Cheespace we believe your brand is more than just your business it is your identity <br />So we craft strategies that amplifies your uniqueness and lets you stand out. It's all about you.
					</p>
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/ochi-team"
							title="read more"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full h-[350px] sm:h-[250px] xm:h-[250px] transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${hovered && "scale-[0.96]"
						}`}>
					<iframe
						className="w-full h-full object-cover transition transform duration-[2s] ease-[.215,.61,.355,1] rounded-[15px]"
						src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
						title="YouTube video player"

						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					></iframe>
				</div>


			</div>
		</section>
	);
}
