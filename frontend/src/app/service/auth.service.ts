import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

export interface IAuthModel {
  success: boolean;
  accessToken: string;
  user: User,
}

export interface ILoginData {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl;

  loginUrl: string = '';

  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  access_token$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginUrl = `${this.apiUrl}login`;

    const loginInfo = sessionStorage.getItem('login');
    console.log('loginInfo', loginInfo)
    if (loginInfo) {
      const loginObject = JSON.parse(loginInfo);
      this.access_token$.next(loginObject.accessToken);
      this.user$.next(loginObject.user);
    }

    this.user$.subscribe({
      next: user => {
        if (user) {
          this.router.navigate(['/', 'calorie-chart']);
        } else {
          this.router.navigate(['/', 'login']);
          this.access_token$.next('');
          sessionStorage.removeItem('login');
        }
      }
    });

  }

  login(loginData: ILoginData): void {
    this.http.post<IAuthModel>(this.loginUrl, loginData).subscribe({
      next: (response: IAuthModel) => {
        console.log(response)
        this.user$.next(response.user);
        this.access_token$.next(response.accessToken);
        sessionStorage.setItem('login', JSON.stringify(response));
      },
      error: (err) => console.error(err),
    });
  }

  logout(): void {
    this.user$.next(null);
  }

}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from '../model/user';
// import { ConfigService } from './config.service';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   currentUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null)
//   lastToken: string = '';
//   loginUrl: string = `${environment.apiUrl}login`;

//   constructor(
//     private config: ConfigService,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     if (localStorage['currentUser']) {
//       const user: User = JSON.parse(localStorage['currentUser']);
//       this.lastToken = user.accessToken || '';
//       this.currentUserSubject$.next(user);
//     }
//   }

//   login(loginData: User): Observable<User | null> {
//     return this.http.post<{ user: User, accessToken: string }>(
//       this.loginUrl, loginData
//     ).pipe(
//       map(response => {
//         response.user = loginData
//         if (response.user && response.accessToken) {
//           this.lastToken = response.accessToken;
//           response.user.accessToken = response.accessToken;
//           this.currentUserSubject$.next(response.user);
//           localStorage['currentUser'] = JSON.stringify(response.user);
//           return response.user;
//         }
//         return null;
//       })
//     )
//   }

//   logout(): void {
//     this.lastToken = '';
//     this.currentUserSubject$.next(null);
//     localStorage.removeItem('currentUser');
//     this.router.navigate(['/', 'login']);
//   }
// }
