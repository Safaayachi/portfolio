import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Language from "./Lang";

const Header = () => {
	const { t } = useTranslation(["home", "auth"]);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<Fragment>
			<header className="flex  items-center z-20 w-full bg-dark fixed shadow-xl">
				<nav className="relative items-center container sm:mx-auto  py-3 md:px-10 px-6 justify-start md:hidden ">
					<div
						onClick={
							showMenu
								? () => setShowMenu(false)
								: () => setShowMenu(true)
						}
						className="text-white "
					>
						Menu
					</div>
				</nav>
				{showMenu ? (
					<>
						<div
							onClick={() => setShowMenu(false)}
							className="fixed z-10 h-full sm:w-1/2 w-2/3 inset-0  bg-dark lg:hidden mt-12 "
						>
							<div className="flex flex-col">
								<div className=" w-full  flex  items-start px-4">
									<div className="relative w-36 h-36 p-2 border-8 border-solid border-secondary rounded-full shadow-md ">
										<Image
											alt={"personal picture"}
											src={"/images/img.png"}
											fill
											className="rounded-full shadow-xl "
										></Image>
									</div>
								</div>
								<div className="text-primary-tint text-xl font-bold tracking-wide px-6 py-4">
									Ayachi Safa
								</div>
								<div className="text-primary-tint py-1 tracking-widest px-6 py-4">
									Full Stack JavaScript Developer
								</div>
								<div className="flex flex-col gap-2 text-primary-tint pt-10 py-6 ">
									<div className="py-4 px-6 shadow-md text-xs hover:py-6 hover:bg-secondary">
										Home
									</div>
									<div className="py-4 px-6 shadow-md text-xs hover:py-6 hover:bg-secondary">
										Projects
									</div>
									<div className="py-4 px-6 shadow-md text-xs hover:py-6 hover:bg-secondary">
										Contact
									</div>
									<div className="py-4 px-6 shadow-md hover:py-6 hover:bg-secondary">
										<Language />
									</div>
								</div>
							</div>
						</div>
					</>
				) : null}
				<nav className="hidden relative items-center container sm:mx-auto  py-3 md:px-10 px-6 justify-end lg:flex ">
					<div className="flex justify-between space-x-24 text-primary-tint  text-xs cursor-pointer items-center">
						<div className="flex space-x-10 ">
							<div>Home</div>
							<div>Projects</div>
							<div>Contact</div>
							<Language />
						</div>
						<button className="btn btn-primary text-xs ">
							Download CV
						</button>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;
