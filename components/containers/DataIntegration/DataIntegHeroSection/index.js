/**
 *
 * <DataIntegHeroSection />
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
	H2,
	H3,
	H4,
	H5,
	H6,
	A,
	P,
	Div,
	Img,
	Video,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Button,
	Input,
	SectionBackground,
} from 'components/general';

const DataIntegHeroSectionContainer = styled(SectionBackground)`
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

export class DataIntegHeroSection extends Component {
	render() {
		const { bgImgSrc, title, subtitle } = this.props;

		return (
			<DataIntegHeroSectionContainer bgImgLink={bgImgSrc}>
				<PageContainer>
					<Section height="lg" className="product-hero">
						<Block flexBasis="50" className="hero-block-1">
							<Paragraph>
								<Fade>
									<H1 light fontWeight="600">
										{title}
									</H1>
									<H6 light>{subtitle}</H6>
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</DataIntegHeroSectionContainer>
		);
	}
}

DataIntegHeroSection.defaultProps = {
	theme: {},
};

export default DataIntegHeroSection;
