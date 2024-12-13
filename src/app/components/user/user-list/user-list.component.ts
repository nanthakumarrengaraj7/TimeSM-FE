import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone:false
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Original list of users
  filteredUsers: any[] = []; // Filtered list of users
  searchTerm: string = ''; // For searching by username
  departments: string[] = []; // Example department list
  businessUnits: string[] = [];
  selectedDepartment: string = ''; // For filtering by department
  selectedBusinessUnit: string = ''; 

  constructor(private userService: UserService,private router:Router) {}

  ngOnInit() {
    this.getUserList();
  }

  // Function to fetch users
  getUserList() {
    this.userService.getUsers().subscribe((res:any) => {
      this.users = res.users;
      this.users.forEach((element:any) => {
        if(!this.departments.includes(element.department)){
          this.departments.push(element.department);
        }
        if(!this.businessUnits.includes(element.businessUnit)){
          this.businessUnits.push(element.businessUnit);
        }
      });
      this.filteredUsers = this.users; // Initialize filtered list
    });
  }

  // Function to filter users
  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = this.searchTerm
        ? user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesDepartment = this.selectedDepartment
        ? user.department === this.selectedDepartment
        : true;

      const matchesBusinessUnit = this.selectedBusinessUnit
        ? user.businessUnit === this.selectedBusinessUnit
        : true;

      return matchesSearch && matchesDepartment && matchesBusinessUnit;
    });
  }

  adduser(){
    this.router.navigate(['/user-management/user-management-add']);
  }
  // Function to delete a user
  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(() => {
      this.getUserList();
    });
  }

  // Placeholder for edit user functionality
  editUser(userId: any) {
    this.router.navigate(['/user-management/user-management-edit/'+userId]);
  }
}
