import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

import { H6, A, Img, Div, Small, Button, ModalForm } from 'components/general';
import ActiveLink from 'components/navigation/ActiveLink';

const MainNavbar = styled(Navbar)`
	background: white;

	@media (max-width: 768px) {
		justify-content: flex-start;
		.navbar-toggler {
			margin-right: 30% !important;
		}
	}
	@media (max-width: 415px) {
		justify-content: flex-start;
		.navbar-toggler {
			margin-right: 10% !important;
		}
	}
	@media (max-width: 330px) {
		justify-content: flex-start;
		.navbar-toggler {
			margin-right: .1rem !important;
		}
	}

	.navbar-collapse {
		height: 100vh;
		width: 100vw;
	}

	.navbar-toggler {
			background: white;
			padding: 0.5rem;
			outline: none;
		}
	}

	.nav-item {
		border-bottom: 1px solid grey;
		padding: 1.5rem;
		font-size: 1rem;
		text-align: center;

		a {
			color: grey !important;
		}
	}

	.dropdown-item {
		padding: 1.25rem 1.5rem;

		.nav-item {
			border-bottom: none;
			padding: 0;
		}
	}

	.mobile-nav-contact-box {
		.active {
			color: dodgerblue !important;
		}
		
		.lang-links {
			margin-top: 0.5rem;

			a {
				padding-right: 1rem;
			}
		}
		.text {
			margin-top: 1rem;

			.address {
				margin-top: .5rem;
			}
		}
		.buttons {
			margin-top: .5rem;
			.btn {
        width: 150px;
				margin-right: .5rem;
				background-color: transparent;
				color: #A8A8A8;
				font-weight: 300;
				border-radius: 0;
			}
			.btn.active {
				border: 1px solid dodgerblue;
			}
		}
	}
`;
const DCLogo = styled.div`
	margin-top: 5px;

	img {
		width: 95% !important;
		margin-top: -5px;
	}
`;
export class MobileNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		const { router } = this.props;

		const isCurrentPath =
			router.pathname.split('/')[1] === 'product' ||
			router.asPath.split('/')[1] === 'product';

		return (
			<div className="d-block d-lg-none">
				<MainNavbar light className="fixed-top">
					<NavbarToggler
						aria-label="mobile navigation toggle button"
						onClick={this.toggle}
						className=""
					/>
					<Link prefetch href="/" passHref>
						<NavbarBrand>
							<DCLogo>
								<Img
									src="/static/images/deepcast-logo.png"
									alt=""
									className="img-fluid"
								/>
							</DCLogo>
						</NavbarBrand>
					</Link>

					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<ActiveLink href="/">Home</ActiveLink>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle
									nav
									caret
									className={
										isCurrentPath ? 'nav-link active-nav-item' : 'nav-link'
									}
								>
									Product
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<ActiveLink href="/product/data-integration">
											Data Integration
										</ActiveLink>
									</DropdownItem>
									<DropdownItem>
										<ActiveLink href="/product/field-evaluation">
											Field Evaluation
										</ActiveLink>
									</DropdownItem>
									<DropdownItem>
										<ActiveLink href="/product/field-development">
											Field Development
										</ActiveLink>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>

							<ActiveLink href="/media">Media</ActiveLink>

							<ActiveLink href="/about">About</ActiveLink>

							{/* <NavItem>
								<Link prefetch href="/sendgrid" passHref>
									<NavLink>SendGrid</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/test" passHref>
									<NavLink>Test Page</NavLink>
								</Link>
							</NavItem> */}
						</Nav>
						<Div className="mobile-nav-contact-box">
							<Div className="lang-links">
								<Link prefetch href="/" passHref>
									<A className="active">EN</A>
								</Link>
								<Link prefetch href="/" passHref>
									<A className="">ES</A>
								</Link>
							</Div>
							<Div className="text">
								<H6 fontWeight="400">
									<Small>CONTACT</Small>
								</H6>
								<H6>
									<A
										className="px-2"
										data-auto-recognition="true"
										data-content="info@deepcast.ai"
										href="mailto:info@deepcast.ai"
										data-type="mail"
									>
										<Small>*info@deepcast.ai</Small>
									</A>

									<br />
									<A
										className="px-2"
										href="tel:18324313292"
										data-content="18324313292"
										data-type="phone"
									>
										<Small>*(832)431-3292</Small>
									</A>
								</H6>

								{/* <H6>
									<Small>*info@deepcast.ai</Small>
									<br />
									<Small>*(832)431-3292</Small>
								</H6> */}

								<H6 className="address">
									<Small>
										800 Town and Country Blvd #300, <br />
										Houston, TX 77024
									</Small>
								</H6>
							</Div>
							<Div className="buttons">
								<ModalForm buttonLabel="Request Demo">Request Demo</ModalForm>
								<Link prefetch href="/" passHref>
									<Button className="btn pl-5 pr-5 mt-2">Login</Button>
								</Link>
							</Div>
						</Div>
					</Collapse>
				</MainNavbar>
			</div>
		);
	}
}

export default withRouter(MobileNav);
