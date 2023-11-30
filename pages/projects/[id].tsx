import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetServerSideProps } from "next";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";
import Typewriter from "typewriter-effect";
import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import Layout from "../../components/Layout.tsx";
import { Router, useRouter } from "next/router";

const Home: NextPage = () => {
	const { t, i18n } = useTranslation(["home", "common", "button", "input"]);
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			<Layout>
				<section className="relative h-full w-full flex md:flex-row flex-col md:justify-between bg-dark md:px-32 px-10">
					<div className="p-24 text-3xl text-white">{id}</div>
				</section>
			</Layout>
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const queries = context.query;
	console.log(queries.id);

	return {
		props: {
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};
export default Home;
