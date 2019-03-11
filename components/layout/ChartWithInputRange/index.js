import React from 'react';
import Fade from 'react-reveal/Fade';
import RangeSwitch from './RangeSwitch';
import { H5, H6, Section, Block, Paragraph, Chart } from 'components/general';

export const ChartWithInputRange = ({ header, footer, chart, height }) => (
	<React.Fragment>
		<Paragraph>
			<Fade>
				<Section height={height}>
					<Block>
						<Chart type={chart} />
					</Block>
					<Block>
						<Paragraph nopadding>
							<H6 className="text-center">{header}</H6>
							<RangeSwitch />
							<H5 className="text-center">{footer}</H5>
						</Paragraph>
					</Block>
				</Section>
			</Fade>
		</Paragraph>
	</React.Fragment>
);

export default ChartWithInputRange;
