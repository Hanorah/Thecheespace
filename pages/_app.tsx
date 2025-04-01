import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<>
			<Head>

				<title>CheeSpace | Web Development, Branding & Digital Marketing</title>
				<meta name="description" content="CheeSpace helps businesses grow online with expert web development, branding, and digital marketing solutions." />
				<meta name="keywords" content="web development, branding, digital marketing, business growth, e-commerce, SEO, CheeSpace" />
				<meta name="author" content="CheeSpace" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://thecheespace.vercel.app/" />


				<meta property="og:type" content="website" />
				<meta property="og:title" content="CheeSpace | Web Development, Branding & Digital Marketing" />
				<meta property="og:description" content="We help businesses shine online with stunning websites, branding, and marketing strategies." />
				<meta property="og:image" content="https://thecheespace.vercel.app/logo.png" />
				<meta property="og:url" content="https://thecheespace.vercel.app/" />


				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<Navbar />
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<Footer />
		</>
	);
}
