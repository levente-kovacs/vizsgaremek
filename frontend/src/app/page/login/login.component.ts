import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
// import { AuthService } from 'src/app/service/auth.service';
import { AuthService, ILoginData } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: ILoginData = {};

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.logout();
  }

  onLogin(): void {
    this.auth.login(this.loginData);
  }

  // user: User = new User();

  // @Output() currentUser: EventEmitter<User> = new EventEmitter<User>();

  // constructor(
  //   private auth: AuthService,
  //   private router: Router,
  // ) { }

  // ngOnInit(): void {
  // }

  // onLogin(): void {
  //   this.currentUser.emit(this.user);
  //   this.auth.login(this.user).subscribe(
  //     user => {
  //       if (user) {
  //         this.router.navigate(['calorie-chart']);
  //       }
  //     }
  //   );
  // }


}
