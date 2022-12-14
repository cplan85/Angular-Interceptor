import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private userService: UsersService) {

    this.userService.obtainUser().subscribe( resp => {

      console.log( resp );
    }, err => {
      console.log('Error in app Component');
    })
  }
}
