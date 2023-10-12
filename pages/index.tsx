import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n/next-i18next.config.js";
import Typewriter from "typewriter-effect";
import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	const { t, i18n } = useTranslation(["home", "common", "button", "input"]);
	return (
		<div>
			<Layout>
				<section className="relative h-full w-full flex md:flex-row flex-col md:justify-between bg-dark px-32 ">
					<div className="pt-52 container flex flex-col space-y-10 sm:mx-auto md:px-16 ">
						<div className="relative w-full flex flex-row py-10 pb-32 px-6">
							<div className="flex flex-col w-1/2">
								<div className="flex flex-row space-x-2">
									<div className="text-primary-tint">
										<Typewriter
											options={{
												strings: ["Hello,"],
												autoStart: true,
												loop: true,
											}}
										/>
									</div>

									<div className="text-primary">I'm</div>
								</div>
								<div className="text-primary-tint text-3xl font-bold tracking-wide">
									Ayachi Safa
								</div>
								<div className="text-primary-tint py-1 tracking-widest">
									Full Stack JavaScript Developer
								</div>
								<div className="text-primary-tint font-extralight text-xs leading-6 py-4 pb-10 ">
									Experienced Full Stack Developer with a
									passion for crafting web applications that
									combine elegant design with powerful
									functionality. Proficient in both frontend
									and backend development, I have a track
									record of bringing ideas to life, from
									concept to deployment.
								</div>
								<div className="text-primary-tint  text-xs tracking-wide">
									FIND ME ON
								</div>
								<div className="flex flex-row justify-start items-center py-4 space-x-4">
									<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
									<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
									<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								</div>
							</div>
							<div className=" w-1/2  flex justify-end items-start px-4">
								<div className="relative w-52 h-52 p-2 border-8 border-solid border-secondary rounded-full shadow-md hover:scale-125 transition duration-700 ease-in-out">
									<Image
										alt={"personal picture"}
										src={"/images/img.png"}
										fill
										className="rounded-full shadow-xl "
									></Image>
								</div>
							</div>
						</div>
						<div className="w-full h-0.5 bg-gradient-to-r from-secondary via-primary-shade to-secondary "></div>
						<div>
							<div className="flex justify-center items-center text-xxs text-primary tracking-wide">
								SKILLS
							</div>
							<div className="flex justify-center items-center text-3xl font-bold tracking-wide text-primary-tint">
								Technologies
							</div>
						</div>
						<div className="grid grid-rows-2 w-full gap-6 p-6 px-28">
							<div className="grid grid-cols-3 gap-6">
								<div className=" h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							</div>
							<div className="grid grid-cols-3 gap-6">
								<div className=" h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							</div>
						</div>
						<div className="w-full h-0.5 bg-gradient-to-r from-secondary via-primary-shade to-secondary "></div>
						<div>
							<div className="flex justify-center items-center text-xxs text-primary tracking-wide">
								PROJECTS
							</div>
							<div className="flex justify-center items-center text-3xl font-bold tracking-wide text-primary-tint">
								Recent works
							</div>
						</div>
						<div className="grid grid-rows-2 w-full gap-6 p-6 px-28">
							<div className="grid grid-cols-3 gap-6">
								<div className=" h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							</div>
							<div className="grid grid-cols-3 gap-6">
								<div className=" h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
								<div className=" bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							</div>
							<div className="flex flex-row justify-center">
								<button className="relative p-2 text-primary-tint text-xs bg-secondary rounded-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid   ">
									View All Works
								</button>
							</div>
						</div>
						<div className="w-full h-0.5 bg-gradient-to-r from-secondary via-primary-shade to-secondary "></div>
						<div>
							<div className="flex justify-center items-center text-xxs text-primary tracking-wide">
								YEARS OF EXPERIENCE
							</div>
							<div className="flex justify-center items-center text-3xl font-bold tracking-wide text-primary-tint">
								My Resume
							</div>
						</div>
						<div className="relative w-full flex flex-row p-6 gap-32 px-28">
							<div className="relative w-1/2 h-full flex flex-row">
								<div className=" pr-0.5 border-l border-solid  h-full bg-gradient-to-b from-secondary to-secondary via-primary-shade" />

								<div className="grid grid-cols-1 grid-rows-3 gap-12 py-4">
									<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
									<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
									<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
								</div>
								<div className="grid grid-cols-1 grid-rows-3 gap-6 w-full">
									<div className=" w-full h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade"></div>
									<div className=" w-full h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade"></div>
									<div className=" w-full h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade"></div>
								</div>
							</div>
							<div className="relative w-1/2 h-full flex flex-row ">
								<div className=" pr-0.5 border-l border-solid  h-full bg-gradient-to-b from-secondary to-secondary via-primary-shade" />

								<div className="grid grid-cols-1 grid-rows-3 gap-12 py-4">
									<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
									<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
									<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
								</div>
								<div className="grid grid-cols-1 grid-rows-3 gap-6 w-full">
									<div className=" w-full h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade"></div>
									<div className=" w-full h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade"></div>
									<div className="w-full h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade"></div>
								</div>
							</div>
						</div>
						<div className="w-full h-0.5 bg-gradient-to-r from-secondary via-primary-shade to-secondary "></div>
						<div>
							<div className="flex justify-center items-center text-xxs text-primary tracking-wide">
								CONTACT
							</div>
							<div className="flex justify-center items-center text-3xl font-bold tracking-wide text-primary-tint">
								Contact With Me
							</div>
						</div>
						<div className="relative flex flex-row gap-10 w-full px-28">
							<div className="w-2/6  p-6">
								<div className="grid grid-cols-1 grid-rows-4 gap-6 w-full">
									<div className="w-full h-24 bg-secondary rounded-md shadow-2xl cursor-pointer"></div>
									<div className="w-full h-24 bg-secondary rounded-md shadow-2xl cursor-pointer "></div>
									<div className="w-full h-24 bg-secondary rounded-md shadow-2xl cursor-pointer "></div>
									<div className="w-full h-24 bg-secondary rounded-md shadow-2xl cursor-pointer "></div>
								</div>
							</div>
							<div className="w-4/6 p-6">
								
								<form
									action="
								"
									className="bg-secondary rounded-md shadow-2xl flex flex-col p-6 gap-4 h-full"
								>
									<div className="grid grid-cols-2 grid-rows-2 gap-4">
										<input type="text" className="bg-dark text-primary-tint text-xxs" placeholder="Enter Your Name"/>
										<input type="number" className="bg-dark text-primary-tint text-xxs" placeholder="Enter Your Phone"/>
										<input type="text" className="bg-dark text-primary-tint text-xxs" placeholder="Enter Your Email"/>
										<input type="text" className="bg-dark text-primary-tint text-xxs" placeholder="Enter Your Subject"/>
									</div>
									<textarea className="bg-dark h-full text-primary-tint text-xxs" placeholder="Enter Your Message"></textarea>
									<div className="flex justify-center py-4">
										<button className="btn btn-secondary-outline p-2 font-extralight tracking-wide text-xxs">Send Message</button>
									</div>

								</form>
							</div>
						</div>
						<div className="w-full h-0.5 bg-gradient-to-r from-secondary via-primary-shade to-secondary "></div>
					</div>
				</section>
			</Layout>
		</div>
	);
};
export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button", "input"],
				nextI18NextConfig
			)),
		},
	};
};
export default Home;