import React from 'react';
import axios from 'axios';
import { Layout, PageContainer } from 'components/layout';
import {
	H1,
	H2,
	Section,
	Block,
	Paragraph,
	Form,
	Input,
	Button,
} from 'components/general';
import SectionBackground from 'components/general/Section/Background';

class SendGrid extends React.Component {
	state = {
		email: {
			recipient: '',
			sender: '',
			subject: '',
			text: '',
			success: '',
			recipientError: '',
			senderError: '',
			textError: '',
		},
	};

	sendEmail = e => {
		const { email } = this.state;

		axios
			.get(
				`http://127.0.0.1:4567/send-email?recipient=${email.recipient}&sender=${
					email.sender
				}&topic=${email.subject}&text=${email.text}`,
			)
			.then(function(response) {
				console.log('Email Sent Successfully');
			})
			.catch(function(error) {
				console.log(error);
				console.log('Email Send Failed');
			});

		// axios
		// 	.get(
		// 		`https://nodejs-express-7wp21cji4.now.sh/send-email?recipient=${
		// 			email.recipient
		// 		}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`,
		// 	)
		// 	.then(function(response) {
		// 		console.log('Email Sent Successfully');
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 		console.log('Email Send Failed');
		// 	});

		this.setState({
			email: {
				recipient: '',
				sender: '',
				subject: '',
				text: '',
				success: '',
				error: '',
			},
		});
	};

	render() {
		const { email } = this.state;

		return (
			<Layout
				title="Deep Cast - SendGrid"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgColor="dark">
					<PageContainer>
						<Section>
							<Block flexflexBasis="100" className="text-center">
								<Paragraph>
									<H1 light>SendGrid Email Test</H1>
								</Paragraph>
							</Block>
							<Block flexflexBasis="100" className="text-center">
								<Paragraph bgColor="grey">
									<H2> Email Form</H2>
									<Form>
										<Input
											className="form-control mb-2"
											type="email"
											value={email.recipient}
											onChange={e =>
												this.setState({
													email: { ...email, recipient: e.target.value },
												})
											}
											placeholder="Recipient's Email (required)"
											required
										/>
										<Input
											className="form-control mb-2"
											type="email"
											value={email.sender}
											onChange={e =>
												this.setState({
													email: { ...email, sender: e.target.value },
												})
											}
											placeholder="Sender's Email (required)"
											required
										/>
										<Input
											className="form-control mb-2"
											type="text"
											value={email.subject}
											onChange={e =>
												this.setState({
													email: { ...email, subject: e.target.value },
												})
											}
											placeholder="Your Subject"
										/>
										<Input
											type="textarea"
											className="form-control mb-2"
											rows="10"
											value={email.text}
											onChange={e =>
												this.setState({
													email: { ...email, text: e.target.value },
												})
											}
											placeholder="Your Message (required)"
											required
										/>
										<Button
											type="submit"
											className="btn btn-lg btn-danger mt-3"
											onClick={this.sendEmail}
										>
											{' '}
											Send Email{' '}
										</Button>
									</Form>
									<H2 color="success" className="mt-5">
										{this.state.email.success}
									</H2>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}

export default SendGrid;
