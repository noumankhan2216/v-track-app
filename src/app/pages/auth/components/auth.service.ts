import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { environment } from './../../../../environments/environment';

export interface AuthResponseData {
  message: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    type: string;
    updated_at: string;
    created_at: string;
    id: number;
  }
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) {
    const storedUser = JSON.parse(localStorage.getItem('userData') || 'null');
    this.user = new BehaviorSubject<User | null>(storedUser);
   }

  register(body: any) {
    return this.http.post(environment.url+'auth/signup', body);
  }
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(environment.url+'auth/signin', {
      email: email,
      password: password,
    })
    .pipe(catchError(this.handleError),
    tap( (resData) => {
      const expiresIn: number = 640000;
      this.handleAuthentication(
        resData.user.email,
        resData.user.id,
        resData.token,
        +expiresIn,
        resData.user.type
      )
    }))
  }

  private handleAuthentication(email: string, userId: number, token: string, expiresIn: number, type: string){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate,
      type
    );
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists!';
        break;
      case 'INVALID_PASSWORD':
        break;
    }
    return throwError(errorMessage);
  }
 }


