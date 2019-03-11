/**
 *
 * <JoinUsSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { Label } from 'reactstrap';
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

const FileNameBox = styled.span`
	margin-left: 10px;
	@media (max-width: 1350px) {
		display: block;
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 0.8rem;
	}
`;

const JoinUsSectionContainer = styled(SectionBackground)`
.about-join-us-section {
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
		.file-input-label {
			padding: .5rem 2rem;
			border: 1px solid lightgray;
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

export class JoinUsSection extends Component {
	state = {
		fileName: '',
	};
	handleFileUpload = e => {
		const file = e.target.files[0];
		const chosenFile = e.target.files[0].name;

		//User Cancelled
		if (!file) {
			return;
		}

		this.setState({ fileName: chosenFile });
	};

	render() {
		const { title, subtitle, btnText, imgSrc, alt } = this.props;

		return (
			<JoinUsSectionContainer bgColor="" className="section-container">
				<PageContainer>
					<Section gridStart="767px" className="about-join-us-section">
						<Block flexBasis="50">
							<Paragraph padding="0">
								<Fade bottom cascade>
									<H4 fontWeight="600">{title}</H4>
									<H6 className="pb-4">{subtitle}</H6>
									<Form>
										<FormGroup>
											<Label for="file-input" className="file-input-label">
												Attach CV
												<Input
													type="file"
													name="file"
													id="file-input"
													className="file-input"
													onChange={this.handleFileUpload}
												/>
											</Label>
											<FileNameBox>{this.state.fileName}</FileNameBox>
										</FormGroup>
										<FormGroup>
											<Input
												type="textarea"
												name="textarea"
												id="textarea-input"
												placeholder="Tell us why you would like to join DeepCast"
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
						<Block flexBasis="50" align="flex-end">
							<Paragraph className="text-center" padding="0">
								<Fade>
									<Img src={imgSrc} alt={alt} className="img-fluid" />
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</JoinUsSectionContainer>
		);
	}
}

JoinUsSection.defaultProps = {
	theme: {},
};

export default JoinUsSection;
