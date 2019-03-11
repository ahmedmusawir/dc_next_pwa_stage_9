/**
 *
 * Section.js
 *
 * Renders a Content Section with styles and props
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexSection from './Flex';
import GridSection from './Grid';
import Block from 'components/general/Block';

export class Section extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    bgImgLink: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { type, children } = this.props;

    // INSTANTIATE CHILDREN

    const Blocks = React.Children.map(children, child => {
      if (child.type === Block) {
        return React.cloneElement(child, {
          type: this.props.type,
        });
      } else {
        throw new TypeError(
          'Placed a component of type ' +
            typeof child +
            ' inside a <Section /> component. <Section /> components only support children of type <Block />',
        );
      }
    });

    // RENDER CHILDREN

    switch (type) {
      case 'grid':
        return <GridSection {...this.props}>{Blocks}</GridSection>;
      case 'flex':
        return <FlexSection {...this.props}>{Blocks}</FlexSection>;
      default:
        return <div />;
    }
  }
}

Section.defaultProps = {
  bgColor: 'neutral',
  type: 'flex',
};

export default Section;
