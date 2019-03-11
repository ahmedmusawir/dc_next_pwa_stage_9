import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/layout';
import {
	HomeHeroSection,
	VideoSection,
	TrippleBlueBoxSection,
	PartnersSection,
} from 'components/containers/Home';
import { GeneralSubscriptionSection } from 'components/containers/Common';
import { withNamespaces } from 'i18n';

const blueBoxData = [
	{
		id: 1,
		title: 'Data Integration',
		text:
			'Molestias dolores quia sit harum accusamus quaerat. Molestias dolores quia sit harum accusamus quaerat',
		link: '/product/data-integration',
		btnText: 'Learn More',
		imgSrc: '/static/images/_general/triple-box-fig-1.jpg',
		alt: 'Deep Cast Data Integration',
	},
	{
		id: 2,
		title: 'Field Evaluation',
		text:
			'Molestias dolores quia sit harum accusamus quaerat. Molestias dolores quia sit harum accusamus quaerat',
		link: '/product/field-evaluation',
		btnText: 'Learn More',
		imgSrc: '/static/images/_general/triple-box-fig-3.jpg',
		alt: 'Deep Cast Field Evaluation',
	},
	{
		id: 3,
		title: 'Field Development',
		text:
			'Molestias dolores quia sit harum accusamus quaerat. Molestias dolores quia sit harum accusamus quaerat',
		link: '/product/field-development',
		btnText: 'Learn More',
		imgSrc: '/static/images/_general/triple-box-fig-2.jpg',
		alt: 'Deep Cast Field Development',
	},
];

const partnersData = [
	{
		id: 1,
		logoSrc: '/static/images/partner-logo-1.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 2,
		logoSrc: '/static/images/partner-logo-2.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 3,
		logoSrc: '/static/images/partner-logo-3.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 4,
		logoSrc: '/static/images/partner-logo-4.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 5,
		logoSrc: '/static/images/partner-logo-5.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 6,
		logoSrc: '/static/images/partner-logo-1.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 7,
		logoSrc: '/static/images/partner-logo-3.jpg',
		alt: 'Partner Logo',
	},
	{
		id: 8,
		logoSrc: '/static/images/partner-logo-4.jpg',
		alt: 'Partner Logo',
	},
];

class HomePage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['home-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - HomePage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* HOME HERO SECTION */}
				<HomeHeroSection
					bgImgSrc="/static/images/_home/home-hero-1600.jpg"
					title={t('hero-title')}
					subtitle={t('hero-subtitle')}
				/>

				{/* VIDEO SECTION */}
				<VideoSection
					title="Simplify and Automate Through Innovations in Physics and AI"
					para1="To help the industrial sector thrive through the application
									of data-driven processes and cutting-edge AI application of
									data-driven processes and cutting-edge AI technologies."
					para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Atque temporibus neque ipsam esse incidunt corporis quam
					aliquid! Cum assumenda amet tempore exercitationem? Minima
					architecto a provident, corrupti nesciunt et praesentium."
					vidType="youtube"
					youtubeId="XeEYaX82jSE"
					posterSrc="/static/images/_home/home-video-cover.jpg"
				/>
				{/* <VideoSection
				title="Simplify and Automate Through Innovations in Physics and AI"
					para1="To help the industrial sector thrive through the application
									of data-driven processes and cutting-edge AI application of
									data-driven processes and cutting-edge AI technologies."
					para2="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Atque temporibus neque ipsam esse incidunt corporis quam
					aliquid! Cum assumenda amet tempore exercitationem? Minima
					architecto a provident, corrupti nesciunt et praesentium."
					vidType="html5"
					mp4Src="/static/videos/ai-vid.mp4"
					webmSrc=""
					posterSrc="/static/images/_home/home-video-cover.jpg"
				/> */}

				{/* TRIPLE BLUE BOX SECTION */}
				<TrippleBlueBoxSection
					title="Message related to how the company works knowing there are two
					main scopes"
					blueBoxData={blueBoxData}
				/>

				{/* PARTNER LOGO SECTION */}
				<PartnersSection
					title="We Strive for Cutting-Edge Solutions Through our Strategic
				High-Tech Partnerships"
					partnersData={partnersData}
				/>

				{/* FORM SECTION */}
				<GeneralSubscriptionSection
					title="More to Come!"
					subtitle="Sign up for our newsletter to get the latest product
				announcements"
					btnText="Submit"
					imgSrc="/static/images/_home/home-subscription-350x250.png"
					alt="deep cast"
				/>
			</Layout>
		);
	}
}
HomePage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('home-page')(HomePage);
