import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y bg-background">
			<div className="w-full border-t border-[#21212155] pt-[20px] padding-x flex flex-col gap-[30px]">
				<h3 className="paragraph font-bold text-secondry font-NeueMontreal">
					We Are Cheespace:
				</h3>
				<div className="flex flex-col gap-y-[20px]">
					<p className="paragraph font-NeueMontreal text-secondry">
						The greatest brands don’t just exist—they shape the world around them.
						And the greatest pitch decks? They help investors, customers, and partners
						see a world that wouldn't be the same without them.
					</p>
					<p className="paragraph font-NeueMontreal text-secondry">
						That’s where we come in. We don’t just design slides or websites we create experiences that captivates and leaves a lasting impact.
					</p>
					<p className="paragraph font-NeueMontreal text-secondry">
						Whether it’s a pitch, a rebrand, or a campaign, we make sure your message
						isn’t just seen—it’s felt. And when people feel something, they believe in it.
					</p>
				</div>
			</div>
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</div>
		</section>


	);
}
