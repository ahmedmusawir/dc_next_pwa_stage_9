import NextI18Next from 'next-i18next';
// const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	otherLanguages: ['de', 'es'],
	localeSubpaths: false,
});

export default NextI18NextInstance;

/* Export class methods as named exports. This is a must! */
export const {
	i18n,
	appWithTranslation,
	withNamespaces,
	Link,
	Trans,
	Router,
} = NextI18NextInstance;
