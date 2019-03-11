import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/layout';
import {
	FieldEvalHeroSection,
	TripleChartSection,
} from 'components/containers/FieldEvaluation';
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

const tripleChartData = [
	{
		id: 1,
		imgSrc: '/static/images/_field-evaluation/field-eval-chart-1.jpg',
		alt: 'Deep Cast',
		title: 'Automatic Forecasting',
		description:
			'lorem 1 	This is some short description that explains whta the	product does.',
	},
	{
		id: 2,
		imgSrc: '/static/images/_field-evaluation/field-eval-chart-2.jpg',
		alt: 'Deep Cast',
		title: 'Quick Reservoir Insights',
		description:
			'lorem 1 	This is some short description that explains whta the	product does. ',
	},
	{
		id: 3,
		imgSrc: '/static/images/_field-evaluation/field-eval-chart-3.jpg',
		alt: 'Deep Cast',
		title: 'Automatic Forecasting',
		description:
			'lorem 1 	This is some short description that explains whta the	product does. ',
	},
];

class FieldEvaluationPage extends Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['field-evaluation-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Field Evaluation"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<FieldEvalHeroSection
					title={t('hero-title')}
					subtitle={t('hero-subtitle')}
					bgImgSrc="/static/images/_field-evaluation/field-eval-header.jpg"
				/>

				{/* BLUE BOX SECTION */}
				<BlueboxSection
					bgImgSrc="/static/images/_general/blue-box-bg.jpg"
					title="Lot of drilling	so speed is critical"
					description="This is some short description that explains whta the
					product does. This is some short description that explains
					product does. This is some short description that explains
					whta the product does"
				/>

				{/* TEXT & CHART SECTION */}
				<TripleChartSection sectionData={tripleChartData} />

				{/* BORDER BOX SECTION */}
				<BorderboxSection
					title="How the product works"
					para1="This is some short description that explains whta the
					product does. This is some short description that explains
					whta the product does"
					para2="This is some short description that explains whta the
					product does."
					imgSrc="/static/images/_field-evaluation/field-eval-graph-400x250.jpg"
					imgLocation="left"
				/>

				{/* CONTENT SLIDER SECTION */}
				<ContentSliderSection
					items={sliderItems}
					imgSrc="/static/images/_field-evaluation/field-eval-slider-800x500.jpg"
					imgLocation="right"
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

FieldEvaluationPage.propTypes = {
	t: PropTypes.func.isRequired,
};
export default withNamespaces('field-evaluation-page')(FieldEvaluationPage);
