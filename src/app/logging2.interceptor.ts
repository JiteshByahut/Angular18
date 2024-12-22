import { HttpEvent, HttpEventType, HttpHandler, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";


export function Logging2Interceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    return next(req).pipe(tap(event=>{
        if(event.type== HttpEventType.Response){
            // Loog response
            console.log('Response: '+ req.url + ' status: '+ event.status);
        }
    }));
}