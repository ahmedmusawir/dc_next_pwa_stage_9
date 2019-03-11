import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/DeepCast/global';
import DeepCastTheme from 'components/theme/DeepCast';
import { appWithTranslation } from 'i18n';

class DCApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	createUrl = router => {
		// This is to make sure we don't reference the router object at call time
		const { pathname, asPath, query } = router;
		return {
			get query() {
				return query;
			},
			get pathname() {
				return pathname;
			},
			get asPath() {
				return asPath;
			},
			back: () => {
				router.back();
			},
			push: (url, as) => router.push(url, as),
			pushTo: (href, as) => {
				const pushRoute = as ? href : null;
				const pushUrl = as || href;

				return router.push(pushRoute, pushUrl);
			},
			replace: (url, as) => router.replace(url, as),
			replaceTo: (href, as) => {
				const replaceRoute = as ? href : null;
				const replaceUrl = as || href;

				return router.replace(replaceRoute, replaceUrl);
			},
		};
	};

	render() {
		const { Component, pageProps, router } = this.props;
		const url = this.createUrl(router);
		return (
			<Container>
				<ThemeProvider theme={DeepCastTheme}>
					<Component {...pageProps} url={url} />
				</ThemeProvider>

				<GlobalStyle />
			</Container>
		);
	}
}

export default appWithTranslation(DCApp);
