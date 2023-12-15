import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from "@angular/material/tabs";
import {AttendanceComponent} from "./attendance/attendance.component";
import {HistoryComponent} from "./history/history.component";
import {ExpenseComponent} from "./expense/expense.component";
import {AddComponent} from "./add/add.component";
import {ExpensesComponent} from "./expenses/expenses.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, AttendanceComponent, HistoryComponent, ExpenseComponent, AddComponent, ExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
