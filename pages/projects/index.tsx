import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";
import Layout from "../../components/Layout.tsx";
import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";

const Projects: NextPage = () => {
	const { t, i18n } = useTranslation(["home", "common", "button", "input"]);

	return (
		<div>
			<Layout>
				<section className="relative h-full w-full bg-dark md:px-32 px-10">
					<div className="pt-24 container flex flex-col space-y-10 sm:mx-auto md:px-16 ">
						<div className="w-full h-0.5 bg-gradient-to-r from-secondary via-primary-shade to-secondary "></div>
						<div>
							<div className="flex justify-center items-center text-xxs text-primary tracking-wide">
								PROJECTS
							</div>
							<div className="flex justify-center items-center text-3xl font-bold tracking-wide text-primary-tint">
								Recent works
							</div>
						</div>
						<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-6 md:px-28">
							<Link
								href={{
									pathname: `/projects/[id]`,
									query: {
										id: 1,
									},
								}}
							>
								<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
									<Image
										alt={"personal picture"}
										src={"/images/crowdFunding.jpeg"}
										layout="fill"
										objectFit="cover"
										className="rounded-md"
									/>
									<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
									<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
										CrowdFund - Plateforme de Financement
										Participatif Polyvalente
									</div>
								</div>
							</Link>

							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/movies.jpeg"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									Feelim - Recommandation de Films basée sur
									l'Humeur
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/feedback.jpeg"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20 flex items-center  h-14  bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									Feedback Manager
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/books.jpeg"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-14 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									Wattpad Clone
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/assa2h.png"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-16 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-16 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									CrowdFund - Plateforme de Financement
									Participatif Polyvalente
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/midan.png"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-16 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-16 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									CrowdFund - Plateforme de Financement
									Participatif Polyvalente
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/midan.png"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-16 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-16 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									CrowdFund - Plateforme de Financement
									Participatif Polyvalente
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/midan.png"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-16 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-16 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									CrowdFund - Plateforme de Financement
									Participatif Polyvalente
								</div>
							</div>
							<div className="relative h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={"/images/midan.png"}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
								<div className="absolute z-20 bg-black h-16 opacity-80 bottom-0 left-0 w-full"></div>
								<div className="absolute z-20  h-16 flex items-center   bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
									CrowdFund - Plateforme de Financement
									Participatif Polyvalente
								</div>
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
export default Projects;
