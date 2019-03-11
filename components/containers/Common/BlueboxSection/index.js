/**
 *
 * <BlueboxSection />
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

const BlueboxSectionContainer = styled(SectionBackground)`
	.blue-box-section {
		.bluebox {
			width: 55%;

			img {
				display: none;
			}
			.title {
				@media (max-width: 1078px) {
					padding-right: 8rem;
				}
				@media (min-width: 1100px) {
					padding-right: 8rem;
				}
			}

			@media (min-width: 1200px) {
				margin-right: -7rem;
			}
		}

		@media (max-width: 1365px) {
			.bg-block {
				width: 90%;
			}
			.bluebox {
				width: 75%;
				margin-top: 5rem;
				margin-bottom: 5rem;
				margin-right: -5rem;
			}
		}

		@media (max-width: 550px) {
			padding: 0rem;

			.bg-block {
				width: 100%;
				background: none;
			}
			.bluebox {
				width: 100%;
				margin-top: 0rem;
				margin-bottom: 0rem;
				margin-right: 0rem;
				padding: 0;

				h4,
				h6 {
					padding-left: 2rem;
					padding-right: 2rem;
					padding-top: 2rem;
				}
			}
			img {
				display: block !important;
				padding: 1rem 0 0 0 !important;
				width: 100%;
			}
		}
	}
`;

export class BlueboxSection extends Component {
	render() {
		const { bgImgSrc, title, description } = this.props;

		return (
			<BlueboxSectionContainer className="pb-5 pt-5 section-container">
				<PageContainer>
					<Section
						gridStart="550px"
						className="blue-box-section"
						justify="flex-start"
					>
						<Block
							flexBasis="90"
							className="bg-block"
							justify="flex-end"
							bgImgLink={bgImgSrc}
						>
							<Paragraph
								padding="4rem"
								margin="0"
								className="bluebox"
								bgColor="blue"
							>
								<Fade>
									<H4 light fontWeight="600" grey className="title">
										{title}
									</H4>
									<H6 light>{description}</H6>
									<Img src={bgImgSrc} alt="" className="img-fluid w-100" />
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</BlueboxSectionContainer>
		);
	}
}

BlueboxSection.defaultProps = {
	theme: {},
};

export default BlueboxSection;
