/**
 *
 * <ModalForm />
 *
 * A Simple Modal Container with Form and Props
 *
 */
import styled from 'styled-components';

import React from 'react';
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
} from 'reactstrap';

export class ModalForm extends React.Component {
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
		return (
			<div>
				<Form inline onSubmit={e => e.preventDefault()}>
					<Button className="btn btn-info text-info" onClick={this.toggle}>
						{this.props.buttonLabel}
					</Button>
				</Form>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>Request Demo</ModalHeader>
					<ModalBody>
						<Input
							type="text"
							placeholder="Your Name"
							required
							className="mb-2"
						/>
						<Input
							type="email"
							placeholder="Your Email"
							required
							className="mb-2"
						/>
						<Input type="textarea" placeholder="Your Message" rows={5} />
					</ModalBody>
					<ModalFooter>
						<Button color="info" onClick={this.toggle}>
							Send Message
						</Button>{' '}
						{/* <Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button> */}
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalForm;
