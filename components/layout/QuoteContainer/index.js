/**
 *
 * <QuoteContainer />
 *
 * A Quote Container for Customer Quotes etc.
 *
 */
import styled from 'styled-components';

export const QuoteContainer = styled.div`
	display: block;
	height: 400px;
	line-height: 1.5rem;
	color: white;
	background: url(/static/images/solution-quote-bg-mobile.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	padding-top: 4.8rem;
	padding-left: 2rem;
	padding-right: 1.5rem;

	@media (min-width: 400px) {
		height: 500px;
		background: url(/static/images/solution-quote-bg-mobile.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
		padding: 5rem;
	}

	@media (min-width: 500px) {
		background: url(/static/images/solution-quote-bg-2.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
		padding-top: 10rem;
		padding-left: 3rem;
	}
`;
export default QuoteContainer;
