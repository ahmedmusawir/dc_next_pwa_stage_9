/**
 *
 * <SubsurfaceModelingSection />
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
	H4,
	H6,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const SubsurfaceModelingSectionContainer = styled(SectionBackground)`
	.field-dev-modeling-section {
		@media screen and (max-width: 575px) {
			h3 {
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}
	}
`;

export class SubsurfaceModelingSection extends Component {
	render() {
		const { headline, sectionData } = this.props;

		let sectionDataOutput = sectionData.map(data => {
			return (
				<Block flexBasis="33" direction="column" key={data.id}>
					<Paragraph>
						<Fade>
							<Img
								src={data.imgSrc}
								alt={data.alt}
								className="img-fluid w-100"
							/>
						</Fade>
					</Paragraph>
					<Paragraph className="text-center">
						<Fade>
							<H4 fontWeight="600">{data.title}</H4>
							<H6>{data.description}</H6>
						</Fade>
					</Paragraph>
				</Block>
			);
		});
		return (
			<SubsurfaceModelingSectionContainer className="pt-5 pb-5 section-container">
				<PageContainer>
					<Section
						gridStart="768px"
						height="10rem"
						className="field-dev-modeling-section"
					>
						<Block flexBasis="50">
							<H3 fontWeight="600" className="text-center pt-5">
								{headline}
							</H3>
						</Block>
					</Section>
					<Section
						gridStart="768px"
						className="mb-5 pb-5 field-dev-modeling-section"
					>
						{sectionDataOutput}
					</Section>
				</PageContainer>
			</SubsurfaceModelingSectionContainer>
		);
	}
}

SubsurfaceModelingSection.defaultProps = {
	theme: {},
};

export default SubsurfaceModelingSection;
