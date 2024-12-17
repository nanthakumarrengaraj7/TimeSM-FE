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
    password:'',
    email: '',
    phone: '',
    department: '',
    businessUnit: ''
  };
showConfirmation: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    this.user.password=this.generatePassword(12);
    this.showConfirmation = true;

  }
  back(){
    this.router.navigate(['/user-management/user-management-list'])
  }

  generatePassword(length: number = 12): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  addUserWithPassword(){
    this.showConfirmation=false;
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigate(['/user-management/user-management-list']);
    });
  }
}
