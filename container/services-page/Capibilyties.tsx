"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";
import { serviceCapabilitiesItem } from "@/constants";

export default function Capibilyties() {
	const [hovered, setHovered] = useState(false);
	const [hovered1, setHovered1] = useState(false);
	return (
		<div className="w-full bg-about padding-y rounded-t-[20px]">
			<div className="w-[82%] sm:w-full xm:w-full padding-x mb-[70px]">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Get Online. Get Noticed. Get Growing.
					<br />
					Our Business Starter Kit is your shortcut to a professional brand and digital presence.
					No stress. No confusion. Just everything you need to launch and thrive.
				</h1>


			</div>
			<div className="w-full flex sm:flex-col xm:flex-col justify-between py-[20px] padding-x border-t border-[#21212155] sm:gap-[15px] xm:gap-[15px]">



				<div className="w-[90%] flex flex-col gap-y-[30px]">
					<h3 className="paragraph font-bold text-secondry font-NeueMontreal">
						Our Capabilities & Services:
					</h3>
					{serviceCapabilitiesItem.map((item) => (
						<div
							className="w-full flex sm:flex-col xm:flex-col justify-between sm:gap-[15px] xm:gap-[15px]"
							key={item.id}>
							<div className="w-[30%] flex justify-end mr-[150px] sm:hidden xm:hidden">
								{hovered && item.id === 1 ? (
									<Image
										src={item.src1}
										alt="img"
										width={300}
										height={200}
										className="w-[300px] h-[200px] rounded-[20px]"
									/>
								) : (
									hovered1 &&
									item.id === 1 && (
										<Image
											src={item.src2}
											alt="img"
											width={300}
											height={200}
											className="w-[300px] h-[200px] rounded-[20px]"
										/>
									)
								)}
							</div>
							<div className="w-[40%] sm:w-full xm:w-full">
								<div className="flex gap-x-[10px] flex-col">
									<div className="flex items-center gap-x-[10px] pb-[20px]">
										<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-secondry">
											{item.title1}
										</h1>
									</div>
								</div>
								<div
									className="flex flex-col gap-y-[5px]"
									onMouseEnter={() => setHovered(item.id === 1 && true)}
									onMouseLeave={() => setHovered(item.id === 1 && false)}>
									{item.links1.map((link) => (
										<Button
											href={link.href}
											title={link.title}
											key={link.id}
											className=" text-xs"
										/>
									))}
								</div>
							</div>
							<div className="w-[40%] sm:w-full xm:w-full">
								<div className="flex gap-x-[10px] flex-col">
									<div className="flex items-center gap-x-[30px] pb-[20px]">
										<span className="w-[8px] h-[8px] rounded-full bg-secondry" />
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-secondry">
											{item.title2}
										</h1>
									</div>
								</div>
								<div
									className="flex flex-col gap-y-[5px]"
									onMouseEnter={() => setHovered1(item.id === 1 && true)}
									onMouseLeave={() => setHovered1(item.id === 1 && false)}>
									{item.links2.map((link) => (
										<Button href={link.href} title={link.title} key={link.id} className="text-xs" />

									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
