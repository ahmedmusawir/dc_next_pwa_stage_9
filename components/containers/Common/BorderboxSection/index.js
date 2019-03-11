/**
 *
 * <BorderboxSection />
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

const BorderboxSectionContainer = styled(SectionBackground)`
.border-box-img-right-section {
	padding-bottom: 6rem;

	@media (max-width: 1199px) {
		border: 10px solid #E9F8FD;
		margin-bottom: 4rem;
	}

	.img-block {
		border-top: 10px solid #E9F8FD;
		border-right: 10px solid #E9F8FD;
		border-bottom: 10px solid #E9F8FD;

		@media (min-width: 1200px) {
			img {
				margin-right: -12rem;
			}
		 }

	}

	.txt-block {
		border-top: 10px solid #E9F8FD;
		border-left: 10px solid #E9F8FD;
		border-bottom: 10px solid #E9F8FD;

	}

	@media (max-width: 1199px) {
		.img-block {
			border-top: 0px solid #E9F8FD;
			border-right: 0px solid #E9F8FD;
			border-bottom: 0px solid #E9F8FD;

			img {
				width: 100%;
			}
		}

		.txt-block {
			border-top: 0px solid #E9F8FD;
			border-left: 0px solid #E9F8FD;
			border-bottom: 0px solid #E9F8FD;

		}
	}

	@media (max-width: 500px) {
			.text-box {
				padding: 1rem !important;
			}
		}
	}

}
.border-box-img-left-section {
	padding-bottom: 6rem;

	@media (max-width: 1199px) {
		border: 10px solid #E9F8FD;
		margin-bottom: 4rem;
	}

	.img-block {
		border-top: 10px solid #E9F8FD;
		border-left: 10px solid #E9F8FD;
		border-bottom: 10px solid #E9F8FD;

		@media (min-width: 1200px) {
			img {
				margin-left: -12rem;
			}
		 }

	}

	.txt-block {
		border-top: 10px solid #E9F8FD;
		border-right: 10px solid #E9F8FD;
		border-bottom: 10px solid #E9F8FD;

	}

	@media (max-width: 1199px) {
		.img-block {
			border-top: 0px solid #E9F8FD;
			border-left: 0px solid #E9F8FD;
			border-bottom: 0px solid #E9F8FD;

			img {
				width: 100%;
			}
		}

		.txt-block {
			border-top: 0px solid #E9F8FD;
			border-right: 0px solid #E9F8FD;
			border-bottom: 0px solid #E9F8FD;

		}
	}

	@media (max-width: 500px) {
			.text-box {
				padding: 1rem !important;
			}
		}
	}

}
`;

export class BorderboxSection extends Component {
	render() {
		const { imgSrc, title, para1, para2, imgLocation } = this.props;

		let borderboxOutput;
		if (imgLocation === 'right') {
			borderboxOutput = (
				<PageContainer className="content-container">
					<Section
						gridStart="1200px"
						className="border-box-img-right-section"
						justify="flex-start"
					>
						<Block flexBasis="50" className="txt-block">
							<Paragraph padding="3rem" className="pt-5 pb-5 text-box">
								<Fade>
									<H4 fontWeight="600">{title}</H4>
									<H6 grey>{para1}</H6>
									<H6 grey>{para2}</H6>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="40" className="img-block">
							<Img src={imgSrc} alt="deepcast" className="img-fluid" />
						</Block>
					</Section>
				</PageContainer>
			);
		} else if (imgLocation === 'left') {
			borderboxOutput = (
				<PageContainer className="content-container">
					<Section
						gridStart="1200px"
						className="border-box-img-left-section"
						justify="flex-end"
					>
						<Block flexBasis="40" className="img-block">
							<Img src={imgSrc} alt="deepcast" className="img-fluid" />
						</Block>
						<Block flexBasis="50" className="txt-block">
							<Paragraph padding="3rem" className="pt-5 pb-5 text-box">
								<Fade>
									<H4 fontWeight="600">{title}</H4>
									<H6 grey>{para1}</H6>
									<H6 grey>{para2}</H6>
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			);
		} else {
			borderboxOutput = (
				<h1>Please enter imgLocation="left" or "right" for BorderboxSection</h1>
			);
		}

		return (
			<BorderboxSectionContainer className="pb-5 pt-5 section-container">
				{borderboxOutput}
			</BorderboxSectionContainer>
		);
	}
}

BorderboxSection.defaultProps = {
	theme: {},
};

export default BorderboxSection;
