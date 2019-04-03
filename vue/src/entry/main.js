/* eslint-disable */

/**
 * Configure `publicPath` at runtime.
 *
 * This allows the same build artifacts to be consumed across different environments / CDNs.
 * (e.g. testing.app.com/static/chunk01.js & production.app.com/static/chunk02.js)
 *
 * https://webpack.js.org/configuration/output/#output-publicpath
 * https://github.com/webpack/webpack/issues/2776#issuecomment-233208623
 */

 // Note: `__webpack_public_path` is a free variable; do not assign to window

 __webpack_public_path__ = window.microservicesCdnUrl
