import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Build your", "Business", "IDENTITY"];
	const phrase1 = ["."];

	return (
		<footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[30px]">

				{/* Left: Animated Text */}
				<div className="flex flex-col w-1/2 sm:w-full xm:w-full">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
					<div className="w-full pt-[30px]">
						<h3 className="paragraph font-bold text-secondry font-NeueMontreal">Our contacts:</h3>
						<h3 className="paragraph font-medium text-secondry font-NeueMontreal mt-2">
							+2348139723327 <br />
							+2347049393818
						</h3>
					</div>
				</div>

				{/* Right: Socials, Map, Email */}
				<div className="flex flex-col w-1/2 sm:w-full xm:w-full">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{phrase1}</TextMask>
					</h1>

					{/* Socials & Map - Same Row */}
					<div className="flex justify-between sm:flex-col xm:flex-col pt-[50px]">
						{/* Socials */}
						<div>
							<h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">Socials:</h1>
							<div className="flex flex-col gap-4">
								{footerItems.map((item) => (
									<div key={item.id} className="flex items-center space-x-2">
										<Image src={item.img} alt={item.title} width={30} height={30} className="w-10 h-10" />
										<LinkHover className="w-fit sub-paragraph font-medium capitalize" title={item.title} href={item.href} />
									</div>
								))}
							</div>
						</div>

						{/* Map */}
						<div>
							<h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[10px]">Map:</h1>
							{footernavbarItems.map((item) => (
								<LinkHover key={item.id} title={item.title} href={item.href} className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]" />
							))}
						</div>
					</div>

					{/* Email */}
					<div className="pt-[20px] flex items-center gap-x-[10px]">
						<h1 className="paragraph font-medium font-NeueMontreal text-secondry">Email:</h1>
						<LinkHover title="thecheespace@gmail.com" href="/" className="before:h-[1px] after:h-[1px] paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]" />
					</div>
				</div>
			</div>

			{/* Contacts */}


			{/* Footer Bottom: Copyright & Branding */}
			<div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">

				{/* Logo */}
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href={"/"}>
						<Image src={logo} alt="cheespace logo" width={120} height={120} />
					</Link>
				</div>

				{/* Copyright & Website Credit */}
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">©thecheespace 2025.</h1>
						<LinkHover title="Legal Terms" href="/" className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]" />
					</div>
					<div>
						<LinkHover title="Website by Cheespace" href="/" className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]" />
					</div>
				</div>
			</div>
		</footer>
	);
}
