import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";



@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {


  displayedColumns: string[] = ['emp ID', 'date', 'status',
            'check in time','check in location','check in selfie',
            'check out time','check out location','check out selfie'];



}
