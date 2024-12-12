// user-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  standalone:false
})
export class UserEditComponent implements OnInit {
  user: any = {};

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(userId).subscribe((res:any) => {
    this.user = res.data;
    });
  }

  saveChanges() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.router.navigate(['/user-management/user-management-list']);
    });
  }

  
}
