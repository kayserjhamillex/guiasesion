import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: SocialUser;
  constructor(
    private userSubject: UserServiceService
  ) { }

  ngOnInit() {
    this.userSubject.getUser().subscribe(
      (user) => this.user = user
    );
  }

}
