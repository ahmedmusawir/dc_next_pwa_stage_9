import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

let prev = 0;
let next = 0;
let last = 0;
let first = 0;
export class MediaPagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			todosPerPage: 10,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleLastClick = this.handleLastClick.bind(this);
		this.handleFirstClick = this.handleFirstClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			currentPage: this.props.currentPage,
			todosPerPage: this.props.todosPerPage,
		});
	}

	handleClick(event) {
		event.preventDefault();
		this.setState({
			currentPage: Number(event.target.id),
		});
	}

	handleLastClick(event) {
		event.preventDefault();
		this.setState({
			currentPage: last,
		});
	}
	handleFirstClick(event) {
		event.preventDefault();
		this.setState({
			currentPage: 1,
		});
	}
	render() {
		let { currentPage, todosPerPage } = this.state;

		const { todos } = this.props;

		// console.log(todos);
		// Logic for displaying current todos
		let indexOfLastTodo = currentPage * todosPerPage;
		let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
		let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
		prev = currentPage > 0 ? currentPage - 1 : 0;
		last = Math.ceil(todos.length / todosPerPage);
		next = last === currentPage ? currentPage : currentPage + 1;

		// Logic for displaying page numbers
		let pageNumbers = [];
		for (let i = 1; i <= last; i++) {
			pageNumbers.push(i);
		}

		return (
			<div className="mt-5">
				<ul className="list-group">
					{currentTodos.map((todo, index) => {
						return (
							<li className="list-group-item" key={index}>
								{todo}
							</li>
						);
					})}
				</ul>
				<ul id="page-numbers">
					<nav>
						<Pagination>
							<PaginationItem>
								{prev === 0 ? (
									<PaginationLink disabled>First</PaginationLink>
								) : (
									<PaginationLink
										onClick={this.handleFirstClick}
										id={prev}
										href={prev}
									>
										First
									</PaginationLink>
								)}
							</PaginationItem>
							<PaginationItem>
								{prev === 0 ? (
									<PaginationLink disabled>Prev</PaginationLink>
								) : (
									<PaginationLink
										onClick={this.handleClick}
										id={prev}
										href={prev}
									>
										Prev
									</PaginationLink>
								)}
							</PaginationItem>
							{pageNumbers.map((number, i) => (
								<Pagination key={i}>
									<PaginationItem
										active={
											pageNumbers[currentPage - 1] === number ? true : false
										}
									>
										<PaginationLink
											onClick={this.handleClick}
											href={number}
											key={number}
											id={number}
										>
											{number}
										</PaginationLink>
									</PaginationItem>
								</Pagination>
							))}

							<PaginationItem>
								{currentPage === last ? (
									<PaginationLink disabled>Next</PaginationLink>
								) : (
									<PaginationLink
										onClick={this.handleClick}
										id={pageNumbers[currentPage]}
										href={pageNumbers[currentPage]}
									>
										Next
									</PaginationLink>
								)}
							</PaginationItem>

							<PaginationItem>
								{currentPage === last ? (
									<PaginationLink disabled>Last</PaginationLink>
								) : (
									<PaginationLink
										onClick={this.handleLastClick}
										id={pageNumbers[currentPage]}
										href={pageNumbers[currentPage]}
									>
										Last
									</PaginationLink>
								)}
							</PaginationItem>
						</Pagination>
					</nav>
				</ul>
			</div>
		);
	}
}

export default MediaPagination;
