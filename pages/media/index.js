import React from 'react';
import PropTypes from 'prop-types';
import MediaSection from 'components/containers/Media/MediaSection';
import { GeneralSubscriptionSection } from 'components/containers/Common';
import { Layout } from 'components/layout';
import { withNamespaces } from 'i18n';

const postsData = [
	{
		title: 'Post Title 1',
		date: 'Feb 20, 2019',
		image: 'https://picsum.photos/200/200/?image=0',
	},
	{
		title: 'Post Title 2',
		date: 'Feb 22, 2019',
		image: 'https://picsum.photos/200/200/?image=2',
	},
	{
		title: 'Post Title 3',
		date: 'Feb 23, 2019',
		image: 'https://picsum.photos/200/200/?image=3',
	},
	{
		title: 'Post Title 4',
		date: 'Feb 24, 2019',
		image: 'https://picsum.photos/200/200/?image=4',
	},
	{
		title: 'Post Title 5',
		date: 'Feb 25, 2019',
		image: 'https://picsum.photos/200/200/?image=5',
	},
	{
		title: 'Post Title 6',
		date: 'Feb 26, 2019',
		image: 'https://picsum.photos/200/200/?image=6',
	},
	{
		title: 'Post Title 7',
		date: 'Feb 27, 2019',
		image: 'https://picsum.photos/200/200/?image=7',
	},
	{
		title: 'Post Title 8',
		date: 'Feb 28, 2019',
		image: 'https://picsum.photos/200/200/?image=8',
	},
	{
		title: 'Post Title 9',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=9',
	},
	{
		title: 'Post Title 10',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=10',
	},
	{
		title: 'Post Title 11',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=11',
	},
	{
		title: 'Post Title 12',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=12',
	},
	{
		title: 'Post Title 1',
		date: 'Feb 20, 2019',
		image: 'https://picsum.photos/200/200/?image=0',
	},
	{
		title: 'Post Title 2',
		date: 'Feb 22, 2019',
		image: 'https://picsum.photos/200/200/?image=2',
	},
	{
		title: 'Post Title 3',
		date: 'Feb 23, 2019',
		image: 'https://picsum.photos/200/200/?image=3',
	},
	{
		title: 'Post Title 4',
		date: 'Feb 24, 2019',
		image: 'https://picsum.photos/200/200/?image=4',
	},
	{
		title: 'Post Title 5',
		date: 'Feb 25, 2019',
		image: 'https://picsum.photos/200/200/?image=5',
	},
	{
		title: 'Post Title 6',
		date: 'Feb 26, 2019',
		image: 'https://picsum.photos/200/200/?image=6',
	},
	{
		title: 'Post Title 7',
		date: 'Feb 27, 2019',
		image: 'https://picsum.photos/200/200/?image=7',
	},
	{
		title: 'Post Title 8',
		date: 'Feb 28, 2019',
		image: 'https://picsum.photos/200/200/?image=8',
	},
	{
		title: 'Post Title 9',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=9',
	},
	{
		title: 'Post Title 10',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=10',
	},
	{
		title: 'Post Title 11',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=11',
	},
	{
		title: 'Post Title 12',
		date: 'Feb 29, 2019',
		image: 'https://picsum.photos/200/200/?image=12',
	},
];

class MediaPage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['media-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Media Page"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* MEDIA SECTION */}

				<MediaSection
					title={t('hero-title')}
					postsData={postsData}
					currentPage={1}
					postsPerPage={8}
				/>

				{/* FORM SECTION */}
				<GeneralSubscriptionSection
					title="More to Come!"
					subtitle="Sign up for our newsletter to get the latest product announcements"
					btnText="Submit"
					imgSrc="/static/images/_home/home-subscription-350x250.png"
					alt="deep cast"
				/>
			</Layout>
		);
	}
}
MediaPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('media-page')(MediaPage);
