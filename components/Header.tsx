import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Language from "./Lang";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

const Header = () => {
	const router = useRouter();
	const { t } = useTranslation(["home", "auth"]);
	const [isShowing, setIsShowing] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<Fragment>
			<header className="flex  items-center z-20 w-full bg-dark fixed shadow-xl">
				<nav className="relative py-4 items-center container sm:mx-auto   md:px-10 px-6 justify-start md:hidden ">
					<div
						onClick={
							showMenu
								? () => setShowMenu(false)
								: () => setShowMenu(true)
						}
						className="text-white "
					>
						<i className="icon-menu1 cursor-pointer text-white text-md "></i>
					</div>
				</nav>
				{showMenu ? (
					<>
						<div
							onClick={() => setShowMenu(false)}
							className="fixed z-10 h-full sm:w-1/2 w-2/3 inset-0  bg-dark lg:hidden mt-12 "
						>
							<div className="flex flex-col pt-6">
								<div className=" w-full  flex  items-start px-4">
									<div className="relative w-32 h-32  p-2 border-4 border-solid border-secondary rounded-full shadow-md ">
										<Image
											alt={"personal picture"}
											src={"/images/img.png"}
											fill
											className="rounded-full shadow-xl "
										></Image>
									</div>
								</div>
								<div className="text-primary-tint text-md font-bold tracking-wide px-6 py-4">
									Ayachi Safa
								</div>
								<div className="text-primary-tint text-xs tracking-widest px-6 py-1">
									Full Stack JavaScript Developer
								</div>
								<div className="flex flex-col gap-2 text-primary-tint pt-10 py-6 ">
									<div className="py-4 px-6 flex flex-row gap-2 shadow-md text-xs hover:py-6 hover:bg-secondary">
										<i className="icon-home text-white text-xs"></i>
										<div className="text-xs">Home</div>
									</div>
									<div className="py-4 px-6 flex flex-row gap-2 shadow-md text-xs hover:py-6 hover:bg-secondary">
										<i className="icon-layers text-white text-xs"></i>
										<div className="text-xs">Projects</div>
									</div>
									<div className="py-4 px-6 flex flex-row gap-2 shadow-md text-xs hover:py-6 hover:bg-secondary">
										<Language />
										<div className="text-xs">Language</div>
									</div>
									<div className="py-4 px-6 flex flex-row gap-2 shadow-md text-xs hover:py-6 hover:bg-secondary">
										<a href="/cv.pdf" download="cv">
											<i className="icon-download1 text-white text-xs"></i>
										</a>
										<div className="text-xs">
											Download cv
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				) : null}
				<nav className="hidden relative items-center container sm:mx-auto  md:px-10 px-6 justify-end lg:flex ">
					<div className="flex justify-between space-x-12 text-primary-tint  text-xs cursor-pointer items-center">
						<div className="flex space-x-10 ">
							<div
								className={`flex text-xs items-center justify-center border-solid border-b-2 border-b-transparent hover:border-b-primary ${
									router.pathname === "/"
										? "border-b-primary "
										: ""
								} `}
							>
								<Link href="/">Home</Link>
							</div>
							<div
								className={`flex h-14 text-xs  items-center justify-center border-solid border-b-2 border-b-transparent hover:border-b-primary ${
									router.pathname === "/projects"
										? "border-b-primary"
										: ""
								} `}
							>
								<Link href="/projects">Projects</Link>
							</div>
							<div className="flex h-14 items-center justify-center border-solid border-b-2 border-b-transparent hover:border-b-primary">
								<Language />
							</div>
						</div>
						<div className="relative flex h-14 items-center justify-center border-solid border-b-2 border-b-transparent hover:border-b-primary ">
							<button
								onMouseEnter={() => setIsShowing(true)} // Show on hover
								onMouseLeave={() => setIsShowing(false)} // Hide when not hovering
								className=""
							>
								<a href="/cv.pdf" download="cv">
									<i className="icon-download1 text-white text-xs"></i>
								</a>
							</button>

							<div
								className={`absolute top-0 right-0  w-52 text-center py-1 mt-16 transition-opacity text-white  duration-150 bg-dark  text-xxs  rounded-md shadow-3xl tracking-widest ${
									isShowing ? "opacity-100" : "opacity-0"
								}`}
							>
								click to download a copy of my cv
							</div>
						</div>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;
