import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {AppRoutingModule} from "./app.routes";
import {MatTableModule} from "@angular/material/table";
import {AppComponent} from "./app.component";
import {AddComponent} from "./add/add.component";
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule
  ],
})
export class AppModule {}
