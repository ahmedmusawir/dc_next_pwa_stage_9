/**
 *
 * <PhysicsSection />
 *
 * A Component Template with Props
 *
 */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { Table } from 'reactstrap';
import { PageContainer } from 'components/layout';
import {
	H3,
	H5,
	Img,
	Section,
	Block,
	Paragraph,
	SectionBackground,
} from 'components/general';

const PhysicsSectionContainer = styled(SectionBackground)`
	.field-dev-physics-section {
		.table-box {
			text-align: center;

			@media (max-width: 600px) {
				padding: 0rem;

				th {
					padding: 0;
					font-size: 0.8rem !important;
				}
				td {
					padding: 0;
					font-size: 0.8rem !important;
				}
			}

			table {
				th {
					padding: 1.5rem !important;
					background: dodgerblue;
					color: white;
					font-weight: 300 !important;
					font-size: 1.2rem;
				}
				tr:first-child {
					td {
						color: dodgerblue !important;
					}
				}
				td {
					padding: 1.5rem !important;
					background: white;
					font-size: 1.2rem;
					color: silver;
				}
			}
		}
	}
`;

export class PhysicsSection extends Component {
	render() {
		const { topSection, bottomSection } = this.props;

		const tableRowOutput = topSection[0].tableRowData.map(data => {
			return (
				<tr>
					<td scope="row">{data.rank}</td>
					<td>{data.senario}</td>
					<td>{data.confidence}</td>
				</tr>
			);
		});

		return (
			<PhysicsSectionContainer
				className="section-container pb-5 pt-5"
				bgColor="light"
			>
				<PageContainer>
					<Section gridStart="1300px" className="field-dev-physics-section">
						<Block flexBasis="50">
							<Paragraph padding="3rem">
								<Fade>
									<H3 fontWeight="600">{topSection[0].title}</H3>
									<H5 grey>{topSection[0].para1}</H5>
									<H5 grey>{topSection[0].para2}</H5>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="50">
							<Paragraph padding="2rem" className="table-box">
								<Fade>
									<Table>
										<thead>
											<tr>
												<th>{topSection[0].tableHeaders[0]}</th>
												<th>{topSection[0].tableHeaders[1]}</th>
												<th>{topSection[0].tableHeaders[2]}</th>
											</tr>
										</thead>
										<tbody>{tableRowOutput}</tbody>
									</Table>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="50">
							<Paragraph padding="3rem">
								<Fade>
									<H3 fontWeight="600">{bottomSection[0].title}</H3>
									<H5 grey>{bottomSection[0].para1}</H5>
									<H5 grey>{bottomSection[0].para2}</H5>
								</Fade>
							</Paragraph>
						</Block>

						<Block flexBasis="50">
							<Paragraph className="text-center">
								<Fade>
									<Img
										src={bottomSection[0].imgSrc}
										alt="deepcast"
										className="img-fluid"
									/>
								</Fade>
							</Paragraph>
						</Block>
					</Section>
				</PageContainer>
			</PhysicsSectionContainer>
		);
	}
}

PhysicsSection.defaultProps = {
	theme: {},
};

export default PhysicsSection;
