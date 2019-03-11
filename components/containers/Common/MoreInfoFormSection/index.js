/**
 *
 * <MoreInfoFormSection />
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

const MoreInfoFormSectionContainer = styled(SectionBackground)`
	.more-info-form-section {

		form {
			.file-input {
				border: 1px solid red;
				padding: 1rem;
				width: 0.1px;
				height: 0.1px;
				opacity: 0;
				overflow: hidden;
				position: absolute;
				z-index: -1;
			}

			.textarea-input {
				width: 99%
				height: 150px;
				background-color: lightgray;
			}
			.email-input {
				width: 99%;
				margin-right: 10px;
				background-color: lightgray;

				@media (min-width: 1200px) {
					float: left !important;
					width: 75%;
				}
			}
			.submit-btn {
				width: 99%;

				@media (min-width: 1200px) {
					width: 22%;
					float: left;
					margin-top: -1rem;
				}
			}
		}
	}
`;

export class MoreInfoFormSection extends Component {
	render() {
		const { imgSrc, title, description, btnText } = this.props;

		return (
			<MoreInfoFormSectionContainer className="section-container">
				<PageContainer>
					<Section gridStart="767px" className="more-info-form-section">
						<Block flexBasis="50">
							<Paragraph padding="0">
								<Fade bottom cascade>
									<H4 fontWeight="600">{title}</H4>
									<H6 className="pb-4">{description}</H6>
									<Form>
										<FormGroup>
											<Input
												type="textarea"
												name="textarea"
												id="textarea-input"
												placeholder="Tell us what you want to know"
												className="form-control textarea-input"
												row="10"
											/>
										</FormGroup>
										<br />
										<FormGroup className="">
											<Input
												type="email"
												name="email"
												id="email-input"
												placeholder="Your Email"
												className="email-input"
											/>
										</FormGroup>
										<Button color="info" className="submit-btn ">
											{btnText}
										</Button>
									</Form>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="50" align="center">
							<Paragraph className="text-center" padding="0">
								<Fade>
									<Img src={imgSrc} alt="" className="img-fluid" />
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</MoreInfoFormSectionContainer>
		);
	}
}

MoreInfoFormSection.defaultProps = {
	theme: {},
};

export default MoreInfoFormSection;
