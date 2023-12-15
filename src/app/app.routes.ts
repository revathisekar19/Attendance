import { Routes } from '@angular/router';
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AttendanceComponent} from "./attendance/attendance.component";
import {HistoryComponent} from "./history/history.component";
import {AddComponent} from "./add/add.component";

export const routes: Routes = [
  {path:'attendance',component:AttendanceComponent},
  {path:'history',component:HistoryComponent},
  {path:'add',component:AddComponent}
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
