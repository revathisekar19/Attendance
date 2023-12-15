import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    NgIf,
    NgForOf,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  displayedColumns=['customerName','expenseHead','expenseCategory','expenseAmount','dateAndTime','attachment'];
  expenseForm: FormGroup = this.fb.group({
    customerName: ['', Validators.required],
    expenseHead: ['', Validators.required],
    expenseCategory: ['', Validators.required],
    expenseAmount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    dateAndTime: ['', Validators.required],
    attachment: [null]
  });
  expenses: any[] = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
  onSubmit() {
    console.log('Form submitted:', this.expenseForm.value);
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      console.log('New Expense:', newExpense);
      this.expenses.push(newExpense);
      console.log('Expenses Array:', this.expenses);
      this.expenseForm.reset();
    }
  }
  onReset(){
    this.expenseForm.reset();
  }
  getAttachmentUrl(attachmentFileName: string): string {
    return `/assets/attachments/${attachmentFileName}`;
  }
}
