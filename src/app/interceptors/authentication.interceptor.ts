import { HttpInterceptorFn } from '@angular/common/http';


export const interceptorAuth: HttpInterceptorFn = (request, next) => {

  const token = localStorage.getItem('accessToken');

  if (!token){
    return next(request);
  } 

  const requestToken = request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(requestToken);
};