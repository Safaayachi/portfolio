import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import Language from "./Lang";

const Header = () => {
	const { t } = useTranslation(["home", "auth"]);
	return (
		<Fragment>
			<header className="flex items-center z-20 w-full bg-dark fixed shadow-xl">
				<nav className="relative flex  items-center container sm:mx-auto  py-3 md:px-10 px-6 justify-end ">
					<div className="flex justify-between space-x-24 text-primary-tint  text-xs cursor-pointer items-center">
						<div className="flex space-x-10 ">
							<div>Home</div>
							<div>Projects</div>
							<div>Contact</div>
							<Language/>
						</div>
						<button className="btn btn-primary text-xs ">Download CV</button>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;
