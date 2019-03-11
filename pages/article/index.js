import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Layout, PageContainer } from 'components/layout';
import {
	JoinUsSection,
	RelatedMediaSection,
} from 'components/containers/Common';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	A,
	Ul,
	Li,
	Img,
	Div,
	Small,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const relatedMediaItems = [
	{
		id: 1,
		title: 'Media content description 1',
		date: 'Jan 7, 2019',
		thumbnail: 'https://picsum.photos/400/250/?image=0',
		alt: 'deep cast article',
		postLink: '/article',
	},
	{
		id: 1,
		title: 'Media content description 2',
		date: 'Nov 8, 2017',
		thumbnail: 'https://picsum.photos/400/250/?image=1',
		alt: 'deep cast article',
		postLink: '/article',
	},
	{
		id: 1,
		title: 'Media content description 3',
		date: 'Apr 9, 2018',
		thumbnail: 'https://picsum.photos/400/250/?image=2',
		alt: 'deep cast article',
		postLink: '/article',
	},
];

const SingleArticleContainer = styled(SectionBackground)`
	.article-single {
		.headline {
			padding-bottom: 0;
		}
		.date {
			padding-top: 0;
			color: lightgray;
		}
	}
	.media-pagination {
		.prev {
			padding-right: 2rem;
			color: grey;
		}
	}
`;

class Article extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - Page Template"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground
					bgColor="grey"
					className="pb-5 pt-5 section-container"
				>
					<PageContainer>
						<Section
							gridStart=""
							height="10rem"
							className="article-header-section"
						>
							<Block flexBasis="100" className="" justify="flex-start">
								<H1 fontWeight="500" className="pt-5 pb-5">
									Media
								</H1>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
				<SingleArticleContainer bgColor="" className="pt-5 section-container">
					<PageContainer>
						<Fade>
							<Section className="article-single">
								<Block flexBasis="60">
									<Paragraph>
										<H4 fontWeight="600" className="headline">
											International meeting business
										</H4>
										<H5 italic className="date">
											<Small>September 14th, 2019</Small>
										</H5>
									</Paragraph>
								</Block>
								<Block flexBasis="60">
									<Paragraph>
										<P>
											A common concern in the Oil and Gas industry is how to
											optimize cost, maintain security, and increase agility.
											Additionally, many firms are currently looking into
											leveraging data analytics as a way to expose new business
											opportunities, and gain a competitive edge.
										</P>
										<P>
											In order to deliver accurate and hasty analytics
											solutions, a robust platform is needed. Fortunately, there
											are many learnings we can capture from the tech industry
											to help solve this problem. One such topic is the concept
											of microservices. In this article, we will go over what
											microservices are and how they can enable us to run a more
											nimble data-driven business.
										</P>
										<P>
											Services are essentially standalone programs that run on a
											computer or server, and microservices are a
											miniaturization of services. Large application like Google
											Search have thousands of such services running in the
											background. They are usually designed to communicate with
											other services or client apps (i.e. your browser, mobile
											apps, or desktop apps) via an API (Application Programming
											Interface). Some examples of services in Oil and Gas may
											include SQL databases, ETL platforms, BI platforms, among
											other things. Fig. 1 below provides a visual reference for
											the anatomy of a Service-Oriented Architectures (SOA), and
											will be used as a reference for other illustrations later
											on.
										</P>
									</Paragraph>
								</Block>
								<Block flexBasis="60">
									<Paragraph>
										<Img
											src="https://picsum.photos/700/500/?image=10"
											alt=""
											className="img-fluid w-100"
											caption="Description of the Image"
										/>
									</Paragraph>
								</Block>
								<Block flexBasis="60">
									<Paragraph>
										<P>
											In the 90’s and early 2000’s, many tech companies
											implemented their SOA follow a common pattern:
										</P>
										<Ul>
											<Li>
												First, companies would build a simple service usually
												integrated with a relational database (Fig. 2.A). For
												instance, a simple eCommerce website that sells books.
											</Li>
											<Li>
												As compute and storage requirements increased, and more
												resources were added, companies would often scale
												hardware vertically by upgrading the CPU, RAM, or hard
												drives (Fig. 2.B). At this point, a “monolithic” service
												is born.
											</Li>
											<Li>
												Once the hardware is unable to continue scaling
												vertically, usually the next step would be to scale
												horizontally by adding more copies of the same machine
												and patching the monolithic service with a way to
												synchronize data across them (Fig. 2.C).
											</Li>
										</Ul>
									</Paragraph>
								</Block>
								<Block flexBasis="60">
									<Paragraph className="">
										<Img
											src="https://picsum.photos/500/250/?image=500"
											alt=""
											className="img-fluid w-100"
											caption="Figure 2: Typical SOA architecture from tech companies in the 90’s and early 2000’s."
										/>
									</Paragraph>
								</Block>
								<Block flexBasis="60">
									<Paragraph>
										<P>
											In order to deliver accurate and hasty analytics
											solutions, a robust platform is needed. Fortunately, there
											are many learnings we can capture from the tech industry
											to help solve this problem. One such topic is the concept
											of microservices. In this article, we will go over what
											microservices are and how they can enable us to run a more
											nimble data-driven business.
										</P>
										<P>
											Services are essentially standalone programs that run on a
											computer or server, and microservices are a
											miniaturization of services. Large application like Google
											Search have thousands of such services running in the
											background. They are usually designed to communicate with
											other services or client apps (i.e. your browser, mobile
											apps, or desktop apps) via an API (Application Programming
											Interface). Some examples of services in Oil and Gas may
											include SQL databases, ETL platforms, BI platforms, among
											other things. Fig. 1 below provides a visual reference for
											the anatomy of a Service-Oriented Architectures (SOA), and
											will be used as a reference for other illustrations later
											on.
										</P>
									</Paragraph>
								</Block>
							</Section>
						</Fade>
					</PageContainer>
					<Section height="10rem">
						<Block className="text-center">
							<Paragraph>
								<Div className="media-pagination">
									<H5 fontWeight="600" className="">
										<span className="prev">Previous Post</span>
										<span className="next">Next Post</span>
									</H5>
								</Div>
								<hr />
							</Paragraph>
						</Block>
					</Section>
				</SingleArticleContainer>

				{/* RELATED MEDIA BLOCK */}
				<RelatedMediaSection
					headLine="Related media content"
					mediaData={relatedMediaItems}
				/>
			</Layout>
		);
	}
}

export default Article;
