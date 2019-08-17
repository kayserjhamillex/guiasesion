import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _user: BehaviorSubject<SocialUser>;

  constructor() { 
    //forma 1
    const jsonuser= localStorage.getItem('userKey');
    const user = JSON.parse(jsonuser);
// forma 2
    // this._user = new BehaviorSubject<SocialUser>(null);
    if (user) {
      this._user =new BehaviorSubject<SocialUser>(user);
    }
    else
    {
      this._user =new BehaviorSubject<SocialUser>(null);
    }
  }
  public getUser(): Observable<SocialUser> {
    return this._user.asObservable();
  }

  public setUSer(user: SocialUser): void {
    let jsonuser = JSON.stringify(user);
    localStorage.setItem('userKey',jsonuser)
    this._user.next(user);
  }

}
