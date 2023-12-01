import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";
import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import projectsData from "../../projects.json";
interface ProjectProps {
	project: {
		id: number;
		image: string;
		title: { [key: string]: string };
		description: { [key: string]: string };
		technologies: string[];
		link: string;
		linkGit: string;
	};
}

const Project: NextPage<ProjectProps> = ({ project }) => {
	const { t, i18n } = useTranslation(["home", "common", "button", "input"]);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div>
			<Layout>
				<section className="relative h-screen w-full flex md:flex-row flex-col md:justify-between bg-dark md:px-32 px-10">
					<div className="pt-24 container flex flex-col space-y-10 sm:mx-auto md:px-16 ">
						<div className="flex flex-col gap-2">
							<div className="relative  h-44 w-44 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out">
								<Image
									alt={"personal picture"}
									src={project.image}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
								/>
							</div>
							<div className="text-primary-tint font-semibold text-md pt-2">
								{t(project.title[i18n.language])}
							</div>
							<div>
								<div className="border-t border-solid border-primary-shade"></div>
							</div>
							<div className="relative flex flex-col  items-start ">
								<div className="h-full text-sm font-bold  py-2 text-primary-shade">
									Description
								</div>
								<div className="text-primary-tint  text-xs ">
									{t(project.description[i18n.language])}
								</div>
							</div>
							<div className="relative flex flex-col  items-start">
								<div className="h-full text-sm font-bold py-2  text-primary-shade">
									Technologies
								</div>
								<div className="text-primary-tint items-start flex flex-row gap-2 text-xs">
									{project.technologies.map(
										(technology, index) => (
											<div
												key={index}
												className="p-2 bg-primary text-primary-tint rounded-md shadow-md font-bold"
											>
												{technology}
											</div>
										)
									)}
								</div>
							</div>
							<div className="relative flex flex-col items-start">
								<div className="h-full text-xs font-bold py-2  text-primary-shade">
									Links to project
								</div>
								<div className="flex flex-row gap-2">
									<a
										href={project.linkGit}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
											<i className="icon-github text-white text-md"></i>
										</div>
									</a>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
											<i className="icon-earth text-white text-md"></i>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const project = projectsData.find((p) => p.id === Number(id));

	return {
		props: {
			project,
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};

export default Project;
