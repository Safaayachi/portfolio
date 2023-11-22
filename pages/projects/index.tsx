import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";
import Typewriter from "typewriter-effect";
import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import Layout from "../../components/Layout";

const Home: NextPage = () => {
	const { t, i18n } = useTranslation(["home", "common", "button", "input"]);
	return (
		<div>
			<Layout>
				<section className="relative h-full w-full flex md:flex-row flex-col md:justify-between bg-dark md:px-32 px-10">
					<div className="pt-52 container flex flex-col space-y-10 sm:mx-auto md:px-16 ">
						<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 p-6 md:px-28">
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
							<div className="h-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
						</div>
						<div className="flex justify-center items-center">
							<div className="flex flex-row gap-2 items-center">
								<div className="h-2 w-2 bg-primary rounded-full opacity-20 hover:opacity-50 hover:scale-125 transition duration-700 ease-in-out cursor-pointer"></div>
								<div className="h-2 w-2 bg-primary rounded-full opacity-20 hover:opacity-50 hover:scale-125 transition duration-700 ease-in-out cursor-pointer"></div>
								<div className="h-2 w-2 bg-primary rounded-full opacity-20 hover:opacity-50 hover:scale-125 transition duration-700 ease-in-out cursor-pointer "></div>
							</div>
						</div>
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
