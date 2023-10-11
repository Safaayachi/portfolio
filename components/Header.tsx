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
			<header className="flex items-center z-20 w-full bg-white fixed shadow-sm">
				<nav className="relative flex  items-center container sm:mx-auto  py-3 md:px-10 px-6 justify-between ">
					Navbar
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;
