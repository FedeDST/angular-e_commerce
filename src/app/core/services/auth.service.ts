import { Injectable } from "@angular/core";
import { MOCK_USERS } from "../models/mock_user";
import { BehaviorSubject, delay, Observable, of, throwError } from "rxjs";
import { AuthUser } from "../models/auth_user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loggedInfo : AuthUser  = { logged: this.hasToken(), userInfo: { email: '', role: 'guest'}};
  private logged$ = new BehaviorSubject<AuthUser>(this.loggedInfo);
  user$ = this.logged$.asObservable();

  login(email: string, password: string): Observable<any> {
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      return throwError(() => new Error("Invalid credentials"));
    }
    const fakeToken = btoa(
      JSON.stringify({ email: user.email, role: user.role })
    );
    localStorage.setItem("auth_token", fakeToken);
    this.loggedInfo.logged = true;
    this.loggedInfo.userInfo.email = user.email;
    this.loggedInfo.userInfo.role = user.role;
    this.logged$.next(this.loggedInfo);
    return of(this.loggedInfo.logged).pipe(delay(500));
  }
  logout() {
    localStorage.removeItem("token");
    this.loggedInfo.logged = false;
    this.loggedInfo.userInfo = {email: '', role: 'guest'};
    this.logged$.next(this.loggedInfo);
  }

  isLogged() {
    return this.logged$.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem("token");
  }
  constructor() {}
}
