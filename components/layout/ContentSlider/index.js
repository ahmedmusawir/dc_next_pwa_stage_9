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

const ContentSliderItem = styled(CarouselItem)`
	max-width: 100%;
	height: 450px;
	background: transparent;
	padding: 4rem 5rem 6rem 13rem;

	@media (max-width: 1749px) {
		padding: 3rem 3rem 4rem 9rem;
	}
	@media (max-width: 1599px) {
		padding: 4rem 5rem 6rem 5rem;
	}
	@media (max-width: 1249px) {
		padding: 4rem 1rem 6rem 1rem;
	}
	@media (max-width: 1199px) {
		padding: 4rem 5rem 6rem 5rem;
	}
	@media (max-width: 499px) {
		padding: 4rem 0rem 6rem 0rem;
	}

	.title {
		padding-bottom: 3rem;
	}
	.customer {
		margin-top: 5rem;
	}
	.job-title {
		padding-top: 0;
		margin-top: 0;
	}
`;

const ContentSliderIndicators = styled(CarouselIndicators)`
	justify-content: flex-start;
	position: relative;
	margin-left: 0rem;
	padding-left: 13rem;

	@media (max-width: 1749px) {
		padding-left: 9rem;
	}
	@media (max-width: 1599px) {
		padding-left: 5rem;
	}
	@media (max-width: 1249px) {
		padding-left: 1rem;
	}
	@media (max-width: 1199px) {
		padding-left: 5rem;
	}
	@media (max-width: 499px) {
		padding-left: 0rem;
	}

	li {
		border-radius: 50%;
		height: 20px;
		width: 20px;
		background-color: grey;
		padding-top: 0.5rem !important;
		margin: 0.7rem;
		@media (max-width: 499px) {
			margin: 0.5rem;
		}

		&.active {
			background-color: dodgerblue;
		}
	}
`;

const ContentSliderCaption = styled(CarouselCaption)`
	text-align: left;
	left: 8% !important;
`;

export class ContentSlider extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
		this.items = this.props.items;
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
			this.state.activeIndex === this.items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? this.items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;
		const { items } = this.props;

		const slides = items.map(item => {
			return (
				<ContentSliderItem
					className="custom-tag"
					tag="div"
					key={item.id}
					onExiting={this.onExiting}
					onExited={this.onExited}
				>
					<H4 fontWeight="600" className="title">
						{item.title}
					</H4>
					<H6 grey italic>
						{item.quote}
					</H6>
					<H5 className="customer">{item.customer}</H5>
					<H5 grey italic className="job-title">
						<Small>{item.jobTitle}</Small>
					</H5>
					<ContentSliderCaption
						className=""
						// captionText={item.jobTitle}
						captionText=""
						// captionHeader={item.customer}
						captionHeader=""
					/>
				</ContentSliderItem>
			);
		});

		return (
			<div>
				<style>
					{`.custom-tag {
               
              }`}
				</style>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					{slides}

					<ContentSliderIndicators
						items={items}
						activeIndex={activeIndex}
						onClickHandler={this.goToIndex}
					/>
					{/* {slides} */}
					<CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={this.next}
					/>
				</Carousel>
			</div>
		);
	}
}

ContentSlider.defaultProps = {
	bgImg: 'https://via.placeholder.com/100',
};

export default ContentSlider;
