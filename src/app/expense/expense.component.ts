import {Component, ViewChild} from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule, MatDateRangePicker} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AddComponent} from "../add/add.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import{MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    MatSelectModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatProgressBarModule,
    MatListModule,
    MatMenuModule,
    AddComponent,
    RouterLinkActive,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
constructor(private router: Router) {}
  goToAdd(){
  this.router.navigate(['/add']);
  }
  displayedColumns: string[] = ['user', 'date', 'status',
    'category'];
}
