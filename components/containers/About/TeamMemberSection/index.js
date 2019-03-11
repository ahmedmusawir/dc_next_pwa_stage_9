/**
 *
 * <TeamMemberSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { UncontrolledTooltip } from 'reactstrap';
import { PageContainer } from 'components/layout';
import {
	H3,
	H6,
	P,
	Div,
	Section,
	Block,
	Paragraph,
	Card,
	SectionBackground,
} from 'components/general';

const TeamMemberSectionContainer = styled(SectionBackground)`
	.about-team-section {
		img {
			width: 150px !important;
		}
		.about-icon-holder {
			img.about-icon {
				width: 60px !important;

				@media (max-width: 1398px) {
					width: 50px !important;
					padding: 0 !important;
				}

				@media (max-width: 1248px) {
					width: 45px !important;
					padding: 0 !important;
				}

				@media (max-width: 1173px) {
					width: 40px !important;
					padding: 0 !important;
				}
			}
		}
		.member {
			min-width: 165px !important;
			margin: 0 !important;
			.text {
				min-height: 130px;
			}
		}

		@media screen and (min-width: 501px) {
			.member {
				.text {
					min-height: 150px;
				}
			}
		}

		@media screen and (min-width: 769px) {
			.member {
				.text {
					min-height: 150px;
				}
			}
		}

		@media screen and (min-width: 1201px) {
			.member {
				.text {
					min-height: 125px;
				}
			}
		}
	}
`;

const LinkedInBox = styled.a`
	position: absolute;
	margin-top: -3.7rem;
	margin-left: 1.1rem;
	img.linkedin {
		width: 50px !important;
	}

	@media (min-width: 1200px) {
		margin-top: -3.7rem;
		margin-left: 1.6rem;
	}
`;

export class TeamMemberSection extends Component {
	render() {
		const { title, teamData } = this.props;

		let teamDataOutput = teamData.map(data => {
			return (
				<Block flexBasis="20">
					<Paragraph className="text-center member">
						<Card imgSrc={data.imgSrc} padding="0">
							<LinkedInBox href={data.linkedinUrl} target="_blank">
								<img
									src="/static/images/_about/linkedin-40x40.png"
									alt="LinkedIn"
									className="img-fluid linkedin"
								/>
							</LinkedInBox>
							<Fade>
								<Div className="text">
									<H6 fontWeight="800">{data.name}</H6>
									<P>
										<small> {data.description}</small>
									</P>
								</Div>
								<Div className="about-icon-holder mx-auto">
									<img
										src="/static/images/_about/30plus-icon.jpg"
										alt=""
										className="about-icon float-left"
										id="plus1"
									/>
									<UncontrolledTooltip placement="bottom" target="plus1">
										{data.thirtyPlusIconTooltip}
									</UncontrolledTooltip>
									<img
										src="/static/images/_about/phd-icon.jpg"
										alt=""
										className="about-icon float-left"
										id="phd1"
									/>

									<UncontrolledTooltip placement="bottom" target="phd1">
										{data.phpIconTooltip}
									</UncontrolledTooltip>
									<img
										src="/static/images/_about/shield-icon.jpg"
										alt=""
										className="about-icon float-left"
										id="shield1"
									/>
									<UncontrolledTooltip placement="bottom" target="shield1">
										{data.shieldIconTooltip}
									</UncontrolledTooltip>
								</Div>
							</Fade>
						</Card>
					</Paragraph>
				</Block>
			);
		});

		return (
			<TeamMemberSectionContainer
				bgColor=""
				className="section-container pt-5 pb-5"
			>
				<PageContainer>
					<Section
						center
						gridStart="300px"
						className="about-team-section pt-5 pb-5"
					>
						<Block>
							<Paragraph>
								<H3 fontWeight="800" className="text-center">
									{title}
								</H3>
							</Paragraph>
						</Block>
						{teamDataOutput}
					</Section>
				</PageContainer>
			</TeamMemberSectionContainer>
		);
	}
}

TeamMemberSection.defaultProps = {
	theme: {},
};

export default TeamMemberSection;
