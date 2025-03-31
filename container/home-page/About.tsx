"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Cheespace is a strategic partner for fast-grow­ing brands
					<b className="sm:hidden xm:hidden" /> helping businesses build identity,&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						launch and scale,
					</span>
					&nbsp;drive sales,<br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						simplify complex ideas
					</span>
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						&nbsp; to dominate their industry.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex justify-between sm:flex-col xm:flex-col gap-[30px]">
					{/* Text Section (80% width) */}
					<div className="w-[80%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-bold text-secondry font-NeueMontreal">
							We get it! Growing a business is tough.
						</h3>
						<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide mt-4">
							You're feeling overwhelmed with endless tasks and decisions. It’s exhausting, but it doesn’t always have to be this way. We're here to elevate your business and take it to the next level.
						</p>
						<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide mt-4">
							More stability, revenue, and global clients. Whatever your goals are, we will help you succeed with expert solutions in Web & Mobile Development, Branding, Digital Marketing, SEO, and IT support.
						</p>
						<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide mt-4">
							Your business deserves more than just a logo. It needs a complete brand experience that turns visitors into loyal customers.
						</p>
					</div>

					{/* Socials Section (20% width) - No Changes */}
					<div className="w-[20%] sm:w-full xm:w-full flex flex-col justify-end">
						<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
							Socials:
						</h1>
						<div className="flex flex-col">
							{footerItems.map((item) => (
								<div key={item.id} className="flex items-center space-x-2">
									<Image
										src={item.img}
										alt={item.title}
										width={30}
										height={30}
										className="w-10 h-10"
									/>
									<LinkHover
										className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
										title={item.title}
										href="/"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Our approach:" />
					<p className="font-medium font-NeueMontreal text-secondry">
						At Cheespace we believe your brand is more than just your business, it is your identity. <br />
						So we craft strategies that amplify your uniqueness and let you stand out. It's all about you.
					</p>
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					>
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
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${hovered && "scale-[0.96]"
						}`}
				>
					<Image
						src={aboutImg}
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${hovered && "scale-[1.09]"
							}`}
					/>
				</div>
			</div>
		</section>
	);
}
