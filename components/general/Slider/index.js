/**
 *
 * <Slider />
 *
 * A Simple Slider with Props
 * For Carousel props see:
 * https://www.npmjs.com/package/react-responsive-carousel
 */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export class Slider extends Component {
	render() {
		const { imgLinks } = this.props;
		let images = imgLinks.map((link, i) => {
			return (
				<div key={i}>
					<img src={link} />
				</div>
			);
		});

		return <Carousel {...this.props}>{images}</Carousel>;
	}
}

Slider.defaultProps = {
	theme: {},
	imgLinks: [
		'https://picsum.photos/300/300?image=0',
		'https://picsum.photos/300/300?image=1',
		'https://picsum.photos/300/300?image=2',
	],
};

export default Slider;
