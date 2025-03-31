import Image from "next/image";
import { Ratings } from "@/components";


export default function Principles() {
	return (
		<section className="w-full bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry">
					We’ve built long-lasting partnerships
					<br className="sm:hidden xm:hidden" /> with the most ambitious brands
					<br className="sm:hidden xm:hidden" />
					across the globe:
				</h1>
			</div>

			<div className="padding-x padding-y">
				<Ratings />
			</div>
		</section>
	);
}
