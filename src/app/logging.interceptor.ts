import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  // Log request
  console.log('Request: '+req.url);
  const newReq = req.clone({
    // Add auth tocken header
    headers: req.headers.append('Authorization', 'Bearer 123456875125')
  });
  console.log(newReq);
  return next(newReq);
};
