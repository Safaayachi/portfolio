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
				<section className="relative h-full w-full flex md:flex-row flex-col md:justify-between bg-dark md:px-32 px-10">
					<div className="pt-52 container flex flex-col space-y-10 sm:mx-auto md:px-16 ">
						<div className="hidden relative w-full lg:flex flex-row py-10 pb-32 px-6">
							<div className="flex flex-col w-1/2">
								<div className="flex flex-row space-x-2">
									<div className="text-primary-tint">
										Hello,
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
									<div className="text-primary-tint">
										<Typewriter
											options={{
												strings: [
													"Experienced Full Stack Developer with a passion for crafting web applications that combine elegant design with powerful functionality. Proficient in both frontend and backend development, I have a track record of bringing ideas to life, from concept to deployment.",
												],
												autoStart: true,
												loop: true,
											}}
										/>
									</div>
								</div>
								<div className="text-primary-tint  text-xs tracking-wide">
									FIND ME ON
								</div>
								<div className="flex flex-row justify-start items-center py-4 space-x-4">
									<a
										href="https://github.com/Safaayachi"
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
											<i className="icon-github text-white text-xs"></i>
										</div>
									</a>
									<a
										href="https://www.linkedin.com/in/ayachi-safa-26b9a4182/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
											<i className="icon-linkedin  text-xs"></i>
										</div>
									</a>
									<a
										href="https://stackoverflow.com/users/17593969/safaayachi"
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
											<i className="icon-stackoverflow1 text-white text-xs flex justify-center items-center"></i>
										</div>
									</a>
									<a
										href="https://www.linkedin.com/in/ayachi-safa-26b9a4182/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
											<i className="icon-skype text-white text-xs"></i>
										</div>
									</a>
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
						<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-6 md:px-28">
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<i className="icon-react text-9xl "></i>
							</div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<i className="icon-node-dot-js text-9xl "></i>
							</div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<i className="icon-typescript text-9xl "></i>
							</div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<i className="icon-mongodb text-9xl "></i>
							</div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<i className="icon-javascript text-9xl "></i>
							</div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<i className="icon-python text-9xl "></i>
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
						<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-6 md:px-28">
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
						</div>
						<div className="flex flex-row justify-center">
							<Link href="/">
								<button className="relative p-2 text-primary-tint text-xs bg-secondary rounded-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid   ">
									View All Works
								</button>
							</Link>
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

						<div className="relative w-full flex flex-col lg:flex-row p-6 items-center gap-32 md:px-28">
							<div className="flex flex-col relative w-full md:w-1/2 h-full">
								<div className=" text-primary font-bold text-xl p-2 my-10 text-center border border-solid border-primary-shade  opacity-70 ">
									Diplômes et Formations
								</div>
								<div className=" flex flex-row">
									<div className=" pr-0.5 border-l border-solid  h-full bg-gradient-to-b from-secondary to-secondary via-primary-shade" />

									<div className="grid grid-cols-1 grid-rows-3 gap-6 w-full">
										<div className="flex flex-row">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2  p-2">
												<div className="text-primary-tint font-bold text-xl">
													Diplôme national d'ingénieur
													en informatique
												</div>
												<div className=" flex flex-col gap-1">
													<div className="text-primary-shade font-semibold text-xxs">
														De septembre 2021 à
														juillet 2024
													</div>
													<div className="text-primary-tint font-bold text-sm">
														Ecole Polytechnique de
														sousse
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														Sousse, Tunisie
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-row">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2 p-2">
												<div className="text-primary-tint font-bold text-xl">
													Licence fondamentale en
													sciences de l'informatique
												</div>
												<div className="flex flex-col gap-1">
													<div className="text-primary-shade font-semibold text-xxs">
														De septembre 2017 à juin
														2021
													</div>
													<div className="text-primary-tint font-bold text-sm">
														ISIMM
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														Monastir, Tunisie
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-row">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2  p-2">
												<div className="text-primary-tint font-bold text-xl">
													Baccalaureat Scientifique
												</div>
												<div className="flex flex-col gap-1">
													<div className="text-primary-shade font-semibold text-xxs">
														Juin 2017
													</div>
													<div className="text-primary-tint font-bold text-sm">
														Lycée Dar Lamen
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														Kairouan, Tunisie
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col  relative w-full md:w-1/2 h-full">
								<div className="text-primary font-bold text-xl p-2 my-10 text-center border border-solid border-primary-shade opacity-70">
									Expériences professionnelles
								</div>
								<div className="flex flex-row">
									<div className=" pr-0.5 border-l border-solid   h-full bg-gradient-to-b from-secondary to-secondary via-primary-shade " />

									<div className="grid grid-cols-1 grid-rows-3 gap-6 w-full">
										<div className="flex flex-row ">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2  p-2">
												<div className="text-primary-tint font-bold text-md">
													Développeur junior Full
													Stack JavaScript - Stage
													Technicien
												</div>
												<div className=" flex flex-col">
													<div className="text-primary-shade font-semibold text-xxs">
														De juin 2023 à août 2023
													</div>
													<div className="text-primary-tint  text-xxs">
														Conception et mise en
														place d'une application
														Feedback Manager,
														facilitant l'attribution
														et la gestion efficace
														des retours
														utilisateurs.
														Intégration d'un widget
														dédié pour simplifier le
														processus d'attribution
														des feedbacks.
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														JoodLab Sousse
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-row">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2  p-2">
												<div className="text-primary-tint font-bold text-md">
													Développeur Web - Stage
													Ouvrier
												</div>
												<div className=" flex flex-col">
													<div className="text-primary-shade font-semibold text-xxs">
														De juin 2022 à août 2022
													</div>
													<div className="text-primary-tint  text-xxs">
														Création d'un clone de
														Wattpad, une plateforme
														immersive permettant aux
														utilisateurs de publier,
														découvrir et partager
														des histoires
														captivantes
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														JoodLab Sousse
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-row">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2  p-2">
												<div className="text-primary-tint font-bold text-md">
													Designer graphique
												</div>
												<div className=" flex flex-col">
													<div className="text-primary-shade font-semibold text-xxs">
														D'avril 2022 à juin 2022
													</div>
													<div className="text-primary-tint  text-xxs">
														Création de supports
														visuels pour des
														campagnes publicitaires.
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														VerdeLine Tunis
													</div>
												</div>
											</div>
										</div>
										<div className="flex flex-row">
											<div className="text-primary-tint w-12 border-t border-solid opacity-10 mr-2"></div>
											<div className=" w-full min-w-min bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out border border-solid border-primary-shade flex flex-col gap-2  p-2">
												<div className="text-primary-tint font-bold text-md">
													Technicien informatique -
													Stage PFE
												</div>
												<div className=" flex flex-col">
													<div className="text-primary-shade font-semibold text-xxs">
														De mars 2021 à juin 2021
													</div>
													<div className="text-primary-tint  text-xxs">
														Conception et mise en
														place Conception d'une
														application mobile pour
														le site e-commerce Zemny
														avec un chatbot
														automatisé sur toutes
														les plateformes, offrant
														une expérience
														utilisateur optimale.
													</div>
													<div className="text-primary-shade font-semibold text-xxs">
														Digitika Monastir
													</div>
												</div>
											</div>
										</div>
									</div>
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
						<div className="relative flex flex-col-reverse lg:flex-row gap-10 w-full items-center justify-center ">
							<div className=" w-2/5  ">
								<div className="flex flex-col  gap-2 w-full ">
									<div className="flex flex-row gap-2 w-full">
										<div className="w-full h-24 flex flex-col justify-center items-center bg-secondary rounded-md shadow-2xl cursor-pointer">
											<div>
												<i className="icon-phone-call text-primary text-xs"></i>
											</div>
											<div className="text-white text-xxs">
												+216 26 150 994
											</div>
										</div>
										<div className="w-full h-24 flex flex-col justify-center items-center bg-secondary rounded-md shadow-2xl cursor-pointer">
											<div>
												<i className="icon-map text-primary text-xs"></i>
											</div>
											<div className="text-white text-xxs">
												Sousse, Tunisie
											</div>
										</div>
									</div>
									<div className="flex flex-row gap-2 w-full">
										<div className="w-full h-24 flex flex-col justify-center items-center bg-secondary rounded-md shadow-2xl cursor-pointer ">
											<div>
												<i className="icon-edit text-primary text-xs"></i>
											</div>
											<div className="text-white text-xxs ">
												write a feedback
											</div>
										</div>
										<div className="w-full h-24 flex flex-col justify-center items-center bg-secondary rounded-md shadow-2xl cursor-pointer ">
											<div>
												<i className="icon-gmail text-white text-xs"></i>
											</div>
											<div className="text-white text-xxs ">
												safa.ayachi@polytechnicien.tn
											</div>
										</div>
									</div>
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
export default Home;
