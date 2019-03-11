/**
 *
 * <TrippleBlueBoxSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { Link } from 'i18n';
import { PageContainer } from 'components/layout';
import {
	H4,
	H6,
	A,
	Div,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const TrippleBlueBoxSectionContainer = styled(SectionBackground)`
	.triple-blue-box-section {
		.page-link {
			background-color: transparent;
			transition: background-color 0.5s ease;
			padding: 0 !important;
			margin: 0 !important;

			&:hover {
				background-color: #1873cc;
			}
		}
		.learn-more {
			margin-bottom: 2rem;
			h6 {
				text-decoration: underline;
			}
		}
		@media (max-width: 1206px) {
			.title {
				min-height: 3rem;
			}
			.description {
				min-height: 5rem;
			}
		}
	}
`;

export class TrippleBlueBoxSection extends Component {
	render() {
		const { title, blueBoxData } = this.props;

		let boxDataOutput = blueBoxData.map(data => {
			return (
				<Block flexBasis="33" className="text-center" key={data.id}>
					<Paragraph padding="0rem" bgColor="blue">
						<Fade>
							<Link prefetch href={data.link} passHref>
								<A className="page-link">
									<Div minHeight="10rem" className="title">
										<H4 light fontWeight="600" className="p-5">
											{data.title}
										</H4>
									</Div>

									<Div minHeight="18rem" className="description">
										<H6 light className="pl-5 pr-5 pb-5">
											{data.text}
										</H6>
									</Div>

									<Div className="learn-more mx-auto">
										<H6 light>{data.btnText}</H6>
									</Div>

									<Img
										src={data.imgSrc}
										alt={data.alt}
										className="img-fluid w-100"
									/>
								</A>
							</Link>
						</Fade>
					</Paragraph>
				</Block>
			);
		});

		return (
			<TrippleBlueBoxSectionContainer
				bgColor="light"
				className="pt-5 pb-5 section-container"
			>
				<PageContainer>
					<Section gridStart="1207px" className="triple-blue-box-section">
						<Block flexBasis="70" className="text-center" align="flex-end">
							<Paragraph>
								<H4 fontWeight="600">{title}</H4>
							</Paragraph>
						</Block>

						{boxDataOutput}
					</Section>
				</PageContainer>
			</TrippleBlueBoxSectionContainer>
		);
	}
}

TrippleBlueBoxSection.defaultProps = {
	theme: {},
};

export default TrippleBlueBoxSection;
