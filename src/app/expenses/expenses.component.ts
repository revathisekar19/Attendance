import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {AddComponent} from "../add/add.component";
import {ExpenseComponent} from "../expense/expense.component";

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    AddComponent,
    ExpenseComponent
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {

}
