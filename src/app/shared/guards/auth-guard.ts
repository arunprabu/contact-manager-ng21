import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // doing dep injection

  console.log(state.url);
  // guard should guide the users to login page if not authenticated

  if (localStorage.getItem('token')) {
    // redirect the user to the appropriate page based on the route they are trying to access
    return true;
  } else {
    // redirect to login page
    router.navigate(['/auth/login'], {
      queryParams: { redirectTo: state.url },
    });
    return false;
  }
};
