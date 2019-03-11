import React from 'react';
import { withRouter } from 'next/router';
import { A, Li } from 'components/general';
// import { Router } from 'i18n';
const ActiveLink = ({ router, href, children }) => {
	(function prefetchPages() {
		if (typeof window !== 'undefined') {
			router.prefetch(router.pathname);
		}
	})();

	const handleClick = e => {
		e.preventDefault();
		router.push(href);
	};

	const isCurrentPath = router.pathname === href || router.asPath === href;

	return (
		<Li className="nav-item">
			<A
				href={href}
				onClick={handleClick}
				className={isCurrentPath ? 'nav-link active-nav-item' : 'nav-link'}
				alt=""
			>
				{children}
			</A>
		</Li>
	);
};

export default withRouter(ActiveLink);
