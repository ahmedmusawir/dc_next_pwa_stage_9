/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H6 from 'components/general/H6';

export const ImageRound = styled.img`
	width: 100%;
	border-radius: 50%;
	background: ${props =>
		props.bg ? props.bg : 'linear-gradient(45deg,#0067bc 0,#8ee2f9 100%)'};
	padding: 0 !important;
`;

export const Img = props => {
	if (props.round) {
		return (
			<ImageRound
				bg={props.bg}
				className={props.className}
				src={props.src}
				alt={props.alt}
				style={props.style}
			/>
		);
	}
	if (props.caption) {
		return (
			<React.Fragment>
				<img className={props.className} src={props.src} alt={props.alt} />
				<div>
					<H6 italic className="img-caption">
						{props.caption}
					</H6>
				</div>
			</React.Fragment>
		);
	}

	return (
		<img
			className={props.className}
			src={props.src}
			alt={props.alt}
			style={props.style}
		/>
	);
};

Img.defaultProps = {};

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
	src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Img;
