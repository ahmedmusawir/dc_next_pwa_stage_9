import React, { Component } from 'react';
import Link from 'next/link';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
	Layout,
	PageContainer,
	BlogTile,
	PageBackground,
} from 'components/layout';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Img,
	Div,
	Form,
	FormGroup,
	Button,
	Input,
	Section,
	Block,
	Paragraph,
	Small,
	SectionBackground,
} from 'components/general';

let prev = 0;
let next = 0;
let last = 0;
let first = 0;
export class MediaWithPagination extends Component {
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
				<Section
					type="grid"
					gridStart="768px"
					className="media-posts-section mb-5"
				>
					<Block gridSize="lg">
						<Link href="/article">
							<BlogTile bgImg="/static/images/blog/cover-1.jpg">
								<Paragraph padding="0" className="post-header">
									<H6 light>This is Post 2 Title</H6>
									<H6 light italic>
										<Small>Feb 9, 2019</Small>
									</H6>
								</Paragraph>
								<aside />
							</BlogTile>
						</Link>
					</Block>
					{currentTodos.map((todo, index) => {
						return (
							<Block gridSize="sm" key={index}>
								<Link href="/article">
									<BlogTile bgImg={todo.image}>
										<Paragraph padding="0" className="post-header">
											<H6 light>{todo.title}</H6>
											<H6 light italic>
												<Small>{todo.date}</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
						);
					})}
				</Section>
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

export default MediaWithPagination;
