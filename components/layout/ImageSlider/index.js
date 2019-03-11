import React, { Component } from 'react';
import styled from 'styled-components';
import { H1, H2, H3, H4, H5, H6, A, Img, P, Small } from 'components/general';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap';

const ImageSliderItem = styled(CarouselItem)`
	max-width: 100%;
	height: 550px;
	background: transparent;
	padding: 4rem 5rem 0rem 0rem;

	@media (min-width: 1350px) {
		height: 450px;
	}
	@media (max-width: 1349px) {
		padding: 0;
	}
	@media (max-width: 1150px) {
		height: 490px;
	}
	@media (max-width: 768px) {
		height: 470px;
	}
	@media (max-width: 650px) {
		height: 430px;
	}
	@media (max-width: 550px) {
		height: 360px;
	}
	@media (max-width: 450px) {
		height: 300px;
	}
	@media (max-width: 360px) {
		height: 260px;
	}
`;

const ImageSliderIndicators = styled(CarouselIndicators)`
	justify-content: flex-start;
	position: relative;
	margin-left: 0rem;
	margin-top: -4rem;

	@media (min-width: 1460px) {
		margin-top: -2rem;
	}
	@media (min-width: 1550px) {
		margin-top: 0rem;
	}
	@media (min-width: 1650px) {
		margin-top: 2rem;
	}

	li {
		border-radius: 50%;
		height: 20px;
		width: 20px;
		background-color: grey;
		margin: 0.7rem;
		@media (max-width: 499px) {
			margin: 0.5rem;
		}

		&.active {
			background-color: dodgerblue;
		}
	}
`;

const ImageSliderCaption = styled(CarouselCaption)`
	text-align: left;
	left: 8% !important;
`;

export class ImageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;
		const { slideItems } = this.props;

		const slides = slideItems.map(item => {
			return (
				<ImageSliderItem
					className="custom-tag"
					tag="div"
					key={item.id}
					onExiting={this.onExiting}
					onExited={this.onExited}
				>
					<Img src={item.image} alt={item.altText} />
					<ImageSliderCaption className="" captionText="" captionHeader="" />
				</ImageSliderItem>
			);
		});

		return (
			<div>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
					interval={false}
				>
					{slides}

					<ImageSliderIndicators
						items={slideItems}
						activeIndex={activeIndex}
						onClickHandler={this.goToIndex}
					/>
					{/* {slides} */}
					{/* <CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={this.next}
					/> */}
				</Carousel>
			</div>
		);
	}
}

ImageSlider.defaultProps = {
	// bgImg: 'https://via.placeholder.com/100',
};

export default ImageSlider;
