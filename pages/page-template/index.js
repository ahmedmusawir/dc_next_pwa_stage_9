import React from 'react';
import { Layout, PageContainer } from 'components/layout';
import {
	H1,
	H2,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

class TestPage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - TestPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground className="section-container">
					<PageContainer>
						<Section>
							<Block flexflexBasis="100" className="text-center">
								<Paragraph>
									<H1 light>TestPage Template</H1>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

export default TestPage;
