import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {

  }

  async signInWithFacebook() {
    await this.auth.facebookLogin();
    return this.afterSignIn();
  }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return this.afterSignIn();
  }

  private afterSignIn() {
    return this.router.navigate(['/']);
  }

}
