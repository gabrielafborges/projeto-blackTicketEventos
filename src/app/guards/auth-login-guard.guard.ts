import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authLoginGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('accessToken')

  if(token){
    console.log(`token : ${token}`);
    return true;
  }else{
    console.log('err');
    return false;
  }
};
