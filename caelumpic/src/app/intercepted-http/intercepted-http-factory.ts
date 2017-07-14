import { RequestOptions, Http, XHRBackend } from '@angular/http';
import { InterceptedHttp } from './intercepted-http'

export function interceptedHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new InterceptedHttp(xhrBackend, requestOptions);
}