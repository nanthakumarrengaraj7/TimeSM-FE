// user-add.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  standalone:false
})
export class UserAddComponent {
  user = {
    username: '',
    email: '',
    phone: '',
    department: '',
    businessUnit: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigate(['/user-management/user-management-list']);
    });
  }
}
