/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
  const $fetch: typeof import('ofetch')['$fetch']
  const afterAll: typeof import('vitest')['afterAll']
  const afterEach: typeof import('vitest')['afterEach']
  const appendCorsHeaders: typeof import('h3')['appendCorsHeaders']
  const appendCorsPreflightHeaders: typeof import('h3')['appendCorsPreflightHeaders']
  const appendHeader: typeof import('h3')['appendHeader']
  const appendHeaders: typeof import('h3')['appendHeaders']
  const appendResponseHeader: typeof import('h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('h3')['appendResponseHeaders']
  const assert: typeof import('vitest')['assert']
  const assertMethod: typeof import('h3')['assertMethod']
  const beforeAll: typeof import('vitest')['beforeAll']
  const beforeEach: typeof import('vitest')['beforeEach']
  const callNodeListener: typeof import('h3')['callNodeListener']
  const chai: typeof import('vitest')['chai']
  const clearResponseHeaders: typeof import('h3')['clearResponseHeaders']
  const clearSession: typeof import('h3')['clearSession']
  const createApp: typeof import('h3')['createApp']
  const createAppEventHandler: typeof import('h3')['createAppEventHandler']
  const createError: typeof import('h3')['createError']
  const createEvent: typeof import('h3')['createEvent']
  const createEventStream: typeof import('h3')['createEventStream']
  const createRouter: typeof import('h3')['createRouter']
  const day: typeof import('./server/utils/date')['day']
  const defaultContentType: typeof import('h3')['defaultContentType']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineFallbackSource: typeof import('./server/utils/source')['defineFallbackSource']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineNodeListener: typeof import('h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('h3')['defineNodeMiddleware']
  const defineRSSHubSource: typeof import('./server/utils/source')['defineRSSHubSource']
  const defineRSSSource: typeof import('./server/utils/source')['defineRSSSource']
  const defineRequestMiddleware: typeof import('h3')['defineRequestMiddleware']
  const defineResponseMiddleware: typeof import('h3')['defineResponseMiddleware']
  const defineSource: typeof import('./server/utils/source')['defineSource']
  const defineWebSocket: typeof import('h3')['defineWebSocket']
  const defineWebSocketHandler: typeof import('h3')['defineWebSocketHandler']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const describe: typeof import('vitest')['describe']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const expect: typeof import('vitest')['expect']
  const fetchWithEvent: typeof import('h3')['fetchWithEvent']
  const fromNodeMiddleware: typeof import('h3')['fromNodeMiddleware']
  const fromPlainHandler: typeof import('h3')['fromPlainHandler']
  const fromWebHandler: typeof import('h3')['fromWebHandler']
  const getCookie: typeof import('h3')['getCookie']
  const getHeader: typeof import('h3')['getHeader']
  const getHeaders: typeof import('h3')['getHeaders']
  const getMethod: typeof import('h3')['getMethod']
  const getProxyRequestHeaders: typeof import('h3')['getProxyRequestHeaders']
  const getQuery: typeof import('h3')['getQuery']
  const getRequestFingerprint: typeof import('h3')['getRequestFingerprint']
  const getRequestHeader: typeof import('h3')['getRequestHeader']
  const getRequestHeaders: typeof import('h3')['getRequestHeaders']
  const getRequestHost: typeof import('h3')['getRequestHost']
  const getRequestIP: typeof import('h3')['getRequestIP']
  const getRequestPath: typeof import('h3')['getRequestPath']
  const getRequestProtocol: typeof import('h3')['getRequestProtocol']
  const getRequestURL: typeof import('h3')['getRequestURL']
  const getRequestWebStream: typeof import('h3')['getRequestWebStream']
  const getResponseHeader: typeof import('h3')['getResponseHeader']
  const getResponseHeaders: typeof import('h3')['getResponseHeaders']
  const getResponseStatus: typeof import('h3')['getResponseStatus']
  const getResponseStatusText: typeof import('h3')['getResponseStatusText']
  const getRouterParam: typeof import('h3')['getRouterParam']
  const getRouterParams: typeof import('h3')['getRouterParams']
  const getSession: typeof import('h3')['getSession']
  const getValidatedQuery: typeof import('h3')['getValidatedQuery']
  const getValidatedRouterParams: typeof import('h3')['getValidatedRouterParams']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const handleCors: typeof import('h3')['handleCors']
  const isCorsOriginAllowed: typeof import('h3')['isCorsOriginAllowed']
  const isError: typeof import('h3')['isError']
  const isEvent: typeof import('h3')['isEvent']
  const isEventHandler: typeof import('h3')['isEventHandler']
  const isMethod: typeof import('h3')['isMethod']
  const isPreflightRequest: typeof import('h3')['isPreflightRequest']
  const isStream: typeof import('h3')['isStream']
  const isWebResponse: typeof import('h3')['isWebResponse']
  const it: typeof import('vitest')['it']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const logger: typeof import('./server/utils/logger')['logger']
  const ofetch: typeof import('ofetch')['ofetch']
  const parseCookies: typeof import('h3')['parseCookies']
  const promisifyNodeListener: typeof import('h3')['promisifyNodeListener']
  const proxyRequest: typeof import('h3')['proxyRequest']
  const readBody: typeof import('h3')['readBody']
  const readFormData: typeof import('h3')['readFormData']
  const readMultipartFormData: typeof import('h3')['readMultipartFormData']
  const readRawBody: typeof import('h3')['readRawBody']
  const readValidatedBody: typeof import('h3')['readValidatedBody']
  const removeResponseHeader: typeof import('h3')['removeResponseHeader']
  const rss2json: typeof import('./server/utils/rss2json')['rss2json']
  const sanitizeStatusCode: typeof import('h3')['sanitizeStatusCode']
  const sanitizeStatusMessage: typeof import('h3')['sanitizeStatusMessage']
  const sealSession: typeof import('h3')['sealSession']
  const send: typeof import('h3')['send']
  const sendError: typeof import('h3')['sendError']
  const sendIterable: typeof import('h3')['sendIterable']
  const sendNoContent: typeof import('h3')['sendNoContent']
  const sendProxy: typeof import('h3')['sendProxy']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const sendStream: typeof import('h3')['sendStream']
  const sendWebResponse: typeof import('h3')['sendWebResponse']
  const serveStatic: typeof import('h3')['serveStatic']
  const setCookie: typeof import('h3')['setCookie']
  const setHeader: typeof import('h3')['setHeader']
  const setHeaders: typeof import('h3')['setHeaders']
  const setResponseHeader: typeof import('h3')['setResponseHeader']
  const setResponseHeaders: typeof import('h3')['setResponseHeaders']
  const setResponseStatus: typeof import('h3')['setResponseStatus']
  const splitCookiesString: typeof import('h3')['splitCookiesString']
  const suite: typeof import('vitest')['suite']
  const test: typeof import('vitest')['test']
  const toEventHandler: typeof import('h3')['toEventHandler']
  const toNodeListener: typeof import('h3')['toNodeListener']
  const toPlainHandler: typeof import('h3')['toPlainHandler']
  const toWebHandler: typeof import('h3')['toWebHandler']
  const toWebRequest: typeof import('h3')['toWebRequest']
  const tranformToUTC: typeof import('./server/utils/date')['tranformToUTC']
  const unsealSession: typeof import('h3')['unsealSession']
  const updateSession: typeof import('h3')['updateSession']
  const useBase: typeof import('h3')['useBase']
  const useSession: typeof import('h3')['useSession']
  const vi: typeof import('vitest')['vi']
  const vitest: typeof import('vitest')['vitest']
  const writeEarlyHints: typeof import('h3')['writeEarlyHints']
}