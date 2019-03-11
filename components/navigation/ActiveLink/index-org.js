import React from 'react';
import { A, Li } from 'components/general';
import { Router } from 'i18n';
const ActiveLink = ({ href, children }) => {
	(function prefetchPages() {
		if (typeof window !== 'undefined') {
			Router.prefetch(Router.pathname);
		}
	})();

	const handleClick = e => {
		e.preventDefault();
		Router.push(href);
	};

	const isCurrentPath = Router.pathname === href || Router.asPath === href;

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

export default ActiveLink;
