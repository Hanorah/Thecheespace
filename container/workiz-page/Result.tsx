export default function Result() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					The Result
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<div className="w-[20%] sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Project Outcomes:
							</h3>
						</div>
						<div className="w-[80%] sm:w-full xm:w-full flex sm:flex-col xm:flex-col gap-[20px]">
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									What They Said
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
									“Before working with CheeSpace, we struggled to explain

									what we do without sounding too ‘techy.’ But they

									came in and completely transformed our brand.
									<br className="sm:hidden xm:hidden" />
									Now, people actually get what Torlan is about!

									From our new website to our investor pitch decks,

									everything just makes sense. The team really

									understood our vision and made it even better.”
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									The Impact
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
									We didn’t just design a logo and call it a day.

									We built a clear, confident, and approachable brand

									that helps Torlan stand out in the blockchain world.
									<br className="sm:hidden xm:hidden" />
									Their website now speaks directly to businesses,

									not just blockchain experts. Their pitch decks feel

									like conversations, not just slides full of jargon.
									<br className="sm:hidden xm:hidden" />
									And most importantly? Torlan now connects with

									the right people—clients, partners, and investors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
