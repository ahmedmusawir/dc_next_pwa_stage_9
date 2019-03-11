import React from 'react';
import { Layout } from 'components/layout';
import {
	AboutHeroSection,
	TeamMemberSection,
} from 'components/containers/About';
import {
	JoinUsSection,
	RelatedMediaSection,
} from 'components/containers/Common';

import { withNamespaces } from 'i18n';

const coreTeamData = [
	{
		id: 1,
		name: 'Hector Klie',
		description: 'CEO, Lead Data Scientist',
		imgSrc: '/static/images/_about/_members/hector-klie.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/hklie/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 2,
		name: 'Arturo Klie',
		description: 'CTO, Sr. Software Engineer',
		imgSrc: '/static/images/_about/_members/arturo-klie.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/klieart/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 3,
		name: 'Duc Le',
		description: 'Sr. Reservoir Engineer, Software Engineer',
		imgSrc: '/static/images/_about/_members/duc-le.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/duchuule/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 4,
		name: 'Duc Vuong',
		description: 'Sr. Petroleum Engineer, Software Engineer',
		imgSrc: '/static/images/_about/_members/duc-vuong.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/duc-vuong/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 5,
		name: 'Wei Ma',
		description: 'Sr. Petroleum Engineer, Data Scientis',
		imgSrc: '/static/images/_about/_members/wei-ma.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/wei-ma-1b01b541/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
];

const advisorTeamData = [
	{
		id: 1,
		name: 'Yves Chevalier',
		description: 'Exploration Geosciences Expert',
		imgSrc: '/static/images/_about/_members/yves.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/yves-m-r-chevalier-1b915451/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 2,
		name: 'Tan Nguyen',
		description: 'Drilling and Production Engineer Expert',
		imgSrc: '/static/images/_about/_members/tan.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/tan-nguyen-031b8596/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 3,
		name: 'Reinaldo Gonzalez',
		description: 'Geomodeling and Risk Analysis Expert',
		imgSrc: '/static/images/_about/_members/reinaldo.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/gonzalezreinaldo/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 4,
		name: 'Horacio Florez',
		description: 'Computational Scientist and Geomechanics Expert',
		imgSrc: '/static/images/_about/_members/horacio.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/horacio-florez-87b37b24/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
	{
		id: 5,
		name: 'Mick Fetkovich',
		description: 'Petroleum Engineer Expert',
		imgSrc: '/static/images/_about/_members/fetkovich.jpg',
		linkedinUrl: 'https://www.linkedin.com/in/mick-fetkovich-90013235/',
		thirtyPlusIconTooltip: '30 years of experience',
		phpIconTooltip: 'Doctoral degree',
		shieldIconTooltip: 'This is A shield',
	},
];

const slideItems = [
	{
		id: 1,
		altText: 'CEO',
		caption: 'Gabriel 1',
		title: 'Use case 1',
		image: 'https://picsum.photos/800/400/?image=10',
	},
	{
		id: 2,
		altText: 'Slide 2',
		caption: 'Slide 2',
		title: 'Use case 2',
		image: 'https://picsum.photos/800/400/?image=02',
	},
	{
		id: 3,
		altText: 'Slide 3',
		caption: 'Slide 3',
		title: 'Use case 3',
		image: 'https://picsum.photos/800/400/?image=05',
	},
];

const relatedMediaItems = [
	{
		id: 1,
		title: 'Media content description 1',
		date: 'Feb 7, 2019',
		thumbnail: 'https://picsum.photos/400/250/?image=0',
		alt: 'deep cast article',
		postLink: '/article',
	},
	{
		id: 1,
		title: 'Media content description 2',
		date: 'Feb 8, 2017',
		thumbnail: 'https://picsum.photos/400/250/?image=1',
		alt: 'deep cast article',
		postLink: '/article',
	},
	{
		id: 1,
		title: 'Media content description 3',
		date: 'Feb 9, 2018',
		thumbnail: 'https://picsum.photos/400/250/?image=2',
		alt: 'deep cast article',
		postLink: '/article',
	},
];

class AboutPage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['about-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - AboutPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TEAM HERO SLIDER BLOCK */}
				<AboutHeroSection
					title={t('hero-title')}
					para1="Our results are reflected on our customers opinions Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Quam
				expedita facilis similique sapiente veritatis exercitationem
				quae amet debitis itaque assumenda ad atque"
					para2="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Molestias dolores quia sit harum accusamus quaerat"
					slideItems={slideItems}
				/>

				{/* TEAM MEMBER SECION 1 */}
				<TeamMemberSection title="Core Team" teamData={coreTeamData} />

				{/* TEAM MEMBER SECION 2 */}
				<TeamMemberSection title="Advisors" teamData={advisorTeamData} />

				{/* FORM SECTION */}
				<JoinUsSection
					title="Join our team"
					subtitle="Sign up for our newsletter to get the latest product
				announcements to get the latest product"
					btnText="Join Now"
					imgSrc="/static/images/_about/about-join-us-360x360.jpg"
					alt="Deep Cast"
				/>

				{/* RELATED MEDIA BLOCK */}
				<RelatedMediaSection
					headLine="Explore media content"
					mediaData={relatedMediaItems}
				/>
			</Layout>
		);
	}
}
export default withNamespaces('about-page')(AboutPage);
