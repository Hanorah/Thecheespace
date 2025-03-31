import { RoundButton } from "@/components";
export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								services
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[100%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							Let’s be honest.&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								There’s no excuse for a weak online presence anymore. No one has time for outdated websites, scattered branding, or ineffective marketing.
								Focus on what you do best &nbsp;
							</span>
							growing your business, while we do what we do best. Building digital experiences that set you apart and puts your business on the map.
						</p>
						<div className="flex flex-col  items-start gap-[10px]">
							<div className="flex items-start ml-10 mb-5 bg-secondry cursor-pointer rounded-full group">
								<RoundButton
									href="/contact"
									title="start the project"
									className="bg-white text-black"
									bgcolor="#000"
									style={{ color: "#fff" }}
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									We do this by following <br /> simple approach:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Goal defines it all
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											What do you want to achieve?
											<br className="sm:hidden xm:hidden" /> Understanding the
											purpose of your <br className="sm:hidden xm:hidden" />
											brand allows us to tailor it to ensure it
											<br className="sm:hidden xm:hidden" /> hits the mark and
											drives results.
										</p>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Audience is the hero
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											Who is it for? What do they want? Why
											<br className="sm:hidden xm:hidden" /> does it matter to
											them? We need to know
											<br className="sm:hidden xm:hidden" /> your audience well
											enough to deliver a <br className="sm:hidden xm:hidden" />
											personalized brand that they truly
											<br className="sm:hidden xm:hidden" />
											care about.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Context makes a difference
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											Your brand doesn’t exist in a vacuum—it needs to make an impact where it matters most.
											<br className="sm:hidden xm:hidden" />
											Will your audience find you online, in a meeting, at a conference, or through social media?
											<br className="sm:hidden xm:hidden" /> Every touchpoint matters.
											<br className="sm:hidden xm:hidden" /> That’s why we tailor your branding, website, and marketing strategy to fit the context in which it will be seen and experienced.

										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
