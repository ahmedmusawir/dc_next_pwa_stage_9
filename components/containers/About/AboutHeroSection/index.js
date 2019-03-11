/**
 *
 * <AboutHeroSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { ImageSlider } from 'components/layout';
import {
	H1,
	H6,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const AboutHeroSectionContainer = styled(SectionBackground)`
	.about-hero-section {
		.about-hero-text {
			@media (min-width: 1351px) and (max-width: 1550px) {
				padding: 1rem;
			}
			@media (max-width: 400px) {
				padding: 1rem;
			}
		}
	}
`;

export class AboutHeroSection extends Component {
	render() {
		const { title, para1, para2, slideItems } = this.props;

		return (
			<AboutHeroSectionContainer bgColor="light" className="section-container">
				<Section gridStart="1350px" height="lg" className="about-hero-section">
					<Block flexBasis="40">
						<Paragraph padding="4rem" className="about-hero-text">
							<Fade>
								<H1 fontWeight="800" info>
									{title}
								</H1>
								<H6 italic>{para1}</H6>
								<H6 italic>{para2}</H6>
							</Fade>
						</Paragraph>
					</Block>
					<Block flexBasis="60">
						<ImageSlider slideItems={slideItems} />
					</Block>
				</Section>
			</AboutHeroSectionContainer>
		);
	}
}

AboutHeroSection.defaultProps = {
	theme: {},
};

export default AboutHeroSection;
