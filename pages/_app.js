import Head from 'next/head';
import PropTypes from "prop-types";
import { Fragment } from "react";

import { 
	PAGE_DESCRIPTION, 
	PAGE_KEYWORDS, 
	PAGE_NAME 
} from "globals/constanst";
import { Normalize } from "globals/styles";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>{PAGE_NAME}</title>
				<meta name="description" content={PAGE_DESCRIPTION} />
				<meta name="keywords" content={PAGE_KEYWORDS} />
			</Head>
			<Normalize />
			<Component {...pageProps} />
		</Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

export default MyApp;
