/**
 *
 * <TripleChartSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { PageContainer } from 'components/layout';
import {
	H5,
	H6,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const TripleChartSectionContainer = styled(SectionBackground)`
	// border: 1rem solid red;
`;

export class TripleChartSection extends Component {
	render() {
		const { sectionData } = this.props;

		const sectionDataOutput = sectionData.map(data => {
			return (
				<Block flexBasis="33" direction="column">
					<Paragraph>
						<Fade>
							{/* <Chart type="line" /> */}
							<Img
								src={data.imgSrc}
								alt={data.alt}
								className="img-fluid w-100"
							/>
						</Fade>
					</Paragraph>
					<Paragraph className="text-center">
						<Fade>
							<H5 fontWeight="600" className="mb-4">
								{data.title}
							</H5>
							<H6>{data.description}</H6>
						</Fade>
					</Paragraph>
				</Block>
			);
		});

		return (
			<TripleChartSectionContainer className="pt-5 pb-5 section-container">
				<PageContainer>
					<Section gridStart="800px">{sectionDataOutput}</Section>
				</PageContainer>
			</TripleChartSectionContainer>
		);
	}
}

TripleChartSection.defaultProps = {
	theme: {},
};

export default TripleChartSection;
