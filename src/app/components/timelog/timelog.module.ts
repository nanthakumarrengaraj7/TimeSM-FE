import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimeLogRoutingModule } from './timelog-routing.module';
import { TimelogAddComponent } from './timelog-add/timelog-add.component';
import { TimelogListComponent } from './timelog-list/timelog-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { TimelogViewComponent } from './timelog-view/timelog-view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    TimelogAddComponent,
    TimelogListComponent,
    TimelogViewComponent
  ],
  imports: [
    TimeLogRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    NgxChartsModule
  ],
  providers: [AuthService, UserService, DatePipe]
})
export class TimeLogModule {}
