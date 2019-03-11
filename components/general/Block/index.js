/**
 *
 * Block.js
 *
 * Renders a Content Section with styles and props
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexBlock from './Flex';
import GridBlock from './Grid';

export class Block extends Component {
	static propTypes = {
		bgColor: PropTypes.string,
		flexBasis: PropTypes.string,
		gridSize: PropTypes.string,
		type: PropTypes.string,
		bgImgLink: PropTypes.string,
		align: PropTypes.string,
		justify: PropTypes.string,
		className: PropTypes.string,
	};

	render() {
		const {
			children,
			bgColor,
			bgImgLink,
			flexBasis,
			gridSize,
			type,
			className,
			align,
			justify,
			direction,
			order,
		} = this.props;

		// RENDER CHILDREN

		switch (type) {
			case 'grid':
				return (
					<GridBlock
						bgColor={bgColor}
						bgImgLink={bgImgLink}
						size={gridSize}
						className={className}
					>
						{children}
					</GridBlock>
				);
			case 'flex':
				return (
					<FlexBlock
						bgColor={bgColor}
						bgImgLink={bgImgLink}
						basis={flexBasis}
						className={className}
						align={align}
						justify={justify}
						direction={direction}
						order={order}
					>
						{children}
					</FlexBlock>
				);
			default:
				return <div />;
		}
	}
}

Block.defaultProps = {
	bgColor: 'neutral',
	bgImgLink: null,
	type: 'flex',
	flexBasis: '100',
	gridSize: 'md',
	direction: 'row',
};

export default Block;
