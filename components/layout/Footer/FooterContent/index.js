import React from 'react';
import styled from 'styled-components';
import { PageContainer } from 'components/layout';
import {
	H4,
	H5,
	H6,
	Ul,
	Li,
	A,
	Img,
	InlineList,
	Section,
	Block,
	Paragraph,
} from 'components/general';
import SectionBackground from 'components/general/Section/Background';

const FooterContentContainer = styled(SectionBackground)`
	.footer-content {
		padding-top: 8rem;
		ul {
			list-style-type: none;
			padding: 0 !important;
		}

		@media (max-width: 449px) {
				text-align: center;
				.social-block {
					.social-icons {
						justify-content: center;
					}
				}
		}
`;

export const FooterContent = () => {
	return (
		<FooterContentContainer bgColor="grey" className="section-container">
			<PageContainer>
				<Section gridStart="450px" className="footer-content">
					<Block
						flexBasis="33"
						align="flex-start"
						justify="center"
						className="footer-block"
					>
						<Paragraph padding="0">
							<Ul>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
							</Ul>
						</Paragraph>
					</Block>
					<Block
						flexBasis="33"
						align="flex-start"
						justify="center"
						className="footer-block"
					>
						<Paragraph padding="0">
							<Ul>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
							</Ul>
						</Paragraph>
					</Block>
					<Block
						flexBasis="33"
						align="flex-start"
						justify="center"
						className="footer-block"
					>
						<Paragraph padding="0" className="social-block">
							<Ul>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
								<Li>
									<A href="#">Aditional Info</A>
								</Li>
							</Ul>
							<H6>Connct with us</H6>
							<InlineList justify="flex-start" className="social-icons">
								<A href="https://www.facebook.com/DeepCastAI" target="_blank">
									<Img
										src="/static/images/_footer/facebook-gray.png"
										className="px-2"
										alt=""
									/>
								</A>
								<A
									href="https://www.linkedin.com/company/deepcastai"
									target="_blank"
								>
									<Img
										src="/static/images/_footer/linkedin-gray.png"
										className="px-2"
										alt=""
									/>
								</A>
								<A
									href="https://www.youtube.com/channel/UCsHk7ru4pxb_CdYPTuVf6_g"
									target="_blank"
								>
									<Img
										src="/static/images/_footer/youtube-gray.png"
										className="px-2"
										alt=""
									/>
								</A>
							</InlineList>
						</Paragraph>
					</Block>
				</Section>
			</PageContainer>
		</FooterContentContainer>
	);
};

export default FooterContent;
