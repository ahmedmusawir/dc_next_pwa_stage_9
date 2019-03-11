/**
 *
 * <MainSubNav />
 *
 * A Simple Modal Container with Form and Props
 *
 */
import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Label,
	Form,
	FormGroup,
	Nav,
	Navbar,
} from 'reactstrap';
import { H4, H5, Paragraph } from 'components/general';
import ActiveLink from 'components/navigation/ActiveLink';

const SubNavbar = styled(Navbar)`
	.navbar-nav {
		flex-direction: column;
		padding-left: 1.5rem !important;
		padding-right: 1rem;
	}
	.nav-item {
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		font-size: 1rem;
		text-align: left;
	}
`;

const SubNavbarContainer = styled(Modal)`
	margin-top: -1px;

	position: fixed;
	left: 310px;

	.modal-content {
		height: 101vh !important;
		width: 310px !important;
		border-left: 2px solid #e3e3e3;
	}
`;
const SubNavButton = styled(Form)`
	i {
		margin-top: -1.5rem;
		color: grey;
	}
`;

export class MainSubNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			unmountOnClose: false,
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal,
		}));
	}

	render() {
		const { router } = this.props;

		const isCurrentPath =
			router.pathname.split('/')[1] === 'product' ||
			router.asPath.split('/')[1] === 'product';

		return (
			<div>
				<SubNavButton onSubmit={e => e.preventDefault()}>
					<li className="nav-item" onClick={this.toggle}>
						<a
							aria-haspopup="true"
							href="#"
							className={
								isCurrentPath
									? 'ml-1 nav-link active-nav-item'
									: 'ml-1 nav-link'
							}
							aria-expanded="true"
						>
							{this.props.buttonLabel}
						</a>
					</li>
					<i className="fa fa-chevron-right float-right" aria-hidden="true" />
				</SubNavButton>
				<SubNavbarContainer
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					fade={false}
				>
					<ModalBody>
						<Paragraph>
							<H5>Product</H5>
						</Paragraph>
						<hr />
						<SubNavbar>
							<Nav className="mr-auto" navbar>
								<ActiveLink href="/product/data-integration">
									Data Integration
								</ActiveLink>
								<ActiveLink href="/product/field-evaluation">
									Field Evaluation
								</ActiveLink>
								<ActiveLink href="/product/field-development">
									Field Development
								</ActiveLink>
							</Nav>
						</SubNavbar>
					</ModalBody>
				</SubNavbarContainer>
			</div>
		);
	}
}

export default withRouter(MainSubNav);
