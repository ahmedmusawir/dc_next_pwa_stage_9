/**
 *
 * <FieldDevHeroSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { PageContainer } from 'components/layout';
import {
	H1,
	H5,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const FieldDevHeroSectionContainer = styled(SectionBackground)`
	.product-hero {
		@media screen and (max-width: 991px) {
			display: flex;

			.hero-block-1 {
				flex-basis: 100%;
			}
			.hero-block-2 {
				display: none;
			}
		}
		@media screen and (max-width: 640px) {
			display: block;
			min-height: 40rem;

			.hero-block-1 {
				padding-top: 5rem;
			}
		}
		@media screen and (max-width: 350px) {
			.hero-block-1 {
				padding-top: 3rem;
			}
		}
	}
`;

export class FieldDevHeroSection extends Component {
	render() {
		const { bgImgSrc, title, subtitle } = this.props;

		return (
			<FieldDevHeroSectionContainer bgImgLink={bgImgSrc}>
				<PageContainer>
					<Section height="lg" className="product-hero">
						<Block flexBasis="50" className="hero-block-1 text-center">
							<Paragraph>
								<Fade>
									<H1 light fontWeight="800">
										{title}
									</H1>
									<H5 light>{subtitle}</H5>
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</FieldDevHeroSectionContainer>
		);
	}
}

FieldDevHeroSection.defaultProps = {
	theme: {},
};

export default FieldDevHeroSection;
