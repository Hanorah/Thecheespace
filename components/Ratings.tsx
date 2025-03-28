import Link from "next/link";

export default function Ratings() {
	return (
		<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
			<div className="relative w-full h-0 pb-[56.25%] shadow-lg mt-6 mb-4 overflow-hidden rounded-2xl">
				<iframe
					loading="lazy"
					className="absolute w-full h-full top-0 left-0 border-none"
					src="https://www.canva.com/design/DAGi0gdgoKA/dZHKkgtB8enRkOh2g-J_0w/watch?embed"
					allow="autoplay"
				></iframe>

			</div>
		</div>
	);
}
