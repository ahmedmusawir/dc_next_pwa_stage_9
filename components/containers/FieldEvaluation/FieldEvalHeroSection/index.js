/**
 *
 * <FieldEvalHeroSection />
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

const FieldEvalHeroSectionContainer = styled(SectionBackground)`
	.product-hero {
		@media screen and (max-width: 991px) {
			display: flex;

			.hero-block-1 {
				flex-basis: 80%;
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

export class FieldEvalHeroSection extends Component {
	render() {
		const { bgImgSrc, title, subtitle } = this.props;

		return (
			<FieldEvalHeroSectionContainer bgImgLink={bgImgSrc}>
				<PageContainer>
					<Section height="lg" className="product-hero">
						<Block flexBasis="35" className="hero-block-1">
							<Paragraph>
								<Fade>
									<H1 info fontWeight="800">
										{title}
									</H1>
									<H5>{subtitle}</H5>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="60" className="hero-block-2">
							{/* <HeaderTooltipBox>
									<Fade>
										<H4 bold className="text-center mb-3">
											API: 1234567890
										</H4>
										<P>Some Information</P>
										<P>More Information</P>
										<P>Some Extra Information</P>
										<P>Last set of Information</P>
									</Fade>
								</HeaderTooltipBox> */}
						</Block>
					</Section>
				</PageContainer>
			</FieldEvalHeroSectionContainer>
		);
	}
}

FieldEvalHeroSection.defaultProps = {
	theme: {},
};

export default FieldEvalHeroSection;
