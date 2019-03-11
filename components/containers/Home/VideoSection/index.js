/**
 *
 * <VideoSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import {
	H4,
	H6,
	Video,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const HomeVideoSectionContainer = styled(SectionBackground)`
	.home-video-section {
		.home-video-block {
			@media screen and (min-width: 1600px) {
				padding-top: 8rem !important;
				padding-bottom: 8rem !important;
			}
		}
		.home-video-text-block {
			@media screen and (min-width: 1700px) {
				padding: 4rem !important;
			}
		}
	}
`;

export class VideoSection extends Component {
	render() {
		const {
			title,
			para1,
			para2,
			vidType,
			youtubeId,
			posterSrc,
			mp4Src,
			webmSrc,
		} = this.props;

		let vidOutput;
		if (vidType === 'youtube') {
			vidOutput = (
				<Video type={vidType} youtubeId={youtubeId} posterSrc={posterSrc} />
			);
		} else if (vidType === 'html5') {
			vidOutput = (
				<Video
					type={vidType}
					mp4Src={mp4Src}
					webmSrc={webmSrc}
					posterSrc={posterSrc}
				/>
			);
		} else {
			vidOutput = <h2>Insert a video type</h2>;
		}
		return (
			<HomeVideoSectionContainer className="section-container">
				<Section gridStart="1300px" className="home-video-section">
					<Block flexBasis="40" className="home-video-text-block">
						<Paragraph padding="3rem" className="pt-5 pb-5">
							<Fade>
								<H4 fontWeight="600">{title}</H4>
								<H6>{para1}</H6>
								<H6>{para2}</H6>
							</Fade>
						</Paragraph>
					</Block>
					<Block flexBasis="60" className="pt-5 pb-5 home-video-block">
						<Block>{vidOutput}</Block>
					</Block>
				</Section>
			</HomeVideoSectionContainer>
		);
	}
}

VideoSection.defaultProps = {
	theme: {},
};

export default VideoSection;
