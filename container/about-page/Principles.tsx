import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Two principles we stand behind in
					<br className="sm:hidden xm:hidden" /> every part of our work:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[30px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[30px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								At CheeSpace, we believe a brand isn’t just a company—it’s an identity.<br /> Every project we take on is designed to define, refine, and amplify your brand’s unique story.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[30px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[30px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Great design isn’t just about looking good—it’s about working smart. Whether it’s a website, a pitch deck, or a marketing campaign, we merge creativity with strategy to create high-impact, high-converting digital assets that take businesses from local recognition to global influence.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
