import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { PageContainer, BlogTile } from 'components/layout';
import { H6, Div, Section, Block, Paragraph, Small } from 'components/general';

const StyledPagination = styled(Pagination)`
	.page-item.active .page-link {
		background-color: dodgerblue;
		border-color: dodgerblue;
	}
	@media (max-width: 640px) {
		.page-item {
			font-size: 0.7rem;
			a.page-link {
				font-size: 0.7rem;
			}
		}
	}
`;

let prev = 0;
let next = 0;
let last = 0;
let first = 0;

export class MediaWithPagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			postsPerPage: 10,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleLastClick = this.handleLastClick.bind(this);
		this.handleFirstClick = this.handleFirstClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			currentPage: this.props.currentPage,
			postsPerPage: this.props.postsPerPage,
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
		let { currentPage, postsPerPage } = this.state;

		const { posts } = this.props;

		// Logic for displaying current posts
		let indexOfLastPost = currentPage * postsPerPage;
		let indexOfFirstPost = indexOfLastPost - postsPerPage;
		let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
		prev = currentPage > 0 ? currentPage - 1 : 0;
		last = Math.ceil(posts.length / postsPerPage);
		next = last === currentPage ? currentPage : currentPage + 1;

		// Logic for displaying page numbers
		let pageNumbers = [];
		for (let i = 1; i <= last; i++) {
			pageNumbers.push(i);
		}

		return (
			<React.Fragment>
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
					{currentPosts.map((post, index) => {
						return (
							<Block gridSize="sm" key={index}>
								<Link href="/article">
									<BlogTile bgImg={post.image}>
										<Paragraph padding="0" className="post-header">
											<H6 light>{post.title}</H6>
											<H6 light italic>
												<Small>{post.date}</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
						);
					})}
				</Section>
				<Section height="10rem">
					<Block className="text-center">
						<Paragraph>
							<Div className="media-pagination">
								<StyledPagination>
									<PaginationItem className="d-none">
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

									<PaginationItem className="d-none">
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
								</StyledPagination>
							</Div>
							<hr />
						</Paragraph>
					</Block>
				</Section>
			</React.Fragment>
		);
	}
}

export default MediaWithPagination;
