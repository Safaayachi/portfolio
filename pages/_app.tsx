import React from "react";
import "../styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n/next-i18next.config.js";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
	
		<Component {...pageProps} />
	
);

export default appWithTranslation(App);
