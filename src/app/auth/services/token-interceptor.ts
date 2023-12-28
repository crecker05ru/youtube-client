import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { environment } from 'src/environments/environment';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private apiKey = environment.apiKey;

  private BaseUrl = environment.apiUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<SearchResponse>> {
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', authToken)
    // });

    const newReq = req.clone({ setParams: { key: this.apiKey }, url: `${this.BaseUrl}${req.url}` });
    // req.url = this.searchUrl;
    // req.params.set('key', this.apiKey);
    return next.handle(newReq);
  }
}
