import { useState } from "react";
import * as emailjs from "emailjs-com";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const serviceID = "service_wtz18oo";
const templateID = "template_t4avy8r";
const publicKey = "jBGvQCpye9Wfv8xWA";

export default function Form() {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		goal: "",
		date: "",
		budget: "",
		email: "",
		moreInfo: "",
		agreeToPolicy: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent page refresh

		if (!formData.agreeToPolicy) {
			alert("Please agree to the Privacy Policy before submitting.");
			return;
		}

		emailjs
			.send(serviceID, templateID, formData, publicKey)
			.then((response) => {
				alert("Email sent successfully!");
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((error) => {
				alert("Failed to send email. Try again.");
				console.error("FAILED...", error);
			});
	};

	return (
		<section className="w-full padding-x padding-y">
			<form onSubmit={sendEmail} className="w-full flex flex-col gap-[15px]">
				<div className="w-full flex flex-col gap-[15px]">
					{/* Name & Company */}
					<div className="w-full flex flex-col gap-[15px]">
						{/* Name & Company */}
						<div className="flex sm:flex-col xm:flex-col gap-[10px] w-full">
							{/* Name */}
							<div className="flex flex-col w-full sm:w-full">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
									Hi! My name is
								</h2>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Enter your name*"
									className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
									required
								/>
							</div>

							{/* Company */}
							<div className="flex flex-col w-full sm:w-full">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
									and I work with
								</h2>
								<input
									type="text"
									name="company"
									value={formData.company}
									onChange={handleChange}
									placeholder="Company name*"
									className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
									required
								/>
							</div>
						</div>

						{/* Goal */}
						<div className="flex flex-col w-full">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
								I’m looking for a partner to help me with
							</h2>
							<input
								type="text"
								name="goal"
								value={formData.goal}
								onChange={handleChange}
								placeholder="Your goal*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
								required
							/>
						</div>

						{/* Date */}
						<div className="flex flex-col w-full">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
								a vision I have for my business that I need completed by
							</h2>
							<input
								type="text"
								name="date"
								value={formData.date}
								onChange={handleChange}
								placeholder="Date*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
								required
							/>
						</div>

						{/* Budget */}
						<div className="flex flex-col w-full">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
								I am hoping to stay around a budget range of
							</h2>
							<input
								type="text"
								name="budget"
								value={formData.budget}
								onChange={handleChange}
								placeholder="Budget*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
								required
							/>
						</div>

						{/* Email */}
						<div className="flex flex-col w-full">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
								You can reach me at
							</h2>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="name@example.com"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[10px] transition duration-200 ease-in-out"
								required
							/>
						</div>

						<h2 className="sub-heading font-NeueMontreal font-normal text-secondry whitespace-normal">
							to start the conversation.<br /> Let’s create something that truly represents my business.
						</h2>
					</div>

					{/* Agreement & Submit Button */}
					<div className="w-full flex items-center justify-end pt-[50px]">
						<input type="checkbox" name="agreeToPolicy" onChange={handleChange} />
						<p>I agree with the &nbsp;</p>
						<Link href="/privacy">Privacy Policy </Link>

						<button
							type="submit"
							style={{
								backgroundColor: "black",
								color: "white",// Set background color
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "6px 10px",
								borderRadius: "999px", // Fully rounded
								transition: "all 0.3s ease",
								fontFamily: "NeueMontreal, sans-serif",
								textTransform: "uppercase",
								fontWeight: "normal",
								position: "relative",
								overflow: "hidden",
								marginLeft: "1em",
							}}
							className="small-text group"
						>
							{/* Text */}
							<span style={{ marginLeft: "15px", padding: "6px 10px", zIndex: 10 }}>
								Send Inquiry
							</span>


						</button>

					</div>
				</div>
			</form>
		</section >
	);
}
