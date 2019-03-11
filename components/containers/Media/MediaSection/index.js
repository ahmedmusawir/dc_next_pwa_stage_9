/**
 *
 * <MediaSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { PageContainer, MediaWithPagination } from 'components/layout';
import { H1, Section, Block, SectionBackground } from 'components/general';

const MediaSectionContainer = styled(SectionBackground)`
	.media-hero-section {
		@media (max-width: 759px) {
			h1 {
				padding-left: 1.8rem;
			}
		}
	}

	.media-pagination {
		display: flex;
		justify-content: center;

		.pagination {
			.page-item {
				a {
					padding: 0.5rem;
				}
			}
		}
	}
`;

export class MediaSection extends Component {
	render() {
		const { title, postsData, currentPage, postsPerPage } = this.props;

		return (
			<MediaSectionContainer
				bgColor="grey"
				className="pb-5 pt-5 section-container"
			>
				<PageContainer>
					<Section gridStart="" height="10rem" className="media-hero-section">
						<Block flexBasis="100" className="" justify="flex-start">
							<H1 fontWeight="500" className="mt-5 pt-5 pb-5">
								{title}
							</H1>
						</Block>
					</Section>
					<MediaWithPagination
						posts={postsData}
						currentPage={currentPage}
						postsPerPage={postsPerPage}
					/>
				</PageContainer>
			</MediaSectionContainer>
		);
	}
}

MediaSection.defaultProps = {
	theme: {},
};

export default MediaSection;
