/**
 *
 * <Video />
 *
 * A Video Container with Props
 * Props: fluid etc.
 */
import React, { Component } from 'react';

export class Video extends Component {
	state = {
		isRevealed: false,
	};

	showVideo = e => {
		this.setState({ isRevealed: true });
	};

	render() {
		const { type, youtubeId, posterSrc, mp4Src, webmSrc } = this.props;

		if (type === 'html5') {
			return (
				<video
					ref="video"
					width="100%"
					controls
					poster={posterSrc}
					onClick={() => this.refs.video.play()}
				>
					<source src={mp4Src} type="video/mp4" />
					<source src={webmSrc} type="video/webm" />
					{/* <source src="/static/videos/ai-vid.webm" type="video/webm" /> */}
				</video>
			);
		} else if (type === 'youtube') {
			const youtubeSrc = `https://www.youtube-nocookie.com/embed/${youtubeId}?mode=opaque&rel=0&controls=1&showinfo=0&autohide=1&wmode=transparent&autoplay=1&mute=1&loop=1`;

			return (
				<React.Fragment>
					<img
						src={posterSrc}
						alt=""
						className={this.state.isRevealed ? 'd-none' : 'img-fluid'}
						onClick={this.showVideo}
					/>
					<div
						className={
							this.state.isRevealed
								? 'embed-responsive embed-responsive-16by9'
								: 'd-none'
						}
					>
						<iframe
							className="embed-responsive-item"
							src={youtubeSrc}
							allowFullScreen
						/>
					</div>
				</React.Fragment>
			);
		} else {
			return (
				<div>
					<h5>
						Please include a video type. <br /> Example: type="html5" or
						type="youtube"
					</h5>
				</div>
			);
		}
	}
}

export default Video;
