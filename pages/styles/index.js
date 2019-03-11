import React from 'react';
import { Layout, PageContainer, MediaWithPagination } from 'components/layout';
import {
	H1,
	H2,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

class TestPagination extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [
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
			],
		};
	}

	render() {
		return (
			<Layout
				title="Deep Cast - TestPagination"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground className="section-container">
					<PageContainer>
						<Section>
							<Block flexflexBasis="100" className="text-center">
								<Paragraph>
									<H1>TestPagination Template</H1>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				<MediaWithPagination
					posts={this.state.posts}
					currentPage={1}
					postsPerPage={4}
				/>
			</Layout>
		);
	}
}

export default TestPagination;
