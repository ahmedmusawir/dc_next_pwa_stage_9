/**
 *
 * <QuickMigrateSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { PageContainer } from 'components/layout';
import {
	H4,
	H6,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const QuickMigrateSectionContainer = styled(SectionBackground)`
	// border: 1rem solid red;
`;

export class QuickMigrateSection extends Component {
	render() {
		const { imgSrc, title, para1, para2 } = this.props;

		return (
			<QuickMigrateSectionContainer className="pt-5 pb-5 section-container">
				<PageContainer>
					<Section gridStart="1250px">
						<Block flexBasis="50">
							<Fade>
								<Img src={imgSrc} alt="Deep Cast" className="img-fluid" />
							</Fade>
						</Block>
						<Block flexBasis="50">
							<Paragraph>
								<Fade>
									<H4 fontWeight="600" className="pb-4">
										{title}
									</H4>
									<H6 grey>{para1}</H6>
									<H6 grey>{para2}</H6>
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</QuickMigrateSectionContainer>
		);
	}
}

QuickMigrateSection.defaultProps = {
	theme: {},
};

export default QuickMigrateSection;
