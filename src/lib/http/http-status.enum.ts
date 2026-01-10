/**
 * HTTP redirect status codes as defined by RFC 9110.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages|MDN} for more details.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc9110#section-15|RFC 9110, Section 15} for the official specification.
 */
export enum HttpRedirectStatus {
  /** In agent-driven content negotiation, the request has more than one possible response and the user agent or user should choose one of them. There is no standardized way for clients to automatically choose one of the responses, so this is rarely used. */
  MultipleChoices = 300,

  /** The URL of the requested resource has been changed permanently. The new URL is given in the response. */
  MovedPermanently = 301,

  /** This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future, so the same URI should be used by the client in future requests. */
  Found = 302,

  /** The server sent this response to direct the client to get the requested resource at another URI with a GET request. */
  SeeOther = 303,

  /** This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response. */
  NotModified = 304,

  /** DEPRECATED: Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy. */
  // UseProxy = 305,

  // 306 is unused

  /** The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the 302 Found response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the redirected request. */
  TemporaryRedirect = 307,

  /** This means that the resource is now permanently located at another URI, specified by the Location response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request. */
  PermanentRedirect = 308,
}