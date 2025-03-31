"use client";
import Link from "next/link";
import Image from "next/image";
import { footerItems } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { LinkHover, TextMask } from "@/animation";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Eyes } from "@/components";

export default function Socials() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

	const phrase = ["Instagram", "Whatsapp", "Facebook", "LinkedIn"];

	return (
		<section className="w-full min-h-screen sm:h-screen xm:h-screen bg-about padding-y relative" ref={container}>
			<div className="w-full h-full flex flex-col items-center gap-[50px]">

				{/* Animated Social Names */}
				<div className="flex flex-col gap-[10px] pb-[50px]">
					<h1 className="text-[277px] leading-[207px] lg:text-[230px] lg:leading-[170px] md:text-[150px] md:leading-[100px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] text-center font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>

				{/* Contact Details Section */}
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between items-center gap-y-[20px] padding-x">

						{/* Our Contacts */}
						<div className="w-[30%] sm:w-full xm:w-full">
							<h3 className="paragraph font-bold text-secondry font-NeueMontreal">Our contacts:</h3>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal mt-2">
								+2348139723327 <br />
								+2347049393818
							</h3>
						</div>

						{/* Email Section */}
						<div className="w-[30%] sm:w-full xm:w-full flex flex-col items-center">
							<h1 className="paragraph font-NeueMontreal text-secondry mb-2">Email:</h1>
							<div className="flex items-center gap-x-[5px] group">
								<div className="rounded-[50px] border-[2px] border-[#21212155] group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer">
									<Link
										href="mailto:thecheespace@gmail.com"
										className="paragraph font-NeueMontreal text-secondry group-hover:text-background transition-all duration-200 ease-in">
										thecheespace@gmail.com
									</Link>
								</div>
								<div className="w-[33px] flex items-center justify-center h-[33px] border-[2px] border-[#21212155] rounded-[50px] group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
									<ArrowUpRight size={24} strokeWidth={1.25} className="text-secondry group-hover:text-background" />
								</div>
							</div>
						</div>

						{/* Socials Section */}
						<div className="w-[30%] sm:w-full xm:w-full flex flex-col items-center">
							<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[10px]">Socials:</h1>
							<div className="flex flex-wrap justify-center gap-x-4">
								{footerItems.map((item) => (
									<div key={item.id} className="flex items-center space-x-2">
										<Image src={item.img} alt={item.title} width={30} height={30} className="w-10 h-10" />
										<LinkHover className="w-fit sub-paragraph font-medium capitalize" title={item.title} href={item.href} />
									</div>
								))}
							</div>
						</div>

					</div>
				</div>
			</div>

			{/* Moving Eyes Animation */}
			<motion.div className="w-full absolute top-[50%] transform translate-y-[-50%] flex items-center justify-center"
				style={{ y: mq }}>
				<Eyes className="w-[230px] h-[230px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px]" />
			</motion.div>
		</section>
	);
}
