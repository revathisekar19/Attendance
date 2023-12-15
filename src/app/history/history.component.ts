import { Component } from '@angular/core';
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  displayedColumns: string[] = ['emp ID', 'date', 'status',
    'check in time','check in location','check in selfie',
    'check out time','check out location','check out selfie'];

  maxDate = new Date();
  start: any;
  end: any;
}
