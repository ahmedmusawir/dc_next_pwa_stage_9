/**
 *
 * <RelatedMediaSection />
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
	A,
	Small,
	Div,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';
import { Link } from 'i18n';

const RelatedMediaSectionContainer = styled(SectionBackground)`
	.related-media {
		.headline {
			padding-bottom: 0;
		}
		.date {
			padding-top: 0;
		}
	}
`;

export class RelatedMediaSection extends Component {
	render() {
		const { headLine, mediaData } = this.props;

		let mediaDataOutput = mediaData.map(media => {
			return (
				<Block flexBasis="33" key={media.id}>
					<Paragraph padding="0">
						<Link href={media.postLink} passHref>
							<A>
								<Div>
									<Img
										src={media.thumbnail}
										alt={media.alt}
										className="img-fluid w-100"
									/>

									<H6 italic fontWeight="600" className="headline">
										{media.title}
									</H6>
									<H6 italic className="date">
										<Small>{media.date}</Small>
									</H6>
								</Div>
							</A>
						</Link>
					</Paragraph>
				</Block>
			);
		});

		return (
			<RelatedMediaSectionContainer bgColor="" className="section-container">
				<PageContainer>
					<Fade>
						<Section gridStart="760px" className="related-media">
							<Block flexBasis="100">
								<Paragraph padding="0">
									<H4 grey fontWeight="600" className="pt-5">
										{headLine}
									</H4>
								</Paragraph>
							</Block>
							{mediaDataOutput}
						</Section>
					</Fade>
				</PageContainer>
			</RelatedMediaSectionContainer>
		);
	}
}

RelatedMediaSection.defaultProps = {
	theme: {},
};

export default RelatedMediaSection;
