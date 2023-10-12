import React, { Fragment } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Footer = () => {
	const { t } = useTranslation(["home"]);
	return (
		<footer className="w-full relative bg-dark text-white ">
			<div className="w-full container sm:mx-auto  md:px-10 px-6 py-16 lg:pt-10 flex flex-col items-center">
				
				<div className="flex flex-row  items-center py-4 space-x-4">
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out"></div>
				</div>
				<div className="text-xxs text-primary-tint tracking-widest font-light">Ayachi Safa <span>&copy;</span> 2023 All rights reserved</div>
			</div>
		</footer>
	);
};

export default Footer;
