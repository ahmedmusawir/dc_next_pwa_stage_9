import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/layout';
import {
	FieldDevHeroSection,
	SubsurfaceModelingSection,
	PhysicsSection,
} from 'components/containers/FieldDevelopment';
import {
	MoreInfoFormSection,
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

const subsurfaceModelingData = [
	{
		id: 1,
		imgSrc: '/static/images/_field-development/field-dev-complex.jpg',
		alt: 'deep cast',
		title: 'Complex',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores quia sit harum accusamus quaerat repudiandae.',
	},
	{
		id: 2,
		imgSrc: '/static/images/_field-development/field-dev-slow.jpg',
		alt: 'deep cast',
		title: 'Slow',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores quia sit harum accusamus quaerat repudiandae.',
	},
	{
		id: 3,
		imgSrc: '/static/images/_field-development/field-dev-inaccurate.jpg',
		alt: 'deep cast',
		title: 'Inaccurate',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores quia sit harum accusamus quaerat repudiandae.',
	},
];

class FieldDevelopmentPage extends Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['field-development-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Field Development"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<FieldDevHeroSection
					title={t('hero-title')}
					subtitle={t('hero-subtitle')}
					bgImgSrc="/static/images/_field-development/field-dev-header.jpg"
				/>

				{/* SUBSURFACE MODELING SECTION */}
				<SubsurfaceModelingSection
					headline="Challenges of traditional subsurface modeling"
					sectionData={subsurfaceModelingData}
				/>

				{/* PHYSICS SECTION */}
				<PhysicsSection
					topSection={[
						{
							title: 'Physics Informed AI',
							para1:
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Molestias dolores quia sit harum accusamus quaerat	repudiandae.',
							para2:
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Lorem ipsum dolor, sit amet consectetur adipisicing elit.	repudiandae.',
							tableHeaders: ['Rank', 'Senario', 'Confidence'],
							tableRowData: [
								{
									rank: '#1',
									senario: 'B',
									confidence: '92%',
								},
								{
									rank: '#2',
									senario: 'F',
									confidence: '84%',
								},
								{
									rank: '#3',
									senario: 'D',
									confidence: '76%',
								},
							],
						},
					]}
					bottomSection={[
						{
							title: 'Smart Optimization',
							para1:
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Molestias dolores quia sit harum accusamus quaerat	repudiandae.',
							para2:
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit.	Lorem ipsum dolor, sit amet consectetur adipisicing elit.	repudiandae.',
							imgSrc:
								'/static/images/_field-development/field-dev-physics-gadget-309x666.png',
							alt: 'deep cast',
						},
					]}
				/>

				{/* BORDER BOX SECTION */}
				<BorderboxSection
					title="How the product works"
					para1="This is some short description that explains whta the
					product does. This is some short description that explains
					whta the product does"
					para2="This is some short description that explains whta the
					product does."
					imgSrc="/static/images/_field-development/field-dev-graph-1.jpg"
					imgLocation="left"
				/>

				{/* CONTENT SLIDER SECTION */}
				<ContentSliderSection
					items={sliderItems}
					imgSrc="/static/images/_field-development/field-dev-slider-800x500.jpg"
					imgLocation="right"
				/>

				{/* FORM SECTION */}
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

FieldDevelopmentPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('field-development-page')(FieldDevelopmentPage);
