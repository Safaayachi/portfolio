import React, { Fragment } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Footer = () => {
	const { t } = useTranslation(["home"]);
	return (
		<footer className="w-full relative bg-secondary text-white">
			<div className="w-full container sm:mx-auto  md:px-10 px-6 py-16 lg:pt-10">
				footer
			</div>
		</footer>
	);
};

export default Footer;
