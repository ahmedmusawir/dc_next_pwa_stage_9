const { createServer } = require('http');
const path = require('path');
const next = require('next');
const routes = require('./routes');
// const nextI18NextMiddleware = require('next-i18next/middleware');
// const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = routes.getRequestHandler(app);

const PORT = process.env.PORT || 5001;

app.prepare().then(_ => {
	const server = createServer((req, res) => {
		if (req.url === '/sw.js' || req.url.startsWith('/precache-manifest')) {
			app.serveStatic(req, res, path.join(__dirname, '.next', req.url));
		} else {
			handle(req, res);
		}
	});

	// server.use(nextI18NextMiddleware(nextI18next));

	server.listen(PORT, err => {
		if (err) throw err;

		console.log(`App running on port ${PORT} \n http://localhost:${PORT}`);
	});
});
