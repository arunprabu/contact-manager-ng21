import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <!-- will use template driven forms for simplicity -->
      <form
        #loginForm="ngForm"
        class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        (ngSubmit)="handleLogin(loginForm)"
      >
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>

        <!-- Username Field -->
        <div class="mb-6">
          <label for="username" class="block text-gray-700 font-semibold mb-2"> Username </label>
          <input
            id="username"
            type="text"
            ngModel
            name="username"
            placeholder="Enter your username"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Password Field -->
        <div class="mb-8">
          <label for="password" class="block text-gray-700 font-semibold mb-2"> Password </label>
          <input
            id="password"
            type="password"
            ngModel
            name="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Sign In
        </button>

        <!-- Footer Link -->
        <p class="text-center text-gray-600 text-sm mt-4">
          Don't have an account?
          <a routerLink="/" class="text-blue-500 hover:text-blue-600 font-semibold"> Sign up </a>
        </p>
      </form>
    </div>
  `,
  styles: ``,
})
export class Login {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  handleLogin(loginForm: NgForm) {
    // loginForm will have many properties incl dirty, touched, valid, etc
    console.log(loginForm.value);

    // send the above credentials to auth service
    this.authService.login(loginForm.value).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        // let's save the token in localStorage
        localStorage.setItem('token', response.accessToken);
        // let's redirect the user to specified page or home page
        const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');

        this.router.navigateByUrl(redirectTo || '/');
      },
      error: (error) => {
        console.error('Login failed:', error);
        // handle login error, e.g., show error message to user
      },
    });
  }
}
