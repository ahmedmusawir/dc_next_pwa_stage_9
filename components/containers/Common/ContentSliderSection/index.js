/**
 *
 * <ContentSliderSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { ContentSlider } from 'components/layout';
import {
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const ContentSliderSectionContainer = styled(SectionBackground)`
	// border: 1rem solid red;
`;

export class ContentSliderSection extends Component {
	render() {
		const { imgSrc, items, imgLocation } = this.props;

		let leftBlock;
		let rightBlock;

		if (imgLocation === 'right') {
			leftBlock = 2;
			rightBlock = 1;
		} else {
			leftBlock = 1;
			rightBlock = 2;
		}

		return (
			<ContentSliderSectionContainer
				className="section-container"
				bgColor="light"
			>
				<Section gridStart="1200px">
					<Block flexBasis="50" bgImgLink={imgSrc} order={leftBlock}>
						<Img
							src={imgSrc}
							alt="deepcast"
							className="img-fluid w-100 d-xl-none"
						/>
					</Block>
					<Block flexBasis="50" order={rightBlock}>
						<Paragraph>
							<ContentSlider items={items} />
						</Paragraph>
					</Block>
				</Section>
			</ContentSliderSectionContainer>
		);
	}
}

ContentSliderSection.defaultProps = {
	theme: {},
};

export default ContentSliderSection;
