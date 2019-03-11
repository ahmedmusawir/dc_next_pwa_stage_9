/**
 *
 * <ContentSliderRightSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { PageContainer, ContentSlider } from 'components/layout';
import {
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const ContentSliderRightSectionContainer = styled(SectionBackground)`
	// border: 1rem solid red;
`;

export class ContentSliderRightSection extends Component {
	render() {
		const { bgImgSrc, title, subtitle } = this.props;

		return (
			<ContentSliderRightSectionContainer
				className="section-container"
				bgColor="light"
			>
				<Section gridStart="1200px">
					<Block
						flexBasis="50"
						bgImgLink="/static/images/_data-integration/data-integ-slider-800x500.jpg"
						order={2}
					>
						<Img
							src="/static/images/_data-integration/data-integ-slider-800x500.jpg"
							alt="deepcast"
							className="img-fluid w-100 d-xl-none"
						/>
					</Block>
					<Block flexBasis="50" order={1}>
						<Paragraph>
							<ContentSlider />
						</Paragraph>
					</Block>
				</Section>
			</ContentSliderRightSectionContainer>
		);
	}
}

ContentSliderRightSection.defaultProps = {
	theme: {},
};

export default ContentSliderRightSection;
