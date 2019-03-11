/**
 *
 * <Card />
 *
 * A Simple Container with Props
 *
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'components/general/Img';

const CardBody = styled.div`
	#card-content {
		padding: ${props => props.padding};
	}
`;

export class Card extends Component {
	render() {
		const {
			imgSrc,
			children,
			imgCircle,
			icon,
			className,
			padding,
		} = this.props;
		let image;

		if (imgCircle) {
			image = <Img src={imgSrc} alt="" className="img-fluid w-100" round />;
		} else if (icon) {
			image = <Img src={imgSrc} alt="Deep Cast" className={className} />;
		} else {
			image = <Img src={imgSrc} alt="" className="img-fluid w-100" />;
		}
		return (
			<CardBody padding={padding}>
				{image}
				<div id="card-content">{children}</div>
			</CardBody>
		);
	}
}

Card.defaultProps = {
	theme: {},
	padding: '2rem',
};

export default Card;
