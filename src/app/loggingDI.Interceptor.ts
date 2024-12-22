import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class LoggingDIIntrerceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>>{
        return handler.handle(req);
    }
}