import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/layout';
import {
	DataIntegHeroSection,
	CleanDataSection,
	QuickMigrateSection,
} from 'components/containers/DataIntegration';
import {
	MoreInfoFormSection,
	BlueboxSection,
	BorderboxSection,
	ContentSliderSection,
} from 'components/containers/Common';
import { withNamespaces } from 'i18n';

const sliderItems = [
	{
		id: 1,
		altText: 'CEO',
		caption: 'Gabriel 1',
		title: 'Use case 1',
		quote:
			'lorem 1 	This is some short description that explains whta the	product does. This is some short description that explains whta the product does.',
		customer: 'Gabriel 1',
		jobTitle: 'President & CEO 1',
	},
	{
		id: 2,
		altText: 'Slide 2',
		caption: 'Slide 2',
		title: 'Use case 2',
		quote:
			'lorem 2 	This is some short description that explains whta the	product does. This is some short description that explains whta the product does.',
		customer: 'Gabriel 2',
		jobTitle: 'President & CEO 2',
	},
	{
		id: 3,
		altText: 'Slide 3',
		caption: 'Slide 3',
		title: 'Use case 3',
		quote:
			'lorem 3 	This is some short description that explains whta the	product does. This is some short description that explains whta the product does.',
		customer: 'Gabriel 3',
		jobTitle: 'President & CEO 3',
	},
];

class DataIntegrationPage extends Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['data-integration-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Data Integration"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<DataIntegHeroSection
					title={t('hero-title')}
					subtitle={t('hero-subtitle')}
					bgImgSrc="/static/images/_data-integration/data-integration-header.jpg"
				/>

				{/* BLUE BOX SECTION */}
				<BlueboxSection
					bgImgSrc="https://picsum.photos/1200/500/?image=5"
					title="Problem with organizing data"
					description="This is some short description that explains whta the
				product does. This is some short description that explains
				product does. This is some short description that explains
				whta the product does"
				/>

				{/* CLEAN DATA SECTION */}
				<CleanDataSection
					bgImgSrc="/static/images/_data-integration/data-integ-clean-data-bg.jpg"
					title="Clean and organize valuable data"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					repudiandae."
				/>

				{/* QUICK MIGRATE SECTION - Img LEFT */}
				<QuickMigrateSection
					imgSrc="/static/images/_data-integration/data-integ-quick-migrate.jpg"
					title="Quickly migrate your old data into one place for all your
					tools"
					para1="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Molestias dolores quia sit harum accusamus quaerat
					repudiandae. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Molestias dolores quia sit harum accusamus
					quaerat repudiandae."
					para2="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Molestias dolores quia sit harum accusamus quaerat"
				/>

				{/* BORDER BOX SECTION */}
				<BorderboxSection
					title="How the product works"
					para1="This is some short description that explains whta the
					product does. This is some short description that explains
					whta the product does"
					para2="This is some short description that explains whta the
					product does."
					imgSrc="https://picsum.photos/400/250/?image=7"
					imgLocation="right"
				/>

				{/* CONTENT SLIDER SECTION */}
				<ContentSliderSection
					items={sliderItems}
					imgSrc="/static/images/_data-integration/data-integ-slider-800x500.jpg"
					imgLocation="left"
				/>

				{/* MORE INFO FORM SECTION */}
				<MoreInfoFormSection
					title="For more information"
					description="Sign up for our newsletter to get the latest product
				announcements to get the latest product"
					btnText="Submit"
					imgSrc="/static/images/_general/info-form-.jpg"
				/>
			</Layout>
		);
	}
}

DataIntegrationPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('data-integration-page')(DataIntegrationPage);
