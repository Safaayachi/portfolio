import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";


const Language = () => {
	const languages = [
		{ verbose: "english", value: "en" },
		{ verbose: "french", value: "fr" },
	];
	const router = useRouter();
	const { pathname, asPath, query, locale } = router;
	const { t, i18n } = useTranslation(["common", "home"]);
	const [selectedLanguage, setSelectedLanguage] = useState(locale);
	const changeLanguage = (language: string) => {
		setSelectedLanguage(language);
		router.push({ pathname, query }, asPath, { locale: language });
		i18n.changeLanguage(language);
	};
	return (
		<Fragment>
			<div
				onClick={() => {
					changeLanguage(i18n.language === "en" ? "fr" : "en");
				}}
				className="flex items-center text-center cursor-pointer gap-2"
			>
				{i18n.language === "en" ? (
					<span className=" text-xs">EN</span>
				) : (
					<span className=" text-xs">FR</span>
				)}
				
			</div>
		</Fragment>
	);
};
export default Language;