import { welcome } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h2 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					Company
				</h2>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								About:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
							<div>
								<p className="paragraph font-NeueMontreal text-secondry">
									BLOCKCHAIN MADE SIMPLE

									Torlan helps businesses and creators use blockchain
									<br className="sm:hidden xm:hidden" />
									without the confusing tech talk.
									<br className="sm:hidden xm:hidden" />
									We design easy-to-use tools for secure transactions,
									<br className="sm:hidden xm:hidden" />
									digital identity, and smarter business solutions. <br /> No complexity—just real results.
								</p>

							</div>
							<div className="flex flex-col gap-y-[10px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Industry:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										Blockchain & Decentralized Solutions
									</p>
								</div>
								<div>
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Company Size:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										100+ People
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={welcome} />
			</div>
		</section>
	);
}
