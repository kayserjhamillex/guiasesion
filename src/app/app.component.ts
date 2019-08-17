import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: SocialUser;
  title = 'logeo';
  constructor(
    private userSubject: UserServiceService
  ) {}
  ngOnInit(): void {
    this.userSubject.getUser().subscribe(
      (user) => this.user = user
    );
  }

}
