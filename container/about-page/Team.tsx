import Image from "next/image";
import { Team1, logo } from "@/public";
import { Marquee } from "@/components";

export default function Team() {
	return (
		<section className="w-full bg-marquee min-h-screen rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
				<Marquee
					title="the cheespace"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] xm:pb-[18px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full bg-marquee flex items-center justify-center pb-[50px]">
				<div className="w-[80%] p-[20px] bg-background rounded-[20px] sm:w-full xm:w-full">
					<div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[20px] py-[10px]">
						{/* Image Section */}
						<div className="lg:w-[50%] xm:w-[100%] flex justify-center order-2 lg:order-1">
							<Image
								src={Team1}
								alt="CEO Image"
								width={300}
								height={300}
								className="rounded-[10px] sm:w-full xm:w-full"
							/>
						</div>

						{/* CEO Section */}
						<div className="lg:w-[50%] xm:w-[100%] text-center lg:text-left order-1 lg:order-2">
							<h1 className="heading font-bold font-FoundersGrotesk text-secondry">
								HANORAH <br /> ROLAND
							</h1>
							<p className="text-xl font-NeueMontreal font-bold text-secondry py-[10px]">
								Founder and CEO
							</p>
							<p className="text-lg font-NeueMontreal text-secondry">
								"When I first started CheeSpace, one of the biggest hurdles we faced was simply getting clients to trust us. It’s tough when you’re new, and people don’t always believe in what you're trying to build. But what I quickly realized is that the right clients don’t just want a service — they want a partner who truly understands their needs and is dedicated to helping them grow. If you’re looking for a team that genuinely cares about your success, we’re the ones for you."


							</p>
						</div>
					</div>

					{/* Logo Section */}
					<div className="flex justify-center sm:justify-start gap-[20px] sm:mt-[30px]">
						<Image
							src={logo}
							alt="Logo"
							width={100}
							height={100}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
