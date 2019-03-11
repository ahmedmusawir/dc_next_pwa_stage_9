import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import { A, H6, Img, Small, Div, Button, ModalForm } from 'components/general';
import ActiveLink from 'components/navigation/ActiveLink';
import MainSubNav from 'components/navigation/MainSubNav';
import { i18n, Link, withNamespaces } from 'i18n';
import { ButtonGroup } from 'reactstrap';

const MainNavbarContainer = styled.div`
	position: relative;
	width: 310px;

	.navbar {
		position: fixed;
		top: 0px;
	}
	.desktop-nav-divider {
		position: fixed;
		top: 400px;
		width: 307px;
		z-index: -1;
	}
	.nav-contact-box {
		position: fixed;
		top: 410px;
		padding-left: 3rem;

		.active {
			color: dodgerblue !important;
		}

		.lang-links {
			margin-top: 1.75rem;

			a {
				padding-right: 1rem;
			}
		}
		.text {
			margin-top: 3rem;

			.address {
				margin-top: 1rem;
			}
		}
		.buttons {
			margin-top: 1rem;
			.btn {
				margin-bottom: 0.5rem;
				width: 150px;
				background-color: transparent;
				color: #a8a8a8;
				font-weight: 300;
				border-radius: 0;
			}
			.btn.active {
				border: 1px solid dodgerblue;
			}
		}
	}
`;

const MainNavbar = styled(Navbar)`
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
	.dropdown-item {
		position: relative;
		padding: 1.25rem 1.5rem;
		z-index: 1;
	}
`;
const DCLogo = styled.div`
	padding-top: 4rem;
	padding-bottom: 2.5rem;
`;

export class MainNav extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer'],
		};
	}

	constructor(props) {
		super(props);

		this.state = {};

		if (i18n.language === 'en') {
			this.state = { rSelected: 1 };
		} else if (i18n.language === 'es') {
			this.state = { rSelected: 2 };
		}

		this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
	}

	onRadioBtnClick(rSelected) {
		this.setState({ rSelected });
		if (rSelected === 1) {
			i18n.changeLanguage((i18n.language = 'en'));
		} else if (rSelected === 2) {
			i18n.changeLanguage((i18n.language = 'es'));
		} else return;
	}

	render() {
		return (
			<MainNavbarContainer className="d-none d-lg-block" id="main-navigation">
				<MainNavbar color="" light className="navbar-expand-lg">
					<Nav className="ml-auto" navbar>
						<Link prefetch href="/" passHref>
							<NavbarBrand>
								<DCLogo>
									<Img
										src="/static/images/deepcast-logo.png"
										alt=""
										className=""
									/>
								</DCLogo>
							</NavbarBrand>
						</Link>

						<ActiveLink href="/">Home</ActiveLink>

						<MainSubNav buttonLabel="Product">Product</MainSubNav>

						<ActiveLink href="/media">Media</ActiveLink>

						<ActiveLink href="/about">About</ActiveLink>
					</Nav>
				</MainNavbar>

				<Div className="desktop-nav-divider">
					<hr />
				</Div>

				<Div className="nav-contact-box">
					<Div className="lang-links">
						<ButtonGroup>
							<Button
								color="light"
								onClick={() => this.onRadioBtnClick(1)}
								active={this.state.rSelected === 1}
							>
								EN
							</Button>
							<Button
								color="light"
								onClick={() => this.onRadioBtnClick(2)}
								active={this.state.rSelected === 2}
							>
								ES
							</Button>
						</ButtonGroup>
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

						<H6 className="address">
							<Small>
								800 Town and Country Blvd #300, <br />
								Houston, TX 77024
							</Small>
						</H6>
					</Div>
					<Div className="buttons">
						<ModalForm buttonLabel="Request Demo" className="">
							Request Demo
						</ModalForm>

						<br />
						<Link prefetch href="/" passHref>
							<Button className="btn">Login</Button>
						</Link>
					</Div>
				</Div>
			</MainNavbarContainer>
		);
	}
}

export default withNamespaces('common')(MainNav);
