import { Component } from '@angular/core';
import { TimeLogService } from '../../../../services/timelog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.css'
})
export class DashboardViewComponent {
onPeriodChange(_t6: string) {
throw new Error('Method not implemented.');
}
  periods: ('Day' | 'Week' | 'Month' | 'Year')[] = ['Day', 'Week', 'Month', 'Year'];
  selectedPeriod: 'Day' | 'Week' | 'Month' | 'Year' = 'Day';
  chartData: { name: string; series: { name: string; value: number }[] }[] = [];
  dataByPeriod: {
    [key in 'Day' | 'Week' | 'Month' | 'Year']: { name: string; current: number; previous: number }[];
  } = {
    Day: [
      { name: 'Task A', current: 5, previous: 3 },
      { name: 'Task B', current: 3, previous: 2 },
      { name: 'Task C', current: 2, previous: 1 },
    ],
    Week: [
      { name: 'Task A', current: 25, previous: 20 },
      { name: 'Task B', current: 15, previous: 10 },
      { name: 'Task C', current: 10, previous: 8 },
    ],
    Month: [
      { name: 'Task A', current: 100, previous: 80 },
      { name: 'Task B', current: 70, previous: 60 },
      { name: 'Task C', current: 30, previous: 25 },
    ],
    Year: [
      { name: 'Task A', current: 1200, previous: 1100 },
      { name: 'Task B', current: 800, previous: 750 },
      { name: 'Task C', current: 400, previous: 350 },
    ],
  };
  
  colorScheme = 'cool'; 

  userData: any;
 filterType: { type: string } = { type: 'Day' }; 

  constructor(private timeLogService: TimeLogService, private router: Router) {
    this.updateChartData();
    const userdata = localStorage.getItem('user');
    if (userdata) {
      this.userData = JSON.parse(userdata);
    } else {
      this.router.navigate(['/login']); 
    }
  }

  updateChartData(): void {
    this.chartData = this.dataByPeriod[this.selectedPeriod].map((task) => ({
      name: task.name,
      series: [
        { name: 'Current', value: task.current },
        { name: 'Previous', value: task.previous },
      ],
    }));
  }

}
