/**
 *
 * <PartnersSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import {
	H4,
	A,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const PartnersSectionContainer = styled(SectionBackground)`
	.home-partners-section {
		.headline-block {
			@media screen and (min-width: 700px) {
				padding: 0 5rem;
			}
			@media screen and (min-width: 1300px) {
				padding: 0 12rem;
			}
			@media screen and (min-width: 1600px) {
				padding: 0 20rem;
			}
			@media screen and (min-width: 1800px) {
				padding: 0 25rem;
			}
		}
		img {
			width: 95px !important;
		}
	}
`;

export class PartnersSection extends Component {
	render() {
		const { title, partnersData } = this.props;

		let partnersDataOutput = partnersData.map(data => {
			return (
				<Block flexBasis="12" className="text-center" key={data.id}>
					<Zoom>
						<A>
							<Img src={data.logoSrc} alt={data.alt} />
						</A>
					</Zoom>
				</Block>
			);
		});

		return (
			<PartnersSectionContainer className="pb-5 section-container">
				<Section
					gridStart="300px"
					height="10rem"
					className="home-partners-section"
				>
					<Block flexBasis="100" className="headline-block">
						<Paragraph>
							<H4 fontWeight="800" className="text-center mt-5">
								{title}
							</H4>
						</Paragraph>
					</Block>
				</Section>
				<Section
					gridStart="300px"
					height="10rem"
					className="pr-5 pl-5 home-partners-section"
				>
					{partnersDataOutput}
				</Section>
			</PartnersSectionContainer>
		);
	}
}

PartnersSection.defaultProps = {
	theme: {},
};

export default PartnersSection;
