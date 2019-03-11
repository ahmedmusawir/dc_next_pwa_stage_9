/**
 *
 * <QuoteSlider />
 *
 * A Simple QuoteSlider with Props
 * For Carousel props see:
 * https://www.npmjs.com/package/react-responsive-carousel
 */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Div, Img, P } from 'components/general';

export class QuoteSlider extends Component {
	render() {
		const { imgLinks } = this.props;
		let quoteContent = imgLinks.map((link, i) => {
			return (
				<Div key={i}>
					<img src={link} alt="" />
					<blockquote>
						<P>
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							assumenda delectus velit nobis quasi ratione minus placeat officia
							culpa, illum nulla facilis quis ipsum dicta! Aspernatur omnis nisi
							velit quia."
						</P>
						<cite className="float-right">
							<P>
								- Gabriel Buitrago
								<br />
								Company CEO
							</P>
						</cite>
					</blockquote>
				</Div>
			);
		});

		return <Carousel {...this.props}>{quoteContent}</Carousel>;
	}
}

QuoteSlider.defaultProps = {
	theme: {},
	imgLinks: [
		'https://picsum.photos/500/300?image=0',
		'https://picsum.photos/500/300?image=1',
		'https://picsum.photos/500/300?image=2',
	],
};

export default QuoteSlider;
