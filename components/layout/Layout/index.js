import React from 'react';
import Head from 'next/head';
import { Footer, Main, Header } from 'components/layout';
import MobileNav from 'components/navigation/MobileNav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export const Layout = ({ children, title, description }) => (
	<React.Fragment>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* Import CSS for html video component  */}
			<link
				rel="stylesheet"
				type="text/css"
				href="/static/css/carousel.min.css"
			/>
		</Head>
		<Header />

		<div id="main-content-right">
			<MobileNav />
			<Main>{children}</Main>
			<Footer />
		</div>
	</React.Fragment>
);

export default Layout;
