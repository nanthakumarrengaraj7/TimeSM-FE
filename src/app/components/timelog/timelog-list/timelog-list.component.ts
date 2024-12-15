import { Component, OnInit } from '@angular/core';
import { TimeLogService } from '../../../../services/timelog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timelog-list',
  standalone: false,
  
  templateUrl: './timelog-list.component.html',
  styleUrl: './timelog-list.component.css'
})
export class TimelogListComponent {
  logs: any[] = [];
  filteredLog: any[] = [];
  searchTerm: string = '';
  periods: ('Day' | 'Week' | 'Month' | 'Year')[] = ['Day', 'Week', 'Month', 'Year'];
  selectedPeriod: 'Day' | 'Week' | 'Month' | 'Year' = 'Day';
  chartData: { name: string; value: number }[] = [];
  isNotDay = true;

  dataByPeriod: { [key in 'Day' | 'Week' | 'Month' | 'Year']: { name: string; value: number }[] } = {
    Day: [
      { name: 'Task A', value: 5 },
      { name: 'Task B', value: 3 },
      { name: 'Task C', value: 2 },
    ],
    Week: [
      { name: 'Task A', value: 25 },
      { name: 'Task B', value: 15 },
      { name: 'Task C', value: 10 },
    ],
    Month: [
      { name: 'Task A', value: 100 },
      { name: 'Task B', value: 70 },
      { name: 'Task C', value: 30 },
    ],
    Year: [
      { name: 'Task A', value: 1200 },
      { name: 'Task B', value: 800 },
      { name: 'Task C', value: 400 },
    ],
  };
  totalHours: any;
  allProjectName: any;

  constructor(private timeLogService: TimeLogService,private router:Router) {}

  updateChartData(): void {
    this.chartData = this.dataByPeriod[this.selectedPeriod];
    console.log('sk', this.selectedPeriod)
    if(this.selectedPeriod !== 'Day'){
      this.isNotDay = true;
    } else {
      this.isNotDay = false;
    }
  }

  ngOnInit() {
    this.getLogList();
    this.updateChartData();
  }

  // Function to fetch users
  async getLogList() {
    this.timeLogService.getLogs().subscribe((res:any) => {
      this.logs = res?.data;
      this.filteredLog = this.logs; // Initialize filtered list
      this.totalHours = this.logs.reduce((sum, log) => sum + Number(log.hours), 0);
      this.allProjectName = this.logs.forEach((name, log) => ',' + name );
      console.log(this.allProjectName);
    });
  }

  // Function to filter users
  filterLogs() {
    this.filteredLog = this.logs.filter(log => {
      const matchesSearch = this.searchTerm
        ? log.username.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
      return matchesSearch;
    });
  }

  addlog(){
    this.router.navigate(['/timelog/timelog-add']);
  }
}