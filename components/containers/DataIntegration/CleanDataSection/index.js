/**
 *
 * <CleanDataSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { PageContainer } from 'components/layout';
import {
	H3,
	H5,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const CleanDataSectionContainer = styled(SectionBackground)`
	.data-int-clean-data-section {
		@media (max-width: 768px) {
			background-position: 25% 100%;
			.text-box {
				padding: 1rem;
			}
		}
	}
`;

export class CleanDataSection extends Component {
	render() {
		const { bgImgSrc, title, description } = this.props;

		return (
			<CleanDataSectionContainer className="section-container pb-5 pt-5">
				<PageContainer>
					<Section
						gridStart="1300px"
						bgImgLink={bgImgSrc}
						height="lg"
						className="data-int-clean-data-section"
					>
						<Block flexBasis="40" align="flex-start">
							<Paragraph padding="3rem" className="text-box">
								<Fade>
									<H3 fontWeight="600">{title}</H3>
									<H5 grey>{description}</H5>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="60">
							<Paragraph className="text-center">
								{/* JUST SHOWING BG IMAGE */}
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</CleanDataSectionContainer>
		);
	}
}

CleanDataSection.defaultProps = {
	theme: {},
};

export default CleanDataSection;
