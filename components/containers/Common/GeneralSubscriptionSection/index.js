/**
 *
 * <GeneralSubscriptionSection />
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
	Form,
	FormGroup,
	Button,
	Input,
	SectionBackground,
} from 'components/general';

const SubscriptionSectionContainer = styled(SectionBackground)`
	.general-subscription-section {
		input {
			background-color: lightgray;
		}
		form {
			@media screen and (min-width: 350px) {
				input {
					width: 300px !important;
				}
				.submit-btn {
					width: 120px;
				}
			}
			@media (min-width: 481px) and (max-width: 575px) {
				input {
					width: 300px !important;
				}
				.submit-btn {
					width: 120px;
					margin-top: -0.5rem;
				}
			}
			@media (min-width: 769px) and (max-width: 1254px) {
				.submit-btn {
					margin-top: 0.5rem;
				}
			}
		}
	}
`;

export class GeneralSubscriptionSection extends Component {
	render() {
		const { title, subtitle, imgSrc, alt, btnText } = this.props;

		return (
			<SubscriptionSectionContainer bgColor="" className="section-container">
				<PageContainer>
					<Section gridStart="769px" className="general-subscription-section">
						<Block flexBasis="50">
							<Paragraph padding="0">
								<Fade bottom cascade>
									<H4 fontWeight="600">{title}</H4>
									<H6 className="pb-4">{subtitle}</H6>
									<Form inline>
										<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
											<Input
												type="email"
												name="email"
												id="email-input"
												placeholder="Your Email"
											/>
										</FormGroup>
										<Button color="info" className="submit-btn">
											{btnText}
										</Button>
									</Form>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="50">
							<Paragraph className="text-center" padding="0">
								<Fade>
									<Img src={imgSrc} alt={alt} className="img-fluid" />
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</SubscriptionSectionContainer>
		);
	}
}

GeneralSubscriptionSection.defaultProps = {
	theme: {},
};

export default GeneralSubscriptionSection;
